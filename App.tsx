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
        <div className="relative border-l-2 border-sage/30 ml-4 md:ml-48 space-y-32 pt-12">
          
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
          <div className="absolute bottom-0 left-[-5px] w-2 h-2 bg-sage rounded-full"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-sage/10 text-center relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-6 text-rose-300">
             <Heart className="fill-current w-8 h-8 animate-pulse" />
          </div>
          <h3 className="font-serif text-3xl text-softBlack mb-3">Until the next chapter...</h3>
          <p className="font-sans text-gray-500 text-sm mb-8">
            Every mile between us is just a reminder of how strong we are.
          </p>
          <div className="w-16 h-1 bg-sage/30 mx-auto mb-8 rounded-full"></div>
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">
            Made with Love by V
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;