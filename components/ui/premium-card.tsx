"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface PremiumCardProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  variant?: "default" | "mesh"
}

export const PremiumCard = ({ 
  children, 
  className, 
  innerClassName,
  variant = "default"
}: PremiumCardProps) => {
  return (
    <div
      className={cn(
        "group relative h-full rounded-[2.5rem] border border-white/5 bg-[#08080c] overflow-hidden",
        "hover:border-blue-500/30 hover:scale-[1.02]",
        className
      )}
      style={{ 
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Premium smooth spring-like curve
        boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.5)" // Built-in structural depth
      }}
    >
      {/* Soft inner radial light for static depth */}
      <div className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 60%)"
        }}
      />

      {/* Visual Depth Elements */}
      {variant === "mesh" && (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
      )}

      {/* Hover Glow Accent — enhanced multi-directional glow */}
      <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-blue-400/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
      <div className="absolute -inset-[1px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
        style={{ boxShadow: "0 0 30px rgba(59,130,246,0.1), inset 0 1px 0 rgba(59,130,246,0.2)" }}
      />

      {/* Clean content container */}
      <div className={cn("relative z-10 h-full w-full", innerClassName)}>
        {children}
      </div>
    </div>
  )
}
