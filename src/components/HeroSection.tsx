import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal, Zap, Code2 } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-baax-50 via-white to-baax-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-grid-slate-700/25"></div>
      
      <div className="container relative px-6 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-baax-200 bg-baax-50 px-4 py-2 text-sm font-medium text-baax-700 dark:border-baax-800 dark:bg-baax-900/20 dark:text-baax-300">
              <Zap className="mr-2 h-4 w-4" />
              v1.1.0 - Beta Release
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl xl:text-7xl">
                Build Backend
                <span className="bg-gradient-to-r from-baax-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Lightning Fast
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Scaffold production-ready backend projects in seconds. Choose your framework, database, and deploy instantly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                <Terminal className="mr-2 h-4 w-4" />
                View Examples
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-baax-600">500+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-baax-600">3</div>
                <div className="text-sm text-muted-foreground">Frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-baax-600">5</div>
                <div className="text-sm text-muted-foreground">Databases</div>
              </div>
            </div>
          </div>

          {/* Terminal Demo */}
          <div className="relative">
            <div className="rounded-lg border bg-slate-950 p-1 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-slate-400 ml-4">Terminal</div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-green-400">$ npx create-baax my-app</div>
                  <div className="text-slate-400"># Setting up your project...</div>
                  <div className="text-blue-400">? Select Backend framework: Express.js</div>
                  <div className="text-blue-400">? Select database: MongoDB</div>
                  <div className="text-blue-400">? Setup Docker? Yes</div>
                  <div className="text-blue-400">? Initialize Git? Yes</div>
                  <div className="text-yellow-400 mt-4">✨ Project created successfully!</div>
                  <div className="text-slate-400">
                    <div>  📁 src/controllers</div>
                    <div>  📁 src/models</div>
                    <div>  📁 src/routes</div>
                    <div>  📁 src/middleware</div>
                  </div>
                  <div className="text-green-400 mt-4">$ cd my-app && npm run dev</div>
                  <div className="text-slate-400">🚀 Server running on http://localhost:3000</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-baax-500/10 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-purple-500/10 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
