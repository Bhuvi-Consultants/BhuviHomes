export async function GET() {
  const baseUrl = "https://staging.bhuvihomes.in";
  const projects = await fetch(`${process.env.API_BASE_URL}/api/v1/projects/public`, {
    cache: "force-cache",
  }).then((res) => res.json());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${projects
      .map(
        (project) => `
      <url>
        <loc>${baseUrl}/projects/${project.slug}</loc>
        <priority>0.8</priority>
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
