import React, { type HTMLAttributes } from 'react';

// Extending standard div attributes so we can pass onClick, aria-labels, etc.
interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ 
  className = '', 
  children, 
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl border border-gold/20 
        shadow-sm hover:shadow-md transition-shadow duration-300 
        p-6 md:p-8 
        flex flex-col
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};