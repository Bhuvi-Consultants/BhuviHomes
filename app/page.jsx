import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSlider from "@/components/TestimonialSlider";
import PricingPlan from "@/components/PricingPlan";
import FAQSection from "@/components/FAQSection";
import ProcessSection from "@/components/ProcessSection";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCarousel from "@/components/ProjectCarousel";

export const metadata = {
  title: "Bhuvi Homes - Home Design & Construction In Ranchi",
  description:
    "Bhuvi Homes offers best home design and construction services in Ranchi.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />

      {/* Featured Projects Section */}
      <section className="section-padding bg-gradient-to-b from-white to-offwhite">
        <div className="container mx-auto px-2">
          <SectionHeader
            as="h2"
            title="Featured Projects"
            subtitle="Browse our portfolio of completed homes and design projects."
          />

          <div className="mt-10">
            <ProjectCarousel />
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="bg-red-500 hover:bg-red-600 text-white"
              aria-label="Explore more projects"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2"
                aria-label="Explore more projects"
              >
                Explore More
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <PricingPlan type="Design" />
      <PricingPlan type="Construction" />
      <ProcessSection
        title="How It Works"
        subtitle="Our simple and transparent process ensures smooth house construction across Jharkhand."
        type="Home"
      />
      <FAQSection />
      <CallToAction
        title="Ready to Start Your Project?"
        description="Contact us today for a free consultation and let’s bring your vision to life."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
      />
    </>
  );
}
