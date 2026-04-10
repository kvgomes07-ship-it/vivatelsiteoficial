import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
    ArrowRight, Code, Shield, Radio, Database, Zap, BookOpen, Cloud, BarChart3,
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Nossos Serviços",
    description: "Conectividade soberana, Cloud, Segurança e Software. Explore o ecossistema completo da VIVATEL.",
}

export default function ServicosPage() {
    const mainServices = [
        { icon: <Cloud className="h-12 w-12 text-blue-500" />, title: "VIVATEL Cloud", description: "Infraestrutura em nuvem escalável e soberana para hospedar aplicações e gerenciar dados.", features: ["Servidores Virtuais", "Auto-scaling", "99.99% Uptime"], href: "/servicos/cloud" },
        { icon: <BarChart3 className="h-12 w-12 text-blue-500" />, title: "VIVATEL Analytics", description: "Análise avançada de dados com insights acionáveis em tempo real.", features: ["Dashboards Live", "ML Integrado", "Alertas"], href: "/servicos/analytics" },
        { icon: <Shield className="h-12 w-12 text-blue-500" />, title: "VIVATEL Security", description: "Proteção abrangente com detecção de ameaças e conformidade regulatória.", features: ["Firewall IA", "Conformidade ISO", "Monitoramento 24/7"], href: "/servicos/security" },
        { icon: <Radio className="h-12 w-12 text-blue-500" />, title: "VIVATEL Conectividade", description: "Infraestrutura soberana com acesso direto aos cabos SACS e MONET.", features: ["Fibra Dedicada", "5G Enterprise", "Baixa Latência"], href: "/servicos/conectividade" },
    ]

    const additionalServices = [
        { icon: <Code className="h-10 w-10 text-blue-500" />, title: "Software", description: "Desenvolvimento e APIs robustas.", href: "/servicos/software" },
        { icon: <Database className="h-10 w-10 text-blue-500" />, title: "AI & DATA", description: "Modelos de IA personalizados.", href: "/servicos/analytics" },
        { icon: <Zap className="h-10 w-10 text-blue-500" />, title: "Stream & IoT", description: "Automação industrial e robótica.", href: "/servicos/iot-stream" },
        { icon: <BookOpen className="h-10 w-10 text-blue-500" />, title: "Academias & Labs", description: "Desenvolvimento de talento local.", href: "/servicos/academias" },
    ]

    return (
        <div className="min-h-screen bg-[#08080c] text-white overflow-hidden selection:bg-blue-500/30">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[80px] font-black mb-5 tracking-tighter text-[#ffffff] leading-[0.9]">Nossos Serviços</h1>
                    <p className="text-sm md:text-xl text-gray-500 font-bold tracking-[0.1em] mb-10 max-w-2xl mx-auto">Soluções completas de infraestrutura digital soberana.</p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="sr-only">Serviços Principais</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">

                        {mainServices.map((service, index) => (
                            <Link key={index} href={service.href} className="group">
                                <div className="h-full bg-white/[0.02] border border-white/10 p-8 rounded-[2rem] group-hover:border-blue-500/40 transition-all text-left">
                                    <div className="mb-6 p-4 bg-white/[0.05] border border-white/10 rounded-2xl inline-block transition-transform group-hover:scale-105">{service.icon}</div>
                                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                                    <p className="text-gray-400 font-medium mb-6">{service.description}</p>
                                    <div className="space-y-2 mb-8 opacity-60">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-gray-400">
                                                <div className="h-1 w-1 bg-blue-500" /><span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-500 font-bold text-xs tracking-widest group-hover:translate-x-1 transition-transform">Saiba Mais <ArrowRight className="h-4 w-4" /></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="sr-only">Serviços Adicionais</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

                        {additionalServices.map((service, index) => (
                            <Link key={index} href={service.href} className="group">
                                <div className="h-full bg-white/[0.02] border border-white/10 p-6 rounded-2xl group-hover:border-blue-500/40 transition-all text-left">
                                    <div className="mb-4 p-3 bg-white/[0.05] border border-white/10 rounded-xl inline-block group-hover:scale-105 transition-transform">{service.icon}</div>
                                    <h3 className="text-base font-bold mb-2 tracking-tight">{service.title}</h3>
                                    <p className="text-gray-400 text-[11px] font-medium mb-4 leading-relaxed">{service.description}</p>
                                    <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] tracking-widest">Explorar <ArrowRight className="h-3 w-3" /></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Angola Cable Partnership */}
            <section className="py-24 relative overflow-hidden border-y border-white/5 bg-black/40">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/20 rounded-full px-4 py-1 mb-6">
                        <Radio className="h-3 w-3 text-blue-500" />
                        <span className="text-[10px] text-blue-500 font-bold tracking-widest">Powered by Angola Cable</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Infraestrutura Global</h2>
                    <p className="text-gray-400 font-medium tracking-wide text-sm mb-10 max-w-2xl mx-auto">Acesso soberano aos cabos submarinos SACS e MONET com latência otimizada.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { label: "Capacidade", value: "40 Tbps" },
                            { label: "Uptime", value: "99.99%" },
                            { label: "Latência", value: "< 3ms" },
                            { label: "Cobertura", value: "Soberana" },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 p-6 text-center rounded-2xl">
                                <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Pronto para <span className="text-blue-500 font-black">Começar?</span></h2>
                    <p className="text-gray-400 font-medium tracking-wide text-sm mb-10 max-w-2xl mx-auto">Fale com nossa equipa de engenharia hoje mesmo.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-8 text-xl font-bold rounded-full group transition-all duration-300">
                            Contactar Vendas <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
