"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function RoboticsHud() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* HUD Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1)_0%,transparent_60%)]" />
      
      {/* Horizontal Scanline with GPU acceleration */}
      <div className="absolute inset-x-0 h-px bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-0 transform-gpu animate-float-particle" style={{ animationDuration: '10s' }} />

      {/* Floating Holograms */}
      <div className="absolute left-[2%] top-[25%] w-32 h-32 md:w-56 md:h-56 z-0 hidden md:flex items-center justify-center animate-float-micro">
        <div className="relative w-full h-full">
           <div className="absolute inset-[-15px] border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite] transform-gpu" />
           <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />
           <Image src="/bot_greenprint.gif" alt="AI Robotics Assistant" fill className="object-contain filter brightness-110 contrast-125" unoptimized />
           <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] font-black text-cyan-400 font-mono tracking-widest uppercase whitespace-nowrap">UNIT_01: ACTIVE</span>
        </div>
      </div>

      <div className="absolute right-[2%] top-[30%] w-40 h-40 md:w-64 md:h-64 z-0 hidden md:flex items-center justify-center animate-float-micro" style={{ animationDelay: '1s' }}>
        <div className="relative w-full h-full">
           <div className="absolute inset-[-15px] border border-cyan-500/10 rounded-full animate-[spin_25s_linear_infinite] transform-gpu" />
           <Image src="/pc_blueprint.gif" alt="System Blueprint" fill className="object-contain filter brightness-125 contrast-110" unoptimized />
           <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] font-black text-cyan-400/40 font-mono tracking-widest uppercase whitespace-nowrap">SYS_X86: COMPILING</span>
        </div>
      </div>
    </div>
  )
}

export function RoboticsSpecs() {
  const specs = [
    { label: "PROCESSAMENTO_NEURAL", value: 92, color: "bg-cyan-500" },
    { label: "SINCRONIA_MOTORA", value: 88, color: "bg-white" },
    { label: "EFICIÊNCIA_BATERIA", value: 95, color: "bg-cyan-600" }
  ]

  return (
    <div className="relative bg-[#020617] border border-cyan-500/20 p-8 rounded-none overflow-hidden">
        <div className="flex justify-between items-center mb-8 border-b border-cyan-900 pb-4">
            <span className="text-xs font-mono text-cyan-500 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" /> 
              SYSTEM_LIVE
            </span>
            <span className="text-xs font-mono text-gray-500 italic">SECURED_CORE</span>
        </div>

        <div className="space-y-8">
            {specs.map((spec, i) => (
                <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{spec.label}</span>
                        <span className="text-[10px] font-mono text-cyan-400">{spec.value}%</span>
                    </div>
                    <div className="h-1 bg-gray-800 w-full relative overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${spec.value}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className={`h-full ${spec.color} shadow-[0_0_10px_rgba(6,182,212,0.5)] transform-gpu`} 
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
