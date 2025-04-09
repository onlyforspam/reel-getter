
import React from 'react';
import { Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-center p-6 w-full">
      <div className="flex items-center gap-3">
        <Instagram size={32} className="text-instagram-purple" />
        <h1 className="text-3xl font-bold bg-instagram-gradient bg-clip-text text-transparent">Reel Getter</h1>
      </div>
    </header>
  );
};

export default Header;
