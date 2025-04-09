
/**
 * This is a mock service for demonstration purposes.
 * In a real application, this would need to be implemented with a proper backend
 * due to CORS limitations and Instagram's restrictions.
 */

export interface DownloadResult {
  success: boolean;
  downloadUrl?: string;
  filename?: string;
  error?: string;
  previewUrl?: string; // Added previewUrl property
}

export const downloadInstagramReel = async (url: string): Promise<DownloadResult> => {
  // Simulate API request
  return new Promise((resolve) => {
    // Simulate loading
    setTimeout(() => {
      try {
        // Check if URL is from Instagram (basic validation)
        if (!url.includes('instagram.com')) {
          resolve({
            success: false,
            error: 'Invalid Instagram URL'
          });
          return;
        }

        // In a real app, this would call a server-side API to process the Instagram URL
        // For demo purposes, we'll simulate a successful response with a sample video
        
        // Sample video URL for preview and download (using a royalty-free sample)
        const videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-in-a-lake-10483-large.mp4';
        
        resolve({
          success: true,
          downloadUrl: videoUrl,
          previewUrl: videoUrl, // Added preview URL
          filename: 'instagram-reel-' + Date.now() + '.mp4'
        });
      } catch (error) {
        resolve({
          success: false,
          error: 'Failed to process the Instagram URL'
        });
      }
    }, 2000); // Simulate 2 second processing time
  });
};

// This function triggers the browser's download mechanism
export const triggerDownload = (url: string, filename: string): void => {
  // Create an invisible anchor element to trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  setTimeout(() => {
    document.body.removeChild(link);
  }, 100);
  
  console.log(`Downloading ${filename} from ${url}`);
};
