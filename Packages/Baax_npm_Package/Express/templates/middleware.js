import fs from 'fs';
import chalk from 'chalk';

export function createMiddlewareFiles() {
    const files = [
        {
            path: 'src/middleware/errorHandler.js',
            content: `const config = require('../config');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const isDevelopment = config.nodeEnv === 'development';

    const response = {
        success: false,
        message: err.message || 'Internal Server Error',
        ...(isDevelopment && { stack: err.stack })
    };

    const statusCode = err.statusCode || err.status || 500;
    res.status(statusCode).json(response);
};

module.exports = errorHandler;`
        },
        {
            path: 'src/middleware/rateLimiter.js',
            content: `const rateLimit = require('express-rate-limit');
const config = require('../config');

const rateLimiter = rateLimit({
    windowMs: config.rateLimit.windowMs,
    max: config.rateLimit.max,
    message: {
        error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = rateLimiter;`
        },
        {
            path: 'src/middleware/auth.js',
            content: `const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, config.jwt.secret, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

module.exports = { authenticateToken };`
        }
    ];

    files.forEach(({ path, content }) => {
        fs.writeFileSync(path, content);
        console.log(chalk.green(`Created file: ${path}`));
    });
}