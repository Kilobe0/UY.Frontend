"use client";

import {
    Award,
    Building2,
    CheckCircle,
    Globe,
    Heart,
    Lightbulb,
    Shield,
    Target,
    TrendingUp,
    Users
} from "lucide-react";
import { Footer } from "../../components/home/Footer";
import { Header } from "../../components/home/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              A Empresa
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Mais de uma década de experiência em soluções integradas de engenharia civil, 
              transformando ideias em projetos sustentáveis e inovadores.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Desenvolver soluções integradas de engenharia civil que atendam às necessidades 
                dos nossos clientes com excelência técnica, inovação e sustentabilidade.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nossa Visão
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ser reconhecida como referência em soluções integradas de engenharia civil, 
                contribuindo para o desenvolvimento sustentável e a transformação do ambiente construído.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nossos Valores
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Excelência técnica, inovação, sustentabilidade, integridade e compromisso 
                com a satisfação dos nossos clientes e parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Nossa História
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Mais de uma década de excelência
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Fundada com o propósito de revolucionar o mercado de engenharia civil, 
                  a UaiYuan tem se destacado pela sua capacidade de oferecer soluções 
                  integradas e inovadoras para projetos complexos.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Ao longo dos anos, desenvolvemos expertise em diversas áreas da engenharia, 
                  sempre priorizando a qualidade, sustentabilidade e satisfação dos nossos clientes.
                </p>
              </div>
              <div className="bg-linear-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="font-heading text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="font-body text-sm text-muted-foreground">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="font-body text-sm text-muted-foreground">Projetos Realizados</div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="font-body text-sm text-muted-foreground">Clientes Satisfeitos</div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="font-body text-sm text-muted-foreground">Comprometimento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossas Especialidades
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Oferecemos soluções integradas em diversas áreas da engenharia civil
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <Building2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Projetos Estruturais
              </h3>
              <p className="font-body text-muted-foreground">
                Desenvolvimento de projetos estruturais com tecnologia BIM e análise avançada.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Fundações
              </h3>
              <p className="font-body text-muted-foreground">
                Projetos de fundações profundas e superficiais com análise geotécnica.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Instalações Hidrossanitárias
              </h3>
              <p className="font-body text-muted-foreground">
                Projetos completos de sistemas hidráulicos e sanitários.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Instalações Elétricas
              </h3>
              <p className="font-body text-muted-foreground">
                Projetos elétricos residenciais, comerciais e industriais.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Prevenção e Combate a Incêndio
              </h3>
              <p className="font-body text-muted-foreground">
                Sistemas de segurança contra incêndio e pânico.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <CheckCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Modelagem BIM
              </h3>
              <p className="font-body text-muted-foreground">
                Serviços de modelagem e compatibilização em BIM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossa Equipe
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-12">
              Profissionais qualificados e experientes comprometidos com a excelência
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Engenheiros Especialistas
                </h3>
                <p className="font-body text-muted-foreground">
                  Profissionais com vasta experiência em projetos complexos
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Certificações
                </h3>
                <p className="font-body text-muted-foreground">
                  Equipe com certificações técnicas e atualizações constantes
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-10 w-10 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Inovação
                </h3>
                <p className="font-body text-muted-foreground">
                  Sempre buscando novas tecnologias e metodologias
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary to-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para transformar seu projeto?
            </h2>
            <p className="font-body text-xl text-white/90 mb-8">
              Entre em contato conosco e descubra como podemos ajudar a realizar sua visão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-primary px-8 py-4 rounded-lg font-heading font-semibold hover:bg-white/90 transition-colors"
              >
                Entre em Contato
              </a>
              <a 
                href="#projects" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-semibold hover:bg-white/10 transition-colors"
              >
                Veja Nossos Projetos
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
