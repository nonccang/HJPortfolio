
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeMode } from '../types';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
  mode: ThemeMode;
  toggleMode: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, mode, toggleMode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLight = mode === 'light';

  const navItems = [
    { name: 'WORK', path: '/' },
    { name: 'MOTION', path: '/motion' },
    { name: 'ILLUSTRATION', path: '/illustration' },
    { name: 'PHOTOGRAPHY', path: '/photography' },
    { name: 'ABOUT', path: '/about' },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isLight 
        ? 'bg-[#FDFCF9] text-[#121212] theme-magazine-serif' 
        : 'bg-[#000000] text-[#ffffff] theme-ios-sans'
    }`}>
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-[60] px-6 py-6 md:px-12 md:py-8 flex justify-between items-center transition-all duration-500 ${
        isLight ? 'bg-[#FDFCF9]/90 border-b border-zinc-300' : 'bg-black/90'
      } backdrop-blur-md`}>
        <Link to="/" className={`text-2xl font-black tracking-tight uppercase ${isLight ? 'theme-magazine-serif' : 'theme-ios-sans'}`}>
          {isLight ? 'The Portfolio' : 'STUDIO'}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-10 text-[1rem] font-bold items-center tracking-widest uppercase">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:opacity-100 transition-all duration-300 relative group ${
                location.pathname === item.path 
                  ? 'opacity-100' 
                  : (isLight ? 'opacity-60 text-zinc-700' : 'opacity-60')
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                isLight ? 'bg-black' : 'bg-white'
              } ${location.pathname === item.path ? 'w-full' : ''}`} />
            </Link>
          ))}
        </nav>

        {/* Hamburger Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-[70] p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-8 h-5 flex flex-col justify-between">
            <span className={`h-1 w-full transition-all duration-300 origin-left ${isLight ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-x-1 translate-y-px' : ''}`} />
            <span className={`h-1 w-full transition-all duration-300 ${isLight ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-1 w-full transition-all duration-300 origin-left ${isLight ? 'bg-black' : 'bg-white'} ${isMenuOpen ? '-rotate-45 translate-x-1 -translate-y-px' : ''}`} />
          </div>
        </button>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <div className={`fixed inset-0 z-[55] transition-all duration-500 lg:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } ${isLight ? 'bg-[#FDFCF9]' : 'bg-black'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navItems.map((item, idx) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-3xl font-black tracking-tighter uppercase transition-all duration-500 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${location.pathname === item.path ? 'opacity-100' : 'opacity-40'}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* FLOATING THEME TOGGLE (BOTTOM RIGHT) */}
      <div className="fixed bottom-8 right-8 z-[100] md:bottom-12 md:right-12">
        <ThemeToggle mode={mode} onToggle={toggleMode} />
      </div>

      <main key={location.pathname} className="pt-32 pb-24 md:px-12 px-6 max-w-[1440px] mx-auto fade-in-view">
        {children}
      </main>

      <footer className={`p-12 text-center text-[0.9rem] tracking-[0.2em] font-bold uppercase ${
        isLight ? 'border-t border-zinc-300 text-zinc-600' : 'border-t border-zinc-900 text-zinc-500'
      }`}>
        CREATIVE STUDIO &copy; MMXXIV. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default Layout;
