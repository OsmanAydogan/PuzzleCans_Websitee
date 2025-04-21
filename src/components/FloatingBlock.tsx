import React, { useEffect, useState } from 'react';

interface FloatingBlockProps {
  size: number;
  color: string;
  top: string;
  left: string;
  speed: number;
}

export const FloatingBlock: React.FC<FloatingBlockProps> = ({ size, color, top, left, speed }) => {
  const [position, setPosition] = useState({ y: 0, x: 0 });
  const [direction, setDirection] = useState({ y: 1, x: 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPos => {
        // Small random movement
        const newX = prevPos.x + (direction.x * 0.1 * speed);
        const newY = prevPos.y + (direction.y * 0.1 * speed);
        
        // Change direction occasionally
        if (Math.random() > 0.98) {
          setDirection(prev => ({ 
            x: prev.x * -1, 
            y: prev.y 
          }));
        }
        
        if (Math.random() > 0.98) {
          setDirection(prev => ({ 
            x: prev.x, 
            y: prev.y * -1 
          }));
        }
        
        return { x: newX, y: newY };
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, [speed, direction]);

  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{
        top,
        left,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: '8px',
        transform: `translate(${position.x}px, ${position.y}px) rotate(${position.x * 2}deg)`,
        transition: 'transform 0.5s ease-out',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    />
  );
};