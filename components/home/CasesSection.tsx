"use client";

import { useState } from "react";

export function CasesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const cases = [
    {
      title: "Praça das Árvores",
      image: "/images/placeholder/paisagemengenharia.jpg",
      description: "5 Torres residenciais em Alvenaria Estrutural",
      details: [
        "8 pavimentos por torre",
        "16.000,00m²",
        "Redução de R$ 500.000,00 no custo do empreendimento",
        "Adequação do projeto existente às normas vigentes"
      ]
    },
    {
      title: "Pateo Jacuy",
      image: "/images/placeholder/homensemobra.jpg",
      description: "Complexo residencial com Concreto Protendido",
      details: [
        "12 pavimentos",
        "25.000,00m²",
        "Otimização estrutural com economia de 15%",
        "Sistema construtivo inovador"
      ]
    },
    {
      title: "Kairós Botucatu",
      image: "/images/placeholder/teladoautocad.jpg",
      description: "Edifício comercial com estrutura mista",
      details: [
        "15 pavimentos",
        "30.000,00m²",
        "Redução de 20% no tempo de execução",
        "Sustentabilidade certificada"
      ]
    }
  ];

  return (
    <section id="cases" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
            CASOS DE SUCESSO
          </h2>
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
                <h4 className="font-heading text-lg font-semibold mb-2">
                  {caseItem.title}
                </h4>
                <p className="font-body text-sm opacity-80">
                  {caseItem.description}
                </p>
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
                  // Fallback to a placeholder if image doesn't exist
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
            
            <div className="space-y-3">
              {cases[activeTab].details.map((detail, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  <span className="font-body text-muted">{detail}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
