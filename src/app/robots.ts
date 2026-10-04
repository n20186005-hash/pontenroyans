import { MetadataRoute } from 'next'
import { siteUrl } from '../data/site-content'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
