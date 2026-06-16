"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, Users, Cpu, Clock, CheckCircle2 } from "lucide-react"
import { QuoteButton } from "@/components/interactive/buttons/quote-button"

export function IoTPriceSimulator() {
  const [step, setStep] = useState(1)
  const [users, setUsers] = useState(50)
  const [nodes, setNodes] = useState(10)
  const [needs247, setNeeds247] = useState(false)

  const getRecommendation = () => {
    if (users > 500 || nodes > 100) return { name: "Enterprise", color: "purple" }
    if (users > 100 || nodes > 20 || needs247) return { name: "Pro", color: "cyan" }
    return { name: "Basic", color: "blue" }
  }

  const recommendation = getRecommendation()

  return (
    <div className="max-w-4xl mx-auto px-4 w-full z-10 relative">
      <div className="bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Calculator className="h-48 w-48 text-white" />
        </div>

        <div className="relative z-10">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-black mb-2 tracking-tight">Simulador de Plano Ideal</h2>
            <p className="text-gray-400">Responda 3 perguntas para descobrir a melhor configuração para o seu negócio.</p>
          </div>

          <div className="grid gap-12">
            {/* Question 1: Users */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-cyan-500" />
                <label className="font-bold text-white uppercase tracking-widest text-xs">Utilizadores na Rede: <span className="text-cyan-400 ml-2">{users}+</span></label>
              </div>
              <input 
                type="range" 
                min="10" 
                max="1000" 
                step="10" 
                value={users} 
                onChange={(e) => setUsers(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-black">
                 <span>STARTUP (10)</span>
                 <span>CORPORATE (1000)</span>
              </div>
            </div>

            {/* Question 2: IoT Nodes */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5 text-purple-500" />
                <label className="font-bold text-white uppercase tracking-widest text-xs">Nós/Dispositivos IoT: <span className="text-purple-400 ml-2">{nodes}+</span></label>
              </div>
              <input 
                type="range" 
                min="0" 
                max="500" 
                step="5" 
                value={nodes} 
                onChange={(e) => setNodes(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
               <div className="flex justify-between text-[10px] text-gray-500 font-black">
                 <span>MÍNIMO (0)</span>
                 <span>MASSIVO (500)</span>
              </div>
            </div>

            {/* Question 3: Support */}
            <div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 cursor-pointer" onClick={() => setNeeds247(!needs247)}>
               <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${needs247 ? 'bg-cyan-500 border-cyan-500' : 'border-white/20'}`}>
                    {needs247 && <CheckCircle2 className="h-4 w-4 text-black" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-white flex items-center gap-2">Requer Suporte Prioritário 24/7 <Clock className="h-3 w-3 text-cyan-500" /></span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Monitorização Proativa NOC</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
               <span className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em] mb-2 block">Recomendação Vivatel</span>
               <div className="flex items-center gap-4">
                  <div className={`px-8 py-3 rounded-2xl bg-${recommendation.color}-500/10 border border-${recommendation.color}-500/30 text-${recommendation.color}-400 font-black text-2xl tracking-tighter shadow-lg`}>
                    {recommendation.name}
                  </div>
                  <div className="hidden md:block">
                     <p className="text-xs text-gray-400 font-medium max-w-[180px]">Configuração ideal baseada na sua carga operacional atual.</p>
                  </div>
               </div>
             </div>

             <QuoteButton serviceName={`VIVATEL IoT Simulador - Plano ${recommendation.name}`}>
               <button className={`px-10 py-5 bg-${recommendation.color}-500 hover:bg-${recommendation.color}-400 text-black font-black uppercase tracking-widest text-sm rounded-xl transition-all shadow-xl cursor-pointer`}>
                  Configurar Este Plano
               </button>
             </QuoteButton>
          </div>
        </div>
      </div>
    </div>
  )
}
