
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UrlInput from '@/components/UrlInput';
import FeatureSection from '@/components/FeatureSection';
import HowItWorks from '@/components/HowItWorks';
import DownloadResultComponent from '@/components/DownloadResult';
import { downloadInstagramReel, triggerDownload, DownloadResult } from '@/services/downloadService';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadResult, setDownloadResult] = useState<DownloadResult | null>(null);
  const { toast } = useToast();

  const handleUrlSubmit = async (url: string) => {
    setIsLoading(true);
    try {
      const result = await downloadInstagramReel(url);
      setDownloadResult(result);
      
      if (result.success) {
        toast({
          title: "Success!",
          description: "Your Instagram Reel is ready to download.",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to process Instagram URL",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      setDownloadResult({
        success: false,
        error: "An unexpected error occurred"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setDownloadResult(null);
  };

  const handleDownload = (url: string, filename: string) => {
    triggerDownload(url, filename);
    toast({
      title: "Download Started",
      description: "Your video is being downloaded.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Instagram Reel Downloader</h2>
            <p className="text-xl text-muted-foreground">
              Download Instagram Reels with just a few clicks.
            </p>
          </div>
          
          {!downloadResult ? (
            <div className="flex justify-center mb-12">
              <UrlInput onUrlSubmit={handleUrlSubmit} isLoading={isLoading} />
            </div>
          ) : (
            <div className="mb-12">
              <DownloadResultComponent 
                result={downloadResult} 
                onReset={handleReset} 
                onDownload={handleDownload}
              />
            </div>
          )}
          
          <HowItWorks />
          <FeatureSection />
          
          <div className="bg-muted p-6 rounded-lg mt-8">
            <h3 className="font-bold text-lg mb-2">Disclaimer</h3>
            <p className="text-muted-foreground text-sm">
              This tool is for personal use only. Please respect copyright and intellectual property rights. 
              We don't store any of the videos downloaded through our service. By using this service, you agree 
              to comply with Instagram's Terms of Service.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
