'use client';

import React from 'react';
import { 
  Sparkles, Search, Moon, Bell, Cloud, 
  Video, Power, Disc3, Monitor, Mic, Move, 
  Speaker, Wifi, Router, Heart, SkipBack, SkipForward, Play, Wind, Shield, Activity, Zap
} from 'lucide-react';

const ACCENT = '#7B61FF';
const CYAN = '#00d4ff';
const AMBER = '#f59e0b';
const GREEN = '#10b981';

export function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={`rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors ${className}`}>{children}</div>;
}

export function Dial({ value, color = ACCENT }: { value: number; color?: string }) {
  const R = 34;
  const C = 2 * Math.PI * R;
  const span = 0.62;
  const dash = C * span;
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16 sm:h-20 sm:w-20 -rotate-[110deg]">
      <circle cx="40" cy="40" r={R} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" strokeLinecap="round" strokeDasharray={`${dash} ${C}`} />
      <circle cx="40" cy="40" r={R} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeDasharray={`${dash * value} ${C}`} className="shp-dial" />
    </svg>
  );
}

export function CameraWidget() {
  return (
    <Card className="relative aspect-[16/10] overflow-hidden p-0 h-full group">
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(120% 100% at 70% 20%, rgba(123,97,255,0.15), transparent 55%), radial-gradient(100% 100% at 20% 90%, rgba(0,212,255,0.10), transparent 60%), linear-gradient(160deg,#1b160f,#0c0b10)` }}
      />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(90deg,#fff 0 1px,transparent 1px 42px), repeating-linear-gradient(0deg,#fff 0 1px,transparent 1px 42px)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-semibold backdrop-blur-md border border-white/10 text-white shadow-lg">
        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        Live
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">Entrada Principal ▾</span>

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
        {[Disc3, Monitor, Mic, Move].map((Icon, i) => (
          <button key={i} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/80 backdrop-blur-md hover:bg-white/20 transition-colors">
            <Icon className="h-4 w-4" />
          </button>
        ))}
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg shadow-[#7B61FF]/20 hover:scale-105 transition-transform" style={{ backgroundColor: ACCENT }}>
          <Power className="h-4 w-4" />
        </button>
      </div>
    </Card>
  );
}

export function LightingWidget() {
  return (
    <Card className="p-5 flex flex-col justify-between h-full">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00d4ff]/10">
              <Sparkles className="h-4 w-4" style={{ color: CYAN }} />
            </div>
            <span className="text-sm font-semibold text-white">Iluminação</span>
          </div>
          <span className="text-[10px] text-white/40 uppercase tracking-wider font-bold">4 Ativas</span>
        </div>
        <div className="flex flex-col gap-2.5 mt-2">
           {['Sala de Estar', 'Cozinha', 'Quarto'].map((room, i) => (
             <div key={room} className="flex items-center justify-between group">
               <div className="flex items-center gap-2.5">
                 <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-white/20' : 'bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.6)]'}`} />
                 <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors">{room}</span>
               </div>
               <span className="text-[10px] text-white/50">{i === 2 ? 'Off' : i === 0 ? '100%' : '70%'}</span>
             </div>
           ))}
        </div>
      </div>
    </Card>
  );
}

export function AudioWidget() {
  return (
    <Card className="p-5 flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Background glow when playing */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7B61FF] via-[#5b6cf0] to-[#00d4ff] shadow-lg shadow-[#7B61FF]/20">
              <Disc3 className="h-5 w-5 text-white animate-spin-slow" style={{ animationDuration: '4s' }} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-white">Starboy</p>
              <p className="truncate text-xs text-white/50">The Weeknd</p>
            </div>
          </div>
          <button>
            <Heart className="h-5 w-5" style={{ color: '#ef4444', fill: '#ef4444' }} />
          </button>
        </div>
        
        <div className="mt-6 flex items-center justify-center gap-1 h-8" aria-hidden>
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 origin-bottom rounded-sm bg-gradient-to-t from-[#7B61FF] to-[#00d4ff]"
              style={{ 
                height: Math.max(10, Math.random() * 24 + 8), 
                animation: `shp-eq ${0.5 + (i % 3) * 0.2}s ease-in-out ${(i % 4) * 0.1}s infinite alternate` 
              }}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}

export function ClimateWidget() {
  return (
    <Card className="p-5 h-full relative overflow-hidden">
       {/* Cold vibe background */}
       <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 rounded-full blur-3xl" />
       
       <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00d4ff]/10 text-[#00d4ff]">
            <Wind className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Climatização</p>
            <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Sala de Estar</p>
          </div>
        </div>
        <span className="flex h-5 w-9 items-center rounded-full p-0.5 cursor-pointer" style={{ backgroundColor: ACCENT }}>
          <span className="ml-auto h-4 w-4 rounded-full bg-white shadow-sm" />
        </span>
      </div>
      <div className="mt-4 flex items-center justify-center relative z-10">
        <div className="relative flex items-center justify-center">
          <Dial value={0.65} color={CYAN} />
          <div className="absolute text-center flex flex-col items-center">
            <p className="text-xl font-black leading-none text-white tracking-tighter">22.5<span className="text-sm font-semibold text-white/60">°</span></p>
            <p className="text-[9px] text-[#00d4ff] font-bold tracking-widest mt-0.5">AUTO</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function EnergyWidget() {
  return (
    <Card className="p-5 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f59e0b]/10 text-[#f59e0b]">
            <Activity className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold text-white">Energia</span>
        </div>
        <span className="text-[10px] text-white/40 font-medium">Consumo Hoje</span>
      </div>
      
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-2xl font-black text-white leading-none">14.2<span className="text-sm font-medium text-white/50 ml-1">kWh</span></p>
          <p className="text-xs text-emerald-400 font-medium mt-1 flex items-center gap-1">↓ 12% vs ontem</p>
        </div>
        
        {/* Mini Bar Chart Mock */}
        <div className="flex items-end gap-1.5 h-10">
          {[40, 70, 45, 90, 60, 30, 80].map((h, i) => (
            <div key={i} className="w-2 rounded-t-sm bg-white/20" style={{ height: `${h}%` }}>
              {i === 3 && <div className="w-full h-full bg-[#f59e0b] rounded-t-sm shadow-[0_0_8px_rgba(245,158,11,0.5)]" />}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function SecurityWidget() {
    return (
      <Card className="p-5 h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <Shield className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold text-white">Segurança</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400">Desarmado</span>
        </div>

        <div className="space-y-3 mt-4">
           <div className="flex items-center justify-between bg-black/20 p-3 rounded-xl border border-white/5">
             <div className="flex items-center gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
               <span className="text-xs font-medium text-white/80">Sensores Porta/Janela</span>
             </div>
             <span className="text-[10px] text-white/40">6 normais</span>
           </div>
           
           <div className="flex items-center justify-between bg-black/20 p-3 rounded-xl border border-white/5">
             <div className="flex items-center gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
               <span className="text-xs font-medium text-white/80">Alarme Principal</span>
             </div>
             <span className="text-[10px] text-white/40">Inativo</span>
           </div>
        </div>
      </Card>
    );
  }
