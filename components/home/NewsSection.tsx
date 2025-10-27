"use client";

import { Calendar, User } from "lucide-react";

export function NewsSection() {
  const newsItem = {
    title: "O Fator Humano é levado a sério no Projeto Estrutural?",
    excerpt: "Reproduzimos a seguir, na íntegra, artigo publicado pelo Engenheiro Lucas Ramires, face a importância que a UaiYuan Engenharia dá ao tema. Saudações aos colegas. Peço licença para provocar uma reflexão e/ou discussão: [...]",
    author: "Equipe UaiYuan",
    date: "15 de Outubro, 2024",
    image: "/images/blog/estrutural-humano.jpg",
    slug: "fator-humano-projeto-estrutural"
  };

  return (
    <section id="blog" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
            ÚLTIMAS NOTÍCIAS
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/3">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-64 md:h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3EImagem do Artigo%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="md:w-2/3 p-8">
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {newsItem.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {newsItem.author}
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 hover:text-primary transition-colors">
                  <a href={`/blog/${newsItem.slug}`}>
                    {newsItem.title}
                  </a>
                </h3>
                
                <p className="font-body text-muted leading-relaxed mb-6">
                  {newsItem.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <a
                    href={`/blog/${newsItem.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary-hover font-button font-semibold transition-colors"
                  >
                    Leia mais
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      Engenharia
                    </span>
                    <span className="px-3 py-1 bg-turquoise-500/10 text-turquoise-600 text-xs font-semibold rounded-full">
                      Estrutural
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
