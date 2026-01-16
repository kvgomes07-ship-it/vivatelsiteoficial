"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ConnectivityVisualization() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    // Generate random nodes
    const nodes = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
    }))

    // Generate connections
    const connections = nodes.flatMap((node, i) =>
        nodes.slice(i + 1).filter(() => Math.random() > 0.85).map(target => ({
            source: node,
            target: target,
            id: `${node.id}-${target.id}`
        }))
    )

    return (
        <div className="w-full h-full bg-gray-950 relative overflow-hidden flex items-center justify-center border border-gray-800 rounded-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="relative w-full h-full max-w-md max-h-md p-8">
                {/* Central Pulse */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                        animate={{ scale: [1, 2, 3], opacity: [0.5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                        className="w-20 h-20 rounded-full border border-cyan-500/50"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                        className="absolute inset-0 w-20 h-20 rounded-full border border-cyan-400/30"
                    />
                    <div className="absolute inset-0 w-20 h-20 bg-cyan-500/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]" />
                    </div>
                </div>

                {/* Nodes and Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {connections.map((conn) => (
                        <motion.line
                            key={conn.id}
                            x1={`${conn.source.x}%`}
                            y1={`${conn.source.y}%`}
                            x2={`${conn.target.x}%`}
                            y2={`${conn.target.y}%`}
                            stroke="rgba(34, 211, 238, 0.2)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: Math.random() * 2 }}
                        />
                    ))}
                    {/* Animated Packets */}
                    {connections.slice(0, 5).map((conn, i) => (
                        <motion.circle
                            key={`packet-${i}`}
                            r="2"
                            fill="#22d3ee"
                            animate={{
                                cx: [`${conn.source.x}%`, `${conn.target.x}%`],
                                cy: [`${conn.source.y}%`, `${conn.target.y}%`],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2 + Math.random(),
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </svg>

                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        className="absolute rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            width: node.size,
                            height: node.size,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: Math.random() * 1 }}
                        whileHover={{ scale: 1.5, backgroundColor: "#22d3ee" }}
                    />
                ))}

                {/* Floating Labels */}
                <motion.div
                    className="absolute top-[20%] right-[10%] bg-black/80 backdrop-blur border border-cyan-500/30 px-3 py-1 rounded text-xs text-cyan-400"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    Luanda <span className="text-green-400">● 2ms</span>
                </motion.div>

                <motion.div
                    className="absolute bottom-[20%] left-[10%] bg-black/80 backdrop-blur border border-blue-500/30 px-3 py-1 rounded text-xs text-blue-400"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    São Paulo <span className="text-green-400">● 68ms</span>
                </motion.div>
            </div>
        </div>
    )
}
