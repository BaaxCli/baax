<p align="center">
  <a href="https://npmjs.com/package/baax" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://baax.nagarajneelam.in/logo.png" alt="Baax Logo">
  </a>
</p>

<br/>

<p align="center">
  <a href="https://npmjs.com/package/baax"><img src="https://img.shields.io/npm/v/baax.svg" alt="npm version"></a>
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/node/v/baax.svg" alt="node compatibility"></a>
  <a href="https://github.com/baaxjs/baax/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/baax.svg" alt="license"></a>
  <a href="https://npmjs.com/package/baax"><img src="https://img.shields.io/npm/dm/baax.svg" alt="downloads"></a>
  <a href="https://discord.com/invite/Keku7ThKuP"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>

<br/>

# Baax - Backend Accelerator

> **Bootstrap backend applications in seconds with production-ready templates**

Baax is a powerful CLI tool that scaffolds modern backend applications with best practices built-in. Choose your framework, database, and modules to generate a complete project structure ready for development.

---

## ✨ Features

- 🚀 **Multiple Frameworks**: Express.js, Fastify (NestJS coming soon)
- 🗄️ **Database Support**: MongoDB (PostgreSQL, MySQL coming soon)
- 📚 **Built-in Documentation**: Swagger/OpenAPI integration
- 🧪 **Testing Ready**: Postman collections and Jest setup
- 🐳 **Docker Support**: Complete containerization with docker-compose
- 🔒 **Security First**: Rate limiting, CORS, Helmet, JWT authentication
- ⚙️ **Configuration Management**: Centralized config with baax.config.js
- 🎯 **Module System**: Generate controllers, services, routes, and models
- 📦 **Production Ready**: Error handling, logging, graceful shutdown

---

## 📦 Installation

### Global Installation (Recommended)
```bash
npm install -g baax
```

### One-time Usage
```bash
npx create-baax
```

---

## ⚡ Quick Start

1. **Run the CLI**:
   ```bash
   create-baax
   ```

2. **Follow the interactive prompts**:
   - Enter your project name
   - Choose framework (Express.js or Fastify)
   - Select database (MongoDB)
   - Enter module names (e.g., "user, auth, product")
   - Choose documentation options

3. **Install dependencies and start developing**:
   ```bash
   cd your-project-name
   npm install
   npm run dev
   ```

---

## 🏗️ Generated Project Structure

```
your-project/
├── src/
│   ├── app.js              # Express/Fastify app configuration
│   ├── server.js           # Server entry point
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── utils/              # Utility functions
├── docker/                 # Docker configuration
├── docs/                   # API documentation
├── tests/                  # Test files
├── logs/                   # Application logs
├── baax.config.js          # Baax configuration
├── docker-compose.yml      # Multi-container setup
├── Dockerfile              # Container definition
└── package.json            # Dependencies and scripts
```

---

## 🔧 Configuration

Customize your application through `baax.config.js`:

```javascript
module.exports = {
  projectName: 'my-api',
  framework: 'express',
  
  server: {
    port: 3000,
    bodyLimit: '10mb'
  },
  
  database: {
    type: 'mongodb',
    url: 'mongodb://localhost:27017/my-api'
  },
  
  auth: {
    jwtSecret: 'your-secret-key',
    expiresIn: '24h'
  },
  
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true
  },
  
  modules: ['user', 'auth', 'product']
};
```

---

## 📚 Documentation & Testing

### API Documentation
- **Swagger UI**: Available at `http://localhost:3000/docs`
- **OpenAPI Spec**: Auto-generated based on your modules

### Testing Tools
- **Postman Collection**: Import `postman-collection.json`
- **Jest Testing**: Run with `npm test`
- **Health Check**: `GET /health`

---

## 🐳 Docker Support

### Development
```bash
npm run docker:compose
```

### Production
```bash
npm run docker:build
npm run docker:run
```

---

## 🚀 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with nodemon |
| `npm test` | Run tests with Jest |
| `npm run docker:build` | Build Docker image |
| `npm run docker:run` | Run Docker container |
| `npm run docker:compose` | Start with docker-compose |

---

## 🎯 Module System

Baax generates complete CRUD operations for each module:

- **Controllers**: Request handling and validation
- **Services**: Business logic and data processing
- **Models**: Database schemas (Mongoose for MongoDB)
- **Routes**: RESTful API endpoints

Example for a "user" module:
- `GET /api/user` - Get all users
- `GET /api/user/:id` - Get user by ID
- `POST /api/user` - Create user (protected)
- `PUT /api/user/:id` - Update user (protected)
- `DELETE /api/user/:id` - Delete user (protected)

---

## 🔒 Security Features

- **Rate Limiting**: Configurable request throttling
- **CORS Protection**: Cross-origin request handling
- **Helmet**: Security headers
- **JWT Authentication**: Token-based auth system
- **Input Validation**: Request body validation
- **Error Handling**: Comprehensive error management

---

## 🌐 Framework Support

### Currently Supported
- ✅ **Express.js** - Fast, unopinionated web framework
- ✅ **Fastify** - High-performance alternative to Express

### Coming Soon
- 🔄 **NestJS** - Scalable server-side applications
- 🔄 **Koa.js** - Next generation web framework
- 🔄 **Hapi.js** - Rich framework for building applications

---

## 🗄️ Database Support

### Currently Supported
- ✅ **MongoDB** - NoSQL document database

### Coming Soon
- 🔄 **PostgreSQL** - Advanced relational database
- 🔄 **MySQL** - Popular relational database
- 🔄 **SQLite** - Lightweight database

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Setup
```bash
git clone https://github.com/baaxjs/baax.git
cd baax
npm install
npm link
```

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

---

## 🆘 Support

- 📖 **Documentation**: [https://baax.nagarajneelam.in](https://baax.nagarajneelam.in)
- 💬 **Discord**: [Join our community](https://discord.com/invite/Keku7ThKuP)
- 🐛 **Issues**: [GitHub Issues](https://github.com/baaxjs/baax/issues)
- 📧 **Email**: support@baax.dev

---

## 🏆 Sponsors

<p align="center">
  <em>Become a sponsor and support the development of Baax!</em>
</p>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ by [Nagaraj Neelam](https://github.com/neelamnagarajgithub)
- Inspired by the need for rapid backend development
- Thanks to all contributors and the open-source community

---

<p align="center">
  <strong>⭐ Star us on GitHub if you find Baax helpful!</strong>
</p>

<p align="center">
  Made with ❤️ for the developer community
</p>