"use client"

import { motion } from "framer-motion"
import { Cpu, Home, Lightbulb, Thermometer, Camera, Wifi } from "lucide-react"

const devices = [
    { x: 18, y: 24, icon: Home, delay: 0 },
    { x: 82, y: 20, icon: Lightbulb, delay: 0.6 },
    { x: 16, y: 78, icon: Camera, delay: 1.2 },
    { x: 84, y: 80, icon: Thermometer, delay: 0.3 },
    { x: 50, y: 14, icon: Wifi, delay: 0.9 },
]

export function IoTVisualization() {
    return (
        <div className="w-full h-full min-h-[300px] md:min-h-[400px] bg-gray-950 relative overflow-hidden flex items-center justify-center border border-gray-800 rounded-lg">
            {/* Background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at center, rgba(59,130,246,0.14), transparent 70%)" }}
            />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(59,130,246,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.25) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {devices.map((device, i) => (
                    <motion.line
                        key={`line-${i}`}
                        x1={device.x}
                        y1={device.y}
                        x2={50}
                        y2={50}
                        stroke="rgba(96,165,250,0.3)"
                        strokeWidth={1}
                        strokeDasharray="3 3"
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: i * 0.15, ease: "easeInOut" }}
                    />
                ))}
            </svg>

            {/* Data packets traveling toward the hub */}
            {devices.map((device, i) => (
                <motion.div
                    key={`packet-${i}`}
                    className="absolute w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]"
                    initial={{ left: `${device.x}%`, top: `${device.y}%`, opacity: 0 }}
                    animate={{
                        left: [`${device.x}%`, "50%"],
                        top: [`${device.y}%`, "50%"],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: device.delay, ease: "easeInOut" }}
                />
            ))}

            {/* Device nodes */}
            {devices.map((device, i) => {
                const Icon = device.icon
                return (
                    <div
                        key={`node-${i}`}
                        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${device.x}%`, top: `${device.y}%` }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.9], opacity: [0.45, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: device.delay, ease: "easeOut" }}
                            className="absolute inset-0 rounded-xl bg-blue-500/30"
                        />
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: "easeOut" }}
                            className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-400/40 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                        >
                            <Icon className="w-4 h-4 text-blue-300" />
                        </motion.div>
                    </div>
                )
            })}

            {/* Central hub */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    animate={{ scale: [1, 1.7], opacity: [0.4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-2xl border border-blue-400/50"
                />
                <motion.div
                    animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 rounded-2xl border border-cyan-400/40"
                />
                <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                >
                    <Cpu className="w-7 h-7 text-white" />
                </motion.div>
            </div>

            {/* Ambient floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    animate={{
                        y: [-10, -90],
                        opacity: [0, 0.7, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeInOut",
                    }}
                    className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/50 blur-[1px]"
                    style={{ left: `${15 + i * 13}%`, bottom: "15%" }}
                />
            ))}
        </div>
    )
}
