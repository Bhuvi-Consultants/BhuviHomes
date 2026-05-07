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
      <section className="pt-32 pb-20 bg-offwhite text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Find answers about our services, process, and pricing.
        </p>
      </section>

      {/* General FAQs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <SectionHeader
            title="General Questions"
            subtitle="Basic information about our company and services."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                value="general-1"
                question="What areas do you serve?"
                answer="We primarily serve in Ranchi, Bokaro, Khunti, Dhanbad, Jamshedpur, Chatra and surrounding area within a 50-km radius. For projects outside this area, please contact us to discuss options."
              />

              <FAQItem
                value="general-2"
                question="Do you offer both design and construction services?"
                answer="Yes, we offer comprehensive design and construction services. You can hire us for just design, just construction, or both. Our integrated approach often yields the best results, but we're flexible to meet your needs."
              />

              <FAQItem
                value="general-3"
                question="What types of projects do you specialize in?"
                answer="We specialize in custom home design and construction, villa construction. Our expertise modern, traditional, and transitional design styles."
              />

              <FAQItem
                value="general-4"
                question="Are you licensed and insured?"
                answer="Yes, we are fully licensed and insured with the local authority i.e. RRDA, RMC & Khunti."
              />

              <FAQItem
                value="general-5"
                question="How many projects do you take on at once?"
                answer="We carefully manage our workload to ensure each project receives the attention it deserves. Typically, we handle 12-20 major projects simultaneously, allowing our team to provide responsive service and maintain quality control."
              />
            </Accordion>
          </div>
        </div>
      </section>

      {/* Process FAQs */}
      <section className="section-padding bg-gradient-to-b from-white to-offwhite">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <SectionHeader
            title="Process Questions"
            subtitle="Understanding how we work and what to expect."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                value="process-1"
                question="How long does the typical home construction process take?"
                answer="The timeline varies based on the size and complexity of your project. Typically, a new home construction takes 8-18 months from design to completion for G+2 or G+3 building. We'll provide a detailed Payment Schedule with timeline and payment mentioned during the agreement phase."
              />

              <FAQItem
                value="process-2"
                question="Do you handle all necessary permits and approvals?"
                answer="Yes, our team manages all required permits, inspections, and approvals. We have established relationships with local authorities and understand the requirements to ensure a smooth process."
              />

              <FAQItem
                value="process-3"
                question="How involved will I be in the process?"
                answer="As involved as you'd like to be. Some clients prefer regular site visits and detailed updates, while others prefer a more hands-off approach. We tailor our communication to your preferences while ensuring you have all the information needed to make important decisions."
              />

              <FAQItem
                value="process-4"
                question="What happens if there are changes during construction?"
                answer="Changes during construction are handled through a formal change order process. We document the requested changes, provide updated cost and timeline implications, and secure your approval before proceeding. This ensures transparency and clear expectations."
              />

              <FAQItem
                value="process-5"
                question="Will I have a dedicated project manager?"
                answer="Yes, every project is assigned a dedicated site incharge and quality engineer who serves as your primary point of contact throughout the process. They coordinate all aspects of your project and ensure clear, consistent communication."
              />
            </Accordion>
          </div>
        </div>
      </section>

      {/* Financial FAQs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <SectionHeader
            title="Financial Questions"
            subtitle="Information about costs, payments, and financial considerations."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                value="financial-1"
                question="How do you price your projects?"
                answer="We offer transparent pricing based on the scope, materials, and structure of your project. For design services, we typically work on a fixed-fee basis. Construction projects may be priced as per sqft in roof covered area, depending on the nature of the work and your preferences."
              />

              <FAQItem
                value="financial-2"
                question="Do you require a deposit?"
                answer="Yes, we require an initial deposit to secure your place in our schedule and begin work. The deposit amount varies based on project size but typically ranges from 10-25% of the total project cost. We then establish a payment schedule tied to project milestones."
              />

              <FAQItem
                value="financial-3"
                question="How do you manage project budgets?"
                answer="We provide detailed estimates upfront and use our very own software to track expenses. We maintain transparent communication about costs throughout the project and notify you immediately if any extra work or changes that might affect the budget."
              />

              <FAQItem
                value="financial-4"
                question="Do you offer financing options?"
                answer="While we don't provide direct financing, we can refer you to trusted financial partners who specialize in construction loans. We're also happy to provide the documentation needed for loan applications."
              />

              <FAQItem
                value="financial-5"
                question="What happens if we go over budget?"
                answer="We work diligently to avoid budget overruns through careful planning and regular monitoring. If unforeseen circumstances arise, we'll promptly discuss options with you, which may include material substitutions, scope adjustments, or phasing certain aspects of the project."
              />
            </Accordion>
          </div>
        </div>
      </section>

      {/* After Completion FAQs */}
      <section className="section-padding bg-gradient-to-b from-white to-offwhite">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <SectionHeader
            title="After Completion"
            subtitle="What to expect after your project is finished."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                value="after-1"
                question="What warranties do you offer on your work?"
                answer="We stand behind our work with a comprehensive 1-year warranty on workmanship and materials. Additionally, many of the products and systems we install come with manufacturer warranties that extend beyond our workmanship warranty."
              />

              <FAQItem
                value="after-2"
                question="What happens if something needs to be fixed after completion?"
                answer="Simply contact your site incharge or qulaity incharge or our office. For warranty items, we'll schedule a convenient time to assess and address the issue promptly. Even beyond the warranty period, we're committed to client satisfaction and will work with you to resolve any concerns."
              />

              <FAQItem
                value="after-3"
                question="Do you provide documentation for my completed project?"
                answer="Yes, upon completion, we provide a comprehensive project binder containing all relevant documentation, including warranties, care and maintenance instructions, as-built plans, paint colors, material specifications, and subcontractor contact information."
              />

              <FAQItem
                value="after-4"
                question="Can I hire you for future projects or additions?"
                answer="Absolutely! Many of our clients return for additional projects. Having worked together previously gives us valuable insight into your preferences and allows for an even smoother process on subsequent projects."
              />
            </Accordion>
          </div>
        </div>
      </section>

      {/*  CTA Section  Still Have Questions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          <SectionHeader
            title="Still Have Questions?"
            subtitle="We're here to help. Reach out through any of these channels for assistance."
          />

          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-offwhite p-8 rounded-xl text-center flex-1">
              <h3 className="text-xl font-serif font-medium mb-4">Contact Us Directly</h3>
              <p className="text-muted-foreground mb-6">
                Speak with our team directly for personalized assistance with your specific questions.
              </p>
              <Button asChild className="bg-red-500 hover:bg-red-600 text-primary-foreground">
                <Link href="tel:8986699600">Call Now</Link>
              </Button>
            </div>

            <div className="bg-offwhite p-8 rounded-xl text-center flex-1">
              <h3 className="text-xl font-serif font-medium mb-4">Schedule a Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Book a free consultation to discuss your project and get all your questions answered.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>

            <div className="bg-offwhite p-8 rounded-xl text-center flex-1">
              <h3 className="text-xl font-serif font-medium mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-6">
                Send us an email with your question and we'll respond within 24 hours.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="mailto:homes.bhuvi@gmail.com">Email Us</Link>
              </Button>
            </div>
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