import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

const FrameworkComparison = () => {
  const frameworks = [
    {
      name: 'Express.js',
      language: 'JavaScript',
      status: 'Available',
      statusColor: 'bg-green-100 text-green-800',
      features: {
        'Project Scaffolding': true,
        'Database Integration': true,
        'Authentication': true,
        'Docker Support': true,
        'Testing Setup': true,
        'API Documentation': false,
      }
    },
    {
      name: 'NestJS',
      language: 'JavaScript',
      status: 'Available',
      statusColor: 'bg-green-100 text-green-800',
      features: {
        'Project Scaffolding': true,
        'Database Integration': true,
        'Authentication': true,
        'Docker Support': true,
        'Testing Setup': true,
        'API Documentation': true,
      }
    },
    {
      name: 'Fastify',
      language: 'JavaScript',
      status: 'Available',
      statusColor: 'bg-green-100 text-green-800',
      features: {
        'Project Scaffolding': true,
        'Database Integration': true,
        'Authentication': true,
        'Docker Support': true,
        'Testing Setup': true,
        'API Documentation': false,
      }
    },
    {
      name: 'FastAPI',
      language: 'Python',
      status: 'Coming Soon',
      statusColor: 'bg-yellow-100 text-yellow-800',
      features: {
        'Project Scaffolding': false,
        'Database Integration': false,
        'Authentication': false,
        'Docker Support': false,
        'Testing Setup': false,
        'API Documentation': false,
      }
    },
    {
      name: 'Flask',
      language: 'Python',
      status: 'Coming Soon',
      statusColor: 'bg-yellow-100 text-yellow-800',
      features: {
        'Project Scaffolding': false,
        'Database Integration': false,
        'Authentication': false,
        'Docker Support': false,
        'Testing Setup': false,
        'API Documentation': false,
      }
    },
    {
      name: 'Django',
      language: 'Python',
      status: 'Coming Soon',
      statusColor: 'bg-yellow-100 text-yellow-800',
      features: {
        'Project Scaffolding': false,
        'Database Integration': false,
        'Authentication': false,
        'Docker Support': false,
        'Testing Setup': false,
        'API Documentation': false,
      }
    }
  ];

  const featureList = [
    'Project Scaffolding',
    'Database Integration',
    'Authentication',
    'Docker Support',
    'Testing Setup',
    'API Documentation'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenuToggle={() => {}} />
      
      <main className="container py-12 flex-grow">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Framework Comparison</h1>
          <p className="text-xl text-muted-foreground">
            Compare features and availability across all supported frameworks
          </p>
        </div>

        {/* Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {frameworks.map((framework) => (
            <Card key={framework.name} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{framework.name}</CardTitle>
                  <Badge variant="outline">{framework.language}</Badge>
                </div>
                <Badge className={framework.statusColor}>
                  {framework.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {featureList.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      {framework.features[feature] ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : framework.status === 'Coming Soon' ? (
                        <Clock className="h-4 w-4 text-yellow-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card>
          <CardHeader>
            <CardTitle>Feature Comparison Table</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Framework</th>
                    <th className="text-left p-3">Language</th>
                    <th className="text-center p-3">Status</th>
                    {featureList.map((feature) => (
                      <th key={feature} className="text-center p-3 text-xs">{feature}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {frameworks.map((framework) => (
                    <tr key={framework.name} className="border-b hover:bg-muted/50">
                      <td className="p-3 font-medium">{framework.name}</td>
                      <td className="p-3">{framework.language}</td>
                      <td className="p-3 text-center">
                        <Badge className={framework.statusColor}>
                          {framework.status}
                        </Badge>
                      </td>
                      {featureList.map((feature) => (
                        <td key={feature} className="p-3 text-center">
                          {framework.features[feature] ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          ) : framework.status === 'Coming Soon' ? (
                            <Clock className="h-4 w-4 text-yellow-500 mx-auto" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default FrameworkComparison;