
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface UrlInputProps {
  onUrlSubmit: (url: string) => void;
  isLoading: boolean;
}

const UrlInput: React.FC<UrlInputProps> = ({ onUrlSubmit, isLoading }) => {
  const [url, setUrl] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation for Instagram URLs
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter an Instagram Reel URL",
        variant: "destructive",
      });
      return;
    }
    
    if (!url.includes('instagram.com')) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Instagram URL",
        variant: "destructive",
      });
      return;
    }
    
    onUrlSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          type="url"
          placeholder="Paste Instagram Reel URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 text-base h-12 border-2 focus-visible:ring-accent"
        />
        <Button 
          type="submit" 
          className="h-12 bg-instagram-gradient hover:opacity-90 transition-opacity"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Download size={20} />
              Download
            </span>
          )}
        </Button>
      </div>
    </form>
  );
};

export default UrlInput;
