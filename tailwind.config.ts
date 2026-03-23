import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: 'var(--bg)',
        elevated: 'var(--bg-elevated)',
        card: 'var(--bg-card)',
        border: 'var(--border)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        accent: 'var(--accent)',
        'accent-dim': 'var(--accent-dim)',
        'badge-bg': 'var(--badge-bg)',
        'badge-border': 'var(--badge-border)',
        star: 'var(--star)',
      },
      spacing: {
        'section-gap': 'clamp(80px, 12vw, 140px)',
      },
      maxWidth: {
        'container': 'min(1100px, 90vw)',
      }
    },
  },
  plugins: [],
}

export default config
