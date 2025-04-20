#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import ora from 'ora';
import { execSync } from 'child_process';
import fs from 'fs';
import { setupExpressProject } from './Express/index.js';

async function welcome() {
    console.log(
        gradient.pastel(
            figlet.textSync('BAAX', { horizontalLayout: 'full' })
        )
    );
}

async function askQuestions() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Enter your project name:',
            default: 'my-backend-app',
        },
        {
            type: 'list',
            name: 'framework',
            message: 'Select backend framework:',
            choices: ['Express.js', 'NestJS', 'Fastify'],
        },
        {
            type: 'list',
            name: 'database',
            message: 'Select database:',
            choices: ['MongoDB', 'PostgreSQL', 'MySQL'],
        },
        {
            type: 'confirm',
            name: 'docker',
            message: 'Do you want to set up Docker?',
            default: false,
        },
        {
            type: 'confirm',
            name: 'git',
            message: 'Do you want to initialize a Git repository?',
            default: true,
        },
        {
            type: 'input',
            name: 'modules',
            message: 'Enter module names (comma-separated):',
            default: 'user,auth',
        },
    ]);
    return answers;
}

async function createProject({ projectName, framework, database, modules, docker, git }) {
    const spinner = ora('Setting up your project...').start();

    try {
        fs.mkdirSync(projectName);
        process.chdir(projectName);



        if (framework === 'Express.js') {
            execSync('npm init -y', { stdio: 'ignore' });
            execSync('npm install express jsonwebtoken bcryptjs cors nodemon', { stdio: 'ignore' });
            const moduleList = modules.split(',').map((module) => module.trim());
            setupExpressProject(projectName, moduleList)
        } else if (framework === 'NestJS') {
            execSync('npm install -g @nestjs/cli', { stdio: 'ignore' });
            execSync('nest new . --skip-git', { stdio: 'inherit' });
        } else if (framework === 'Fastify') {
            execSync('npm init -y', { stdio: 'ignore' });
            execSync('npm install fastify', { stdio: 'ignore' });
        }

        if (database === 'MongoDB') {
            execSync('npm install mongoose', { stdio: 'ignore' });
        } else if (database === 'PostgreSQL') {
            execSync('npm install pg', { stdio: 'ignore' });
        } else if (database === 'MySQL') {
            execSync('npm install mysql2', { stdio: 'ignore' });
        }


        if (docker) {
            fs.writeFileSync('Dockerfile', `FROM node:14\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["node", "src/app.js"]`);
            fs.writeFileSync('.dockerignore', 'node_modules\nnpm-debug.log');
        }

        if (git) {
            execSync('git init', { stdio: 'ignore' });
            fs.writeFileSync('.gitignore', 'node_modules/\n.env\n');
        }

        spinner.succeed('Project setup complete!');
        console.log(chalk.greenBright('\nYour backend project is ready! 🚀'));
    } catch (error) {
        spinner.fail('Something went wrong! ❌');
        console.error(error);
    }
}

async function main() {
    await welcome();
    const answers = await askQuestions();
    await createProject(answers);
}

main();

