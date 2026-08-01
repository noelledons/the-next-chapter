import React, { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Explore', href: '#focus-areas' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="theme-panel px-4 py-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3" aria-label="The Next Chapter home">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold-dark">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-navy">The Next Chapter</p>
            <p className="text-sm text-navy/60">Guidance for your next step</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                item.active
                  ? 'bg-gold/15 text-gold-dark shadow-sm'
                  : 'text-navy/70 hover:bg-gold/10 hover:text-gold-dark'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-cream/70 p-2 text-navy transition hover:border-gold hover:bg-gold/10 md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="mt-4 flex flex-col gap-2 border-t border-gold/20 pt-4 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
              className={`rounded-2xl px-3 py-2 text-sm font-medium transition ${
                item.active
                  ? 'bg-gold/15 text-gold-dark'
                  : 'text-navy/75 hover:bg-gold/10 hover:text-gold-dark'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
};