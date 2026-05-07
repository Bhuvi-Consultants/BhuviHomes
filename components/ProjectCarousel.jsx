"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

const Project = [
  {
    id: 1,
    title: "Modern G Residence",
    location: "Ranchi",
    type: "Construction",
    // image: "/projects/p1.jpg",
    slug: "modern-g1-residence",
    URL: "ocVj0SiXqdU?si=VoxGtwFoWcFpe4UJ",
  },
  {
    id: 2,
    title: "Modern G Residence",
    location: "Ranchi",
    type: "Construction",
    // image: "/projects/p1.jpg",
    slug: "modern-g-residence",
    URL: "QfuL4U58jDo?si=ZBRrjvYzm_i40UmO",
  },
  {
    id: 3,
    title: "Modern G+1 Residence",
    location: "Ranchi",
    type: "Construction",
    // image: "/projects/p1.jpg",
    slug: "modern-g1-residence",
    URL: "3DIYnEPrlcg?si=7w9d6tCdcwFQgJwC",
  },

  {
    id: 4,
    title: "Old Age Home",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "old-age-home-gurukul-&-hostel-facilities-&-separate-residential-for-staff",
    URL: "nGFCtbWPsII?si=Qh2M2ndyWcmFZKgy",
  },
  {
    id: 5,
    title: "Banquest Cum Resturant",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "modern-resturant-with-tree-house",
    URL: "JnOBX7A4-Pc?si=XAjIMsZbbAuLqdpm",
  },

  {
    id: 6,
    title: "Modern G+2 Residence",
    location: "Ranchi",
    type: "Construction",
    // image: "/projects/p1.jpg",
    slug: "modern-g2-residence",
    URL: "RGsyY3oC1p8?si=xAMXXBSI_E03G91P",
  },
  {
    id: 7,
    title: "Modern G+1 Residence",
    location: "Ranchi",
    type: "Construction",
    // image: "/projects/p1.jpg",
    slug: "modern-g1-residence",
    URL: "IXslKEXDCFY?si=vU5392JzowQ06wMF",
  },

  {
    id: 8,
    title: "classNameical G+1 Farm House",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "classNameical-farm-house",
    URL: "KZW-xWIyQQ8?si=jZ1nhI51lbVEriwK",
  },
  {
    id: 9,
    title: "Modern G+1 Bungalow",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "modern-g1-bungalow",
    URL: "kO-fPZMCJEs?si=_e2Fewbx7y1LwZAH",
  },

  {
    id: 10,
    title: "Modern G+1 Residence",
    location: "Ranchi",
    type: "Interior",
    // image: "/projects/p1.jpg",
    slug: "modern-g1-residence",
    URL: "RCf2SQd6U6A?si=aiezzF9zXC3ixxID",
  },
  {
    id: 11,
    title: "Master Bedroom",
    location: "Ranchi",
    type: "Interior",
    // image: "/projects/p1.jpg",
    slug: "master-beadroom-interior",
    URL: "t1LrozVIx1A?si=m5Gwu57vgpf7_lqr",
  },

  {
    id: 12,
    title: "G+2 Villa",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "modern-g2-villa",
    URL: "O0-jc4hgFH4?si=39v5KPcUUEY11C26",
  },
  {
    id: 13,
    title: "classNameical G+1 Duplex",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "classNameical-g1-duplex",
    URL: "WOh1TG4mk8k?si=yIQS_PGYglHItW-D",
  },
  {
    id: 14,
    title: "G+3 School",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "modern-g3-school",
    URL: "41ZfWNbDxqA?si=Iv0yh45h7hRNQmpJ",
  },

  {
    id: 15,
    title: "G+4 Office Building",
    location: "Morabadi, Ranchi",
    type: "Construction",
    // image: "/projects/p1.jpg",
    slug: "G+4 Office Building",
    URL: "amaNaIhwc7o?si=WC_Q6y485QKL5-uC",
  },

  {
    id: 21,
    title: "B+G+2 Shopping Complex",
    location: "Aurangabad, Bihar",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "modern-bg2-mall",
    URL: "92ej30o0THU?si=SrpN4FmsWoDcTCul",
  },
  {
    id: 16,
    title: "classNameical G+1 Villa",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "classNameical-g1-villa",
    URL: "MPsv4D0bUMc?si=5gviZOqrN-0D3Brq",
  },
  {
    id: 17,
    title: "G+3 Residential",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "classNameic-g3-residential",
    URL: "2WgdBsCW4rU?si=Js6Rz4oVIg8zn9x9",
  },

  {
    id: 18,
    title: "G+2 Duplex",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "modern-g2-duplex",
    URL: "Af_3NdKzlv8?si=ztcKUIdNF4bQXVwf",
  },
  {
    id: 18,
    title: "4BHK",
    location: "Ranchi",
    type: "Interior",
    // image: "/projects/p1.jpg",
    slug: "modern-g1-residence",
    URL: "qF_VPfmcj6I?si=vUBvhiodFXtH1bli",
  },

  {
    id: 19,
    title: "Modern G+1 Residence",
    location: "Kokar, Ranchi",
    type: "Construction",
    // image: "/projects/p1.jpg",
    slug: "modern-g1-residence",
    URL: "ILIZTgdvVaw?si=q1EQ9elK4htgywAm",
  },
  {
    id: 20,
    title: "Modern G+1 Residence",
    location: "Khunti, Ranchi",
    type: "Construction",
    // image: "/projects/p1.jpg",
    slug: "modern-g1-residence",
    URL: "sQPUgNAkHro?si=CQnIZX6X0Hd5V9ZY",
  },

  {
    id: 22,
    title: "Resturant & Bar",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "modern-resturant-and-bar",
    URL: "FRCYISVaFv4?si=cO6k7JXpHUmo1q9b",
  },
  {
    id: 23,
    title: "Modern G+1 Residence",
    location: "Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "modern-g1-residence",
    URL: "RRCPiJIrhHc?si=miXpaWF5LL7sGsw9",
  },

  {
    id: 24,
    title: "Modern G+2 Duplex",
    location: "Daladali, Ranchi",
    type: "Construction",
    // image: "/projects/p1.jpg",
    slug: "modern-g2-duplex",
    URL: "JyjOjZiuPFE?si=I2-j7zRvKxRKVp8J",
  },
  {
    id: 25,
    title: "Modern G+1 Residence",
    location: "Argora, Ranchi",
    type: "Construction",
    // image: "/projects/p1.jpg",
    slug: "modern-g1-residence",
    URL: "st3yOUt24-Q?si=lk-jGPqkoL1BeuOU",
  },

  {
    id: 26,
    title: "Modern G+2 Banquet with Roof Top Bar",
    location: "Daladali, Ranchi",
    type: "Design",
    // image: "/projects/p1.jpg",
    slug: "modern-g2-banquet-with-roof-top-bar",
    URL: "6dxC0sBHJ5g?si=ZK1hO8FAwTPvE2o4",
  },
  {
    id: 27,
    title: "Modern Residential",
    location: "Ranchi",
    type: "Interior",
    // image: "/projects/p1.jpg",
    slug: "modern-residential",
    URL: "5SmiIxRFtSw?si=Ut1k-X3Talpt0em-",
  },
  {
    id: 28,
    title: "The Eternity Resorts.",
    location: "Patratu Vally Ranchi",
    type: "Interior",
    // image: "/projects/p1.jpg",
    slug: "resort-interior-design",
    URL: "tDrOy8nIRY0?si=oWYKOKqWtFZfqGxJ",
  },
];
const filters = ["All", "Construction", "Design", "Interior"];

export default function ProjectCarousel({ Ptype = "All" }) {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    // Simulate API call
    setProjects(Project);
  }, []);

  const filteredProjects = useMemo(() => {
    switch (Ptype) {
      case "construction":
        return projects.filter((p) => p.type === "Construction");
      case "design":
        return projects.filter((p) => p.type === "Design");
      case "interior":
        return projects.filter((p) => p.type === "Interior");
      default:
        if (activeFilter === "All") return projects;
        return projects.filter((p) => p.type === activeFilter);
    }
  }, [projects, activeFilter, Ptype]);

  const cleanYouTubeId = (urlPart) => {
    return urlPart.split(/[?&]/)[0];
  };

  return (
    <div>
      {/* 🔹 Filter Tabs */}
      {Ptype === "All" && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              aria-label={`Filter projects by ${f}`}
              className={`pb-2 border-b-2 text-sm ${
                activeFilter === f
                  ? "border-leaf text-chlorophyll"
                  : "border-transparent text-leaf hover:text-black"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* 🔹 Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={filteredProjects.length >= 3}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {filteredProjects.map((p, index) => (
          <SwiperSlide key={index}>
            <div className="group h-full overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              {/* MEDIA */}
              <div className="relative w-full aspect-video overflow-hidden">
                {p.URL ? (
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${p.URL}?rel=0&modestbranding=1`}
                    title={p.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <Image
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <span className="text-xs text-primary font-medium">
                  {p.type}
                </span>

                <h3 className="mt-1 font-semibold line-clamp-2">{p.title}</h3>

                <p className="text-sm text-gray-500">{p.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
