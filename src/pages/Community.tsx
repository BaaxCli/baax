
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Twitter, Globe, MessageSquare, Users, Video } from 'lucide-react';

const Community = () => {
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join the baax Community</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with other developers, get help, and contribute to the baax ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Github className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle>GitHub</CardTitle>
              <CardDescription>Star us, fork the repo, report issues, or contribute code.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our GitHub repository is the central hub for baax development. Follow along with the latest updates and help us improve.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <a href="https://github.com/yourusername/baax" target="_blank" rel="noreferrer">
                  Visit GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle>Discord</CardTitle>
              <CardDescription>Join our Discord server to chat with the community.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get real-time help, share your projects, and join discussions about baax and modern web development.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <a href="https://discord.gg/baax" target="_blank" rel="noreferrer">
                  Join Discord
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Twitter className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle>Twitter</CardTitle>
              <CardDescription>Follow us for the latest news and updates.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stay updated with announcements, tips, and connect with other baax users. Share your projects!
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <a href="https://twitter.com/baaxcli" target="_blank" rel="noreferrer">
                  Follow @baaxcli
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="p-1.5 rounded-full bg-primary/10 mr-2">
                    <Video className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Webinar</span>
                </div>
                <CardTitle>Building Production-ready Applications with baax</CardTitle>
                <CardDescription>May 15, 2025 • 1:00 PM EST</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join us as we dive deep into advanced configurations and optimizations for production applications built with baax.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Register Now</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="p-1.5 rounded-full bg-primary/10 mr-2">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Meetup</span>
                </div>
                <CardTitle>baax Community Meetup - New York City</CardTitle>
                <CardDescription>June 10, 2025 • 6:30 PM EST</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with other baax users and the core team in NYC. Food, drinks, and code will be provided!
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">RSVP</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Community Showcase</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Finance Dashboard</CardTitle>
                <CardDescription>By Sarah Johnson</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <div className="text-3xl font-semibold text-muted-foreground">Preview</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  A comprehensive financial dashboard built with React, TypeScript, and Chart.js.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="#">View Project</a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recipe Finder</CardTitle>
                <CardDescription>By Michael Chen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <div className="text-3xl font-semibold text-muted-foreground">Preview</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  An application to find recipes based on available ingredients using Vue.js and Firebase.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="#">View Project</a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Task Management</CardTitle>
                <CardDescription>By Alex Rivera</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <div className="text-3xl font-semibold text-muted-foreground">Preview</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  A collaborative task management tool built with Svelte and Supabase.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="#">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button>Submit Your Project</Button>
          </div>
        </div>
        
        <div className="bg-muted p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Contribute?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            baax is an open-source project that thrives thanks to contributions from developers like you.
            Help us improve by contributing code, documentation, or ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <a href="https://github.com/yourusername/baax/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">
                Contribution Guide
              </a>
            </Button>
            <Button asChild>
              <a href="https://github.com/yourusername/baax/issues" target="_blank" rel="noreferrer">
                View Open Issues
              </a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
