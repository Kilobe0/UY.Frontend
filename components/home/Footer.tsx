"use client";

import { Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "http://facebook.uaiyuan.com.br",
      color: "hover:text-blue-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "http://linkedin.uaiyuan.com.br",
      color: "hover:text-blue-700"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "http://youtube.uaiyuan.com.br",
      color: "hover:text-red-600"
    }
  ];

  const quickLinks = [
    { label: "Início", href: "#home" },
    { label: "A Empresa", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#projects" },
    { label: "Cases", href: "#cases" },
    { label: "Blog", href: "#blog" },
    { label: "Contato", href: "#contact" }
  ];

  return (
    <footer id="contact" className="bg-gray-dark text-gray-light">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/uy_logo.svg" 
                alt="UaiYuan - Engenharia Civil" 
                className="h-8 w-auto"
              />
              <span className="font-heading text-primary font-bold text-xl">
                UaiYuan
              </span>
            </div>
            
            <p className="font-body text-gray-light/80 mb-6 leading-relaxed">
              Especialistas em soluções integradas de engenharia civil, 
              oferecendo projetos inovadores e sustentáveis com mais de 
              uma década de experiência no mercado.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-body text-sm">
                  Rua das Engenharias, 123 - Centro<br />
                  São Paulo - SP, 01234-567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-body text-sm">
                  (11) 9999-9999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-body text-sm">
                  contato@uaiyuan.com.br
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-gray-light/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-card border border-border rounded-lg text-gray-light/80 ${social.color} transition-all duration-200 hover:scale-110`}
                    title={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-heading text-sm font-semibold text-white mb-3">
                Newsletter
              </h4>
              <p className="font-body text-gray-light/80 text-sm mb-4">
                Receba nossas novidades e atualizações
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 bg-card border border-border rounded-l-lg text-white placeholder-gray-light/50 focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-r-lg transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-gray-light/60 text-sm">
              Copyright 2024 - Desenvolvido pela equipe UaiYuan de TI | Todos os direitos reservados
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/politica-privacidade" className="font-body text-gray-light/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="font-body text-gray-light/60 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
