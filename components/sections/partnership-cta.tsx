import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe } from "lucide-react"
import { PremiumCard } from "../ui/premium-card"
import { Marquee } from "../ui/marquee-client"

const partners = [
  { name: "Angola Cable", logo: "/angolacable.png" },
  { name: "Zap", logo: "/zap.jpg" },
  { name: "Banco Fomec", logo: "/bfa.jpeg" },
  { name: "Ministério da TIC", logo: "/ministerio.png" },
  { name: "UNITEL", logo: "/unitel.png" },
  { name: "Banco Económico", logo: "/BancoEconomicoAngola.png" },
  { name: "7Smiles", logo: "/7Smile.png" },
]

const testimonials = [
  { name: "Evandro Ferreira", role: "CTO, MELM Solutions", content: "VIVATEL transformou completamente nossa infraestrutura. Uma solução verdadeiramente soberana para Angola." },
  { name: "Maria Santos", role: "Diretora de TI, BancoDigital", content: "A escalabilidade e performance superaram nossas expectativas. O suporte é excelente." },
  { name: "Carlos Silva", role: "Gerente de Inovação", content: "VIVATEL é o futuro para o ecossistema digital angolano. Total controle e segurança." },
]

export function PartnershipCTA() {
  return (
    <>
      {/* Partners Section */}
      <section id="parceiros" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center mb-16 animate-fade-in-up">
           <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic">Nossos Parceiros Estratégicos</h2>
           <p className="text-gray-500 font-medium max-w-2xl mx-auto">Parcerias com líderes que fortalecem nosso ecossistema digital soberano.</p>
        </div>
        
        <Marquee speed={40}>
          {partners.map((partner, index) => (
            <div key={index} className="w-[200px] flex-shrink-0">
               <PremiumCard className="h-[120px] bg-[#0c0c0c]/50 hover:border-blue-500/30" glowPosition="center">
                  <div className="p-4 flex items-center justify-center h-full">
                     {partner.logo ? (
                        <div className="relative w-full h-10">
                           <Image src={partner.logo} alt={partner.name} fill className="object-contain grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                     ) : (
                        <Globe className="h-8 w-8 text-blue-500/40" />
                     )}
                  </div>
               </PremiumCard>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Testimonials Section */}
      <section id="testemunhos" className="py-24 relative overflow-hidden bg-black/40">
        <div className="container mx-auto px-4 relative z-10">
           <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <PremiumCard key={i} glowPosition="top" className="animate-fade-in-up">
                   <div className="p-8 h-full flex flex-col justify-between">
                     <p className="text-gray-400 font-medium italic mb-8 leading-relaxed">"{t.content}"</p>
                     <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                        <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center font-bold text-blue-400">{t.name.charAt(0)}</div>
                        <div className="text-left">
                           <p className="font-bold text-white text-sm uppercase tracking-tighter">{t.name}</p>
                           <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{t.role}</p>
                        </div>
                     </div>
                   </div>
                </PremiumCard>
              ))}
           </div>
        </div>
      </section>
    </>
  )
}
