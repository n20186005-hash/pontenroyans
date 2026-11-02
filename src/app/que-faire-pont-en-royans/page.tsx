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
  sources,
} from '../../data/site-content'

const pageUrl = `${siteUrl}/que-faire-pont-en-royans`

export const metadata: Metadata = {
  title: 'Que faire à Pont-en-Royans ? Parcours et idées de visite',
  description:
    'Que faire à Pont-en-Royans ? Suivez le circuit du village, découvrez les maisons suspendues et vérifiez les conditions des visites alentours.',
  alternates: {
    canonical: '/que-faire-pont-en-royans',
  },
  openGraph: {
    title: 'Que faire à Pont-en-Royans ? Parcours et idées de visite',
    description:
      'Parcours à pied dans le village et idées pour découvrir le Royans.',
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
    headline: 'Que faire à Pont-en-Royans ? Parcours et idées de visite',
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
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Guide de visite</p>
            <h1 className="mt-3 font-display text-[clamp(2.1rem,5vw,4rem)] leading-tight text-[var(--text)]">
              Que faire à Pont-en-Royans ? Parcours et idées de visite
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Choisissez quelques étapes du circuit patrimonial de l’office de tourisme, admirez les maisons suspendues depuis la Bourne et vérifiez les conditions des activités autour du village.
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
              <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Une journée adaptable autour de Pont-en-Royans</h2>
              <ol className="mt-6 space-y-4 text-sm leading-7 text-[var(--text-secondary)]">
                <li>1. Point de vue sur les maisons suspendues et premiere sequence photo.</li>
                <li>2. Balade dans le village et pause cafe ou dejeuner.</li>
                <li>3. Passez place du Breuil ; l’exposition du Musée de l’Eau est actuellement fermée pour rénovation. <Link href="/musee-eau-pont-en-royans" className="underline">Voir ce qui reste accessible</Link>.</li>
                <li>4. Vérifiez les routes avant de poursuivre vers les gorges de la Bourne ou Choranche.</li>
              </ol>
            </article>

            <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Info pratique</p>
              <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Préparer la visite</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--text-secondary)]">
                <p>Le bureau d’information touristique de Pont-en-Royans est au 48 Grande Rue ; son accueil est saisonnier.</p>
                <p>Consultez <a href={sources.office} className="text-blue-500 underline">ses horaires officiels</a>, <a href={sources.museum} className="text-blue-500 underline">le statut du Musée de l’Eau</a> et <a href={sources.road} className="text-blue-500 underline">l’état des routes</a> avant de partir.</p>
                <p><a href={attraction.mapsUrl} className="text-blue-500 underline">Voir le village sur Google Maps</a>.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">À lire aussi</p>
            <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Comprendre les maisons suspendues</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
              Pour comprendre leur construction et repérer les meilleurs points de vue publics, lisez notre guide consacré aux maisons suspendues.
            </p>
            <Link
              href="/maisons-suspendues-pont-en-royans"
              className="mt-6 inline-flex rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
            >
              Voir la page maisons suspendues
            </Link>
          </div>
        </div>
      </section>

      <p className="container mx-auto max-w-[var(--container)] px-4 pb-10 text-sm text-[var(--text-secondary)]">Sources : <a href={sources.circuit} className="underline">circuit patrimonial</a> et <a href={sources.museum} className="underline">Musée de l’Eau</a>, Office de tourisme Saint-Marcellin Vercors Isère. Vérification : 2 novembre 2026.</p>
      <Footer />
    </main>
  )
}
