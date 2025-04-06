
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-7 w-7 rounded-full bg-gradient-to-br from-baax-500 to-baax-700">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">B</div>
              </div>
              <span className="font-bold text-xl">baax</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              A modern CLI tool for generating boilerplate code and project scaffolding.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} baax. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li><Link to="/docs/getting-started" className="text-muted-foreground hover:text-foreground">Getting Started</Link></li>
              <li><Link to="/docs/frameworks" className="text-muted-foreground hover:text-foreground">Frameworks</Link></li>
              <li><Link to="/docs/databases" className="text-muted-foreground hover:text-foreground">Databases</Link></li>
              <li><Link to="/docs/config" className="text-muted-foreground hover:text-foreground">Configuration</Link></li>
              <li><Link to="/docs/api" className="text-muted-foreground hover:text-foreground">API Reference</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/yourusername/baax" className="text-muted-foreground hover:text-foreground">GitHub</a></li>
              <li><a href="https://discord.gg/baax" className="text-muted-foreground hover:text-foreground">Discord</a></li>
              <li><a href="https://twitter.com/baaxjs" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link to="/contributors" className="text-muted-foreground hover:text-foreground">Contributors</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">More</h3>
            <ul className="space-y-2">
              <li><Link to="/examples" className="text-muted-foreground hover:text-foreground">Examples</Link></li>
              <li><Link to="/tutorials" className="text-muted-foreground hover:text-foreground">Tutorials</Link></li>
              <li><Link to="/showcase" className="text-muted-foreground hover:text-foreground">Showcase</Link></li>
              <li><Link to="/releases" className="text-muted-foreground hover:text-foreground">Release Notes</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
