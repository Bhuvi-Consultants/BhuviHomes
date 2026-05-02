"use client";

import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import FAQItem from "@/components/FAQItem";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">

            <FAQItem
              value="faq-1"
              question="How long does the typical home construction process take?"
              answer="Typically, construction takes 8–18 months depending on project size. We provide a detailed timeline during agreement."
            />

            <FAQItem
              value="faq-2"
              question="Do you handle all permits and approvals?"
              answer="Yes, we manage all permits and approvals with local authorities for a smooth process."
            />

            <FAQItem
              value="faq-3"
              question="How do you manage project budgets?"
              answer="We provide transparent cost estimates and track expenses using our internal system."
            />

            <FAQItem
              value="faq-4"
              question="What warranties do you offer?"
              answer="We provide a 1-year workmanship warranty along with manufacturer warranties on materials."
            />

          </Accordion>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button asChild variant="outline" aria-label="View all FAQs">
              <Link href="/faqs" className="flex items-center gap-2" aria-label="View all FAQs">
                View All FAQs
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;