"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Code, Shield, Brain, Radio, Database, Zap, BookOpen 
} from "lucide-react"
import { PremiumCard } from "../ui/premium-card"
import {
  SoftwarePreview,
  SecurityPreview,
  CloudPreview,
  ConnectivityPreview,
  AIDataPreview,
  IoTStreamPreview,
  AcademyPreview,
} from "../interactive/service-card-previews"

function PremiumIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="relative mb-6 inline-block">
      <div className="relative z-10 p-4 rounded-2xl bg-white/[0.05] border border-white/10 transition-all duration-300 group-hover:bg-blue-500/[0.08] group-hover:border-blue-500/20">
        <Icon className="h-8 w-8 text-blue-500 relative z-10" />
      </div>
    </div>
  )
}

const features = [
  { icon: Code, title: "Software", description: "Desenvolvimento, APIs robustas e workflows automatizados para acelerar time-to-market.", href: "/servicos/software", previewKey: "software" as const },
  { icon: Shield, title: "Segurança Avançada", description: "Proteção de nível empresarial com criptografia end-to-end e conformidade regulatória.", href: "/servicos/security", previewKey: "security" as const },
  { icon: Brain, title: "Cloud", description: "Infraestrutura em nuvem para servidores, hospedagem, escalabilidade e alta disponibilidade.", href: "/servicos/cloud", previewKey: "cloud" as const },
  { icon: Radio, title: "Conectividade", description: "Infraestrutura de conectividade soberana com banda larga, 5G e redundância garantida.", href: "/servicos/conectividade", previewKey: "connectivity" as const },
  { icon: Database, title: "AI & DATA", description: "Processamento de dados em tempo real com modelos de IA personalizados.", href: "/servicos/analytics", previewKey: "aidata" as const },
  { icon: Zap, title: "Stream & IoT", description: "Streaming de dados em tempo real, robótica industrial e IoT para automação completa.", href: "/servicos/iot-stream", previewKey: "iot" as const },
  { icon: BookOpen, title: "Academias & Labs", description: "Programas de formação, certificação e inovação para desenvolver talento local.", href: "/servicos/academias", previewKey: "academy" as const },
]

const previewComponents: Record<string, React.FC<{ isActive: boolean }>> = {
  software: SoftwarePreview,
  security: SecurityPreview,
  cloud: CloudPreview,
  connectivity: ConnectivityPreview,
  aidata: AIDataPreview,
  iot: IoTStreamPreview,
  academy: AcademyPreview,
}

function ServiceCard({ feature }: { feature: typeof features[number] }) {
  const [isHovered, setIsHovered] = useState(false)
  const PreviewComponent = previewComponents[feature.previewKey]

  return (
    <Link 
      href={feature.href}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <PremiumCard className="h-full border-white/10">
        <div className="p-8 h-full flex flex-col relative">
          {/* Preview layer — positioned behind text with blur overlay */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]"
            aria-hidden="true"
          >
            {/* Preview animation */}
            <div className="absolute inset-0 p-6 pt-20">
              <PreviewComponent isActive={isHovered} />
            </div>
            {/* Blur + gradient overlay for text readability */}
            <div
              className="absolute inset-0 transition-all pointer-events-none"
              style={{
                transitionDuration: "400ms",
                background: isHovered
                  ? "transparent"
                  : "linear-gradient(to bottom, rgba(8,8,12,0.95) 0%, rgba(8,8,12,0.8) 40%, rgba(8,8,12,0.4) 100%)",
                backdropFilter: isHovered ? "blur(0px)" : "blur(4px)",
              }}
            />
          </div>

          {/* Content — fades out on hover */}
          <div 
            className="relative z-10 transition-opacity duration-400 ease-out"
            style={{ opacity: isHovered ? 0 : 1 }}
          >
            <PremiumIcon icon={feature.icon} />
            <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
              {feature.title}
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              {feature.description}
            </p>
          </div>

          {/* Explore hint — fades out on hover */}
          <div
            className="relative z-10 mt-auto pt-4 flex items-center gap-2 text-[11px] font-bold tracking-widest text-blue-500 transition-opacity duration-400 ease-out"
            style={{ opacity: isHovered ? 0 : 0.5 }}
          >
            <span>EXPLORAR</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.5 3L9.5 7L5.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </PremiumCard>
    </Link>
  )
}

export function FeaturesGrid() {
  return (
    <section id="recursos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">Ecossistema VIVATEL</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Plataforma completa com ferramentas especializadas para transformar sua infraestrutura digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ServiceCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
