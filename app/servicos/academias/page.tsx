"use client"

import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle,
    Cpu,
    Zap,
    Shield,
    Target,
    Rocket,
    Server,
    Cog,
    Activity,
    Search
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const ROBOTICS_COLORS = {
    primary: "#06b6d4", // Cyan
    secondary: "#0891b2", // Dark Cyan
    accent: "#22d3ee", // Sky Light
    glow: "rgba(6, 182, 212, 0.3)",
    grid: "rgba(6, 182, 212, 0.05)"
}

export default function AcademiasPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans selection:bg-cyan-500/30">
            {/* HUD Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1)_0%,transparent_60%)]" />
                {/* Horizontal Scanline */}
                <motion.div 
                    animate={{ y: ["0vh", "100vh"] }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-0 transform-gpu will-change-transform"
                />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-black" />
                    <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-cyan-900/10 to-transparent" />
                </div>

                {/* HUD Corners Decor */}
                <div className="absolute top-40 left-10 w-20 h-20 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl pointer-events-none hidden lg:block" />
                <div className="absolute top-40 right-10 w-20 h-20 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-xl pointer-events-none hidden lg:block" />

                {/* Left Floating Hologram - Diagnostic Bot */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -20, 0]
                    }}
                    transition={{ 
                        opacity: { duration: 1.2 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute left-[2%] top-[25%] w-32 h-32 md:w-56 md:h-56 z-20 pointer-events-none hidden md:flex items-center justify-center"
                >
                    <div className="relative w-full h-full">
                        {/* Rotating Calibration Ring */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-15px] border-2 border-dashed border-cyan-500/30 rounded-full transform-gpu will-change-transform"
                        />
                        <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-8px] border border-cyan-400/20 rounded-full"
                        />
                        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
                        <Image src="/bot_greenprint.gif" alt="AI Robotics Assistant" fill className="object-contain filter brightness-110 contrast-125 hue-rotate-[180deg]" unoptimized />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-cyan-400/40 blur-md animate-pulse" />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-cyan-400 font-mono tracking-tighter uppercase whitespace-nowrap">UNIT_01: DIAGNOSTIC_ACTIVE</span>
                    </div>
                </motion.div>

                {/* Right Floating Hologram - Prototyping PC */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: 0.8, 
                        scale: 1,
                        y: [0, 20, 0]
                    }}
                    transition={{ 
                        opacity: { duration: 1.2 },
                        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                    }}
                    className="absolute right-[2%] top-[30%] w-40 h-40 md:w-64 md:h-64 z-20 pointer-events-none hidden md:flex items-center justify-center"
                >
                    <div className="relative w-full h-full">
                        {/* Rotating Data Ring */}
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-[-15px] border border-cyan-500/10 rounded-full transform-gpu will-change-transform" />
                        <div className="absolute inset-20 bg-cyan-500/10 blur-3xl rounded-full" />
                        <Image src="/pc_blueprint.gif" alt="System Blueprint" fill className="object-contain filter brightness-125 contrast-110 hue-rotate-[180deg]" unoptimized />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-cyan-400/60 font-mono tracking-tighter uppercase whitespace-nowrap">SYS_X86: COMPILING_PROTO</span>
                    </div>
                </motion.div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                         <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6"
                        >
                            <Rocket className="h-4 w-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400 font-mono">LABS_ACTIVE: ROBOTICS_DEPT</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-sky-200 bg-clip-text text-transparent leading-tight tracking-tighter"
                        >
                            VIVATEL Robotics & Systems
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
                        >
                            Engenharia avançada para o futuro de Angola. Laboratórios de robótica, IA aplicada e infraestrutura ciber-física para soluções reais.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <Button className="bg-cyan-600 hover:bg-cyan-500 text-black px-8 py-6 rounded-none text-lg font-black tracking-widest transition-all duration-300 relative group overflow-hidden">
                                <span className="relative z-10 uppercase flex items-center gap-2">Explorar Unidades <ArrowRight className="h-5 w-5" /></span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative w-full max-w-5xl mx-auto"
                    >
                        {/* Glow background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-sky-500/20 rounded-lg blur-3xl" />

                        {/* Container */}
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl h-[300px] md:h-[400px]">

                            {/* Video */}
                            <video
                                className="absolute inset-0 w-full h-full object-cover"
                                src="/videos/hero.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />

                            {/* Overlay opcional (para melhor contraste do texto) */}
                            <div className="absolute inset-0 bg-black/30" />

                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Robotics Units Section */}
            <section className="py-24 relative overflow-hidden border-t border-cyan-900/20">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-[0.2em]">Unidades de Engenharia</h2>
                        <div className="h-1 w-20 bg-cyan-500 mx-auto mb-6" />
                        <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest max-w-2xl mx-auto">
                            Sistemas de controlo e automação industrial
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Cpu className="h-10 w-10 text-cyan-500" />,
                                title: "Sistemas Autónomos",
                                description: "Desenvolvimento de algoritmos de navegação e controlo para robótica móvel.",
                            },
                            {
                                icon: <Target className="h-10 w-10 text-white" />,
                                title: "Visão Computacional",
                                description: "Sistemas de reconhecimento e processamento de imagem em tempo real.",
                            },
                            {
                                icon: <Rocket className="h-10 w-10 text-cyan-500" />,
                                title: "Prototipagem 3D",
                                description: "Criação de hardware personalizado e peças mecânicas de alta precisão.",
                            },
                            {
                                icon: <Shield className="h-10 w-10 text-white" />,
                                title: "Ciber-Segurança",
                                description: "Proteção de redes industriais e infraestrutura de controlo crítica.",
                            },
                            {
                                icon: <Zap className="h-10 w-10 text-cyan-500" />,
                                title: "Energia & Eficiência",
                                description: "Sistemas de gestão energética inteligente para unidades remotas.",
                            },
                            {
                                icon: <CheckCircle className="h-10 w-10 text-white" />,
                                title: "Controlo de Qualidade",
                                description: "Monitorização automatizada e análise preditiva de performance.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full bg-black/40 p-8 border-l border-cyan-500/30 hover:border-cyan-400 group transition-all cursor-default relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-cyan-900 opacity-40">REF_{index + 100}</div>
                                    <div className="mb-4 inline-block">{feature.icon}</div>
                                    <h3 className="text-xl font-black mb-3 uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
                                    <div className="mt-6 flex items-center gap-2">
                                        <div className="h-px flex-1 bg-cyan-900/30" />
                                        <span className="text-[10px] font-mono text-cyan-600">READY</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Specs Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-[#020617]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono uppercase tracking-[0.3em] mb-2">Technical_Specs</div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Engenharia de<br /><span className="text-cyan-500">Alta Precisão</span></h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                Nossos laboratórios focam na integração de sistemas ciber-físicos, garantindo que a tecnologia de ponta chegue à indústria angolana com máxima eficiência.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Latência Ultra-Reduzida",
                                    "Algoritmos de IA Soberana",
                                    "Interfaces Hápticas",
                                    "Segurança de Camada 7",
                                    "Controlo em Tempo Real",
                                    "Manutenção Autónoma",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-white/5 p-3 border-l-2 border-cyan-500/50">
                                        <Activity className="h-4 w-4 text-cyan-400" />
                                        <span className="text-gray-300 font-mono text-xs uppercase">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                             <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
                             <div className="relative bg-[#020617] border border-cyan-500/20 p-8 rounded-none overflow-hidden">
                                <div className="flex justify-between items-center mb-8 border-b border-cyan-900 pb-4">
                                    <span className="text-xs font-mono text-cyan-500 flex items-center gap-2 animate-pulse"><div className="w-2 h-2 bg-cyan-500 rounded-full" /> SYSTEM_LIVE</span>
                                    <span className="text-xs font-mono text-gray-500">TRX_5502_ROB</span>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { label: "PROCESSAMENTO_NEURAL", value: 92, color: "bg-cyan-500" },
                                        { label: "SINCRONIA_MOTORA", value: 88, color: "bg-white" },
                                        { label: "EFICIÊNCIA_BATERIA", value: 95, color: "bg-cyan-600" }
                                    ].map((spec, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{spec.label}</span>
                                                <span className="text-[10px] font-mono text-cyan-400">{spec.value}%</span>
                                            </div>
                                            <div className="h-1 bg-gray-800 w-full relative">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${spec.value}%` }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className={`h-full ${spec.color} shadow-[0_0_10px_rgba(6,182,212,0.5)]`} 
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="p-4 border border-cyan-900/50 bg-cyan-500/5 text-center">
                                         <div className="text-[8px] font-mono text-cyan-600 uppercase mb-1">Status</div>
                                         <div className="text-sm font-black text-white">NOMINAL</div>
                                    </div>
                                    <div className="p-4 border border-cyan-900/50 bg-cyan-500/5 text-center">
                                         <div className="text-[8px] font-mono text-cyan-600 uppercase mb-1">Latency</div>
                                         <div className="text-sm font-black text-white">0.42ms</div>
                                    </div>
                                </div>
                             </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden bg-black border-y border-cyan-900/20">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.4),transparent_70%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Inicie o seu<br /><span className="text-cyan-500">Projecto Robótico</span></h2>
                            <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest">
                                Protocolos de parceria abertos para indústrias e governo
                            </p>
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-cyan-500 transition-colors px-12 py-8 text-xl font-black rounded-none uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
                            >
                                Contactar Engenharia
                                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 bg-black/40 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">© 2026 VIVATEL. Todos os direitos reservados.</p>
                        <Link href="/" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                            ← Voltar à Página Inicial
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
