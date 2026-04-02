"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "Conectividade",
    position: "top-left",
  },
  {
    title: "Smart Layouts",
    position: "top-right",
  },
  {
    title: "Criação de Softwares",
    position: "bottom-left",
  },
  {
    title: "Cloud",
    position: "bottom-right",
  },
]

export function SpinningGlobe() {
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] py-10 select-none">
      <div className="relative w-[1200px] h-[640px] flex items-center justify-center shrink-0 scale-[0.3] xs:scale-[0.4] sm:scale-[0.6] md:scale-[0.8] lg:scale-[0.9] xl:scale-100 origin-center">
        {/* Background glow - CSS animation instead of framer-motion */}
        <div
          className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-blue-500/25 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-glow"
        />

        {/* SVG Connecting Lines - CSS animated strokes */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1200 640" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Aesthetic Horizontal Background Lines */}
            <path d="M 0 320 L 480 320" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
            <path d="M 1200 320 L 720 320" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />

            {/* TOP LEFT */}
            <path d="M 320 130 C 400 130, 400 320, 480 320" stroke="#3B82F6" strokeWidth="1.5" opacity="0.25" />
            <path
              d="M 320 130 C 400 130, 400 320, 480 320"
              stroke="url(#pulse-light)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="100 1000"
              className="animate-dash-flow"
              style={{ animationDelay: '0s' }}
            />

            {/* BOTTOM LEFT */}
            <path d="M 320 510 C 400 510, 400 320, 480 320" stroke="#3B82F6" strokeWidth="1.5" opacity="0.25" />
            <path
              d="M 320 510 C 400 510, 400 320, 480 320"
              stroke="url(#pulse-light)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="100 1000"
              className="animate-dash-flow"
              style={{ animationDelay: '1.5s' }}
            />

            {/* TOP RIGHT */}
            <path d="M 880 130 C 800 130, 800 320, 720 320" stroke="#3B82F6" strokeWidth="1.5" opacity="0.25" />
            <path
              d="M 880 130 C 800 130, 800 320, 720 320"
              stroke="url(#pulse-light)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="100 1000"
              className="animate-dash-flow"
              style={{ animationDelay: '0.5s' }}
            />

            {/* BOTTOM RIGHT */}
            <path d="M 880 510 C 800 510, 800 320, 720 320" stroke="#3B82F6" strokeWidth="1.5" opacity="0.25" />
            <path
              d="M 880 510 C 800 510, 800 320, 720 320"
              stroke="url(#pulse-light)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="100 1000"
              className="animate-dash-flow"
              style={{ animationDelay: '2s' }}
            />

            <defs>
              <linearGradient id="pulse-light" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="0.5" stopColor="#60A5FA" stopOpacity="1" />
                <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Center Globe - single CSS animation for rotation + float */}
        <div
          className="relative z-10 w-[480px] h-[480px] animate-globe-spin"
        >
          <Image
            src="/globoverde.png"
            alt="Glowing Globe"
            fill
            sizes="480px"
            className="object-contain drop-shadow-[0_0_100px_rgba(59,130,246,0.7)]"
            priority
          />

          {/* Core highlight */}
          <div className="absolute inset-0 bg-blue-400/10 blur-2xl rounded-full scale-50" />
        </div>

        {/* Feature Cards */}
        {features.map((feature, index) => {
          const isTop = feature.position.includes("top")
          const isLeft = feature.position.includes("left")

          return (
            <motion.div
              key={index}
              className={`absolute z-20 flex flex-col p-4 rounded-[1.5rem] w-[280px] bg-[#0C1A2E] border border-[#1E3A5F] shadow-[0_40px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-500 hover:bg-[#091525] group cursor-pointer overflow-hidden ${isTop ? "top-[40px]" : "bottom-[40px]"
                } ${isLeft ? "left-[40px]" : "right-[40px]"}`}
              initial={{ opacity: 0, scale: 0.8, y: isTop ? -20 : 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.2 } }}
            >
              {/* Dotted texture on the top half of the outer card */}
              <div className="absolute inset-x-0 top-0 h-3/4 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4px_4px] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />

              <div className="mb-4 px-2 relative z-10">
                <span className="font-normal tracking-[0.02em] text-[12px] text-white/90">{feature.title}</span>
              </div>

              <div className="relative min-h-[140px] w-full rounded-[1.25rem] bg-gradient-to-t from-[#091A30] to-[rgba(59,130,246,0.12)] border border-[rgba(59,130,246,0.15)] p-4 shadow-inner overflow-hidden flex flex-col justify-center">

                {/* Conectividade Card */}
                {feature.title === "Conectividade" && (
                  <div className="relative flex flex-col items-center justify-center w-full h-full p-2">
                    {/* Abstract Network - CSS animated */}
                    <div className="relative w-full h-16 flex items-center justify-center mb-1">
                      {/* Central Node */}
                      <div className="absolute z-10 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.8)] animate-pulse" />

                      {/* Orbiting Nodes - CSS only */}
                      <div className="absolute z-20 w-1.5 h-1.5 bg-blue-200/90 rounded-full shadow-[0_0_8px_rgba(56,189,248,1)] animate-orbit-1" style={{ left: '25%', top: '25%' }} />
                      <div className="absolute z-20 w-2 h-2 bg-blue-200/90 rounded-full shadow-[0_0_8px_rgba(56,189,248,1)] animate-orbit-2" style={{ right: '25%', top: '30%' }} />
                      <div className="absolute z-20 w-1.5 h-1.5 bg-blue-200/90 rounded-full shadow-[0_0_8px_rgba(56,189,248,1)] animate-orbit-3" style={{ bottom: '20%' }} />

                      {/* Connecting Lines - static dashes, no animation */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 64">
                        <path d="M 50 32 L 28 20" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2 2" />
                        <path d="M 50 32 L 72 23" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2 2" />
                        <path d="M 50 32 L 50 48" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2 2" />
                      </svg>
                    </div>

                    <p className="text-[8px] text-blue-100/70 text-center font-medium tracking-wide mt-2">
                      Acesso contínuo
                    </p>
                  </div>
                )}

                {/* Smart Layouts Card */}
                {feature.title === "Smart Layouts" && (
                  <div className="relative w-full h-full rounded-lg border border-[rgba(59,130,246,0.1)] p-2 shadow-lg overflow-hidden flex flex-col bg-gradient-to-b from-[rgba(59,130,246,0.05)] to-transparent opacity-80">
                    <div className="flex justify-between items-center w-full mb-3 px-1 text-[4.5px]">
                      <span className="font-extrabold text-white/90 tracking-widest">LOGO</span>
                      <div className="flex gap-2.5 text-white/60">
                        <span>Home</span>
                        <span>Feature</span>
                        <span>Services</span>
                      </div>
                      <span className="text-white/80">Sign Up</span>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-1 mb-2 mt-1">
                      <p className="text-[8px] text-blue-50/90 font-medium tracking-tight">Build Smarter, Launch Faster</p>
                      <p className="text-[5px] text-white/50">AI tools to speed up your work.</p>
                      <span className="text-[4.5px] text-white/40 mt-1">Get Started Free</span>
                    </div>

                    <div className="flex items-center justify-center w-[85%] mx-auto mt-2 bg-[#0D1C30] border border-[rgba(59,130,246,0.2)] rounded-lg px-2 py-1.5 opacity-60">
                      <span className="text-[5px] text-white/40 text-center truncate">Describe your interface in one line...</span>
                    </div>

                    {/* Bottom mask to fade out */}
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0A1828] to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Criação de Softwares Card */}
                {feature.title === "Criação de Softwares" && (
                  <div className="font-mono text-[9px] leading-[1.6] relative w-full h-full pt-1 px-1">
                    <div className="text-yellow-200/90 tracking-wide">function</div>
                    <div className="text-yellow-200/90 tracking-wide">GenerateUI<span className="text-blue-200/70">(layout)</span> <span className="text-blue-200/70">{"{"}</span></div>
                    <div className="text-yellow-200/90 tracking-wide pl-4">const tree =</div>
                    <div className="text-blue-400/90 tracking-wide">AI.analyze<span className="text-blue-200/70">(layout)</span></div>
                    <div className="text-yellow-200/90 tracking-wide pl-4">const components =</div>
                    <div className="text-blue-400/90 tracking-wide">tree.build<span className="text-blue-200/70">()</span></div>

                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[rgba(9,21,37,0.95)] via-[#0A1828]/80 to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Cloud Card */}
                {feature.title === "Cloud" && (
                  <div className="flex flex-col w-full h-full justify-center px-1 py-1">
                    {/* Server Status Row */}
                    <div className="flex items-center justify-between mb-2 bg-[#0D1C30]/80 border border-[rgba(59,130,246,0.15)] rounded-lg px-2 py-1.5 shadow-inner">
                      <div className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[12px] h-[12px] text-blue-400">
                          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                        </svg>
                        <span className="text-[7px] text-white/80 font-medium tracking-wide">Global Network</span>

                        {/* Traffic Bars - CSS animated */}
                        <div className="flex items-end gap-[1.5px] h-2.5 ml-1">
                          <div className="w-[1.5px] bg-blue-400 rounded-t-sm animate-bar-1" />
                          <div className="w-[1.5px] bg-blue-400 rounded-t-sm animate-bar-2" />
                          <div className="w-[1.5px] bg-blue-400 rounded-t-sm animate-bar-3" />
                          <div className="w-[1.5px] bg-blue-400 rounded-t-sm animate-bar-4" />
                        </div>
                      </div>
                      <span className="relative flex h-1.5 w-1.5 ml-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                      </span>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-1.5 mt-0.5">
                      <div className="relative bg-gradient-to-b from-[rgba(59,130,246,0.08)] to-transparent border border-[rgba(59,130,246,0.15)] rounded-md p-1.5 flex flex-col items-center overflow-hidden">
                        <span className="text-[11px] font-bold text-blue-300">99.9%</span>
                        <span className="text-[5px] text-white/50 tracking-wider mt-0.5">UPTIME</span>
                        <div className="absolute top-0 left-0 w-[20px] h-[40px] bg-white/5 rotate-12 animate-shimmer" />
                      </div>
                      <div className="relative bg-gradient-to-b from-[rgba(59,130,246,0.08)] to-transparent border border-[rgba(59,130,246,0.15)] rounded-md p-1.5 flex flex-col items-center overflow-hidden">
                        <span className="text-[11px] font-bold text-blue-300">&lt;5ms</span>
                        <span className="text-[5px] text-white/50 tracking-wider mt-0.5">LATENCY</span>
                        <div className="absolute top-0 left-0 w-[20px] h-[40px] bg-white/5 rotate-12 animate-shimmer" style={{ animationDelay: '0.5s' }} />
                      </div>
                    </div>

                    {/* Scanner Line - CSS animated */}
                    <div className="w-full h-[1px] bg-blue-900/40 mt-2.5 relative overflow-hidden rounded-full">
                      <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scanner" />
                    </div>

                    {/* Bottom fade mask */}
                    <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[rgba(9,21,37,0.8)] to-transparent pointer-events-none" />
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.8; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 5s ease-in-out infinite;
        }
        @keyframes dash-flow {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: -500; }
        }
        .animate-dash-flow {
          animation: dash-flow 3.5s linear infinite;
        }
        @keyframes globe-spin {
          from { transform: rotate(0deg) translateY(-8px); }
          to { transform: rotate(360deg) translateY(8px); }
        }
        .animate-globe-spin {
          animation: globe-spin 15s linear infinite;
        }
        @keyframes orbit-1 {
          0%, 100% { transform: translate(-15px, -10px); opacity: 0.5; }
          50% { transform: translate(0, 0); opacity: 1; }
        }
        .animate-orbit-1 { animation: orbit-1 2.2s ease-in-out infinite; }
        @keyframes orbit-2 {
          0%, 100% { transform: translate(15px, -8px); opacity: 0.4; }
          50% { transform: translate(0, 0); opacity: 1; }
        }
        .animate-orbit-2 { animation: orbit-2 2.8s ease-in-out infinite 0.5s; }
        @keyframes orbit-3 {
          0%, 100% { transform: translateY(12px); opacity: 0.3; }
          50% { transform: translateY(0); opacity: 1; }
        }
        .animate-orbit-3 { animation: orbit-3 1.8s ease-in-out infinite 1s; }
        @keyframes bar-bounce-1 {
          0%, 100% { height: 4px; } 50% { height: 10px; }
        }
        @keyframes bar-bounce-2 {
          0%, 100% { height: 7px; } 33% { height: 3px; } 66% { height: 8px; }
        }
        @keyframes bar-bounce-3 {
          0%, 100% { height: 5px; } 33% { height: 10px; } 66% { height: 3px; }
        }
        @keyframes bar-bounce-4 {
          0%, 100% { height: 9px; } 50% { height: 4px; }
        }
        .animate-bar-1 { animation: bar-bounce-1 0.8s ease-in-out infinite; }
        .animate-bar-2 { animation: bar-bounce-2 1.1s ease-in-out infinite 0.2s; }
        .animate-bar-3 { animation: bar-bounce-3 0.9s ease-in-out infinite 0.4s; }
        .animate-bar-4 { animation: bar-bounce-4 1s ease-in-out infinite 0.6s; }
        @keyframes shimmer {
          from { transform: translateX(-30px) rotate(12deg); }
          to { transform: translateX(100px) rotate(12deg); }
        }
        .animate-shimmer { animation: shimmer 2.5s linear infinite; }
        @keyframes scanner {
          from { transform: translateX(-100%); }
          to { transform: translateX(400%); }
        }
        .animate-scanner { animation: scanner 2.5s linear infinite; }
      `}</style>
    </div>
  )
}
