import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-transparent px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col">
        <div className="flex-1">{children}</div>

        <footer className="mt-10 rounded-[2rem] border border-gold/30 bg-[#FFF9F5] px-6 py-6 text-center text-sm text-[#33282B] shadow-[0_12px_35px_-24px_rgba(51,40,43,0.35)] sm:px-8" aria-label="Footer">
          <p>© 2026 Noelle. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};