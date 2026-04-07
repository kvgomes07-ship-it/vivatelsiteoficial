// Server Component — no "use client", no Framer Motion
// All entrance animations use CSS classes from styles/animations.css

import {
    Camera,
    Boxes,
    Activity,
    Zap,
    Home,
    LayoutDashboard,
    Bell,
    Settings,
    Wifi,
    Plus,
    Play,
    Thermometer,
    Lightbulb,
    Lock,
    Unlock,
    Mic,
    Volume2,
    Search,
    Music2
} from "lucide-react"

export default function IoTStreamPage() {
    const temp = 23
    const isLocked = true
    const activeStream = 0

    const streams = [
        { title: "Luanda City Feed", desc: "Live CCTV Node 04", color: "bg-orange-500", icon: Camera },
        { title: "Porto Lobito Grid", desc: "Asset Monitoring", color: "bg-blue-500", icon: Boxes },
        { title: "Benguela Sensors", desc: "Environmental Logs", color: "bg-cyan-500", icon: Activity },
        { title: "Sanzala Network", desc: "Edge Traffic Log", color: "bg-purple-500", icon: Zap },
    ]

    return (
        <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans flex">
            {/* Sidebar (Desktop Only) */}
            <aside className="w-16 md:w-20 border-r border-white/5 bg-black/40 backdrop-blur-xl hidden sm:flex flex-col items-center py-8 gap-10 z-40 mt-20 transform-gpu will-change-transform">
                <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col gap-8 opacity-40">
                    <Home className="h-6 w-6 hover:text-cyan-400 cursor-pointer transition-colors" />
                    <LayoutDashboard className="h-6 w-6 text-cyan-400 opacity-100" />
                    <Boxes className="h-6 w-6 hover:text-cyan-400 cursor-pointer transition-colors" />
                    <Bell className="h-6 w-6 hover:text-cyan-400 cursor-pointer transition-colors" />
                    <Settings className="h-6 w-6 hover:text-cyan-400 cursor-pointer transition-colors" />
                </div>
                <div className="mt-auto flex flex-col gap-6 items-center">
                    <div className="w-8 h-8 rounded-full border border-white/20 bg-gray-800" />
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto max-h-screen pt-32 px-4 md:px-12 pb-20">
                {/* Header / Stats Bar */}
                <header className="flex flex-wrap justify-between items-center mb-10 gap-6 animate-fade-in-up">
                    <div className="flex bg-white/5 p-1 rounded-full border border-white/10 gap-1">
                        {['Resumo', 'Dispositivos', 'Áreas'].map((tab, i) => (
                            <button key={tab} className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full transition-all ${i === 0 ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'hover:bg-white/5 text-gray-500'}`}>{tab}</button>
                        ))}
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl">
                            <Wifi className="h-4 w-4 text-cyan-500" />
                            <span className="text-[10px] font-mono">LINK_STABLE: 10Gbps</span>
                        </div>
                        <Plus className="h-8 w-8 p-1 bg-white hover:bg-cyan-400 text-black rounded-lg cursor-pointer transition-colors" />
                    </div>
                </header>

                {/* Hero Feature Card (Stream Style) */}
                <section className="mb-12">
                    <div className="animate-fade-in-up [animation-delay:100ms] relative h-[250px] md:h-[380px] w-full rounded-[40px] overflow-hidden group shadow-2xl transform-gpu will-change-transform">
                        {/* Orange/The Weeknd Gradient Style */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff512f] via-[#dd2476] to-[#020617] opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute top-0 right-0 w-3/4 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(255,165,0,0.4)_0%,transparent_70%)]" />
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                            <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Unidade Principal Ativa</span>
                            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter max-w-2xl leading-[0.9]">VIVATEL<br />Stream & IoT</h1>
                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-4">
                                   {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800" />)}
                                </div>
                                <span className="text-white/60 text-xs font-mono">1.2k+ Dispositivos Sincronizados</span>
                            </div>
                        </div>

                        {/* Floating Play Button Style (Decoration) */}
                        <div className="absolute bottom-10 right-10 flex items-center gap-4">
                             <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform cursor-pointer">
                                <Play className="h-6 w-6 text-white fill-white ml-1" />
                             </div>
                        </div>
                    </div>
                </section>

                {/* IoT & Data Grid */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* IoT Controls (Reference Image 2) */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Thermostat Gauge Card */}
                        <div className="animate-fade-in-up [animation-delay:200ms] bg-white/5 border border-white/5 p-8 rounded-[30px] relative overflow-hidden group hover:bg-white/[0.08] transition-all">
                             <div className="flex justify-between items-center mb-10">
                                <span className="text-xs font-black uppercase text-gray-500 tracking-[0.2em]">Temp. Datacenter</span>
                                <Thermometer className="h-5 w-5 text-orange-400" />
                             </div>
                             <div className="flex flex-col items-center py-4">
                                <div className="relative w-40 h-40 flex items-center justify-center">
                                    <svg className="w-full h-full -rotate-90">
                                        <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                                        <circle 
                                            cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" 
                                            strokeDasharray="440" 
                                            strokeDashoffset={440 - (440 * (temp / 40))}
                                            className="text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300" 
                                        />
                                    </svg>
                                    <div className="absolute text-center">
                                        <span className="text-5xl font-black tabular-nums">{temp}°</span>
                                        <div className="flex gap-4 mt-2">
                                            <button className="text-xl text-gray-500 hover:text-white transition-colors">-</button>
                                            <button className="text-xl text-gray-500 hover:text-white transition-colors">+</button>
                                        </div>
                                    </div>
                                </div>
                                <span className="mt-8 text-[10px] font-mono text-cyan-400">STATUS: OTIMIZADO</span>
                             </div>
                        </div>

                        {/* Security Toggle Card */}
                        <div className="animate-fade-in-up [animation-delay:300ms] bg-black/40 border border-white/5 p-8 rounded-[30px] flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <div className="p-3 bg-cyan-500/10 rounded-xl"><Lock className="h-6 w-6 text-cyan-400" /></div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] font-black text-gray-600 uppercase">Segurança Elétrica</span>
                                    <span className="text-xs font-black text-white">MODO: {isLocked ? 'PROTEGIDO' : 'ABERTO'}</span>
                                </div>
                            </div>
                            <div className="mt-10 py-6 px-6 bg-white/5 rounded-2xl flex justify-between items-center group cursor-pointer">
                                <span className="text-sm font-black tracking-widest text-gray-400 group-hover:text-white transition-colors">PORTÃO LOGÍSTICO</span>
                                <div className={`w-12 h-6 rounded-full relative transition-all duration-300 ${isLocked ? 'bg-cyan-600' : 'bg-gray-800'}`}>
                                    <div 
                                        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg transition-transform duration-300 ${isLocked ? 'translate-x-[26px]' : 'translate-x-[4px]'}`}
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex gap-4">
                                <div className="flex-1 p-4 bg-white/5 rounded-2xl flex flex-col items-center">
                                    <Lightbulb className="h-5 w-5 text-yellow-400 mb-2" />
                                    <span className="text-[10px] font-black">LUZES: 80%</span>
                                </div>
                                <div className="flex-1 p-4 bg-white/5 rounded-2xl flex flex-col items-center">
                                    <Zap className="h-5 w-5 text-cyan-400 mb-2" />
                                    <span className="text-[10px] font-black">ENERGIA: ON</span>
                                </div>
                            </div>
                        </div>

                        {/* Live Feed Component (Ref Image 2) */}
                        <div className="animate-fade-in-up [animation-delay:400ms] md:col-span-2 bg-[#101010] border border-white/5 rounded-[40px] overflow-hidden relative h-[300px]">
                            <div className="absolute top-4 left-6 flex items-center gap-3 z-20">
                                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-black tracking-[0.2em] uppercase">Camera #01 [Live]</span>
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                                <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                                    <h4 className="text-sm font-black mb-1">Porto do Lobito - Gate Alpha</h4>
                                    <p className="text-[10px] text-gray-400 font-mono italic">Coord: 12.332, -13.221</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all"><Mic className="h-4 w-4" /></button>
                                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all"><Volume2 className="h-4 w-4" /></button>
                                </div>
                            </div>
                            {/* Visual effect for the feed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                                <div className="w-[80%] h-[80%] border border-white/20 grid grid-cols-4 grid-rows-4" />
                            </div>
                        </div>
                    </div>

                    {/* Data Stream Right Column (Ref Image 1) */}
                    <div className="flex flex-col gap-6">
                        <div className="animate-fade-in-up [animation-delay:200ms] flex items-center justify-between mb-2">
                            <h3 className="text-lg font-black uppercase tracking-tighter">Fluxos de Dados</h3>
                            <Search className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="space-y-4">
                            {streams.map((stream, idx) => (
                                <div 
                                    key={idx} 
                                    className={`animate-fade-in-up p-5 rounded-3xl bg-white/5 border border-white/5 flex items-center gap-5 transition-all ${activeStream === idx ? 'border-orange-500/50 bg-white/[0.08]' : 'hover:bg-white/[0.08]'}`}
                                    style={{ animationDelay: `${(idx + 3) * 100}ms` }}
                                >
                                    <div className={`h-12 w-12 rounded-2xl ${stream.color} flex items-center justify-center shadow-lg`}>
                                        <stream.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-black">{stream.title}</h4>
                                        <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">{stream.desc}</p>
                                    </div>
                                    {activeStream === idx && (
                                        <div className="flex flex-col gap-1">
                                            {[...Array(3)].map((_, i) => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-orange-500' : 'bg-gray-800'}`} />)}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mini Activity Player (Ref Image 1 Waveform) */}
                        <div className="animate-fade-in-up [animation-delay:700ms] mt-auto bg-gradient-to-br from-indigo-900/40 to-black p-6 rounded-[30px] border border-white/10 relative overflow-hidden">
                             <div className="flex items-center gap-4 mb-6">
                                <Music2 className="h-5 w-5 text-orange-400" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Analizador Harmónico</span>
                             </div>
                             <div className="flex items-end gap-1 h-12 mb-6">
                                 {[...Array(12)].map((_, i) => (
                                    <div 
                                        key={i}
                                        className="flex-1 bg-cyan-400 rounded-full animate-bounce"
                                        style={{ height: `${(i % 3 === 0 ? 30 : 60)}%`, animationDelay: `${i * 0.1}s` }}
                                    />
                                ))}
                             </div>
                             <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                <div className="flex gap-4">
                                    <Play className="h-4 w-4" />
                                    <Volume2 className="h-4 w-4" />
                                </div>
                                <span className="text-[10px] font-mono text-orange-500">REALTIME_SIGNAL</span>
                             </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Float Bottom Navigation (Mobile Mobile) */}
            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-full flex gap-10 sm:hidden z-50">
                <LayoutDashboard className="h-6 w-6 text-cyan-400" />
                <Boxes className="h-6 w-6 text-gray-500" />
                <Activity className="h-6 w-6 text-gray-500" />
                <Bell className="h-6 w-6 text-gray-500" />
            </nav>
        </div>
    )
}
