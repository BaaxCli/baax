
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Here you would typically send this to your backend
    console.log('Subscribing email:', email);
    
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 bg-baax-700 text-white">
      <div className="container px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 text-baax-100">
            Subscribe to our newsletter for the latest updates, tutorials, and tips for using baax.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-baax-600 border-baax-500 text-white placeholder:text-baax-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-white text-baax-700 hover:bg-baax-100">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-baax-200">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
