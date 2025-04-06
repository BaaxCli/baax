
import React from 'react';
import { 
  BoxSelect, 
  Code, 
  Database, 
  Gauge, 
  PaintBucket, 
  Puzzle, 
  Rocket, 
  Sliders 
} from 'lucide-react';

const features = [
  {
    icon: <BoxSelect className="h-10 w-10" />,
    title: 'Framework Selection',
    description: 'Choose from popular frameworks like React, Vue, Angular, and more to kickstart your project.'
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: 'Database Integration',
    description: 'Seamlessly integrate with MongoDB, PostgreSQL, MySQL, and other databases.'
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: 'TypeScript Support',
    description: 'First-class TypeScript support with pre-configured tsconfig and type definitions.'
  },
  {
    icon: <Puzzle className="h-10 w-10" />,
    title: 'Plugin System',
    description: 'Extend functionality with plugins for authentication, state management, and more.'
  },
  {
    icon: <Gauge className="h-10 w-10" />,
    title: 'Optimized Performance',
    description: 'Generate lean projects optimized for development and production.'
  },
  {
    icon: <PaintBucket className="h-10 w-10" />,
    title: 'UI Libraries',
    description: 'Choose from popular UI libraries like Tailwind CSS, Material UI, or Bootstrap.'
  },
  {
    icon: <Sliders className="h-10 w-10" />,
    title: 'Customizable',
    description: 'Fine-tune your project setup with customizable options and configurations.'
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: 'Instant Deployment',
    description: 'Deploy-ready setup with configurations for various deployment platforms.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Baax?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Baax streamlines the project setup process, letting you focus on building features instead of configuring tools.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
