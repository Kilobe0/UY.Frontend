"use client";

import { ArrowRight, Building2, CheckCircle, Clock, DollarSign, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Footer } from "../../components/home/Footer";
import { Header } from "../../components/home/Header";

export default function CasesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const cases = [
    {
      title: "Praça das Árvores",
      image: "/images/projects/praca-das-arvores.jpg",
      description: "5 Torres residenciais em Alvenaria Estrutural",
      category: "Residencial",
      year: "2021",
      area: "16.000 m²",
      details: [
        "8 pavimentos por torre",
        "16.000,00m²",
        "Redução de R$ 500.000,00 no custo do empreendimento",
        "Adequação do projeto existente às normas vigentes"
      ],
      challenges: [
        "Projeto original com custos elevados",
        "Necessidade de adequação às normas vigentes",
        "Otimização do sistema estrutural"
      ],
      solutions: [
        "Redesign completo da estrutura em alvenaria",
        "Otimização dos elementos estruturais",
        "Implementação de novas tecnologias construtivas"
      ],
      results: [
        "Redução de R$ 500.000,00 nos custos",
        "Melhoria significativa na eficiência estrutural",
        "Conformidade total com as normas técnicas"
      ]
    },
    {
      title: "Pateo Jacuy",
      image: "/images/projects/pateo-jacuy.jpg",
      description: "2 torres residenciais inicialmente em concreto armado",
      category: "Residencial",
      year: "2022",
      area: "10.000 m²",
      details: [
        "4 pavimentos por torre (2 subsolos)",
        "10.000,00m²",
        "Redução de 12% no custo e 20% no cronograma do empreendimento",
        "Adequação às normas vigentes e proposta de estrutura em concreto protendido"
      ],
      challenges: [
        "Cronograma apertado para execução",
        "Custos elevados com estrutura tradicional",
        "Complexidade do projeto original"
      ],
      solutions: [
        "Migração para sistema de concreto protendido",
        "Otimização do cronograma de execução",
        "Redesign estrutural para maior eficiência"
      ],
      results: [
        "Redução de 12% nos custos totais",
        "Redução de 20% no cronograma",
        "Maior eficiência estrutural"
      ]
    },
    {
      title: "Kairós Botucatu",
      image: "/images/projects/kairos-botucatu.jpg",
      description: "Edifício comercial com estrutura mista",
      category: "Comercial",
      year: "2023",
      area: "30.000 m²",
      details: [
        "15 pavimentos",
        "30.000,00m²",
        "Redução de 20% no tempo de execução",
        "Sustentabilidade certificada"
      ],
      challenges: [
        "Projeto comercial de grande porte",
        "Necessidade de certificação sustentável",
        "Cronograma de execução otimizado"
      ],
      solutions: [
        "Implementação de estrutura mista aço-concreto",
        "Sistema de certificação LEED",
        "Tecnologias construtivas avançadas"
      ],
      results: [
        "Redução de 20% no tempo de execução",
        "Certificação LEED Gold",
        "Maior eficiência energética"
      ]
    }
  ];

  const metrics = [
    { icon: DollarSign, label: "Economia Total", value: "R$ 1.2M+" },
    { icon: Clock, label: "Tempo Economizado", value: "25%" },
    { icon: Building2, label: "Projetos Otimizados", value: "50+" },
    { icon: TrendingUp, label: "Eficiência Média", value: "18%" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-turquoise-500/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-primary mb-6">
              Casos de Sucesso
            </h1>
            <p className="font-body text-[clamp(1.125rem,2vw,1.25rem)] text-muted mb-8 leading-relaxed">
              Conheça alguns dos nossos projetos mais emblemáticos e os resultados alcançados 
              através de soluções inovadoras em engenharia civil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Ver Estudos Completos
              </button>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-primary font-button font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-primary/30">
                Solicitar Consultoria
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="font-body text-muted">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
              Estudos de Caso Detalhados
            </h2>
            <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-muted max-w-3xl mx-auto leading-relaxed">
              Cada projeto representa uma solução única desenvolvida para atender às necessidades específicas de nossos clientes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Tabs */}
            <div className="space-y-4">
              {cases.map((caseItem, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-lg border transition-all duration-200 ${
                    activeTab === index
                      ? "bg-primary text-white border-primary shadow-lg"
                      : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading text-lg font-semibold">
                      {caseItem.title}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeTab === index 
                        ? "bg-white/20 text-white" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {caseItem.category}
                    </span>
                  </div>
                  <p className="font-body text-sm opacity-80 mb-2">
                    {caseItem.description}
                  </p>
                  <div className="flex items-center text-xs opacity-70">
                    <span className="mr-4">{caseItem.year}</span>
                    <span>{caseItem.area}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="mb-6">
                <img
                  src={cases[activeTab].image}
                  alt={cases[activeTab].title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg width="400" height="256" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="256" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="18" fill="%236b7280" text-anchor="middle" dy=".3em"%3EImagem do Projeto%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {cases[activeTab].title}
              </h3>
              
              <p className="font-body text-muted mb-6">
                {cases[activeTab].description}
              </p>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-heading text-sm font-semibold text-primary mb-3">Desafios</h4>
                  <ul className="space-y-2">
                    {cases[activeTab].challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start text-sm text-muted">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-heading text-sm font-semibold text-primary mb-3">Soluções</h4>
                  <ul className="space-y-2">
                    {cases[activeTab].solutions.map((solution, index) => (
                      <li key={index} className="flex items-start text-sm text-muted">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="font-heading text-sm font-semibold text-primary mb-3">Resultados Alcançados</h4>
                <ul className="space-y-2">
                  {cases[activeTab].results.map((result, index) => (
                    <li key={index} className="flex items-center text-sm text-muted">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="font-body text-sm text-muted mb-4">
                  Clique{" "}
                  <a 
                    href="#cases" 
                    className="text-primary hover:text-primary-hover font-semibold underline"
                  >
                    aqui
                  </a>{" "}
                  para conferir o estudo em detalhes
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-colors duration-200">
                  Ver Estudo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-turquoise-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-white mb-6">
            Quer Resultados Similares?
          </h2>
          <p className="font-body text-white/90 text-[clamp(1rem,1.5vw,1.25rem)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para aplicar a mesma metodologia e expertise em seu próximo projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white hover:bg-white/90 text-primary font-button font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Solicitar Consultoria
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
