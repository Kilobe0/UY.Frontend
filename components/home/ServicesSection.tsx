"use client";

import { Award, Building2, Sparkles } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Engenharia Estrutural",
      description: "Projetos estruturais inovadores com foco em segurança, economia e sustentabilidade. Desenvolvemos soluções personalizadas para cada desafio.",
      features: ["Análise estrutural", "Projetos executivos", "Consultoria técnica"]
    },
    {
      icon: Sparkles,
      title: "Soluções Integradas",
      description: "Oferecemos serviços completos de engenharia, desde a concepção até a execução, garantindo qualidade e eficiência em todos os processos.",
      features: ["Gestão de projetos", "Coordenação técnica", "Acompanhamento"]
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de uma década de experiência em projetos residenciais, comerciais e industriais, sempre buscando a excelência e inovação.",
      features: ["Projetos residenciais", "Projetos comerciais", "Projetos industriais"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-muted max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em engenharia civil, combinando experiência técnica, 
            inovação e compromisso com a qualidade para transformar seus projetos em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground ml-4">
                    {service.title}
                  </h3>
                </div>
                
                <p className="font-body text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted">
                      <div className="w-2 h-2 bg-turquoise-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full px-6 py-3 bg-turquoise-500 hover:bg-turquoise-600 text-white font-button font-semibold rounded-lg transition-colors duration-200">
                  LEIA MAIS
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
