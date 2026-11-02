import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'
import photos from '../data/gallery.json'
import {
  aroundVillage,
  attraction,
  homeFaqs,
  homeHighlights,
  practicalInfo,
  quickLinks,
  siteUrl,
  sources,
} from '../data/site-content'

export const metadata: Metadata = {
  title: 'Visiter Pont-en-Royans : maisons suspendues et parcours du village',
  description:
    'Decouvrez Pont-en-Royans : maisons suspendues, que faire, points de vue, Musee de l Eau, acces, parking, photos et conseils pratiques pour organiser votre visite.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Visiter Pont-en-Royans : maisons suspendues et parcours du village',
    description:
      'Guide destination pour visiter Pont-en-Royans, voir les maisons suspendues, organiser une demi-journee et preparer une sortie dans le Vercors.',
    url: siteUrl,
    siteName: 'Pontenroyans',
    locale: 'fr_FR',
    type: 'website',
  },
}

const photoCaptions = [
  'Les maisons suspendues vues depuis la Bourne',
  'Facades colorees au-dessus de la riviere',
  'Ruelles du centre ancien',
  'Architecture suspendue du village',
  'Vue vers les gorges de la Bourne',
  'Paysage du Vercors autour de Pont-en-Royans',
  'Pont pittoresque sur la Bourne',
  'Details de l architecture locale',
]

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pontenroyans',
    url: siteUrl,
    inLanguage: 'fr',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: attraction.name,
    url: siteUrl,
    description:
      'Guide pour visiter Pont-en-Royans, ses maisons suspendues, le Musee de l Eau et les activites autour du village.',
    touristType: ['couples', 'families', 'photographers'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData data={structuredData} />
      <Header />

      <section className="relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pont-en-royans/hero-panorama.jpg"
            alt="Vue panoramique de Pont-en-Royans et de ses maisons suspendues"
            fill
            priority
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-20 max-w-[var(--container)]">
          <div className="max-w-4xl">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] px-4 py-2 text-xs text-[var(--text-secondary)] backdrop-blur">
              <span>Guide destination</span>
              <span className="opacity-40">|</span>
              <a href={attraction.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)]">
                Voir le lieu sur Google Maps
              </a>
              <span className="opacity-40">|</span>
              <span>Isère · Royans</span>
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.3rem,6vw,4.4rem)] leading-tight text-white">
              Pont-en-Royans : visiter le village et ses maisons suspendues
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              Découvrez les maisons suspendues au-dessus de la Bourne, parcourez les ruelles du village et préparez une sortie dans le Royans à partir de sources touristiques officielles.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/que-faire-pont-en-royans"
                className="rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Que faire a Pont-en-Royans
              </Link>
              <Link
                href="/maisons-suspendues-pont-en-royans"
                className="rounded-md border border-[var(--badge-border)] px-5 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--text)] hover:text-[var(--text)]"
              >
                Page maisons suspendues
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6">
              {quickLinks.map((link) => {
                const isInternalPage = link.href.startsWith('/')

                if (isInternalPage) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="rounded-xl border border-[var(--badge-border)] bg-[var(--badge-bg)] px-4 py-3 text-center text-sm text-[var(--text-secondary)] backdrop-blur transition-colors hover:border-[var(--text)] hover:text-[var(--text)]"
                    >
                      {link.label}
                    </Link>
                  )
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-xl border border-[var(--badge-border)] bg-[var(--badge-bg)] px-4 py-3 text-center text-sm text-[var(--text-secondary)] backdrop-blur transition-colors hover:border-[var(--text)] hover:text-[var(--text)]"
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-gap)]">
        <div className="container mx-auto grid max-w-[var(--container)] gap-6 px-4 md:grid-cols-3">
          {homeHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-6"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Destination</p>
              <h2 className="mt-3 text-2xl font-display text-[var(--text)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="planning" className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Visite</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] text-[var(--text)]">
              Organiser votre parcours dans le village
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
              Commencez par les points de vue sur la Bourne, puis suivez le circuit patrimonial dans les rues anciennes. Le plan de l’office de tourisme vous aide à choisir les étapes selon votre temps et votre mobilité.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-7">
              <h3 className="text-xl font-semibold text-[var(--text)]">Itineraire conseille sur une demi-journee</h3>
              <ol className="mt-6 space-y-5 text-sm leading-7 text-[var(--text-secondary)]">
                <li>1. Commencez par la vue classique sur les maisons suspendues depuis le pont et la rive opposee.</li>
                <li>2. Parcourez les ruelles du village pour voir les facades, la Bourne et les passages anciens.</li>
                <li>3. Passez par la place du Breuil ; l’espace muséographique du Musée de l’Eau est fermé pour rénovation depuis octobre 2026.</li>
                <li>4. Si vous poursuivez vers les gorges de la Bourne ou Choranche, vérifiez d’abord les routes et les conditions de visite.</li>
              </ol>
            </div>

            <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Idées de visite</p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">Pour prolonger la promenade</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                Retrouvez les étapes du centre ancien, les informations sur le Musée de l’Eau et des idées pour poursuivre la journée dans le Royans.
              </p>
              <Link
                href="/que-faire-pont-en-royans"
                className="mt-6 inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white"
              >
                Ouvrir la page Que faire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="infos-pratiques" className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Informations pratiques</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] text-[var(--text)]">
              Informations pratiques avant de partir
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {practicalInfo.map((item) => (
              <article key={item.title} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-tertiary)]">{item.title}</p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">
                  {'href' in item && item.href ? (
                    <a href={item.href} className="text-blue-500 underline underline-offset-4">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]" id="autour-du-village">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Autour du village</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] text-[var(--text)]">
              D’autres étapes autour du village
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
              Le village se visite facilement à pied, mais les activités voisines et les routes du Vercors demandent une vérification des conditions du jour.
            </p>
          </div>
          <p className="mt-5 text-sm text-[var(--text-secondary)]">Sources : <a className="underline" href={sources.village}>office de tourisme : village</a> · <a className="underline" href={sources.circuit}>circuit patrimonial</a> · <a className="underline" href={sources.museum}>Musée de l’Eau</a> · <a className="underline" href={sources.road}>état des routes</a>. Vérification : 2 novembre 2026.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {aroundVillage.map((item) => (
              <article key={item.title} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{item.text}</p>
                {item.title === "Musée de l’Eau" && <Link href="/musee-eau-pont-en-royans" className="mt-3 inline-block text-sm text-blue-500 underline">Ce qui reste accessible pendant les travaux</Link>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="photos" className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Photos</p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] text-[var(--text)]">
                Pont-en-Royans en images
              </h2>
            </div>
            <a href={attraction.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 underline underline-offset-4">
              Voir davantage de photos sur Google Maps
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo, index) => (
              <figure key={photo.id} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.url}
                    alt={photoCaptions[index] || 'Photo de Pont-en-Royans'}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <figcaption className="px-3 py-3 text-xs leading-6 text-[var(--text-secondary)]">
                  {photoCaptions[index] || 'Photo de Pont-en-Royans'}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="carte" className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Carte</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] text-[var(--text)]">
              Localiser rapidement le village et la zone de visite
            </h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1409.101082456145!2d5.345133347657865!3d45.06140989041432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478abb7fdb94d4af%3A0xd074a0bc12d8f79d!2sLes%20maisons%20suspendues%20de%20Pont-en-Royans!5e0!3m2!1sfr!2sfr!4v1774257983912!5m2!1sfr!2sfr"
              className="h-[420px] w-full filter-[var(--map-filter)]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-5">
            <a
              href={attraction.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-[var(--badge-border)] px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text)]"
            >
              Ouvrir l itineraire dans Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="container mx-auto max-w-[var(--container)] px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Questions frequentes</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] text-[var(--text)]">
              Questions fréquentes
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {homeFaqs.map((faq) => (
              <details key={faq.question} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-[var(--text)]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
