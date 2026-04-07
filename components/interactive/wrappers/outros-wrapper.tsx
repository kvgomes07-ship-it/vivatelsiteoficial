"use client"
import dynamic from "next/dynamic"

export const SoftwareVisualizationWrapper = dynamic(
    () => import("../software-visualization").then(mod => mod.SoftwareVisualization),
    { ssr: false, loading: () => <div className="w-full h-[400px] bg-white/5 animate-pulse rounded-2xl" /> }
)
export const IoTVisualizationWrapper = dynamic(
    () => import("../iot-visualization").then(mod => mod.IoTVisualization),
    { ssr: false, loading: () => <div className="w-full h-[400px] bg-white/5 animate-pulse rounded-2xl" /> }
)
export const AcademyVisualizationWrapper = dynamic(
    () => import("../academy-visualization").then(mod => mod.AcademyVisualization),
    { ssr: false, loading: () => <div className="w-full h-[400px] bg-white/5 animate-pulse rounded-2xl" /> }
)
