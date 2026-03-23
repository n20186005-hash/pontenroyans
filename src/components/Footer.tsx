'use client';

import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import FadeIn from './FadeIn';

export default function Footer() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <section id="citations" className="py-[var(--section-gap)]">
        <div className="container mx-auto px-4 max-w-[var(--container)]">
          <FadeIn>
            <div className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--text-tertiary)] mb-4 font-medium">
              {t('citations.label')}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] mb-6 text-[var(--text)] font-display leading-[1.2]">
              {t('citations.title')}
            </h2>
          </FadeIn>

          <div id="citationsList">
            <p className="text-[0.82rem] text-[var(--text-tertiary)] mb-8 text-center">
              {t('citations.declaration')}
            </p>
            {t('citations.items').map((c: any, i: number) => (
              <FadeIn key={i} delay={0.2 + i * 0.1}>
                <div className="py-5 border-b border-[var(--border)] first:border-t">
                  <h4 className="font-body text-[0.88rem] font-semibold mb-1">{c.title}</h4>
                  <p className="text-[0.8rem] text-[var(--text-secondary)]">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] py-12 text-center">
        <div className="container mx-auto px-4 max-w-[var(--container)]">
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <button onClick={() => setActiveModal('privacyPage')} className="text-[0.8rem] text-[var(--text-tertiary)] hover:text-[var(--text)] bg-transparent border-none cursor-pointer">
              {t('footer.privacy')}
            </button>
            <button onClick={() => setActiveModal('termsPage')} className="text-[0.8rem] text-[var(--text-tertiary)] hover:text-[var(--text)] bg-transparent border-none cursor-pointer">
              {t('footer.terms')}
            </button>
            <button onClick={() => setActiveModal('cookiePage')} className="text-[0.8rem] text-[var(--text-tertiary)] hover:text-[var(--text)] bg-transparent border-none cursor-pointer">
              {t('footer.cookies')}
            </button>
          </div>
          <div className="text-[0.78rem] text-[var(--text-tertiary)] mb-3">
            {t('footer.contact')}
          </div>
          <div className="text-[0.73rem] text-[var(--text-tertiary)] opacity-70">
            {t('footer.copy')}
          </div>
        </div>
      </footer>

      {/* Modals */}
      {['privacy', 'terms', 'cookies'].map((type) => (
        <div 
          key={type}
          className={`fixed inset-0 z-[200] bg-[var(--bg)] overflow-y-auto transition-opacity duration-300 ${activeModal === `${type}Page` ? 'opacity-100 block' : 'opacity-0 hidden'}`}
        >
          <div className="container mx-auto px-4 max-w-[var(--container)]">
            <div className="flex items-center justify-between py-6 border-b border-[var(--border)] mb-8">
              <h3 className="font-display text-[1.2rem]">{t(`${type}.title`)}</h3>
              <button 
                className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] cursor-pointer flex items-center justify-center text-[1.1rem] transition-all hover:border-[var(--accent)] hover:text-[var(--text)]"
                onClick={() => setActiveModal(null)}
              >
                ✕
              </button>
            </div>
            <div 
              className="pb-16 prose prose-invert max-w-none text-[var(--text-secondary)] prose-h1:text-[1.8rem] prose-h1:text-[var(--text)] prose-h2:text-[1.2rem] prose-h2:text-[var(--text)] prose-p:text-[0.88rem] prose-p:leading-[1.8] prose-li:text-[0.88rem] prose-li:leading-[1.8]"
              dangerouslySetInnerHTML={{ __html: t(`${type}.content`) }} 
            />
          </div>
        </div>
      ))}
    </>
  );
}
