import { MetadataRoute } from 'next'
import { siteUrl } from '../data/site-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    '/',
    '/que-faire-pont-en-royans/',
    '/maisons-suspendues-pont-en-royans/',
  ]

  return urls.map((path, index) => ({
      url: `${siteUrl}${path === '/' ? '' : path}`,
      lastModified: new Date(),
      changeFrequency: index === 0 ? 'weekly' : 'monthly',
      priority: index === 0 ? 1 : 0.8,
    }))
}
