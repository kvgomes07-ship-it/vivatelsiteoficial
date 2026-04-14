"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Zap } from "lucide-react"

export function IoTPricePlans() {
  const plans = [
    {
      name: "Basic",
      target: "Pequenas Operações",
      speed: "100 Mbps",
      price: "Sob Consulta",
      features: ["Conexão Fibra Dedicada", "Suporte Padrão 8/5", "Dashboard Básico", "SLA 99.5%"],
      color: "blue"
    },
    {
      name: "Pro",
      target: "Empresas em Crescimento",
      speed: "500 Mbps",
      price: "Sob Consulta",
      popular: true,
      features: ["Link Dedicado Simétrico", "1 IP Fixo Incluído", "Suporte Prioritário 24/7", "SLA 99.8%", "Acesso ao Dashboard IoT"],
      color: "cyan"
    },
    {
      name: "Enterprise",
      target: "Missão Crítica",
      speed: "10 Gbps+",
      price: "Projetos Fechados",
      features: ["Internet + IoT Completo", "Monitorização Proativa NOC", "Integração Personalizada", "SLA 99.99%", "Redundância Autónoma"],
      color: "purple"
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 z-10 relative">
      {plans.map((plan, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          whileHover={{ y: -10 }}
          className={`relative rounded-[32px] p-8 bg-white/[0.02] border transition-all duration-300 backdrop-blur-xl flex flex-col ${
            plan.popular ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-white/[0.04]' : 'border-white/10 hover:border-white/20'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
              <Zap className="h-3 w-3" /> MAIS ESCOLHIDO
            </div>
          )}
          
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">{plan.target}</p>
          </div>

          <div className="mb-8">
            <div className="text-5xl font-black tracking-tighter text-white drop-shadow-md mb-2">{plan.speed}</div>
            <div className="text-sm font-bold text-gray-400">{plan.price}</div>
          </div>

          <ul className="space-y-4 mb-10 flex-1">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex flex-start gap-4">
                <CheckCircle className={`h-5 w-5 shrink-0 ${plan.popular ? 'text-cyan-400' : 'text-gray-600'}`} />
                <span className="text-gray-300 text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 ${
            plan.popular 
            ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]' 
            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
          }`}>
            Contratar Agora
          </button>
        </motion.div>
      ))}
    </div>
  )
}
