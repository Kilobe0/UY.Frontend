"use client";

import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Gostaríamos de agradecer à UaiYuan pela qualidade e eficiência no atendimento de nossas solicitações, desta forma resolvemos os problemas técnicos sem afetar o cronograma do empreendimento.",
      author: "Fabiano Ulisses",
      company: "CLM Incorp",
      companyUrl: "http://www.clmincorp.net.br/",
      rating: 5,
      avatar: "/images/testimonials/fabiano-ulisses.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
            A OPINIÃO DE NOSSOS CLIENTES
          </h2>
          <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-muted max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nossa maior recompensa. Conheça o que eles dizem sobre nossos serviços.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 shadow-lg">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="text-center mb-8">
                <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-foreground leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
                
                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                  ))}
                </div>
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-16 w-16 rounded-full object-cover border-2 border-primary/20"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg width="64" height="64" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="64" height="64" fill="%23f3f4f6" rx="32"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%236b7280" text-anchor="middle" dy=".3em"%3E${testimonial.author.charAt(0)}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    {testimonial.author}
                  </h4>
                  <p className="font-body text-muted">
                    <a 
                      href={testimonial.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {testimonial.company}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Testimonials Placeholder */}
        <div className="mt-12 text-center">
          <p className="font-body text-muted mb-6">
            Mais depoimentos de clientes satisfeitos
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-card border border-border hover:border-primary/50 text-foreground font-button font-semibold rounded-lg transition-colors">
              Ver Mais Depoimentos
            </button>
            <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-colors">
              Deixar Seu Depoimento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
