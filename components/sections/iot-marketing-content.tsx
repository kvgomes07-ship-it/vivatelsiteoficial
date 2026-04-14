"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Activity, Zap, Shield, PlayCircle } from "lucide-react"
import { IoTStreamDashboard } from "@/components/interactive/iot-stream-dashboard"
import { IoTBenefits } from "@/components/sections/iot-benefits"
import { IoTUseCases } from "@/components/sections/iot-use-cases"
import { IoTPricePlans } from "@/components/sections/iot-pricing"
import { IoTTestimonials } from "@/components/sections/iot-testimonials"

export function IoTMarketingContent() {
  return (
    <div className="w-full flex flex-col gap-32 pb-40">
      {/* SECTION 1: HERO */}
      <section className="relative pt-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center gap-2 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Novo Serviço Empresarial</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.1] text-white">
            Internet Dedicada + IoT para<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Operações em Tempo Real
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 font-medium max-w-3xl mb-10 leading-relaxed">
            Alta velocidade, baixa latência e monitorização inteligente de infraestruturas para transformar e proteger a operação da sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-sm rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2">
              Solicitar Demonstração <ArrowRight className="h-4 w-4" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black uppercase tracking-widest text-sm rounded-xl transition-all flex items-center justify-center gap-2">
              Ver Planos <ChevronRight className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </motion.div>

        {/* SECTION 4: VISUAL DEMONSTRATION (Dashboard Embedded as Hero Visual) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full relative"
        >
          {/* Glow Behind Dashboard */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative border border-white/10 rounded-[40px] bg-black/40 backdrop-blur-2xl p-4 md:p-8 shadow-2xl">
            <IoTStreamDashboard />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: EXPLANATION */}
      <section className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">A Sinergia Perfeita</h2>
          <p className="text-gray-400 text-lg">Unimos conectividade brutal com inteligência sensorial.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ y: -5 }} className="p-10 rounded-[40px] bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 transition-all flex flex-col items-center text-center">
            <Zap className="h-12 w-12 text-blue-400 mb-6" />
            <h3 className="text-2xl font-black mb-4">Conectividade Stream</h3>
            <p className="text-gray-400 font-medium mb-6">A espinha dorsal fiável da sua empresa. Redes otimizadas para tráfego pesado.</p>
            <ul className="text-left space-y-3 w-full max-w-sm">
              <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><ChevronRight className="h-4 w-4 text-blue-500" /> Internet 100% Dedicada</li>
              <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><ChevronRight className="h-4 w-4 text-blue-500" /> Latência Sub-Milissegundo</li>
              <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><ChevronRight className="h-4 w-4 text-blue-500" /> SLA de Alta Estabilidade</li>
            </ul>
          </motion.div>
          
          <motion.div whileHover={{ y: -5 }} className="p-10 rounded-[40px] bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 transition-all flex flex-col items-center text-center">
            <Activity className="h-12 w-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-black mb-4">Inteligência IoT</h3>
            <p className="text-gray-400 font-medium mb-6">Dispositivos comunicando autonomamente para prever falhas antes de acontecerem.</p>
            <ul className="text-left space-y-3 w-full max-w-sm">
              <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><ChevronRight className="h-4 w-4 text-purple-500" /> Milhares de Dispositivos Conectados</li>
              <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><ChevronRight className="h-4 w-4 text-purple-500" /> Automação de Infraestruturas</li>
              <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><ChevronRight className="h-4 w-4 text-purple-500" /> Painel de Monitorização Real-Time</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: BENEFITS */}
      <section className="w-full">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Foco nos Resultados</h2>
          <p className="text-gray-400 text-lg">O que o seu negócio ganha ao transitar para a Vivatel.</p>
        </div>
        <IoTBenefits />
      </section>

      {/* SECTION 5: USE CASES */}
      <section className="w-full relative py-20">
        <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5" />
        <div className="text-center mb-16 relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Soluções por Setor</h2>
          <p className="text-gray-400 text-lg">Adaptabilidade cibernética para o seu mercado.</p>
        </div>
        <IoTUseCases />
      </section>

      {/* SECTION 6: PRICING */}
      <section className="w-full">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Planos Escaláveis</h2>
          <p className="text-gray-400 text-lg">Desenvolvidos para operações exigentes.</p>
        </div>
        <IoTPricePlans />
      </section>

      {/* SECTION 7: SECURITY & SLA */}
      <section className="max-w-6xl mx-auto px-4 w-full">
        <div className="p-12 md:p-20 rounded-[40px] bg-[url('/noise.png')] bg-black border border-white/10 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-cyan-900/10" />
          
          <div className="flex-1 relative z-10">
            <div className="inline-flex p-4 rounded-2xl bg-green-500/10 border border-green-500/20 mb-8">
              <Shield className="h-8 w-8 text-green-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Segurança Nível Bancário</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Garantimos <strong className="text-white">99.9% de uptime</strong>. A nossa infraestrutura possui redundância geográfica, roteamento BGP robusto e proteção física de nós IoT. Quando o seu negócio não pode parar, ele corre na Vivatel.
            </p>
            
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-lg transition-all flex items-center gap-2">
              Ver Especificações Técnicas <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex-1 relative z-10 flex justify-center">
             <div className="relative w-64 h-64">
               <div className="absolute inset-0 border-4 border-dashed border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
               <div className="absolute inset-4 border-2 border-green-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
               <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-5xl font-black text-white">99.9%</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mt-2">SLA GARANTIDO</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SOCIAL PROOF */}
      <section className="w-full">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Empresas Confiam</h2>
          <p className="text-gray-400 text-lg">Casos reais do mercado angolano.</p>
        </div>
        <IoTTestimonials />
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="w-full max-w-5xl mx-auto px-4 mt-20">
        <div className="p-16 md:p-24 rounded-[40px] bg-gradient-to-br from-cyan-900/40 via-black to-blue-900/40 border-2 border-cyan-500/30 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.2)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
              Pronto para elevar a sua empresa?
            </h2>
            <p className="text-xl text-gray-300 font-medium mb-12 max-w-2xl mx-auto">
              Fale com a nossa equipa de engenharia e descubra o plano que se adequa perfeitamente à sua infraestrutura.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-sm rounded-xl transition-all shadow-[0_0_40px_rgba(6,182,212,0.5)]">
                Falar com Especialista
              </button>
              <button className="px-10 py-5 bg-black hover:bg-white/5 border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-xl transition-all flex items-center justify-center gap-2">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
