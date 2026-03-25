'use client';

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import FadeIn from './FadeIn';

export default function Overview() {
  const { t } = useTranslation();

  return (
    <section id="overview" className="py-[var(--section-gap)]">
      <div className="container mx-auto px-4 max-w-[var(--container)]">
        <FadeIn>
          <div className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--text-tertiary)] mb-4 font-medium">
            {t('overview.label')}
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] mb-6 text-[var(--text)] font-display leading-[1.2]">
            {t('overview.title')}
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[700px] mb-4 leading-[1.8]">
            {t('overview.text')}
          </p>
          <p className="text-[0.9rem] text-[var(--text-tertiary)] max-w-[700px] mb-10 leading-[1.6] italic">
            {t('overview.source_info')}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-sm text-[var(--text-tertiary)] max-w-[700px] mb-10 leading-[1.8] p-4 bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-md">
            {t('footer.disclaimer_text')}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t('overview.highlights').map((h: any, i: number) => (
            <FadeIn key={i} delay={0.3 + i * 0.1}>
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius)] p-6 transition-colors hover:border-[var(--accent)] h-full">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--accent-dim)] flex items-center justify-center mb-4 text-[1.1rem]">
                  {h.icon}
                </div>
                <h3 className="font-body text-[0.95rem] font-semibold mb-2">{h.title}</h3>
                <p className="text-[0.85rem] text-[var(--text-secondary)] leading-[1.6]">{h.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
