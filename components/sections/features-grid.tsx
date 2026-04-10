import React from "react"
import Link from "next/link"
import { 
  Code, Shield, Brain, Radio, Database, Zap, BookOpen 
} from "lucide-react"
import { PremiumCard } from "../ui/premium-card"

function PremiumIcon({ icon: Icon }: { icon: any }) {
  return (
    <div className="relative mb-6 inline-block">
      <div className="relative z-10 p-4 rounded-2xl bg-white/[0.05] border border-white/10">
        <Icon className="h-8 w-8 text-blue-500 relative z-10" />
      </div>
    </div>
  )
}

const features = [
  { icon: Code, title: "Software", description: "Desenvolvimento, APIs robustas e workflows automatizados para acelerar time-to-market.", href: "/servicos/software" },
  { icon: Shield, title: "Segurança Avançada", description: "Proteção de nível empresarial com criptografia end-to-end e conformidade regulatória.", href: "/servicos/security" },
  { icon: Brain, title: "Cloud", description: "Infraestrutura em nuvem para servidores, hospedagem, escalabilidade e alta disponibilidade.", href: "/servicos/cloud" },
  { icon: Radio, title: "Conectividade", description: "Infraestrutura de conectividade soberana com banda larga, 5G e redundância garantida.", href: "/servicos/conectividade" },
  { icon: Database, title: "AI & DATA", description: "Processamento de dados em tempo real com modelos de IA personalizados.", href: "/servicos/analytics" },
  { icon: Zap, title: "Stream & IoT", description: "Streaming de dados em tempo real, robótica industrial e IoT para automação completa.", href: "/servicos/iot-stream" },
  { icon: BookOpen, title: "Academias & Labs", description: "Programas de formação, certificação e inovação para desenvolver talento local.", href: "/servicos/academias" },
]

export function FeaturesGrid() {
  return (
    <section id="recursos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">Ecossistema VIVATEL</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Plataforma completa com ferramentas especializadas para transformar sua infraestrutura digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link 
              href={feature.href} 
              key={index} 
              className="block group"
            >
              <PremiumCard
                className="h-full border-white/10"
              >
                <div className="p-8 h-full flex flex-col">
                  <PremiumIcon icon={feature.icon} />
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-500 transition-colors tracking-tight">{feature.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">{feature.description}</p>
                </div>
              </PremiumCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
