'use client';

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import FadeIn from './FadeIn';

export default function MapSection() {
  const { t } = useTranslation();

  return (
    <section id="map" className="py-[var(--section-gap)]">
      <div className="container mx-auto px-4 max-w-[var(--container)]">
        <FadeIn>
          <div className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--text-tertiary)] mb-4 font-medium">
            {t('map.label')}
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] mb-6 text-[var(--text)] font-display leading-[1.2]">
            {t('map.title')}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-[var(--radius)] overflow-hidden border border-[var(--border)] mb-8 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1409.101082456145!2d5.345133347657865!3d45.06140989041432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478abb7fdb94d4af%3A0xd074a0bc12d8f79d!2sLes%20maisons%20suspendues%20de%20Pont-en-Royans!5e0!3m2!1sen!2sus!4v1774257983912!5m2!1sen!2sus" 
              className="w-full h-[400px] block filter-[var(--map-filter)]" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.3} className="mb-8">
          <a 
            href="https://maps.app.goo.gl/g5VJQuhK5xSYcoog9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[0.85rem] font-medium font-body cursor-pointer transition-all bg-transparent border border-[var(--badge-border)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] hover:text-[var(--text)]"
          >
            {t('map.open_gmaps')}
          </a>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t('map.info').map((item: any, i: number) => (
            <FadeIn key={i} delay={0.4 + i * 0.1}>
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius)] p-5 h-full">
                <div className="text-[0.72rem] uppercase tracking-[0.1em] text-[var(--text-tertiary)] mb-1.5 font-medium">
                  {item.label}
                </div>
                <div className="text-[0.95rem] font-medium mb-1">
                  {item.value}
                </div>
                <p className="text-[0.8rem] text-[var(--text-secondary)] leading-[1.5]">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={0.7} className="col-span-1 md:col-span-3 text-center mt-2">
            <a 
              href="https://maps.app.goo.gl/g5VJQuhK5xSYcoog9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[0.85rem] font-medium font-body cursor-pointer transition-all bg-transparent border border-[var(--badge-border)] text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              {t('map.view_details')}
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
