import React from 'react';
import { Download, Gift, Zap, Shield } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Puzzle Adventure?
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Download PuzzleCAns now and transform your surroundings into an immersive puzzle playground. 
                Free to play, endless fun to have!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Gift className="w-6 h-6 text-pink-300 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white">Free Download</h3>
                    <p className="text-white/80 text-sm">No hidden costs or in-app purchases required.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-pink-300 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white">Regular Updates</h3>
                    <p className="text-white/80 text-sm">New puzzles and features added frequently.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-pink-300 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white">Safe & Secure</h3>
                    <p className="text-white/80 text-sm">No data collection or privacy concerns.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white/10 backdrop-blur-lg flex items-center justify-center p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Download PuzzleCAns</h3>
                <p className="text-white/90 mb-8">
                  Currently available for Android devices.<br />
                  iOS version coming soon!
                </p>
                
                <a 
                  href="https://github.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download APK
                </a>
                
                <p className="mt-4 text-sm text-white/70">
                  Version 1.0.2 | 24MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;