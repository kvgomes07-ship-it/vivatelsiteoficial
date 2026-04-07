"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"

export function ConnectivityVisualization() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Generate random nodes only once
    const nodes = useMemo(() => Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
    })), [])

    // Generate connections only once
    const connections = useMemo(() => nodes.flatMap((node, i) =>
        nodes.slice(i + 1).filter(() => Math.random() > 0.85).map(target => ({
            source: node,
            target: target,
            id: `${node.id}-${target.id}`
        }))
    ), [nodes])

    if (!mounted) return null

    return (
        <div className="w-full h-full min-h-[300px] md:min-h-[400px] bg-gray-950/50 relative overflow-hidden flex flex-col">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            {/* Main Visualization Area */}
            <div className="relative flex-1 w-full overflow-hidden">
                {/* Nodes and Lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                        </linearGradient>
                    </defs>
                    {connections.map((conn) => (
                        <motion.line
                            key={conn.id}
                            x1={`${conn.source.x}%`}
                            y1={`${conn.source.y}%`}
                            x2={`${conn.target.x}%`}
                            y2={`${conn.target.y}%`}
                            stroke="url(#lineGradient)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, delay: Math.random() * 2 }}
                        />
                    ))}
                {/* Animated Data Packets */}
                {connections.slice(0, 15).map((conn, i) => (
                    <motion.circle
                        key={`packet-${i}`}
                        r="1.2"
                        fill="#3b82f6"
                        className="shadow-[0_0_5px_#3b82f6]"
                        animate={{
                            cx: [`${conn.source.x}%`, `${conn.target.x}%`],
                            cy: [`${conn.source.y}%`, `${conn.target.y}%`],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 1.5 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
                </svg>

                {/* Central Pulse Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 2, 4], opacity: [0.2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                        className="w-20 h-20 rounded-full border border-blue-500/20"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.5, 3], opacity: [0.3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }}
                        className="absolute inset-0 w-20 h-20 rounded-full border border-blue-400/10"
                    />
                    <div className="absolute inset-0 w-20 h-20 bg-blue-500/5 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_25px_rgba(59,130,246,1)]" />
                    </div>
                </div>

                {/* Perspective Nodes */}
                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        className="absolute rounded-full bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.6)] z-0"
                        style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            width: node.size,
                            height: node.size,
                            transform: 'translate(-50%, -50%)'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: Math.random() * 1.5 }}
                        whileHover={{ scale: 2, backgroundColor: "#60a5fa" }}
                    />
                ))}

                {/* Data Center Labels */}
                <motion.div
                    className="absolute top-[15%] right-[10%] bg-blue-950/40 backdrop-blur-md border border-blue-500/20 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400 z-20"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="flex items-center gap-2">
                        Luanda <span className="w-1 h-1 rounded-full bg-blue-400" /> 2ms
                    </span>
                </motion.div>

                <motion.div
                    className="absolute bottom-[20%] left-[8%] bg-blue-950/40 backdrop-blur-md border border-blue-500/20 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400 z-20"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <span className="flex items-center gap-2">
                        São Paulo <span className="w-1 h-1 rounded-full bg-blue-400" /> 68ms
                    </span>
                </motion.div>
            </div>
        </div>
    )
}
