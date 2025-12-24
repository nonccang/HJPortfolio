
import React from 'react';
import { ThemeMode } from '../types';

interface AboutProps {
  mode: ThemeMode;
}

const About: React.FC<AboutProps> = ({ mode }) => {
  const isLight = mode === 'light';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center min-h-[70vh]">
      <div className="lg:col-span-5">
        <div className={`overflow-hidden ${isLight ? 'border border-zinc-200 shadow-sm' : 'rounded-[48px] bg-zinc-900 p-3 shadow-2xl'}`}>
          <img 
            src="https://picsum.photos/seed/designer/800/1000" 
            alt="Designer Portrait" 
            className={`w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ${isLight ? '' : 'rounded-[36px]'}`} 
          />
        </div>
      </div>

      <div className="lg:col-span-7">
        <h4 className={`text-[0.9rem] font-black tracking-[0.3em] uppercase mb-6 ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
          PROFILE — No. 01
        </h4>
        <h1 className={`text-4xl md:text-5xl lg:text-7xl font-black leading-[1] mb-8 uppercase tracking-tighter ${isLight ? 'theme-magazine-serif' : 'theme-ios-sans'}`}>
          THE <br />
          {isLight ? <span className="text-zinc-400">CREATIVE</span> : 'ARCHITECT'}
        </h1>

        <div className="space-y-10">
          <p className={`text-[1.2rem] md:text-[1.4rem] leading-relaxed font-bold ${isLight ? 'theme-magazine-serif text-zinc-800' : 'theme-ios-sans text-zinc-300'}`}>
            Dorian Grey is a strategic visual designer operating at the intersection of branding, typography, and motion. Focused on minimal yet impactful expressions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-zinc-300">
            <div>
              <h4 className={`text-[0.9rem] font-black uppercase tracking-widest mb-6 ${isLight ? 'text-zinc-600' : 'text-zinc-500'}`}>
                Discipline
              </h4>
              <ul className={`text-[1rem] space-y-4 font-black uppercase tracking-widest ${isLight ? 'theme-magazine-sans text-zinc-800' : 'text-zinc-300'}`}>
                <li className="flex items-center"><span className="w-2.5 h-2.5 bg-current mr-3 rounded-full opacity-30" /> Brand Strategy</li>
                <li className="flex items-center"><span className="w-2.5 h-2.5 bg-current mr-3 rounded-full opacity-30" /> Motion Systems</li>
                <li className="flex items-center"><span className="w-2.5 h-2.5 bg-current mr-3 rounded-full opacity-30" /> Digital Products</li>
                <li className="flex items-center"><span className="w-2.5 h-2.5 bg-current mr-3 rounded-full opacity-30" /> Type Design</li>
              </ul>
            </div>
            <div>
              <h4 className={`text-[0.9rem] font-black uppercase tracking-widest mb-6 ${isLight ? 'text-zinc-600' : 'text-zinc-500'}`}>
                Connect
              </h4>
              <div className="space-y-6">
                <p className={`text-[1.2rem] font-black tracking-tight ${isLight ? 'text-black' : 'text-white'}`}>
                  studio@doriangrey.com
                </p>
                <div className={`flex flex-wrap gap-6 text-[0.9rem] font-black uppercase tracking-[0.2em]`}>
                  <a href="#" className={`hover:opacity-50 underline decoration-2 underline-offset-8 ${isLight ? 'text-zinc-800' : 'text-zinc-300'}`}>
                    INSTAGRAM
                  </a>
                  <a href="#" className={`hover:opacity-50 underline decoration-2 underline-offset-8 ${isLight ? 'text-zinc-800' : 'text-zinc-300'}`}>
                    BEHANCE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
