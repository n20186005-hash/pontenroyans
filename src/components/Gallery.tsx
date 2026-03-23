'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from '../hooks/useTranslation';
import FadeIn from './FadeIn';
import photos from '../data/gallery.json';

export default function Gallery() {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -440, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 440, behavior: 'smooth' });
    }
  };

  return (
    <section id="photos" className="py-[var(--section-gap)]">
      <div className="container mx-auto px-4 max-w-[var(--container)]">
        <FadeIn>
          <div className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--text-tertiary)] mb-4 font-medium">
            {t('gallery.label')}
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] mb-6 text-[var(--text)] font-display leading-[1.2]">
            {t('gallery.title')}
          </h2>
        </FadeIn>
      </div>

      <div className="container mx-auto px-4 max-w-[var(--container)] mt-6">
        <FadeIn delay={0.2}>
          <div 
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {photos.map((photo, i) => {
              // The original JSON has "captionKey": "gallery.captions.0"
              // We need to resolve this using t()
              const captionArray = t('gallery.captions');
              const captionIndex = parseInt(photo.captionKey.split('.').pop() || '0');
              const caption = captionArray[captionIndex] || '';

              return (
                <div key={photo.id} className="flex-[0_0_min(420px,85vw)] snap-start relative rounded-[var(--radius)] overflow-hidden aspect-[4/3] cursor-grab active:cursor-grabbing group">
                  <Image 
                    src={photo.url} 
                    alt={caption} 
                    fill
                    sizes="(max-width: 768px) 85vw, 420px"
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-10 pt-16 pb-4 bg-gradient-to-t from-black/70 to-transparent text-[0.8rem] text-[#e4e4e7] z-10">
                    {caption} <small className="opacity-60 ml-1">· {t('gallery.source')}</small>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex gap-2 mt-5 justify-end">
            <button 
              onClick={scrollPrev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] cursor-pointer flex items-center justify-center text-[1.1rem] transition-all hover:border-[var(--accent)] hover:text-[var(--text)]"
            >
              &#8592;
            </button>
            <button 
              onClick={scrollNext}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] cursor-pointer flex items-center justify-center text-[1.1rem] transition-all hover:border-[var(--accent)] hover:text-[var(--text)]"
            >
              &#8594;
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
