"use client"

import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { CheckCircle, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const PlayVisualization = dynamic(() => import("../interactive/play-visualization").then(m => ({ default: m.PlayVisualization })), { ssr: false, loading: () => <div className="w-full h-full bg-gray-900/50 animate-pulse rounded-lg" /> })

export function HomePlaySection() {
  return (
    <section id="play" className="py-24 relative overflow-hidden bg-black/60 border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1 mb-2">
                <PlayCircle className="h-3 w-3 text-purple-400" />
                <span className="text-[10px] text-purple-400 font-black tracking-widest">Entretenimento</span>
             </div>
            <h3 className="text-4xl font-black tracking-tighter">VIVATEL Play</h3>
            <p className="text-gray-400 font-medium text-lg">A mais inovadora plataforma de streaming com os melhores filmes, séries e canais ao vivo. Entretenimento imersivo para toda a família.</p>
            <ul className="space-y-3">
              {["Streaming em 4K e HDR", "Conteúdo original e exclusivo", "Transmissões de esportes ao vivo", "Disponível em todos os dispositivos"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-purple-500" /><span className="text-gray-300 font-medium text-sm">{feature}</span></li>
              ))}
            </ul>
            <Link href="https://vivatelplay.com/" target="_blank" rel="noopener noreferrer">
              <Button className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-purple-400 hover:to-pink-400 text-white font-black tracking-tight text-[12px] shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300">
                <span className="relative z-10">▶ Assistir VivaTel Play</span>
              </Button>
            </Link>
          </div>
          <div className="bg-white/5 border border-white/10 p-1 rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px]">
             <PlayVisualization />
          </div>
        </div>
      </div>
    </section>
  )
}
