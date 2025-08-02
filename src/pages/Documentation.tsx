import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, Check, Terminal, FolderOpen, Database, Settings, Docker, GitBranch } from 'lucide-react';

const Documentation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});

  // Define code examples as constants - using variables to avoid module reference issues
  const moduleExports = 'module.exports';
const module='module';
  const modelExample = `// Model for user

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Define schema here
});

${moduleExports} = mongoose.model('user', userSchema);`;

  const routeExample = `// Routes for user

const express = require('express');
const router = express.Router();
const { getuser } = require('../controllers/user.controller');

router.get('/', getuser);

${moduleExports} = router;`;

  const appExample = `const express = require('express');
const app = express();

app.use(express.json());

${moduleExports} = app;`;

  const controllerExample = `// Controller for user

exports.getuser = (req, res) => {
    res.send('user data');
};`;

  const dockerfileExample = `FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "src/app.js"]`;

  const dockerUsageExample = `# Build the image
docker build -t my-backend-app .

# Run the container
docker run -p 3000:3000 my-backend-app`;

  const projectStructureExample = `my-backend-app/
├── src/
│   ├── config/
│   │   └── index.js          # Configuration settings
│   ├── controllers/
│   │   ├── index.js          # Controller exports
│   │   ├── user.controller.js    # User controllers
│   │   └── auth.controller.js    # Auth controllers
│   ├── middleware/
│   │   └── index.js          # Custom middleware
│   ├── models/
│   │   ├── user.model.js     # User data model
│   │   └── auth.model.js     # Auth model
│   ├── routes/
│   │   ├── index.js          # Route exports
│   │   ├── user.routes.js    # User routes
│   │   └── auth.routes.js    # Auth routes
│   └── app.js                # Express app entry
├── .env                      # Environment variables
├── .gitignore               # Git ignore rules
├── .dockerignore            # Docker ignore (if enabled)
├── Dockerfile               # Docker config (if enabled)
├── package.json             # Dependencies & scripts
└── README.md                # Project documentation`;

  const interactivePromptsExample = `✨ Welcome to Baax - Backend Accelerator!

? Enter your project name: my-backend-app
? Select backend framework: Express.js
? Select database: MongoDB
? Do you want to set up Docker? Yes
? Do you want to initialize a Git repository? Yes
? Enter module names (comma-separated): user,auth

🚀 Setting up your project...
📦 Installing dependencies...
🔧 Configuring database...
🐳 Setting up Docker...
📁 Creating project structure...

✅ Project created successfully!`;

  const startDevExample = `cd my-backend-app
npm run dev

# Your server will start on http://localhost:3000`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const CodeBlock = ({ code, id, language = "bash" }: { code: string; id: string; language?: string }) => (
    <div className="relative group">
      <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code className="font-mono">{code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-3 right-3 p-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors opacity-0 group-hover:opacity-100"
      >
        {copiedStates[id] ? (
          <Check className="h-3 w-3 text-green-400" />
        ) : (
          <Copy className="h-3 w-3 text-slate-400" />
        )}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenuToggle={() => setIsMobileMenuOpen(true)} />
      
      {/* Mobile Navigation Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-64">
          <div className="py-6">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="relative h-7 w-7 rounded-full bg-gradient-to-br from-baax-500 to-baax-700">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">B</div>
              </div>
              <span className="font-bold text-xl">baax</span>
            </Link>
            <nav className="space-y-4">
              <Link to="/" className="block py-2 font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/docs" className="block py-2 font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Documentation
              </Link>
              <Link to="/examples" className="block py-2 font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Examples
              </Link>
              <Link to="/community" className="block py-2 font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Community
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      
      <main className="container py-12 flex-grow">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground">
            Complete guide to using Baax CLI for backend development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              <div>
                <h3 className="font-semibold text-lg mb-3">Getting Started</h3>
                <div className="space-y-2">
                  <a href="#overview" className="block py-1 text-sm text-primary font-medium">Overview</a>
                  <a href="#installation" className="block py-1 text-sm text-muted-foreground hover:text-primary">Installation</a>
                  <a href="#quick-start" className="block py-1 text-sm text-muted-foreground hover:text-primary">Quick Start</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">CLI Usage</h3>
                <div className="space-y-2">
                  <a href="#create-project" className="block py-1 text-sm text-muted-foreground hover:text-primary">Creating Projects</a>
                  <a href="#project-structure" className="block py-1 text-sm text-muted-foreground hover:text-primary">Project Structure</a>
                  <a href="#configuration" className="block py-1 text-sm text-muted-foreground hover:text-primary">Configuration</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Frameworks</h3>
                <div className="space-y-2">
                  <a href="#express" className="block py-1 text-sm text-muted-foreground hover:text-primary">Express.js</a>
                  <a href="#nestjs" className="block py-1 text-sm text-muted-foreground hover:text-primary">NestJS</a>
                  <a href="#fastify" className="block py-1 text-sm text-muted-foreground hover:text-primary">Fastify</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Advanced</h3>
                <div className="space-y-2">
                  <a href="#modules" className="block py-1 text-sm text-muted-foreground hover:text-primary">Custom Modules</a>
                  <a href="#docker" className="block py-1 text-sm text-muted-foreground hover:text-primary">Docker Setup</a>
                  <a href="#troubleshooting" className="block py-1 text-sm text-muted-foreground hover:text-primary">Troubleshooting</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose dark:prose-invert max-w-none space-y-12">
              
              {/* Overview Section */}
              <section id="overview">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4">v1.1.1</Badge>
                  <p className="text-lg text-muted-foreground mb-6">
                    Baax is a powerful CLI tool designed to accelerate backend development by generating 
                    production-ready project structures with your preferred tech stack in seconds.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Terminal className="h-5 w-5" />
                        What is Baax?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A CLI tool that scaffolds backend projects with Express.js, NestJS, or Fastify, 
                        complete with database integration, Docker support, and modular architecture.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Key Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Multiple framework support</li>
                        <li>• Database integration</li>
                        <li>• Docker configuration</li>
                        <li>• Git initialization</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Before you begin:</p>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Node.js (version 14.0.0 or higher)</li>
                    <li>• npm, yarn, or pnpm package manager</li>
                    <li>• Git (for version control features)</li>
                  </ul>
                </div>
              </section>

              {/* Installation Section */}
              <section id="installation">
                <h2 className="text-3xl font-bold mb-6">Installation</h2>
                
                <Tabs defaultValue="npm" className="mb-8">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="npm">npm</TabsTrigger>
                    <TabsTrigger value="yarn">yarn</TabsTrigger>
                    <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="npm" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Global Installation</h4>
                        <CodeBlock code="npm install -g baax" id="npm-global" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Direct Usage (Recommended)</h4>
                        <CodeBlock code="npx create-baax my-project" id="npm-direct" />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="yarn" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Global Installation</h4>
                        <CodeBlock code="yarn global add baax" id="yarn-global" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Direct Usage</h4>
                        <CodeBlock code="yarn dlx create-baax my-project" id="yarn-direct" />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pnpm" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Global Installation</h4>
                        <CodeBlock code="pnpm add -g baax" id="pnpm-global" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Direct Usage</h4>
                        <CodeBlock code="pnpm dlx create-baax my-project" id="pnpm-direct" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Quick Start Section */}
              <section id="quick-start">
                <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
                
                <p className="text-muted-foreground mb-6">
                  Get your backend project up and running in under a minute with these simple steps:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">1. Create a New Project</h3>
                    <CodeBlock 
                      code="npx create-baax my-backend-app" 
                      id="create-project" 
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">2. Follow Interactive Prompts</h3>
                    <CodeBlock 
                      code={interactivePromptsExample}
                      id="interactive-prompts"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">3. Start Development</h3>
                    <CodeBlock 
                      code={startDevExample}
                      id="start-dev"
                    />
                  </div>
                </div>
              </section>

              {/* Create Project Section */}
              <section id="create-project">
                <h2 className="text-3xl font-bold mb-6">Creating Projects</h2>
                
                <h3 className="text-xl font-semibold mb-4">Command Options</h3>
                <p className="text-muted-foreground mb-4">
                  The main command for creating projects is <code className="bg-muted px-2 py-1 rounded">create-baax</code>. 
                  Here's how the interactive setup works:
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Configuration Options</CardTitle>
                      <CardDescription>Customize your project during setup</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Project Name</h4>
                          <p className="text-sm text-muted-foreground">Name of your project directory (default: 'my-backend-app')</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Backend Framework</h4>
                          <p className="text-sm text-muted-foreground">Choose from: Express.js, NestJS, Fastify</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Database</h4>
                          <p className="text-sm text-muted-foreground">Choose from: MongoDB, PostgreSQL, MySQL</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Docker Setup</h4>
                          <p className="text-sm text-muted-foreground">Generates Dockerfile and .dockerignore</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Git Repository</h4>
                          <p className="text-sm text-muted-foreground">Initializes Git repo with .gitignore</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Custom Modules</h4>
                          <p className="text-sm text-muted-foreground">Comma-separated list (default: 'user,auth')</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Project Structure Section */}
              <section id="project-structure">
                <h2 className="text-3xl font-bold mb-6">Project Structure</h2>
                
                <p className="text-muted-foreground mb-6">
                  Baax generates a clean, organized project structure following industry best practices.
                </p>

                <Tabs defaultValue="express" className="mb-8">
                  <TabsList>
                    <TabsTrigger value="express">Express.js</TabsTrigger>
                    <TabsTrigger value="nestjs">NestJS</TabsTrigger>
                    <TabsTrigger value="fastify">Fastify</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="express" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Express.js Structure</h3>
                      <CodeBlock 
                        code={projectStructureExample}
                        id="express-structure"
                      />
                      
                      <div className="mt-6 space-y-4">
                        <h4 className="font-medium">Generated Files Content</h4>
                        
                        <div>
                          <h5 className="font-medium text-sm mb-2">src/app.js</h5>
                          <CodeBlock 
                            code={appExample}
                            id="app-js"
                            language="javascript"
                          />
                        </div>

                        <div>
                          <h5 className="font-medium text-sm mb-2">Controller Example (user.controller.js)</h5>
                          <CodeBlock 
                            code={controllerExample}
                            id="controller-example"
                            language="javascript"
                          />
                        </div>

                        <div>
                          <h5 className="font-medium text-sm mb-2">Model Example (user.model.js)</h5>
                          <CodeBlock 
                            code={modelExample}
                            id="model-example"
                            language="javascript"
                          />
                        </div>

                        <div>
                          <h5 className="font-medium text-sm mb-2">Route Example (user.routes.js)</h5>
                          <CodeBlock 
                            code={routeExample}
                            id="route-example"
                            language="javascript"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="nestjs" className="mt-6">
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                      <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100">
                        NestJS support uses the official NestJS CLI to generate projects with standard structure.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="fastify" className="mt-6">
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                        Fastify structure follows similar patterns to Express.js with framework-specific optimizations.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Configuration Section */}
              <section id="configuration">
                <h2 className="text-3xl font-bold mb-6">Configuration</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Environment Variables</h3>
                    <p className="text-muted-foreground mb-4">
                      Baax automatically generates a <code className="bg-muted px-2 py-1 rounded">.env</code> file with common configuration:
                    </p>
                    <CodeBlock 
                      code={`PORT=3000
DATABASE_URL=your-database-url`}
                      id="env-example"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Package.json Scripts</h3>
                    <p className="text-muted-foreground mb-4">
                      Generated projects include useful npm scripts for development:
                    </p>
                    <CodeBlock 
                      code={`{
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js",
    "test": "jest"
  }
}`}
                      id="package-scripts"
                      language="json"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Database Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Based on your database selection, Baax installs the appropriate packages:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">MongoDB</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <code className="text-sm">mongoose</code>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">PostgreSQL</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <code className="text-sm">pg</code>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">MySQL</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <code className="text-sm">mysql2</code>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>

              {/* Docker Section */}
              <section id="docker">
                <h2 className="text-3xl font-bold mb-6">Docker Support</h2>
                
                <p className="text-muted-foreground mb-6">
                  When Docker is enabled, Baax generates production-ready Docker configuration files.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Generated Dockerfile</h3>
                    <CodeBlock 
                      code={dockerfileExample}
                      id="dockerfile"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Using Docker</h3>
                    <CodeBlock 
                      code={dockerUsageExample}
                      id="docker-usage"
                    />
                  </div>
                </div>
              </section>

              {/* Custom Modules Section */}
              <section id="modules">
                <h2 className="text-3xl font-bold mb-6">Custom Modules</h2>
                
                <p className="text-muted-foreground mb-6">
                  Baax allows you to specify custom modules during project creation. Each module generates:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <FolderOpen className="h-4 w-4" />
                        Controller
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        <code>controllers/{module}.controller.js</code>
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Model
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        <code>models/{module}.model.js</code>
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <GitBranch className="h-4 w-4" />
                        Routes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        <code>routes/{module}.routes.js</code>
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Complete Setup
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Fully connected architecture
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Example: Creating User Module</h3>
                  <p className="text-muted-foreground mb-3">
                    When you specify "user" as a module, Baax generates:
                  </p>
                  <CodeBlock 
                    code={`? Enter module names (comma-separated): user,auth,product

# Generates:
src/controllers/user.controller.js
src/controllers/auth.controller.js
src/controllers/product.controller.js
src/models/user.model.js
src/models/auth.model.js
src/models/product.model.js
src/routes/user.routes.js
src/routes/auth.routes.js
src/routes/product.routes.js`}
                    id="module-example"
                  />
                </div>
              </section>

              {/* Troubleshooting Section */}
              <section id="troubleshooting">
                <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Common Issues</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium">Permission Denied Errors</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          If you encounter permission errors when installing globally:
                        </p>
                        <CodeBlock 
                          code="sudo npm install -g baax" 
                          id="permission-fix"
                        />
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Node Version Issues</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Ensure you're using Node.js version 14 or higher:
                        </p>
                        <CodeBlock 
                          code="node --version" 
                          id="node-version"
                        />
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Directory Already Exists</h4>
                        <p className="text-sm text-muted-foreground">
                          If the project directory already exists, choose a different name or remove the existing directory.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Getting Help</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">GitHub</Badge>
                          <a 
                            href="https://github.com/neelamnagarajgithub/baax/issues" 
                            className="text-sm text-baax-600 hover:underline"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Report issues or request features
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Community</Badge>
                          <a 
                            href="https://discord.com/invite/Keku7ThKuP" 
                            className="text-sm text-baax-600 hover:underline"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Join our community for real-time help
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <div className="border-t pt-8 mt-16">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Need more help? Join our community or check out the examples.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" asChild>
                      <Link to="/examples">View Examples</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/community">Join Community</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
