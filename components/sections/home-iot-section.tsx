"use client"

import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { CheckCircle, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const IoTVisualization = dynamic(() => import("../interactive/iot-visualization").then(m => ({ default: m.IoTVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })

export function HomeIotSection() {
  return (
    <section id="iot" className="py-24 relative overflow-hidden bg-black/40 border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/5 border border-white/10 p-1 rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] order-2 md:order-1">
             <IoTVisualization />
          </div>
          <div className="space-y-6 order-1 md:order-2">
             <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-2">
                <Cpu className="h-3 w-3 text-blue-400" />
                <span className="text-[10px] text-blue-400 font-black tracking-widest">Smart Devices</span>
             </div>
            <h3 className="text-4xl font-black tracking-tighter">VIVATEL IoT</h3>
            <p className="text-gray-400 font-medium text-lg">Conecte e gerencie milhões de dispositivos com nossa infraestrutura de Internet das Coisas projetada para automação e análise em tempo real.</p>
            <ul className="space-y-3">
              {["Monitoramento em tempo real", "Automação inteligente", "Análise preditiva de dados", "Integração perfeita com Cloud"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-blue-500" /><span className="text-gray-300 font-medium text-sm">{feature}</span></li>
              ))}
            </ul>
            <Link href="/servicos/iot"><Button className="bg-blue-600 hover:bg-blue-500 font-black tracking-tight text-[12px]">Saiba Mais</Button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
