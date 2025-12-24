
import React from 'react';
import { GalleryItem, ThemeMode } from '../types';

interface GalleryViewProps {
  items: GalleryItem[];
  title: string;
  subtitle: string;
  mode: ThemeMode;
}

const GalleryView: React.FC<GalleryViewProps> = ({ items, title, subtitle, mode }) => {
  const isLight = mode === 'light';

  return (
    <div className="w-full">
      <div className="mb-16">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 font-black leading-none uppercase ${isLight ? 'theme-magazine-serif' : 'theme-ios-sans'}`}>
          {title}
        </h1>
        <p className={`max-w-xl text-[1.1rem] leading-relaxed font-bold ${isLight ? 'text-zinc-700' : 'text-zinc-400'}`}>
          {subtitle}
        </p>
      </div>

      <div className="masonry-grid gap-8 space-y-8">
        {items.map((item) => (
          <div
            key={item.id}
            className={`break-inside-avoid relative overflow-hidden group transition-all duration-700 ${
              isLight ? 'border border-zinc-200 bg-white' : 'rounded-2xl bg-zinc-900 p-1.5'
            }`}
          >
            <div className={`relative overflow-hidden ${isLight ? '' : 'rounded-[14px]'}`}>
              <img
                src={item.url}
                alt={item.title}
                className={`w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110`}
              />
              
              {/* Simple interaction overlay without text */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
