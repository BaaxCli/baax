import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Examples = () => {
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
        <h1 className="text-4xl font-bold mb-6">Examples</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore different project templates and examples built with baax.
        </p>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="svelte">Svelte</TabsTrigger>
            <TabsTrigger value="fullstack">Full-stack</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Cards */}
              <Card>
                <CardHeader>
                  <CardTitle>React Blog</CardTitle>
                  <CardDescription>A simple blog application with React and Markdown support.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <div className="text-4xl font-semibold text-muted-foreground">Preview</div>
                  </div>
                  <div className="space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">React</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">TypeScript</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">MongoDB</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Code</Button>
                  <Button>Live Demo</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Dashboard</CardTitle>
                  <CardDescription>Admin dashboard for an e-commerce platform.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <div className="text-4xl font-semibold text-muted-foreground">Preview</div>
                  </div>
                  <div className="space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">React</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">TypeScript</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">PostgreSQL</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Code</Button>
                  <Button>Live Demo</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Vue Todo App</CardTitle>
                  <CardDescription>A simple todo application built with Vue.js.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <div className="text-4xl font-semibold text-muted-foreground">Preview</div>
                  </div>
                  <div className="space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Vue</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">JavaScript</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Firebase</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Code</Button>
                  <Button>Live Demo</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Svelte Portfolio</CardTitle>
                  <CardDescription>A portfolio template built with Svelte and SvelteKit.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <div className="text-4xl font-semibold text-muted-foreground">Preview</div>
                  </div>
                  <div className="space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">Svelte</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">TypeScript</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">TailwindCSS</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Code</Button>
                  <Button>Live Demo</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>React Native Mobile App</CardTitle>
                  <CardDescription>A cross-platform mobile app starter template.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <div className="text-4xl font-semibold text-muted-foreground">Preview</div>
                  </div>
                  <div className="space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">React Native</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">TypeScript</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Expo</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Code</Button>
                  <Button>Live Demo</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Full-stack SaaS Template</CardTitle>
                  <CardDescription>Complete SaaS application with authentication and subscription management.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <div className="text-4xl font-semibold text-muted-foreground">Preview</div>
                  </div>
                  <div className="space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">React</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">TypeScript</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">Next.js</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Code</Button>
                  <Button>Live Demo</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Other tab contents would be similar to the "all" tab but filtered by framework */}
          <TabsContent value="react" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Only React examples would be shown here */}
              <Card>
                <CardHeader>
                  <CardTitle>React Blog</CardTitle>
                  <CardDescription>A simple blog application with React and Markdown support.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <div className="text-4xl font-semibold text-muted-foreground">Preview</div>
                  </div>
                  <div className="space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">React</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">TypeScript</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">MongoDB</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Code</Button>
                  <Button>Live Demo</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Dashboard</CardTitle>
                  <CardDescription>Admin dashboard for an e-commerce platform.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <div className="text-4xl font-semibold text-muted-foreground">Preview</div>
                  </div>
                  <div className="space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">React</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">TypeScript</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">PostgreSQL</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Code</Button>
                  <Button>Live Demo</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Submit Your Own Example</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Have you built something cool with baax? Share it with the community!
          </p>
          <Button size="lg">Submit an Example</Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Examples;
