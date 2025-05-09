
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}

const FeatureCard = ({ icon, title, description, isActive = false, onClick }: FeatureCardProps) => {
  return (
    <div 
      className={`p-6 rounded-xl transition-all duration-300 cursor-pointer gradient-card hover:shadow-lg ${
        isActive 
          ? 'border-bongo-primary border-2 shadow-lg scale-105' 
          : 'border border-gray-100 hover:border-bongo-primary/40'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4 gap-3">
        <div className={`p-3 rounded-full ${isActive ? 'bg-bongo-primary text-white' : 'bg-bongo-light text-bongo-primary'}`}>
          {icon}
        </div>
        <h3 className={`font-bold text-lg ${isActive ? 'text-bongo-primary' : 'text-gray-800'}`}>{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
