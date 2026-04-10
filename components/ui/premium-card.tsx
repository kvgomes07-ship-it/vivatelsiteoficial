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
        "group relative h-full rounded-[2.5rem] border border-white/5 bg-[#08080c] transition-all duration-500 hover:border-blue-500/30",
        className
      )}
    >
      {/* Visual Depth Elements */}
      {variant === "mesh" && (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
      )}

      {/* Hover Glow Accent */}
      <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Clean content container */}
      <div className={cn("relative z-10 h-full w-full", innerClassName)}>
        {children}
      </div>
    </div>
  )
}
