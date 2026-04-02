"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useSpring, useTransform, useMotionValue } from "framer-motion"
import { Activity, Cpu, FileText, Settings, ArrowUp, ArrowDown, Zap, Download, CheckCircle2, Shield, Radio, Server, Globe, Gauge, Info, Share2, Play } from "lucide-react"

// Vivatel Design System - Functional Palette
const VIVATEL_COLORS = {
  primary: "#2563EB",
  secondary: "#64748B",
  download: "#3B82F6", // Sky Blue
  upload: "#F97316",   // Sunset Orange
  success: "#22C55E",  // Emerald Green
  warning: "#EAB308",  // Amber Yellow
  error: "#EF4444",    // Rose Red
  brandCyan: "#06b6d4", // Cyan from the reference image
  bg: "#0C0C0C",
  surface: "#151515",
  surfaceElevated: "#1C1C1C",
  textMuted: "#9CA3AF"
}

// Custom Counter for the "Live" feel
function LiveCounter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const springValue = useSpring(value, { stiffness: 45, damping: 25 })
  const displayValue = useTransform(springValue, (current) => 
    current.toFixed(decimals).toLocaleString() + suffix
  )

  useEffect(() => {
    springValue.set(value)
  }, [value, springValue])

  return (
    <motion.span className="transform-gpu">
      {displayValue}
    </motion.span>
  )
}

// 3D Tilt Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [4, -4])
  const rotateY = useTransform(x, [-100, 100], [-4, 4])

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - (rect.left + rect.width / 2))
    y.set(event.clientY - (rect.top + rect.height / 2))
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnalyticsPlatform() {
  const [activeTab, setActiveTab] = useState("visão-geral")
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [chartHistory, setChartHistory] = useState(() => 
    Array.from({ length: 20 }, (_, i) => ({
      dl: 500 + (Math.random() * 40 - 20),
      ul: 480 + (Math.random() * 40 - 20),
      stability: 100 - (Math.random() * 5)
    }))
  )
  
  // Dedicated Internet Metrics (500Mbps)
  const [metrics, setMetrics] = useState({
    speed: 500.2,
    upload: 499.7,
    iotCount: 15241,
    latency: 12.4
  })

  // SpeedTest State & User Data
  const [isTesting, setIsTesting] = useState(false)
  const [testPhase, setTestPhase] = useState<"idle" | "ping" | "download" | "upload" | "done">("idle")
  const [speedTestResults, setSpeedTestResults] = useState({ dl: 0, ul: 0, ping: 0 })
  const [userData, setUserData] = useState({
    ip: "Detectando...",
    city: "Luanda",
    region: "Luanda",
    country: "Angola",
    isp: "Vivatel Dedicated"
  })
  
  // Spring for needle rotation: maps 0-500 Mbps to -225 to 45 deg
  const needleValue = useSpring(0, { stiffness: 60, damping: 20 })
  const needleRotation = useTransform(needleValue, [0, 500], [-225, 45])

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    
    // Fetch user location and IP
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && !data.error) {
          setUserData({
            ip: data.ip || "102.213.99.195",
            city: data.city || "Luanda",
            region: data.region || "Luanda",
            country: data.country_name || "Angola",
            isp: data.org || "Vivatel Dedicated"
          })
        }
      })
      .catch(() => {
        // Fallback silently to defaults
      })

    const interval = setInterval(() => {
      setMetrics(prev => ({
        speed: 500 + (Math.random() * 1.5 - 0.7), 
        upload: 500 + (Math.random() * 1.5 - 0.7),
        iotCount: prev.iotCount + (Math.random() > 0.8 ? (Math.random() > 0.5 ? 1 : -1) : 0),
        latency: 12.4 + (Math.random() * 0.4 - 0.2)
      }))

      setChartHistory(prev => {
        const next = [...prev.slice(1), {
          dl: 500 + (Math.random() * 40 - 20),
          ul: 480 + (Math.random() * 40 - 20),
          stability: 100 - (Math.random() * 5)
        }]
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const startSpeedTest = () => {
    if (isTesting) return
    setIsTesting(true)
    setTestPhase("ping")
    setSpeedTestResults({ dl: 0, ul: 0, ping: 22 })
    needleValue.set(0)
    
    setTimeout(() => {
        setSpeedTestResults(prev => ({ ...prev, ping: 3 }))
        setTestPhase("download")
        
        let dl = 0
        const dlInt = setInterval(() => {
            dl += Math.random() * 80 + 20
            if (dl >= 500.2) {
                dl = 500.2
                clearInterval(dlInt)
                setTestPhase("upload")
                let ul = 0
                const ulInt = setInterval(() => {
                    ul += Math.random() * 80 + 20
                    if (ul >= 499.8) {
                        ul = 499.8
                        clearInterval(ulInt)
                        setTestPhase("done")
                        setIsTesting(false)
                    }
                    setSpeedTestResults(prev => ({ ...prev, ul }))
                    needleValue.set(ul)
                }, 150)
            }
            setSpeedTestResults(prev => ({ ...prev, dl }))
            needleValue.set(dl)
        }, 150)
    }, 1500)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  if (!mounted) return <div className="bg-[#0c0c0c] rounded-2xl border border-white/5 p-6 h-[480px]" />

  const tabs = [
    { id: "visão-geral", label: "Visão Geral", icon: Activity },
    { id: "análise", label: "Análise", icon: Cpu },
    { id: "speedtest", label: "SpeedTest", icon: Gauge },
    { id: "configurações", label: "Configurações", icon: Settings },
  ]

  const renderOverview = () => (
    <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TiltCard className="bg-[#151515] border border-white/5 rounded-2xl p-5 relative overflow-hidden group shadow-lg">
          <div className="flex justify-between items-start relative z-20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: VIVATEL_COLORS.primary, boxShadow: `0 0 8px ${VIVATEL_COLORS.primary}80` }} />
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">Download</span>
            </div>
            <motion.div animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} className="p-1 bg-white/5 rounded-full border border-white/5" style={{ borderColor: `${VIVATEL_COLORS.download}50` }}><Globe className="h-4 w-4" style={{ color: VIVATEL_COLORS.download }} /></motion.div>
          </div>
          <div className="relative z-20 flex flex-col mt-1">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"><LiveCounter value={metrics.speed} suffix=" Mbps" decimals={1} /></span>
            <span className="text-[9px] font-black uppercase tracking-widest mt-1.5 ml-0.5 whitespace-nowrap" style={{ color: VIVATEL_COLORS.textMuted }}>Link Simétrico Full-Duplex</span>
          </div>
          <div className="absolute -right-1 top-0 bottom-0 flex flex-col justify-around z-10">
            <motion.div 
              animate={{ y: [-100, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }} 
              className="flex flex-col gap-8 opacity-20" 
              style={{ color: VIVATEL_COLORS.download }}
            >
              {[...Array(6)].map((_, i) => (
                <ArrowDown key={i} className="h-10 w-10 filter" style={{ filter: `drop-shadow(0 0 5px ${VIVATEL_COLORS.download}80)` }} strokeWidth={6} />
              ))}
            </motion.div>
          </div>
        </TiltCard>
        <TiltCard className="bg-[#151515] border border-white/5 rounded-2xl p-5 relative overflow-hidden group shadow-lg">
          <div className="flex justify-between items-start relative z-20">
            <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-sm" style={{ backgroundColor: VIVATEL_COLORS.primary, boxShadow: `0 0 8px ${VIVATEL_COLORS.primary}80` }} /><span className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">Upload Real</span></div>
            <motion.div animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="p-1 bg-white/5 rounded-full border border-white/5" style={{ borderColor: `${VIVATEL_COLORS.upload}50` }}><Radio className="h-4 w-4" style={{ color: VIVATEL_COLORS.upload }} /></motion.div>
          </div>
          <div className="relative z-20 flex flex-col mt-1">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"><LiveCounter value={metrics.upload} suffix=" Mbps" decimals={1} /></span>
            <span className="text-[9px] font-black uppercase tracking-widest mt-1.5 ml-0.5 whitespace-nowrap" style={{ color: VIVATEL_COLORS.textMuted }}>Capacidade Síncrona Ativa</span>
          </div>
          <div className="absolute -right-1 top-0 bottom-0 flex flex-col justify-around z-10">
            <motion.div 
              animate={{ y: [0, -100] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }} 
              className="flex flex-col gap-8 opacity-20" 
              style={{ color: VIVATEL_COLORS.upload }}
            >
              {[...Array(6)].map((_, i) => (
                <ArrowUp key={i} className="h-10 w-10 filter" style={{ filter: `drop-shadow(0 0 5px ${VIVATEL_COLORS.upload}80)` }} strokeWidth={6} />
              ))}
            </motion.div>
          </div>
        </TiltCard>
        <TiltCard className="bg-[#151515] border border-white/5 rounded-2xl p-5 relative overflow-hidden group shadow-lg">
          <div className="flex justify-between items-start relative z-20">
            <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-sm" style={{ backgroundColor: VIVATEL_COLORS.primary, boxShadow: `0 0 8px ${VIVATEL_COLORS.primary}80` }} /><span className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">Status IoT</span></div>
            <motion.div animate={{ opacity: [0.6, 1, 0.6], rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="p-1 bg-white/5 rounded-full border border-white/5" style={{ borderColor: `${VIVATEL_COLORS.success}50` }}><Zap className="h-4 w-4" style={{ color: VIVATEL_COLORS.success }} /></motion.div>
          </div>
          <div className="relative z-20 flex items-baseline gap-3 mt-1">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"><LiveCounter value={metrics.iotCount / 1000} suffix="K" decimals={1} /></span>
            <span className="text-[8px] font-black text-white px-1.5 py-0.5 rounded-md" style={{ backgroundColor: `${VIVATEL_COLORS.success}CC`, boxShadow: `0 0 15px ${VIVATEL_COLORS.success}80` }}>100% UP</span>
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest mt-1.5 ml-0.5 block relative z-20" style={{ color: VIVATEL_COLORS.textMuted }}>Monitorização em Tempo Real</span>
        </TiltCard>
      </div>
      <div className="bg-[#151515] border border-white/5 rounded-2xl p-6 flex flex-col overflow-hidden shadow-inner">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"><div className="flex bg-[#0c0c0c] p-0.5 rounded-lg border border-white/10">{['LOG ATUAL', 'HISTÓRICO'].map((t, idx) => (<button key={t} className={`px-4 py-1 text-[9px] font-black rounded-md transition-all uppercase tracking-widest ${idx === 0 ? 'text-white shadow-md' : 'hover:text-gray-300'}`} style={{ backgroundColor: idx === 0 ? VIVATEL_COLORS.primary : "transparent", color: idx === 0 ? "#FFF" : VIVATEL_COLORS.textMuted }}>{t}</button>))}</div><div className="flex items-center gap-6">{[{ l: 'Download', c: VIVATEL_COLORS.download }, { l: 'Upload', c: VIVATEL_COLORS.upload }, { l: 'Estabilidade', c: VIVATEL_COLORS.warning }].map(x => (<div key={x.l} className="flex items-center gap-2"><div className="w-2 h-2 rotate-45" style={{ backgroundColor: x.c }} /><span className="text-[9px] font-black uppercase tracking-widest" style={{ color: VIVATEL_COLORS.textMuted }}>{x.l}</span></div>))}</div></div>
        <div className="relative h-[160px] w-full flex group/chart">
          <div className="flex flex-col justify-between text-[8px] font-black pr-6 pb-6" style={{ color: VIVATEL_COLORS.secondary }}>
            <span>500M</span>
            <span>250M</span>
            <span>0</span>
          </div>
          <div className="flex-1 relative">
            <svg 
              className="absolute inset-0 w-full h-full pb-6 z-10 overflow-visible" 
              viewBox="20 0 660 160" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="gradDl" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={VIVATEL_COLORS.download} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={VIVATEL_COLORS.download} stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradUl" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={VIVATEL_COLORS.upload} stopOpacity="0.1" />
                  <stop offset="100%" stopColor={VIVATEL_COLORS.upload} stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Line */}
              <line x1="20" y1="150" x2="680" y2="150" stroke={VIVATEL_COLORS.warning} strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />
              
              {/* Data Paths */}
              <AnimatePresence>
                {/* Download Area */}
                <motion.path
                  key="chart-dl-area"
                  d={`M 20 150 ${chartHistory.map((p, i) => `L ${20 + (i * 35)} ${150 - (p.dl / 500 * 130)}`).join(' ')} L 685 150 Z`}
                  fill="url(#gradDl)"
                  stroke="none"
                  initial={false}
                />
                
                {/* Download Line */}
                <motion.path
                  key="chart-dl-line"
                  d={`M 20 ${150 - (chartHistory[0].dl / 500 * 130)} ${chartHistory.slice(1).map((p, i) => `L ${20 + ((i + 1) * 35)} ${150 - (p.dl / 500 * 130)}`).join(' ')}`}
                  fill="none"
                  stroke={VIVATEL_COLORS.download}
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={false}
                  transition={{ duration: 0.8 }}
                  className="transform-gpu will-change-transform"
                />

                {/* Upload Line */}
                <motion.path
                  key="chart-ul-line"
                  d={`M 20 ${150 - (chartHistory[0].ul / 500 * 130)} ${chartHistory.slice(1).map((p, i) => `L ${20 + ((i + 1) * 35)} ${150 - (p.ul / 500 * 130)}`).join(' ')}`}
                  fill="none"
                  stroke={VIVATEL_COLORS.upload}
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.7"
                  initial={false}
                  transition={{ duration: 0.8 }}
                  className="transform-gpu will-change-transform"
                />
              </AnimatePresence>

              {/* Scanning interaction line - Simplified */}
              <motion.line
                x1={mousePos.x / 1.5}
                y1="0"
                x2={mousePos.x / 1.5}
                y2="150"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="4 2"
                opacity="0"
                className="group-hover/chart:opacity-30 transform-gpu"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const renderAnalysis = () => (
    <motion.div key="analysis" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="p-6 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: "Latência SACS", value: metrics.latency.toFixed(1) + "ms", icon: Radio, sub: "Rota Angola - Brasil", color: VIVATEL_COLORS.primary },
          { label: "Uptime Servidores", value: "100%", icon: Server, sub: "Redundância ativa", color: VIVATEL_COLORS.success },
          { label: "Eficiência Uplink", value: "99.8%", icon: Cpu, sub: "Sincronização Ativa", color: VIVATEL_COLORS.download },
          { label: "Segurança Link", value: "Enterprise", icon: Shield, sub: "Proteção Vivatel", color: VIVATEL_COLORS.warning },
        ].map((item, i) => (
          <div key={i} className="bg-[#151515] border border-white/5 p-5 rounded-2xl flex gap-5 items-center group hover:bg-[#1a1a1a] transition-all cursor-default shadow-sm hover:shadow-md">
            <div className="p-3.5 bg-[#0c0c0c] rounded-xl border border-white/5 group-hover:border-blue-600/30 transition-colors shadow-inner" style={{ borderColor: `${item.color}20` }}>
              <item.icon className="h-5 w-5" style={{ color: item.color }} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: VIVATEL_COLORS.secondary }}>{item.label}</div>
              <div className="text-xl font-black text-white leading-tight mt-0.5">{item.value}</div>
              <div className="text-[9px] font-bold uppercase tracking-widest mt-1 opacity-60" style={{ color: VIVATEL_COLORS.textMuted }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Rota Internacional SACS Visualization */}
      <div className="bg-[#151515] border border-white/5 p-8 rounded-3xl flex flex-col relative overflow-hidden shadow-inner min-h-[160px]">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
        <div className="flex justify-between items-center z-10 relative mb-4">
            <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Backbone Internacional</span>
                <span className="text-xs font-black text-white mt-1">Conectividade Global via SACS</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">Canal Ativo</span>
            </div>
        </div>

        <div className="relative h-20 w-full flex items-center justify-between px-12 z-10">
            {/* Luanda node */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-black ring-2 ring-blue-600/20 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white">Luanda</span>
            </div>

            {/* Pulsing connection line */}
            <div className="flex-1 h-0.5 relative mx-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-400/40 to-blue-600/20 rounded-full" />
                <motion.div 
                    initial={{ left: "-10%" }}
                    animate={{ left: "110%" }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[2px]"
                />
            </div>

            {/* Fortaleza node (SACS target) */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-black ring-2 ring-blue-600/20 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white">Fortaleza</span>
            </div>
        </div>
        
        <div className="mt-4 flex justify-center">
             <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-500">Latência Estável 64.2ms • Rota Transatlântica</span>
        </div>
      </div>
    </motion.div>
  )

  const renderSpeedTest = () => {
    const activeColor = testPhase === "download" ? VIVATEL_COLORS.brandCyan : (testPhase === "upload" ? VIVATEL_COLORS.upload : VIVATEL_COLORS.brandCyan)
    
    return (
        <motion.div key="speedtest" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 h-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Header com Informações Técnicas Dinâmicas */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-30">
                <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: VIVATEL_COLORS.textMuted }}>Sua Localização</span>
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={userData.city}
                        className="text-xs font-black text-white flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer"
                    >
                        {userData.city}, {userData.country} <Globe className="h-3 w-3 text-blue-400" />
                    </motion.span>
                    <span className="text-[8px] font-black uppercase tracking-widest mt-1" style={{ color: VIVATEL_COLORS.secondary }}>
                        IP: {userData.ip} • {userData.isp}
                    </span>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col items-end"><span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: VIVATEL_COLORS.textMuted }}>Ping</span><span className="text-lg font-black text-white tabular-nums">{speedTestResults.ping || "--"} <span className="text-[10px] text-gray-500">ms</span></span></div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="flex flex-col items-end"><span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: VIVATEL_COLORS.textMuted }}>Jitter</span><span className="text-lg font-black text-white tabular-nums">{speedTestResults.ping ? (speedTestResults.ping - 2) : "--"} <span className="text-[10px] text-gray-500">ms</span></span></div>
                </div>
            </div>

            {/* Velocímetro (Gauge) Centralizado */}
            <div className="relative mt-8 group flex items-center justify-center">
                <svg width="260" height="260" viewBox="0 0 300 300" className="drop-shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                    <defs>
                        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={VIVATEL_COLORS.brandCyan} /><stop offset="100%" stopColor={VIVATEL_COLORS.primary} /></linearGradient>
                        <radialGradient id="centerGlow"><stop offset="0%" stopColor={`${activeColor}20`} /><stop offset="100%" stopColor="rgba(0,0,0,0)" /></radialGradient>
                    </defs>
                    <circle cx="150" cy="150" r="135" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <path d="M 54.5, 245.5 A 135 135 0 1 1 245.5, 245.5" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" strokeLinecap="round" />
                    {[...Array(60)].map((_, i) => {
                        const angle = (i * 4.5) - 225
                        if (angle > 45) return null
                        const x1 = 150 + 115 * Math.cos(angle * Math.PI / 180), y1 = 150 + 115 * Math.sin(angle * Math.PI / 180), x2 = 150 + 122 * Math.cos(angle * Math.PI / 180), y2 = 150 + 122 * Math.sin(angle * Math.PI / 180)
                        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i % 6 === 0 ? activeColor : "rgba(255,255,255,0.15)"} strokeWidth={i % 6 === 0 ? 3 : 1} />
                    })}
                    {[0, 100, 200, 300, 400, 500].map((val, i) => {
                        const angle = (val / 500 * 270) - 225, x = 150 + 95 * Math.cos(angle * Math.PI / 180), y = 150 + 95 * Math.sin(angle * Math.PI / 180)
                        return <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="text-[10px] font-black fill-gray-500 uppercase">{val}</text>
                    })}
                    <motion.path d="M 54.5, 245.5 A 135 135 0 1 1 245.5, 245.5" fill="none" stroke="url(#gaugeGradient)" strokeWidth="12" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: needleValue.get() / 500 }} className="filter drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                    <motion.g style={{ rotate: needleRotation, originX: "150px", originY: "150px" }}><line x1="150" y1="150" x2="270" y2="150" stroke={VIVATEL_COLORS.brandCyan} strokeWidth="3" /><motion.circle cx="272" cy="150" r="4" fill="#FFF" className="filter drop-shadow-[0_0_8px_white]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }} /></motion.g>
                    <circle cx="150" cy="150" r="60" fill={VIVATEL_COLORS.surface} stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                    <circle cx="150" cy="150" r="80" fill="url(#centerGlow)" pointerEvents="none" />
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center z-30">
                    <motion.button onClick={startSpeedTest} disabled={isTesting} whileTap={{ scale: 0.95 }} className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-full border border-white/5 bg-[#121212] shadow-2xl group transition-transform" >
                        {!isTesting && (testPhase === "idle" || testPhase === "done") ? (<><span className="text-2xl font-black text-white tracking-[0.2em] group-hover:text-cyan-400 transition-colors uppercase">IR</span><Play className="h-4 w-4 text-cyan-500/40 mt-1" fill="currentColor" /></>) : (<div className="flex flex-col items-center"><span className="text-xl font-black text-white tracking-tighter tabular-nums">{testPhase === "download" ? speedTestResults.dl.toFixed(1) : (testPhase === "upload" ? speedTestResults.ul.toFixed(1) : "0.0")}</span><span className="text-[9px] font-black uppercase tracking-widest text-cyan-500">Mbps</span></div>)}
                    </motion.button>
                </div>
            </div>

            {/* Métricas Detalhadas (Sem Contornos - Minimalista) */}
            <div className="flex gap-12 items-center mt-auto mb-14 z-20 px-8 py-3.5 rounded-[20px] backdrop-blur-md">
                <div className="flex flex-col items-center gap-1 min-w-[100px]">
                    <div className="flex items-center gap-2 opacity-80">
                        <ArrowDown className="h-2.5 w-2.5" style={{ color: VIVATEL_COLORS.download }} />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: VIVATEL_COLORS.secondary }}>Baixar</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-white tracking-tighter tabular-nums" style={{ color: (testPhase === "download" || testPhase === "done") ? "#FFF" : "rgba(255,255,255,0.1)" }}>
                           {speedTestResults.dl.toFixed(2)}
                        </span>
                        <span className="text-[8px] font-black text-gray-700 uppercase tracking-widest">Mbps</span>
                    </div>
                </div>
                
                {/* Linha Divisória Alinhada */}
                <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/10 to-transparent self-center" />
                
                <div className="flex flex-col items-center gap-1 min-w-[100px]">
                    <div className="flex items-center gap-2 opacity-80">
                        <ArrowUp className="h-2.5 w-2.5" style={{ color: VIVATEL_COLORS.upload }} />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: VIVATEL_COLORS.secondary }}>Upload</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-white tracking-tighter tabular-nums" style={{ color: (testPhase === "upload" || testPhase === "done") ? "#FFF" : "rgba(255,255,255,0.1)" }}>
                           {speedTestResults.ul.toFixed(2)}
                        </span>
                        <span className="text-[8px] font-black text-gray-700 uppercase tracking-widest">Mbps</span>
                    </div>
                </div>
            </div>

            {/* Rodapé Estilizado (Informações do Link) com Linha Delimitadora */}
            <div className="absolute bottom-5 left-8 right-8 z-30 pt-5 border-t border-white/5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 shadow-sm">
                            <div className="w-4 h-4 bg-[#2563EB] rounded-sm flex items-center justify-center text-[10px] font-black text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]">V</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white leading-none">Vivatel Dedicated Link</span>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-gray-600 mt-1.5 leading-none">Provedor Core v3.0</span>
                        </div>
                    </div>
                    
                    <div className="flex gap-5">
                        <button className="p-2.5 hover:bg-white/10 rounded-xl transition-all group border border-transparent hover:border-white/10">
                            <Share2 className="h-4.5 w-4.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                        </button>
                        <button className="p-2.5 hover:bg-white/10 rounded-xl transition-all group border border-transparent hover:border-white/10">
                            <Info className="h-4.5 w-4.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
  }

  const renderSettings = () => (
    <motion.div key="settings" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 flex flex-col gap-4">
      {[ { label: "Balanceamento Dinâmico", sub: "Otimização dedicada", active: true }, { label: "IP Público Fixo", sub: "Configuração estática ativa", active: true }, { label: "Anti-DDoS Enterprise", sub: "Proteção ativa", active: true }].map((s, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-[#151515] border border-white/5 rounded-xl">
          <div><div className="text-xs font-black text-white">{s.label}</div><div className="text-[9px] font-black uppercase tracking-widest mt-1" style={{ color: VIVATEL_COLORS.secondary }}>{s.sub}</div></div>
          <div className={`w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 shadow-lg ${s.active ? "" : "bg-gray-800"}`} style={{ backgroundColor: s.active ? VIVATEL_COLORS.primary : "rgba(0,0,0,0)" }}><motion.div layout className="w-3 h-3 rounded-full bg-white" animate={{ x: s.active ? 20 : 0 }} /></div>
        </div>
      ))}
      <div className="mt-4 p-4 rounded-xl flex items-start gap-4 border" style={{ backgroundColor: `${VIVATEL_COLORS.primary}0D`, borderColor: `${VIVATEL_COLORS.primary}26` }}><CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: VIVATEL_COLORS.success }} /><p className="text-[10px] font-bold uppercase tracking-tight" style={{ color: VIVATEL_COLORS.secondary }}>Link Dedicado Vivatel Core™ Ativo.</p></div>
    </motion.div>
  )

  return (
    <motion.div ref={containerRef} onMouseMove={handleMouseMove} initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0c0c0c] rounded-[32px] border border-white/5 overflow-hidden flex flex-col h-full font-sans text-white shadow-[0_0_50px_rgba(0,0,0,0.8)] relative min-h-[480px] max-w-5xl mx-auto" >
      <div className="flex flex-col lg:flex-row justify-between items-center px-8 py-5 bg-[#0c0c0c] border-b border-white/5 gap-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3"><div className="relative flex items-center justify-center"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: VIVATEL_COLORS.success }} /><div className="absolute w-2 h-2 rounded-full animate-ping opacity-50" style={{ backgroundColor: VIVATEL_COLORS.success }} /></div><span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Internet Dedicada</span></div>
          <div className="flex bg-[#151515] p-1 rounded-[16px] border border-white/5 shadow-inner">{tabs.map((tab) => (<motion.button key={tab.id} onClick={() => setActiveTab(tab.id)} whileHover={{ backgroundColor: "rgba(28,28,28,1)" }} whileTap={{ scale: 0.96 }} className={`relative px-4 py-2 text-[9px] font-black transition-all rounded-[12px] flex items-center gap-2.5 uppercase tracking-[0.1em] ${activeTab === tab.id ? "text-white shadow-xl" : "hover:text-white"}`} style={{ backgroundColor: activeTab === tab.id ? VIVATEL_COLORS.primary : "rgba(21,21,21,0)", color: activeTab === tab.id ? "#FFF" : VIVATEL_COLORS.secondary }} ><tab.icon className="h-3 w-3" style={{ color: activeTab === tab.id ? "#FFF" : VIVATEL_COLORS.secondary }} />{tab.label}</motion.button>))}</div>
        </div>
        <div className="hidden lg:flex items-center gap-3"><div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-full shadow-sm"><div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: VIVATEL_COLORS.warning }} /><span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: VIVATEL_COLORS.secondary }}>Latência: Estável</span></div></div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide bg-[rgba(12,12,12,0.5)]"><AnimatePresence mode="wait">{activeTab === "visão-geral" && renderOverview()}{activeTab === "análise" && renderAnalysis()}{activeTab === "speedtest" && renderSpeedTest()}{activeTab === "configurações" && renderSettings()}</AnimatePresence></div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] transition-opacity duration-1000 z-0" style={{ background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, ${VIVATEL_COLORS.primary}, transparent 50%)` }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_2px] z-50"></div>
    </motion.div>
  )
}
