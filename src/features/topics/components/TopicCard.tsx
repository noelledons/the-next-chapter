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
      className="focus-card group h-full cursor-pointer"
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
      role="article"
      tabIndex={0}
      aria-label={`Explore ${title}`}
    >
      <div className="flex items-start justify-between">
        <div className="focus-icon transition-transform duration-300 group-hover:scale-110">{icon}</div>
        <span className="rounded-full border border-gold/20 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-dark">
          Focus
        </span>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="mb-3 text-xl font-semibold text-navy">{title}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-navy/80">{description}</p>

        <div className="mt-auto">
          <Button
            variant="outline"
            className="w-full py-2 text-sm"
            onClick={(event) => {
              event.stopPropagation();
              onClick?.();
            }}
          >
            {actionText}
          </Button>
        </div>
      </div>
    </Card>
  );
};