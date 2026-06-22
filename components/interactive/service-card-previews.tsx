"use client"

import React, { useMemo } from "react"

/* ─── Software: Premium Mini IDE ─── */
export function SoftwarePreview({ isActive }: { isActive: boolean }) {
  const lines = useMemo(() => [
    [{ t: "import", c: "#c084fc" }, { t: " { Vivatel } ", c: "#e2e8f0" }, { t: "from", c: "#c084fc" }, { t: " '@sdk'", c: "#6ee7b7" }],
    [{ t: "const", c: "#c084fc" }, { t: " api ", c: "#e2e8f0" }, { t: "=", c: "#60a5fa" }, { t: " new ", c: "#c084fc" }, { t: "Vivatel()", c: "#93c5fd" }],
    [{ t: "await", c: "#c084fc" }, { t: " api.", c: "#e2e8f0" }, { t: "deploy", c: "#93c5fd" }, { t: "({", c: "#e2e8f0" }],
    [{ t: "  region:", c: "#94a3b8" }, { t: ' "ao-luanda"', c: "#6ee7b7" }],
    [{ t: "})", c: "#e2e8f0" }],
  ], [])

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, rgba(96,165,250,0.12), transparent 65%)" }} />

      <div
        className="relative w-full rounded-xl border border-white/10 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, rgba(20,22,34,0.9), rgba(10,11,18,0.9))",
          boxShadow: isActive ? "0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" : "none",
          transform: isActive ? "translateY(0)" : "translateY(8px)",
          transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease",
        }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <span className="ml-2 font-mono text-[9px] text-white/40">deploy.ts</span>
          <span className="ml-auto flex items-center gap-1 font-mono text-[8px] text-emerald-400/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: isActive ? "swPulse 1.4s ease-in-out infinite" : "none" }} />
            running
          </span>
        </div>

        {/* Code body */}
        <div className="px-3 py-3 space-y-1 font-mono text-[10px] leading-relaxed">
          {lines.map((tokens, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateX(0)" : "translateX(-10px)",
                transition: `opacity 0.35s ease ${0.1 + i * 0.09}s, transform 0.35s ease ${0.1 + i * 0.09}s`,
              }}
            >
              <span className="text-white/15 select-none w-3 text-right">{i + 1}</span>
              <span>{tokens.map((tk, j) => <span key={j} style={{ color: tk.c }}>{tk.t}</span>)}</span>
            </div>
          ))}
          <div className="flex items-center gap-2.5">
            <span className="text-white/15 select-none w-3 text-right">6</span>
            <span className="inline-block w-1.5 h-3.5 bg-blue-400 rounded-[1px]" style={{ animation: isActive ? "swBlink 1s step-end infinite" : "none" }} />
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center gap-2 px-3 py-1.5 border-t border-white/5" style={{ background: "rgba(59,130,246,0.06)" }}>
          <span className="font-mono text-[8px] text-blue-300/80">✓ build passed</span>
          <div className="ml-auto h-0.5 w-16 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: isActive ? "100%" : "0%", background: "linear-gradient(90deg,#60a5fa,#a78bfa)", transition: "width 1.4s ease 0.3s" }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes swBlink { 50% { opacity: 0; } }
        @keyframes swPulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
      `}</style>
    </div>
  )
}

/* ─── Security: Shield + Radar Sweep ─── */
export function SecurityPreview({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none">
        <defs>
          <radialGradient id="secShield" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="rgba(96,165,250,0.45)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0.08)" />
          </radialGradient>
          <linearGradient id="secSweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(96,165,250,0)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0.5)" />
          </linearGradient>
          <filter id="secGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Pulse rings */}
        {[0, 1, 2].map((i) => (
          <circle key={i} cx="60" cy="60" r={26 + i * 13} stroke="rgba(96,165,250,0.18)" strokeWidth="1"
            style={{ animation: isActive ? `secPulse 2.6s ease-out ${i * 0.6}s infinite` : "none", transformOrigin: "center" }} />
        ))}

        {/* Radar sweep */}
        <g style={{ animation: isActive ? "secSweep 3s linear infinite" : "none", transformOrigin: "60px 60px" }}>
          <path d="M60,60 L60,18 A42,42 0 0,1 96,40 Z" fill="url(#secSweep)" opacity="0.5" />
        </g>

        {/* Shield body */}
        <path d="M60 28 L82 41 L82 63 C82 80 60 92 60 92 C60 92 38 80 38 63 L38 41 Z"
          fill="url(#secShield)" stroke="rgba(96,165,250,0.7)" strokeWidth="1.5"
          style={{ filter: isActive ? "url(#secGlow)" : "none" }} />

        {/* Checkmark */}
        <path d="M50 60 L57 67 L72 51" stroke="#dbeafe" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
          style={{ strokeDasharray: 30, strokeDashoffset: isActive ? 0 : 30, transition: "stroke-dashoffset 0.6s ease 0.3s", filter: "drop-shadow(0 0 4px rgba(147,197,253,0.8))" }} />

        {/* Orbiting secure dots */}
        {[0, 1, 2, 3].map((i) => {
          const a = (i / 4) * Math.PI * 2
          return <circle key={`d-${i}`} cx={60 + Math.cos(a) * 46} cy={60 + Math.sin(a) * 46} r="2" fill="rgba(147,197,253,0.7)"
            style={{ animation: isActive ? `secBlink 2s ease-in-out ${i * 0.4}s infinite` : "none" }} />
        })}
      </svg>
      <style jsx>{`
        @keyframes secPulse { 0% { opacity: 0.6; transform: scale(1); } 100% { opacity: 0; transform: scale(1.5); } }
        @keyframes secSweep { to { transform: rotate(360deg); } }
        @keyframes secBlink { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
      `}</style>
    </div>
  )
}

/* ─── Cloud: Mesh Network with Hub ─── */
export function CloudPreview({ isActive }: { isActive: boolean }) {
  const nodes = useMemo(() => [
    { cx: 28, cy: 30 }, { cx: 92, cy: 26 }, { cx: 60, cy: 55 }, { cx: 24, cy: 82 }, { cx: 96, cy: 78 },
  ], [])
  const connections = useMemo(() => [[0, 2], [1, 2], [2, 3], [2, 4], [0, 3], [1, 4]], [])

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      <svg viewBox="0 0 120 110" className="w-full h-full" fill="none">
        <defs>
          <radialGradient id="cloudNode" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="rgba(147,197,253,0.5)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0.1)" />
          </radialGradient>
          <radialGradient id="cloudHub" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="rgba(191,219,254,0.9)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.4)" />
          </radialGradient>
          <filter id="cloudGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {connections.map(([a, b], i) => (
          <line key={`l-${i}`} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="rgba(96,165,250,0.22)" strokeWidth="1" strokeDasharray="4 3"
            style={{ animation: isActive ? `cloudDash 3s linear ${i * 0.3}s infinite` : "none" }} />
        ))}

        {/* Packets */}
        {connections.map(([a, b], i) => (
          <circle key={`p-${i}`} r="2" fill="#bfdbfe" style={{ filter: "url(#cloudGlow)" }}>
            <animateMotion dur={`${2.4 + (i % 3) * 0.4}s`} repeatCount="indefinite" begin={isActive ? `${i * 0.5}s` : "indefinite"}
              path={`M${nodes[a].cx},${nodes[a].cy} L${nodes[b].cx},${nodes[b].cy}`} />
          </circle>
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isHub = i === 2
          return (
            <g key={`n-${i}`} style={{ animation: isActive ? `cloudFloat 3.4s ease-in-out ${i * 0.4}s infinite` : "none", transformOrigin: `${node.cx}px ${node.cy}px` }}>
              <circle cx={node.cx} cy={node.cy} r={isHub ? 11 : 8} fill={isHub ? "url(#cloudHub)" : "url(#cloudNode)"}
                stroke="rgba(96,165,250,0.6)" strokeWidth="1" style={{ filter: isHub && isActive ? "url(#cloudGlow)" : "none" }} />
              <rect x={node.cx - 3} y={node.cy - 3} width="6" height="6" rx="1.5" fill="rgba(219,234,254,0.85)" />
            </g>
          )
        })}
      </svg>
      <style jsx>{`
        @keyframes cloudDash { to { stroke-dashoffset: -21; } }
        @keyframes cloudFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
      `}</style>
    </div>
  )
}

/* ─── Connectivity: Signal Tower ─── */
export function ConnectivityPreview({ isActive }: { isActive: boolean }) {
  const endpoints = useMemo(() => [{ x: 20, y: 80 }, { x: 48, y: 86 }, { x: 72, y: 86 }, { x: 100, y: 80 }], [])
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      <svg viewBox="0 0 120 100" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="connTower" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(147,197,253,0.6)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0.2)" />
          </linearGradient>
          <filter id="connGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Tower */}
        <rect x="56" y="34" width="8" height="32" rx="2" fill="url(#connTower)" />
        <circle cx="60" cy="30" r="4" fill="#bfdbfe" style={{ filter: isActive ? "url(#connGlow)" : "none" }} />

        {/* Signal arcs */}
        {[0, 1, 2, 3].map((i) => (
          <path key={`a-${i}`} d={`M${44 - i * 8},${48 - i * 6} Q60,${18 - i * 5} ${76 + i * 8},${48 - i * 6}`}
            stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" fill="none"
            style={{ animation: isActive ? `connWave 2s ease-out ${i * 0.3}s infinite` : "none", transformOrigin: "60px 30px" }} />
        ))}

        {/* Endpoints + descending packets */}
        {endpoints.map((p, i) => (
          <g key={`e-${i}`}>
            <line x1={p.x} y1={p.y - 5} x2="60" y2="66" stroke="rgba(96,165,250,0.12)" strokeWidth="0.75" strokeDasharray="2 3"
              style={{ animation: isActive ? `connDash 2s linear ${i * 0.2}s infinite` : "none" }} />
            <circle cx={p.x} cy={p.y} r="6" fill="rgba(59,130,246,0.08)" stroke="rgba(96,165,250,0.4)" strokeWidth="1"
              style={{ animation: isActive ? `connPing 2.4s ease-out ${i * 0.3}s infinite` : "none", transformOrigin: `${p.x}px ${p.y}px` }} />
            <circle cx={p.x} cy={p.y} r="2.5" fill="#93c5fd" />
            <circle r="1.8" fill="#dbeafe" style={{ filter: "url(#connGlow)" }}>
              <animateMotion dur="2s" repeatCount="indefinite" begin={isActive ? `${i * 0.4}s` : "indefinite"}
                path={`M60,66 L${p.x},${p.y}`} />
            </circle>
          </g>
        ))}
      </svg>
      <style jsx>{`
        @keyframes connWave { 0% { opacity: 0.8; transform: scaleY(0.8); } 100% { opacity: 0; transform: scaleY(1.35); } }
        @keyframes connDash { to { stroke-dashoffset: -10; } }
        @keyframes connPing { 0% { opacity: 0.6; transform: scale(0.7); } 100% { opacity: 0; transform: scale(1.6); } }
      `}</style>
    </div>
  )
}

/* ─── AI & DATA: Analytics Chart ─── */
export function AIDataPreview({ isActive }: { isActive: boolean }) {
  const bars = useMemo(() => [
    { v: 34 }, { v: 54 }, { v: 40 }, { v: 64 }, { v: 46 }, { v: 72 }, { v: 56 },
  ], [])
  const base = 90, top = 14, slot = 120 / bars.length, bw = 9
  const trend = useMemo(() =>
    bars.map((b, i) => {
      const x = slot * i + slot / 2
      const y = base - ((b.v / 100) * (base - top))
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
    }).join(" "), [bars, slot])

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      <svg viewBox="0 0 120 100" className="w-full h-full" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="aiBar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(59,130,246,0.25)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0.75)" />
          </linearGradient>
          <filter id="aiGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Grid */}
        {[0, 1, 2, 3].map((i) => (
          <line key={`g-${i}`} x1="2" x2="118" y1={top + i * ((base - top) / 3)} y2={top + i * ((base - top) / 3)}
            stroke="rgba(96,165,250,0.08)" strokeWidth="0.5" />
        ))}

        {/* Bars */}
        {bars.map((b, i) => {
          const x = slot * i + slot / 2 - bw / 2
          const h = (b.v / 100) * (base - top)
          return (
            <rect key={`b-${i}`} x={x} y={base - h} width={bw} height={h} rx="2" fill="url(#aiBar)"
              style={{ transform: isActive ? "scaleY(1)" : "scaleY(0)", transformOrigin: `center ${base}px`, transformBox: "fill-box", transition: `transform 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s` }} />
          )
        })}

        {/* Trend line */}
        <path d={trend} stroke="#bfdbfe" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
          style={{ strokeDasharray: 260, strokeDashoffset: isActive ? 0 : 260, transition: "stroke-dashoffset 1s ease 0.4s", filter: "url(#aiGlow)" }} />

        {/* Trend points */}
        {bars.map((b, i) => {
          const x = slot * i + slot / 2
          const y = base - ((b.v / 100) * (base - top))
          return <circle key={`pt-${i}`} cx={x} cy={y} r="1.8" fill="#dbeafe"
            style={{ opacity: isActive ? 1 : 0, transition: `opacity 0.3s ease ${0.5 + i * 0.07}s`, filter: "url(#aiGlow)" }} />
        })}
      </svg>
      <style jsx>{``}</style>
    </div>
  )
}

/* ─── Academias & Labs: Orbiting Knowledge ─── */
export function AcademyPreview({ isActive }: { isActive: boolean }) {
  const particles = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({ a: (i / 8) * Math.PI * 2, size: 1.6 + (i % 3) * 0.7, delay: i * 0.18 })), [])

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      <svg viewBox="0 0 120 100" className="w-28 h-24" fill="none">
        <defs>
          <linearGradient id="acCap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(147,197,253,0.55)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0.15)" />
          </linearGradient>
          <filter id="acGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Orbit rings */}
        <ellipse cx="60" cy="50" rx="38" ry="30" stroke="rgba(96,165,250,0.15)" strokeWidth="1" strokeDasharray="3 4"
          style={{ animation: isActive ? "acSpin 14s linear infinite" : "none", transformOrigin: "60px 50px" }} />

        {/* Mortarboard */}
        <g style={{ filter: isActive ? "url(#acGlow)" : "none" }}>
          <path d="M60 28 L90 42 L60 56 L30 42 Z" fill="url(#acCap)" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" />
          <path d="M42 47 L42 65 Q60 75 78 65 L78 47" stroke="rgba(96,165,250,0.35)" strokeWidth="1" fill="rgba(59,130,246,0.06)" />
          <line x1="90" y1="42" x2="90" y2="60" stroke="rgba(96,165,250,0.5)" strokeWidth="1" />
          <circle cx="90" cy="62" r="2.4" fill="#93c5fd" style={{ animation: isActive ? "acTassel 2s ease-in-out infinite" : "none", transformOrigin: "90px 42px" }} />
        </g>

        {/* Orbiting particles */}
        <g style={{ animation: isActive ? "acSpin 9s linear infinite" : "none", transformOrigin: "60px 50px" }}>
          {particles.map((p, i) => (
            <circle key={i} cx={60 + Math.cos(p.a) * 38} cy={50 + Math.sin(p.a) * 30} r={p.size} fill="#93c5fd"
              style={{ opacity: isActive ? 1 : 0, animation: isActive ? `acBlink 2.4s ease-in-out ${p.delay}s infinite` : "none", filter: "url(#acGlow)" }} />
          ))}
        </g>
      </svg>
      <style jsx>{`
        @keyframes acSpin { to { transform: rotate(360deg); } }
        @keyframes acBlink { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes acTassel { 0%,100% { transform: rotate(-6deg); } 50% { transform: rotate(6deg); } }
      `}</style>
    </div>
  )
}
