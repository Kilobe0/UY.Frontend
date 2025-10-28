"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { label: "Início", href: "/" },
    { label: "A Empresa", href: "/a-empresa" },
    { label: "Soluções", href: "/solucoes" },
    { label: "Projetos", href: "/projetos" },
    { label: "Cases", href: "/cases" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/uy_logo.png" 
              alt="UaiYuan - Engenharia Civil" 
              className="h-12 w-auto"
            />
            <span className="font-heading text-accent font-bold text-xl">
              UaiYuan
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-body transition-colors duration-200 ${
                  pathname === item.href 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-body transition-colors duration-200 py-2 ${
                    pathname === item.href 
                      ? 'text-primary' 
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
