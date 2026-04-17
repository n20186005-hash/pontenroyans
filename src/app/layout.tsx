import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { TranslationProvider } from '../hooks/useTranslation'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Les maisons suspendues de Pont-en-Royans | Guide du Visiteur',
  description: 'Guide complet des Maisons Suspendues de Pont-en-Royans : architecture médiévale, gorges de la Bourne, Vercors et conseils de voyage.',
  metadataBase: new URL('https://pontenroyans.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
            <head>
        <meta name="google-adsense-account" content="ca-pub-9279583389810634" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9279583389810634" crossOrigin="anonymous"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
        }} />
      </head>
      <body className={`${dmSans.variable} ${dmSerifDisplay.variable} font-body bg-[var(--bg)] text-[var(--text)] antialiased overflow-x-hidden transition-colors duration-300`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}
