"use client";

import SectionHeader from "@/components/SectionHeader";
import ProcessStep from "@/components/ProcessStep";
import { Users, BookMarked, PencilRuler, Building, Shield } from "lucide-react";


const Process = {
  home: [
    {
      number: 1,
      title: "Consultation & Quotation",
      description:
        "We understand your requirements and provide a detailed construction quotation based on our packages.",
      icon: Users,
    },
    {
      number: 2,
      title: "Agreement & Project Confirmation",
      description:
        "Scope of work, timeline, and payment schedule are finalized with a formal agreement.",
      icon: BookMarked,
    },
    {
      number: 3,
      title: "Design & Map Approval",
      description:
        "After confirmation, we start architectural design, planning, and map approval through our licensed engineers.",
      icon: PencilRuler,
    },
    {
      number: 4,
      title: "Project Setup & Work Initiation",
      description:
        "Site team, supervisor, and labour contractors are finalized, and construction work begins with material supply.",
      icon: Building,
    },
    {
      number: 5,
      title: "Construction with Quality Control",
      description:
        "Work is executed under our engineers with proper supervision, standardized process, and regular quality checks.",
      icon: Shield,
    },
    {
      number: 6,
      title: "Completion & Handover",
      description:
        "Project is completed as per drawings and handed over after final inspection.",
      icon: Shield,
    },
  ],
  construction: [
    {
      number: 1,
      title: "Consultation & Quotation",
      description:
        "We understand your requirements and provide a detailed construction quotation based on our packages.",
      icon: Users,
    },
    {
      number: 2,
      title: "Agreement & Project Confirmation",
      description:
        "Scope of work, timeline, and payment schedule are finalized with a formal agreement.",
      icon: BookMarked,
    },
    {
      number: 3,
      title: "Design & Map Approval",
      description:
        "After confirmation, we start architectural design, planning, and map approval through our licensed engineers.",
      icon: PencilRuler,
    },
    {
      number: 4,
      title: "Project Setup & Work Initiation",
      description:
        "Site team, supervisor, and labour contractors are finalized, and construction work begins with material supply.",
      icon: Building,
    },
    {
      number: 5,
      title: "Construction with Quality Control",
      description:
        "Work is executed under our engineers with proper supervision, standardized process, and regular quality checks.",
      icon: Shield,
    },
    {
      number: 6,
      title: "Completion & Handover",
      description:
        "Project is completed as per drawings and handed over after final inspection.",
      icon: Shield,
    },
  ],
  design: [
    {
      number: 1,
      title: "Consultation & Requirement Discussion",
      description:
        "We understand your needs, budget, plot details, and design preferences.",
      icon: Users,
    },
    {
      number: 2,
      title: "Site Visit & Measurement",
      description:
        "Our team visits your site anywhere in Jharkhand for accurate measurements and site analysis.",
      icon: BookMarked,
    },
    {
      number: 3,
      title: "Concept Design & Layout Planning",
      description:
        "We create initial floor plans and design concepts based on your requirements and Vastu.",
      icon: PencilRuler,
    },
    {
      number: 4,
      title: "Design Finalization & Detailed Drawings",
      description:
        "Final architectural drawings, plans, and elevations are prepared for execution.",
      icon: Building,
    },
    {
      number: 5,
      title: "Map Approval by Our Licensed Engineers",
      description:
        "Our licensed engineers handle complete drawing submission and approval process on your behalf as per local authority norms.",
      icon: Shield,
    },
    {
      number: 6,
      title: "Layout Marking & Site Support During Construction",
      description:
        "We mark the building layout on-site as per drawings to avoid errors and ensure accurate execution. Additional site visits are provided as required.",
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
