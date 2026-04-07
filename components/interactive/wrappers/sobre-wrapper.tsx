"use client"
import dynamic from "next/dynamic"

export const TeamVisualizationWrapper = dynamic(
    () => import("../team-visualization").then(mod => mod.TeamVisualization),
    { ssr: false, loading: () => <div className="w-full h-[600px] bg-white/5 animate-pulse rounded-3xl" /> }
)
