#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import ora from 'ora';
import { setupExpressProject } from './Express/index.js';
import { setupFastifyProject } from './Fastify/index.js';

async function welcome() {
    console.log(chalk.blueBright.bold('\n Welcome to Baax - Backend Accelerator!\n'));
}

async function askQuestions() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Project name:',
            default: 'my-backend-app',
            validate: (input) => {
                if (/^[a-z0-9-_]+$/.test(input)) return true;
                return 'Project name must contain only lowercase letters, numbers, hyphens, and underscores';
            }
        },
        {
            type: 'list',
            name: 'framework',
            message: 'Choose your backend framework:',
            choices: [
                { name: ' Express.js', value: 'express' },
                { name: ' Fastify', value: 'fastify' },
                { name: ' NestJS (Coming Soon)', value: 'nestjs', disabled: true }
            ]
        },
        {
            type: 'list',
            name: 'database',
            message: 'Choose your database:',
            choices: [
                { name: 'MongoDB', value: 'mongodb' },
                { name: 'PostgreSQL (Coming Soon)', value: 'postgresql', disabled: true },
                { name: 'MySQL (Coming Soon)', value: 'mysql', disabled: true }
            ]
        },
        {
            type: 'input',
            name: 'modules',
            message: 'Enter module names (comma-separated):',
            default: 'user, auth',
            validate: (input) => {
                if (Array.isArray(input)) {
                    if (input.length === 0) {
                        return 'Please enter at least one module name';
                    }
                    return true;
                }
               if (!input.trim()) {
                    return 'Please enter at least one module name';
                }
                return true;
            },
            filter: (input) => {
                return input
                    .split(',')
                    .map(module => module.trim())
                    .filter(module => module.length > 0)
                    .map(module => module.toLowerCase());
            }
        },
        {
            type: 'confirm',
            name: 'includeSwagger',
            message: 'Include Swagger/OpenAPI documentation?',
            default: true
        },
        {
            type: 'confirm',
            name: 'includePostmanCollection',
            message: 'Generate Postman collection for API testing?',
            default: true
        }
    ]);

    // Display the processed modules for confirmation
    console.log(chalk.gray(`\nModules to be created: ${answers.modules.join(', ')}`));
    
    return answers;
}

async function createProject({ projectName, framework, database, modules, includeSwagger, includePostmanCollection }) {
    const spinner = ora('Setting up your project...').start();

    try {
        const projectPath = path.join(process.cwd(), projectName);

        if (fs.existsSync(projectPath)) {
            spinner.fail();
            console.log(chalk.red(`\n❌ Directory ${projectName} already exists!`));
            process.exit(1);
        }

        fs.mkdirSync(projectPath);
        process.chdir(projectPath);

        if (framework === 'express') {
            setupExpressProject(projectName, modules, { includeSwagger, includePostmanCollection });
        } else if (framework === 'fastify') {
            setupFastifyProject(projectName, modules, { includeSwagger, includePostmanCollection });
        } else {
            spinner.fail();
            console.log(chalk.red('Framework not yet supported'));
            process.exit(1);
        }

        spinner.succeed('Project setup complete!');
        console.log(chalk.greenBright('\nYour backend project is ready! 🚀'));
        console.log(chalk.yellow('\nNext steps:'));
        console.log(chalk.white(`  cd ${projectName}`));
        console.log(chalk.white('  npm install'));
        console.log(chalk.white('  npm run dev'));
        
        if (includeSwagger) {
            console.log(chalk.cyan(`  📚 API Documentation: http://localhost:3000/docs`));
        }
        
        if (includePostmanCollection) {
            console.log(chalk.cyan(`  📮 Import postman-collection.json into Postman for testing`));
        }
        
        console.log(chalk.gray(`\nCreated modules: ${modules.join(', ')}`));
        console.log(chalk.gray('\nHappy coding! 🚀\n'));
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

main().catch(console.error);

