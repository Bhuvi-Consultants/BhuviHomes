import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCarousel from "@/components/ProjectCarousel";

const FeaturedProjects = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-offwhite">
      <div className="container mx-auto px-4">
        <SectionHeader
          as="h2"
          title="Featured Projects"
          subtitle="Browse our portfolio of completed homes and design projects."
        />

        <div className="mt-10">
          <ProjectCarousel />
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild className="bg-red-500 hover:bg-red-600 text-white" aria-label="Explore more projects">
            <Link href="/projects" className="flex items-center gap-2" aria-label="Explore more projects">
              Explore More
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
