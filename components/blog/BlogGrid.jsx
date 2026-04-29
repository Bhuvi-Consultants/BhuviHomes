import BlogCard from "./BlogCard";

const BlogGrid = ({ blogs }) => {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
