"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  { id: 1, videoId: "eEu76F6YBNM" },
  { id: 2, videoId: "POVmHpYI5us" },
  { id: 3, videoId: "qSaSZt94FHc" },
  { id: 4, videoId: "RYfTX-S0Ggc" },
  { id: 5, videoId: "ZvWSAMoXDN8" },
  { id: 6, videoId: "iK5E_PP7CxU" },
];

const TestimonialSlider = () => {
  return (
    <section className="py-10 px-4 md:px-12 lg:px-24">
      <h2 className="text-3xl font-semibold text-center">
        Client Testimonials
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={Math.min(testimonials.length, 1)}
        loop={testimonials.length >= 3}
        autoplay={{ delay: 7000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="overflow-hidden rounded-xl bg-white shadow">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`}
                  title="Client Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
