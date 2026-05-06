import Link from "next/link";
import Image from "next/image";

// ==============================
// 🔥 FETCH RELATED BLOGS (SERVER)
// ==============================
async function getRelatedBlogs(category, currentSlug) {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/blogs?category=${category}`,
    { cache: "no-store" },
  );
  console.log(res);
  if (!res.ok) return [];

  const data = await res.json();

  // handle response shape
  const blogs = Array.isArray(data) ? data : data.data || [];

  // remove current blog
  return blogs.filter((blog) => currentSlug ? blog.slug !== currentSlug : blog).slice(0, 3);
}

// ==============================
// COMPONENT
// ==============================
export default async function RelatedBlogs({ category, currentSlug }) {
  console.log("category:", category);
  if (!category)
    return <div className="text-center  py-20">No Related Blog found</div>;

  const blogs = await getRelatedBlogs(category, currentSlug);
  console.log("blogs:", blogs);

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No related blogs found
      </div>
    );
  }

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-semibold">Related Articles</h3>
          <p className="text-gray-500 text-sm">
            You may also like these articles
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog._id}
              className="bg-white rounded-xl overflow-hidden border hover:shadow-md transition"
            >
              <Link href={`/blogs/${blog.slug}`}>
                {/* IMAGE */}
                <div className="relative w-full h-48">
                  <Image
                    src={blog.featureImage?.secure_url}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <span className="text-xs text-primary font-medium">
                    {blog.category}
                  </span>

                  <h4 className="mt-2 text-md font-semibold line-clamp-2">
                    {blog.title}
                  </h4>

                  <span className="text-sm text-primary mt-2 inline-block">
                    Read Article →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
