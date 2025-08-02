import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Discord, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-muted/20">
      <div className="container px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-baax-500 to-baax-700">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">B</div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-baax-600 to-purple-600 bg-clip-text text-transparent">
                Baax
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              The fastest way to scaffold production-ready backend applications. 
              Built for developers who value speed and quality.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/neelamnagarajgithub/baax" 
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-baax-500 hover:text-white transition-all duration-200"
                target="_blank" 
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              {/* <a 
                href="https://discord.com/invite/Keku7ThKuP" 
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-baax-500 hover:text-white transition-all duration-200"
                target="_blank" 
                rel="noreferrer"
              >
                <Discord className="h-5 w-5" />
              </a> */}
              <a 
                href="https://twitter.com/baaxjs" 
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-baax-500 hover:text-white transition-all duration-200"
                target="_blank" 
                rel="noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-muted-foreground hover:text-baax-600 transition-colors">Documentation</Link></li>
              <li><Link to="/examples" className="text-muted-foreground hover:text-baax-600 transition-colors">Examples</Link></li>
              <li><Link to="/templates" className="text-muted-foreground hover:text-baax-600 transition-colors">Templates</Link></li>
              <li><Link to="/changelog" className="text-muted-foreground hover:text-baax-600 transition-colors">Changelog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/guides" className="text-muted-foreground hover:text-baax-600 transition-colors">Guides</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-baax-600 transition-colors">Blog</Link></li>
              <li><Link to="/showcase" className="text-muted-foreground hover:text-baax-600 transition-colors">Showcase</Link></li>
              <li><a href="https://discord.com/invite/Keku7ThKuP" className="text-muted-foreground hover:text-baax-600 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="https://github.com/neelamnagarajgithub/baax/issues" className="text-muted-foreground hover:text-baax-600 transition-colors">Report Bug</a></li>
              <li><a href="https://github.com/neelamnagarajgithub/baax/discussions" className="text-muted-foreground hover:text-baax-600 transition-colors">Discussions</a></li>
              <li><Link to="/contributing" className="text-muted-foreground hover:text-baax-600 transition-colors">Contributing</Link></li>
              <li><Link to="/sponsors" className="text-muted-foreground hover:text-baax-600 transition-colors">Sponsors</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Baax. Made with 
            <Heart className="h-4 w-4 text-red-500 fill-current" /> 
            by{' '}
            <a 
              href="https://github.com/neelamnagarajgithub" 
              className="text-baax-600 hover:underline"
              target="_blank" 
              rel="noreferrer"
            >
              Nagaraj Neelam
            </a>
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-baax-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-baax-600 transition-colors">Terms of Service</Link>
            <Link to="/license" className="hover:text-baax-600 transition-colors">MIT License</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
