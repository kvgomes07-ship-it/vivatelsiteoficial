"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Activity, Cpu, TrendingDown, Clock } from "lucide-react"

export function IoTBenefits() {
  const benefits = [
    {
      icon: Activity,
      title: "Alta Performance sem Quedas",
      desc: "Links de internet totalmente dedicados e redundantes, garantindo que o seu funil de vendas e sistemas operacionais nunca falham.",
      colSpan: "md:col-span-2",
      color: "cyan"
    },
    {
      icon: Cpu,
      title: "Automação de Processos",
      desc: "Sensores IoT que reagem em tempo a real a anomalias, reduzindo a intervenção humana.",
      colSpan: "md:col-span-1",
      color: "purple"
    },
    {
      icon: ShieldCheck,
      title: "Segurança de Dados E2E",
      desc: "Tráfego corporativo blindado ponto-a-ponto com firewalls físicos integrados na nossa infraestrutura.",
      colSpan: "md:col-span-1",
      color: "green"
    },
    {
      icon: TrendingDown,
      title: "Redução de Custos Operacionais",
      desc: "Sistemas eficientes de gestão inteligente de energia e prevenção de perdas com monitorização ativa 24/7.",
      colSpan: "md:col-span-2",
      color: "orange"
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 z-10 relative">
      {benefits.map((b, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className={`bg-white/[0.02] border border-white/5 p-8 rounded-[32px] backdrop-blur-xl hover:bg-white/[0.05] transition-colors group ${b.colSpan}`}
        >
          <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
            <b.icon className={`h-8 w-8 text-${b.color}-400`} />
          </div>
          <h3 className="text-xl font-black mb-3 text-white">{b.title}</h3>
          <p className="text-gray-400 font-medium leading-relaxed">
            {b.desc}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
