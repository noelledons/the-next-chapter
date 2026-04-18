import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
};