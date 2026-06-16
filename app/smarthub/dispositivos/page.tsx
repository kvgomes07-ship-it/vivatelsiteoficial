'use client';

import React, { useState } from 'react';
import { Camera, Lightbulb, Wind, Speaker, Shield, Wifi, Power, Settings2, Plus } from 'lucide-react';

const mockDevices = [
  { id: 'dev_1', name: 'Câmara Entrada', type: 'Camera', status: 'online', room: 'Entrada', ping: '12ms', lastSeen: 'Agora' },
  { id: 'dev_2', name: 'Luz Sala Principal', type: 'Lighting', status: 'online', room: 'Sala de Estar', ping: '5ms', lastSeen: 'Agora' },
  { id: 'dev_3', name: 'AC Quarto', type: 'Climate', status: 'online', room: 'Quarto', ping: '8ms', lastSeen: 'Agora' },
  { id: 'dev_4', name: 'Coluna Bluetooth', type: 'Audio', status: 'offline', room: 'Sala de Estar', ping: '-', lastSeen: 'Há 2h' },
  { id: 'dev_5', name: 'Alarme', type: 'Security', status: 'online', room: 'Casa Inteira', ping: '2ms', lastSeen: 'Agora' },
];

export default function SmartHubDevices() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? mockDevices : mockDevices.filter(d => d.type === filter);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Camera': return <Camera className="w-5 h-5" />;
      case 'Lighting': return <Lightbulb className="w-5 h-5" />;
      case 'Climate': return <Wind className="w-5 h-5" />;
      case 'Audio': return <Speaker className="w-5 h-5" />;
      case 'Security': return <Shield className="w-5 h-5" />;
      default: return <Wifi className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in pb-10">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">Dispositivos</h1>
          <p className="text-sm text-white/45 mt-1 font-medium">Lista e controlo de todos os dispositivos conectados.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#7B61FF] hover:bg-[#6a50e5] transition-colors text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-[#7B61FF]/20">
          <Plus className="w-4 h-4" />
          Adicionar Dispositivo
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {['All', 'Camera', 'Lighting', 'Climate', 'Audio', 'Security'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors border ${
              filter === f 
                ? 'bg-white text-black border-white' 
                : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            {f === 'All' ? 'Todos' : f}
          </button>
        ))}
      </div>

      {/* Devices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(dev => (
          <div key={dev.id} className="rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-5 relative overflow-hidden group">
            
            <div className="flex items-start justify-between">
               <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dev.status === 'online' ? 'bg-[#00d4ff]/10 text-[#00d4ff]' : 'bg-white/5 text-white/30'}`}>
                 {getIcon(dev.type)}
               </div>
               
               <div className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider flex items-center gap-1.5 border ${
                 dev.status === 'online' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
               }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${dev.status === 'online' ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                  {dev.status === 'online' ? 'Online' : 'Offline'}
               </div>
            </div>

            <div className="mt-5">
              <h3 className="text-sm font-bold text-white truncate">{dev.name}</h3>
              <p className="text-[11px] text-white/40 mt-1">{dev.room}</p>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-white/30">
               <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> {dev.ping}</span>
               <span>Visto: {dev.lastSeen}</span>
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-black/80 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform flex items-center gap-2">
              <button className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-lg py-2 text-xs font-semibold transition-colors flex items-center justify-center gap-2">
                <Settings2 className="w-3.5 h-3.5" /> Configurar
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                <Power className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
