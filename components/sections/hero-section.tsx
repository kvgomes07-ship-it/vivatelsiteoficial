// ─────────────────────────────────────────────────────────────
// hero-section.tsx — SERVER COMPONENT (no "use client")
// Full-screen looping video hero with VIVATEL branding.
// Interactive bits (animated ShinyText heading, CTA + modal) are
// delegated to ShinyText / HeroApplyButton (Client Components).
// The site-wide <Navbar> (rendered in app/layout.tsx) sits on top,
// so the content carries top padding to clear it.
// ─────────────────────────────────────────────────────────────

import React from "react"
import { ShinyText, HeroApplyButton, HeroDashboard } from "./hero-interactive"

export function HeroSection() {
  return (
    <>
    <section className="relative z-10 h-screen w-full overflow-hidden bg-black font-sans">
      {/* ── Full-screen looping video background ── */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ── Content (above video) ── */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Top section — two columns on lg, stacked on mobile (below nav) */}
        <div className="grid grid-cols-1 gap-6 pt-28 md:pt-32 lg:grid-cols-2 lg:gap-8">
          <p className="max-w-md text-sm text-white/80 md:text-base">
            Entregamos infraestrutura digital transformadora que capacita Angola
            com conectividade soberana, cloud e tecnologia de classe mundial.
          </p>
          <p className="text-sm text-white/80 md:text-base lg:self-start lg:text-right">
            +8000 Dispositivos Conectados em Angola !
          </p>
        </div>

        {/* Hero — centered */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="mb-4 text-xs uppercase tracking-tight text-white/80 md:text-sm">
            Conectividade Soberana · Disponível em Angola
          </p>

          <h1
            className="font-medium tracking-tighter text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            style={{ lineHeight: 0.85 }}
          >
            Infraestrutura
            <br />
            <ShinyText text="Soberana." />
          </h1>

          <div className="mt-8 md:mt-10">
            <HeroApplyButton>Falar com a nossa equipa</HeroApplyButton>
          </div>
        </div>
      </div>
    </section>

    {/* ── Dashboard (abaixo do herói) ── */}
    <section className="relative z-10 bg-black py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <HeroDashboard />
      </div>
    </section>
    </>
  )
}
