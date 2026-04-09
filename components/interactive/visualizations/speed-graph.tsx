"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

export function SpeedGraph() {
    const [data, setData] = useState<number[]>(Array(20).fill(0))
    const ref = useRef(null)
    const isInView = useInView(ref)
    
    useEffect(() => {
        if (!isInView) return

        const interval = setInterval(() => {
            setData(prev => {
                const nextValue = 480 + Math.random() * 40 // Simulate 480-520 Mbps
                return [...prev.slice(1), nextValue]
            })
        }, 800)
        return () => clearInterval(interval)
    }, [isInView])

    const max = 600
    const width = 400
    const height = 150
    const step = width / (data.length - 1)

    const points = data.map((v, i) => `${i * step},${height - (v / max) * height}`).join(" ")

    return (
        <div ref={ref} className="relative w-full h-40 bg-[#090e1a]/50 rounded-2xl border border-white/5 p-4 overflow-hidden backdrop-blur-md">
            <div className="absolute top-4 left-4 z-10">
                <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1">Status da Rede</div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white tabular-nums">
                        {Math.round(data[data.length - 1])}
                    </span>
                    <span className="text-xs text-gray-400 font-medium tracking-tight">Mbps</span>
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="grid grid-cols-10 grid-rows-5 w-full h-full">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div key={i} className="border-[0.5px] border-white/10" />
                    ))}
                </div>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible translate-y-4">
                <defs>
                    <linearGradient id="speedGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                </defs>
                
                {/* Area Fill */}
                <motion.path
                    d={`M0,${height} L${points} L${width},${height} Z`}
                    fill="url(#speedGradient)"
                    initial={false}
                    animate={{ d: `M0,${height} L${points} L${width},${height} Z` }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />

                {/* Main Line */}
                <motion.polyline
                    points={points}
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={false}
                    animate={{ points }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                    filter="drop-shadow(0 0 8px rgba(34,211,238,0.5))"
                />

                {/* Pulse at the end */}
                <motion.circle
                    cx={width}
                    cy={height - (data[data.length - 1] / max) * height}
                    r="4"
                    fill="#fff"
                    animate={{ r: [4, 8, 4], opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                />
            </svg>
        </div>
    )
}
