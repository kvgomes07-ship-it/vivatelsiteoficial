"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

export function IoTFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Qual é o tempo médio de instalação do serviço?",
      answer: "Para empresas em áreas cobertas pela nossa rede principal, o tempo médio de ativação é de 3 a 5 dias úteis, incluindo a configuração de nós IoT se solicitado."
    },
    {
      question: "A Vivatel oferece suporte técnico especializado 24/7?",
      answer: "Sim. Nossos clientes Enterprise e Pro possuem acesso direto a uma linha de suporte prioritária e monitorização proativa do nosso NOC (Network Operations Center)."
    },
    {
      question: "Posso integrar meus sensores IoT já existentes na rede?",
      answer: "Sim, nossa infraestrutura é compatível com os principais protocolos do mercado (MQTT, HTTP, LoRaWAN). Nossa equipa de engenharia pode auxiliar na migração."
    },
    {
      question: "O que acontece se houver uma falha no link principal?",
      answer: "Nossos links dedicados possuem rotas de redundância automática. Em caso de falha física, o tráfego é desviado instantaneamente para garantir o uptime de 99.9%."
    }
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 w-full z-10 relative">
      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center gap-4">
                <HelpCircle className="h-5 w-5 text-cyan-500" />
                <span className="font-bold text-lg text-white">{faq.question}</span>
              </div>
              <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-gray-400 font-medium border-t border-white/5 bg-black/20">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
