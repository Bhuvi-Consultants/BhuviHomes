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
  Key,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import CallToAction from "@/components/CallToAction";
import PricingPlan from "@/components/PricingPlan";
import ProcessStep from "@/components/ProcessStep";
import ProjectCarousel from "@/components/ProjectCarousel";
import Image from "next/image";

// ✅ SEO metadata (replaces Helmet)
export const metadata = {
  title: "Interior Design Services in Ranchi - Bhuvi Homes",
  description:
    "Explore Bhuvi Homes' comprehensive interior design services in Ranchi, including modular kitchens, space planning, and 3D visualization.",
  keywords:
    "Interior Designer Ranchi, Home Interior Design Ranchi, Modular Kitchen Ranchi, Living Room Interior Ranchi, Bedroom Interior Design Jharkhand",
  alternates: {
    canonical: "https://bhuvihomes.in/service/interior",
  },
};

export default function InteriorPage() {
  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://bhuvihomes.in/service/interior",
    serviceType: "Home Interior Design Services in Ranchi",
    areaServed: "Ranchi, Jharkhand",
    provider: {
      "@type": "Organization",
      name: "Bhuvi Homes",
    },
    description:
      "Professional interior design services in Ranchi including modular interiors, space planning, 3D design and execution by Bhuvi Homes.",
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
            Interior Design Services in Ranchi
          </h1>

          <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Transform your home with modern, functional and personalized
            interior design solutions in Ranchi. From space planning to premium
            finishes, we design interiors that match your lifestyle and budget.
          </p>
        </div>
      </section>

      {/* Design Service */}
      <section id="design" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                    alt="Interior design planning"
                    fill
                    className="rounded-2xl shadow-xl object-cover"
                  />
                </div>
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
                title="Interior Design & Planning"
                centered={false}
                className="mb-8"
              />
              <p className="text-gray-500 mb-6">
                Your home interiors should feel comfortable, practical and
                visually stunning. Our Ranchi-based interior design team focuses
                on smart space planning, modern aesthetics and durable materials
                to create spaces that truly reflect your personality while
                maximizing usability.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-700/10 p-2 rounded-full">
                    <PencilRuler className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Complete Interior Planning
                    </h3>
                    <p className="text-gray-500">
                      We design layouts for living rooms, bedrooms, kitchens and
                      wardrobes with smart space utilization tailored for modern
                      homes in Ranchi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-700/10 p-2 rounded-full">
                    <PencilRuler className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Modular & Custom Interior Solutions
                    </h3>
                    <p className="text-gray-500">
                      From modular kitchens to TV units and storage solutions,
                      we create interiors that are functional, stylish and built
                      for everyday living.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-700/10 p-2 rounded-full">
                    <PencilRuler className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      3D Interior Visualization
                    </h3>
                    <p className="text-gray-500">
                      See your interiors before execution with realistic 3D
                      designs, helping you make confident design decisions.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="border-green-700 text-green-700"
                aria-label="Contact Us to Start Your Interior Design Project"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                  aria-label="Contact Us to Start Your Interior Design Project"
                >
                  Your Rooms Too deserves a Makeover
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
            subtitle="Explore some of our interior design and home transformation projects completed in Ranchi and nearby areas."
          />

          <div className="mt-10">
            <ProjectCarousel Ptype="interior" />
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="bg-red-500 hover:bg-red-600 text-white"
              aria-label="Explore More Interior Design Projects"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2"
                aria-label="Explore More Interior Design Projects"
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

            <ProcessStep
              number={5}
              title="Execution & Handover"
              description="Get your dream home executed with quality craftsmanship and timely delivery. We ensure your complete satisfaction before handing over the keys."
              icon={Key}
              isLast
            />
          </div>
        </div>
      </section>

      <PricingPlan type={"Interior"} />

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
