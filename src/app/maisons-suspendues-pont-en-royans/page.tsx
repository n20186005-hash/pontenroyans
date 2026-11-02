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
  sources,
} from '../../data/site-content'

const pageUrl = `${siteUrl}/maisons-suspendues-pont-en-royans`

export const metadata: Metadata = {
  title: 'Les maisons suspendues de Pont-en-Royans : visite, photos et infos',
  description:
    'Preparez votre visite des maisons suspendues de Pont-en-Royans : points de vue, photos, acces, infos pratiques et conseils pour profiter du site.',
  alternates: {
    canonical: '/maisons-suspendues-pont-en-royans',
  },
  openGraph: {
    title: 'Les maisons suspendues de Pont-en-Royans : visite, photos et infos',
    description:
      'Histoire et points de vue des maisons suspendues au-dessus de la Bourne.',
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
    sameAs: [attraction.mapsUrl],
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
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Patrimoine</p>
            <h1 className="mt-3 font-display text-[clamp(2.1rem,5vw,4rem)] leading-tight text-[var(--text)]">
              Les maisons suspendues de Pont-en-Royans : visite, photos et infos pratiques
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Au-dessus de la Bourne, ces maisons témoignent d’une construction adaptée au terrain et à la vie du village. Voici leur histoire et les points de vue accessibles depuis l’espace public.
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
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Patrimoine</p>
              <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Un ensemble de maisons habitées</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">Les façades se découvrent depuis les quais et le pont. Pour les informations actuelles sur le lieu, consultez <a href={attraction.mapsUrl} className="underline">Google Maps</a> et <a href={sources.circuit} className="underline">le circuit officiel</a>.</p>
            </article>

            <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Coordonnees</p>
              <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Préparer la promenade</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--text-secondary)]">
                <p>Le centre ancien comporte des escaliers. Restez sur les accès publics et respectez les habitations.</p>
                <p>Le bureau d’information touristique se trouve au 48 Grande Rue, avec un <a href={sources.office} className="underline">accueil saisonnier</a>.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">À lire aussi</p>
            <h2 className="mt-3 font-display text-3xl text-[var(--text)]">Découvrir le reste du village</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
              Le village possède aussi d’anciennes portes, des places et des ruelles à découvrir sur le parcours patrimonial.
            </p>
            <Link href="/" className="mt-6 inline-flex rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white">
              Retour a l accueil
            </Link>
          </div>
        </div>
      </section>

      <p className="container mx-auto max-w-[var(--container)] px-4 pb-10 text-sm text-[var(--text-secondary)]">Sources : <a href={sources.circuit} className="underline">circuit patrimonial</a> et <a href={sources.history} className="underline">histoire du village</a>, Office de tourisme Saint-Marcellin Vercors Isère. Vérification : 2 novembre 2026.</p>
      <Footer />
    </main>
  )
}
