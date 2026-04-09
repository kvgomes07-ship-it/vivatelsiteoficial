"use client"

import React, { useState, useEffect } from "react"

export function CyberDashboardMockup() {
    const [lineData, setLineData] = useState<number[]>(Array(11).fill(150))
    const [activeBars, setActiveBars] = useState<number[]>(Array(10).fill(0))
    const [responseBars, setResponseBars] = useState<number[]>(Array(6).fill(0))
    const [memory, setMemory] = useState(0)
    const [disk, setDisk] = useState(0)
    const [download, setDownload] = useState(0)
    const [upload, setUpload] = useState(0)
    const [latency, setLatency] = useState(0)
    const [regions, setRegions] = useState<number[]>([0, 0, 0])

    useEffect(() => {
        // Initial setup animation (Entrance)
        const initTimeout = setTimeout(() => {
            setLineData([105, 90, 75, 45, 60, 30, 45, 90, 60, 30, 45])
            setActiveBars([30, 45, 25, 60, 50, 80, 40, 70, 55, 90])
            setResponseBars([40, 70, 50, 100, 80, 60])
            setMemory(75)
            setDisk(60)
            setDownload(485)
            setUpload(460)
            setLatency(8)
            setRegions([80, 65, 50])
        }, 100)

        // Continuous live data flow
        const interval = setInterval(() => {
            setDownload(prev => Math.max(10, Math.min(500, prev + Math.floor(Math.random() * 40) - 20)))
            setUpload(prev => Math.max(10, Math.min(500, prev + Math.floor(Math.random() * 40) - 20)))
            setLatency(prev => Math.max(2, Math.min(30, prev + Math.floor(Math.random() * 4) - 2)))
            setLineData(prev => {
                const nextY = Math.max(20, Math.min(130, prev[prev.length - 1] + (Math.random() * 40 - 20)))
                return [...prev.slice(1), nextY]
            })
            setActiveBars(prev => prev.map(v => Math.max(10, Math.min(100, v + (Math.random() * 30 - 15)))))
            setResponseBars(prev => prev.map(v => Math.max(10, Math.min(100, v + (Math.random() * 40 - 20)))))
            setMemory(prev => Math.max(60, Math.min(95, prev + Math.floor(Math.random() * 10 - 5))))
            setDisk(prev => Math.max(40, Math.min(80, prev + Math.floor(Math.random() * 8 - 4))))
            setRegions(prev => prev.map(v => Math.max(30, Math.min(98, v + Math.floor(Math.random() * 10 - 5)))))
        }, 2000)
        
        return () => {
            clearTimeout(initTimeout)
            clearInterval(interval)
        }
    }, [])

    const pointsStr = lineData.map((y, i) => `${i * 50},${y}`).join(" L")
    const memOffset = 251.2 - (251.2 * memory) / 100
    const diskOffset = 188.4 - (188.4 * disk) / 100

    return (
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 lg:p-6 bg-[#0b1120] rounded-[2rem] shadow-[0_0_50px_rgba(34,211,238,0.05)] border border-[#1e293b] font-sans relative">
            <style>{`
                @keyframes pulseGlow {
                    0% { filter: drop-shadow(0 0 5px rgba(34,211,238,0.2)); }
                    100% { filter: drop-shadow(0 0 15px rgba(34,211,238,0.6)); }
                }
                .anim-glow { animation: pulseGlow 3s ease-in-out infinite alternate; }
                .live-transition { transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1); }
            `}</style>
            
            <svg className="hidden">
                <defs>
                    <linearGradient id="cyanGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Widget 1: Main Area Chart (Span 3) */}
            <div className="col-span-1 md:col-span-3 lg:col-span-3 bg-[#131c31] rounded-2xl p-5 shadow-lg border border-white/5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <div className="text-sm font-semibold text-white mb-1">Vivatel - Monitoramento Link & Cloud</div>
                        <div className="text-[10px] text-gray-400">Uso de Banda em Tempo Real (Capacidade: 500 Mbps)</div>
                    </div>
                    <div className="flex gap-2">
                        <div className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse hidden sm:block"></span>
                            LIVE
                        </div>
                        <div className="px-3 py-1 text-gray-500 text-xs hover:text-white cursor-pointer transition-colors hidden sm:block">1W</div>
                        <div className="px-3 py-1 text-gray-500 text-xs hover:text-white cursor-pointer transition-colors hidden sm:block">1M</div>
                    </div>
                </div>
                
                <div className="h-48 w-full relative">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                        {/* Background Grid */}
                        <line x1="0" y1="30" x2="500" y2="30" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="75" x2="500" y2="75" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="120" x2="500" y2="120" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                        
                        {/* Live Area */}
                        <g fill="url(#cyanGradient)">
                             <path d={`M0,150 L0,${lineData[0]} L${pointsStr} L500,150 Z`} opacity="0.6" className="live-transition" />
                        </g>

                        {/* Live Line */}
                        <path d={`M0,${lineData[0]} L${pointsStr}`} fill="none" stroke="#67e8f9" strokeWidth="2.5" className="live-transition anim-glow" />
                        
                        {/* Live Data Points */}
                        {lineData.map((y, i) => (
                            <circle key={i} cx={i * 50} cy={y} r="3" fill="#fff" className="live-transition" />
                        ))}
                    </svg>
                </div>
            </div>

            {/* Widget 2: Setup/Stats (Span 1) */}
            <div className="col-span-1 bg-[#131c31] rounded-2xl p-5 shadow-lg border border-white/5 flex flex-col justify-between">
                <div>
                    <div className="text-sm font-semibold text-white mb-4">Métricas Essenciais</div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-900/40 flex items-center justify-center border border-cyan-500/30">
                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white tracking-tight">99.9%</div>
                            <div className="text-[10px] text-gray-400 uppercase">SLA Garantido</div>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-3">
                    <div>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                            <span>Link Dedicado (500M)</span>
                            <span className="text-cyan-400">Ativo</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#0b1120] rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-400 rounded-full live-transition" style={{width: download > 0 ? '100%' : '0%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                            <span>Recursos Cloud</span>
                            <span className="text-cyan-400">{regions[0] || 0}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#0b1120] rounded-full overflow-hidden">
                            <div className="h-full bg-[#0ea5e9] rounded-full live-transition" style={{width: `${regions[0] || 0}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Widget 3: Small Bar Chart */}
            <div className="col-span-1 bg-[#131c31] rounded-2xl p-5 shadow-lg border border-white/5">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-sm font-semibold text-white">Download Atual</div>
                    <div className="text-xs text-cyan-400 font-bold">{download} Mbps</div>
                </div>
                <div className="h-24 w-full flex items-end justify-between gap-1 mt-auto">
                    {activeBars.map((h, i) => (
                        <div key={i} className="flex-1 bg-cyan-900/30 rounded-t-sm relative group overflow-hidden h-full">
                            <div className="absolute bottom-0 w-full bg-cyan-400 rounded-t-sm shadow-[0_0_10px_rgba(34,211,238,0.5)] live-transition" 
                                 style={{height: `${h}%`}}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Widget 4: Donut Charts */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#131c31] rounded-2xl p-5 shadow-lg border border-white/5 flex items-center justify-around">
                {/* Donut 1 */}
                <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="12" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#22d3ee" strokeWidth="12" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset={memOffset} className="live-transition" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-white transition-all duration-300">{memory}%</span>
                        <span className="text-[8px] text-gray-400">MEMÓRIA</span>
                    </div>
                </div>
                {/* Donut 2 */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 filter drop-shadow-[0_0_8px_rgba(14,165,233,0.3)]">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#1e293b" strokeWidth="10" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#0ea5e9" strokeWidth="10" strokeLinecap="round" strokeDasharray="188.4" strokeDashoffset={diskOffset} className="live-transition" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-lg font-bold text-white transition-all duration-300">{disk}%</span>
                        <span className="text-[8px] text-gray-400">CPU</span>
                    </div>
                </div>
            </div>

            {/* Widget 5: Thick Bar Chart (Span 1) */}
            <div className="col-span-1 bg-[#131c31] rounded-2xl p-5 shadow-lg border border-white/5">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-sm font-semibold text-white">Upload Atual</div>
                    <div className="text-xs text-[#0ea5e9] font-bold">{upload} Mbps</div>
                </div>
                <div className="h-24 w-full flex items-end justify-between gap-2 mt-auto">
                    {responseBars.map((h, i) => (
                        <div key={i} className="flex-1 relative h-full">
                            <div className="absolute bottom-0 w-full rounded-sm shadow-[0_0_15px_rgba(34,211,238,0.2)] live-transition" 
                                 style={{
                                    height: `${h}%`, 
                                    background: 'linear-gradient(to top, #0284c7, #22d3ee)'
                                 }}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Widget 6: Complex Stats */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#131c31] rounded-2xl p-5 shadow-lg border border-white/5 flex gap-4">
                <div className="flex-1 space-y-4">
                    <div className="text-3xl font-bold text-white tracking-wider tabular-nums">{latency} <span className="text-xl text-gray-400">ms</span></div>
                    <div className="text-[10px] text-gray-400 uppercase">Latência da Rede</div>
                    
                    <div className="space-y-4 mt-6">
                        {['Servidor Web', 'Banco de Dados', 'Storage NVMe'].map((label, i) => (
                            <div key={label} className="flex items-center gap-3">
                                <div className="text-[10px] w-16 text-gray-500 font-medium truncate">{label}</div>
                                <div className="flex-1 h-1.5 bg-[#0b1120] rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-500 rounded-full live-transition" style={{width: `${regions[i] || 0}%`}}></div>
                                </div>
                                <div className="text-[10px] text-cyan-400 font-mono w-6">{regions[i] || 0}%</div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#0f172a] to-[#131c31] border border-white/5 p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent)] pointer-events-none"></div>
                    <div className="text-xs text-cyan-400 mb-2">INTEGRIDADE DO SISTEMA</div>
                    <div className="w-20 h-20 rounded-full border-4 border-cyan-500/20 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full border-t-4 border-cyan-400 animate-spin" style={{animationDuration: '2s'}}></div>
                        <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] anim-glow"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Widget 7: Small Metric Row */}
            <div className="col-span-1 md:col-span-3 lg:col-span-4 bg-[#131c31] rounded-2xl p-4 shadow-lg border border-white/5 flex flex-wrap gap-6 items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0b1120] flex items-center justify-center border border-cyan-500/50">
                        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                    </div>
                    <div>
                        <div className="text-[10px] text-gray-500 uppercase">Link Dedicado</div>
                        <div className="text-xs text-white font-medium">500 Mbps Simétrico (Up/Down)</div>
                    </div>
                </div>
                
                <div className="flex-1 max-w-sm">
                    <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                         <span>Saúde do Ambiente Cloud</span>
                         <span>{(latency > 0 ? 'Operacional' : 'Iniciando...')}</span>
                    </div>
                    <div className="h-1 bg-[#0b1120] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full live-transition" style={{width: latency > 0 ? '100%' : '0%'}}></div>
                    </div>
                </div>

                <div className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white text-xs font-bold rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)] cursor-pointer hover:scale-105 transition-transform">
                    GERAR RELATÓRIO
                </div>
            </div>
            
        </div>
    )
}
