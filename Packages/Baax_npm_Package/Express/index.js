import fs from 'fs';
import chalk from 'chalk';

export function setupExpressProject(projectName, modules) {
    console.log(chalk.blueBright(`\nCreating project structure for ${projectName}...\n`));

    // Create folder structure
    const folders = ['src', 'src/config', 'src/controllers', 'src/middleware', 'src/models', 'src/routes'];
    folders.forEach((folder) => {
        fs.mkdirSync(folder);
        console.log(chalk.green(`Created folder: ${folder}`));
    });

    // Create default files
    const files = [
        { path: 'src/app.js', content: `const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\nmodule.exports = app;` },
        { path: 'src/routes/index.js', content: `const express = require('express');\nconst router = express.Router();\n\n// Define your routes here\n\nmodule.exports = router;` },
        { path: 'src/middleware/index.js', content: `// Add your middleware here` },
        { path: 'src/config/index.js', content: `// Add your configuration here` },
        { path: '.gitignore', content: 'node_modules/\n.env\n' },
        { path: 'README.md', content: `# ${projectName}\n\n## Description\n\n## Installation\n\n## Usage\n\n## License\n` },
        { path: '.env', content: `PORT=3000\nDATABASE_URL=your-database-url` },
    ];

    files.forEach(({ path, content }) => {
        fs.writeFileSync(path, content);
        console.log(chalk.green(`Created file: ${path}`));
    });

    // Create module-specific files
    modules.forEach((module) => {
        const moduleFiles = [
            {
                path: `src/controllers/${module}.controller.js`,
                content: `// Controller for ${module}\n\nexports.get${module} = (req, res) => {\n    res.send('${module} data');\n};\n`,
            },
            {
                path: `src/models/${module}.model.js`,
                content: `// Model for ${module}\n\nconst mongoose = require('mongoose');\n\nconst ${module}Schema = new mongoose.Schema({\n    // Define schema here\n});\n\nmodule.exports = mongoose.model('${module}', ${module}Schema);\n`,
            },
            {
                path: `src/routes/${module}.routes.js`,
                content: `// Routes for ${module}\n\nconst express = require('express');\nconst router = express.Router();\nconst { get${module} } = require('../controllers/${module}.controller');\n\nrouter.get('/', get${module});\n\nmodule.exports = router;\n`,
            },
        ];

        moduleFiles.forEach(({ path, content }) => {
            fs.writeFileSync(path, content);
            console.log(chalk.green(`Created file: ${path}`));
        });
    });

    console.log(chalk.blueBright(`\nProject structure for ${projectName} created successfully!\n`));
}