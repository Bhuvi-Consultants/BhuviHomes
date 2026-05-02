"use client";

import Link from "next/link";
import { Shield, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-offwhite w-full">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="lg:w-3/4 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
              Architectural Design & Construction Company in Jharkhand —  <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                We Design & Build Homes You'll Love to Live In
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Trusted architectural design and construction experts in Jharkhand, creating homes that match your needs, lifestyle, and budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" aria-label="Know more about our company" className="bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 px-8">
                <Link href="/about" aria-label="Learn more about BhuviHomes" >
                  Know More
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" aria-label="Get a quote" className="border-primary text-primary py-2.5 px-8">
                <Link href="/contact" aria-label="Get a quote from BhuviHomes">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="lg:w-2/4 p-4 w-full">
            <div className="relative p-1 w-full">
              {/* Remove this video iframe instead image slideshow */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/H2QBL79oLeA?autoplay=1&mute=1&start=2&loop=1&playsinline=1&rel=0&modestbranding=1"
                  title="Expert Home Design and Construction in Ranchi"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>

              {/* Badge Bottom Left */}
              <div className="absolute -bottom-9 -left-6 bg-white rounded-lg shadow-lg p-3 animate-fade-in ">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium text-sm sm:text-base">
                    Quality Guaranteed
                  </p>
                </div>
              </div>

              {/* Badge Top Right */}
              <div className="absolute -top-9 -right-6 bg-white rounded-lg shadow-lg p-3 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <HeartHandshake className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium text-sm sm:text-base">
                    Most Trusted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
