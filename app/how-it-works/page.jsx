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
import ProcessSection from "@/components/ProcessSection";

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
      <section className="pt-32 pb-2 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          How It Works
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Our simple and transparent process ensures smooth house construction
          across Jharkhand.
        </p>
      </section>

      {/* Process */}
      <ProcessSection
        // title="Our Process"
        // subtitle="Our simple and transparent process ensures smooth house construction across Jharkhand."
        type="Home"
      />

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="What to Expect"
            subtitle="Why clients trust Bhuvi Homes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Clear Communication",
                message:
                  "Regular updates and open lines of communication throughout your project journey. We're always available to answer questions and address concerns.",
              },
              {
                title: "Transparent Pricing",
                message:
                  " Detailed cost breakdowns and no hidden fees. We provide clear, honest pricing information from the start and keep you informed about any changes.",
              },
              {
                title: "Quality Assurance",
                message:
                  "Quality control at every stage of your project. Our team conducts thorough inspections to ensure everything meets our high standards.",
              },
              {
                title: "Timeline Adherence",
                message:
                  "Realistic schedules and commitment to deadlines. We value your time and work diligently to complete projects as promised.",
              },
              {
                title: "Client Involvement",
                message:
                  "We encourage your participation and feedback throughout the process. Your home should reflect your vision and needs.",
              },
              {
                title: "After-Service Support",
                message:
                  "Comprehensive warranties and ongoing support after project completion. We stand behind our work and are here to help long after we finish.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-offwhite p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center bg-green-700 text-white rounded-full mb-3">
                  <Check size={18} />
                </div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-muted-foreground">{p.message}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-green-700 text-green-700"
            >
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
