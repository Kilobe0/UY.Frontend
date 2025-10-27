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
      subtitle: "Transformamos ideias em realidade com excelência técnica e inovação",
      bgImage: "linear-gradient(135deg, rgba(93, 58, 140, 0.8), rgba(30, 188, 156, 0.8))"
    },
    {
      id: 2,
      title: "Experiência e Excelência",
      subtitle: "Mais de uma década de experiência em projetos de engenharia civil",
      bgImage: "linear-gradient(135deg, rgba(30, 188, 156, 0.8), rgba(243, 156, 18, 0.8))"
    },
    {
      id: 3,
      title: "Projetos Inovadores",
      subtitle: "Desenvolvemos soluções sustentáveis e tecnologicamente avançadas",
      bgImage: "linear-gradient(135deg, rgba(243, 156, 18, 0.8), rgba(93, 58, 140, 0.8))"
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
              style={{ background: slide.bgImage }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              {/* Content */}
              <div className="text-center text-white px-6 max-w-4xl mx-auto z-10">
                <h1 className="font-heading text-[clamp(2.5rem,6vw,4rem)] font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="font-body text-[clamp(1.125rem,2vw,1.5rem)] mb-8 opacity-90 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Conheça Nossos Serviços
                  </button>
                  <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-button font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-white/30">
                    Ver Projetos
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
