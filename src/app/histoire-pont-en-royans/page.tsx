import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StructuredData from '../../components/StructuredData'
import { siteUrl, sources } from '../../data/site-content'

const pageUrl = siteUrl + '/histoire-pont-en-royans'
export const metadata: Metadata = {
  title: 'Histoire de Pont-en-Royans : portes, maisons et rivière',
  description: 'Comprendre l’histoire de Pont-en-Royans à travers ses maisons suspendues, ses anciennes portes, la rue de l’Horloge et la place de la Halle.',
  alternates: { canonical: '/histoire-pont-en-royans' },
  openGraph: { title: 'Histoire de Pont-en-Royans', description: 'Un parcours patrimonial dans le village ancien.', url: pageUrl, locale: 'fr_FR', type: 'article' },
}
const schema = [
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Histoire de Pont-en-Royans', item: pageUrl },
  ] },
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Histoire de Pont-en-Royans : portes, maisons et rivière', mainEntityOfPage: pageUrl, inLanguage: 'fr', author: { '@type': 'Organization', name: 'Pontenroyans' } },
]
export default function HistoirePage() {
  return <main className="min-h-screen">
    <StructuredData data={schema} /><Header />
    <article className="container mx-auto max-w-4xl px-4 pt-32 pb-16 text-[var(--text)]">
      <p className="text-sm"><Link href="/" className="underline">Accueil</Link> / Histoire de Pont-en-Royans</p>
      <h1 className="mt-8 font-display text-[clamp(2.2rem,5vw,4rem)]">Histoire de Pont-en-Royans : lire le village à pied</h1>
      <p className="mt-6 text-lg leading-8">Les maisons suspendues sont l’image la plus connue de Pont-en-Royans. Pour comprendre leur place dans le village, il faut aussi regarder les anciennes portes, les rues commerçantes et les bâtiments liés à la Bourne.</p>
      <h2 className="mt-12 font-display text-3xl">Un passage entre plaine et montagne</h2>
      <p className="mt-4 leading-8">Selon l’office de tourisme, le nom du village renvoie au pont qui franchit la Bourne. Cette position à l’entrée du Vercors en a fait un lieu de passage et d’échanges. Le circuit patrimonial commence à la porte de France, puis mène vers la rue de l’Horloge : son ancienne porte et sa tour rappellent les défenses et les circulations du bourg.</p>
      <h2 className="mt-12 font-display text-3xl">Les maisons au-dessus de la Bourne</h2>
      <p className="mt-4 leading-8">Le plan de l’office de tourisme indique qu’une trentaine de maisons bordaient autrefois les deux rives de la rivière. Certaines maisons conservées datent des années 1630–1660, période de reconstruction après les guerres de Religion. Leurs pièces en surplomb permettaient de gagner de la place dans un site resserré. Sous la chaussée, plusieurs niveaux étaient utilisés notamment comme ateliers ou étables.</p>
      <p className="mt-4 leading-8">On voit aujourd’hui ces façades depuis les quais et le pont Picard. Ce sont des habitations : observez-les depuis l’espace public et respectez les accès privés. Notre <Link href="/maisons-suspendues-pont-en-royans" className="underline">guide des maisons suspendues</Link> détaille les vues et l’architecture.</p>
      <h2 className="mt-12 font-display text-3xl">La vie dans les rues anciennes</h2>
      <p className="mt-4 leading-8">La rue de l’Horloge conserve, selon le circuit officiel, le souvenir du travail de la laine, des anciennes échoppes et de leurs poulies. Le parcours passe ensuite par la place du Temple, le quartier de la Corbeille et la place de la Halle. Le moulin de cette dernière a aussi participé à l’histoire artisanale du village, racontée sur la page historique de l’office de tourisme.</p>
      <h2 className="mt-12 font-display text-3xl">Préparer le parcours</h2>
      <p className="mt-4 leading-8">Le <a href={sources.circuit} className="underline">plan patrimonial de l’office de tourisme</a> situe les étapes. Les rues comportent des pentes et des escaliers ; choisissez un trajet adapté à votre mobilité. Pour combiner cette lecture historique avec d’autres étapes, voyez <Link href="/que-faire-pont-en-royans" className="underline">que faire à Pont-en-Royans</Link>.</p>
      <p className="mt-10 text-sm text-[var(--text-secondary)]">Sources : <a href={sources.history} className="underline">histoire du village</a> et <a href={sources.circuit} className="underline">circuit de découverte</a>, Office de tourisme Saint-Marcellin Vercors Isère. Vérification : 2 novembre 2026.</p>
    </article><Footer />
  </main>
}
