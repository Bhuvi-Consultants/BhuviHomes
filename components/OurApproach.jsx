

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import ProcessItem from '@/components/ProcessItem';

const OurApproach = () => {
  const processSteps = [
    {
      number: 1,
      title: "Collaborative Design",
      description: "Your ideas and needs shape the design, ensuring a home that fits your lifestyle perfectly."
    },
    {
      number: 2,
      title: "Transparent Planning",
      description: "You get clear timelines, budgets, and updates at every step — no surprises, just peace of mind."
    },
    {
      number: 3,
      title: "Quality Execution",
      description: "Your project is built with expert care, precision, and a commitment to lasting quality."
    }
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <SectionHeader 
          title="Our Approach" 
          subtitle="A proven process that makes building your home simple, transparent, and stress-free." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessItem
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-primary/90 hover:bg-primary text-primary-foreground group" aria-label="Learn more about our home design and construction process">
            <Link href="/how-it-works" className="flex items-center" aria-label="Learn more about our home design and construction process">
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
