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
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD36SG3ar7Ld6ALzSItUOxci3_4D8MAzJXV5eQQlRnMoPuFMOwACcwIFQSjGWZDNxbsxl4j84qc5MSOdCzU5EzlwQ6Po75f5Aprtd9Y85iw-kXeOJfDUIi-_6ku_5TvcfodwVMMhdUtYqqRX9YFlIl9CfuyBqEiKgCfGd2MUWcaOwobbCu8y0wsQtEO5GrUZHAdfbCJc0UsNUskDL2z18CR72kqn1TGDmPXFSw26HXFTr81QFHDvCyjmn5SNrNmNCDH-jfs8zm-v5vd"
              alt="Architectural blueprint"
              fill
              // loading="lazy"
              className="object-cover"
            />
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
      <section className="bg-[#f3f5e9] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900">
              Transparent Fee Structure
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Clear costs, no hidden surprises. Governed by official mandates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Govt Fees */}
            <div className="bg-white rounded-xl p-6 border-t-4 border-green-700 shadow-sm">
              <h3 className="font-semibold mb-6 flex items-center gap-2">
                🏛 Government Fees
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Submission Fees</p>
                  <div className="flex justify-between border-b py-1">
                    <span>Residential</span>
                    <span className="font-semibold">₹2/sqft</span>
                  </div>
                  <div className="flex justify-between border-b py-1">
                    <span>Commercial</span>
                    <span className="font-semibold">₹4/sqft</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium">Labour Cess</p>
                  <div className="flex justify-between">
                    <span>Fixed Rate (All Types)</span>
                    <span className="font-semibold">₹14/sqft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Fees */}
            <div className="bg-green-700 text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                ⭐ Our Professional Fees
              </h3>

              <p className="text-sm opacity-90 mb-6">
                Covers map preparation, technical documentation, municipal
                liaison and follow-ups till approval.
              </p>

              <Link
                href="/contact"
                className="bg-white text-green-700 px-5 py-2 rounded-md text-sm font-semibold"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="bg-[#eef1e7] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-semibold mb-10">
            Flexible Payment Schedules
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 50/50 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-green-700 font-semibold mb-4">
                Standard 50/50 Split
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-medium">50% Initial Payment</p>
                    <p className="text-sm text-gray-500">
                      At submission & drafting
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-medium">50% Final Payment</p>
                    <p className="text-sm text-gray-500">
                      After final approval
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Step */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-green-700 font-semibold mb-4">
                Staggered 3rd Installments
              </p>

              <div className="space-y-5">
                {[
                  "1/3rd at Applying",
                  "1/3rd Before Final Approval",
                  "1/3rd at Final Approval",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 border-2 border-green-700 text-green-700 rounded-full flex items-center justify-center text-sm">
                      {i + 1}
                    </div>
                    <p className="font-medium text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory */}
      <section className="bg-[#e9ece1] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-12">
            Authorized Regulatory Flow
          </h2>

          {/* Authorities */}
          <div className="flex justify-center gap-12 mb-12 opacity-70">
            {/* {["RMC Ranchi", "RRDA", "T&CP"].map((item) => ( */}
            <Link
              href="https://www.ranchimunicipal.com/"
              target="_blank"
              className="cursor flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                🏢
              </div>
              <span className="text-xs">RMC</span>
            </Link>
            <Link
              href="https://ranchi.nic.in/rural/"
              target="_blank"
              className="cursor flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                🏢
              </div>
              <span className="text-xs">RRDA</span>
            </Link>
            <Link
              href="https://hazaribag.nic.in/service/hazaribag-municipality/"
              target="_blank"
              className="cursor flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                🏢
              </div>
              <span className="text-xs">HMC</span>
            </Link>
            {/* ))} */}
          </div>

          {/* Timeline */}
          <div className="relative flex justify-between items-center">
            <div className="absolute top-2 left-0 w-full h-[2px] bg-gray-300"></div>

            {[
              "Site Visit",
              "Drafting",
              "Online Upload",
              "Final Certificate",
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center z-10">
                <div className="w-4 h-4 bg-green-700 rounded-full mb-2"></div>
                <span
                  className={`text-sm ${i === 3 ? "text-green-700 font-semibold" : ""}`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section className="bg-[#f3f5e9] py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Check if your map is permissible
            </h2>

            <p className="text-gray-600 mb-6">
              Upload your plot details and get expert consultation within 24
              hours.
            </p>

            <div className="space-y-3 text-sm text-gray-600">
              <p>✔ Expert consultancy with licensed architects</p>
              <p>✔ 100% compliance with Building By-Laws</p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input className="input" placeholder="Full Name" />
                <input className="input" placeholder="+91" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input className="input" placeholder="Plot Size (SQFT)" />
                <input className="input" placeholder="City / Area" />
              </div>

              <textarea
                className="input"
                placeholder="Tell us about your project..."
              />

              <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold">
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between mb-10">
            <h2 className="text-3xl font-bold">Insights</h2>
            <Link href="/blogs">View All →</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden">
                <div className="h-48 bg-gray-200" />
                <div className="p-4">
                  <h4 className="font-semibold">Blog Title</h4>
                </div>
              </div>
            ))}
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
