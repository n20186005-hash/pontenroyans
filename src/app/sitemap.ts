import { MetadataRoute } from 'next'
import { siteUrl } from '../data/site-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/que-faire-pont-en-royans',
    '/maisons-suspendues-pont-en-royans',
    '/histoire-pont-en-royans',
    '/musee-eau-pont-en-royans',
  ]
  return paths.map((path, index) => ({
    url: siteUrl + (path === '/' ? '' : path),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.8,
  }))
}
