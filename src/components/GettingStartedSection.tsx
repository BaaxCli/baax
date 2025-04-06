
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GettingStartedSection: React.FC = () => {
  return (
    <section className="py-16 container px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Start building your application in minutes with baax's intuitive command-line interface.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="npm" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4">
            <div className="code-block">
              <pre><code>
                <span className="comment"># Install globally</span>{"\n"}
                <span className="function">npm</span> <span className="keyword">install</span> -g baax{"\n\n"}
                <span className="comment"># Or use without installing</span>{"\n"}
                <span className="function">npx</span> baax create my-project
              </code></pre>
            </div>
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <div className="code-block">
              <pre><code>
                <span className="comment"># Install globally</span>{"\n"}
                <span className="function">yarn</span> <span className="keyword">global add</span> baax{"\n\n"}
                <span className="comment"># Or use without installing</span>{"\n"}
                <span className="function">yarn</span> dlx baax create my-project
              </code></pre>
            </div>
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4">
            <div className="code-block">
              <pre><code>
                <span className="comment"># Install globally</span>{"\n"}
                <span className="function">pnpm</span> <span className="keyword">add</span> -g baax{"\n\n"}
                <span className="comment"># Or use without installing</span>{"\n"}
                <span className="function">pnpm</span> dlx baax create my-project
              </code></pre>
            </div>
          </TabsContent>
        </Tabs>

        <h3 className="text-xl font-bold mb-4">Interactive Setup</h3>
        <div className="code-block mb-8">
          <pre><code>
            $ npx baax create my-awesome-project{"\n\n"}
            <span className="comment"># You'll be prompted to select options:</span>{"\n\n"}
            <span className="variable">? Project name:</span> my-awesome-project{"\n"}
            <span className="variable">? Select a framework:</span> React{"\n"}
            <span className="variable">? Select a variant:</span> TypeScript + SWC{"\n"}
            <span className="variable">? Select a database:</span> MongoDB{"\n"}
            <span className="variable">? Select UI library:</span> Tailwind CSS{"\n"}
            <span className="variable">? Add state management:</span> Redux Toolkit{"\n"}
            <span className="variable">? Set up testing:</span> Vitest{"\n\n"}
            <span className="comment"># Scaffolding project...</span>{"\n"}
            <span className="comment"># Installing dependencies...</span>{"\n\n"}
            <span className="keyword">Done!</span> Created my-awesome-project at /path/to/my-awesome-project{"\n"}
            <span className="keyword">Next steps:</span>{"\n"}
            <span className="function">  cd</span> my-awesome-project{"\n"}
            <span className="function">  npm run</span> dev
          </code></pre>
        </div>

        <div className="flex justify-center">
          <Button size="lg">Read Full Documentation</Button>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
