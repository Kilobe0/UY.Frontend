"use client";

import { Building2, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Ed. Kairós Itaquá",
      category: "Alvenaria Estrutural",
      image: "/images/placeholder/tratoresdelado.jpg",
      description: "Edifício residencial com sistema construtivo otimizado",
      link: "/projetos/kairos-itaqua"
    },
    {
      title: "Ed. Residencial Pateo Jacuy",
      category: "Concreto Protendido",
      image: "/images/placeholder/vistacelular.jpg",
      description: "Complexo residencial com estrutura protendida",
      link: "/projetos/pateo-jacuy"
    },
    {
      title: "Ed. Residencial Praça das Árvores",
      category: "Alvenaria Estrutural",
      image: "/images/placeholder/visaodronehomens.jpg",
      description: "Conjunto de torres residenciais em alvenaria",
      link: "/projetos/praca-das-arvores"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
            ÚLTIMOS PROJETOS
          </h2>
          <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-muted max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos nossos projetos mais recentes e inovadores em engenharia civil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
}
