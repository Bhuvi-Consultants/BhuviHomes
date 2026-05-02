import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import MissionVision from "@/components/MissionVision";
import ClientConnect from "@/components/ClientConnect";
import OurApproach from "@/components/OurApproach";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";


// ✅ SEO metadata (replaces Helmet)
export const metadata = {
  title: "About Us - Bhuvi Homes",
  description:
    "Learn about Bhuvi Homes' journey, vision, and commitment to excellence in home design and construction.",
  keywords:
    "Home design Ranchi, Home construction Ranchi, Bhuvi Homes",
  alternates: {
    canonical: "https://bhuvihomes.in/about",
  },
};


export default function AboutPage() {
  
  // ✅ JSON-LD (SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Bhuvi Homes",
    url: "https://bhuvihomes.in/about",
    description:
      "Learn about Bhuvi Homes' vision, mission, and commitment to quality home design and construction.",
  };

  return (
    <div className="bg-offwhite'"> {/* replaced bg-gray-50 */}

      {/* ✅ JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <AboutHero />
      <AboutStory />
      <MissionVision />
      <ClientConnect />
      <OurApproach />

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="bg-green-700/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-700/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-700/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              
              <Heart className="w-12 h-12 text-green-700 mx-auto mb-6" />

              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                Ready to Transform Your Home?
              </h2>

              <p className="text-lg mb-8">
                Contact us today to schedule a free consultation with our team. Let’s bring your vision to life!
              </p>

              <div className="flex flex-wrap justify-center gap-4">

                {/* Call button */}
                <Button
                  asChild
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white py-2"
                  aria-label="Call Now"
                >
                  <Link href="tel:+918986699600" aria-label="Call Now">
                    Call Now
                  </Link>
                </Button>

                {/* External link */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-700/10"
                  aria-label="Explore Projects"
                >
                  <Link
                    href="https://www.youtube.com/channel/UCOiuPVjFqSw_GVN3aMzO6sA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Explore Our Projects on YouTube"
                  >
                    Explore Our Projects
                  </Link>
                </Button>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}