"use client"

import React, { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"

interface LazyViewProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  className?: string
  once?: boolean
  margin?: string
}

/**
 * LazyView Component
 * 
 * Specifically designed to optimize performance on slow connections (3G/4G).
 * Delays the rendering of children until they are about to enter the viewport.
 * This prevents unnecessary JS execution and chunk downloading for off-screen components.
 */
export function LazyView({ 
  children, 
  fallback = null, 
  className = "", 
  once = true,
  margin = "200px 0px" // Start loading 200px before it enters view
}: LazyViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: margin as any })
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    if (isInView && !hasVisited) {
      setHasVisited(true)
    }
  }, [isInView, hasVisited])

  return (
    <div ref={ref} className={className}>
      {hasVisited ? children : fallback}
    </div>
  )
}
