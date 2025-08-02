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

const PythonDocs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});

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
      
      <main className="container py-12 flex-grow">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold">Python Documentation</h1>
            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Python</span>
          </div>
          <p className="text-xl text-muted-foreground">
            Complete guide to using Baax CLI for Python backend development
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
                <h3 className="font-semibold text-lg mb-3">Frameworks</h3>
                <div className="space-y-2">
                  <a href="#fastapi" className="block py-1 text-sm text-muted-foreground hover:text-primary">FastAPI</a>
                  <a href="#flask" className="block py-1 text-sm text-muted-foreground hover:text-primary">Flask</a>
                  <a href="#django" className="block py-1 text-sm text-muted-foreground hover:text-primary">Django</a>
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
                  <Badge variant="secondary" className="mb-4">Coming Soon</Badge>
                  <p className="text-lg text-muted-foreground mb-6">
                    Baax for Python is designed to accelerate Python backend development by generating 
                    production-ready project structures for FastAPI, Flask, and Django.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Terminal className="h-5 w-5" />
                        FastAPI
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints.
                      </p>
                      <Badge variant="outline" className="mt-2">In Development</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Flask
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Lightweight WSGI web application framework with minimal boilerplate for quick development.
                      </p>
                      <Badge variant="outline" className="mt-2">In Development</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Database className="h-5 w-5" />
                        Django
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        High-level Python web framework that encourages rapid development and clean design.
                      </p>
                      <Badge variant="outline" className="mt-2">In Development</Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Installation Section */}
              <section id="installation">
                <h2 className="text-3xl font-bold mb-6">Installation</h2>
                
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100 mb-2">🚧 Coming Soon!</p>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    Python support for Baax is currently in development. Expected release: Q2 2025
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Planned Installation Methods</h3>
                <Tabs defaultValue="pip" className="mb-8">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="pip">pip</TabsTrigger>
                    <TabsTrigger value="pipx">pipx</TabsTrigger>
                    <TabsTrigger value="poetry">poetry</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="pip" className="mt-4">
                    <CodeBlock code="pip install baax-python" id="pip-install" />
                  </TabsContent>
                  
                  <TabsContent value="pipx" className="mt-4">
                    <CodeBlock code="pipx install baax-python" id="pipx-install" />
                  </TabsContent>
                  
                  <TabsContent value="poetry" className="mt-4">
                    <CodeBlock code="poetry add baax-python" id="poetry-install" />
                  </TabsContent>
                </Tabs>
              </section>

              {/* Framework Sections */}
              <section id="fastapi">
                <h2 className="text-3xl font-bold mb-6">FastAPI Support</h2>
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Planned Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Automatic API documentation generation</li>
                    <li>• Type hints and validation</li>
                    <li>• Authentication & authorization</li>
                    <li>• Database integration (SQLAlchemy, MongoDB)</li>
                    <li>• Docker containerization</li>
                    <li>• Testing framework setup</li>
                  </ul>
                </div>
              </section>

              <section id="flask">
                <h2 className="text-3xl font-bold mb-6">Flask Support</h2>
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Planned Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Blueprint architecture</li>
                    <li>• Flask extensions integration</li>
                    <li>• Database setup (SQLAlchemy, Flask-Migrate)</li>
                    <li>• Authentication with Flask-Login</li>
                    <li>• API development with Flask-RESTful</li>
                    <li>• Testing with pytest</li>
                  </ul>
                </div>
              </section>

              <section id="django">
                <h2 className="text-3xl font-bold mb-6">Django Support</h2>
                <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Planned Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Django REST Framework integration</li>
                    <li>• Custom user model setup</li>
                    <li>• Database configuration</li>
                    <li>• Authentication & permissions</li>
                    <li>• Admin interface customization</li>
                    <li>• Celery for background tasks</li>
                  </ul>
                </div>
              </section>

              {/* Stay Updated Section */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Get Notified</CardTitle>
                    <CardDescription>
                      Be the first to know when Python support launches
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">GitHub</Badge>
                        <a 
                          href="https://github.com/neelamnagarajgithub/baax" 
                          className="text-sm text-baax-600 hover:underline"
                          target="_blank" 
                          rel="noreferrer"
                        >
                          Watch the repository for updates
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">Discord</Badge>
                        <a 
                          href="https://discord.com/invite/Keku7ThKuP" 
                          className="text-sm text-baax-600 hover:underline"
                          target="_blank" 
                          rel="noreferrer"
                        >
                          Join our community
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PythonDocs;