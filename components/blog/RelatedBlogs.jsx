"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getBlogsByCategory } from "../../api-services/blogApi";

export default function RelatedBlogs({ category }) {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (!category) return;

    getBlogsByCategory(category).then((data) => {
      // exclude current blog
      const filtered = data.filter((blog) => blog.slug !== slug);
      setBlogs(filtered.slice(0, 3));
    });
  }, [category, slug]);

  if (!blogs.length) return null;

  return (
<section className="related-blogs">
  <div className="container">
    <div className="related-header">
      <h3>Related Articles</h3>
      <p>You may also like these articles</p>
    </div>

    <div className="related-grid">
      {blogs.slice(0, 3).map((blog) => (
        <article key={blog._id} className="related-card">
          <Link href={`/blog/${blog?.slug}`} className="card-link">
            
            <div className="image-wrapper">
              <img
                src={blog?.featureImage?.secure_url}
                alt={blog?.title}
                loading="lazy"
              />
              <span className="category-badge">
                {blog?.category}
              </span>
            </div>

            <div className="card-content">
              <h4>{blog?.title}</h4>
              <span className="read-more">Read Article</span>
            </div>

          </Link>
        </article>
      ))}
    </div>
  </div>
</section>
  );
}
