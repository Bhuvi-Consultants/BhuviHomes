
import { Phone, Mail, MapPin } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ContactCard from '@/components/ContactCard';

const ClientConnect = () => {
  const contactOptions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "We're available Wednesday to Monday, 10am to 7pm",
      value: "+91 8986699600",
      buttonText: "Call Now",
      buttonLink: "tel:8986699600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "We usually respond within 24 hours",
      value: "homes.bhuvi@gmail.com",
      buttonText: "Send a Message",
      buttonLink: "/contact"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office for a face-to-face consultation",
      value: "3rd floor, The WestendTower",
      buttonText: "Get Directions",
      buttonLink: "https://www.google.com/maps?ll=23.38136,85.301382&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=15179116977798260737",
      isExternal: true
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-white">
      <div className="container mx-auto">
        <SectionHeader 
          title="Connect With Us" 
          subtitle="We're here to answer your questions and help you create the home of your dreams." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => (
            <ContactCard
              key={index}
              icon={option.icon}
              title={option.title}
              description={option.description}
              value={option.value}
              buttonText={option.buttonText}
              buttonLink={option.buttonLink}
              isExternal={option.isExternal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientConnect;
