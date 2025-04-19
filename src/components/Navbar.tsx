
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
          <img src={`/logo.png`} alt="Logo" className="h-8 w-8 object-cover rounded-full" />
            <span className="hidden sm:inline-block font-bold text-xl">Baax</span>
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
            <a href="https://github.com/neelamnagarajgithub/baax" target="_blank" rel="noreferrer">
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
