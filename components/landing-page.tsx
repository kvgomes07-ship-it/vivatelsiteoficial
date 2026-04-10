/// <reference types="node" />
"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Github,
  Globe,
  Twitter,
  X,
  Zap,
  Shield,
  Database,
  Brain,
  Radio,
  BookOpen,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dotted-dialog"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import dynamic from "next/dynamic"

const CloudPlatform = dynamic(() => import("./interactive/cloud-platform").then(m => ({ default: m.CloudPlatform })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const AnalyticsPlatform = dynamic(() => import("./interactive/analytics-platform").then(m => ({ default: m.AnalyticsPlatform })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const SecurityPlatform = dynamic(() => import("./interactive/security-platform").then(m => ({ default: m.SecurityPlatform })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const TeamVisualization = dynamic(() => import("./interactive/team-visualization").then(m => ({ default: m.TeamVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const ConnectivityVisualization = dynamic(() => import("./interactive/connectivity-visualization").then(m => ({ default: m.ConnectivityVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const SoftwareVisualization = dynamic(() => import("./interactive/software-visualization").then(m => ({ default: m.SoftwareVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const IoTVisualization = dynamic(() => import("./interactive/iot-visualization").then(m => ({ default: m.IoTVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const AcademyVisualization = dynamic(() => import("./interactive/academy-visualization").then(m => ({ default: m.AcademyVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
import { useMediaQuery } from "@/hooks/use-media-query"
import { PremiumCard } from "./ui/premium-card"

function HeroButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-md transition-all duration-300 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    >
      {/* Shimmer Effect */}
      <motion.div
        animate={{
          left: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 0.5,
        }}
        className="absolute top-0 h-full w-[40px] bg-white/20 skew-x-[-30deg] blur-md pointer-events-none"
      />

      <div className="flex items-center gap-3 relative z-10">
        <span className="text-lg font-bold text-white tracking-wide">
          {children}
        </span>
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="group-hover:translate-x-1 transition-transform duration-300"
        >
          <ArrowRight className="h-5 w-5 text-blue-400" />
        </motion.div>
      </div>

      {/* Internal Glow on Hover */}
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.button>
  )
}

function Marquee({ children, speed = 30 }: { children: React.ReactNode; speed?: number }) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className="flex overflow-hidden relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{
          x: isPaused ? undefined : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap min-w-max py-4"
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

function PremiumIcon({ icon: Icon }: { icon: any }) {
  return (
    <div className="relative group/icon mb-6 inline-block">
      {/* Outer Glow Effect */}
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-2 rounded-2xl blur-xl opacity-40 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 group-hover/icon:opacity-100 transition-opacity duration-500 z-0"
      />

      {/* Icon Container with Float Animation */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 p-4 rounded-2xl bg-[#0c0c0c] border border-white/10 group-hover/icon:border-blue-500/50 transition-all duration-300 shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]" />
        <Icon className="h-8 w-8 text-blue-400 group-hover/icon:text-white transition-colors relative z-10" />
      </motion.div>

      {/* Decorative Corner Light */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-blue-400/20 blur-md rounded-full -mr-2 -mt-2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />
    </div>
  )
}

function HeroCarousel() {
  const slides = [
    { type: 'video', src: '/videos/home.mp4', title: "Performance", value: "500", suffix: "Mbps", desc: "Link dedicado simétrico de ultra-baixa latência para infraestruturas críticas." },
    { type: 'image', src: '/close-up-woman-typing-keyboard.webp', title: "Interface", value: "100", suffix: "%", desc: "Experiência de utilizador fluida e desenhada para alta produtividade digital." },
    { type: 'image', src: '/ai-powered-device-concept.webp', title: "Inteligência", value: "94", suffix: "%", desc: "Processamento de dados otimizado com modelos de IA soberanos para Angola." },
    { type: 'image', src: '/maoderobo.webp', title: "Automação", value: "24/7", suffix: "", desc: "Monitorização proativa e automação robótica para sistemas industriais." },
    { type: 'image', src: '/wepper-close-up-woman-typing-keyboard.webp', title: "Ecossistema", value: "Global", suffix: "", desc: "Conectividade transatlântica através dos cabos SACS e MONET." },
  ]
  const [current, setCurrent] = useState(0)
  const isVerySmall = useMediaQuery("(max-width: 640px)")

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [slides.length])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center py-12 perspective-[1500px]">
      <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center">
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => {
            // Lógica para determinar a posição relativa ao card ativo
            let offset = index - current
            if (offset < -Math.floor(slides.length / 2)) offset += slides.length
            if (offset > Math.floor(slides.length / 2)) offset -= slides.length

            const isActive = offset === 0
            const isPrev = offset === -1
            const isNext = offset === 1
            const isVisible = Math.abs(offset) <= 1

            if (!isVisible) return null

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
                className="absolute w-[85%] md:w-[480px] h-full"
                style={{ zIndex: isActive ? 30 : 10 }}
              >
                <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                  {/* Conteúdo do Slide (Média) */}
                  <div className="absolute inset-0 z-0">
                    {slide.type === 'video' ? (
                      <video className="w-full h-full object-cover opacity-40" src={slide.src} autoPlay loop muted playsInline />
                    ) : (
                      <Image src={slide.src} alt={slide.title} fill sizes="(max-width: 768px) 85vw, 480px" className="object-cover opacity-40 shadow-inner" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/20" />
                  </div>

                  {/* UI do Cartão (Estilo Referência) */}
                  <div className="relative z-10 w-full h-full p-8 flex flex-col text-left">
                    <div className="flex justify-between items-start mb-12">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500/80">{slide.title}</span>
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{index + 1}/{slides.length}</span>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-6xl md:text-7xl font-black text-white tracking-tighter tabular-nums drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                          {slide.value}
                        </span>
                        <span className="text-xl md:text-2xl font-black text-blue-500 uppercase tracking-tighter">{slide.suffix}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-4 h-0.5 rounded-full bg-blue-500" />
                        <span className="text-xs md:text-sm font-bold text-white/90">
                          {slide.title === "Performance" ? "Sua infraestrutura está " : "Link "}
                          <span className={slide.title === "Performance" ? "text-blue-400" : "text-white"}>
                            {slide.title === "Performance" ? "escalando de forma épica" : "100% resiliente"}
                          </span>
                        </span>
                      </div>

                      <p className="text-[11px] md:text-xs text-white/40 leading-relaxed max-w-[280px]">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Navegação Inferior (Estilo Referência) */}
      <div className="mt-20 md:mt-24 flex items-center gap-12 z-40">
        <button onClick={prev} className="p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all group scale-90 md:scale-100">
          <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white rotate-180" />
        </button>

        <div className="flex gap-2.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className="relative h-1.5 overflow-hidden transition-all duration-700" style={{ width: current === i ? "40px" : "8px" }}>
              <div className={`absolute inset-0 rounded-full transition-all duration-700 ${current === i ? "bg-blue-500" : "bg-white/20"}`} />
            </button>
          ))}
        </div>

        <button onClick={next} className="p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all group scale-90 md:scale-100">
          <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white" />
        </button>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isVerySmall = useMediaQuery("(max-width: 500px)")

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formEmail = email
    const formCompany = company
    const formPhone = phone

    try {
      // Usando Formspree para tornar o formulário funcional
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "mnpkrpkp"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formEmail,
          company: formCompany,
          phone: formPhone,
        }),
      })

      if (response.ok) {
        setIsModalOpen(false)
        setEmail("")
        setCompany("")
        setPhone("")
        // Você pode adicionar um toast de sucesso aqui se desejar
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen text-white overflow-hidden bg-transparent">
      {/* Header removed - using global Navbar */}

      {/* Mobile Menu removed - using global Navbar */}

      {/* Hero Section */}
      <section className="relative z-20 pt-24 pb-20 min-h-[90vh] flex flex-col justify-center">
        {/* Particle Effect - CSS only for performance */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {mounted && Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-float-particle"
              style={{
                left: `${(i * 8.3) % 100}%`,
                top: `${(i * 13.7) % 100}%`,
                opacity: 0.15 + (i % 3) * 0.1,
                animationDuration: `${6 + (i % 5) * 2}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Highlight glow behind text */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[400px] bg-blue-500/35 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16 relative flex flex-col items-center">
            {/* Launch Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[13px] font-medium mb-4 backdrop-blur-md"
            >
              Novo Lançamento — Ecossistema Soberano
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-semibold mb-2 tracking-[-0.02em] text-[#ffffff] leading-[0.95] max-w-[900px] mx-auto"
            >
              Infraestrutura Digital <br className="hidden sm:block" /> Soberana para Angola
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[16px] md:text-[20px] font-normal text-white/70 mt-2 mb-4 max-w-2xl mx-auto leading-[1.6]"
            >
              Soluções de conectividade e infraestrutura de rede de classe mundial, desenhadas para o futuro tecnológico do país.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-2"
            >
              <HeroButton onClick={() => setIsModalOpen(true)}>
                Começar Agora
              </HeroButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative w-full max-w-5xl mx-auto flex flex-col gap-4"
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-sky-500/20 rounded-lg blur-3xl" />

              <div className="relative z-10">
                <HeroCarousel />
              </div>
            </div>

            {/* Dashbord Analytics abaixo do vídeo */}
            <div className="relative z-10 w-full">
              <AnalyticsPlatform />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - VIVATEL Advanced Resources */}
      <section id="recursos" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59, 130, 246,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ecossistema VIVATEL</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Plataforma completa com ferramentas especializadas para transformar sua infraestrutura digital e
                impulsionar a inovação.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Software",
                description: "Desenvolvimento, APIs robustas e workflows automatizados para acelerar time-to-market.",
                href: "/servicos/software",
              },
              {
                icon: Shield,
                title: "Segurança Avançada",
                description: "Proteção de nível empresarial com criptografia end-to-end e conformidade regulatória.",
                href: "/servicos/security",
              },
              {
                icon: Brain,
                title: "Cloud",
                description:
                  "Infraestrutura em nuvem para servidores, hospedagem, escalabilidade e alta disponibilidade de aplicações e serviços.",
                href: "/servicos/cloud",
              },
              {
                icon: Radio,
                title: "Conectividade",
                description: "Infraestrutura de conectividade soberana com banda larga, 5G e redundância garantida.",
                href: "/servicos/conectividade",
              },
              {
                icon: Database,
                title: "AI & DATA",
                description:
                  "Processamento de dados em tempo real com modelos de IA personalizados e pipelines escaláveis.",
                href: "/servicos/analytics",
              },
              {
                icon: Zap,
                title: "Stream & IoT",
                description: "Streaming de dados em tempo real, robótica industrial e IoT para automação completa.",
                href: "/servicos/iot-stream",
              },
              {
                icon: BookOpen,
                title: "Academias & Labs",
                description: "Programas de formação, certificação e inovação para desenvolver talento local.",
                href: "/servicos/academias",
              },
            ].map((feature, index) => (
              <Link href={feature.href || "#"} key={index} className="block group">
                <PremiumCard
                  className="transition-all duration-300 h-full hover:border-blue-500/50 cursor-pointer"
                >
                  <div className="p-8 h-full flex flex-col">
                    <PremiumIcon icon={feature.icon} />
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </PremiumCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluções" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59, 130, 246,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossas Soluções</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore nossa suíte completa de soluções inovadoras projetadas para transformar sua experiência digital.
              </p>
            </motion.div>
          </div>

          <div className="space-y-24">
            {/* VIVATEL Cloud */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold">VIVATEL Cloud</h3>
                <p className="text-gray-300 text-lg">
                  Plataforma em nuvem escalável e soberana que se adapta às suas necessidades. Implante aplicações com
                  facilidade e gerencie recursos de forma eficiente.
                </p>
                <ul className="space-y-3">
                  {[
                    "Escalabilidade automática e inteligente",
                    "Infraestrutura geograficamente distribuída",
                    "Preços flexíveis e transparentes",
                    "99.99% de disponibilidade garantida",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-sky-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/servicos/cloud">
                  <Button className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600">
                    Saiba Mais
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-sky-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                    <CloudPlatform />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* VIVATEL Analytics */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-sky-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden bg-gray-900/50 flex items-center justify-center">
                    <BarChart3 className="h-20 w-20 text-blue-500/30" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold">VIVATEL Analytics</h3>
                <p className="text-gray-300 text-lg">
                  Análise avançada de dados que oferece insights acionáveis sobre a saúde da sua infraestrutura e
                  comportamento do usuário em tempo real.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dashboards interativos em tempo real",
                    "Análise preditiva com machine learning",
                    "Relatórios personalizáveis e exportáveis",
                    "Alertas automáticos e inteligentes",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/servicos/analytics">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                    Saiba Mais
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* VIVATEL Security */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold">VIVATEL Security</h3>
                <p className="text-gray-300 text-lg">
                  Proteção de segurança de ponta com detecção de ameaças em tempo real e conformidade com
                  regulamentações internacionais.
                </p>
                <ul className="space-y-3">
                  {[
                    "Detecção de ameaças com IA avançada",
                    "Criptografia end-to-end de dados",
                    "Conformidade com padrões internacionais",
                    "Auditoria contínua e certificações",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/servicos/security">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                    Saiba Mais
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                    <SecurityPlatform />
                  </div>
                </div>
              </motion.div>
            </div>
            {/* VIVATEL Connectivity */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden bg-gray-900">
                    <ConnectivityVisualization />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 order-1 md:order-2"
              >
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                  <Radio className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">Infraestrutura Global</span>
                </div>
                <h3 className="text-3xl font-bold">VIVATEL Conectividade</h3>
                <p className="text-gray-400 text-lg">
                  Conectividade soberana com acesso direto aos cabos SACS e MONET. Garantimos baixa latência e alta disponibilidade através da nossa parceria estratégica com a Angola Cable.
                </p>
                <ul className="space-y-3">
                  {[
                    "Acesso Direto ao Backbone Internacional",
                    "Rede de Fibra Óptica Nacional",
                    "Soluções 5G Enterprise",
                    "Latência Otimizada para Games e Streaming",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/servicos/conectividade">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                    Saiba Mais
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* VIVATEL Software */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                  <Code className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">Desenvolvimento Digital</span>
                </div>
                <h3 className="text-3xl font-bold">VIVATEL Software</h3>
                <p className="text-gray-400 text-lg">
                  Desenvolvimento de software sob medida, integração de sistemas e automação de processos. Transformamos necessidades de negócio em soluções digitais robustas e escaláveis.
                </p>
                <ul className="space-y-3">
                  {[
                    "Desenvolvimento de Aplicações Web & Mobile",
                    "Modernização de Sistemas Legados",
                    "Integração de APIs e Microserviços",
                    "DevOps e CI/CD Automatizado",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/servicos">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                    Saiba Mais
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden bg-gray-900">
                    <SoftwareVisualization />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* VIVATEL Stream & IoT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden bg-gray-900">
                    <IoTVisualization />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 order-1 md:order-2"
              >
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                  <Zap className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">Internet das Coisas</span>
                </div>
                <h3 className="text-3xl font-bold">VIVATEL Stream & IoT</h3>
                <p className="text-gray-400 text-lg">
                  Soluções completas de IoT e streaming de dados para conectar o mundo físico ao digital. Monitore ativos, otimize operações e tome decisões baseadas em dados reais.
                </p>
                <ul className="space-y-3">
                  {[
                    "Monitoramento Industrial e Smart Cities",
                    "Streaming de Dados em Tempo Real",
                    "Processamento na Borda (Edge Computing)",
                    "Gestão de Frotas e Ativos",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/servicos">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                    Saiba Mais
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* VIVATEL Academias & Labs */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                  <BookOpen className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">Inovação e Educação</span>
                </div>
                <h3 className="text-3xl font-bold">VIVATEL Academias & Labs</h3>
                <p className="text-gray-400 text-lg">
                  Investindo no futuro tecnológico de Angola. Nossos laboratórios de inovação e programas de academia desenvolvem o talento necessário para impulsionar a economia digital.
                </p>
                <ul className="space-y-3">
                  {[
                    "Formação Especializada em Cloud e IA",
                    "Certificações Técnicas Reconhecidas",
                    "Laboratórios de Pesquisa e Desenvolvimento",
                    "Programas de Inovação Aberta",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/servicos">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                    Saiba Mais
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden bg-gray-900">
                    <AcademyVisualization />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59, 130, 246,0.15),transparent_60%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-1"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">Sobre Nossa Missão</h2>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
                Vivatel foi criada com uma visão singular: fortalecer a soberania digital de Angola através de
                infraestrutura de conectividade de classe mundial. Acreditamos que a tecnologia poderosa deve ser
                acessível e centrada nas necessidades locais.
              </p>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
                Nossa equipe de engenheiros e designers apaixonados trabalha incansavelmente para criar soluções
                intuitivas e poderosas que resolvem problemas reais e capacitam nossos usuários a alcançar mais.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="bg-gray-800/50 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base">
                  <span className="text-blue-400 font-medium">50+</span> Membros da Equipe
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base">
                  <span className="text-blue-400 font-medium">100+</span> Clientes Ativos
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base">
                  <span className="text-blue-400 font-medium">99.9%</span> Tempo de Atividade
                </div>
              </div>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-950 text-sm sm:text-base bg-transparent"
              >
                Saiba Mais Sobre Nós
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-lg blur-xl" />
                <div className="relative rounded-lg overflow-hidden">
                  <div className="w-full h-[300px] md:h-[400px]">
                    <TeamVisualization />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="parceiros" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59, 130, 246,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossos Parceiros Estratégicos</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Parcerias com líderes da indústria que fortalecem nosso ecossistema digital soberano.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

            <Marquee speed={40}>
              {[
                { name: "Angola Cable", category: "Conectividade", logo: "/angolacable.png" },
                { name: "Zap", category: "Telecomunicações", logo: "/zap.jpg" },
                { name: "Banco Fomec", category: "Financeiro", logo: "/bfa.jpeg" },
                { name: "Ministério da TIC", category: "Governo", logo: "/ministerio.png" },
                { name: "MELM Solutions", category: "Inovação", logo: null },
                { name: "UNITEL", category: "Conectividade", logo: "/unitel.png" },
                { name: "Banco Económico", category: "Financeiro", logo: "/BancoEconomicoAngola.png" },
                { name: "7Smiles", category: "Educação", logo: "/7Smile.png" },
              ].map((partner, index) => (
                <div key={index} className="w-[200px] flex-shrink-0">
                  <PremiumCard
                    className="h-[120px] border-white/5 bg-[#151515]/50 backdrop-blur-md hover:border-blue-500/30 transition-all duration-500"
                  >
                    <div className="p-4 flex items-center justify-center text-center h-full">
                      <div className="relative w-full h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        {partner.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={partner.logo}
                              alt={partner.name}
                              fill
                              sizes="200px"
                              className="object-contain transition-all duration-500"
                            />
                          </div>
                        ) : (
                          <div className="p-3 bg-blue-500/10 rounded-xl">
                            <Globe className="h-8 w-8 text-blue-400" />
                          </div>
                        )}
                      </div>
                    </div>
                  </PremiumCard>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59, 130, 246,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Pronto para Transformar sua Infraestrutura?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de empresas e instituições que já confiam na VIVATEL para sua infraestrutura digital
                soberana.
              </p>
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-8 py-6 text-lg"
              >
                Começar Gratuito
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testemunhos" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59, 130, 246,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Histórias de sucesso de organizações que transformaram sua infraestrutura com VIVATEL.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Evandro Ferreira",
                role: "CTO, MELM Solutions",
                content:
                  "VIVATEL transformou completamente nossa infraestrutura. A segurança e confiabilidade são incomparáveis. Uma solução verdadeiramente soberana para Angola.",
              },
              {
                name: "Maria Santos",
                role: "Diretora de TI, BancoDigital",
                content:
                  "A escalabilidade e performance da plataforma VIVATEL superaram nossas expectativas. O suporte é excelente e os resultados falam por si.",
              },
              {
                name: "Carlos Silva",
                role: "Gerente de Inovação, StartupAngo",
                content:
                  "Finalmente temos infraestrutura digital soberana que nos dá total controle e segurança. VIVATEL é o futuro para o ecossistema digital angolano.",
              },
            ].map((testimonial, index) => (
              <PremiumCard
                key={index}
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-blue-400 fill-blue-400/20" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg italic leading-relaxed mb-8">"{testimonial.content}"</p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-blue-500/10 pt-6">
                    <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-400">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{testimonial.name}</p>
                      <p className="text-sm text-blue-500/60 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4">VIVATEL</div>
              <p className="text-gray-400 text-sm">Infraestrutura Digital Soberana para Angola</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/servicos/cloud" className="hover:text-cyan-400 transition-colors">
                    Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/analytics" className="hover:text-cyan-400 transition-colors">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/security" className="hover:text-cyan-400 transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/conectividade" className="hover:text-cyan-400 transition-colors">
                    Conectividade
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-cyan-400 transition-colors">
                    Todos os Serviços
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/sobre" className="hover:text-cyan-400 transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/documentacao" className="hover:text-cyan-400 transition-colors">
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link href="/suporte" className="hover:text-cyan-400 transition-colors">
                    Suporte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Termos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">© 2026 VIVATEL. Todos os direitos reservados.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Modal Form */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="border-gray-800 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Começar com VIVATEL</DialogTitle>
            <DialogDescription>
              Preencha o formulário para agendar sua demonstração de infraestrutura digital soberana.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-sky-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">
                Empresa
              </Label>
              <Input
                id="company"
                placeholder="Nome da sua empresa"
                value={company}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
                required
                className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-sky-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                Telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+244 923 456 789"
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-sky-500"
              />
            </div>
            <DialogFooter className="pt-4">
              <Button
                type="button"
                onClick={() => setIsModalOpen(false)}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-900"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Agendar Demo"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
