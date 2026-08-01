import React, { type HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`flex flex-col rounded-[1.5rem] border border-gold/20 bg-white/80 p-6 shadow-[0_18px_45px_-24px_rgba(51,40,43,0.3)] transition-all duration-300 md:p-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};