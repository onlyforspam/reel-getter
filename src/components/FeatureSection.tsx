
import React from 'react';
import { Video, Download, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureSection = () => {
  const features = [
    {
      icon: <Video className="h-10 w-10 text-accent" />,
      title: 'Instagram Reels',
      description: 'Download your favorite Instagram Reels quickly and easily by just pasting the URL.'
    },
    {
      icon: <Download className="h-10 w-10 text-accent" />,
      title: 'Fast Downloads',
      description: 'Our tool processes Instagram links instantly and provides high-quality downloads.'
    },
    {
      icon: <Shield className="h-10 w-10 text-accent" />,
      title: 'Private & Secure',
      description: 'We don\'t store your videos or data. Everything is processed securely and privately.'
    }
  ];

  return (
    <section className="grid gap-8 md:grid-cols-3 my-12">
      {features.map((feature, index) => (
        <Card key={index} className="border-2 border-muted">
          <CardHeader className="pb-2">
            <div className="mb-2">{feature.icon}</div>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default FeatureSection;
