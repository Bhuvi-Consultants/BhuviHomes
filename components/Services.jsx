"use client";

import { useState } from "react";
import { PaintBucket, Building2 } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const servicesData = [
    {
      icon: PaintBucket,
      title: "Architectural Designs",
      link: "/service/design",
    },
    {
      icon: Building2,
      title: "Construction",
      link: "/service/construction",
    },
    {
      icon: Building2,
      title: "Interior Design",
      link: "/service/interior",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-leaf mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Complete Architectural Design & Construction Services in Jharkhand
            for Your Dream Home.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center perspective-1000">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 ease-out w-full lg:w-1/3 transform rounded-2xl ${
                activeService === index
                  ? "lg:scale-110 z-20 shadow-2xl"
                  : index < activeService
                    ? "lg:-rotate-y-10 lg:-translate-x-6 opacity-80 z-10"
                    : "lg:rotate-y-10 lg:translate-x-6 opacity-80 z-10"
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="bg-offwhite rounded-2xl overflow-hidden h-full">
                <div className="p-8 flex flex-col items-center justify-center gap-6">
                  <Link
                    href={service.link}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-leaf/15 text-leaf"
                    aria-label={`Learn more about our ${service.title} services`}
                  >
                    <service.icon size={32} />
                  </Link>

                  <Link
                    href={service.link}
                    className="text-2xl font-semibold"
                    aria-label={`Learn more about our ${service.title} services`}
                  >
                    {service.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
