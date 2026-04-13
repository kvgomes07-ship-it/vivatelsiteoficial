"use client"

// ─────────────────────────────────────────────────────────────
// hero-interactive.tsx  — CLIENT COMPONENT
// Contains all interactive parts of the hero section:
//   • HeroCTAButton  — animated CTA button + contact modal
//   • HeroShowcase   — 3D carousel + analytics platform widget
// The parent HeroSection (Server Component) imports both.
// ─────────────────────────────────────────────────────────────

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { FORMSPREE_ID } from "@/lib/constants"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dotted-dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const AnalyticsPlatform = dynamic(
  () => import("../interactive/analytics-platform").then(m => ({ default: m.AnalyticsPlatform })),
  { ssr: false, loading: () => <div className="w-full h-48 bg-white/5 animate-pulse rounded-3xl" /> }
)

// ── Internal: animated CTA button ────────────────────────────
function HeroButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 transition-all duration-300 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    >
      <motion.div
        animate={{ left: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
        className="absolute top-0 h-full w-[40px] bg-white/20 skew-x-[-30deg] blur-md pointer-events-none"
      />
      <div className="flex items-center gap-3 relative z-10">
        <span className="text-lg font-bold text-white tracking-wide">{children}</span>
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="h-5 w-5 text-blue-400" />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.button>
  )
}

// ── Internal: 3D carousel ─────────────────────────────────────
function HeroCarousel() {
  const slides = [
    { type: "video", src: "/videos/home.mp4", title: "Performance", value: "500", suffix: "Mbps", desc: "Link dedicado simétrico de ultra-baixa latência para infraestruturas críticas." },
    { type: "image", src: "/close-up-woman-typing-keyboard.webp", title: "Interface", value: "100", suffix: "%", desc: "Experiência de utilizador fluida e desenhada para alta produtividade digital." },
    { type: "image", src: "/ai-powered-device-concept.webp", title: "Inteligência", value: "94", suffix: "%", desc: "Processamento de dados otimizado com modelos de IA soberanos para Angola." },
    { type: "image", src: "/maoderobo.webp", title: "Automação", value: "24/7", suffix: "", desc: "Monitorização proativa e automação robótica para sistemas industriais." },
    { type: "image", src: "/wepper-close-up-woman-typing-keyboard.webp", title: "Ecossistema", value: "Global", suffix: "", desc: "Conectividade transatlântica através dos cabos SACS e MONET." },
  ]
  const [current, setCurrent] = useState(0)
  const isVerySmall = useMediaQuery("(max-width: 640px)")

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 7000)
    return () => clearInterval(timer)
  }, [slides.length])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-[350px] md:h-[480px] flex flex-col items-center justify-center py-12 perspective-[1500px]">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => {
            let offset = index - current
            if (offset < -Math.floor(slides.length / 2)) offset += slides.length
            if (offset > Math.floor(slides.length / 2)) offset -= slides.length
            const isActive = offset === 0
            if (Math.abs(offset) > 1) return null
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: offset * 400, scale: 0.6 }}
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  x: offset * (isVerySmall ? 100 : 280),
                  scale: isActive ? 1 : 0.8,
                  rotateY: offset * -25,
                  z: isActive ? 0 : -200,
                  filter: isActive ? "blur(0px)" : "blur(4px)",
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="absolute w-[85%] md:w-[480px] h-full transform-gpu"
                style={{ zIndex: isActive ? 30 : 10 }}
              >
                <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
                  {slide.src && (
                    <div className="absolute inset-0 z-0">
                      {slide.type === "video" ? (
                        <video 
                          className="w-full h-full object-cover opacity-40" 
                          src={slide.src} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          preload="auto"
                        />
                      ) : (
                        <Image 
                          src={slide.src} 
                          alt={slide.title} 
                          fill 
                          priority={index <= 2} // Prioritize first few slides
                          className="object-cover opacity-40 shadow-inner text-transparent"
                          sizes="(max-width: 768px) 100vw, 480px"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/20" />
                    </div>
                  )}

                  <div className="relative z-10 w-full h-full p-8 flex flex-col text-left">
                    <div className="flex justify-between items-start mb-8 md:mb-12">
                      <span className="text-[10px] font-bold tracking-widest text-blue-500/80">{slide.title}</span>
                      <span className="text-[10px] font-bold text-white/30 tracking-widest">{index + 1}/{slides.length}</span>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl md:text-7xl font-black text-white tracking-tighter tabular-nums drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">{slide.value}</span>
                        <span className="text-[11px] font-bold text-blue-500 tracking-tighter">{slide.suffix}</span>
                      </div>
                      <p className="text-[11px] md:text-xs text-white/40 leading-relaxed max-w-[280px]">{slide.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
      <div className="mt-12 flex items-center gap-12 z-40">
        <button 
          onClick={prev} 
          aria-label="Slide anterior"
          className="p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all group scale-90 md:scale-100"
        >
          <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white rotate-180" />
        </button>
        <div className="flex gap-2.5">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)} 
              aria-label={`Ir para o slide ${i + 1}`}
              className="relative h-1.5 overflow-hidden transition-all duration-700 rounded-full" 
              style={{ 
                width: current === i ? "40px" : "8px", 
                backgroundColor: current === i ? "#2563eb" : "rgba(255,255,255,0.2)" 
              }} 
            />
          ))}
        </div>
        <button 
          onClick={next} 
          aria-label="Próximo slide"
          className="p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all group scale-90 md:scale-100"
        >
          <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white" />
        </button>
      </div>

    </div>
  )
}

// ── Exported: CTA Button + Contact Modal ─────────────────────
export function HeroCTAButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, phone }),
      })
      if (response.ok) {
        setIsModalOpen(false)
        setEmail(""); setCompany(""); setPhone("")
      }
    } catch (error) { 
      // Silently catch error
    } finally { 
      setIsSubmitting(false) 
    }
  }

  return (
    <>
      <div>
        <HeroButton onClick={() => setIsModalOpen(true)}>Começar Agora</HeroButton>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="border-gray-800 bg-[#0c0c0c]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-tight">Demonstração VIVATEL</DialogTitle>
            <DialogDescription className="text-gray-500 font-medium">Agende sua avaliação de infraestrutura dedicada.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold tracking-widest text-gray-400">Email</Label>
              <Input type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required className="border-white/10 bg-black/40 text-white" />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold tracking-widest text-gray-400">Empresa</Label>
              <Input value={company} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)} required className="border-white/10 bg-black/40 text-white" />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold tracking-widest text-gray-400">Telefone</Label>
              <Input type="tel" value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} className="border-white/10 bg-black/40 text-white" />
            </div>
            <DialogFooter className="pt-4 gap-2">
              <Button type="button" onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/10 text-gray-400">Cancelar</Button>
              <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-500 font-bold tracking-tight">
                {isSubmitting ? "Enviando..." : "Submeter"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

// ── Exported: Carousel + Analytics Widget ────────────────────
export function HeroShowcase() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <HeroCarousel />
      <div className="w-full mt-12 bg-[#0c0c0c] border border-white/5 rounded-[40px] shadow-2xl overflow-hidden min-h-[300px]">
        <AnalyticsPlatform />
      </div>
    </div>
  )
}
