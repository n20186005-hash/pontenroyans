'use client';

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import FadeIn from './FadeIn';

export default function Tips() {
  const { t } = useTranslation();

  return (
    <section id="tips" className="py-[var(--section-gap)]">
      <div className="container mx-auto px-4 max-w-[var(--container)]">
        <FadeIn>
          <div className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--text-tertiary)] mb-4 font-medium">
            {t('tips.label')}
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] mb-6 text-[var(--text)] font-display leading-[1.2]">
            {t('tips.title')}
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[700px] mb-10 leading-[1.8]">
            {t('tips.intro')}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <FadeIn delay={0.3} className="flex flex-col">
            <h3 className="font-body text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-[var(--text-tertiary)] mb-5">
              {t('tips.steps_title')}
            </h3>
            <div className="flex flex-col gap-6">
              {t('tips.steps').map((s: any, i: number) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] text-[0.8rem] font-semibold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-body text-[0.9rem] font-semibold mb-1">{s.title}</h4>
                    <p className="text-[0.83rem] text-[var(--text-secondary)] leading-[1.6]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex flex-col gap-4 pt-10 md:pt-10">
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius)] p-5 mb-4">
              <div className="text-[0.72rem] uppercase tracking-[0.1em] text-[var(--accent)] mb-2 font-medium">
                {t('tips.safety_label')}
              </div>
              <p className="text-[0.85rem] text-[var(--text-secondary)] leading-[1.6]">
                {t('tips.safety')}
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius)] p-5">
              <div className="text-[0.72rem] uppercase tracking-[0.1em] text-[var(--accent)] mb-2 font-medium">
                {t('tips.terrain_label')}
              </div>
              <p className="text-[0.85rem] text-[var(--text-secondary)] leading-[1.6]">
                {t('tips.terrain')}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
