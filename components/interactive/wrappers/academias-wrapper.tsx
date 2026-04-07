"use client"
import dynamic from "next/dynamic"

export const RoboticsHudWrapper = dynamic(
    () => import("../robotics-hud").then(mod => mod.RoboticsHud),
    { ssr: false, loading: () => <div className="w-full h-[600px] bg-cyan-900/10 animate-pulse" /> }
)
export const RoboticsSpecsWrapper = dynamic(
    () => import("../robotics-hud").then(mod => mod.RoboticsSpecs),
    { ssr: false, loading: () => <div className="w-full h-[300px] bg-white/5 animate-pulse" /> }
)
