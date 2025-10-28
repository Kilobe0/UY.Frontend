"use client";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function HeroCarousel() {
  const slides = [
    {
      id: 1,
      title: "Soluções Integradas em Engenharia",
      bgImage: "/images/placeholder/visaopanoramica.jpg"
    },
    {
      id: 2,
      title: "Experiência e Excelência",
      bgImage: "/images/placeholder/tratoresemobra.jpg"
    },
    {
      id: 3,
      title: "Projetos Inovadores",
      bgImage: "/images/placeholder/visaodronehomens.jpg"
    }
  ];

  return (
    <section id="home" className="relative h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-white/50',
          bulletActiveClass: 'swiper-pagination-bullet-active bg-primary',
        }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="h-full flex items-center justify-center relative"
              style={{ 
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Content */}
              <div className="text-center text-white px-6 max-w-4xl mx-auto z-10">
                <h1 className="font-heading text-[clamp(2.5rem,6vw,4rem)] font-bold mb-6 leading-tight">
                  {slide.title} 
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
