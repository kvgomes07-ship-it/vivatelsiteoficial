"use client"

import { motion } from "framer-motion"

const mediaCards = [
    { left: "8%", top: "14%", w: 52, h: 72, from: "from-purple-600/40", to: "to-blue-500/30", delay: 0 },
    { left: "78%", top: "10%", w: 60, h: 84, from: "from-pink-500/30", to: "to-purple-600/30", delay: 0.8 },
    { left: "12%", top: "62%", w: 64, h: 88, from: "from-blue-500/30", to: "to-purple-600/40", delay: 1.4 },
    { left: "80%", top: "60%", w: 50, h: 70, from: "from-purple-500/40", to: "to-pink-500/30", delay: 0.4 },
]

export function PlayVisualization() {
    return (
        <div className="w-full h-full min-h-[300px] md:min-h-[400px] bg-gray-950 relative overflow-hidden flex items-center justify-center border border-gray-800 rounded-lg">
            {/* Background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at center, rgba(147,51,234,0.18), transparent 70%)" }}
            />

            {/* Floating media cards */}
            {mediaCards.map((card, i) => (
                <motion.div
                    key={`card-${i}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.9, scale: 1, y: [0, -14, 0] }}
                    transition={{
                        opacity: { duration: 0.6, delay: card.delay },
                        scale: { duration: 0.6, delay: card.delay },
                        y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: card.delay },
                    }}
                    className={`absolute rounded-lg border border-white/10 bg-gradient-to-br ${card.from} ${card.to} backdrop-blur-sm shadow-lg`}
                    style={{ left: card.left, top: card.top, width: card.w, height: card.h }}
                >
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 h-1 rounded-full bg-white/20" />
                    <div className="absolute bottom-3 left-1.5 h-1 w-1/2 rounded-full bg-white/15" />
                </motion.div>
            ))}

            {/* Central play hero */}
            <div className="relative z-10 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shadow-[0_0_40px_rgba(147,51,234,0.5)]"
                >
                    {/* Play triangle */}
                    <div className="ml-2 w-0 h-0 border-y-[16px] border-y-transparent border-l-[26px] border-l-white" />

                    {/* Ripples */}
                    <motion.div
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border-2 border-purple-500/50"
                    />
                    <motion.div
                        animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                        className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                    />
                </motion.div>
            </div>

            {/* Bottom player bar: progress + equalizer */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[70%] max-w-md z-10">
                {/* Equalizer */}
                <div className="flex items-end justify-center gap-1 h-8 mb-3">
                    {[...Array(28)].map((_, i) => (
                        <motion.div
                            key={`bar-${i}`}
                            animate={{ scaleY: [0.3, 1, 0.5, 0.9, 0.3] }}
                            transition={{
                                duration: 1.2 + (i % 5) * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: (i % 7) * 0.1,
                            }}
                            className="w-1 origin-bottom rounded-full bg-gradient-to-t from-purple-500 to-blue-400"
                            style={{ height: "100%" }}
                        />
                    ))}
                </div>

                {/* Progress bar */}
                <div className="relative h-1 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-400"
                    />
                </div>
            </div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    animate={{ y: [-20, -100], opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                    }}
                    className="absolute w-2 h-2 rounded-full bg-purple-400/60 blur-[1px]"
                    style={{ left: `${20 + i * 15}%`, bottom: "20%" }}
                />
            ))}
        </div>
    )
}
