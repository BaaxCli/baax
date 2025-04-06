
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import GettingStartedSection from '@/components/GettingStartedSection';
import CommandsSection from '@/components/CommandsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

const Index = () => {
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
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <GettingStartedSection />
        <CommandsSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
