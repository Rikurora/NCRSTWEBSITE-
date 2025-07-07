import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  badge?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'gold' | 'grey';
}

export function Card({ 
  title, 
  description, 
  icon: Icon, 
  onClick, 
  className = '', 
  badge, 
  children,
  variant = 'default'
}: CardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gold':
        return 'bg-gradient-to-br from-[#ffd332] to-[#e6be2d] text-[#777675] hover:from-[#e6be2d] hover:to-[#d4a829]';
      case 'grey':
        return 'bg-gradient-to-br from-[#777675] to-[#6a6968] text-white hover:from-[#6a6968] hover:to-[#5a5958]';
      default:
        return 'bg-white hover:bg-gray-50 border-gray-200 hover:border-[#ffd332]';
    }
  };

  const getIconClasses = () => {
    switch (variant) {
      case 'gold':
        return 'bg-[#777675] text-[#ffd332]';
      case 'grey':
        return 'bg-[#ffd332] text-[#777675]';
      default:
        return 'bg-gradient-to-br from-[#ffd332] to-[#e6be2d] text-[#777675]';
    }
  };

  return (
    <div
      className={`relative rounded-xl shadow-lg border-2 p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
        onClick ? 'cursor-pointer' : ''
      } ${getVariantClasses()} ${className}`}
      onClick={onClick}
    >
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-bold rounded-full bg-red-500 text-white">
            {badge}
          </span>
        </div>
      )}
      
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getIconClasses()}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className={`text-sm mb-4 ${variant === 'default' ? 'text-gray-600' : 'opacity-90'}`}>
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}