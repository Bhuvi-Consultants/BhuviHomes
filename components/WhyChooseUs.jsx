"use client";

import Link from "next/link";
import { Shield, Clock, Headphones, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <Shield className="w-10 h-10 text-leaf" />,
      title: "Quality Assurance",
    },
    {
      id: 2,
      icon: <Clock className="w-10 h-10 text-leaf" />,
      title: "Timely Delivery",
    },
    {
      id: 3,
      icon: <Headphones className="w-10 h-10 text-leaf" />,
      title: "Dedicated Support",
    },
    {
      id: 4,
      icon: <Users className="w-10 h-10 text-leaf" />,
      title: "Experienced Professionals",
    },
    {
      id: 5,
      icon: <span className="text-3xl text-leaf font-bold">7+</span>,
      title: "Years of Experience",
    },
    {
      id: 6,
      icon: <span className="text-3xl text-leaf font-bold">15+</span>,
      title: "Completed Projects",
    },
    {
      id: 7,
      icon: <span className="text-3xl text-leaf font-bold">12</span>,
      title: "Ongoing Projects",
    },
    {
      id: 8,
      icon: <span className="text-3xl text-leaf font-bold">24+</span>,
      title: "Full Time Employees",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-offwhite">
      <div className="container w-full">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Homeowners Across Jharkhand Trust Bhuvi Homes
          </h2>
          <div className="w-20 h-1 bg-leaf mx-auto"></div>
        </div>

        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            <span className="text-leaf">"Your home</span> is in safe hands now because..."
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="p-4 text-center transition-transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center bg-offwhite rounded-full mb-3">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold">{reason.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/about"
            className="px-8 py-3 bg-leaf text-white rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all inline-block"
            aria-label="Learn more about BhuviHomes and why homeowners across Jharkhand trust us"
          >
            Know More About Us
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;