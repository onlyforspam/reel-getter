
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm text-muted-foreground">
      <p>
        This tool is for personal use only. All Instagram content belongs to their respective owners.
      </p>
      <p className="mt-2">
        © {new Date().getFullYear()} Reel Getter - Not affiliated with Instagram
      </p>
    </footer>
  );
};

export default Footer;
