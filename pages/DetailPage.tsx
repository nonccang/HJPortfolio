
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GRAPHIC_WORKS, MOTION_WORKS } from '../constants';
import { ThemeMode } from '../types';

interface DetailPageProps {
  mode: ThemeMode;
}

const DetailPage: React.FC<DetailPageProps> = ({ mode }) => {
  const { id } = useParams<{ id: string }>();
  const isLight = mode === 'light';

  const allWorks = [...GRAPHIC_WORKS, ...MOTION_WORKS];
  const work = allWorks.find((w) => w.id === id);

  if (!work) {
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <h2 className="text-3xl font-black uppercase">Project not found</h2>
        <Link to="/" className="mt-6 underline text-[1rem] font-black uppercase">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-1000">
      <div className={`w-full aspect-video overflow-hidden mb-16 ${
        isLight ? 'border border-zinc-200' : 'rounded-[32px] bg-zinc-900 p-2'
      }`}>
        <img src={work.images[0]} alt={work.title} className={`w-full h-full object-cover ${isLight ? '' : 'rounded-[24px]'}`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-40">
          <h1 className={`text-4xl md:text-5xl font-black leading-[1.1] mb-8 uppercase tracking-tighter ${isLight ? 'theme-magazine-serif' : 'theme-ios-sans'}`}>
            {work.title}
          </h1>
          <div className="flex items-center space-x-6 mb-10">
            <span className={`text-[1rem] font-black uppercase tracking-[0.1em] ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>{work.category}</span>
          </div>
          <Link to={work.id.includes('motion') ? '/motion' : '/'} className={`text-[0.9rem] font-black uppercase tracking-widest border-b-4 pb-2 transition-all hover:border-zinc-400 ${isLight ? 'border-black text-black' : 'border-white text-white'}`}>
            ← BACK TO ARCHIVE
          </Link>
        </div>
        <div className="lg:col-span-7">
          <p className={`text-[1.1rem] md:text-[1.3rem] leading-relaxed font-medium ${isLight ? 'theme-magazine-serif text-zinc-800' : 'theme-ios-sans text-zinc-300'}`}>
            {work.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 md:gap-24">
        {work.images.slice(1).map((img, index) => {
          const isWide = index % 3 === 0;
          return (
            <div key={index} className={`overflow-hidden ${
              isWide ? 'w-full' : 'max-w-4xl mx-auto'
            } ${
              isLight ? 'border border-zinc-200' : 'rounded-[32px] bg-zinc-900 p-2'
            }`}>
              <img src={img} alt={`${work.title} detail ${index}`} className={`w-full object-cover ${isLight ? '' : 'rounded-[24px]'}`} />
            </div>
          );
        })}
      </div>

      <div className={`mt-32 pt-12 border-t flex justify-between items-center text-[1rem] font-black tracking-[0.2em] uppercase ${
        isLight ? 'border-zinc-300 text-black' : 'border-zinc-900 text-white'
      }`}>
        <Link to="/" className="hover:opacity-50 transition-opacity">PREVIOUS</Link>
        <Link to="/" className="hover:opacity-50 transition-opacity">NEXT</Link>
      </div>
    </div>
  );
};

export default DetailPage;
