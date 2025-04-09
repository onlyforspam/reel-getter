
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Copy Link',
      description: 'Find an Instagram Reel you want to download and copy its URL.'
    },
    {
      number: 2,
      title: 'Paste URL',
      description: 'Paste the Instagram Reel URL in the input field above.'
    },
    {
      number: 3,
      title: 'Download',
      description: 'Click the download button and save your video.'
    }
  ];

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        {steps.map((step) => (
          <Card key={step.number} className="flex-1 border-2 border-muted relative">
            <div className="absolute -top-4 -left-4 bg-instagram-gradient w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
              {step.number}
            </div>
            <CardContent className="pt-8">
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
