"use client"

import React from "react"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export function IoTTestimonials() {
  const testimonials = [
    {
      company: "TransLogística Angola",
      role: "Diretor de Operações",
      content: "Desde que migrámos para o link dedicado aliado à monitorização IoT da Vivatel, a nossa frota portuária nunca mais ficou offline. A redução de 40% nas quebras de comunicação pagou o sistema no primeiro mês.",
      rating: 5
    },
    {
      company: "Rede Hoteleira Baía",
      role: "CTO",
      content: "Gerir o Wi-Fi de 300 quartos e a climatização inteligente parecia um pesadelo técnico até integrar o NOC da Vivatel. Alta disponibilidade real e um suporte técnico excecional.",
      rating: 5
    },
    {
      company: "Indústria Agro-Sul",
      role: "Gestor de Infraestrutura",
      content: "Usamos os sensores IoT para mapear humidade nos silos interligados via fibra Vivatel. A latência de milissegundos permite-nos automatizar comportas em tempo real. Essencial para o nosso negócio.",
      rating: 5
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 z-10 relative">
      {testimonials.map((test, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-white/[0.02] border border-white/5 p-8 rounded-[32px] backdrop-blur-xl hover:bg-white/[0.04] transition-colors relative"
        >
          <Quote className="absolute top-6 right-6 h-8 w-8 text-cyan-500/20" />
          
          <div className="flex gap-1 mb-6">
            {[...Array(test.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            ))}
          </div>

          <p className="text-gray-300 font-medium leading-relaxed mb-8 relative z-10">
            "{test.content}"
          </p>

          <div className="mt-auto border-t border-white/10 pt-6">
            <h4 className="font-black text-white">{test.company}</h4>
            <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">{test.role}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
