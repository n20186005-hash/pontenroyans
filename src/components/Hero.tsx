'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../hooks/useTranslation';
import FadeIn from './FadeIn';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 scale-105 animate-[heroZoom_20s_ease-in-out_infinite_alternate]">
        <Image 
          src="/images/pont-en-royans/hero-panorama.jpg" 
          alt="Pont-en-Royans panorama - Google Maps user photo" 
          fill 
          className="object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-[image:var(--hero-overlay)]"></div>
      
      <div className="relative z-[2] container mx-auto px-4 flex flex-col items-center text-center mt-12">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2.5 bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-full px-4 py-1.5 text-[0.78rem] text-[var(--text-secondary)] mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"></span>
            <span>{t('hero.badge_type')}</span>
            <span className="opacity-30">·</span>
            <a href="https://maps.app.goo.gl/g5VJQuhK5xSYcoog9" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline hover:opacity-80 transition-opacity">
              ★ 4.8/5 (21,394 avis)
            </a>
            <span className="opacity-30">·</span>
            <span>{t('hero.open_hours')}</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-[clamp(2rem,5vw,3.6rem)] text-white dark:text-white light:text-[var(--text)] font-display mb-3 max-w-[800px] leading-tight drop-shadow-lg">
            {t('hero.title')}
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-[clamp(1rem,2vw,1.3rem)] text-[var(--text-secondary)] mb-8 font-light max-w-[600px] drop-shadow-md">
            {t('hero.subtitle')}
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href="#overview" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[0.85rem] font-medium font-body border-none cursor-pointer transition-all bg-[var(--accent)] text-white hover:opacity-90">
              {t('hero.cta_discover')}
            </a>
            <a href="#photos" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[0.85rem] font-medium font-body cursor-pointer transition-all bg-transparent border border-[var(--badge-border)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] hover:text-[var(--text)]">
              {t('hero.cta_photos')}
            </a>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-1.5 text-[var(--text-tertiary)] text-[0.82rem] mb-6 drop-shadow-md">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>15 Grande Rue, 38680 Pont-en-Royans, France</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {t('hero.tags').map((tag: string, index: number) => (
              <span key={index} className="text-[0.72rem] tracking-[0.06em] px-3 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--text-tertiary)] backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-4 right-4 z-[2] text-[0.65rem] text-white/60 bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
        {t('hero.photo_credit') || "Photo par un utilisateur Google Maps"}
      </div>
    </section>
  );
}
