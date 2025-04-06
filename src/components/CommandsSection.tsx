
import React from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const commands = [
  {
    name: 'create',
    description: 'Create a new project',
    usage: 'baax create [project-name]',
    example: 'baax create my-app',
    options: [
      { flag: '--template, -t', description: 'Specify a template' },
      { flag: '--typescript, --ts', description: 'Use TypeScript' },
      { flag: '--force, -f', description: 'Overwrite if the directory exists' }
    ]
  },
  {
    name: 'add',
    description: 'Add features to existing project',
    usage: 'baax add [feature]',
    example: 'baax add auth',
    options: [
      { flag: '--db', description: 'Add database connection' },
      { flag: '--ui', description: 'Add UI library' },
      { flag: '--state', description: 'Add state management' }
    ]
  },
  {
    name: 'info',
    description: 'Display information about the project',
    usage: 'baax info',
    example: 'baax info',
    options: [
      { flag: '--json', description: 'Output in JSON format' },
      { flag: '--deps', description: 'Show dependencies' }
    ]
  },
  {
    name: 'update',
    description: 'Update to the latest version',
    usage: 'baax update',
    example: 'baax update',
    options: [
      { flag: '--check', description: 'Check for updates' },
      { flag: '--force', description: 'Force update' }
    ]
  }
];

const CommandsSection: React.FC = () => {
  return (
    <section className="py-16 container px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">CLI Commands</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore baax's powerful command-line interface for efficient project management
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {commands.map((command) => (
          <Card key={command.name}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <code className="bg-secondary px-2 py-1 rounded mr-2 text-primary">
                  {command.name}
                </code>
              </CardTitle>
              <CardDescription>{command.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Usage</h4>
                <div className="code-block">
                  <pre><code>{command.usage}</code></pre>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Example</h4>
                <div className="code-block">
                  <pre><code>{command.example}</code></pre>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Options</h4>
                <ul className="space-y-2">
                  {command.options.map((option, index) => (
                    <li key={index} className="flex">
                      <code className="bg-secondary px-2 py-1 rounded mr-2 text-sm">
                        {option.flag}
                      </code>
                      <span className="text-sm">{option.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CommandsSection;
