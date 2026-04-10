"use client"

import React from "react"

interface HoverGlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    glowColor?: string
}

export function HoverGlowCard({ 
    children, 
    className = "", 
    ...props 
}: HoverGlowCardProps) {
    return (
        <div
            className={`group relative overflow-hidden transition-all duration-300 rounded-[2rem] border border-white/10 bg-[#0c0c12] hover:border-cyan-500/40 hover:bg-[#11111a] ${className}`}
            {...props}
        >
            {/* Inner content wrapper */}
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </div>
    )
}
