"use client"
import dynamic from "next/dynamic"

export const CloudPlatformWrapper = dynamic(
    () => import("../cloud-platform").then(mod => mod.CloudPlatform),
    { ssr: false, loading: () => <div className="w-full h-[600px] bg-white/5 animate-pulse rounded-3xl" /> }
)
