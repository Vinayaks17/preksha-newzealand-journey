import React from 'react';
import { VinayakNoteData } from '../types';
import { VinayakNote } from './VinayakNote';
import { Calendar } from 'lucide-react';
import { ImageGallery } from './ImageGallery';

interface TimelineCardProps {
  title: string;
  description: string;
  imageUrls: string[];
  date?: string;
  vinayakNote?: VinayakNoteData;
  index: number;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  description,
  imageUrls,
  date,
  vinayakNote,
  index
}) => {
  
  return (
    <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 mb-20 group">
      
      {/*
        DATE COLUMN (Desktop)
        Sticks to the left of the timeline line
      */}
      <div className="hidden md:flex flex-col items-end w-32 md:w-48 flex-shrink-0 pt-8 pr-8 text-right">
        {date && (
          <div className="sticky top-32 transition-all duration-500" data-aos="fade-right">
             <span className="block font-serif text-5xl bg-gradient-to-r from-lavender to-sage bg-clip-text text-transparent font-bold">{date.split(' ')[0]}</span>
             {/* Only render the second line if there are more words, removed '|| Day' fallback */}
             <span className="block font-sans text-sm text-mountainGray uppercase tracking-widest font-semibold">{date.split(' ').slice(1).join(' ')}</span>
          </div>
        )}
      </div>

      {/*
        TIMELINE DOT & LINE MARKER
        Positioned absolutely on the main line
      */}
      <div className="absolute left-4 md:left-[12rem] top-10 w-5 h-5 bg-gradient-to-br from-lavender to-sage rounded-full border-4 border-white z-10 shadow-lg transform -translate-x-1/2 md:translate-x-[1px]"></div>

      {/* 
        MAIN CONTENT CARD 
      */}
      <div 
        className="flex-1 pl-12 md:pl-0" 
        data-aos="fade-up" 
        data-aos-duration="800"
        data-aos-delay={index * 50}
      >
        <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[0_15px_40px_-10px_rgba(155,133,196,0.2)] border-2 border-lavender/20 relative overflow-visible hover:shadow-[0_20px_60px_-10px_rgba(155,133,196,0.35)] hover:border-lavender/40 transition-all duration-500">

          {/* Mobile Date */}
          {date && (
            <div className="md:hidden mb-4 flex items-center gap-3 text-lavender font-bold text-sm uppercase tracking-wider">
              <Calendar className="w-5 h-5" />
              {date}
            </div>
          )}

          {/* Images */}
          <div className="mb-8 rounded-xl overflow-hidden border-2 border-lavender/10">
             <ImageGallery images={imageUrls} altText={title} />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="font-serif text-3xl md:text-4xl text-softBlack font-bold mb-4">{title}</h3>
              <p className="font-sans text-mountainGray text-base leading-relaxed">
                {description}
              </p>
            </div>

            {/* Sticky Note - Attached to the side or bottom */}
            {vinayakNote && (
              <div className="w-full md:w-64 flex-shrink-0">
                <VinayakNote text={vinayakNote.text} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};