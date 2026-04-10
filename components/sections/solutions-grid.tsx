"use client"

import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { CheckCircle, Radio, Code, Zap, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

// Lazy load visualization components
const CloudPlatform = dynamic(() => import("../interactive/cloud-platform").then(m => ({ default: m.CloudPlatform })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const SecurityPlatform = dynamic(() => import("../interactive/security-platform").then(m => ({ default: m.SecurityPlatform })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const ConnectivityVisualization = dynamic(() => import("../interactive/connectivity-visualization").then(m => ({ default: m.ConnectivityVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const SoftwareVisualization = dynamic(() => import("../interactive/software-visualization").then(m => ({ default: m.SoftwareVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const IoTVisualization = dynamic(() => import("../interactive/iot-visualization").then(m => ({ default: m.IoTVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })
const AcademyVisualization = dynamic(() => import("../interactive/academy-visualization").then(m => ({ default: m.AcademyVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })

export function SolutionsSection() {
  return (
    <section id="soluções" className="py-24 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">Nossas Equipes</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">Explore nossa suíte completa de soluções inovadoras projetadas para transformar sua experiência digital.</p>
        </div>

        <div className="space-y-24">
          {/* VIVATEL Cloud */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-black tracking-tighter">VIVATEL Cloud</h3>
              <p className="text-gray-400 font-medium text-lg">Plataforma em nuvem escalável e soberana que se adapta às suas necessidades. Implante aplicações com facilidade e gerencie recursos de forma eficiente.</p>
              <ul className="space-y-3">
                {["Escalabilidade automática e inteligente", "Infraestrutura geograficamente distribuída", "Preços flexíveis e transparentes", "99.99% de disponibilidade garantida"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-blue-500" /><span className="text-gray-300 font-medium text-sm">{feature}</span></li>
                ))}
              </ul>
              <Link href="/servicos/cloud"><Button className="bg-blue-600 hover:bg-blue-500 font-black tracking-tight text-[12px]">Saiba Mais</Button></Link>
            </div>
            <div className="bg-white/5 border border-white/10 p-1 rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px]">
               <CloudPlatform />
            </div>
          </div>

          {/* VIVATEL Security */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 border border-white/10 p-1 rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] order-2 md:order-1">
               <SecurityPlatform />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-4xl font-black tracking-tighter">VIVATEL Security</h3>
              <p className="text-gray-400 font-medium text-lg">Proteção de segurança de ponta com detecção de ameaças em tempo real e conformidade com regulamentações internacionais.</p>
              <ul className="space-y-3">
                {["Detecção de ameaças com IA avançada", "Criptografia end-to-end de dados", "Conformidade com padrões internacionais", "Auditoria contínua e certificações"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-blue-500" /><span className="text-gray-300 font-medium text-sm">{feature}</span></li>
                ))}
              </ul>
              <Link href="/servicos/security"><Button className="bg-blue-600 hover:bg-blue-500 font-black tracking-tight text-[12px]">Saiba Mais</Button></Link>
              <Link href="/servicos/security"><Button className="bg-blue-600 hover:bg-blue-500 font-black tracking-tight text-[12px]">Saiba mais</Button></Link>
            </div>
          </div>

          {/* VIVATEL Connectivity */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-2">
                  <Radio className="h-3 w-3 text-blue-400" />
                  <span className="text-[10px] text-blue-400 font-black tracking-widest">Digital Core</span>
               </div>
              <h3 className="text-4xl font-black tracking-tighter">Conectividade</h3>
              <p className="text-gray-400 font-medium text-lg">Conectividade soberana com acesso direto aos cabos SACS e MONET. Garantimos baixa latência e alta disponibilidade.</p>
              <ul className="space-y-3">
                {["Acesso Direto ao Backbone", "Rede de Fibra Óptica Nacional", "Soluções 5G Enterprise", "Latência Otimizada"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-blue-500" /><span className="text-gray-300 font-medium text-sm">{feature}</span></li>
                ))}
              </ul>
              <Link href="/servicos/conectividade"><Button className="bg-blue-600 hover:bg-blue-500 font-black tracking-tight text-[12px]">Saiba Mais</Button></Link>
            </div>
            <div className="bg-white/5 border border-white/10 p-1 rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px]">
               <ConnectivityVisualization />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
