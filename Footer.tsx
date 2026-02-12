import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">RealEstate</h3>
          <p className="text-gray-400">Your trusted partner in finding the perfect home.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Sitemap</a>
        </div>
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} RealEstate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
