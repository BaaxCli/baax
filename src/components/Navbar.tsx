
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Menu } from "lucide-react";
import ThemeToggle from './ThemeToggle';

type NavbarProps = {
  onMenuToggle: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuToggle}>
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-7 w-7 rounded-full bg-gradient-to-br from-baax-500 to-baax-700">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">B</div>
            </div>
            <span className="hidden sm:inline-block font-bold text-xl">baax</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/docs" className="font-medium transition-colors hover:text-primary">
            Documentation
          </Link>
          <Link to="/examples" className="font-medium transition-colors hover:text-primary">
            Examples
          </Link>
          <Link to="/community" className="font-medium transition-colors hover:text-primary">
            Community
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/yourusername/baax" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild>
            <a href="https://www.npmjs.com/package/baax" target="_blank" rel="noreferrer">
              Install
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
