"use client"

import React, { useState, useEffect, memo, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Camera, Boxes, Activity, Zap, Play,
    Lock, Unlock, RadioTower, MapPin, GaugeCircle, Wifi
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"



const EnvironmentalStats = memo(({ temp, getTempColor }: { temp: number, getTempColor: (t: number) => string }) => {
    const circleProgress = useMemo(() => 440 - (440 * (temp / 50)), [temp])
    const tempColorClass = useMemo(() => getTempColor(temp), [temp, getTempColor])

    return (
        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[30px] relative overflow-hidden backdrop-blur-xl transition-colors hover:bg-white/[0.04]">
            <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] flex items-center gap-2">
                    <GaugeCircle className="h-4 w-4" /> Amb. Datacenter
                </span>
                <span className={`text-[10px] font-mono tracking-widest ${tempColorClass}`}>MONITORING...</span>
            </div>
            <div className="flex flex-col items-center py-2 relative">
                <div className="relative w-40 h-40 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                        <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5" />
                        <motion.circle 
                            cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round"
                            strokeDasharray="440" 
                            animate={{ strokeDashoffset: circleProgress }}
                            transition={{ duration: 0.5 }}
                            className={tempColorClass} 
                        />
                    </svg>
                    <div className="absolute text-center flex flex-col items-center">
                        <span className="text-5xl font-black tabular-nums tracking-tighter text-white">
                            {temp.toFixed(1)}°
                        </span>
                        <span className="text-[10px] text-gray-500 font-bold tracking-widest mt-1 uppercase">CELSIUS</span>
                    </div>
                </div>
            </div>
        </div>
    )
})

EnvironmentalStats.displayName = "EnvironmentalStats"

const SystemLogsSection = memo(({ logs }: { logs: any[] }) => (
    <div className="bg-[#0c0c0c] border border-white/5 rounded-[30px] p-6 flex-1 flex flex-col relative overflow-hidden backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
            <h3 className="text-xs font-black uppercase tracking-widest text-white/80">Logs de Sistema</h3>
        </div>
        <div className="flex flex-col gap-3 h-[180px] overflow-hidden">
            <AnimatePresence initial={false}>
                {logs.map((log) => (
                    <motion.div 
                        key={log.id} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        className="flex flex-col gap-1 pb-3 border-b border-white/[0.02]"
                    >
                        <span className="text-[9px] font-mono text-gray-500">{log.time}</span>
                        <span className="text-[11px] font-medium text-gray-300 leading-snug">{log.msg}</span>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    </div>
))

SystemLogsSection.displayName = "SystemLogsSection"

const StreamSelector = memo(({ streams, activeStream, setActiveStream }: { streams: any[], activeStream: number, setActiveStream: (i: number) => void }) => (
    <div className="space-y-3">
        {streams.map((stream, idx) => (
            <button 
                key={idx} 
                onClick={() => setActiveStream(idx)}
                className={cn(
                    "w-full p-4 rounded-[20px] border cursor-pointer flex items-center gap-4 transition-all duration-300 text-left",
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
            </button>
        ))}
    </div>
))

StreamSelector.displayName = "StreamSelector"

export const IoTStreamDashboard = memo(function IoTStreamDashboard() {
    const [activeHeaderTab, setActiveHeaderTab] = useState(0)
    const [temp, setTemp] = useState(23.4)
    const [isLocked, setIsLocked] = useState(true)
    const [activeStream, setActiveStream] = useState(0)
    const [logs, setLogs] = useState<{ id: string, time: string, msg: string }[]>([])

    useEffect(() => {
        const sysInitialLogs = [
            { id: "1", time: new Date().toLocaleTimeString(), msg: "SYSTEM INIT: All nodes functional" },
            { id: "2", time: new Date().toLocaleTimeString(), msg: "Handshake established w/ Gateway 04" }
        ]
        setLogs(sysInitialLogs)

        let driftInterval: NodeJS.Timeout;

        const startInterval = () => {
            driftInterval = setInterval(() => {
                setTemp(prev => {
                    const drift = (Math.random() - 0.5) * 1.5
                    return Number(Math.max(18, Math.min(35, prev + drift)).toFixed(1))
                })

                const simulatedEvents = [
                    "Novo dispositivo Edge detectado na rede central",
                    "Sync: Stream de Câmaras [Luanda_Sul] RESTABELECIDO",
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
            }, 6000)
        }

        const handleVisibilityChange = () => {
            if (document.hidden) {
                clearInterval(driftInterval)
            } else {
                startInterval()
            }
        }

        document.addEventListener("visibilitychange", handleVisibilityChange)
        startInterval()

        return () => {
            clearInterval(driftInterval)
            document.removeEventListener("visibilitychange", handleVisibilityChange)
        }
    }, [])

    const streams = useMemo(() => [
        { title: "Luanda City Feed", desc: "Live CCTV Node 04", color: "bg-orange-500", icon: Camera },
        { title: "Porto Lobito Grid", desc: "Asset Monitoring", color: "bg-blue-600", icon: Boxes },
        { title: "Benguela Sensors", desc: "Environmental Logs", color: "bg-cyan-500", icon: Activity },
        { title: "Sanzala Network", desc: "Edge Traffic Log", color: "bg-[#dd2476]", icon: Zap },
    ], [])

    const getTempColor = useCallback((t: number) => {
        if (t < 21) return 'text-blue-400'
        if (t < 26) return 'text-cyan-400'
        if (t < 30) return 'text-orange-400'
        return 'text-red-500'
    }, [])

    return (
        <div className="w-full">
            {/* Header / Stats Bar */}
            <header className="flex flex-wrap justify-between items-center mb-10 gap-6">
                <div className="flex bg-[#0A0F1E] p-1.5 rounded-full border border-white/[0.08] gap-1">
                    {['Resumo', 'Dispositivos', 'Áreas'].map((tab, i) => (
                        <button 
                            key={tab} 
                            onClick={() => setActiveHeaderTab(i)}
                            className={`px-6 py-2.5 text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 ${
                                activeHeaderTab === i 
                                ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                                : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl backdrop-blur-md">
                        <Wifi className="h-4 w-4 text-cyan-500" />
                        <span className="text-[10px] font-mono tracking-widest text-cyan-50">LINK_STABLE: 10Gbps</span>
                    </div>
                </div>
            </header>

            {/* Top Interactive Hero Section */}
            <section className="mb-12">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-[280px] md:h-[400px] w-full rounded-[40px] overflow-hidden group shadow-2xl"
                >
                    <Image 
                        src="/streamiot.webp" 
                        alt="Vivatel Stream & IoT"
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 1200px"
                    />
                    <div className="absolute bottom-10 right-10 flex items-center gap-4 z-20">
                        <button className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 group hover:bg-white transition-colors cursor-pointer relative overflow-hidden">
                            <Play className="h-6 w-6 text-white ml-1 group-hover:text-black transition-colors relative z-10" />
                            <motion.div 
                                animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full border border-white/50 pointer-events-none"
                            />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Live Data Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <EnvironmentalStats temp={temp} getTempColor={getTempColor} />

                    <div className="bg-black/40 border border-white/5 p-8 rounded-[30px] flex flex-col justify-between backdrop-blur-xl">
                        <div className="flex justify-between items-center">
                            <div className={`p-3 rounded-xl shadow-lg border border-white/10 ${isLocked ? 'bg-cyan-500/20' : 'bg-red-500/20'}`}>
                                {isLocked ? <Lock className="h-6 w-6 text-cyan-400" /> : <Unlock className="h-6 w-6 text-red-400" />}
                            </div>
                            <div className="flex flex-col items-end text-white">
                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Controle de Acesso</span>
                                <span className={`text-[11px] font-black uppercase tracking-wider ${isLocked ? 'text-green-400' : 'text-red-400'}`}>
                                    {isLocked ? 'SEGURO' : 'ABERTO'}
                                </span>
                            </div>
                        </div>
                        
                        <button 
                            onClick={() => setIsLocked(!isLocked)}
                            className="mt-8 py-5 px-6 bg-white/5 rounded-2xl flex justify-between items-center group cursor-pointer border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-xs font-black tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors uppercase">Interruptor</span>
                            <div className={`w-14 h-7 rounded-full relative transition-colors duration-300 ${isLocked ? 'bg-cyan-600' : 'bg-gray-800'}`}>
                                <motion.div 
                                    animate={{ x: isLocked ? 28 : 4 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                                />
                            </div>
                        </button>
                    </div>

                    <div className="md:col-span-2 bg-[#050508] border border-white/5 rounded-[40px] overflow-hidden relative min-h-[280px] p-8 flex flex-col">
                        <div className="absolute top-6 left-6 z-20">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 rounded-full border border-white/10 backdrop-blur-md">
                                <RadioTower className="h-3 w-3 text-cyan-400" />
                                <span className="text-[10px] font-black tracking-widest text-gray-300">RADAR TELEMETRY</span>
                            </span>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden mix-blend-screen pointer-events-none">
                            <motion.div animate={{ scale: [1, 2.5], opacity: [0.2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }} className="absolute w-[200px] h-[200px] border border-cyan-500/10 rounded-full" />
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
                            
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#fff]" />
                                <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
                                <div className="absolute top-[40%] left-[80%] w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_#c084fc]" />
                                <div className="absolute top-[80%] left-[30%] w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_8px_#fb923c]" />
                            </div>
                        </div>

                        <div className="absolute bottom-6 right-6 bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10 z-20 text-white">
                            <div className="flex items-center gap-2 mb-1">
                                <MapPin className="h-3 w-3 text-cyan-400" />
                                <h4 className="text-[11px] font-black uppercase">Luanda Central</h4>
                            </div>
                            <p className="text-[9px] text-gray-400 font-mono italic">Sector_Alpha [Active]</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <SystemLogsSection logs={logs} />
                    <StreamSelector streams={streams} activeStream={activeStream} setActiveStream={setActiveStream} />
                </div>
            </section>
        </div>
    )
})
