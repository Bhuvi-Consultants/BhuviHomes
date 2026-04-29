export async function GET() {
  const baseUrl = "https://staging.bhuvihomes.in";

  const blogs = await fetch("https://api.bhuvihomes.in/blogs").then((res) =>
    res.json()
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${blogs
      .map(
        (blog) => `
      <url>
        <loc>${baseUrl}/blogs/${blog.slug}</loc>
        <lastmod>${blog.updatedAt}</lastmod>
        <priority>0.7</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}