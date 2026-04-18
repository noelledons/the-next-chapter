import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-6 flex justify-between items-center border-b border-gold/30 mb-8">
      <div className="flex items-center gap-2">
        {/* A simple compass SVG placeholder matching your theme */}
        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-navy tracking-tight">
          The Next Chapter
        </h1>
      </div>
      
      <nav className="hidden md:flex gap-6 font-medium text-navy/80">
        <a href="#" className="hover:text-gold transition-colors">Dashboard</a>
        <a href="#" className="hover:text-gold transition-colors">Explore</a>
        <a href="#" className="hover:text-gold transition-colors">My Path</a>
        <a href="#" className="hover:text-gold transition-colors">Community</a>
      </nav>

      <div className="hidden md:block">
         <a href="#" className="font-medium hover:text-gold transition-colors">Profile</a>
      </div>
    </header>
  );
};