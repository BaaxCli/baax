import React from 'react';
import { 
  Zap, 
  Database, 
  Code2, 
  Rocket, 
  Shield, 
  GitBranch,
  Docker,
  Settings
} from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Lightning Fast Setup',
    description: 'Generate complete backend projects in under 30 seconds with zero configuration.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Multiple Frameworks',
    description: 'Choose from Express.js, NestJS, Fastify with more frameworks coming soon.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Database Ready',
    description: 'Pre-configured with MongoDB, PostgreSQL, MySQL with models and connections.',
    gradient: 'from-green-500 to-emerald-500'
  },
 
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Security First',
    description: 'Built-in authentication, JWT tokens, bcrypt hashing, and security middleware.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: <GitBranch className="h-8 w-8" />,
    title: 'Version Control',
    description: 'Automatic Git initialization with proper .gitignore and commit structure.',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: 'Environment Config',
    description: 'Pre-configured environment variables and development tools setup.',
    gradient: 'from-gray-500 to-slate-500'
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'Deploy Ready',
    description: 'Production-optimized builds ready for deployment to any platform.',
    gradient: 'from-orange-500 to-red-500'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-baax-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Build Faster
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Baax provides a complete toolkit for modern backend development. 
            Focus on your business logic while we handle the boilerplate.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-baax-200 dark:hover:border-baax-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="font-bold text-xl mb-3 group-hover:text-baax-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
