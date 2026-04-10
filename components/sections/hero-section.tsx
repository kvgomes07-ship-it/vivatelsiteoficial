// ─────────────────────────────────────────────────────────────
// hero-section.tsx — SERVER COMPONENT (no "use client")
// Renders static hero text (badge, h1, tagline).
// Interactive parts (carousel, CTA button, modal) are delegated
// to HeroCTAButton and HeroShowcase (Client Components).
// ─────────────────────────────────────────────────────────────

import React from "react"
import { HeroCTAButton, HeroShowcase } from "./hero-interactive"

export function HeroSection() {
  return (
    <section className="relative z-20 pt-24 pb-20 min-h-[90vh] flex flex-col justify-center">
      {/* Particle Background — pure CSS, zero JS */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-float-particle opacity-10"
            style={{ left: `${i * 12}%`, top: `${(i * 15) % 100}%`, animationDuration: `${6 + i}s` }}
          />
        ))}
      </div>

      {/* Ambient glow blob */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[400px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* ── Static hero text ── */}
        <div className="max-w-5xl mx-auto text-center mb-16 relative flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest mb-4">
            Módulo de Ação 01 — Conectividade Soberana
          </div>

          {/* Headline */}
          <h1 className="text-[42px] sm:text-[56px] md:text-[64px] lg:text-[80px] font-black mb-4 tracking-tighter text-[#ffffff] leading-[0.9] max-w-[950px] mx-auto">
            Infraestrutura Digital <br className="hidden sm:block" /> Soberana para Angola
          </h1>

          {/* Tagline */}
          <p className="text-[15px] md:text-[18px] font-medium text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            Liderando o futuro tecnológico de Angola com infraestrutura de rede de classe mundial e processamento local.
          </p>

          {/* Client: CTA button + contact modal */}
          <HeroCTAButton />
        </div>

        {/* Client: 3D carousel + analytics widget */}
        <HeroShowcase />
      </div>
    </section>
  )
}
