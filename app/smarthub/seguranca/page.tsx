'use client';

import { Shield, Lock } from 'lucide-react';

export default function SmartHubSeguranca() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">Segurança</h1>
          <p className="text-sm text-white/45 mt-1 font-medium">Eventos, alarmes e histórico de segurança.</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
          <Lock className="w-4 h-4" />
          Armar Sistema
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 bg-white/[0.02] rounded-2xl">
         <Shield className="w-16 h-16 text-emerald-500/20 mb-4" />
         <h2 className="text-lg font-bold text-white mb-2">Sistema Desarmado</h2>
         <p className="text-sm text-white/40 max-w-md">Todos os sensores estão operacionais e a reportar estado normal.</p>
      </div>
    </div>
  );
}
