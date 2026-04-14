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
        <div className="min-h-screen bg-[#020617] text-white font-sans">
            <main className="w-full pt-12 pb-20 overflow-x-hidden">
                <IoTMarketingLanding />
            </main>
        </div>
    )
}
