import fs from 'fs';
import chalk from 'chalk';

export function setupFastifyProject(projectName, modules) {
    console.log(chalk.blueBright(`\nCreating Fastify project structure for ${projectName}...\n`));

    // Create folder structure
    const folders = [
        'src', 
        'src/config', 
        'src/controllers', 
        'src/middleware', 
        'src/models', 
        'src/routes',
        'src/utils',
        'src/services',
        'src/plugins',
        'docker',
        'tests',
        'logs'
    ];
    
    folders.forEach((folder) => {
        fs.mkdirSync(folder, { recursive: true });
        console.log(chalk.green(`Created folder: ${folder}`));
    });

    // Create Fastify-specific files
    const files = [
        {
            path: 'src/app.js',
            content: `const fastify = require('fastify');
const config = require('./config');

const build = (opts = {}) => {
    const app = fastify({
        logger: config.logging,
        trustProxy: true,
        ...opts
    });

    // Register plugins
    app.register(require('./plugins/cors'));
    app.register(require('./plugins/helmet'));
    app.register(require('./plugins/rateLimit'));
    app.register(require('./plugins/swagger'));
    app.register(require('./plugins/database'));

    // Register routes
    app.register(require('./routes'), { prefix: '/api' });

    // Health check
    app.get('/health', async (request, reply) => {
        return { 
            status: 'OK', 
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        };
    });

    // Error handler
    app.setErrorHandler(async (error, request, reply) => {
        const isDevelopment = config.nodeEnv === 'development';
        
        request.log.error(error);
        
        const response = {
            success: false,
            message: error.message || 'Internal Server Error',
            ...(isDevelopment && { stack: error.stack })
        };

        const statusCode = error.statusCode || error.status || 500;
        reply.status(statusCode).send(response);
    });

    return app;
};

module.exports = build;`
        },
        {
            path: 'src/server.js',
            content: `const build = require('./app');
const config = require('./config');

const start = async () => {
    const app = build();

    try {
        await app.listen({ 
            port: config.port, 
            host: config.host || '0.0.0.0' 
        });
        
        console.log(\`🚀 Fastify server running on port \${config.port}\`);
        console.log(\`📚 API docs available at http://localhost:\${config.port}/documentation\`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

// Graceful shutdown
const gracefulShutdown = async (signal) => {
    console.log(\`Received \${signal}, shutting down gracefully\`);
    process.exit(0);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

start();`
        },
        {
            path: 'src/config/index.js',
            content: `const baaxConfig = require('../../baax.config.js');

const config = {
    port: process.env.PORT || baaxConfig.server?.port || 3000,
    host: process.env.HOST || baaxConfig.server?.host || '0.0.0.0',
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
        url: process.env.DATABASE_URL || baaxConfig.database?.url,
        options: baaxConfig.database?.options || {}
    },
    cors: baaxConfig.cors || {
        origin: process.env.CORS_ORIGIN || true,
        credentials: true
    },
    jwt: {
        secret: process.env.JWT_SECRET || baaxConfig.auth?.jwtSecret,
        expiresIn: baaxConfig.auth?.expiresIn || '24h'
    },
    rateLimit: baaxConfig.rateLimit || {
        max: 100,
        timeWindow: '1 minute'
    },
    logging: baaxConfig.logging?.level === 'debug' ? {
        level: 'debug',
        prettyPrint: config.nodeEnv === 'development'
    } : {
        level: 'info'
    },
    swagger: {
        routePrefix: '/documentation',
        swagger: {
            info: {
                title: \`\${baaxConfig.projectName} API\`,
                description: 'API documentation',
                version: '1.0.0'
            },
            host: \`localhost:\${process.env.PORT || baaxConfig.server?.port || 3000}\`,
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json']
        },
        exposeRoute: true
    }
};

module.exports = config;`
        },
        {
            path: 'src/plugins/cors.js',
            content: `const config = require('../config');

module.exports = async function corsPlugin(fastify) {
    await fastify.register(require('@fastify/cors'), config.cors);
};`
        },
        {
            path: 'src/plugins/helmet.js',
            content: `module.exports = async function helmetPlugin(fastify) {
    await fastify.register(require('@fastify/helmet'));
};`
        },
        {
            path: 'src/plugins/rateLimit.js',
            content: `const config = require('../config');

module.exports = async function rateLimitPlugin(fastify) {
    await fastify.register(require('@fastify/rate-limit'), {
        max: config.rateLimit.max,
        timeWindow: config.rateLimit.timeWindow,
        errorResponseBuilder: function (request, context) {
            return {
                code: 429,
                error: 'Too Many Requests',
                message: \`Rate limit exceeded, retry in \${context.after}\`
            };
        }
    });
};`
        },
        {
            path: 'src/plugins/swagger.js',
            content: `const config = require('../config');

module.exports = async function swaggerPlugin(fastify) {
    await fastify.register(require('@fastify/swagger'), config.swagger);
    await fastify.register(require('@fastify/swagger-ui'), {
        routePrefix: '/documentation'
    });
};`
        },
        {
            path: 'src/plugins/database.js',
            content: `const config = require('../config');

module.exports = async function databasePlugin(fastify) {
    await fastify.register(require('@fastify/mongodb'), {
        forceClose: true,
        url: config.database.url
    });

    // Or for Mongoose
    // const mongoose = require('mongoose');
    // await mongoose.connect(config.database.url, config.database.options);
    // fastify.decorate('mongoose', mongoose);
};`
        },
        {
            path: 'src/plugins/auth.js',
            content: `const config = require('../config');

module.exports = async function authPlugin(fastify) {
    await fastify.register(require('@fastify/jwt'), {
        secret: config.jwt.secret,
        sign: {
            expiresIn: config.jwt.expiresIn
        }
    });

    fastify.decorate('authenticate', async function(request, reply) {
        try {
            await request.jwtVerify();
        } catch (err) {
            reply.status(401).send({ error: 'Unauthorized' });
        }
    });
};`
        },
        {
            path: 'src/routes/index.js',
            content: `async function routes(fastify, options) {
    // API info route
    fastify.get('/', async (request, reply) => {
        return {
            message: 'Fastify API is running',
            version: '1.0.0',
            endpoints: [
                ${modules.map(module => `'/${module.toLowerCase()}'`).join(',\n                ')}
            ]
        };
    });

    // Register module routes
    ${modules.map(module => `fastify.register(require('./${module}.routes'), { prefix: '/${module.toLowerCase()}' });`).join('\n    ')}
}

module.exports = routes;`
        },
        {
            path: 'package.json',
            content: `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "Fastify application scaffolded with Baax Blueprint Builder",
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
    "fastify": "^4.21.0",
    "@fastify/cors": "^8.3.0",
    "@fastify/helmet": "^11.1.1",
    "@fastify/rate-limit": "^8.0.3",
    "@fastify/swagger": "^8.8.0",
    "@fastify/swagger-ui": "^1.9.3",
    "@fastify/jwt": "^7.2.0",
    "@fastify/mongodb": "^6.1.0",
    "mongoose": "^7.3.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.5.0"
  }
}`
        },
        {
            path: 'baax.config.js',
            content: `module.exports = {
  projectName: '${projectName}',
  framework: 'fastify',
  
  server: {
    port: 3000,
    host: '0.0.0.0'
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
    max: 100,
    timeWindow: '1 minute'
  },
  
  logging: {
    level: 'info'
  },
  
  modules: [${modules.map(m => `'${m}'`).join(', ')}]
};`
        }
    ];

    files.forEach(({ path, content }) => {
        fs.writeFileSync(path, content);
        console.log(chalk.green(`Created file: ${path}`));
    });

    // Create module-specific files for Fastify
    modules.forEach((module) => {
        const moduleFiles = [
            {
                path: `src/controllers/${module}.controller.js`,
                content: `const ${module}Service = require('../services/${module}.service');

class ${module}Controller {
    async getAll(request, reply) {
        try {
            const data = await ${module}Service.getAll();
            return { success: true, data };
        } catch (error) {
            request.log.error(error);
            reply.status(500).send({ success: false, message: error.message });
        }
    }

    async getById(request, reply) {
        try {
            const { id } = request.params;
            const data = await ${module}Service.getById(id);
            if (!data) {
                return reply.status(404).send({
                    success: false,
                    message: '${module} not found'
                });
            }
            return { success: true, data };
        } catch (error) {
            request.log.error(error);
            reply.status(500).send({ success: false, message: error.message });
        }
    }

    async create(request, reply) {
        try {
            const data = await ${module}Service.create(request.body);
            reply.status(201).send({ success: true, data });
        } catch (error) {
            request.log.error(error);
            reply.status(500).send({ success: false, message: error.message });
        }
    }

    async update(request, reply) {
        try {
            const { id } = request.params;
            const data = await ${module}Service.update(id, request.body);
            if (!data) {
                return reply.status(404).send({
                    success: false,
                    message: '${module} not found'
                });
            }
            return { success: true, data };
        } catch (error) {
            request.log.error(error);
            reply.status(500).send({ success: false, message: error.message });
        }
    }

    async delete(request, reply) {
        try {
            const { id } = request.params;
            await ${module}Service.delete(id);
            reply.status(204).send();
        } catch (error) {
            request.log.error(error);
            reply.status(500).send({ success: false, message: error.message });
        }
    }
}

module.exports = new ${module}Controller();`
            },
            {
                path: `src/routes/${module}.routes.js`,
                content: `const ${module}Controller = require('../controllers/${module}.controller');

const ${module}Schema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        status: { type: 'string', enum: ['active', 'inactive'] }
    },
    required: ['name']
};

async function ${module}Routes(fastify, options) {
    // GET all ${module.toLowerCase()}
    fastify.get('/', {
        schema: {
            description: 'Get all ${module.toLowerCase()}',
            tags: ['${module}'],
            response: {
                200: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean' },
                        data: { type: 'array', items: ${module}Schema }
                    }
                }
            }
        }
    }, ${module}Controller.getAll);

    // GET ${module.toLowerCase()} by ID
    fastify.get('/:id', {
        schema: {
            description: 'Get ${module.toLowerCase()} by ID',
            tags: ['${module}'],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'string' }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean' },
                        data: ${module}Schema
                    }
                }
            }
        }
    }, ${module}Controller.getById);

    // POST create ${module.toLowerCase()}
    fastify.post('/', {
        preHandler: [fastify.authenticate],
        schema: {
            description: 'Create new ${module.toLowerCase()}',
            tags: ['${module}'],
            body: ${module}Schema,
            response: {
                201: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean' },
                        data: ${module}Schema
                    }
                }
            }
        }
    }, ${module}Controller.create);

    // PUT update ${module.toLowerCase()}
    fastify.put('/:id', {
        preHandler: [fastify.authenticate],
        schema: {
            description: 'Update ${module.toLowerCase()}',
            tags: ['${module}'],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'string' }
                }
            },
            body: ${module}Schema
        }
    }, ${module}Controller.update);

    // DELETE ${module.toLowerCase()}
    fastify.delete('/:id', {
        preHandler: [fastify.authenticate],
        schema: {
            description: 'Delete ${module.toLowerCase()}',
            tags: ['${module}'],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'string' }
                }
            }
        }
    }, ${module}Controller.delete);
}

module.exports = ${module}Routes;`
            },
            {
                path: `src/services/${module}.service.js`,
                content: `const ${module}Model = require('../models/${module}.model');

class ${module}Service {
    async getAll() {
        return await ${module}Model.find({ status: 'active' });
    }

    async getById(id) {
        return await ${module}Model.findById(id);
    }

    async create(data) {
        const item = new ${module}Model(data);
        return await item.save();
    }

    async update(id, data) {
        return await ${module}Model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await ${module}Model.findByIdAndDelete(id);
    }
}

module.exports = new ${module}Service();`
            },
            {
                path: `src/models/${module}.model.js`,
                content: `const mongoose = require('mongoose');

const ${module}Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('${module}', ${module}Schema);`
            }
        ];

        moduleFiles.forEach(({ path, content }) => {
            fs.writeFileSync(path, content);
            console.log(chalk.green(`Created file: ${path}`));
        });
    });

    console.log(chalk.blueBright(`\n✅ Fastify project structure for ${projectName} created successfully!\n`));
}