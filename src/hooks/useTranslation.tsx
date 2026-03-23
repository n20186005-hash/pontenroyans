'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../data/i18n';

type Language = 'fr' | 'en' | 'de' | 'zh-Hant';
type Theme = 'dark' | 'light';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string) => any;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang && Object.keys(translations).includes(savedLang)) {
      setLanguageState(savedLang);
    }
    
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setThemeState(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let val: any = translations[language];
    for (const k of keys) {
      if (val === undefined) return key;
      val = val[k];
    }
    return val || key;
  };

  if (!mounted) {
    return (
      <TranslationContext.Provider value={{ language, setLanguage: setLanguageState, theme, toggleTheme: () => {}, t }}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </TranslationContext.Provider>
    );
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, theme, toggleTheme, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
