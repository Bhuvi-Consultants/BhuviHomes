import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import FAQItem from "@/components/FAQItem";
import CallToAction from "@/components/CallToAction";
import { Accordion } from "@/components/ui/accordion";

// ✅ SEO metadata
export const metadata = {
  title: "FAQs - Bhuvi Homes",
  description:
    "Find answers to common questions about Bhuvi Homes services, pricing, and process.",
  alternates: {
    canonical: "https://bhuvihomes.in/faqs",
  },
};

export default function FAQsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does home construction take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 8-18 months depending on project complexity.",
        },
      },
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
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Find answers about our services, process, and pricing.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <SectionHeader
            title="General Questions"
            subtitle="Basic information about our services."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>

              <FAQItem
                value="1"
                question="What areas do you serve?"
                answer="We serve Ranchi, Bokaro, Dhanbad and nearby areas."
              />

              <FAQItem
                value="2"
                question="Do you offer both design and construction?"
                answer="Yes, we offer both individually or combined."
              />

              <FAQItem
                value="3"
                question="How long does construction take?"
                answer="Typically 8–18 months depending on size."
              />

            </Accordion>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 text-center">
        <SectionHeader
          title="Still Have Questions?"
          subtitle="Contact us for personalized assistance."
        />

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">

          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-semibold mb-3">Call Us</h3>
            <Button asChild className="bg-red-500 text-white">
              <a href="tel:8986699600">Call Now</a>
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-semibold mb-3">Consultation</h3>
            <Button asChild className="bg-green-700 text-white">
              <Link href="/contact">
                Book Now <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      <CallToAction
        title="Ready to Start?"
        description="Let’s build your dream home."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}