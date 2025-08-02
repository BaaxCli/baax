import fs from 'fs';
import chalk from 'chalk';
import { createCoreFiles } from './templates/core.js';
import { createDockerFiles } from './templates/docker.js';
import { createConfigFiles } from './templates/config.js';
import { createMiddlewareFiles } from './templates/middleware.js';
import { createDocumentationFiles } from './templates/documentation.js';
import { createModuleFiles } from './templates/modules.js';

export function setupExpressProject(projectName, modules, options = {}) {
    const { includeSwagger = true, includePostmanCollection = true } = options;
    
    console.log(chalk.blueBright(`\nCreating project structure for ${projectName}...\n`));

    // Create all necessary folders first
    const folders = [
        'src', 
        'src/config', 
        'src/controllers', 
        'src/middleware', 
        'src/models', 
        'src/routes',
        'src/utils',
        'src/services',
        'docs',
        'docker',
        'docker/mongo-init',  // Create this subdirectory
        'tests',
        'logs'
    ];
    
    folders.forEach((folder) => {
        fs.mkdirSync(folder, { recursive: true });
        console.log(chalk.green(`Created folder: ${folder}`));
    });

    // Create core application files
    createCoreFiles(projectName, modules, includeSwagger);
    
    // Create Docker configuration
    createDockerFiles(projectName, modules);
    
    // Create configuration files
    createConfigFiles(projectName, modules);
    
    // Create middleware files
    createMiddlewareFiles();
    
    // Create documentation files
    if (includeSwagger || includePostmanCollection) {
        createDocumentationFiles(projectName, modules, { includeSwagger, includePostmanCollection });
    }
    
    // Create module-specific files
    createModuleFiles(modules);

    console.log(chalk.blueBright(`\n Express project structure for ${projectName} created successfully!\n`));
}
