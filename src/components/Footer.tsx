import React from 'react';
import { Puzzle, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Puzzle className="h-8 w-8 text-pink-400" />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              PuzzleCAns
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-pink-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-pink-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-pink-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-purple-800 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                App
              </h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-pink-400 transition-colors">Features</a></li>
                <li><a href="#how-to-play" className="text-gray-400 hover:text-pink-400 transition-colors">How to Play</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-pink-400 transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Resources
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Company
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Legal
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} PuzzleCAns. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;