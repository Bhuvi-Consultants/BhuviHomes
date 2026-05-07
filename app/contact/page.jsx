import { MapPin, Phone, Mail, Send, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us - Bhuvi Homes",
  description: "Contact Bhuvi Homes for home design and construction services.",
  alternates: {
    canonical: "https://bhuvihomes.in/contact",
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Bhuvi Homes",
    url: "https://bhuvihomes.in/contact",
  };

  return (
    <div className="bg-offwhite">
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Reach out to discuss your project, ask questions, or schedule a
            consultation with our team.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-gradient-to-b from-white to-offwhite">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* FORM */}
            <div className="lg:w-4/6 w-full">
              <div className="bg-offwhite py-10 px-6 rounded-xl border border-sage-200">
                <SectionHeader
                  title="Send Us a Message"
                  subtitle="Fill out the form below and we'll get back to you as soon as possible."
                  centered={false}
                  className="mb-8"
                />
                <ContactForm />
              </div>
            </div>

            {/* INFO */}
            <div className="lg:w-3/6">
              <SectionHeader
                title="Get in Touch"
                centered={false}
                className="mb-8"
              />

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Our Office</h3>
                    <p className="text-muted-foreground">
                      The Westend Tower
                      <br />
                      Ratu Road, Ranchi, Jharkhand 834001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 8986699600
                      <br />
                      Wednesday-Monday, 10am-7pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      homes.bhuvi@gmail.com
                      <br />
                      bhuviconsultants@yahoo.in
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Wednesday-Monday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <SectionHeader
            title="Visit Our Office"
            subtitle="We're conveniently located in the heart of Building City."
          />

          <div className="rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
            <div className="aspect-video w-full bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14648.758112390098!2d85.2823272871582!3d23.381359900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0e845c9117d%3A0xd2a70e7809c42801!2sThe%20WestendTower!5e0!3m2!1sen!2sin!4v1744526442132!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
