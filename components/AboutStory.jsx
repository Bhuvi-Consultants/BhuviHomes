

import { Building } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import Team from '../public/team.webp';
import Image from 'next/image';

const AboutStory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <SectionHeader 
              title="Our Story" 
              centered={false}
              className="mb-8"
            />
            <p className="text-muted-foreground mb-6">
            <b>BhuviHomes a product by Bhuvi Consultants Founded in 2019</b>, began with a simple mission: to create beautiful, functional homes where families can thrive. What started as a small team of three passionate professionals has grown into a full-service design and construction company with a reputation for excellence.
            </p>
            <p className="text-muted-foreground mb-6">
              Our journey has been defined by a commitment to quality, innovation, and client satisfaction. We've completed over 14+ projects, each reflecting our dedication to be the best <b>Home Design & Construction Company in Ranchi, Jharkhand</b>.
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-green-700">14+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-green-700">7+</p>
                <p className="text-sm text-muted-foreground">Years of Experience in Operation</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-green-700">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <Image
                src={Team ? Team : 'https://bhuvihomes.in/team.webp'} 
                alt="Team meeting" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                loading='lazy'
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="bg-green-700/10 p-2 rounded-full">
                    <Building className="w-6 h-6 text-green-700" />
                  </div>
                  <p className="font-medium">14+ Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
