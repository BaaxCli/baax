import fs from 'fs';
import chalk from 'chalk';

export function createDockerFiles(projectName, modules) {
    const files = [
        {
            path: 'Dockerfile',
            content: `FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Change ownership
RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["npm", "start"]`
        },
        {
            path: 'docker-compose.yml',
            content: `version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=mongodb://mongo:27017/${projectName}
    depends_on:
      - mongo
    volumes:
      - ./logs:/app/logs
    restart: unless-stopped

  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
      - ./docker/mongo-init:/docker-entrypoint-initdb.d
    environment:
      - MONGO_INITDB_DATABASE=${projectName}
    restart: unless-stopped

volumes:
  mongo_data:`
        },
        {
            path: 'docker/mongo-init/init.js',
            content: `// MongoDB initialization script
db = db.getSiblingDB('${projectName}');

// Create collections for modules
${modules.map(module => `db.createCollection('${module}s');`).join('\n')}

// Create indexes
${modules.map(module => `db.${module}s.createIndex({ "name": 1 });
db.${module}s.createIndex({ "createdAt": -1 });`).join('\n')}

print('Database initialized successfully');`
        },
        {
            path: '.dockerignore',
            content: `node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
.vscode
.idea
*.swp
*.swo
logs/
tmp/
temp/`
        }
    ];

    files.forEach(({ path, content }) => {
        fs.writeFileSync(path, content);
        console.log(chalk.green(`Created file: ${path}`));
    });
}