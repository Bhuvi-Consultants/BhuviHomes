// app/sitemap.js
export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bhuvihomes.in'

  // Your static pages (same list, without the sitemap-blogs.xml entry)
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service/design`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service/map-approval`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service/construction`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service/interior`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      priority: 0.7,
    },
    // Uncomment and add more static pages when ready
    // { url: `${baseUrl}/city`, lastModified: new Date(), priority: 0.7 },
  ]

  // Fetch dynamic blog URLs (identical logic to your old sitemap-blogs route)
  let blogPages = []
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/v1/blogs/public`, {
      cache: 'no-store',
    })
    const contentType = res.headers.get('content-type')

    if (res.ok && contentType?.includes('application/json')) {
      const json = await res.json()
      const blogs = Array.isArray(json) ? json : json.data || []

      blogPages = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
    } else {
      console.error('Blog API returned non‑JSON or failed', await res.text())
    }
  } catch (error) {
    console.error('Failed to fetch blogs for sitemap:', error)
    // Sitemap will still contain static pages – safe to continue
  }

  // Return everything combined
  return [...staticPages, ...blogPages]
}