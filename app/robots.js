// app/robots.js
const isProduction =
  process.env.NEXT_PUBLIC_SITE_URL === 'https://bhuvihomes.in'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? '/' : '',
      disallow: isProduction ? '' : '/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  }
}