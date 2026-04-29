import Link from "next/link";

export default function BlogTOC({ content }) {
  const headings = [...content.matchAll(/<h2>(.*?)<\/h2>/g)];

  if (!headings.length) return null;

  return (
    <aside className="toc">
      <h4>On this page</h4>
      <ul>
        {headings.map((h, i) => (
          <li key={i}>
            <Link href={`#section-${i}`}>{h[1]}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
