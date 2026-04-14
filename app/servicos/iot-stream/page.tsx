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

const IoTMarketingLanding = dynamic(
    () => import("@/components/sections/iot-marketing-content").then(mod => ({ default: mod.IoTMarketingContent })),
    { loading: () => <div className="w-full h-screen bg-[#020617] animate-pulse flex items-center justify-center"><div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div></div> }
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

            <main className="flex-1 overflow-y-auto max-h-screen pt-12 pb-20 w-full overflow-x-hidden">
                <IoTMarketingLanding />
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
