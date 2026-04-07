"use client"
import dynamic from "next/dynamic"

export const AnalyticsPlatformWrapper = dynamic(
    () => import("../analytics-platform").then(mod => mod.AnalyticsPlatform),
    { ssr: false, loading: () => <div className="w-full h-[600px] bg-white/5 animate-pulse rounded-3xl" /> }
)
