import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle,
    Cloud,
    Server,
    Database,
    Zap,
    Shield,
    BarChart3,
    Globe,
    Cpu,
    Lock
} from "lucide-react"
import Link from "next/link"
import { CloudPlatformWrapper as CloudPlatform } from "@/components/interactive/wrappers/cloud-wrapper"
import { PremiumCard } from "@/components/ui/premium-card"
import { Footer } from "@/components/footer"

export default function CloudPage() {
    const features = [
        { icon: <Server className="h-12 w-12 text-blue-500" />, title: "Servidores Virtuais", description: "Máquinas virtuais de alta performance com processadores de última geração e redundância garantida." },
        { icon: <Database className="h-12 w-12 text-sky-500" />, title: "Armazenamento Soberano", description: "Dados armazenados localmente em Angola com criptografia de nível militar e backup georedundante." },
        { icon: <Zap className="h-12 w-12 text-blue-500" />, title: "Auto-scaling Inteligente", description: "Ajuste dinâmico de recursos para garantir que sua aplicação suporte qualquer volume de tráfego." },
        { icon: <Shield className="h-12 w-12 text-sky-500" />, title: "Segurança de Camada 7", description: "Proteção avançada contra DDoS e firewalls inteligentes integrados nativamente na rede." },
        { icon: <BarChart3 className="h-12 w-12 text-blue-500" />, title: "Monitoramento em Tempo Real", description: "Painéis de controle detalhados com métricas de performance e logs de auditoria completos." },
        { icon: <Globe className="h-12 w-12 text-sky-500" />, title: "Conectividade Global", description: "Acesso direto aos principais hubs globais através da infraestrutura robusta da Angola Cable." },
    ]

    return (
        <div className="min-h-screen bg-[#08080c] text-white overflow-hidden selection:bg-blue-500/30">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden text-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/20 rounded-full px-4 py-1 mb-10">
                            <Cloud className="h-3 w-3 text-blue-500" />
                            <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Infraestrutura em Nuvem Soberana</span>
                        </div>

                        <h1 className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[80px] font-black mb-6 tracking-tighter text-white leading-[0.9]">
                            VIVATEL Cloud
                        </h1>

                        <p className="text-sm md:text-xl text-gray-500 font-medium mb-10 max-w-2xl mx-auto">
                            Infraestrutura em nuvem escalável e soberana, construída para Angola. Escala real, segurança absoluta e total controle sobre seus dados.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-7 text-lg font-bold rounded-full group transition-all duration-300">
                                Começar Agora <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" className="border-white/10 text-gray-400 hover:bg-white/5 hover:text-white px-10 py-7 rounded-full text-lg font-bold transition-all">
                                Documentação
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full max-w-5xl mx-auto mt-20">
                        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full" />
                        <div className="relative h-[300px] md:h-[500px] w-full bg-white/[0.01] border border-white/5 rounded-[2.5rem] overflow-hidden">
                            <CloudPlatform />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Recursos da Plataforma</h2>
                        <p className="text-gray-500 font-medium max-w-2xl mx-auto">Tudo o que a sua empresa precisa para construir e escalar com confiança.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {features.map((feature, index) => (
                            <PremiumCard key={index} variant="mesh" className="p-8 md:p-10 text-left">
                                <div className="mb-8 p-5 bg-white/[0.03] border border-white/5 rounded-2xl inline-block group-hover:scale-105 transition-transform duration-500">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                                <p className="text-gray-400 font-medium text-sm leading-relaxed">{feature.description}</p>
                            </PremiumCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance & Specifications */}
            <section className="py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
                                Pronta para o <br /><span className="text-blue-500">Próximo Passo.</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-medium leading-relaxed">
                                Nossa plataforma foi desenhada especificamente para suportar as demandas das maiores instituições de Angola, com infraestrutura local e redundância global.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { icon: <Cpu className="h-5 w-5 text-blue-500" />, text: "CPUs Intel Xeon de 4ª Geração" },
                                    { icon: <Database className="h-5 w-5 text-blue-500" />, text: "Armazenamento NVMe Full-Flash" },
                                    { icon: <Lock className="h-5 w-5 text-blue-500" />, text: "Segurança Certificada ISO 27001" },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                                        <div className="p-3 bg-blue-500/5 rounded-xl">{item.icon}</div>
                                        <span className="text-gray-300 font-bold tracking-tight text-sm uppercase">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/5 blur-[100px]" />
                            <PremiumCard className="p-10">
                                <h3 className="text-2xl font-bold mb-8">Capacidades Técnicas</h3>
                                <div className="space-y-6">
                                    {[
                                        { label: "CPU Cores", value: "Até 64 vCPUs", pct: "75%" },
                                        { label: "Memória RAM", value: "Até 512GB", pct: "85%" },
                                        { label: "Armazenamento", value: "Escalabilidade Infinita", pct: "60%" },
                                        { label: "Largura de Banda", value: "10 Gbps Direto", pct: "95%" },
                                    ].map((spec, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between mb-2 text-sm font-bold uppercase tracking-widest text-gray-500">
                                                <span>{spec.label}</span>
                                                <span className="text-blue-500">{spec.value}</span>
                                            </div>
                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                                                <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: spec.pct }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </PremiumCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Planos Flexíveis</h2>
                        <p className="text-gray-500 font-medium max-w-2xl mx-auto">Pague apenas pelo que utilizar, com total transparência.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: "Starter", price: "25K", popular: false, features: ["2 vCPUs", "4GB RAM", "80GB SSD", "Suporte Essential"] },
                            { name: "Professional", price: "99K", popular: true, features: ["8 vCPUs", "16GB RAM", "320GB SSD", "Suporte Prioritário", "Backup Diário"] },
                            { name: "Enterprise", price: "Custom", popular: false, features: ["vCPUs Custom", "RAM Dedicada", "SLA 99.99%", "Gestor de Conta"] },
                        ].map((plan, index) => (
                            <PremiumCard key={index} className={plan.popular ? "border-blue-500/40 bg-blue-500/[0.02]" : ""}>
                                <div className="p-8 h-full flex flex-col">
                                    {plan.popular && <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4 italic">Mais Popular</div>}
                                    <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                    <div className="mb-8">
                                        <span className="text-4xl font-bold">AOA {plan.price}</span>
                                        {plan.price !== "Custom" && <span className="text-gray-500 font-medium">/mês</span>}
                                    </div>
                                    <ul className="space-y-4 mb-10 text-sm font-medium text-gray-400">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle className="h-4 w-4 text-blue-500" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className={`mt-auto w-full py-6 rounded-full font-bold ${plan.popular ? "bg-blue-600 hover:bg-blue-500" : "bg-white/5 hover:bg-white/10"}`}>
                                        {plan.price === "Custom" ? "Falar com Vendas" : "Começar Agora"}
                                    </Button>
                                </div>
                            </PremiumCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Sua jornada Digital <br /><span className="text-blue-500 font-black">Começa Aqui.</span></h2>
                    <p className="text-gray-500 font-medium mb-10 max-w-2xl mx-auto">Experimente a VIVATEL Cloud e descubra a performance de uma nuvem verdadeiramente soberana.</p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-8 text-xl font-bold rounded-full transition-all transform hover:scale-105">
                        Iniciar Teste Gratuito <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    )
}
