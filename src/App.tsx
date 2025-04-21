import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowToPlaySection from './components/HowToPlaySection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'PuzzleCAns - AR Puzzle Adventure';
    
    // Select the title element that has data-default attribute
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      titleElement.removeAttribute('data-default');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowToPlaySection />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;