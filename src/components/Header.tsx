'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
  const { language, setLanguage, theme, toggleTheme } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const primaryLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/que-faire-pont-en-royans/', label: 'Que faire' },
    { href: '/maisons-suspendues-pont-en-royans/', label: 'Maisons suspendues' },
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
          <select 
            className="font-body text-xs bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)] rounded-md py-1.5 pl-2.5 pr-6 cursor-pointer outline-none transition-colors appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%226%22%3E%3Cpath%20d%3D%22M1%201l4%204%204-4%22%20stroke%3D%22%23888%22%20fill%3D%22none%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_0.5rem_center] focus:border-[var(--accent)]"
            value={language} 
            onChange={(e) => setLanguage(e.target.value as any)}
            aria-label="Language"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="zh-Hant">繁體中文</option>
          </select>
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
