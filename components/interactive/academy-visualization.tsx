"use client"

import { motion } from "framer-motion"

export function AcademyVisualization() {
    const skills = [
        { name: "Cloud", level: 85, color: "bg-blue-500" },
        { name: "Security", level: 92, color: "bg-cyan-500" },
        { name: "DevOps", level: 78, color: "bg-teal-500" },
        { name: "Data", level: 88, color: "bg-indigo-500" },
    ]

    return (
        <div className="w-full h-full bg-gray-950 flex flex-col justify-center px-8 py-4 border border-gray-800 rounded-lg relative overflow-hidden">
            <div className="space-y-6 relative z-10">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">Skill Acquisition</h3>
                {skills.map((skill, i) => (
                    <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-300">
                            <span>{skill.name}</span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 + i * 0.2 }}
                            >
                                {skill.level}%
                            </motion.span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full ${skill.color}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Background Decor */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>
    )
}
