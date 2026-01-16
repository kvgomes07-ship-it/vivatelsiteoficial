"use client"

import { motion } from "framer-motion"

export function IoTVisualization() {
    const devices = [
        { x: 20, y: 20, delay: 0 },
        { x: 80, y: 20, delay: 1 },
        { x: 20, y: 80, delay: 2 },
        { x: 80, y: 80, delay: 1.5 },
        { x: 50, y: 50, delay: 0.5 }, // Central hub
    ]

    return (
        <div className="w-full h-full bg-gray-950 relative overflow-hidden flex items-center justify-center border border-gray-800 rounded-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {devices.slice(0, 4).map((device, i) => (
                    <motion.line
                        key={`line-${i}`}
                        x1={`${device.x}%`}
                        y1={`${device.y}%`}
                        x2="50%"
                        y2="50%"
                        stroke="rgba(34, 211, 238, 0.2)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                ))}
            </svg>

            {/* Devices */}
            {devices.map((device, i) => (
                <div
                    key={i}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${device.x}%`, top: `${device.y}%` }}
                >
                    {/* Ripple Effect */}
                    <motion.div
                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: device.delay }}
                        className="absolute inset-0 bg-cyan-500/30 rounded-full"
                    />
                    {/* Device Core */}
                    <div className={`relative w-4 h-4 rounded-full ${i === 4 ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] w-6 h-6' : 'bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]'}`} />

                    {/* Data packet animation */}
                    {i !== 4 && (
                        <motion.div
                            className="absolute w-2 h-2 bg-white rounded-full"
                            animate={{
                                x: [0, (50 - device.x) * 3], // Approximate centralized movement
                                y: [0, (50 - device.y) * 2]  // Rough approximation for visual effect
                            }}
                        // Using a simpler approach for packets moving to center
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
