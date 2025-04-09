
import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw } from 'lucide-react';
import { DownloadResult } from '@/services/downloadService';

interface DownloadResultProps {
  result: DownloadResult;
  onReset: () => void;
  onDownload: (url: string, filename: string) => void;
}

const DownloadResultComponent: React.FC<DownloadResultProps> = ({ 
  result, 
  onReset,
  onDownload
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Reset video when result changes
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [result]);

  if (!result.success) {
    return (
      <Card className="w-full max-w-md mx-auto border-2 border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Download Failed</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{result.error || 'An unknown error occurred'}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={onReset} className="w-full" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Try Again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto border-2 border-accent">
      <CardHeader>
        <CardTitle className="text-accent">Download Ready</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Your Instagram Reel is ready to download!
        </p>
        <div className="flex justify-center">
          <div className="rounded-md w-full max-w-xs aspect-[9/16] overflow-hidden bg-muted">
            {result.previewUrl ? (
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={result.previewUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-sm text-muted-foreground">Preview not available</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={() => result.downloadUrl && result.filename && onDownload(result.downloadUrl, result.filename)}
          className="w-full bg-instagram-gradient hover:opacity-90 transition-opacity"
        >
          <Download className="mr-2 h-4 w-4" /> Download Reel
        </Button>
        <Button onClick={onReset} variant="outline" className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" /> Download Another
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DownloadResultComponent;
