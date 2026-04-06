import { Button } from "@/components/ui/button"
import {
    ArrowRight, Code, Shield, Radio, Database, Zap, BookOpen, Cloud, BarChart3,
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function ServicosPage() {
    const mainServices = [
        { icon: <Cloud className="h-12 w-12 text-blue-500" />, title: "VIVATEL Cloud", description: "Infraestrutura em nuvem escalável e soberana para hospedar aplicações e gerenciar dados.", features: ["Servidores Virtuais", "Auto-scaling", "99.99% Uptime"], href: "/servicos/cloud", color: "from-blue-500/20 to-sky-500/20" },
        { icon: <BarChart3 className="h-12 w-12 text-sky-500" />, title: "VIVATEL Analytics", description: "Análise avançada de dados com insights acionáveis em tempo real.", features: ["Dashboards Live", "ML Integrado", "Alertas"], href: "/servicos/analytics", color: "from-sky-500/20 to-blue-500/20" },
        { icon: <Shield className="h-12 w-12 text-blue-500" />, title: "VIVATEL Security", description: "Proteção abrangente com detecção de ameaças e conformidade regulatória.", features: ["Firewall IA", "Conformidade ISO", "Monitoramento 24/7"], href: "/servicos/security", color: "from-blue-500/20 to-purple-500/20" },
        { icon: <Radio className="h-12 w-12 text-sky-500" />, title: "VIVATEL Conectividade", description: "Infraestrutura soberana com acesso direto aos cabos SACS e MONET.", features: ["Fibra Dedicada", "5G Enterprise", "Baixa Latência"], href: "/servicos/conectividade", color: "from-blue-500/20 to-blue-500/20" },
    ]

    const additionalServices = [
        { icon: <Code className="h-10 w-10 text-blue-500" />, title: "Software", description: "Desenvolvimento e APIs robustas.", href: "/servicos/software" },
        { icon: <Database className="h-10 w-10 text-blue-500" />, title: "AI & DATA", description: "Modelos de IA personalizados.", href: "/servicos/analytics" },
        { icon: <Zap className="h-10 w-10 text-sky-500" />, title: "Stream & IoT", description: "Automação industrial e robótica.", href: "/servicos/iot-stream" },
        { icon: <BookOpen className="h-10 w-10 text-blue-500" />, title: "Academias & Labs", description: "Desenvolvimento de talento local.", href: "/servicos/academias" },
    ]

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden selection:bg-blue-500/30">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/20 to-black" />
                <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
                    <h1 className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[96px] font-black mb-5 tracking-tighter text-[#ffffff] leading-[0.8] uppercase italic">Nossos Serviços</h1>
                    <p className="text-sm md:text-xl text-gray-500 font-bold uppercase tracking-[0.2em] mb-10 max-w-2xl mx-auto">Soluções completas de infraestrutura digital soberana.</p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {mainServices.map((service, index) => (
                            <Link key={index} href={service.href} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="h-full bg-white/[0.02] border border-white/5 p-8 rounded-none group-hover:border-blue-500/40 transition-all text-left">
                                    <div className={`mb-6 p-4 bg-gradient-to-br ${service.color} rounded-none inline-block`}>{service.icon}</div>
                                    <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter italic">{service.title}</h3>
                                    <p className="text-gray-500 font-medium mb-6">{service.description}</p>
                                    <div className="space-y-2 mb-8 opacity-40">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300">
                                                <div className="h-1 w-1 bg-blue-500" /><span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">Saiba Mais <ArrowRight className="h-4 w-4" /></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-24 relative overflow-hidden bg-white/[0.01]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {additionalServices.map((service, index) => (
                            <Link key={index} href={service.href} className="group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                                <div className="h-full bg-white/[0.02] border border-white/5 p-6 rounded-none group-hover:border-blue-500/40 transition-all text-left">
                                    <div className="mb-4 p-3 bg-white/5 rounded-none inline-block group-hover:scale-110 transition-transform">{service.icon}</div>
                                    <h3 className="text-sm font-black mb-2 uppercase tracking-widest italic">{service.title}</h3>
                                    <p className="text-gray-500 text-[11px] font-medium mb-4 leading-relaxed">{service.description}</p>
                                    <div className="flex items-center gap-2 text-blue-500 font-black text-[10px] uppercase tracking-widest">Explorar <ArrowRight className="h-3 w-3" /></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Angola Cable Partnership */}
            <section className="py-24 relative overflow-hidden border-y border-white/5 bg-black">
                <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 uppercase">
                        <Radio className="h-3 w-3 text-blue-400" />
                        <span className="text-[10px] text-blue-400 font-black tracking-widest">Powered by Angola Cable</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">Infraestrutura Global</h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-10 max-w-2xl mx-auto">Acesso soberano aos cabos submarinos SACS e MONET com latência otimizada.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { label: "Capacidade", value: "40 Tbps" },
                            { label: "Uptime", value: "99.99%" },
                            { label: "Latência", value: "< 3ms" },
                            { label: "Cobertura", value: "Soberana" },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white/5 border border-white/5 p-6 text-center">
                                <div className="text-xl font-black text-blue-500 mb-1 italic">{stat.value}</div>
                                <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden bg-black">
                <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
                    <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">Pronto para<br /><span className="text-blue-500">Começar?</span></h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-10 max-w-2xl mx-auto">Fale com nossa equipa de engenharia hoje mesmo.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-8 text-xl font-black rounded-none uppercase tracking-widest italic group">
                            Contactar Vendas <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
