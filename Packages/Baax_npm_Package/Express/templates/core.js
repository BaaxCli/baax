import fs from 'fs';
import chalk from 'chalk';

export function createCoreFiles(projectName, modules, includeSwagger) {
    const files = [
        {
            path: 'src/app.js',
            content: `const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config');
const errorHandler = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');
${includeSwagger ? "const swaggerUi = require('swagger-ui-express');\nconst swaggerDocument = require('../docs/swagger.json');" : ''}

const app = express();

// Security middleware
app.use(helmet());
app.use(cors(config.cors));

// Rate limiting
app.use('/api', rateLimiter);

// Logging
app.use(morgan(config.logFormat));

// Body parsing
app.use(express.json({ limit: config.bodyLimit }));
app.use(express.urlencoded({ extended: true, limit: config.bodyLimit }));

${includeSwagger ? `// Swagger documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));` : ''}

// Routes
const routes = require('./routes');
app.use('/api', routes);

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        ${includeSwagger ? "documentation: '/docs'," : ''}
        version: '1.0.0'
    });
});

// Error handling
app.use(errorHandler);

module.exports = app;`
        },
        {
            path: 'src/server.js',
            content: `require('dotenv').config();
const app = require('./app');
const config = require('./config');
const mongoose = require('mongoose');

const PORT = config.port || 3000;

// Database connection
mongoose.connect(config.database.url, config.database.options)
    .then(() => {
        console.log('📦 Connected to MongoDB');
    })
    .catch((error) => {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    });

const server = app.listen(PORT, () => {
    console.log(\`🚀 Server running on port \${PORT}\`);
    console.log(\`📚 API docs available at http://localhost:\${PORT}/docs\`);
    console.log(\`🏥 Health check: http://localhost:\${PORT}/health\`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    server.close(() => {
        mongoose.connection.close();
        console.log('Process terminated');
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received');
    server.close(() => {
        mongoose.connection.close();
        console.log('Process terminated');
    });
});

module.exports = server;`
        },
        {
            path: 'src/routes/index.js',
            content: `const express = require('express');
const router = express.Router();

// Import module routes
${modules.map(module => `const ${module}Routes = require('./${module}.routes');`).join('\n')}

// Use module routes
${modules.map(module => `router.use('/${module.toLowerCase()}', ${module}Routes);`).join('\n')}

// API info
router.get('/', (req, res) => {
    res.json({
        message: 'API is running',
        version: '1.0.0',
        endpoints: [
            ${modules.map(module => `'/${module.toLowerCase()}'`).join(',\n            ')}
        ]
    });
});

module.exports = router;`
        },
        {
            path: 'package.json',
            content: `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "Express.js application scaffolded with Baax Blueprint Builder",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "docker:build": "docker build -t ${projectName} .",
    "docker:run": "docker run -p 3000:3000 ${projectName}",
    "docker:compose": "docker-compose up -d"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "morgan": "^1.10.0",
    "express-rate-limit": "^6.7.0",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.3.0",
    "dotenv": "^16.1.4"${includeSwagger ? ',\n    "swagger-ui-express": "^5.0.0",\n    "swagger-jsdoc": "^6.2.8"' : ''}
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.5.0",
    "supertest": "^6.3.3"
  }
}`
        },
        {
            path: 'README.md',
            content: `# ${projectName}

Express.js application scaffolded with Baax Blueprint Builder.

## Features

- 🚀 Express.js framework
- 🔒 Security middleware (Helmet, CORS, Rate limiting)
- 📊 Request logging with Morgan
- 🔑 JWT authentication ready
- 🐳 Docker support
- 📝 Comprehensive error handling
- 🧪 Testing setup with Jest
${includeSwagger ? '- 📚 Swagger/OpenAPI documentation' : ''}

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

### Production

\`\`\`bash
npm start
\`\`\`

### Docker

\`\`\`bash
# Build and run with Docker
npm run docker:build
npm run docker:run

# Or use Docker Compose
npm run docker:compose
\`\`\`

## API Endpoints

- \`GET /health\` - Health check
- \`GET /api\` - API information
${modules.map(module => `- \`GET /api/${module.toLowerCase()}\` - ${module} endpoints`).join('\n')}

${includeSwagger ? '## API Documentation\n\nSwagger UI is available at `/docs` when the server is running.' : ''}

## Configuration

Edit \`baax.config.js\` to customize your application settings.

## License

MIT`
        }
    ];

    files.forEach(({ path, content }) => {
        fs.writeFileSync(path, content);
        console.log(chalk.green(`Created file: ${path}`));
    });
}