'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';
import { sources } from '../data/site-content';

export default function Footer() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const modalRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openModal = (name: string, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveModal(name);
  };

  const closeModal = () => {
    setActiveModal(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    if (!activeModal) return;
    const dialog = modalRefs.current[activeModal];
    if (!dialog) return;
    dialog.querySelector<HTMLElement>('[data-modal-close]')?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ));
      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!dialog.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  return (
    <>
      <section id="citations" className="py-[var(--section-gap)]">
        <div className="container mx-auto px-4 max-w-[var(--container)]">
          <h2 className="font-display text-2xl text-[var(--text)]">Sources touristiques</h2>
          <p className="mt-3 text-sm text-[var(--text-secondary)]">Informations vérifiées le 2 novembre 2026. Les conditions de visite peuvent changer.</p>
          <ul className="mt-5 space-y-2 text-sm text-[var(--text-secondary)]">
            <li><a href={sources.village} className="underline">Office de tourisme : Pont-en-Royans</a></li>
            <li><a href={sources.circuit} className="underline">Circuit patrimonial du village</a></li>
            <li><a href={sources.museum} className="underline">Musée de l’Eau : statut et services</a></li>
            <li><a href={sources.office} className="underline">Bureau d’information : horaires saisonniers</a></li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] py-12 text-center">
        <div className="container mx-auto px-4 max-w-[var(--container)]">
          <div className="flex justify-center gap-6 mb-6 flex-wrap text-[0.8rem] text-[var(--text-tertiary)]">
            <Link href="/" className="hover:text-[var(--text)]">
              Accueil
            </Link>
            <Link href="/que-faire-pont-en-royans" className="hover:text-[var(--text)]">
              Que faire
            </Link>
            <Link href="/maisons-suspendues-pont-en-royans" className="hover:text-[var(--text)]">
              Maisons suspendues
            </Link>
            <Link href="/histoire-pont-en-royans" className="hover:text-[var(--text)]">Histoire</Link>
            <Link href="/musee-eau-pont-en-royans" className="hover:text-[var(--text)]">Musée de l’Eau</Link>
          </div>
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <button onClick={(event) => openModal('privacyPage', event.currentTarget)} className="text-[0.8rem] text-[var(--text-tertiary)] hover:text-[var(--text)] bg-transparent border-none cursor-pointer">
              {t('footer.privacy')}
            </button>
            <button onClick={(event) => openModal('termsPage', event.currentTarget)} className="text-[0.8rem] text-[var(--text-tertiary)] hover:text-[var(--text)] bg-transparent border-none cursor-pointer">
              {t('footer.terms')}
            </button>
            <button onClick={(event) => openModal('cookiePage', event.currentTarget)} className="text-[0.8rem] text-[var(--text-tertiary)] hover:text-[var(--text)] bg-transparent border-none cursor-pointer">
              {t('footer.cookies')}
            </button>
          </div>
          <div className="text-[0.78rem] text-[var(--text-tertiary)] mb-3">
            {t('footer.contact')}
          </div>
          <div className="text-[0.78rem] text-[var(--text-tertiary)] mb-3 px-4">
            {t('footer.disclaimer_text')}
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
          ref={(element) => { modalRefs.current[type === 'cookies' ? 'cookiePage' : `${type}Page`] = element; }}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${type}-dialog-title`}
          className={`fixed inset-0 z-[200] bg-[var(--bg)] overflow-y-auto transition-opacity duration-300 ${activeModal === (type === 'cookies' ? 'cookiePage' : `${type}Page`) ? 'opacity-100 block' : 'opacity-0 hidden'}`}
        >
          <div className="container mx-auto px-4 max-w-[var(--container)]">
            <div className="flex items-center justify-between py-6 border-b border-[var(--border)] mb-8">
              <h2 id={`${type}-dialog-title`} className="font-display text-[1.2rem]">{t(`${type}.title`)}</h2>
              <button 
                className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] cursor-pointer flex items-center justify-center text-[1.1rem] transition-all hover:border-[var(--accent)] hover:text-[var(--text)]"
                onClick={closeModal}
                data-modal-close
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
            <div 
              className="pb-16 prose prose-invert max-w-none text-[var(--text-secondary)] prose-h3:text-[1.2rem] prose-h3:text-[var(--text)] prose-p:text-[0.88rem] prose-p:leading-[1.8] prose-li:text-[0.88rem] prose-li:leading-[1.8]"
              dangerouslySetInnerHTML={{ __html: t(`${type}.content`) }} 
            />
          </div>
        </div>
      ))}
    </>
  );
}
