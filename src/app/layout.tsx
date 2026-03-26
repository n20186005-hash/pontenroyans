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
    languages: {
      'fr': '/fr',
      'en': '/en',
      'de': '/de',
      'zh-Hant': '/zh-Hant',
      'x-default': '/',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${dmSerifDisplay.variable} font-body bg-[var(--bg)] text-[var(--text)] antialiased overflow-x-hidden transition-colors duration-300`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}
