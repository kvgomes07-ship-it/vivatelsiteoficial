import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe } from "lucide-react"
import { PremiumCard } from "../ui/premium-card"
import { Marquee } from "../ui/marquee-client"
import { TestimonialCard, type Testimonial } from "../ui/testimonial"

const partners = [
  { name: "Angola Cable", logo: "/angolacable.png" },
  { name: "Zap", logo: "/zap.jpg" },
  { name: "Banco Fomec", logo: "/bfa.jpeg" },
  { name: "Ministério da TIC", logo: "/ministerio.png" },
  { name: "UNITEL", logo: "/unitel.png" },
  { name: "Banco Económico", logo: "/BancoEconomicoAngola.png" },
  { name: "7Smiles", logo: "/7Smile.png" },
]

const testimonials: Testimonial[] = [
  { name: "Maria Santos", role: "Diretora de TI, BancoDigital", content: "A escalabilidade e performance superaram nossas expectativas. O suporte é excelente.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop" },
  { name: "Domingos Gonga", role: "CTO, MELM Solutions", content: "VIVATEL transformou completamente nossa infraestrutura. Uma solução verdadeiramente soberana para Angola.", image: "/image.png" },
  { name: "Carlos Silva", role: "Gerente de Inovação", content: "VIVATEL é o futuro para o ecossistema digital angolano. Total controle e segurança.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600" },
]

export function PartnershipCTA() {
  return (
    <>
      {/* Partners Section */}
      <section id="parceiros" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">Nossos Parceiros Estratégicos</h2>
           <p className="text-gray-500 font-medium max-w-2xl mx-auto">Parcerias com líderes que fortalecem nosso ecossistema digital soberano.</p>
        </div>
        
        <Marquee speed={40}>
          {partners.map((partner, index) => (
            <div key={index} className="w-[200px] flex-shrink-0">
               <PremiumCard className="h-[120px] bg-[#0c0c0c]/50 border-white/5 hover:border-blue-500/30">
                  <div className="p-4 flex items-center justify-center h-full">
                     {partner.logo ? (
                        <div className="relative w-full h-10">
                           <Image src={partner.logo} alt={partner.name} fill sizes="200px" className="object-contain grayscale hover:grayscale-0 transition-all duration-700" />
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
           <div className="flex flex-wrap items-stretch justify-center gap-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
              ))}
           </div>
        </div>
      </section>
    </>
  )
}
