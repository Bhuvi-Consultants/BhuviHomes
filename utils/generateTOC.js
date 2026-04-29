export function generateTOC(html) {
  if (!html) return [];

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  const headings = tempDiv.querySelectorAll("h2, h3");
  const toc = [];

  headings.forEach((heading, index) => {
    let id = heading.id;

    if (!id) {
      id = heading.innerText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      heading.id = id;
    }

    toc.push({
      id,
      text: heading.innerText,
      level: heading.tagName.toLowerCase()
    });
  });

  return { toc, updatedHTML: tempDiv.innerHTML };
}
