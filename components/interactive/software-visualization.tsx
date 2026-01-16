"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function SoftwareVisualization() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const codeLines = [
        "import { Vivatel } from '@ecosystem'",
        "const app = new Vivatel.App()",
        "await app.deploy({",
        "  region: 'ao-luanda',",
        "  scale: 'auto'",
        "})",
        "// Deployment successful 🚀"
    ]

    return (
        <div className="w-full h-full bg-gray-950 flex flex-col p-4 font-mono text-sm border border-gray-800 rounded-lg relative overflow-hidden">
            {/* Header */}
            <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>

            {/* Code Area */}
            <div className="relative z-10 space-y-2">
                {codeLines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.3 }}
                        className="flex items-center gap-4"
                    >
                        <span className="text-gray-700 select-none">{i + 1}</span>
                        <span className={line.includes("//") ? "text-green-400" : "text-blue-300"}>
                            {line}
                        </span>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-cyan-500 ml-8 mt-1"
                />
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
        </div>
    )
}
