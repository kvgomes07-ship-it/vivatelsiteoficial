"use client"

import React, { useRef, useState, useEffect } from "react"

interface HoverGlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    glowColor?: string
}

export function HoverGlowCard({ 
    children, 
    className = "", 
    glowColor = "rgba(168, 85, 247, 0.15)", // Default purple glow
    ...props 
}: HoverGlowCardProps) {
    const divRef = useRef<HTMLDivElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return

        const div = divRef.current
        const rect = div.getBoundingClientRect()

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleFocus = () => {
        setIsFocused(true)
        setOpacity(1)
    }

    const handleBlur = () => {
        setIsFocused(false)
        setOpacity(0)
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`group relative overflow-hidden transition-all duration-500 rounded-3xl border border-white/5 bg-[#131c31]/50 backdrop-blur-xl ${className}`}
            {...props}
        >
            {/* Ultra Premium Glass Texture - Baked in */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50"></div>
            
            {/* Ambient Top Light Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none group-hover:via-cyan-400/40 transition-all duration-700"></div>

            <div
                className={`pointer-events-none absolute -inset-px transition-opacity duration-700 z-0 ${opacity === 1 ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
                }}
            />
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </div>
    )
}
