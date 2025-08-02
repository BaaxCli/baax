import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Check, Play } from 'lucide-react';

const GettingStartedSection: React.FC = () => {
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const CodeBlock = ({ code, id }: { code: string; id: string }) => (
    <div className="relative group">
      <pre className="bg-slate-950 text-slate-100 p-6 rounded-lg overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-4 right-4 p-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors opacity-0 group-hover:opacity-100"
      >
        {copiedStates[id] ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-slate-400" />
        )}
      </button>
    </div>
  );

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Get Started in
            <span className="bg-gradient-to-r from-baax-600 to-purple-600 bg-clip-text text-transparent">
              {" "}30 Seconds
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to create your next backend project. 
            No complex configuration, just pure productivity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="install" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="install" className="flex items-center gap-2">
                <span className="bg-baax-600 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center">1</span>
                Install
              </TabsTrigger>
              <TabsTrigger value="create" className="flex items-center gap-2">
                <span className="bg-baax-600 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center">2</span>
                Create
              </TabsTrigger>
              <TabsTrigger value="develop" className="flex items-center gap-2">
                <span className="bg-baax-600 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center">3</span>
                Develop
              </TabsTrigger>
            </TabsList>

            <TabsContent value="install" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Install Baax CLI</h3>
                <p className="text-muted-foreground">Install globally or use directly with npx</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Global Installation</h4>
                  <CodeBlock code="npm install -g baax" id="global-install" />
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Direct Usage (Recommended)</h4>
                  <CodeBlock code="npx create-baax my-project" id="direct-usage" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="create" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Create Your Project</h3>
                <p className="text-muted-foreground">Interactive setup with smart defaults</p>
              </div>
              <CodeBlock 
                code={`$ npx create-baax my-backend

✨ Welcome to Baax - Backend Accelerator!

? Enter your project name: my-backend
? Select Backend framework: Express.js
? Select database: MongoDB
? Setup Docker? Yes
? Initialize Git repository? Yes
? Enter modules (comma-separated): user,auth,product

🚀 Setting up your project...
📦 Installing dependencies...
🔧 Configuring database...
🐳 Setting up Docker...
📁 Creating project structure...

✅ Project created successfully!

Next steps:
  cd my-backend
  npm run dev`}
                id="create-project"
              />
            </TabsContent>

            <TabsContent value="develop" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Start Developing</h3>
                <p className="text-muted-foreground">Your backend is ready for development</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Development Server</h4>
                  <CodeBlock 
                    code={`cd my-backend
npm run dev

🚀 Server running on http://localhost:3000
📊 MongoDB connected
🔄 Hot reload enabled`}
                    id="dev-server"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Project Structure</h4>
                  <CodeBlock 
                    code={`my-backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
├── .env
├── Dockerfile
└── package.json`}
                    id="project-structure"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Try Interactive Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
