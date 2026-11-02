import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StructuredData from '../../components/StructuredData'
import { siteUrl, sources } from '../../data/site-content'

const pageUrl = siteUrl + '/musee-eau-pont-en-royans'
export const metadata: Metadata = {
  title: 'Musée de l’Eau à Pont-en-Royans : fermeture de l’exposition',
  description: 'L’espace muséographique du Musée de l’Eau est fermé pour rénovation depuis octobre 2026. Quels services restent accessibles et comment adapter votre visite ?',
  alternates: { canonical: '/musee-eau-pont-en-royans' },
  openGraph: { title: 'Musée de l’Eau : préparer sa visite', description: 'Statut de l’exposition et autres services du site.', url: pageUrl, locale: 'fr_FR', type: 'article' },
}
const schema = [
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Musée de l’Eau', item: pageUrl },
  ] },
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Musée de l’Eau à Pont-en-Royans : fermeture de l’exposition', mainEntityOfPage: pageUrl, inLanguage: 'fr', author: { '@type': 'Organization', name: 'Pontenroyans' } },
]
export default function MuseePage() {
  return <main className="min-h-screen">
    <StructuredData data={schema} /><Header />
    <article className="container mx-auto max-w-4xl px-4 pt-32 pb-16 text-[var(--text)]">
      <p className="text-sm"><Link href="/" className="underline">Accueil</Link> / Musée de l’Eau</p>
      <h1 className="mt-8 font-display text-[clamp(2.2rem,5vw,4rem)]">Musée de l’Eau : ce qui est accessible pendant les travaux</h1>
      <p className="mt-6 text-lg leading-8">L’espace muséographique du Musée de l’Eau, place du Breuil à Pont-en-Royans, a fermé temporairement le 1er octobre 2026 pour une rénovation complète. L’office de tourisme annonce une réouverture de cet espace en 2029. Ne prévoyez donc pas aujourd’hui la visite habituelle de l’exposition.</p>
      <h2 className="mt-12 font-display text-3xl">Le site ne ferme pas entièrement</h2>
      <p className="mt-4 leading-8">D’après la <a href={sources.museum} className="underline">fiche de l’office de tourisme</a>, l’hôtel et le restaurant restent ouverts. La boutique est annoncée accessible les après-midis et les dégustations d’eaux se poursuivent sur réservation. Ces modalités peuvent changer pendant les travaux : consultez la fiche officielle ou contactez directement l’établissement avant de réserver ou de vous déplacer.</p>
      <h2 className="mt-12 font-display text-3xl">Adapter une journée à Pont-en-Royans</h2>
      <p className="mt-4 leading-8">La fermeture de l’exposition ne change pas la promenade dans le village. Depuis la place du Breuil, rejoignez les quais de la Bourne pour voir les <Link href="/maisons-suspendues-pont-en-royans" className="underline">maisons suspendues</Link>, puis continuez par le pont Picard et les ruelles anciennes. Le <a href={sources.circuit} className="underline">circuit patrimonial</a> de l’office de tourisme aide à repérer ces étapes.</p>
      <p className="mt-4 leading-8">Si vous cherchez une sortie en intérieur, vérifiez les autres musées et activités actuellement ouverts sur le site de l’office de tourisme. Une dégustation sur réservation ne remplace pas l’exposition fermée et ses conditions sont distinctes.</p>
      <h2 className="mt-12 font-display text-3xl">Où vérifier les informations ?</h2>
      <p className="mt-4 leading-8">La fiche officielle du Musée de l’Eau est la référence pour l’avancement des travaux et les services disponibles. Le bureau d’information touristique de Pont-en-Royans, au 48 Grande Rue, a un <a href={sources.office} className="underline">accueil saisonnier</a> : vérifiez ses horaires avant de vous y rendre.</p>
      <p className="mt-10 text-sm text-[var(--text-secondary)]">Sources : <a href={sources.museum} className="underline">fiche du Musée de l’Eau</a> et <a href={sources.office} className="underline">horaires du bureau d’information</a>, Office de tourisme Saint-Marcellin Vercors Isère. Vérification : 2 novembre 2026.</p>
    </article><Footer />
  </main>
}
