import React from "react"
import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 backdrop-blur-sm relative z-30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12 text-left">
          <div>
            <div className="font-black text-xl mb-4 italic tracking-tighter uppercase">VIVATEL</div>
            <p className="text-gray-500 text-xs font-bold leading-relaxed uppercase tracking-widest">Infraestrutura Digital Soberana para Angola</p>
          </div>
          <div>
            <h4 className="font-black text-[10px] mb-4 uppercase tracking-[0.2em] text-blue-500">Produtos</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-500">
              <li><Link href="/servicos/cloud" className="hover:text-blue-400 transition-colors">Cloud</Link></li>
              <li><Link href="/servicos/analytics" className="hover:text-blue-400 transition-colors">Analytics</Link></li>
              <li><Link href="/servicos/security" className="hover:text-blue-400 transition-colors">Security</Link></li>
              <li><Link href="/servicos/conectividade" className="hover:text-blue-400 transition-colors">Conectividade</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[10px] mb-4 uppercase tracking-[0.2em] text-blue-500">Empresa</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-500">
              <li><Link href="/sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</Link></li>
              <li><Link href="/documentacao" className="hover:text-blue-400 transition-colors">Documentação</Link></li>
              <li><Link href="/suporte" className="hover:text-blue-400 transition-colors">Suporte</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[10px] mb-4 uppercase tracking-[0.2em] text-blue-500">Legal</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-500">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacidade</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Termos</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:row justify-between items-center gap-4">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">© 2026 VIVATEL. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="h-4 w-4" /></Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
