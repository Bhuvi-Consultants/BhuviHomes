"use client";

import SectionHeader from "@/components/SectionHeader";
import ProcessStep from "@/components/ProcessStep";
import { Users, BookMarked, PencilRuler, Building, Shield } from "lucide-react";

const homeProcess = [
  {
    number: 1,
    title: "Meet our Expert",
    description:
      "We meet to discuss your vision, needs, and budget to establish project goals.",
    icon: Users,
  },
  {
    number: 2,
    title: "Book with Us",
    description: "Your dream house is booked with a token amount.",
    icon: BookMarked,
  },
  {
    number: 3,
    title: "Design & Planning",
    description: "Our team creates detailed plans based on your requirements.",
    icon: PencilRuler,
  },
  {
    number: 4,
    title: "Construction",
    description: "We start building your dream home with quality execution.",
    icon: Building,
  },
  {
    number: 5,
    title: "Move In",
    description: "Enjoy your new home built exactly as you imagined.",
    icon: Shield,
  },
];

const constructionProcess = [
  {
    number: 1,
    title: "Consultation",
    description: "Understanding your requirements and site conditions.",
    icon: Users,
  },
  {
    number: 2,
    title: "Execution",
    description: "Construction begins with quality materials.",
    icon: Building,
  },
  {
    number: 3,
    title: "Delivery",
    description: "Project completed and handed over.",
    icon: Shield,
  },
];

const Process = {
  home: [
    {
      number: 1,
      title: "Meet our Expert",
      description:
        "We meet to discuss your vision, needs, and budget to establish project goals.",
      icon: Users,
    },
    {
      number: 2,
      title: "Book with Us",
      description: "Your dream house is booked with a token amount.",
      icon: BookMarked,
    },
    {
      number: 3,
      title: "Design & Planning",
      description:
        "Our team creates detailed plans based on your requirements.",
      icon: PencilRuler,
    },
    {
      number: 4,
      title: "Construction",
      description: "We start building your dream home with quality execution.",
      icon: Building,
    },
    {
      number: 5,
      title: "Move In",
      description: "Enjoy your new home built exactly as you imagined.",
      icon: Shield,
    },
  ],
  construction: [
    {
      number: 1,
      title: "Consultation",
      description: "Understanding your requirements and site conditions.",
      icon: Users,
    },
    {
      number: 2,
      title: "Execution",
      description: "Construction begins with quality materials.",
      icon: Building,
    },
    {
      number: 3,
      title: "Delivery",
      description: "Project completed and handed over.",
      icon: Shield,
    },
  ],
};

const ProcessSection = ({ title, subtitle, type }) => {
  const steps = Process[type.toLowerCase()] || [];
  return (
    <section className="section-padding bg-gradient-to-b from-white to-offwhite overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <SectionHeader as="h2" title={title} subtitle={subtitle} />

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
