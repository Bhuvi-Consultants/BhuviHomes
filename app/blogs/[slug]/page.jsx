import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import RelatedBlogs from "@/components/blog/RelatedBlogs";
import CallToAction from "@/components/CallToAction";

// ==============================
// 🔥 FETCH BLOG (SERVER SIDE)
// ==============================
async function getBlog(slug) {
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/blogs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data;
}

// ==============================
// 🔥 SEO METADATA
// ==============================
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ FIX

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.shortDescription,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.shortDescription,
      images: [blog.featureImage?.secure_url],
      type: "article",
    },
  };
}

// ==============================
// 🔥 PAGE COMPONENT
// ==============================
export default async function BlogPage({ params }) {
  const { slug } = await params; // ✅ FIX

  const blog = await getBlog(slug);
  // console.log(blog);

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  // ==============================
  // 🔥 SCHEMA (STRUCTURED DATA)
  // ==============================
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.shortDescription,
    image: blog.featureImage?.secure_url,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    author: {
      "@type": "Organization",
      name: "Bhuvi Homes",
    },
    publisher: {
      "@type": "Organization",
      name: "Bhuvi Homes",
      logo: {
        "@type": "ImageObject",
        url: "https://bhuvihomes.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bhuvihomes.in/blogs/${blog.slug}`,
    },
  };

  return (
    <main className="bg-white min-h-screen">
      {/* ===== SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://bhuvihomes.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blogs",
                item: "https://bhuvihomes.in/blogs",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: blog.title,
                item: `https://bhuvihomes.in/blogs/${blog.slug}`,
              },
            ],
          }),
        }}
      />

      {/* ===== BREADCRUMB ===== */}
      <div className="pt-20 pb-6 max-w-3xl mx-auto px-4 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /
        <Link href="/blogs" className="ml-1 hover:underline">
          Blog
        </Link>{" "}
        /<span className="ml-1 text-gray-700 capitalize">{blog.category}</span>
      </div>

      {/* ===== HEADER ===== */}
      <header className="max-w-3xl mx-auto px-4 pb-10">
        <span className="inline-block mb-4 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {blog.category.toUpperCase()}
        </span>

        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
          {blog.title}
        </h1>

        <div className="flex gap-4 text-sm text-gray-500 border-t pt-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(blog.createdAt).toDateString()}
          </div>

          <div className="flex items-center gap-1">
            <Clock size={14} />
            {blog.readTime || "5 min read"}
          </div>
        </div>
      </header>

      {/* ===== FEATURE IMAGE ===== */}
      {blog.featureImage?.secure_url && (
        <div className="max-w-5xl mx-auto px-4 pb-14">
          <div className="relative w-full h-[400px]">
            <Image
              src={blog.featureImage.secure_url}
              alt={blog.title}
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      )}

      {/* ===== CONTENT ===== */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_280px] gap-10">
          {/* BLOG CONTENT */}
          <article
            className="
              prose lg:prose-lg max-w-none
              prose-headings:font-semibold
              prose-img:rounded-xl
              prose-a:text-primary
            "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* SIDEBAR */}
          <aside className="hidden lg:block sticky top-32 h-fit space-y-6">
            {/* About */}
            <div className="border rounded-xl p-5 bg-gray-50 text-sm">
              <p className="font-semibold mb-2">About this article</p>
              <p className="text-gray-600">{blog.shortDescription}</p>
            </div>

            {/* Internal Links (SEO BOOST) */}
            <div className="border rounded-xl p-5 text-sm">
              <p className="font-semibold mb-3">Explore More</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/service/construction">House Construction</Link>
                </li>
                <li>
                  <Link href="/service/design">Home Design</Link>
                </li>
                <li>
                  <Link href="/projects">Our Projects</Link>
                </li>
                <li>
                  <Link href="/contact">Get Consultation</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== TRUST BLOCK ===== */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-100 border rounded-xl p-6 text-sm text-gray-700">
            Written by <strong>Bhuvi Homes Team</strong> — Experts in
            architecture, construction and interiors.
          </div>
        </div>
      </section>

      {/* ===== RELATED BLOGS ===== */}
      <RelatedBlogs category={blog.category} currentSlug={blog.slug} />

      {/* ===== CTA ===== */}
      <CallToAction
        title="Planning to build your home?"
        description="Talk to our experts and get clarity on design, cost, and execution."
        buttonText="Get Free Consultation"
        buttonLink="/contact"
      />
    </main>
  );
}
