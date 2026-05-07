import Link from "next/link";
import {
  Building2,
  PenTool,
  Hammer,
  Sofa,
  Info,
  HelpCircle,
  Phone,
  Workflow,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Map Approval",
    href: "/service/map-approval",
    icon: <Building2 className="w-5 h-5" />,
    desc: "Building plan approvals with RRDA, RMC & authorities.",
  },
  {
    title: "Design",
    href: "/service/design",
    icon: <PenTool className="w-5 h-5" />,
    desc: "Modern architectural planning and elevation design.",
  },
  {
    title: "Construction",
    href: "/service/construction",
    icon: <Hammer className="w-5 h-5" />,
    desc: "End-to-end residential & commercial construction.",
  },
  {
    title: "Interior",
    href: "/service/interior",
    icon: <Sofa className="w-5 h-5" />,
    desc: "Functional and aesthetic interior solutions.",
  },
];

const company = [
  {
    title: "About Us",
    href: "/about",
    icon: <Info className="w-5 h-5" />,
  },
  {
    title: "How It Works",
    href: "/how-it-works",
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    title: "FAQs",
    href: "/faqs",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <Phone className="w-5 h-5" />,
  },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-[#f4f7ed]">

      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-medium mb-5">
              HTML Sitemap
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Explore the complete structure of Bhuvi Homes
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Browse all major pages, services, and resources available on our
              website for easier navigation and better accessibility.
            </p>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* SERVICES */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900">
                Services
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Architectural, construction, and approval related services.
              </p>
            </div>

            <div className="divide-y divide-gray-100">

              {services.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-start justify-between gap-4 p-6 hover:bg-gray-50 transition"
                >

                  <div className="flex gap-4">

                    <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-700 transition shrink-0" />
                </Link>
              ))}

            </div>
          </div>

          {/* COMPANY */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900">
                Company
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Learn more about our process, company, and support resources.
              </p>
            </div>

            <div className="divide-y divide-gray-100">

              {company.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-center justify-between p-6 hover:bg-gray-50 transition"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                      {item.icon}
                    </div>

                    <span className="font-medium text-gray-900 group-hover:text-green-700 transition">
                      {item.title}
                    </span>

                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-700 transition" />
                </Link>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="bg-green-700 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">

            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Planning to build your dream home?
              </h2>

              <p className="mt-4 text-green-100 text-lg">
                Connect with our team for map approval, architectural design,
                interiors, and construction consultation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Contact Us
                </Link>

                <Link
                  href="/projects"
                  className="border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -right-16 -top-16 w-72 h-72 bg-white/10 rounded-full" />
            <div className="absolute right-10 bottom-0 w-40 h-40 bg-white/5 rounded-full" />

          </div>

        </div>
      </section>

    </main>
  );
}