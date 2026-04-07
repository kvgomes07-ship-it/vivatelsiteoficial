"use client"
import dynamic from "next/dynamic"

export const SecurityPlatformWrapper = dynamic(
    () => import("../security-platform").then(mod => mod.SecurityPlatform),
    { ssr: false, loading: () => <div className="w-full h-[600px] bg-white/5 animate-pulse rounded-3xl" /> }
)
