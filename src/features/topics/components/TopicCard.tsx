import React, { type ReactNode } from 'react';
import { Card } from '../../../components/ui/Card/Card';
import { Button } from '../../../components/ui/Button/Button';

interface TopicCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  actionText?: string;
  onClick?: () => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  title,
  description,
  icon,
  actionText = 'Explore',
  onClick,
}) => {
  return (
    <Card 
      className="h-full flex flex-col justify-between group cursor-pointer hover:border-gold/50"
      onClick={onClick}
      role="article"
    >
      <div>
        {/* The icon container with a subtle hover scaling effect */}
        <div className="text-gold mb-5 w-12 h-12 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <p className="text-navy/80 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* mt-auto pushes the button to the bottom so all cards in a grid align perfectly */}
      <div className="mt-auto">
        <Button 
          variant="outline" 
          className="w-full text-sm py-2"
          onClick={(e) => {
            // Prevent the card's onClick from firing twice if they specifically click the button
            e.stopPropagation();
            if (onClick) onClick();
          }}
        >
          {actionText}
        </Button>
      </div>
    </Card>
  );
};