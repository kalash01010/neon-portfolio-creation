
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p data-text="KS" className="neon-text text-xl font-semibold">KS</p>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <p>&copy; {currentYear} Kalash Srivastava. All rights reserved.</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="#home" 
              className="text-sm hover:text-neon-blue transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
