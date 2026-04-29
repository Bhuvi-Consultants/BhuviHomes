"use client";
import React, { useEffect, useState } from "react";
import { generateTOC } from "@/utils/generateTOC";

const BlogContent = ({ content }) => {
  const [toc, setToc] = useState([]);
  const [html, setHtml] = useState("");

  useEffect(() => {
    const { toc, updatedHTML } = generateTOC(content);
    setToc(toc);
    setHtml(updatedHTML);
  }, [content]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
      {/* Article */}
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* TOC */}
      {toc.length > 0 && (
        <aside className="hidden lg:block sticky top-32 h-fit">
          <div className="bg-gray-50 border rounded-lg p-5">
            <h4 className="font-semibold mb-3">On this page</h4>
            <ul className="space-y-2 text-sm">
              {toc.map(item => (
                <li
                  key={item.id}
                  className={item.level === "h3" ? "ml-4" : ""}
                >
                  <a
                    href={`#${item.id}`}
                    className="hover:underline text-gray-700"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </section>
  );
};

export default BlogContent;
