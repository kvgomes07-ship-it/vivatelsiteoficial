"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Camera, Boxes, Activity, Zap, Play, Thermometer,
    Lightbulb, Lock, Unlock, Mic, Volume2, Search, Music2,
    RadioTower, MapPin, GaugeCircle, Wifi, Plus
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function IoTStreamDashboard() {
    const [activeHeaderTab, setActiveHeaderTab] = useState(0)
    const [temp, setTemp] = useState(23.4)
    const [isLocked, setIsLocked] = useState(true)
    const [activeStream, setActiveStream] = useState(0)
    const [logs, setLogs] = useState<{ id: string, time: string, msg: string }[]>([])

    // Simulated Real-time Systems
    useEffect(() => {

        // Real-time drift simulator (Environment Temp & Event Logs)
        const sysInitialLogs = [
            { id: "1", time: new Date().toLocaleTimeString(), msg: "SYSTEM INIT: All nodes functional" },
            { id: "2", time: new Date().toLocaleTimeString(), msg: "Handshake established w/ Gateway 04" }
        ]
        setLogs(sysInitialLogs)

        const driftInterval = setInterval(() => {
            setTemp(prev => {
                const drift = (Math.random() - 0.5) * 1.5
                return Number(Math.max(18, Math.min(35, prev + drift)).toFixed(1))
            })

            const simulatedEvents = [
                "Novo dispositivo Edge detectado na rede central",
                "Sync: Stream de Câmaras [Luanda_Sul] RESTABELECIDO",
                "Alerta menor: Flutuação térmica resolvida automaticamente",
                "Integridade da pipeline de dados confirmada a 10Gbps",
                "Ping de telemetria recebido do nó industrial #942"
            ]

            setLogs(prev => {
                const newLog = {
                    id: Math.random().toString(),
                    time: new Date().toLocaleTimeString(),
                    msg: simulatedEvents[Math.floor(Math.random() * simulatedEvents.length)]
                }
                return [newLog, ...prev].slice(0, 4)
            })
        }, 3500)

        return () => {
            clearInterval(driftInterval)
        }
    }, [])

    const streams = [
        { title: "Luanda City Feed", desc: "Live CCTV Node 04", color: "bg-orange-500", icon: Camera },
        { title: "Porto Lobito Grid", desc: "Asset Monitoring", color: "bg-blue-600", icon: Boxes },
        { title: "Benguela Sensors", desc: "Environmental Logs", color: "bg-cyan-500", icon: Activity },
        { title: "Sanzala Network", desc: "Edge Traffic Log", color: "bg-[#dd2476]", icon: Zap },
    ]

    // Calculate dynamic color based on temperature
    const getTempColor = (t: number) => {
        if (t < 21) return 'text-blue-400'
        if (t < 26) return 'text-cyan-400'
        if (t < 30) return 'text-orange-400'
        return 'text-red-500'
    }

    return (
        <div className="w-full">
            {/* Header / Stats Bar (Interactive) */}
            <header className="flex flex-wrap justify-between items-center mb-10 gap-6 animate-fade-in-up">
                <div className="flex bg-[#0A0F1E] p-1.5 rounded-full border border-white/[0.08] gap-1 shadow-inner">
                    {['Resumo', 'Dispositivos', 'Áreas'].map((tab, i) => (
                        <button 
                            key={tab} 
                            onClick={() => setActiveHeaderTab(i)}
                            className={`px-6 py-2.5 text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 ${
                                activeHeaderTab === i 
                                ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                                : 'text-gray-400 hover:text-white hover:ring-1 hover:ring-blue-500/50 hover:bg-white/[0.02]'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl backdrop-blur-md">
                        <Wifi className="h-4 w-4 text-cyan-500 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-widest text-cyan-50">LINK_STABLE: 10Gbps</span>
                    </div>
                    <button className="h-9 w-9 flex items-center justify-center p-0 bg-white hover:bg-cyan-400 text-black rounded-xl cursor-pointer transition-colors shadow-lg active:scale-95">
                        <Plus className="h-5 w-5" />
                    </button>
                </div>
            </header>

            {/* Top Interactive Hero Section */}
            <section className="mb-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[280px] md:h-[400px] w-full rounded-[40px] overflow-hidden group shadow-[0_20px_50px_-12px_rgba(255,81,47,0.2)]"
                >
                    <Image 
                        src="/streamiot.webp" 
                        alt="Vivatel Stream & IoT"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    {/* Floating Play Button (Interactive) */}
                    <div className="absolute bottom-10 right-10 flex items-center gap-4 z-20">
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 group hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-colors cursor-pointer"
                        >
                            <Play className="h-6 w-6 text-white ml-1 group-hover:text-black transition-colors" />
                            {/* Ripple Effect Animation */}
                            <motion.div 
                                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full border border-white/50 pointer-events-none"
                            />
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* Live Data Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Cards) */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Temperature Gauge System */}
                    <motion.div 
                        whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)' }}
                        className="bg-white/[0.02] border border-white/5 p-8 rounded-[30px] relative overflow-hidden group transition-all backdrop-blur-xl"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] flex items-center gap-2">
                                <GaugeCircle className="h-4 w-4" /> Amb. Datacenter
                            </span>
                            <span className={`text-[10px] font-mono tracking-widest ${getTempColor(temp)} animate-pulse`}>MONITORING...</span>
                        </div>
                        <div className="flex flex-col items-center py-2 relative">
                            {/* Circular Progress Gauge */}
                            <div className="relative w-40 h-40 flex items-center justify-center">
                                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none drop-shadow-xl">
                                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5" />
                                    <motion.circle 
                                        cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round"
                                        strokeDasharray="440" 
                                        animate={{ strokeDashoffset: 440 - (440 * (temp / 50)) }}
                                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                        className={getTempColor(temp)} 
                                    />
                                </svg>
                                <div className="absolute text-center flex flex-col items-center">
                                    <motion.span 
                                        key={temp}
                                        initial={{ opacity: 0.5, y: -5 }} animate={{ opacity: 1, y: 0 }}
                                        className="text-5xl font-black tabular-nums tracking-tighter"
                                    >
                                        {temp.toFixed(1)}°
                                    </motion.span>
                                    <span className="text-[10px] text-gray-500 font-bold tracking-widest mt-1 uppercase">GRAUS CELSIUS</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Security Subsystem Card */}
                    <motion.div 
                        whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)' }}
                        className="bg-black/40 border border-white/5 p-8 rounded-[30px] flex flex-col justify-between backdrop-blur-xl"
                    >
                        <div className="flex justify-between items-center">
                            <motion.div 
                                animate={{ rotate: [0, 5, 0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className={`p-3 rounded-xl shadow-lg border border-white/10 ${isLocked ? 'bg-cyan-500/20' : 'bg-red-500/20'}`}
                            >
                                {isLocked ? <Lock className="h-6 w-6 text-cyan-400" /> : <Unlock className="h-6 w-6 text-red-400" />}
                            </motion.div>
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Controle de Acesso</span>
                                <span className={`text-[11px] font-black uppercase tracking-wider ${isLocked ? 'text-green-400' : 'text-red-400'}`}>
                                    MODO: {isLocked ? 'SEGURO' : 'ABERTO'}
                                </span>
                            </div>
                        </div>
                        
                        <div 
                            onClick={() => setIsLocked(!isLocked)}
                            className="mt-8 py-5 px-6 bg-white/5 rounded-2xl flex justify-between items-center group cursor-pointer border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-xs font-black tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">PORTÃO LÓGICO</span>
                            <div className={`w-14 h-7 rounded-full relative transition-colors duration-500 shadow-inner ${isLocked ? 'bg-cyan-600' : 'bg-gray-800'}`}>
                                <motion.div 
                                    animate={{ x: isLocked ? 28 : 4 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                                />
                            </div>
                        </div>
                        
                        {/* Mini Dashboard elements inside */}
                        <div className="mt-4 flex gap-4">
                            <div className="flex-1 p-3 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col items-center">
                                <Lightbulb className="h-4 w-4 text-yellow-500/80 mb-1" />
                                <span className="text-[9px] font-black tracking-widest text-gray-400">LUZES: 80%</span>
                            </div>
                            <div className="flex-1 p-3 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col items-center">
                                <Zap className="h-4 w-4 text-cyan-500/80 mb-1" />
                                <span className="text-[9px] font-black tracking-widest text-cyan-400/80">GRID: ONLINE</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Live Mini-Map Radar (Bonus Feature) */}
                    <motion.div 
                        whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)' }}
                        className="md:col-span-2 bg-[#050508] border border-white/5 rounded-[40px] overflow-hidden relative min-h-[280px] p-8 flex flex-col"
                    >
                        <div className="absolute top-6 left-6 z-20 flex gap-3">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 rounded-full border border-white/10 backdrop-blur-md">
                                <RadioTower className="h-3 w-3 text-cyan-400" />
                                <span className="text-[10px] font-black tracking-widest text-gray-300">RADAR TELEMETRY</span>
                            </span>
                        </div>

                        {/* Custom Animated SVG Radar Simulation */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden mix-blend-screen pointer-events-none">
                            {/* Pulse Rings */}
                            <motion.div animate={{ scale: [1, 3], opacity: [0.5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }} className="absolute w-[200px] h-[200px] border border-cyan-500/30 rounded-full" />
                            <motion.div animate={{ scale: [1, 3], opacity: [0.5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 2, ease: 'easeOut' }} className="absolute w-[200px] h-[200px] border border-cyan-500/30 rounded-full" />
                            {/* Grid Backdrop */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
                            
                            {/* Simulated Nodes & Streams */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Core Node */}
                                <div className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff]" />
                                
                                {/* Outlying Nodes & Connecting Paths */}
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <motion.path d="M 50 50 L 20 30" stroke="rgba(34,211,238,0.4)" strokeWidth="0.5" strokeDasharray="2 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }} />
                                    <motion.path d="M 50 50 L 80 40" stroke="rgba(34,211,238,0.4)" strokeWidth="0.5" strokeDasharray="2 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
                                    <motion.path d="M 50 50 L 30 80" stroke="rgba(34,211,238,0.4)" strokeWidth="0.5" strokeDasharray="2 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 1, repeat: Infinity }} />
                                </svg>
                                {/* Node endpoints */}
                                <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] animate-pulse" />
                                <div className="absolute top-[40%] left-[80%] w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc] animate-pulse" />
                                <div className="absolute top-[80%] left-[30%] w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_#fb923c] animate-pulse" />
                            </div>
                        </div>

                        {/* Location Badge bottom */}
                        <div className="absolute bottom-6 right-6 bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10 z-20">
                            <div className="flex items-center gap-2 mb-1">
                                <MapPin className="h-3 w-3 text-cyan-400" />
                                <h4 className="text-[11px] font-black uppercase">Luanda Central</h4>
                            </div>
                            <p className="text-[9px] text-gray-500 font-mono italic">Sector_Alpha [Active]</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column (Data Logs & Streams) */}
                <div className="flex flex-col gap-6">
                    {/* Live System Logs Box */}
                    <div className="bg-[#0c0c0c] border border-white/5 rounded-[30px] p-6 flex-1 flex flex-col relative overflow-hidden backdrop-blur-xl shadow-2xl">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                            <h3 className="text-xs font-black uppercase tracking-widest text-white/80">Logs de Sistema</h3>
                            <span className="text-[9px] font-mono text-cyan-500 animate-pulse bg-cyan-500/10 px-2 py-1 rounded-sm">LATEST</span>
                        </div>
                        <div className="flex flex-col gap-3 h-[180px] overflow-hidden">
                            <AnimatePresence initial={false}>
                                {logs.map((log) => (
                                    <motion.div 
                                        key={log.id} 
                                        initial={{ opacity: 0, x: -20, height: 0 }}
                                        animate={{ opacity: 1, x: 0, height: 'auto' }}
                                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                        className="flex flex-col gap-1 pb-3 border-b border-white/[0.02]"
                                    >
                                        <span className="text-[9px] font-mono text-gray-500">{log.time}</span>
                                        <span className="text-[11px] font-medium text-gray-300 leading-snug drop-shadow-md">{log.msg}</span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Active Edge Feeds List */}
                    <div className="space-y-3">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 pl-2">Fluxo de Dados Edge</h3>
                        {streams.map((stream, idx) => (
                            <motion.div 
                                key={idx} 
                                whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                onClick={() => setActiveStream(idx)}
                                className={cn(
                                    "p-4 rounded-[20px] border cursor-pointer flex items-center gap-4 transition-all duration-300",
                                    activeStream === idx ? 'border-white/20 bg-white/5 shadow-xl' : 'border-white/5 bg-transparent hover:border-white/10'
                                )}
                            >
                                <div className={cn('h-10 w-10 rounded-xl flex items-center justify-center shadow-lg transition-colors', activeStream === idx ? stream.color : 'bg-white/10')}>
                                    <stream.icon className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1 truncate">
                                    <h4 className="text-xs font-black tracking-wide text-white">{stream.title}</h4>
                                    <p className="text-[9px] text-gray-500 font-mono tracking-widest uppercase truncate">{stream.desc}</p>
                                </div>
                                {activeStream === idx && (
                                    <div className="flex gap-1 items-end h-3">
                                        <motion.div animate={{ height: ['40%', '100%', '40%'] }} transition={{ duration: 1, repeat: Infinity }} className="w-1 bg-white rounded-t-sm" />
                                        <motion.div animate={{ height: ['70%', '30%', '70%'] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1 bg-white rounded-t-sm" />
                                        <motion.div animate={{ height: ['100%', '50%', '100%'] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1 bg-white rounded-t-sm" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
