

import { Shield, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from '@/components/SectionHeader';
import ValueCard from '@/components/ValueCard';

const MissionVision = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "You deserve a home built with top-quality materials and craftsmanship that ensures beauty, safety, and lasting value."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "You experience complete transparency, respect, and honesty, making your home journey stress-free and trustworthy."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "You benefit from smart designs, modern technologies, and eco-friendly solutions that future-proof your home."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "You can trust us to meet deadlines, deliver consistent quality, and keep your project on track."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto relative z-10">
        <SectionHeader 
          title="Our Mission & Values" 
          subtitle="Helping you creating homes that fulfill your dreams, prioritize your needs, transparent service and deliver lasting value." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="backdrop-blur-sm bg-white/80 border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-medium mb-4">Our Mission</h3>
              <p className="text-gray-500 mb-4">
              To deliver homes that elevate your lifestyle, protect your investment, and make building stress-free.
              </p>
              <p className="text-gray-500">
             Our mission is to deliver a stress-free, high-quality construction experience with a focus on functionality, and personal care.
              </p>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-sm bg-white/80 border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-medium mb-4">Our Vision</h3>
              <p className="text-gray-500 mb-4">
              To be your trusted home-building partner, creating spaces that enhance your comfort and support sustainable living.
              </p>
              <p className="text-gray-500">
              To help homeowners like you design smart, beautiful spaces that enrich daily life and build vibrant, sustainable communities.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
