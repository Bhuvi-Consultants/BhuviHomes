import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <Link href={`/blog/${blog.slug}`}>
        <img
          src={blog.featuredImage}
          alt={blog.title}
          loading="lazy"
          className="w-full h-56 object-cover"
        />
      </Link>

      <div className="p-6">
        <span className="text-sm text-leaf font-medium">
          {blog.category}
        </span>

        <h2 className="text-lg font-semibold mt-2 mb-3 leading-snug">
          <Link href={`/blog/${blog.slug}`} className="hover:underline">
            {blog.title}
          </Link>
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          {blog.excerpt}
        </p>

        <div className="text-xs text-gray-500">
          {new Date(blog.publishedAt).toDateString()}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
