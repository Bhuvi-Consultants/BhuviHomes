export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/blogs/public`, {
    cache: "no-store",
  });

  const contentType = res.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await res.text();
    return new Response(`Invalid JSON response:\n${text}`, { status: 500 });
  }

  const json = await res.json();
  const blogs = Array.isArray(json) ? json : json.data || [];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${blogs
      .map(
        (blog) => `
      <url>
        <loc>${baseUrl}/blogs/${blog.slug}</loc>
        <lastmod>${blog.updatedAt}</lastmod>
        <priority>0.7</priority>
      </url>`,
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
