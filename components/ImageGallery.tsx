import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  altText: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // If there's only one image, just show it
  if (images.length <= 1) {
    return (
      <div className="relative w-full h-64 md:h-56 lg:h-64 mb-4 overflow-hidden rounded-lg group">
        <img 
          src={images[0]} 
          alt={altText} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 md:h-56 lg:h-64 mb-4 overflow-hidden rounded-lg group bg-gray-100">
      {/* Main Image */}
      <div 
        className="w-full h-full transition-transform duration-500 ease-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img 
            key={idx}
            src={src} 
            alt={`${altText} - ${idx + 1}`} 
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Controls - Only show on hover or always on mobile */}
      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={prevImage}
          className="p-1 bg-white/80 rounded-full shadow hover:bg-white text-softBlack transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextImage}
          className="p-1 bg-white/80 rounded-full shadow hover:bg-white text-softBlack transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white w-3' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Image Counter Badge */}
      <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};