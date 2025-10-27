"use client";

import { Award, Building2, CheckCircle, Clock, Shield, Sparkles, Users } from "lucide-react";
import { Footer } from "../../components/home/Footer";
import { Header } from "../../components/home/Header";

export default function SolucoesPage() {
  const services = [
    {
      icon: Building2,
      title: "Engenharia Estrutural",
      description: "Projetos estruturais inovadores com foco em segurança, economia e sustentabilidade. Desenvolvemos soluções personalizadas para cada desafio.",
      features: [
        "Análise estrutural avançada",
        "Projetos executivos detalhados", 
        "Consultoria técnica especializada",
        "Cálculos estruturais otimizados",
        "Adequação às normas técnicas"
      ]
    },
    {
      icon: Sparkles,
      title: "Soluções Integradas",
      description: "Oferecemos serviços completos de engenharia, desde a concepção até a execução, garantindo qualidade e eficiência em todos os processos.",
      features: [
        "Gestão de projetos completa",
        "Coordenação técnica multidisciplinar",
        "Acompanhamento de execução",
        "Controle de qualidade",
        "Otimização de custos e prazos"
      ]
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de uma década de experiência em projetos residenciais, comerciais e industriais, sempre buscando a excelência e inovação.",
      features: [
        "Projetos residenciais de alto padrão",
        "Projetos comerciais complexos",
        "Projetos industriais especializados",
        "Reformas e adequações",
        "Consultoria em licenciamento"
      ]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Qualidade Garantida",
      description: "Todos os nossos projetos seguem rigorosos padrões de qualidade e normas técnicas vigentes."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados com vasta experiência em diferentes segmentos da engenharia."
    },
    {
      icon: Clock,
      title: "Prazos Cumpridos",
      description: "Comprometimento total com os prazos estabelecidos, utilizando metodologias ágeis de gestão."
    },
    {
      icon: Shield,
      title: "Segurança em Primeiro Lugar",
      description: "Priorizamos sempre a segurança estrutural e o bem-estar dos usuários em todos os projetos."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-turquoise-500/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-primary mb-6">
              Nossas Soluções em Engenharia
            </h1>
            <p className="font-body text-[clamp(1.125rem,2vw,1.25rem)] text-muted mb-8 leading-relaxed">
              Oferecemos soluções completas e integradas em engenharia civil, combinando experiência técnica, 
              inovação e compromisso com a qualidade para transformar seus projetos em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Solicitar Orçamento
              </button>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-primary font-button font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-primary/30">
                Ver Portfólio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
              Nossos Serviços
            </h2>
            <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-muted max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos soluções personalizadas para cada tipo de projeto, sempre buscando a excelência técnica e a satisfação do cliente.
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
                    SABER MAIS
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
              Por Que Escolher a UaiYuan?
            </h2>
            <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-muted max-w-3xl mx-auto leading-relaxed">
              Nossa experiência e compromisso com a excelência nos tornam a escolha ideal para seus projetos de engenharia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-muted text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-turquoise-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-white mb-6">
            Pronto para Transformar Seu Projeto?
          </h2>
          <p className="font-body text-white/90 text-[clamp(1rem,1.5vw,1.25rem)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos ajudar a tornar seu projeto uma realidade com excelência técnica e inovação.
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
