export default function BlogHeader({ blog }) {
  return (
    <header className="blog-header">
      <span className="category">{blog.category}</span>
      <h1>{blog.title}</h1>

      <div className="meta">
        <span>{new Date(blog.publishedAt).toDateString()}</span>
        <span>{blog.readTime} min read</span>
      </div>

      <img
        src={blog.featuredImage}
        alt={blog.title}
      />
    </header>
  );
}
