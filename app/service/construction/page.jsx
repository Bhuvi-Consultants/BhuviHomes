import Link from "next/link";
import {
  PencilRuler,
  Building,
  FlaskConical,
  ArrowRight,
  Shield,
  Users,
  HeartHandshake,
  BookMarked,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import CallToAction from "@/components/CallToAction";
import PricingPlan from "@/components/PricingPlan";
import ProcessStep from "@/components/ProcessStep";
import CoverPhoto from "@/public/CoverPhoto.webp";
import ProjectCarousel from "@/components/ProjectCarousel";
import { Construction } from "lucide-react";
import Image from "next/image";

// ✅ SEO metadata (replaces Helmet)
export const metadata = {
  title: "House Construction in Ranchi",
  description:
    "Looking for house construction in Ranchi? Bhuvi Homes offers complete construction services with quality assurance.",
  alternates: {
    canonical: "/service/construction",
  },
};

export default function ConstructionPage() {
  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construction Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Bhuvi Homes",
      url: "https://bhuvihomes.in",
    },
    areaServed: {
      "@type": "Place",
      name: "Ranchi",
    },
    description:
      "Professional residential and commercial construction services from concept to completion.",
    url: "https://bhuvihomes.in/service/design",
    serviceType: "Home Design and Construction",
  };

  return (
    <div className="bg-offwhite">
      {/* ✅ JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the cost of house construction in Ranchi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cost depends on material and design but typically ranges between ₹1500–₹2500 per sq ft.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide complete construction service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Bhuvi Homes provides design, planning and full construction execution.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-20 ">
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Construction
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Experience the joy of living in a home crafted with our{" "}
            <b>Stress-Free & High-Quality</b> construction services.
          </p>
        </div>
      </section>

      {/* Construction Service */}
      <section id="construction" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <SectionHeader
                title="Construction Services"
                centered={false}
                className="mb-8"
              />
              <p className="text-gray-500 mb-6">
                Our construction team brings your design to life with precision,
                quality craftsmanship, and attention to detail. We manage every
                aspect of the building process to ensure your project is
                completed on time, on budget, and to the highest standards.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-700/10 p-2 rounded-full">
                    <Building className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Residential Construction
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-700/10 p-2 rounded-full">
                    <Building className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Commercial Construction
                    </h3>
                    <p className="text-gray-500"></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-700/10 p-2 rounded-full">
                    <Building className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Consultancy</h3>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-green-700 hover:bg-green-700/90 text-green-700-foreground"
                aria-label="Start Your Building Project"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-offwhite"
                  aria-label="Contact Us to Start Your Building Project"
                >
                  Start Your Building Project
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <Image
                  src={
                    CoverPhoto
                      ? CoverPhoto
                      : "https://bhuvihomes.in/CoverPhoto.webp"
                  }
                  alt="Home construction"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-700/10 p-2 rounded-full">
                      <Building className="w-6 h-6 text-green-700" />
                    </div>
                    <p className="font-medium">Quality Consturction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-gradient-to-b from-white to-offwhite">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Projects"
            subtitle="Browse our portfolio of completed homes and design projects."
          />

          <div className="mt-10">
            <ProjectCarousel Ptype="construction" />
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2"
                aria-label="Explore more construction projects by BhuviHomes"
              >
                Explore More
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-t from-white to-offwhite overflow-hidden">
        <div className="container mx-auto">
          <SectionHeader
            title="How It Works"
            subtitle="Our simple, transparent process ensures a smooth journey from concept to completion."
          />

          <div className="max-w-3xl mx-auto">
            <ProcessStep
              number={1}
              title="Meet our Expert"
              description="We meet to discuss your vision, needs, and budget to establish project goals."
              icon={Users}
            />

            <ProcessStep
              number={2}
              title="Book with Us"
              description="Good to go! Your dream home can be booked with a Token money of ₹ 60000/-"
              icon={BookMarked}
            />

            <ProcessStep
              number={3}
              title="Design & Planning"
              description="Our team creates detailed designs and plans based on your requirements."
              icon={PencilRuler}
            />

            <ProcessStep
              number={4}
              title="Construction"
              description="We bring your vision to life with quality craftsmanship and attention to detail."
              icon={Building}
            />

            <ProcessStep
              number={5}
              title="Move In"
              description="Enjoy your beautiful new space, built with our high standards quality exactly as you imagined."
              icon={Shield}
              isLast
            />
          </div>
        </div>
      </section>

      <PricingPlan type={"Construction"} />

      {/* Call to Action */}
      <CallToAction
        title="Ready to Transform Your Home?"
        description="Contact us today to discuss your project and how our services can help you create the home of your dreams."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        variant="accent"
      />
    </div>
  );
}
