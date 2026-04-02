"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function MeshBackground() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none select-none bg-[#020403]">
      {/* 1. Neon Green Radial Central Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] rounded-full opacity-60"
        style={{
          background: `radial-gradient(circle, rgba(0, 255, 136, 0.12) 0%, rgba(0, 255, 136, 0.04) 35%, transparent 70%)`,
          filter: "blur(80px)"
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 2. Minimal Tech Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
        }}
      />

      {/* 3. Abstract Fluid/Energy Element at Bottom Center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] mix-blend-screen opacity-70">
          <motion.div 
            className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-[100%] border border-[#00ff88]/20"
            style={{
                background: "radial-gradient(ellipse at top, rgba(0,255,136,0.15) 0%, transparent 70%)",
                filter: "blur(25px)"
            }}
            animate={{ scaleY: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Luminous Wave 1 */}
          <motion.div 
            className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[1000px] h-[250px] rounded-[100%] border-t-[2px] border-[#00ff88]/30"
            style={{ filter: "blur(12px)" }}
            animate={{ y: [0, -25, 0], scaleX: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          {/* Luminous Wave 2 (Sharper) */}
          <motion.div 
            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[600px] h-[150px] rounded-[100%] border-t-[3px] border-[#00ff88]/60"
            style={{ filter: "blur(5px)" }}
            animate={{ y: [0, -15, 0], scaleX: [0.95, 1.05, 0.95], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
      </div>

      {/* 4. Small Bright Particles (Stars/Data Points) */}
      {mounted && (
          <div className="absolute inset-0">
            {[...Array(40)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.8)]"
                    style={{
                        width: Math.random() * 2 + 1 + 'px',
                        height: Math.random() * 2 + 1 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                    animate={{
                        y: [0, Math.random() * -60 - 20],
                        opacity: [0, Math.random() * 0.7 + 0.3, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 7
                    }}
                />
            ))}
          </div>
      )}

      {/* 5. Subtle Grain/Noise Texture for Depth */}
      <div 
        className="absolute inset-0 mix-blend-overlay opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* 6. Deep Dark Vignette for Vignette Backdrop Blend */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, transparent 10%, #020403 90%)`
        }}
      />
    </div>
  )
}
