import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Documentation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <h1 className="text-4xl font-bold mb-6">Documentation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="space-y-4 sticky top-24">
              <h3 className="font-semibold text-lg mb-3">Guide</h3>
              <div className="space-y-1">
                <Link to="/docs" className="block py-1 font-medium text-primary">Getting Started</Link>
                <Link to="/docs/installation" className="block py-1 text-sm text-muted-foreground hover:text-primary">Installation</Link>
                <Link to="/docs/configuration" className="block py-1 text-sm text-muted-foreground hover:text-primary">Configuration</Link>
                <Link to="/docs/project-structure" className="block py-1 text-sm text-muted-foreground hover:text-primary">Project Structure</Link>
              </div>
              
              <h3 className="font-semibold text-lg mb-3">CLI Commands</h3>
              <div className="space-y-1">
                <Link to="/docs/commands/create" className="block py-1 text-sm text-muted-foreground hover:text-primary">Create Project</Link>
                <Link to="/docs/commands/build" className="block py-1 text-sm text-muted-foreground hover:text-primary">Build</Link>
                <Link to="/docs/commands/dev" className="block py-1 text-sm text-muted-foreground hover:text-primary">Development</Link>
              </div>
              
              <h3 className="font-semibold text-lg mb-3">Advanced</h3>
              <div className="space-y-1">
                <Link to="/docs/plugins" className="block py-1 text-sm text-muted-foreground hover:text-primary">Plugins</Link>
                <Link to="/docs/customization" className="block py-1 text-sm text-muted-foreground hover:text-primary">Customization</Link>
                <Link to="/docs/api-reference" className="block py-1 text-sm text-muted-foreground hover:text-primary">API Reference</Link>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="prose dark:prose-invert max-w-none">
              <h2>Getting Started with baax</h2>
              <p>
                Baax is a command-line interface (CLI) tool that helps you quickly scaffold new projects
                with your preferred tech stack. It provides a collection of templates and configurations
                for various frameworks, databases, and tooling options, similar to tools like Vite or Create React App,
                but with more flexibility and customization options.
              </p>
              
              <h3>Prerequisites</h3>
              <p>
                Before using baax, ensure you have the following installed:
              </p>
              <ul>
                <li>Node.js (version 16.0.0 or higher)</li>
                <li>npm, yarn, or pnpm package manager</li>
              </ul>
              
              <Tabs defaultValue="npm" className="mt-6 mb-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="npm">npm</TabsTrigger>
                  <TabsTrigger value="yarn">yarn</TabsTrigger>
                  <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                </TabsList>
                <TabsContent value="npm" className="mt-4">
                  <div className="code-block">
                    <pre><code>
                      <span className="comment"># Install globally</span>{"\n"}
                      <span className="function">npm</span> <span className="keyword">install</span> -g baax{"\n\n"}
                      <span className="comment"># Or use without installing</span>{"\n"}
                      <span className="function">npx</span> baax create my-project
                    </code></pre>
                  </div>
                </TabsContent>
                <TabsContent value="yarn" className="mt-4">
                  <div className="code-block">
                    <pre><code>
                      <span className="comment"># Install globally</span>{"\n"}
                      <span className="function">yarn</span> <span className="keyword">global add</span> baax{"\n\n"}
                      <span className="comment"># Or use without installing</span>{"\n"}
                      <span className="function">yarn</span> dlx baax create my-project
                    </code></pre>
                  </div>
                </TabsContent>
                <TabsContent value="pnpm" className="mt-4">
                  <div className="code-block">
                    <pre><code>
                      <span className="comment"># Install globally</span>{"\n"}
                      <span className="function">pnpm</span> <span className="keyword">add</span> -g baax{"\n\n"}
                      <span className="comment"># Or use without installing</span>{"\n"}
                      <span className="function">pnpm</span> dlx baax create my-project
                    </code></pre>
                  </div>
                </TabsContent>
              </Tabs>
              
              <h3>Creating Your First Project</h3>
              <p>
                To create a new project using baax, run the following command:
              </p>
              
              <div className="code-block">
                <pre><code>
                  npx baax create my-awesome-project
                </code></pre>
              </div>
              
              <p>
                Follow the interactive prompts to configure your project:
              </p>
              
              <ul>
                <li><strong>Project name</strong>: Name of your project (default: the directory name)</li>
                <li><strong>Framework</strong>: Choose your preferred framework (React, Vue, Svelte, etc.)</li>
                <li><strong>Variant</strong>: Select a variant such as TypeScript, JavaScript + SWC, etc.</li>
                <li><strong>Database</strong>: Select your database (MongoDB, PostgreSQL, SQLite, etc.)</li>
                <li><strong>UI library</strong>: Choose a UI library (Tailwind CSS, Material UI, etc.)</li>
                <li><strong>State management</strong>: Select a state management solution (Redux, Zustand, etc.)</li>
                <li><strong>Testing</strong>: Configure testing setup (Vitest, Jest, etc.)</li>
              </ul>
              
              <p>
                Once you've completed the setup, baax will create a new project with all the selected configurations.
              </p>
              
              <Button asChild className="mt-6">
                <Link to="/docs/installation">Continue to Installation →</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
