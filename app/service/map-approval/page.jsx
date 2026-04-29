import Image from "next/image";
import Link from "next/link";
import {
  Gavel,
  Building,
  Layers,
  FileText,
  ReceiptText,
  CheckCircle,
  IdCard,
  Building2,
  Landmark,
  Star,
} from "lucide-react";

/* ✅ SEO */
export const metadata = {
  title: "Map Approval Process - Bhuvi Homes",
  description:
    "Complete map approval process, required documents, fees and compliance for construction.",
  alternates: {
    canonical: "https://bhuvihomes.in/map-approval",
  },
};

export default function MapApprovalPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Map Approval Process",
    step: [
      { name: "Site Visit" },
      { name: "Drafting" },
      { name: "Submission" },
      { name: "Final Approval" },
    ],
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="relative px-8 py-20 overflow-hidden pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="font-['Manrope'] text-[3.5rem] font-extrabold leading-[1.1] text-stone-900 mb-6 tracking-tighter">
              Expert Map Approvals:
              <br />
              <span className="text-[#006e1c]">Your Vision, Simplified.</span>
            </h1>
            <p className="text-stone-600 text-lg max-w-xl mb-8 leading-relaxed font-['Work_Sans']">
              Navigate the complexities of bureaucratic permissions with
              architectural precision. We transform tedious legal requirements
              into a seamless path for your future home.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#006e1c] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:opacity-90 transition-all">
                Start Approval Now
              </button>
              <button className="bg-stone-200 text-stone-900 px-8 py-4 rounded-lg font-bold hover:bg-stone-300 transition-all">
                View Our Process
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD36SG3ar7Ld6ALzSItUOxci3_4D8MAzJXV5eQQlRnMoPuFMOwACcwIFQSjGWZDNxbsxl4j84qc5MSOdCzU5EzlwQ6Po75f5Aprtd9Y85iw-kXeOJfDUIi-_6ku_5TvcfodwVMMhdUtYqqRX9YFlIl9CfuyBqEiKgCfGd2MUWcaOwobbCu8y0wsQtEO5GrUZHAdfbCJc0UsNUskDL2z18CR72kqn1TGDmPXFSw26HXFTr81QFHDvCyjmn5SNrNmNCDH-jfs8zm-v5vd"
                alt="Blueprints"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-[#d7e8c4] opacity-40 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </section>

      {/* WHAT IS MAP APPROVAL */}
      <section className="bg-[#f3f5e9] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#006e1c] font-bold tracking-widest text-sm uppercase mb-4 block">
              The Essentials
            </span>
            <h2 className="font-['Manrope'] text-4xl font-bold mb-6 text-stone-900">
              What is Map Approval?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Gavel,
                title: "Legal Safety & Compliance",
                text: "Ensures your property adheres to municipal laws, preventing future legal disputes or demolition notices.",
              },
              {
                icon: Building,
                title: "Why You Need It",
                text: "Crucial for obtaining home loans, utility connections, and ensuring the structural integrity of your building.",
              },
              {
                icon: Layers,
                title: "Building Types",
                text: "Regulations vary significantly between Residential, Commercial, and Institutional structures.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-[0_8px_32px_rgba(26,29,22,0.04)]"
              >
                <item.icon className="text-[#006e1c] text-4xl mb-4" />
                <h3 className="text-xl font-bold font-['Manrope'] mb-4">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-[#d7e8c4]/20 p-10 rounded-2xl">
              <h2 className="font-['Manrope'] text-3xl font-bold mb-8 text-stone-900">
                Ground Coverage
              </h2>
              <div className="space-y-6">
                {[
                  { label: "Plot < 2400 SQFT", val: "70%" },
                  { label: "Plot > 2400 SQFT", val: "60%" },
                  { label: "Commercial", val: "50%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-4 bg-white rounded-lg"
                  >
                    <span className="font-bold text-[#5a694c]">
                      {item.label}
                    </span>
                    <span className="text-2xl font-extrabold text-[#006e1c]">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 bg-[#edefe4] p-10 rounded-2xl">
              <h2 className="font-['Manrope'] text-3xl font-bold mb-8 text-stone-900">
                Required Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  {[
                    { icon: FileText, label: "Deed + Power of Attorney" },
                    { icon: ReceiptText, label: "Mutation" },
                    { icon: FileText, label: "Khatiyan" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <item.icon className="text-[#006e1c]" />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {[
                    { icon: CheckCircle, label: "Land Receipt" },
                    { icon: IdCard, label: "Aadhar Card" },
                    { icon: Building2, label: "Holding Tax (For RMC Area)" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <item.icon className="text-[#006e1c]" />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="bg-[#f3f5e9] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Manrope'] text-4xl font-extrabold mb-4">
              Transparent Fee Structure
            </h2>
            <p className="text-stone-600 font-['Work_Sans']">
              Clear costs, no hidden surprises. Governed by official mandates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-[#006e1c]">
              <h3 className="font-['Manrope'] text-2xl font-bold mb-6 flex items-center gap-2">
                <Landmark /> Government Fees
              </h3>
              {/* Fees content */}
            </div>
            <div className="bg-[#006e1c] text-white p-10 rounded-2xl shadow-xl flex flex-col justify-center">
              <h3 className="font-['Manrope'] text-2xl font-bold mb-6 flex items-center gap-2">
                <Star />
                Our Professional Fees
              </h3>
              <p className="mb-6 opacity-90">
                Our service charge covers comprehensive map preparation,
                technical documentation, municipal liaison, and guaranteed
                follow-ups until final approval.
              </p>
              <button className="bg-white text-[#006e1c] font-bold px-8 py-3 rounded-lg w-fit">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ✅ reusable components */

function Card({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Icon className="text-green-700 mb-3" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function Coverage({ label, value }) {
  return (
    <div className="flex justify-between bg-white p-3 rounded">
      <span>{label}</span>
      <span className="font-bold text-green-700">{value}</span>
    </div>
  );
}

function Doc({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="text-green-700" />
      <span>{label}</span>
    </div>
  );
}
