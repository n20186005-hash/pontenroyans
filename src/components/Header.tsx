'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
  const { theme, toggleTheme } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const primaryLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/que-faire-pont-en-royans', label: 'Que faire' },
    { href: '/maisons-suspendues-pont-en-royans', label: 'Maisons suspendues' },
    { href: '/histoire-pont-en-royans', label: 'Histoire' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${scrolled ? 'bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur-lg border-b border-[var(--border)]' : ''}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-6 min-w-0">
          <Link href="/" className="font-display text-xl md:text-2xl text-[var(--text)] whitespace-nowrap overflow-hidden text-ellipsis max-w-[50vw]">
            Pont-en-Royans
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm text-[var(--text-secondary)]">
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[var(--text)] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button 
            className="bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-md text-[var(--text-secondary)] w-9 h-9 flex items-center justify-center cursor-pointer transition-colors text-base hover:border-[var(--accent)] hover:text-[var(--text)]"
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☽' : '☀'}
          </button>
        </div>
      </div>
    </header>
  );
}
