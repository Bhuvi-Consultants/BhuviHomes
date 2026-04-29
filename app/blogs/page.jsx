import BlogList from "@/components/BlogList";
import Link from "next/link";

export const metadata = {
  title: "Home Design & Construction Blog | Bhuvi Homes",
  description:
    "Read expert guides on home design, construction costs, planning, approvals, and execution by Bhuvi Homes. Practical insights for homeowners.",
  keywords:
    "Interior Designer Ranchi, Home Interior Design Ranchi, Modular Kitchen Ranchi, Living Room Interior Ranchi, Bedroom Interior Design Jharkhand",
  alternates: {
    canonical: "https://bhuvihomes.in/blog",
  },
};

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Bhuvi Homes Design & Construction Blog",
    url: "https://bhuvihomes.in/blogs",
    description:
      "Practical articles on home design, construction planning, costs, and execution by Bhuvi Homes.",
    publisher: {
      "@type": "Organization",
      name: "Bhuvi Homes",
      logo: {
        "@type": "ImageObject",
        url: "https://bhuvihomes.in/logo.png",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* SEO-focused Page Header */}
      <section className="bg-gray-50 pt-32 pb-14 md:pt-44 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            Home Design & Construction <span className="text-leaf">Blog</span>
          </h1>

          <div className="w-20 h-1 bg-leaf mx-auto mb-8"></div>

          <p className="text-lg max-w-3xl mx-auto">
            Step-by-step guides, cost breakdowns, design ideas, and construction
            insights written by the Bhuvi Homes team to help homeowners plan and
            build better homes.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <BlogList />

      {/* Internal Linking + Trust */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Need professional help with your home project?
          </h2>
          <p className="mb-6">
            Explore our design and construction services or talk directly with
            our experts for clear guidance.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/services"
              className="inline-block border border-leaf text-leaf px-6 py-3 rounded-md"
              aria-label="View Our Services"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-leaf text-white px-6 py-3 rounded-md"
              aria-label="Contact Us for Consultation"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
