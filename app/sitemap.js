export default function sitemap() {
  const baseUrl = "https://staging.bhuvihomes.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
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
      url: `${baseUrl}/city`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sitemap-blogs.xml`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sitemap-projects.xml`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
