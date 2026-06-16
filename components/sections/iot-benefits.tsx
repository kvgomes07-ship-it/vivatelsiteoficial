"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Activity, Cpu, TrendingDown, Zap } from "lucide-react"

const BenefitCard = memo(({ b, idx }: { b: any, idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: idx * 0.05 }}
    className={`group relative overflow-hidden bg-white/[0.03] border border-white/10 p-8 rounded-[40px] backdrop-blur-3xl hover:bg-white/[0.05] transition-all duration-500 ${b.colSpan} hover:border-white/20`}
  >
    {/* Decorative Gradient Background - Simplified for performance */}
    <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-10 blur-[64px] transition-opacity duration-700 pointer-events-none`} />
    
    <div className={`mb-8 inline-flex p-5 rounded-3xl bg-gradient-to-br ${b.color} shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1`}>
      {(() => {
        const Icon = b.icon;
        return <Icon className="h-8 w-8 text-white" />;
      })()}
    </div>
    
    <h3 className="text-2xl font-black mb-4 text-white tracking-tight group-hover:text-cyan-400 transition-colors">
      {b.title}
    </h3>
    <p className="text-gray-400 font-medium leading-relaxed text-lg">
      {b.desc}
    </p>
    
    <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <span className="text-[10px] font-black uppercase tracking-widest text-cyan-500">Saber Mais</span>
       <Zap className="h-3 w-3 text-cyan-500" />
    </div>
  </motion.div>
))

BenefitCard.displayName = "BenefitCard"

export const IoTBenefits = memo(function IoTBenefits() {
  const benefits = [
    {
      icon: Activity,
      title: "Alta Performance & Uptime",
      desc: "Links de internet totalmente dedicados e redundantes. O seu funil de operações nunca para, garantindo fluxo contínuo de dados.",
      colSpan: "md:col-span-2",
      color: "from-cyan-500 to-blue-600 shadow-cyan-500/10"
    },
    {
      icon: Cpu,
      title: "Automação Inteligente",
      desc: "Sensores que reagem em tempo real a anomalias, eliminando o erro humano e custos de supervisão manual.",
      colSpan: "md:col-span-1",
      color: "from-purple-500 to-indigo-600 shadow-purple-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Segurança de Grado Militar",
      desc: "Tráfego blindado ponto-a-ponto com firewalls físicos integrados na nossa infraestrutura em Angola.",
      colSpan: "md:col-span-1",
      color: "from-green-500 to-emerald-600 shadow-green-500/20"
    },
    {
      icon: TrendingDown,
      title: "Redução de Custos (ROI)",
      desc: "Eficiência energética e manutenção preventiva que reduzem os custos operacionais em até 30% logo no primeiro trimestre.",
      colSpan: "md:col-span-2",
      color: "from-orange-500 to-red-600 shadow-orange-500/20"
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 z-10 relative">
      {benefits.map((b, idx) => (
        <BenefitCard key={idx} b={b} idx={idx} />
      ))}
    </div>
  )
})
