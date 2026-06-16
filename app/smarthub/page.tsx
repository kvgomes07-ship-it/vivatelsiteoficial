import React from 'react';
import { CameraWidget, LightingWidget, AudioWidget, ClimateWidget, EnergyWidget, SecurityWidget } from '@/components/smarthub/DashboardWidgets';

export default function SmartHubHome() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in pb-10">
      
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">Resumo da Casa</h1>
        <p className="text-sm text-white/45 mt-1 font-medium">Tudo sob controlo. Segurança, conforto e eficiência.</p>
      </div>

      {/* Top Status Chips */}
      <div className="flex flex-wrap items-center gap-3">
         <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-xs font-bold text-emerald-400">Casa Online</span>
         </div>
         <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
            <span className="text-xs font-bold text-white/80">Segurança Desarmada</span>
         </div>
         <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/10 text-[#f59e0b]">
            <span className="text-xs font-bold">22.5°C</span>
         </div>
         <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#00d4ff]/20 bg-[#00d4ff]/10 text-[#00d4ff]">
            <span className="text-xs font-bold">14.2 kWh Hoje</span>
         </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
        
        {/* Left Column (Cameras) - spans 8 cols */}
        <div className="lg:col-span-8 h-64 sm:h-80 lg:h-auto min-h-[320px]">
           <CameraWidget />
        </div>

        {/* Right Column - spans 4 cols */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
           <LightingWidget />
           <AudioWidget />
        </div>

        {/* Bottom Row - 4 cols each */}
        <div className="lg:col-span-4">
           <ClimateWidget />
        </div>
        <div className="lg:col-span-4">
           <EnergyWidget />
        </div>
        <div className="lg:col-span-4">
           <SecurityWidget />
        </div>

      </div>
      
      <style>{`
        @keyframes shp-eq { 0%,100% { transform: scaleY(.3); } 50% { transform: scaleY(1); } }
        @keyframes shp-dial-k { 0%,100% { stroke-dashoffset: 0; } 50% { stroke-dashoffset: -6; } }
        .shp-dial { animation: shp-dial-k 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 4s linear infinite; }
      `}</style>
    </div>
  );
}
