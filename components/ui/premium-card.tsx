import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PremiumCardProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  glowPosition?: "top" | "bottom" | "center"
}

export const PremiumCard = ({ 
  children, 
  className, 
  innerClassName,
  glowPosition = "bottom" 
}: PremiumCardProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const glowStyles = {
    top: "radial-gradient(circle at 50% -20%, rgba(59, 130, 246, 0.15), transparent 70%)",
    bottom: "radial-gradient(circle at 50% 120%, rgba(59, 130, 246, 0.15), transparent 70%)",
    center: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)",
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative h-full rounded-[2.5rem] p-[1px] overflow-hidden transition-all duration-300",
        className
      )}
    >
      {/* Animated Border/Glow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Background with Dotted Pattern and Glow */}
      <div 
        className={cn(
          "relative h-full w-full bg-[#050505] rounded-[2.5rem] overflow-hidden backdrop-blur-sm",
          innerClassName
        )}
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.03) 1px, transparent 0),
            ${glowStyles[glowPosition]}
          `,
          backgroundSize: "24px 24px, 100% 100%",
        }}
      >
        {/* Border Overlay */}
        <div className="absolute inset-0 rounded-[2.5rem] border border-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-500" />
        
        {/* Content */}
        <div className="relative z-10 h-full">
          {children}
        </div>

        {/* Shine Effect on Hover */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
          }}
        />
      </div>
    </motion.div>
  )
}
