
import React from 'react';
import { Link } from 'react-router-dom';
import { MOTION_WORKS } from '../constants';
import { ThemeMode } from '../types';

interface MotionProps {
  mode: ThemeMode;
}

const Motion: React.FC<MotionProps> = ({ mode }) => {
  const isLight = mode === 'light';

  return (
    <div className="w-full">
      <div className="mb-16 flex flex-col items-start">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-4 font-black leading-[1.1] tracking-tighter uppercase ${isLight ? 'theme-magazine-serif' : 'theme-ios-sans'}`}>
          MOVING <br />
          <span className={isLight ? 'text-zinc-500' : 'text-zinc-500'}>DIMENSIONS</span>
        </h1>
        <p className={`max-w-xl text-[1.1rem] opacity-70 leading-relaxed font-bold ${isLight ? 'text-zinc-700' : 'text-zinc-400'}`}>
          A curated sequence of motion graphics, visual effects, and kinetic identities.
        </p>
      </div>

      <div className="space-y-20 md:space-y-24">
        {MOTION_WORKS.map((work, idx) => (
          <Link
            key={work.id}
            to={`/detail/${work.id}`}
            className={`group block grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`lg:col-span-8 overflow-hidden transition-all duration-700 ${
              isLight ? 'border border-zinc-200' : 'rounded-[32px] bg-zinc-900 p-2 shadow-xl'
            }`}>
              <div className={`aspect-video overflow-hidden ${isLight ? '' : 'rounded-[24px]'}`}>
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
              </div>
            </div>
            <div className={`lg:col-span-4 space-y-4 ${idx % 2 !== 0 ? 'lg:text-right' : ''}`}>
              <div className={`text-[0.9rem] font-black tracking-widest uppercase ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {work.category}
              </div>
              <h3 className={`text-2xl md:text-3xl font-black uppercase ${isLight ? 'theme-magazine-serif' : 'theme-ios-sans'}`}>
                {work.title}
              </h3>
              <p className={`text-[1rem] leading-relaxed font-medium ${isLight ? 'text-zinc-700' : 'text-zinc-400'}`}>
                {work.description}
              </p>
              <div className={`pt-2 flex items-center space-x-4 ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                <span className={`w-12 h-[2px] ${isLight ? 'bg-black' : 'bg-white'}`} />
                <span className="text-[0.9rem] font-black uppercase tracking-widest">EXPLORE</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Motion;
