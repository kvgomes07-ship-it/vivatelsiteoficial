"use client"

import React, { useState, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Factory, Truck, RadioTower, ArrowRight, ShieldCheck } from "lucide-react"

export const IoTUseCases = memo(function IoTUseCases() {
  const [activeCase, setActiveCase] = useState(0)

  const cases = [
    {
      id: "industry",
      icon: Factory,
      title: "Indústria & Produção",
      problem: "Dificuldade na monitorização de máquinas pesadas em tempo real gera tempos de inatividade dispendiosos.",
      solution: "Rede robusta cruzada com sensores IoT preditivos comunicando a um gateway local seguro via rede dedicada Vivatel.",
      results: "Manutenção automatizada e +35% de eficiência no chão de fábrica em unidades fabris em Luanda e Viana.",
      color: "orange"
    },
    {
      id: "logistics",
      icon: Truck,
      title: "Logística & Frota",
      problem: "Falta de visibilidade sobre a localização e estado da carga em rotas interprovinciais críticas.",
      solution: "Rastreamento por satélite e sensores de temperatura/humidade integrados na nossa plataforma de streaming real-time.",
      results: "Redução de 40% em perdas de carga e otimização total de rotas para o interior de Angola.",
      color: "cyan"
    },
    {
      id: "telecom",
      icon: RadioTower,
      title: "Telecom & Infraestrutura",
      problem: "Monitorização ineficiente de torres remotas e subestações, levando a falhas de serviço prolongadas.",
      solution: "NOC centralizado com telemetria via IoT para gestão de energia, combustíveis e segurança física de sites remotos.",
      results: "Uptime de 99.99% garantido e redução drástica em custos de deslocação para manutenção reativa.",
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
              <div className={`p-3 rounded-xl transition-colors ${activeCase === idx ? 'bg-cyan-500 text-black' : 'bg-white/10 text-white'}`}>
                {(() => {
                  const Icon = c.icon;
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>
              <span className="font-black text-lg tracking-tight">{c.title}</span>
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="lg:w-2/3 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden min-h-[450px] flex flex-col justify-center shadow-2xl">
            {/* Ambient Background Glow based on active case - Simplified */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 blur-[64px] rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-1 w-8 bg-red-500 rounded-full" />
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-red-500">O Problema Real</span>
                  </div>
                  <p className="text-xl text-gray-400 font-medium leading-relaxed">
                    "{cases[activeCase].problem}"
                  </p>
                </div>

                <div className="mb-10 p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    {(() => {
                      const Icon = cases[activeCase].icon;
                      return <Icon className="h-24 w-24 text-cyan-500" />;
                    })()}
                  </div>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white mb-3 block flex items-center gap-2">
                    A Solução Tecnológica Vivatel <ArrowRight className="h-4 w-4 text-cyan-400" />
                  </span>
                  <p className="text-2xl font-black text-white leading-tight">
                    {cases[activeCase].solution}
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-7 w-7 text-green-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-green-500 mb-1 block">O Resultado Mensurável</span>
                    <p className="text-lg text-green-100 font-bold">
                      {cases[activeCase].results}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>
  )
})
