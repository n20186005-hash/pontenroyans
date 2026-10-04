import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StructuredData from '../../components/StructuredData'
import {
  attraction,
  queFaireActivities,
  queFaireSections,
  siteUrl,
} from '../../data/site-content'

const pageUrl = `${siteUrl}/que-faire-pont-en-royans/`

export const metadata: Metadata = {
  title: 'Que faire a Pont-en-Royans ? 15 lieux et activites a decouvrir',
  description:
    'Que faire a Pont-en-Royans ? Retrouvez 15 idees de visite entre maisons suspendues, Musee de l Eau, gorges de la Bourne, points de vue et sorties autour du village.',
  alternates: {
    canonical: '/que-faire-pont-en-royans/',
  },
  openGraph: {
    title: 'Que faire a Pont-en-Royans ? 15 lieux et activites a decouvrir',
    description:
      'Une page dediee aux activites a faire a Pont-en-Royans et autour du village pour mieux repondre aux recherches de visite.',
    url: pageUrl,
    locale: 'fr_FR',
    type: 'article',
  },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Que faire a Pont-en-Royans', item: pageUrl },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Que faire a Pont-en-Royans ? 15 lieux et activites a decouvrir',
    description:
      'Guide pratique pour planifier une journee a Pont-en-Royans et autour du village.',
    author: {
      '@type': 'Organization',
      name: 'Pontenroyans',
    },
    mainEntityOfPage: pageUrl,
  },
]

export default function QueFairePage() {
  return (
    <main className="min-h-screen">
      <StructuredData data={structuredData} />
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <p className="text-sm text-[var(--text-tertiary)]">
            <Link href="/" className="hover:text-[var(--text)]">
              Accueil
            </Link>{' '}
            / Que faire a Pont-en-Royans
          </p>
          <div className="mt-8 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Page SEO prioritaire</p>
            <h1 className="mt-3 font-display text-[clamp(2.1rem,5vw,4rem)] leading-tight text-[var(--text)]">
              Que faire a Pont-en-Royans ? 15 lieux et activites a decouvrir
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Cette page repond directement aux recherches que faire a Pont-en-Royans et que faire autour de
              Pont-en-Royans avec des idees concretes, faciles a lire sur mobile et organisees pour une demi-journee
              ou une journee complete.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-7">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {queFaireActivities.map((activity, index) => (
                <article key={activity} className="rounded-xl border border-[var(--border)] px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-tertiary)]">Activite {index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{activity}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4 space-y-8">
          {queFaireSections.map((section) => (
            <article key={section.title} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-8">
              <h2 className="font-display text-3xl text-[var(--text)]">{section.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-[var(--text-secondary)]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Itineraire conseille</p>
              <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Journee type autour de Pont-en-Royans</h2>
              <ol className="mt-6 space-y-4 text-sm leading-7 text-[var(--text-secondary)]">
                <li>1. Point de vue sur les maisons suspendues et premiere sequence photo.</li>
                <li>2. Balade dans le village et pause cafe ou dejeuner.</li>
                <li>3. Musee de l Eau ou visite familiale.</li>
                <li>4. Depart vers les gorges de la Bourne ou Choranche.</li>
              </ol>
            </article>

            <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Info pratique</p>
              <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Coordonnees utiles</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--text-secondary)]">
                <p>
                  <strong className="text-[var(--text)]">Adresse :</strong> {attraction.address}
                </p>
                <p>
                  <strong className="text-[var(--text)]">Telephone :</strong> {attraction.phone}
                </p>
                <p>
                  <strong className="text-[var(--text)]">Google Maps :</strong>{' '}
                  <a href={attraction.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline underline-offset-4">
                    ouvrir le point de visite
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Maillage interne</p>
            <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Continuer vers la page la plus visuelle du site</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
              Pour toutes les variantes autour des maisons suspendues, il vaut mieux renvoyer vers une page dediee
              et laisser cette URL se concentrer sur l intention que faire et visite.
            </p>
            <Link
              href="/maisons-suspendues-pont-en-royans/"
              className="mt-6 inline-flex rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
            >
              Voir la page maisons suspendues
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
