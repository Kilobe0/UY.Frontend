"use client";

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Footer } from "../../components/home/Footer";
import { Header } from "../../components/home/Header";

export default function ContatoPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        "Rua das Engenharias, 123",
        "Centro - São Paulo, SP",
        "CEP: 01234-567"
      ]
    },
    {
      icon: Phone,
      title: "Telefone",
      details: [
        "(11) 3456-7890",
        "(11) 98765-4321",
        "WhatsApp disponível"
      ]
    },
    {
      icon: Mail,
      title: "E-mail",
      details: [
        "contato@uaiyuan.com.br",
        "projetos@uaiyuan.com.br",
        "orcamento@uaiyuan.com.br"
      ]
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      details: [
        "Segunda a Sexta: 8h às 18h",
        "Sábado: 8h às 12h",
        "Domingo: Fechado"
      ]
    }
  ];

  const services = [
    "Projetos Estruturais",
    "Consultoria Técnica",
    "Gestão de Projetos",
    "Adequação às Normas",
    "Orçamentos",
    "Outros Serviços"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-turquoise-500/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-primary mb-6">
              Entre em Contato
            </h1>
            <p className="font-body text-[clamp(1.125rem,2vw,1.25rem)] text-muted mb-8 leading-relaxed">
              Estamos prontos para transformar seu projeto em realidade. 
              Entre em contato conosco e descubra como podemos ajudar com soluções inovadoras em engenharia civil.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                Solicite um Orçamento
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body font-semibold text-foreground mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block font-body font-semibold text-foreground mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body font-semibold text-foreground mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block font-body font-semibold text-foreground mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body font-semibold text-foreground mb-2">
                    Tipo de Serviço *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-body font-semibold text-foreground mb-2">
                    Descrição do Projeto *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Descreva brevemente seu projeto, necessidades e prazos..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 h-4 w-4 text-primary border-border rounded focus:ring-primary/50"
                  />
                  <label htmlFor="privacy" className="font-body text-sm text-muted">
                    Concordo com o tratamento dos meus dados pessoais conforme a{" "}
                    <a href="/privacy" className="text-primary hover:text-primary-hover underline">
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Solicitação
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  Informações de Contato
                </h2>
                <p className="font-body text-muted leading-relaxed mb-8">
                  Nossa equipe está pronta para atender você. Entre em contato através dos canais abaixo 
                  ou visite nossa sede para uma conversa presencial.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="font-body text-muted text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted mx-auto mb-2" />
                    <p className="font-body text-muted">Mapa Interativo</p>
                    <p className="font-body text-xs text-muted">Rua das Engenharias, 123 - Centro, SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
              Perguntas Frequentes
            </h2>
            <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-muted max-w-3xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre nossos serviços e processos antes de entrar em contato.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-semibold text-foreground mb-3">
                Qual é o prazo médio para desenvolvimento de um projeto estrutural?
              </h3>
              <p className="font-body text-muted">
                O prazo varia conforme a complexidade do projeto. Projetos residenciais simples podem ser entregues em 15-30 dias, 
                enquanto projetos comerciais complexos podem levar 60-90 dias. Sempre apresentamos um cronograma detalhado na proposta.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-semibold text-foreground mb-3">
                Vocês trabalham com projetos em outras cidades?
              </h3>
              <p className="font-body text-muted">
                Sim, atendemos projetos em todo o território nacional. Para projetos fora de São Paulo, 
                oferecemos consultoria remota e visitas técnicas conforme necessário.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-semibold text-foreground mb-3">
                Como funciona o processo de orçamento?
              </h3>
              <p className="font-body text-muted">
                Após recebermos suas informações, nossa equipe analisa o projeto e apresenta uma proposta detalhada 
                com escopo, cronograma e investimento. O orçamento é gratuito e sem compromisso.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-semibold text-foreground mb-3">
                Vocês oferecem acompanhamento durante a execução?
              </h3>
              <p className="font-body text-muted">
                Sim, oferecemos serviços de acompanhamento técnico durante a execução, incluindo visitas técnicas, 
                análise de conformidade e suporte para dúvidas que possam surgir durante a obra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-turquoise-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="font-body text-white/90 text-[clamp(1rem,1.5vw,1.25rem)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Não perca tempo! Entre em contato agora mesmo e dê o primeiro passo para transformar seu projeto em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white hover:bg-white/90 text-primary font-button font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Solicitar Orçamento
            </button>
            <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-button font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-white/30">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
