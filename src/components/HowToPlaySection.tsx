import React from 'react';
import { 
  Download, 
  Smartphone, 
  Search, 
  MousePointer, 
  Check, 
  Award 
} from 'lucide-react';

interface StepCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="relative">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg">
          {number}
        </div>
        {number < 6 && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-purple-300 to-pink-300 sm:h-24"></div>
        )}
      </div>
      <div className="flex-1 pt-1">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {icon}
          </div>
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            {title}
          </h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowToPlaySection: React.FC = () => {
  const steps = [
    {
      icon: <Download className="h-5 w-5" />,
      title: "Download the App",
      description: "Install PuzzleCAns from the download link and open it on your device."
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Grant Camera Access",
      description: "Allow the app to use your camera for the augmented reality experience."
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Scan Your Environment",
      description: "Move your camera around so the app can detect surfaces to place puzzles on."
    },
    {
      icon: <MousePointer className="h-5 w-5" />,
      title: "Place and Move Blocks",
      description: "Tap to select 3D shapes and place them in the environment. Drag to move and rotate."
    },
    {
      icon: <Check className="h-5 w-5" />,
      title: "Complete Puzzles",
      description: "Arrange the blocks according to the pattern shown to solve each puzzle."
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Earn Points & Advance",
      description: "Score points for each completed puzzle and unlock new, more challenging levels."
    }
  ];

  return (
    <section id="how-to-play" className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            How To Play
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Follow these simple steps to start your augmented reality puzzle adventure.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-10">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;