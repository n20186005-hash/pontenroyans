'use client';

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import FadeIn from './FadeIn';

export default function Reviews() {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="py-[var(--section-gap)]">
      <div className="container mx-auto px-4 max-w-[var(--container)]">
        <FadeIn>
          <div className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--text-tertiary)] mb-4 font-medium">
            {t('reviews.label')}
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] mb-6 text-[var(--text)] font-display leading-[1.2]">
            {t('reviews.title')}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center gap-6 mb-10 flex-wrap">
            <div className="text-5xl font-display text-[var(--text)] leading-none">
              <a href="https://maps.app.goo.gl/g5VJQuhK5xSYcoog9" target="_blank" rel="noopener noreferrer" className="text-inherit hover:opacity-80 transition-opacity">
                4.8
              </a>
            </div>
            <div>
              <div className="text-[var(--star)] text-[1.1rem] tracking-[0.1em]">★★★★★</div>
              <div className="text-[0.82rem] text-[var(--text-tertiary)]">
                (21,394 {t('reviews.reviews_word')})
              </div>
            </div>
          </div>
          <p className="text-[0.82rem] text-[var(--text-tertiary)] max-w-[700px] mb-8 leading-[1.7]">
            {t('reviews.declaration')}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {t('reviews.items').map((r: any, i: number) => (
            <FadeIn key={i} delay={0.3 + (i % 4) * 0.1}>
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius)] p-5 transition-colors hover:border-blue-500 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] flex items-center justify-center text-[0.82rem] font-semibold shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-body text-[0.88rem] font-semibold">{r.name}</h4>
                    <span className="text-[0.73rem] text-[var(--text-tertiary)]">{r.role}</span>
                  </div>
                </div>
                <div className="text-[var(--star)] text-[0.75rem] tracking-[0.05em] mb-2.5">
                  ★★★★★
                </div>
                <p className="text-[0.84rem] text-[var(--text-secondary)] leading-[1.65] italic">
                  "{r.text}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.5}>
          <div className="mt-8 text-center">
            <a 
              href="https://maps.app.goo.gl/g5VJQuhK5xSYcoog9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[0.85rem] font-medium font-body cursor-pointer transition-all bg-transparent border border-[var(--badge-border)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] hover:text-[var(--text)]"
            >
              {t('reviews.see_more')}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
