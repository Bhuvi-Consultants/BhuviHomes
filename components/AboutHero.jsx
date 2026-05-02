import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-20 relative overflow-hidden bg-offwhite'">
      <div className="absolute inset-0 z-0"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96  rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-6 px-6 py-2 bg-green-700/10 rounded-full">
          <span className="text-green-700 font-medium">
            Our Journey & Mission
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
          About BhuviHomes
        </h1>
        <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
          Bhuvi Homes is a leading architectural design and construction company
          in Jharkhand, focused on delivering practical, site-specific, and
          client-friendly home solutions across Ranchi, Dhanbad, Jamshedpur, and
          nearby cities. 
          Founded in 2019, our vision has been clear from the
          beginning—to simplify the house construction process and provide
          designs and execution that truly benefit the client.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="bg-red-500 hover:bg-red-600 text-green-700-foreground"
            aria-label="Call BhuviHomes"
          >
            <Link href="tel:8986699600" aria-label="Call BhuviHomes">
              Call Now
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-green-700 text-green-700 hover:bg-green-700/10"
            aria-label="View Our Projects"
          >
            <Link
              href="https://www.youtube.com/channel/UCOiuPVjFqSw_GVN3aMzO6sA"
              target="_blank"
              aria-label="View Our Projects"
            >
              View Our Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
