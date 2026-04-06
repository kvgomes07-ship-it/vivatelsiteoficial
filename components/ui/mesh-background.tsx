"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function MeshBackground() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none select-none bg-[#020403]">
      {/* 1. Neon Green Radial Central Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] rounded-full opacity-40 blur-[100px] animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)`,
        }}
      />

      {/* 2. Minimal Tech Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
        }}
      />

      {/* 3. Luminous Waves (Optimized with CSS only) */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] opacity-40">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-[100%] border-t-[1px] border-[#00ff88]/20 blur-[20px] animate-float-micro" />
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[1000px] h-[200px] rounded-[100%] border-t-[2px] border-[#00ff88]/10 blur-[40px]" />
      </div>

      {/* 4. Optimized Particles (One single layer with CSS Background) */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(1.5px 1.5px at 15% 25%, #00ff88 100%, transparent 0),
                            radial-gradient(1.5px 1.5px at 45% 65%, #00ff88 100%, transparent 0),
                            radial-gradient(1.5px 1.5px at 85% 15%, #00ff88 100%, transparent 0),
                            radial-gradient(2px 2px at 30% 90%, #00ff88 100%, transparent 0),
                            radial-gradient(2px 2px at 70% 40%, #00ff88 100%, transparent 0)`,
          backgroundSize: '300px 300px',
        }}
      />
      
      {/* 5. Deep Dark Vignette for Backdrop Blend */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020403_95%)]" />
    </div>
  )
}
