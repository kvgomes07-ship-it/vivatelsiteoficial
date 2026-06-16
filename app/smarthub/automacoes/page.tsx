'use client';

import { CalendarDays, Plus } from 'lucide-react';

export default function SmartHubAutomacoes() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">Automações</h1>
          <p className="text-sm text-white/45 mt-1 font-medium">Regras, gatilhos e condições para a sua casa.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#7B61FF] hover:bg-[#6a50e5] transition-colors text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-[#7B61FF]/20">
          <Plus className="w-4 h-4" />
          Nova Rotina
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 bg-white/[0.02] rounded-2xl">
         <CalendarDays className="w-16 h-16 text-white/20 mb-4" />
         <h2 className="text-lg font-bold text-white mb-2">Nenhuma automação configurada</h2>
         <p className="text-sm text-white/40 max-w-md">Crie regras inteligentes para que a sua casa responda automaticamente à sua rotina diária.</p>
      </div>
    </div>
  );
}
