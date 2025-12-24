
import React from 'react';
import { Link } from 'react-router-dom';
import { GRAPHIC_WORKS } from '../constants';
import { ThemeMode } from '../types';

interface HomeProps {
  mode: ThemeMode;
}

const Home: React.FC<HomeProps> = ({ mode }) => {
  const isLight = mode === 'light';

  return (
    <div className="w-full">
      <div className={`mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end`}>
        <div className="md:col-span-9">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-4 font-black leading-[1.1] tracking-tighter uppercase ${isLight ? 'theme-magazine-serif' : 'theme-ios-sans'}`}>
            SELECTED <br />
            {isLight ? <span className="text-zinc-500">GRAPHIC ARCHIVE</span> : 'STUDIO WORKS'}
          </h1>
          <p className={`text-[1rem] md:text-[1.2rem] font-bold tracking-normal opacity-70 ${isLight ? 'theme-magazine-sans text-zinc-700' : 'theme-ios-sans text-zinc-400'}`}>
            Visual Narrative, Identity Systems & Brand Strategy
          </p>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-y-16`}>
        {GRAPHIC_WORKS.map((work, idx) => {
          let colSpan = "md:col-span-4";
          if (isLight) {
            if (idx % 6 === 0) colSpan = "md:col-span-8";
            else if (idx % 6 === 5) colSpan = "md:col-span-8";
          }

          return (
            <Link
              key={work.id}
              to={`/detail/${work.id}`}
              className={`${colSpan} group block overflow-hidden`}
            >
              <div className={`relative transition-all duration-700 ${
                isLight ? 'mb-4 border border-zinc-200' : 'rounded-2xl bg-zinc-900 p-1.5 shadow-lg'
              }`}>
                <div className={`aspect-[4/5] md:aspect-auto ${isLight ? 'h-[500px]' : 'h-full rounded-[14px]'} overflow-hidden bg-zinc-100`}>
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={`mt-4 ${isLight ? 'border-t-2 border-black pt-4' : 'px-2'}`}>
                <div className="flex justify-between items-start">
                  <h3 className={`text-[1.1rem] font-black uppercase leading-tight ${isLight ? 'theme-magazine-serif' : 'theme-ios-sans'}`}>
                    {work.title}
                  </h3>
                </div>
                <p className={`mt-2 text-[0.9rem] uppercase tracking-widest font-black ${isLight ? 'theme-magazine-sans text-zinc-600' : 'text-zinc-400'}`}>
                  {work.category}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
