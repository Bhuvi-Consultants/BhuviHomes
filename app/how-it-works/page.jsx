import Link from "next/link";
import {
  Users,
  PencilRuler,
  Building,
  Shield,
  ArrowRight,
  Check,
  BookMarked,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import ProcessStep from "@/components/ProcessStep";
import CallToAction from "@/components/CallToAction";

// ✅ SEO
export const metadata = {
  title: "How It Works - Bhuvi Homes",
  description:
    "Understand Bhuvi Homes' streamlined process from consultation to completion.",
  alternates: {
    canonical: "https://bhuvihomes.in/how-it-works",
  },
};

export default function HowItWorksPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Bhuvi Homes Construction Process",
    step: [
      { name: "Meet our Expert" },
      { name: "Book with Us" },
      { name: "Design & Planning" },
      { name: "Construction" },
      { name: "Move In" },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-50 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          How It Works
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Our transparent process ensures a smooth journey from concept to completion.
        </p>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <SectionHeader
            title="Our Process"
            subtitle="Simple and structured approach to your dream home."
          />

          <div className="max-w-3xl mx-auto">

            <ProcessStep
              number={1}
              title="Meet our Expert"
              description="Discuss your vision and budget."
              icon={Users}
              url="/about"
            />

            <ProcessStep
              number={2}
              title="Book with Us"
              description="Secure your project with token amount."
              icon={BookMarked}
              url="/contact"
            />

            <ProcessStep
              number={3}
              title="Design & Planning"
              description="We prepare detailed plans."
              icon={PencilRuler}
              url="/service/design"
            />

            <ProcessStep
              number={4}
              title="Construction"
              description="Execution with quality and precision."
              icon={Building}
              url="/service/construction"
            />

            <ProcessStep
              number={5}
              title="Move In"
              description="Enjoy your completed home."
              icon={Shield}
              url="/projects"
              isLast
            />

          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <SectionHeader
            title="What to Expect"
            subtitle="Why clients trust Bhuvi Homes."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Clear Communication",
              "Transparent Pricing",
              "Quality Assurance",
              "Timeline Adherence",
              "Client Involvement",
              "After-Service Support",
            ].map((title, i) => (
              <div key={i} className="bg-white p-6 rounded-xl">
                <div className="w-10 h-10 flex items-center justify-center bg-green-700 text-white rounded-full mb-3">
                  <Check size={18} />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
            ))}

          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-green-700 text-green-700">
              <Link href="/projects" className="flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      <CallToAction
        title="Ready to Begin Your Journey?"
        description="Start your dream home today."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </>
  );
}