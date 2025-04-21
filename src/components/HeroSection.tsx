import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FloatingBlock } from './FloatingBlock';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-500 via-indigo-400 to-blue-500 pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingBlock size={60} color="rgba(255, 255, 255, 0.3)" top="10%" left="10%" speed={3} />
        <FloatingBlock size={40} color="rgba(99, 102, 241, 0.4)" top="30%" left="85%" speed={2} />
        <FloatingBlock size={50} color="rgba(244, 114, 182, 0.3)" top="70%" left="15%" speed={4} />
        <FloatingBlock size={25} color="rgba(52, 211, 153, 0.4)" top="60%" left="80%" speed={3.5} />
        <FloatingBlock size={35} color="rgba(251, 191, 36, 0.3)" top="20%" left="60%" speed={2.5} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
              PuzzleCAns
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-2 text-white">
              AR Puzzle Adventure
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Blend real world with digital puzzles in an immersive augmented reality experience. 
            Place, rotate, and solve 3D puzzles in your environment!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#download" 
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Download Now
            </a>
            <a 
              href="#features" 
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-white/80 hover:text-white transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;