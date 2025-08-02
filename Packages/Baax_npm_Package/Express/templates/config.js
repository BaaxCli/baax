import fs from 'fs';
import chalk from 'chalk';

export function createConfigFiles(projectName, modules) {
    const files = [
        {
            path: 'src/config/index.js',
            content: `const baaxConfig = require('../../baax.config.js');

const config = {
    port: process.env.PORT || baaxConfig.server?.port || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
        url: process.env.DATABASE_URL || baaxConfig.database?.url,
        options: baaxConfig.database?.options || {}
    },
    cors: baaxConfig.cors || {
        origin: process.env.CORS_ORIGIN || '*',
        credentials: true
    },
    jwt: {
        secret: process.env.JWT_SECRET || baaxConfig.auth?.jwtSecret,
        expiresIn: baaxConfig.auth?.expiresIn || '24h'
    },
    bodyLimit: baaxConfig.server?.bodyLimit || '10mb',
    logFormat: baaxConfig.logging?.format || 'combined',
    rateLimit: baaxConfig.rateLimit || {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // limit each IP to 100 requests per windowMs
    }
};

module.exports = config;`
        },
        {
            path: 'baax.config.js',
            content: `module.exports = {
  projectName: '${projectName}',
  framework: 'express',
  
  server: {
    port: 3000,
    bodyLimit: '10mb'
  },
  
  database: {
    type: 'mongodb',
    url: 'mongodb://localhost:27017/${projectName}',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  
  auth: {
    jwtSecret: 'your-super-secret-jwt-key',
    expiresIn: '24h'
  },
  
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
  },
  
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  },
  
  logging: {
    format: 'combined',
    level: 'info'
  },
  
  modules: [${modules.map(m => `'${m}'`).join(', ')}]
};`
        },
        {
            path: '.env',
            content: `NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/${projectName}
JWT_SECRET=your-super-secret-jwt-key
CORS_ORIGIN=http://localhost:3000`
        },
        {
            path: '.gitignore',
            content: `# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs/
*.log

# Database
*.db
*.sqlite

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Docker
.dockerignore

# Build
dist/
build/

# Temporary files
tmp/
temp/`
        }
    ];

    files.forEach(({ path, content }) => {
        fs.writeFileSync(path, content);
        console.log(chalk.green(`Created file: ${path}`));
    });
}