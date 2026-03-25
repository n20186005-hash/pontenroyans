'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../hooks/useTranslation';
import FadeIn from './FadeIn';
import photos from '../data/gallery.json';

export default function Gallery() {
  const { t } = useTranslation();

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
        
        <FadeIn delay={0.2}>
          <p className="text-sm text-[var(--text-secondary)] mb-8 bg-[var(--badge-bg)] p-4 rounded-md border border-[var(--badge-border)] flex flex-wrap items-center gap-1">
            <span>{t('gallery.disclaimer_prefix') || "Photos provenant des utilisateurs Google Maps. Images publiques partagées par les visiteurs."}</span>
            <a 
              href="https://maps.app.goo.gl/g5VJQuhK5xSYcoog9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline decoration-1 underline-offset-2 transition-colors"
            >
              {t('gallery.disclaimer_link') || "Source : Google Maps"}
            </a>
          </p>
        </FadeIn>
      </div>

      <div className="container mx-auto px-4 max-w-[var(--container)] mt-6">
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, i) => {
              const captionArray = t('gallery.captions');
              const captionIndex = parseInt(photo.captionKey.split('.').pop() || '0');
              const caption = captionArray[captionIndex] || '';

              return (
                <div key={photo.id} className="relative rounded-lg overflow-hidden aspect-[4/3] group shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-200 dark:bg-zinc-800">
                  <Image 
                    src={photo.url} 
                    alt={caption} 
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-[0.8rem] text-[#e4e4e7] z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-medium line-clamp-2 mb-1 drop-shadow-md">{caption}</p>
                    <p className="text-white/80 text-[0.7rem] drop-shadow-md">© {t('gallery.source') || "Google Maps utilisateur"}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
