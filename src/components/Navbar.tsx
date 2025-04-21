import React, { useState, useEffect } from 'react';
import { Menu, X, Puzzle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Puzzle className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">PuzzleCAns</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#how-to-play" className="text-gray-700 hover:text-purple-600 transition-colors">How to Play</a>
            <a href="#download" className="text-gray-700 hover:text-purple-600 transition-colors">Download</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-to-play" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              How to Play
            </a>
            <a 
              href="#download" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;