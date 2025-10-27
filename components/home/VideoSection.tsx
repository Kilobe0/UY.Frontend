"use client";

import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-primary mb-6">
            CONFIRA NOSSO VÍDEO CORPORATIVO
          </h2>
          <p className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-muted max-w-3xl mx-auto leading-relaxed">
            Conheça nossa história, valores e compromisso com a excelência em engenharia civil
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-xl">
            {/* Video Placeholder */}
            <div className="relative aspect-video bg-linear-to-br from-primary/20 to-turquoise-500/20 flex items-center justify-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              {/* Play Button */}
              <button className="relative z-10 group">
                <div className="w-20 h-20 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-primary/30 rounded-full animate-ping"></div>
              </button>
              
              {/* Video Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    UaiYuan - Engenharia Civil
                  </h3>
                  <p className="font-body text-white/80 text-sm">
                    Conheça nossa empresa e nossos valores
                  </p>
                </div>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Vídeo Institucional UaiYuan
                  </h4>
                  <p className="font-body text-muted text-sm">
                    Duração: 3:45 min • Publicado em 15/10/2024
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white font-button font-semibold rounded-lg transition-colors">
                    Assistir Agora
                  </button>
                  <button className="px-4 py-2 bg-card border border-border hover:border-primary/50 text-foreground font-button font-semibold rounded-lg transition-colors">
                    Compartilhar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
