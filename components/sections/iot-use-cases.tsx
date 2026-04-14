"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Server, Factory, Building, ShoppingBag, ArrowRight } from "lucide-react"

export function IoTUseCases() {
  const [activeCase, setActiveCase] = useState(0)

  const cases = [
    {
      id: "corporate",
      icon: Server,
      title: "Empresas & IT",
      problem: "Acesso lento a CRMs e falhas de comunicação na cloud paralisam operações.",
      solution: "Link dedicado com baixa latência e failover automático garantem 100% de disponibilidade ao seu ERP e Cloud.",
      results: "Redução de 90% em interrupções e aumento drástico de produtividade.",
      color: "cyan"
    },
    {
      id: "industry",
      icon: Factory,
      title: "Indústrias",
      problem: "Dificuldade na monitorização de máquinas pesadas em tempo real gera tempos de inatividade.",
      solution: "Rede robusta cruzada com sensores IoT preditivos comunicando à base num gateway local seguro.",
      results: "Manutenção automatizada e +30% de eficiência de chão de fábrica.",
      color: "orange"
    },
    {
      id: "hospitality",
      icon: Building,
      title: "Hotéis",
      problem: "Wi-Fi fraco para os hóspedes e elevado custo elétrico em quartos vazios.",
      solution: "Internet gigabit distribuída aliada a termóstatos e acessos IoT unificados no painel central Vivatel.",
      results: "Score Máximo de hóspedes no Booking e -20% em consumo de energia.",
      color: "blue"
    },
    {
      id: "retail",
      icon: ShoppingBag,
      title: "Lojas & Retalho",
      problem: "Sistemas de faturação lentos (POS) e falhas nas câmaras de segurança HD.",
      solution: "Banda larga priorizada para pagamentos e compressão de streaming de vigilância via IoT Hub.",
      results: "Auditoria remota perfeita e processamento de pagamentos sub-segundo.",
      color: "purple"
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 z-10 relative">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Navigation Column */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(idx)}
              className={`text-left p-6 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${
                activeCase === idx 
                ? 'bg-white/10 border-white/20 shadow-lg scale-105' 
                : 'bg-transparent border-transparent hover:bg-white/5 opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`p-3 rounded-xl ${activeCase === idx ? 'bg-cyan-500 text-black' : 'bg-white/10 text-white'}`}>
                <c.icon className="h-6 w-6" />
              </div>
              <span className="font-black text-lg tracking-tight">{c.title}</span>
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="lg:w-2/3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
            {/* Ambient Background Glow based on active case */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="mb-10">
                  <span className="text-[10px] font-black tracking-widest uppercase text-cyan-400 mb-2 block">O Problema</span>
                  <p className="text-xl text-gray-400 font-medium leading-relaxed">
                    {cases[activeCase].problem}
                  </p>
                </div>

                <div className="mb-10 p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl">
                  <span className="text-[10px] font-black tracking-widest uppercase text-white mb-2 block flex items-center gap-2">
                    A Solução Vivatel <ArrowRight className="h-4 w-4 text-cyan-400" />
                  </span>
                  <p className="text-2xl font-black text-white leading-tight">
                    {cases[activeCase].solution}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-green-400 mb-2 block">O Resultado Prático</span>
                  <p className="text-lg text-green-100 font-bold">
                    ✓ {cases[activeCase].results}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
