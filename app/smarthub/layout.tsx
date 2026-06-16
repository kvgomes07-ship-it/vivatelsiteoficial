import { Metadata } from 'next';
import { Sidebar } from '@/components/smarthub/Sidebar';
import { Header } from '@/components/smarthub/Header';

export const metadata: Metadata = {
  title: 'VivaTel SmartHub',
  description: 'A tua casa inteira, num só ecrã.',
};

export default function SmartHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0c0b10] text-white selection:bg-[#7B61FF]/30">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden relative">
        {/* Subtle Background Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#7B61FF]/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-[#00d4ff]/10 blur-[100px]" />
        </div>

        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 lg:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
