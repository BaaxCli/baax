// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { Github, Menu } from "lucide-react";
// import ThemeToggle from './ThemeToggle';

// type NavbarProps = {
//   onMenuToggle: () => void;
// };

// const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
//       <div className="container flex h-16 items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuToggle}>
//             <Menu className="h-5 w-5" />
//           </Button>
//           <Link to="/" className="flex items-center gap-2">
//           <img src={`/logo.png`} alt="Logo" className="h-8 w-8 object-cover rounded-full" />
//             <span className="hidden sm:inline-block font-bold text-xl">Baax</span>
//           </Link>
//         </div>
        
//         <nav className="hidden md:flex items-center gap-6 text-sm">
//           <Link to="/" className="font-medium transition-colors hover:text-primary">
//             Home
//           </Link>
//           <Link to="/docs" className="font-medium transition-colors hover:text-primary">
//             Documentation
//           </Link>
//           <Link to="/examples" className="font-medium transition-colors hover:text-primary">
//             Examples
//           </Link>
//           <Link to="/community" className="font-medium transition-colors hover:text-primary">
//             Community
//           </Link>
//         </nav>
        
//         <div className="flex items-center gap-2">
//           <ThemeToggle />
//           <Button variant="outline" size="icon" asChild>
//             <a href="https://github.com/neelamnagarajgithub/baax" target="_blank" rel="noreferrer">
//               <Github className="h-4 w-4" />
//             </a>
//           </Button>
//           <Button asChild>
//             <a href="https://www.npmjs.com/package/baax" target="_blank" rel="noreferrer">
//               Install
//             </a>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Menu, Star, Download, ChevronDown } from "lucide-react";
import ThemeToggle from './ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type NavbarProps = {
  onMenuToggle: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled 
        ? 'border-border bg-background/80 backdrop-blur-xl' 
        : 'border-transparent bg-transparent'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuToggle}>
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-3">
            <img src={`/logo.png`} alt="Logo" className="h-8 w-8 object-cover rounded-full" />
            <span className="hidden sm:inline-block font-bold text-xl bg-gradient-to-r from-baax-600 to-purple-600 bg-clip-text text-transparent">
              Baax
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-baax-600">
            Home
          </Link>
          
          {/* Documentation Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Documentation
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/docs/javascript">JavaScript (Node.js)</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/docs/python">Python</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/docs/comparison">Framework Comparison</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/examples" className="transition-colors hover:text-baax-600">
            Examples
          </Link>
          <Link to="/community" className="transition-colors hover:text-baax-600">
            Community
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* GitHub Stats */}
          <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>1.2k</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>50k+</span>
            </div>
          </div>

          <ThemeToggle />
          
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/neelamnagarajgithub/baax" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          
          <Button size="sm" asChild>
            <a href="https://www.npmjs.com/package/baax" target="_blank" rel="noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
