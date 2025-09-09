
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-center py-6 mt-12 border-t border-gray-800">
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} Sparkle Crackers. All Rights Reserved.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Place your orders safely via WhatsApp. Happy Celebrating!
      </p>
    </footer>
  );
};

export default Footer;
