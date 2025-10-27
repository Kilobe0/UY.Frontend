"use client";

import { CasesSection } from "../components/home/CasesSection";
import { Footer } from "../components/home/Footer";
import { Header } from "../components/home/Header";
import { HeroCarousel } from "../components/home/HeroCarousel";
import { NewsSection } from "../components/home/NewsSection";
import { ProjectsSection } from "../components/home/ProjectsSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { VideoSection } from "../components/home/VideoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroCarousel />
      <ServicesSection />
      <CasesSection />
      <NewsSection />
      <VideoSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
