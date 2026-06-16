'use client';

import { Search, Moon, Bell, Cloud } from 'lucide-react';

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/5 bg-[#121016]/80 px-4 backdrop-blur-md sm:px-6">
      {/* Mobile Title / Breadcrumb Placeholder */}
      <div className="flex items-center gap-2 lg:hidden">
        <span className="text-lg font-bold text-white">SmartHub</span>
      </div>

      {/* Search */}
      <div className="hidden min-w-0 max-w-md flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 lg:flex">
        <Search className="h-4 w-4 text-white/40" />
        <input
          type="text"
          placeholder="Pesquisar dispositivos, divisões, rotinas..."
          className="bg-transparent text-sm text-white placeholder-white/35 outline-none flex-1"
        />
      </div>

      <div className="flex shrink-0 items-center gap-3 sm:gap-4 lg:ml-auto">
        {/* Weather / Time Widget */}
        <span className="hidden items-center rounded-full bg-white/10 p-1 sm:flex">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
            <Moon className="h-4 w-4" />
          </span>
          <span className="flex h-7 w-7 items-center justify-center text-white/40">
            <Cloud className="h-4 w-4" />
          </span>
        </span>
        
        {/* Notifications */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-2 border-l border-white/10">
          <div className="hidden leading-tight text-right sm:block">
            <p className="text-sm font-semibold text-white">Ethan Maxwell</p>
            <p className="text-[11px] text-[#00d4ff]">Administrador</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00d4ff] text-xs font-bold text-white shadow-lg">
            EM
          </span>
        </div>
      </div>
    </header>
  );
}
