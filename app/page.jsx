import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSlider from "@/components/TestimonialSlider";
import PricingPlan from "@/components/PricingPlan";
import FAQSection from "@/components/FAQSection";
import ProcessSection from "@/components/ProcessSection";
import CallToAction from "@/components/CallToAction";
import FeaturedProjects from "@/components/FeaturedProjects";

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
      <FeaturedProjects />
      <TestimonialSlider />
      <PricingPlan type="Design" />
      <PricingPlan type="Construction" />
      <ProcessSection
        title="How It Works"
        subtitle="Our simple, transparent process ensures a smooth journey."
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
