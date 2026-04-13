// Server Component — no "use client"
// Imports the heavy interactive dashboard via next/dynamic for performance.

import {
    Boxes,
    Activity,
    Zap,
    Home,
    LayoutDashboard,
    Bell,
    Settings,
    Wifi,
    Plus,
} from "lucide-react"
import dynamic from "next/dynamic"

const IoTStreamDashboard = dynamic(
    () => import("@/components/interactive/iot-stream-dashboard").then(mod => ({ default: mod.IoTStreamDashboard })),
    { loading: () => <div className="w-full h-[800px] bg-white/5 animate-pulse rounded-[40px] border border-white/5" /> }
)

export default function IoTStreamPage() {
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
                    <div className="w-8 h-8 rounded-full border border-white/20 bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer" />
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto max-h-screen pt-32 px-4 md:px-12 pb-20">
                {/* Header / Stats Bar */}
                <header className="flex flex-wrap justify-between items-center mb-10 gap-6 animate-fade-in-up">
                    <div className="flex bg-white/5 p-1 rounded-full border border-white/10 gap-1">
                        {['Resumo', 'Dispositivos', 'Áreas'].map((tab, i) => (
                            <button key={tab} className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full transition-all ${i === 0 ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'hover:bg-white/10 text-gray-400 hover:text-white'}`}>{tab}</button>
                        ))}
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl backdrop-blur-md">
                            <Wifi className="h-4 w-4 text-cyan-500 animate-pulse" />
                            <span className="text-[10px] font-mono tracking-widest">LINK_STABLE: 10Gbps</span>
                        </div>
                        <Plus className="h-8 w-8 p-1 bg-white hover:bg-cyan-400 text-black rounded-lg cursor-pointer transition-colors shadow-lg" />
                    </div>
                </header>

                <IoTStreamDashboard />
            </main>

            {/* Float Bottom Navigation (Mobile Mobile) */}
            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-full flex gap-10 sm:hidden z-50 shadow-2xl">
                <LayoutDashboard className="h-6 w-6 text-cyan-400" />
                <Boxes className="h-6 w-6 text-gray-500 hover:text-cyan-400 transition-colors" />
                <Activity className="h-6 w-6 text-gray-500 hover:text-cyan-400 transition-colors" />
                <Bell className="h-6 w-6 text-gray-500 hover:text-cyan-400 transition-colors" />
            </nav>
        </div>
    )
}
