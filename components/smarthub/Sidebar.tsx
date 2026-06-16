'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, CalendarDays, Lock, Zap, Settings, Bell, Sparkles } from 'lucide-react';

const MENU_ITEMS = [
  { icon: Home, label: 'Home', href: '/smarthub' },
  { icon: LayoutGrid, label: 'Dispositivos', href: '/smarthub/dispositivos' },
  { icon: CalendarDays, label: 'Automações', href: '/smarthub/automacoes' },
  { icon: Zap, label: 'Energia', href: '/smarthub/energia' },
  { icon: Lock, label: 'Segurança', href: '/smarthub/seguranca' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-white/10 bg-[#0c0b10] p-4 lg:flex">
      {/* Brand */}
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7B61FF] to-[#00d4ff]">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <span className="text-lg font-bold text-white">VivaTel <span className="font-light">SmartHub</span></span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-white/45 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? 'text-[#00d4ff]' : ''}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto space-y-1 pt-4">
        <Link
          href="/smarthub/definicoes"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/45 transition-colors hover:bg-white/5 hover:text-white"
        >
          <Settings className="h-5 w-5" />
          Definições
        </Link>
      </div>
    </aside>
  );
}
