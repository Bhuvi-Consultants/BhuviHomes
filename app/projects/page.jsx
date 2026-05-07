import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";


// ✅ SEO (replaces Helmet)
export const metadata = {
  title: "Design & Construction Projects | Bhuvi Homes",
  description:
    "Explore Bhuvi Homes' portfolio of successful design and construction projects showcasing our expertise and quality craftsmanship.",
  keywords:
    "Home design Ranchi, Home construction Ranchi, Bhuvi Homes",
  alternates: {
    canonical: "https://bhuvihomes.in/projects",
  },
};

export default function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Bhuvi Homes Projects",
    description:
      "Explore our portfolio of completed home design and construction projects.",
    url: "https://bhuvihomes.in/projects",
  };

  const projects = [
    {
      id: "1",
      title: "Modern Farmhouse",
      category: "Construction",
      videoUrl: "https://www.youtube.com/embed/ILIZTgdvVaw?si=i06bDe1y1H5wbqCw",
      description: "A beautiful modern farmhouse with open concept living spaces and custom details throughout."
    },
    {
      id: "2",
      title: "Modern Farmhouse",
      category: "Construction",
      videoUrl: "https://www.youtube.com/embed/st3yOUt24-Q?si=g-jBvk2-Ym0Wzj1j",
      description: "A beautiful modern farmhouse with open concept living spaces and custom details throughout."
    },
    {
      id: "3",
      title: "Modern Farmhouse",
      category: "Construction",
      videoUrl: "https://www.youtube.com/embed/JyjOjZiuPFE?si=f2qFTJJmDvEsBVWc",
      description: "A beautiful modern farmhouse with open concept living spaces and custom details throughout."
    },
    {
      id: "4",
      title: "Modern Farmhouse",
      category: "Construction",
      videoUrl: "https://www.youtube.com/embed/3DIYnEPrlcg?si=1wIJ_KanLGt-lP_N",
      description: "A beautiful modern farmhouse with open concept living spaces and custom details throughout."
    },
    {
      id: "5",
      title: "Modern Farmhouse",
      category: "Construction",
      videoUrl: "https://www.youtube.com/embed/amaNaIhwc7o?si=6Q6osrifRo3on7tz",
      description: "A beautiful modern farmhouse with open concept living spaces and custom details throughout."
    },
    {
      id: "6",
      title: "Modern Farmhouse",
      category: "Construction",
      videoUrl: "https://www.youtube.com/embed/sQPUgNAkHro?si=kpgxKsXmULkYiWI-",
      description: "A beautiful modern farmhouse with open concept living spaces and custom details throughout."
    },
    {
      id: "7",
      title: "Modern Farmhouse",
      category: "Construction",
      videoUrl: "https://www.youtube.com/embed/ocVj0SiXqdU?si=5P4IxZ2JldShIKP6",
      description: "A beautiful modern farmhouse with open concept living spaces and custom details throughout."
    },
    {
      id: "8",
      title: "Modern Farmhouse",
      category: "Construction",
      videoUrl: "https://www.youtube.com/embed/n6uhv3hJPqk?si=wdembDAp3czsRljs",
      description: "A beautiful modern farmhouse with open concept living spaces and custom details throughout."
    },
    {
      id: "9",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/kO-fPZMCJEs?si=TlyDOwHlJQrMISX8",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "10",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/msQG1g5bMs4?si=iRR64xRt09RZZJQF",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "11",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/__o7lBm5szU?si=U8apfb174XS1YUF8",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "12",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/EnMP9YW6qRo?si=CJg8eA88WpnseZx2",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "13",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/NyA5v2rCnSo?si=Id3-URbLakdBtVcQ",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "14",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/StuJyfJn8jI?si=jMtPaIrYml0MGj-f",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "15",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/WDtvXH25KI0?si=t5qrYunk9qqcLeB5",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "16",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/fwSB1Uci9Ks?si=khMEe5WpReWQHVnE",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "17",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/cD5sxmrb8gs?si=a5gSkfDwgRgoakCc",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "18",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/41ZfWNbDxqA?si=UL_YXKDvRpJUDgAR",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "19",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/1zImJzRkle4?si=8PZNkhD04DXZpo78",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "20",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/1S3SD-oDyn0?si=cUa2aI4YiXxODH71",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
    {
      id: "21",
      title: "Urban ",
      category: "Design",
      videoUrl: "https://www.youtube.com/embed/92ej30o0THU?si=rKjavanJWGKi6sUR",
      description: "Complete renovation of an industrial loft space into a modern urban dwelling."
    },
  ];

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our portfolio of stunning homes and transformations.
          </p>
        </div>
      </section>

      {/* Projects Grid (NO Tabs → SEO friendly) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <SectionHeader
            title="Featured Projects"
            subtitle="Explore our recent work and get inspired."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                videoUrl={project.videoUrl}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <SectionHeader
            title="Our Project Approach"
            subtitle="How we deliver quality results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                step: 1,
                title: "Discover",
                desc: "Understand your vision, needs and goals.",
              },
              {
                step: 2,
                title: "Design",
                desc: "Create detailed plans tailored to you.",
              },
              {
                step: 3,
                title: "Develop",
                desc: "Build with precision and craftsmanship.",
              },
              {
                step: 4,
                title: "Deliver",
                desc: "Complete project with quality assurance.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-700 text-white mx-auto mb-4 text-xl">
                  {item.step}
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}

          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 border px-6 py-3 rounded-md text-green-700 hover:bg-gray-100"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CallToAction
        title="Ready to Start Your Project?"
        description="Contact us today and let’s build your dream home."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
}