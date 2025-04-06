#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import ora from 'ora';
import { execSync } from 'child_process';
import fs from 'fs';

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
    ]);
    return answers;
}

async function createProject({ projectName, framework, database }) {
    const spinner = ora('Setting up your project...').start();

    try {
        fs.mkdirSync(projectName);
        process.chdir(projectName);

        execSync('npm init -y', { stdio: 'ignore' });

        if (framework === 'Express.js') {
            execSync('npm install express', { stdio: 'ignore' });
        } else if (framework === 'NestJS') {
            execSync('npm install -g @nestjs/cli', { stdio: 'ignore' });
            execSync('nest new . --skip-git', { stdio: 'inherit' });
        } else if (framework === 'Fastify') {
            execSync('npm install fastify', { stdio: 'ignore' });
        }

        if (database === 'MongoDB') {
            execSync('npm install mongoose', { stdio: 'ignore' });
        } else if (database === 'PostgreSQL') {
            execSync('npm install pg', { stdio: 'ignore' });
        } else if (database === 'MySQL') {
            execSync('npm install mysql2', { stdio: 'ignore' });
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

