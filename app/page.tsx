"use client";

import { ThemeToggle } from "../components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Theme Toggle */}
      <header className="fixed top-0 w-full border-b border-border bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-heading text-primary font-bold text-xl">UY</div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="mb-16">
            <h1 className="font-heading text-[clamp(2.625rem,5vw,3rem)] font-bold text-primary mb-6">
              Welcome to UY
            </h1>
            <p className="font-body text-[clamp(1rem,1.5vw,1.125rem)] text-muted leading-relaxed">
              This is a demonstration of our robust dark and light theme system
              built with Tailwind CSS. Toggle between themes using the button in
              the top right corner.
            </p>
          </section>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Card 1 */}
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading text-[clamp(1.5rem,2vw,1.75rem)] font-semibold text-primary mb-4">
                Primary Purple
              </h3>
              <p className="font-body text-[clamp(1rem,1.5vw,1.125rem)] text-muted mb-4">
                Used for titles, headers, and main buttons. Our primary color
                provides a modern, elegant, and impactful design.
              </p>
              <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors font-button font-semibold">
                Primary Button
              </button>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading text-[clamp(1.5rem,2vw,1.75rem)] font-semibold text-turquoise-500 mb-4">
                Turquoise Accent
              </h3>
              <p className="font-body text-[clamp(1rem,1.5vw,1.125rem)] text-muted mb-4">
                Our secondary color for CTAs and important actions. It creates
                great contrast with the primary purple.
              </p>
              <button className="px-4 py-2 rounded-lg bg-turquoise-500 text-white hover:bg-turquoise-600 transition-colors font-button font-semibold">
                Secondary Button
              </button>
            </div>
          </div>

          {/* Typography Section */}
          <section className="mb-16">
            <h2 className="font-heading text-[clamp(2rem,3vw,2.25rem)] font-semibold text-primary mb-8">
              Typography System
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-[clamp(1.5rem,2vw,1.75rem)] font-medium text-foreground mb-2">
                  Heading 3 - Raleway Medium
                </h3>
                <p className="font-body text-[clamp(1rem,1.5vw,1.125rem)] text-muted">
                  Body text uses Lato for optimal readability. This paragraph
                  demonstrates normal text content with appropriate spacing and
                  color contrast.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gold-100 dark:bg-gold-900/20 border border-gold-300 dark:border-gold-700">
                <p className="font-body text-[clamp(1rem,1.5vw,1.125rem)] text-foreground">
                  <span className="font-bold text-gold-600 dark:text-gold-400">
                    Gold Accent
                  </span>{" "}
                  is used for important highlights and attention-grabbing
                  elements. This card demonstrates how accents can be used
                  effectively.
                </p>
              </div>
            </div>
          </section>

          {/* Color Palette Section */}
          <section>
            <h2 className="font-heading text-[clamp(2rem,3vw,2.25rem)] font-semibold text-primary mb-8">
              Color Palette
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-purple-700 text-white">
                <div className="font-semibold mb-1">Primary Purple</div>
                <div className="text-sm opacity-90">#5D3A8C</div>
              </div>
              <div className="p-4 rounded-lg bg-purple-secondary text-white">
                <div className="font-semibold mb-1">Secondary Purple</div>
                <div className="text-sm opacity-90">#8E44AD</div>
              </div>
              <div className="p-4 rounded-lg bg-turquoise-500 text-white">
                <div className="font-semibold mb-1">Turquoise</div>
                <div className="text-sm opacity-90">#1ABC9C</div>
              </div>
              <div className="p-4 rounded-lg bg-gold-500 text-white">
                <div className="font-semibold mb-1">Gold</div>
                <div className="text-sm opacity-90">#F39C12</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-dark text-white">
                <div className="font-semibold mb-1">Dark Gray</div>
                <div className="text-sm opacity-90">#3D3D3D</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-light text-gray-dark border border-border">
                <div className="font-semibold mb-1">Light Gray</div>
                <div className="text-sm opacity-70">#EAEAEA</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
