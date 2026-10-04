import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StructuredData from '../../components/StructuredData'
import {
  attraction,
  maisonsHighlights,
  maisonsSections,
  siteUrl,
} from '../../data/site-content'

const pageUrl = `${siteUrl}/maisons-suspendues-pont-en-royans/`

export const metadata: Metadata = {
  title: 'Les maisons suspendues de Pont-en-Royans : visite, photos et infos',
  description:
    'Preparez votre visite des maisons suspendues de Pont-en-Royans : points de vue, photos, acces, infos pratiques et conseils pour profiter du site.',
  alternates: {
    canonical: '/maisons-suspendues-pont-en-royans/',
  },
  openGraph: {
    title: 'Les maisons suspendues de Pont-en-Royans : visite, photos et infos',
    description:
      'Page dediee au monument le plus recherche de Pont-en-Royans pour proteger les requetes autour des maisons suspendues.',
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
      { '@type': 'ListItem', position: 2, name: 'Maisons suspendues', item: pageUrl },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: attraction.hangingHousesName,
    url: pageUrl,
    description:
      'Guide de visite consacre aux maisons suspendues de Pont-en-Royans, site emblematique du Royans et du Vercors.',
    telephone: attraction.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: attraction.address,
      addressCountry: 'FR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: attraction.rating,
      reviewCount: attraction.reviewCount,
    },
  },
]

export default function MaisonsSuspenduesPage() {
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
            / Les maisons suspendues de Pont-en-Royans
          </p>
          <div className="mt-8 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Page monument</p>
            <h1 className="mt-3 font-display text-[clamp(2.1rem,5vw,4rem)] leading-tight text-[var(--text)]">
              Les maisons suspendues de Pont-en-Royans : visite, photos et infos pratiques
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Cette page porte l intention la plus specifique du site : voir, comprendre et photographier
              les maisons suspendues de Pont-en-Royans sans melanger cette requete avec la page destination generale.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {maisonsHighlights.map((item) => (
              <article key={item} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <p className="text-sm leading-7 text-[var(--text-secondary)]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4 space-y-8">
          {maisonsSections.map((section) => (
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
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Note actuelle</p>
              <h2 className="mt-3 font-display text-3xl text-[var(--text)]">
                {attraction.rating}/5 pour {attraction.reviewCount} avis
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                La note et le volume d avis doivent rester coherents avec la source visible par l internaute sur Google Maps.
                C est important pour la confiance au moment du clic.
              </p>
            </article>

            <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Coordonnees</p>
              <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Informations pratiques</h2>
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
                    consulter l emplacement et les avis
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
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Navigation</p>
            <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Revenir a la page destination</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
              La page d accueil cible maintenant Pont-en-Royans en tant que destination complete. Cette URL se concentre,
              elle, sur le monument phare et les variantes autour des maisons suspendues.
            </p>
            <Link href="/" className="mt-6 inline-flex rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white">
              Retour a l accueil
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
