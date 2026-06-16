'use client';

import { Zap, Download } from 'lucide-react';

export default function SmartHubEnergia() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">Consumo de Energia</h1>
          <p className="text-sm text-white/45 mt-1 font-medium">Relatórios, gráficos e comparativos de consumo.</p>
        </div>
        <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white px-4 py-2 rounded-xl text-sm font-bold">
          <Download className="w-4 h-4" />
          Exportar Relatório
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 bg-white/[0.02] rounded-2xl">
         <Zap className="w-16 h-16 text-[#00d4ff]/20 mb-4" />
         <h2 className="text-lg font-bold text-white mb-2">Painel de Energia em Desenvolvimento</h2>
         <p className="text-sm text-white/40 max-w-md">Monitorize os gastos em tempo real e poupe todos os meses com análises detalhadas.</p>
      </div>
    </div>
  );
}
