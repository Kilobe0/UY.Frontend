"use client";

import { Building2, Calendar, ExternalLink, MapPin, Users } from "lucide-react";
import { Footer } from "../../components/home/Footer";
import { Header } from "../../components/home/Header";

export default function ProjetosPage() {
  const projects = [
    {
      title: "Ed. Kairós Itaquá",
      category: "Alvenaria Estrutural",
      image: "/images/projects/kairos-itaqua.jpg",
      description: "Edifício residencial com sistema construtivo otimizado",
      details: {
        area: "12.000 m²",
        pavimentos: "8 pavimentos",
        unidades: "64 unidades",
        ano: "2023"
      },
      link: "/projetos/kairos-itaqua"
    },
    {
      title: "Ed. Residencial Pateo Jacuy",
      category: "Concreto Protendido",
      image: "/images/projects/pateo-jacuy.jpg",
      description: "Complexo residencial com estrutura protendida",
      details: {
        area: "25.000 m²",
        pavimentos: "12 pavimentos",
        unidades: "120 unidades",
        ano: "2022"
      },
      link: "/projetos/pateo-jacuy"
    },
    {
      title: "Ed. Residencial Praça das Árvores",
      category: "Alvenaria Estrutural",
      image: "/images/projects/praca-das-arvores.jpg",
      description: "Conjunto de torres residenciais em alvenaria",
      details: {
        area: "16.000 m²",
        pavimentos: "8 pavimentos",
        unidades: "80 unidades",
        ano: "2021"
      },
      link: "/projetos/praca-das-arvores"
    },
    {
      title: "Centro Comercial Plaza",
      category: "Estrutura Mista",
      image: "/images/projects/plaza-comercial.jpg",
      description: "Complexo comercial com estrutura mista aço-concreto",
      details: {
        area: "35.000 m²",
        pavimentos: "6 pavimentos",
        lojas: "120 lojas",
        ano: "2023"
      },
      link: "/projetos/plaza-comercial"
    },
    {
      title: "Condomínio Residencial Green",
      category: "Sustentável",
      image: "/images/projects/green-residencial.jpg",
      description: "Projeto residencial com foco em sustentabilidade",
      details: {
        area: "20.000 m²",
        pavimentos: "10 pavimentos",
        unidades: "100 unidades",
        ano: "2024"
      },
      link: "/projetos/green-residencial"
    },
    {
      title: "Torre Corporativa Business",
      category: "Comercial",
      image: "/images/projects/business-tower.jpg",
      description: "Edifício corporativo de alto padrão",
      details: {
        area: "45.000 m²",
        pavimentos: "20 pavimentos",
        salas: "200 salas",
        ano: "2022"
      },
      link: "/projetos/business-tower"
    }
  ];

  const categories = [
    "Todos",
    "Alvenaria Estrutural", 
    "Concreto Protendido",
    "Estrutura Mista",
    "Sustentável",
    "Comercial"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-turquoise-500/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-primary mb-6">
              Nossos Projetos
            </h1>
            <p className="font-body text-[clamp(1.125rem,2vw,1.25rem)] text-muted mb-8 leading-relaxed">
              Conheça nossa galeria completa de projetos realizados com excelência técnica, 
              inovação e compromisso com a qualidade em cada detalhe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Ver Portfólio Completo
              </button>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-primary font-button font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-primary/30">
                Solicitar Projeto
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-button font-semibold transition-all duration-200 ${
                  index === 0 
                    ? "bg-primary text-white shadow-lg" 
                    : "bg-card text-muted hover:bg-primary/10 hover:text-primary border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg width="400" height="256" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="256" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3E${project.title}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Building2 className="h-12 w-12 mx-auto mb-3" />
                      <p className="font-button font-semibold">Ver Detalhes</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    <a href={project.link}>
                      {project.title}
                    </a>
                  </h3>
                  
                  <p className="font-body text-muted text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-xs text-muted">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{project.details.area}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted">
                      <Building2 className="h-3 w-3 mr-1" />
                      <span>{project.details.pavimentos}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{project.details.unidades || project.details.lojas || project.details.salas}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{project.details.ano}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={project.link}
                      className="inline-flex items-center text-primary hover:text-primary-hover font-button font-semibold text-sm transition-colors"
                    >
                      Ver Projeto
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-card rounded-lg transition-colors" title="Favoritar">
                        <svg className="h-4 w-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-card rounded-lg transition-colors" title="Compartilhar">
                        <svg className="h-4 w-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
              Números que Compõem Nossa História
            </h2>
            <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-muted max-w-3xl mx-auto leading-relaxed">
              Mais de uma década de experiência traduzida em números que demonstram nossa capacidade e compromisso.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="font-body text-muted">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <div className="font-body text-muted">m² Construídos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="font-body text-muted">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="font-body text-muted">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-turquoise-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-white mb-6">
            Tem um Projeto em Mente?
          </h2>
          <p className="font-body text-white/90 text-[clamp(1rem,1.5vw,1.25rem)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Vamos transformar sua ideia em realidade com a mesma excelência técnica e inovação dos nossos projetos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white hover:bg-white/90 text-primary font-button font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Solicitar Orçamento
            </button>
            <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-button font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-white/30">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
