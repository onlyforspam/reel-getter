
import React from 'react';
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
          <div className="bg-muted rounded-md p-4 w-full max-w-xs aspect-[9/16] flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Video Preview</p>
              <p className="text-xs text-muted-foreground">[Preview not available in demo]</p>
            </div>
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
