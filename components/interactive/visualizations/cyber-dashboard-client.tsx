"use client"

import dynamic from "next/dynamic"

export const CyberDashboardClient = dynamic<any>(
    () => import("@/components/interactive/visualizations/cyber-dashboard").then(mod => mod.CyberDashboardMockup),
    { 
        ssr: false, 
        loading: () => <div className="h-[400px] w-full bg-slate-900/50 rounded-[2rem] border border-white/5 animate-pulse flex items-center justify-center">
            <div className="text-sky-500/50 font-medium text-sm tracking-wide animate-pulse text-center px-4">A carregar VIVATEL Analytics...</div>
        </div>
    }
)
