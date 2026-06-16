"use client"

import React, { useMemo } from "react"

/* ─── Software: Mini Terminal ─── */
export function SoftwarePreview({ isActive }: { isActive: boolean }) {
  const lines = useMemo(() => [
    { text: "import { Vivatel } from '@sdk'", color: "#60a5fa" },
    { text: "const api = new Vivatel()", color: "#93c5fd" },
    { text: "await api.deploy({", color: "#93c5fd" },
    { text: '  region: "ao-luanda"', color: "#6ee7b7" },
    { text: "})", color: "#93c5fd" },
  ], [])

  return (
    <div className="w-full h-full flex flex-col" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      {/* Terminal header dots */}
      <div className="flex gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-500/40" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
        <div className="w-2 h-2 rounded-full bg-green-500/40" />
      </div>
      {/* Code lines */}
      <div className="space-y-1 font-mono text-[10px] leading-relaxed">
        {lines.map((line, i) => (
          <div
            key={i}
            className="flex items-center gap-2"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateX(0)" : "translateX(-8px)",
              transition: `opacity 0.3s ease ${i * 0.08}s, transform 0.3s ease ${i * 0.08}s`,
            }}
          >
            <span className="text-white/20 select-none w-3 text-right">{i + 1}</span>
            <span style={{ color: line.color }}>{line.text}</span>
          </div>
        ))}
        {/* Blinking cursor */}
        <div className="flex items-center gap-2">
          <span className="text-white/20 select-none w-3 text-right">6</span>
          <span
            className="inline-block w-1.5 h-3 bg-blue-400"
            style={{
              animation: isActive ? "blink 1s step-end infinite" : "none",
            }}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

/* ─── Security: Shield with Pulse Rings ─── */
export function SecurityPreview({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      <svg viewBox="0 0 120 120" className="w-24 h-24" fill="none">
        {/* Pulse rings */}
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            cx="60" cy="60"
            r={25 + i * 12}
            stroke="rgba(59,130,246,0.15)"
            strokeWidth="1"
            style={{
              animation: isActive ? `secPulse 2.4s ease-out ${i * 0.5}s infinite` : "none",
              transformOrigin: "center",
            }}
          />
        ))}
        {/* Shield body */}
        <path
          d="M60 30 L80 42 L80 62 C80 78 60 90 60 90 C60 90 40 78 40 62 L40 42 Z"
          fill="rgba(59,130,246,0.1)"
          stroke="rgba(59,130,246,0.6)"
          strokeWidth="1.5"
          style={{
            filter: isActive ? "drop-shadow(0 0 6px rgba(59,130,246,0.4))" : "none",
          }}
        />
        {/* Checkmark */}
        <path
          d="M50 60 L57 67 L72 52"
          stroke="rgba(59,130,246,0.8)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            strokeDasharray: 30,
            strokeDashoffset: isActive ? 0 : 30,
            transition: "stroke-dashoffset 0.6s ease 0.2s",
          }}
        />
        {/* Scan line */}
        <line
          x1="40" y1="60" x2="80" y2="60"
          stroke="rgba(59,130,246,0.3)"
          strokeWidth="1"
          style={{
            animation: isActive ? "scanLine 2s ease-in-out infinite" : "none",
          }}
        />
      </svg>
      <style jsx>{`
        @keyframes secPulse {
          0% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.4); }
        }
        @keyframes scanLine {
          0%, 100% { transform: translateY(-15px); opacity: 0; }
          50% { transform: translateY(15px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

/* ─── Cloud: Floating Nodes with Connections ─── */
export function CloudPreview({ isActive }: { isActive: boolean }) {
  const nodes = useMemo(() => [
    { cx: 30, cy: 30 },
    { cx: 90, cy: 25 },
    { cx: 60, cy: 55 },
    { cx: 25, cy: 80 },
    { cx: 95, cy: 75 },
  ], [])

  const connections = useMemo(() => [
    [0, 2], [1, 2], [2, 3], [2, 4], [0, 3], [1, 4],
  ], [])

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      <svg viewBox="0 0 120 110" className="w-full h-full" fill="none">
        {/* Connection lines */}
        {connections.map(([a, b], i) => (
          <line
            key={`line-${i}`}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="rgba(59,130,246,0.2)"
            strokeWidth="1"
            strokeDasharray="4 3"
            style={{
              animation: isActive ? `dashFlow 3s linear ${i * 0.3}s infinite` : "none",
            }}
          />
        ))}
        {/* Data packets travelling along connections */}
        {connections.slice(0, 3).map(([a, b], i) => (
          <circle
            key={`packet-${i}`}
            r="2"
            fill="rgba(59,130,246,0.8)"
            style={{
              animation: isActive ? `travelPath${i} 2.5s ease-in-out ${i * 0.6}s infinite` : "none",
            }}
          >
            <animateMotion
              dur={`${2.5 + i * 0.3}s`}
              repeatCount="indefinite"
              begin={`${i * 0.6}s`}
              path={`M${nodes[a].cx},${nodes[a].cy} L${nodes[b].cx},${nodes[b].cy}`}
            />
          </circle>
        ))}
        {/* Server nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={node.cx} cy={node.cy} r="8"
              fill="rgba(59,130,246,0.08)"
              stroke="rgba(59,130,246,0.4)"
              strokeWidth="1"
              style={{
                animation: isActive ? `nodeFloat 3s ease-in-out ${i * 0.4}s infinite` : "none",
              }}
            />
            <rect
              x={node.cx - 3} y={node.cy - 3}
              width="6" height="6" rx="1"
              fill="rgba(59,130,246,0.6)"
            />
          </g>
        ))}
      </svg>
      <style jsx>{`
        @keyframes dashFlow {
          to { stroke-dashoffset: -20; }
        }
        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </div>
  )
}

/* ─── Connectivity: Signal Wave Network ─── */
export function ConnectivityPreview({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      <svg viewBox="0 0 120 100" className="w-full h-full" fill="none">
        {/* Central tower */}
        <rect x="56" y="35" width="8" height="30" rx="2" fill="rgba(59,130,246,0.3)" />
        <circle cx="60" cy="32" r="4" fill="rgba(59,130,246,0.5)" />

        {/* Signal arcs emanating from tower */}
        {[0, 1, 2, 3].map((i) => (
          <path
            key={`arc-${i}`}
            d={`M${44 - i * 8},${50 - i * 6} Q60,${20 - i * 5} ${76 + i * 8},${50 - i * 6}`}
            stroke="rgba(59,130,246,0.25)"
            strokeWidth="1.5"
            fill="none"
            style={{
              animation: isActive ? `waveExpand 2s ease-out ${i * 0.3}s infinite` : "none",
              transformOrigin: "60px 32px",
            }}
          />
        ))}

        {/* Ground endpoints */}
        {[{ x: 20, y: 80 }, { x: 50, y: 85 }, { x: 70, y: 85 }, { x: 100, y: 80 }].map((p, i) => (
          <g key={`endpoint-${i}`}>
            <circle
              cx={p.x} cy={p.y} r="5"
              fill="rgba(59,130,246,0.06)"
              stroke="rgba(59,130,246,0.3)"
              strokeWidth="1"
            />
            <circle cx={p.x} cy={p.y} r="2" fill="rgba(59,130,246,0.5)" />
            {/* Connection line to tower */}
            <line
              x1={p.x} y1={p.y - 5}
              x2="60" y2="65"
              stroke="rgba(59,130,246,0.1)"
              strokeWidth="0.5"
              strokeDasharray="2 3"
              style={{
                animation: isActive ? `dashFlow 2s linear ${i * 0.2}s infinite` : "none",
              }}
            />
          </g>
        ))}
      </svg>
      <style jsx>{`
        @keyframes waveExpand {
          0% { opacity: 0.8; transform: scaleY(0.8); }
          100% { opacity: 0; transform: scaleY(1.3); }
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -10; }
        }
      `}</style>
    </div>
  )
}

/* ─── AI & DATA: Animated Chart ─── */
export function AIDataPreview({ isActive }: { isActive: boolean }) {
  const bars = useMemo(() => [
    { height: 35, delay: 0 },
    { height: 55, delay: 0.08 },
    { height: 40, delay: 0.16 },
    { height: 65, delay: 0.24 },
    { height: 45, delay: 0.32 },
    { height: 70, delay: 0.4 },
    { height: 50, delay: 0.48 },
  ], [])

  return (
    <div className="w-full h-full flex items-end justify-center gap-1.5 px-2 pb-2" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      {bars.map((bar, i) => (
        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full relative">
          {/* Bar */}
          <div
            className="w-full rounded-t-sm relative overflow-hidden"
            style={{
              height: isActive ? `${bar.height}%` : "0%",
              background: "linear-gradient(to top, rgba(59,130,246,0.3), rgba(59,130,246,0.6))",
              transition: `height 0.5s ease ${bar.delay}s`,
              maxWidth: "14px",
            }}
          >
            {/* Shimmer effect */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, transparent, rgba(255,255,255,0.1), transparent)",
                animation: isActive ? `shimmer 2s ease-in-out ${bar.delay + 0.5}s infinite` : "none",
              }}
            />
          </div>
          {/* Dot at top */}
          <div
            className="w-1.5 h-1.5 rounded-full bg-blue-400 -mt-1 relative z-10"
            style={{
              opacity: isActive ? 1 : 0,
              transition: `opacity 0.3s ease ${bar.delay + 0.3}s`,
              boxShadow: "0 0 6px rgba(59,130,246,0.5)",
            }}
          />
        </div>
      ))}
      {/* Horizontal grid lines */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between px-2 py-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="w-full border-b border-blue-500/5" />
        ))}
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { transform: translateY(100%); }
          50% { transform: translateY(-100%); }
        }
      `}</style>
    </div>
  )
}

/* ─── Stream & IoT: Signal Waveform ─── */
export function IoTStreamPreview({ isActive }: { isActive: boolean }) {
  // Generate a smooth sine wave path
  const wavePath = useMemo(() => {
    const points: string[] = []
    for (let x = 0; x <= 120; x += 2) {
      const y = 50 + Math.sin((x / 120) * Math.PI * 4) * 18
      points.push(`${x === 0 ? "M" : "L"}${x},${y.toFixed(2)}`)
    }
    return points.join(" ")
  }, [])

  const wavePath2 = useMemo(() => {
    const points: string[] = []
    for (let x = 0; x <= 120; x += 2) {
      const y = 50 + Math.sin((x / 120) * Math.PI * 3 + 1) * 12
      points.push(`${x === 0 ? "M" : "L"}${x},${y.toFixed(2)}`)
    }
    return points.join(" ")
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      <svg viewBox="0 0 120 100" className="w-full h-full" fill="none" preserveAspectRatio="none">
        {/* Primary wave */}
        <path
          d={wavePath}
          stroke="rgba(59,130,246,0.5)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 300,
            strokeDashoffset: isActive ? 0 : 300,
            transition: "stroke-dashoffset 1s ease",
            filter: "drop-shadow(0 0 3px rgba(59,130,246,0.3))",
          }}
        />
        {/* Secondary wave */}
        <path
          d={wavePath2}
          stroke="rgba(59,130,246,0.2)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 250,
            strokeDashoffset: isActive ? 0 : 250,
            transition: "stroke-dashoffset 1.2s ease 0.15s",
          }}
        />
        {/* Scanning dot on primary wave */}
        <circle r="3" fill="rgba(59,130,246,0.9)">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path={wavePath}
            begin={isActive ? "0s" : "indefinite"}
          />
        </circle>
        {/* Glow accent */}
        <circle cx="60" cy="50" r="30" fill="rgba(59,130,246,0.03)" style={{
          animation: isActive ? "iotGlow 3s ease-in-out infinite" : "none",
        }} />
      </svg>
      <style jsx>{`
        @keyframes iotGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}

/* ─── Academias & Labs: Knowledge Particles ─── */
export function AcademyPreview({ isActive }: { isActive: boolean }) {
  const particles = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      x: +(35 + Math.cos((i / 8) * Math.PI * 2) * 28).toFixed(2),
      y: +(45 + Math.sin((i / 8) * Math.PI * 2) * 22).toFixed(2),
      delay: i * 0.15,
      size: 2 + (i % 3),
    })), [])

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ opacity: isActive ? 1 : 0.15, transition: "opacity 0.4s ease" }}>
      <svg viewBox="0 0 120 100" className="w-28 h-24" fill="none">
        {/* Book / mortarboard icon */}
        <path
          d="M60 25 L90 40 L60 55 L30 40 Z"
          fill="rgba(59,130,246,0.15)"
          stroke="rgba(59,130,246,0.5)"
          strokeWidth="1.5"
          style={{
            filter: isActive ? "drop-shadow(0 0 4px rgba(59,130,246,0.3))" : "none",
          }}
        />
        <path
          d="M42 45 L42 65 Q60 75 78 65 L78 45"
          stroke="rgba(59,130,246,0.3)"
          strokeWidth="1"
          fill="rgba(59,130,246,0.05)"
        />
        {/* Tassel */}
        <line x1="90" y1="40" x2="90" y2="60" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
        <circle cx="90" cy="62" r="2" fill="rgba(59,130,246,0.5)" />

        {/* Orbiting knowledge particles */}
        {particles.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill="rgba(59,130,246,0.4)"
            style={{
              opacity: isActive ? 1 : 0,
              animation: isActive ? `particleOrbit 4s ease-in-out ${p.delay}s infinite` : "none",
              transformOrigin: "60px 45px",
            }}
          />
        ))}
      </svg>
      <style jsx>{`
        @keyframes particleOrbit {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 0.9; transform: scale(1.1) rotate(180deg); }
        }
      `}</style>
    </div>
  )
}
