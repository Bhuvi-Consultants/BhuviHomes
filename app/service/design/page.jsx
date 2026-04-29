
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
import ProjectCarousel from "@/components/ProjectCarousel";
import Design from "@/public/design.png";
import Image from "next/image";

// ✅ SEO metadata (replaces Helmet)
export const metadata = {
  title: "Architectural Design in Jharkhand - Bhuvi Homes",
  description:
    "Learn about Bhuvi Homes' journey, vision, and commitment to excellence in home design and construction.",
  keywords: "Home design Ranchi, Home construction Ranchi, Bhuvi Homes",
  alternates: {
    canonical: "https://bhuvihomes.in/service/design",
  },
};

export default function DesignPage() {
  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://bhuvihomes.in/service/design",
    serviceType: "Home Design and Construction",
    provider: {
      "@type": "Organization",
      name: "Bhuvi Homes",
    },
    description:
      "Comprehensive home design and construction services by Bhuvi Homes.",
  };

  return (
    <div className="bg-gray-50">
      {/* ✅ JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Design
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Experience the joy of living in a home crafted with our{" "}
            <b>Stress-Free & High-Quality</b> design services.
          </p>
        </div>
      </section>

      {/* Design Service */}
      <section id="design" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src={Design ? Design : "https://bhuvihomes.in/design.png"}
                  alt="Interior design planning"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-700/10 p-2 rounded-full">
                      <PencilRuler className="w-6 h-6 text-green-700" />
                    </div>
                    <p className="font-medium">Architectural Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <SectionHeader
                title="Design Services"
                centered={false}
                className="mb-8"
              />
              <p className="text-gray-500 mb-6">
                Imagine a home that perfectly reflects your style and meets your
                everyday needs. With our expertise, you’ll experience
                thoughtful, functional spaces designed to make you feel
                comfortable and proud — built to last for years to come.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-700/10 p-2 rounded-full">
                    <PencilRuler className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Architectural Design
                    </h3>
                    <p className="text-gray-500">
                      Get a customized design that brings your vision to life,
                      whether building new or transforming existing into
                      something extraordinary.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-700/10 p-2 rounded-full">
                    <PencilRuler className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Get Approved from the local Authority
                    </h3>
                    <p className="text-gray-500">
                      We streamline the approval process, handling all paperwork
                      to ensure your project meets regulations and moves forward
                      smoothly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-700/10 p-2 rounded-full">
                    <PencilRuler className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      3D Visualization
                    </h3>
                    <p className="text-gray-500">
                      Visualize your space with realistic 3D renderings before
                      construction starts.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="border-green-700 text-green-700"
                aria-label="Contact Us to Start Your Design Project"
              >
                <Link href="/contact" className="inline-flex items-center gap-2" aria-label="Get a Design Consultation">
                  Get a Design Consultation
                  <ArrowRight size={16} />
                </Link>
              </Button>
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
            <ProjectCarousel Ptype="design" />
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild className="bg-red-500 hover:bg-red-600 text-white" aria-label="Explore More Design Projects">
              <Link href="/projects" className="inline-flex items-center gap-2" aria-label="Explore More Design Projects">
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
              description="Good to go! Your dream home can be booked with a Token money"
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
              title="Receive Designs"
              description="You will get a detailed drawing with in-depth planning of your dream home till you are completely satisfied."
              icon={Shield}
              isLast
            />
          </div>
        </div>
      </section>

      <PricingPlan type={"Design"} />

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
