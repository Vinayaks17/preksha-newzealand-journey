import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { IntroLetter } from './components/IntroLetter';
import { SectionHeader } from './components/SectionHeader';
import { TimelineCard } from './components/TimelineCard';
import { TIMELINE_DATA } from './constants';
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  
  useEffect(() => {
    // Initialize AOS animation library
    if (window.AOS) {
      window.AOS.init({
        once: false,
        mirror: false,
        offset: 50, // Lower offset for smoother triggering
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-blush selection:text-rose-900 overflow-x-hidden">
      <Hero />
      
      <IntroLetter />

      {/* Main Container */}
      <div className="container mx-auto px-4 pb-32 max-w-5xl">
        
        {/*
          The Timeline Line
          Now positioned distinctly to create a "Margin" effect.
          Desktop: Left-aligned with margin.
          Mobile: Left-aligned close to edge.
        */}
        <div className="relative border-l-4 border-gradient-to-b from-lavender/40 via-sage/40 to-lavender/40 ml-4 md:ml-48 space-y-32 pt-12" style={{borderImage: 'linear-gradient(to bottom, rgba(155,133,196,0.4), rgba(124,152,133,0.4), rgba(155,133,196,0.4)) 1'}}>

          {TIMELINE_DATA.map((section) => (
            <div key={section.id} className="relative">
              {/* Section Header - Breaks the flow pleasantly */}
              <div className="-ml-4 md:-ml-48 mb-16">
                 <SectionHeader title={section.title} description={section.description} />
              </div>

              <div className="space-y-4">
                {section.items.map((item, index) => (
                  <TimelineCard
                    key={item.id}
                    {...item}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* End of Timeline Dot */}
          <div className="absolute bottom-0 left-[-7px] w-3 h-3 bg-gradient-to-br from-lavender to-sage rounded-full border-2 border-white shadow-lg"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-lavender/10 py-20 border-t-2 border-lavender/20 text-center relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-3 mb-8 text-lavender">
             <Heart className="fill-current w-10 h-10 animate-pulse" />
          </div>
          <h3 className="font-serif text-4xl md:text-5xl text-softBlack mb-4">Until the next chapter...</h3>
          <p className="font-sans text-mountainGray text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Every mile between us is just a reminder of how strong we are.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-lavender to-sage mx-auto mb-10 rounded-full"></div>
          <p className="text-sm text-mountainGray uppercase tracking-[0.3em] font-semibold">
            Made with Love by V
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;