import React from 'react';
import { Smartphone, LayoutGrid, Trophy, Gauge, PenTool, Cuboid as Cube } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <div className={`${gradient} p-[2px] rounded-xl transform hover:scale-105 transition-all duration-300`}>
      <div className="bg-white p-6 rounded-xl h-full">
        <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 flex items-center justify-center mb-4">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Cube className="h-6 w-6" />,
      title: "AR Interaction",
      description: "Place and manipulate 3D blocks in your real environment through your device's camera.",
      gradient: "bg-gradient-to-r from-pink-500 to-purple-500"
    },
    {
      icon: <LayoutGrid className="h-6 w-6" />,
      title: "Multiple Puzzles",
      description: "Enjoy a variety of puzzle challenges that increase in complexity as you progress.",
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-500"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Score System",
      description: "Earn points for successful placements and track your progress through different levels.",
      gradient: "bg-gradient-to-r from-indigo-500 to-blue-500"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Optimized",
      description: "Designed specifically for mobile devices with intuitive touch controls.",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Real-time Feedback",
      description: "Get instant visual and audio feedback on your puzzle-solving attempts.",
      gradient: "bg-gradient-to-r from-cyan-500 to-teal-500"
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Custom Designs",
      description: "Create and share your own puzzle designs with friends and the community.",
      gradient: "bg-gradient-to-r from-teal-500 to-green-500"
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Amazing Features
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            PuzzleCAns combines augmented reality with puzzle-solving for an immersive gaming experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;