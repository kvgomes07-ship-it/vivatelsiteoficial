"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
}

export function Marquee({ children, speed = 30 }: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div 
      className="flex overflow-hidden relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{
          x: isPaused ? undefined : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap min-w-max py-4"
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
