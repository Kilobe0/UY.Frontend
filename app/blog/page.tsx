"use client";

import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react";
import { Footer } from "../../components/home/Footer";
import { Header } from "../../components/home/Header";

export default function BlogPage() {
  const articles = [
    {
      title: "O Fator Humano é levado a sério no Projeto Estrutural?",
      excerpt: "Reproduzimos a seguir, na íntegra, artigo publicado pelo Engenheiro Lucas Ramires, face a importância que a UaiYuan Engenharia dá ao tema. Saudações aos colegas. Peço licença para provocar uma reflexão e/ou discussão...",
      author: "Equipe UaiYuan",
      date: "15 de Outubro, 2024",
      readTime: "5 min",
      image: "/images/blog/estrutural-humano.jpg",
      slug: "fator-humano-projeto-estrutural",
      category: "Engenharia",
      tags: ["Estrutural", "Projeto", "Qualidade"]
    },
    {
      title: "Sustentabilidade na Construção Civil: Tendências 2024",
      excerpt: "A construção civil está passando por uma transformação significativa com foco na sustentabilidade. Conheça as principais tendências e tecnologias que estão moldando o futuro da indústria...",
      author: "Carlos Silva",
      date: "10 de Outubro, 2024",
      readTime: "7 min",
      image: "/images/blog/sustentabilidade-2024.jpg",
      slug: "sustentabilidade-construcao-civil-2024",
      category: "Sustentabilidade",
      tags: ["Sustentabilidade", "Tendências", "Tecnologia"]
    },
    {
      title: "Concreto Protendido: Vantagens e Aplicações",
      excerpt: "O concreto protendido revolucionou a engenharia estrutural. Descubra as principais vantagens desta tecnologia e suas aplicações em diferentes tipos de projetos...",
      author: "Ana Santos",
      date: "5 de Outubro, 2024",
      readTime: "6 min",
      image: "/images/blog/concreto-protetendido.jpg",
      slug: "concreto-protetendido-vantagens-aplicacoes",
      category: "Tecnologia",
      tags: ["Concreto", "Estrutural", "Tecnologia"]
    },
    {
      title: "Gestão de Projetos na Engenharia: Metodologias Ágeis",
      excerpt: "Como aplicar metodologias ágeis na gestão de projetos de engenharia civil? Conheça as melhores práticas para otimizar prazos e qualidade em seus projetos...",
      author: "Roberto Lima",
      date: "1 de Outubro, 2024",
      readTime: "8 min",
      image: "/images/blog/gestao-projetos-agil.jpg",
      slug: "gestao-projetos-engenharia-metodologias-ageis",
      category: "Gestão",
      tags: ["Gestão", "Projetos", "Metodologias"]
    },
    {
      title: "Normas Técnicas Brasileiras: Atualizações 2024",
      excerpt: "Confira as principais atualizações nas normas técnicas brasileiras para construção civil e como elas impactam seus projetos estruturais...",
      author: "Maria Oliveira",
      date: "28 de Setembro, 2024",
      readTime: "4 min",
      image: "/images/blog/normas-tecnicas-2024.jpg",
      slug: "normas-tecnicas-brasileiras-atualizacoes-2024",
      category: "Normas",
      tags: ["Normas", "Técnicas", "Atualizações"]
    },
    {
      title: "Inovação em Estruturas: Materiais do Futuro",
      excerpt: "Conheça os materiais inovadores que estão chegando ao mercado da construção civil e como eles podem revolucionar seus projetos estruturais...",
      author: "Pedro Costa",
      date: "25 de Setembro, 2024",
      readTime: "9 min",
      image: "/images/blog/materiais-futuro.jpg",
      slug: "inovacao-estruturas-materiais-futuro",
      category: "Inovação",
      tags: ["Inovação", "Materiais", "Futuro"]
    }
  ];

  const categories = [
    "Todos",
    "Engenharia",
    "Sustentabilidade", 
    "Tecnologia",
    "Gestão",
    "Normas",
    "Inovação"
  ];

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-turquoise-500/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-primary mb-6">
              Blog UaiYuan
            </h1>
            <p className="font-body text-[clamp(1.125rem,2vw,1.25rem)] text-muted mb-8 leading-relaxed">
              Conteúdo técnico, insights e tendências do mundo da engenharia civil. 
              Mantenha-se atualizado com as últimas novidades e melhores práticas da indústria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Assinar Newsletter
              </button>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-primary font-button font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-primary/30">
                Ver Artigos Populares
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-primary mb-4">
              Artigo em Destaque
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3EImagem do Artigo%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4 hover:text-primary transition-colors">
                    <a href={`/blog/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </a>
                  </h3>
                  
                  <p className="font-body text-muted leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={`/blog/${featuredArticle.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary-hover font-button font-semibold transition-colors"
                    >
                      Leia mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
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
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <article 
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Article Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg width="400" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="200" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="14" fill="%236b7280" text-anchor="middle" dy=".3em"%3EImagem do Artigo%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-xs text-muted">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3 hover:text-primary transition-colors">
                    <a href={`/blog/${article.slug}`}>
                      {article.title}
                    </a>
                  </h3>
                  
                  <p className="font-body text-muted text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary-hover font-button font-semibold text-sm transition-colors"
                    >
                      Leia mais
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                    
                    <div className="flex space-x-1">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-turquoise-500/10 text-turquoise-600 text-xs font-semibold rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Carregar Mais Artigos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-turquoise-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-white mb-6">
            Mantenha-se Atualizado
          </h2>
          <p className="font-body text-white/90 text-[clamp(1rem,1.5vw,1.25rem)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Receba nossos artigos técnicos e insights sobre engenharia civil diretamente em seu e-mail.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white hover:bg-white/90 text-primary font-button font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Assinar
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
