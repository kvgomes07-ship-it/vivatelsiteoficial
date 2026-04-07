// Server Component — no "use client", no Framer Motion
// All entrance animations use CSS classes from styles/animations.css

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
} from "lucide-react"
import Link from "next/link"
import { CloudPlatformWrapper as CloudPlatform } from "@/components/interactive/wrappers/cloud-wrapper"

export default function CloudPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black" />
                    <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_65%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                            <Cloud className="h-4 w-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400">Infraestrutura em Nuvem Soberana</span>
                        </div>

                        <h1 className="animate-fade-in-up [animation-delay:100ms] text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                            VIVATEL Cloud
                        </h1>

                        <p className="animate-fade-in-up [animation-delay:200ms] text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Infraestrutura em nuvem escalável e soberana, construída para Angola. Hospede aplicações, gerencie dados e escale recursos com total controle e segurança.
                        </p>

                        <div className="animate-fade-in-up [animation-delay:300ms] flex flex-wrap gap-4 justify-center">
                            <Button className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300">
                                Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-900 px-8 py-6 rounded-full text-lg font-medium">
                                Ver Documentação
                            </Button>
                        </div>
                    </div>

                    <div className="animate-fade-in-up [animation-delay:400ms] relative w-full max-w-5xl mx-auto mb-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-sky-500/20 rounded-lg blur-3xl" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl h-[300px] md:h-[400px]">
                            <video className="absolute inset-0 w-full h-full object-cover" src="/videos/cloud.mp4" autoPlay loop muted playsInline />
                            <div className="absolute inset-0 bg-black/30" />
                        </div>
                    </div>

                    <div className="animate-fade-in-up [animation-delay:500ms] relative w-full max-w-5xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-sky-500/20 rounded-lg blur-3xl" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl">
                            <div className="relative h-[300px] md:h-[500px] w-full">
                                <CloudPlatform />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Recursos da Plataforma</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Tudo que você precisa para construir, implantar e escalar aplicações na nuvem.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Server className="h-10 w-10 text-blue-500" />, title: "Servidores Virtuais", description: "Crie e gerencie máquinas virtuais com configurações personalizadas em segundos." },
                            { icon: <Database className="h-10 w-10 text-sky-500" />, title: "Armazenamento Escalável", description: "Armazenamento de objetos e blocos com redundância e alta disponibilidade." },
                            { icon: <Zap className="h-10 w-10 text-blue-500" />, title: "Auto-scaling", description: "Escale recursos automaticamente com base na demanda da sua aplicação." },
                            { icon: <Shield className="h-10 w-10 text-sky-500" />, title: "Segurança Integrada", description: "Firewalls, VPNs e criptografia de dados em repouso e em trânsito." },
                            { icon: <BarChart3 className="h-10 w-10 text-blue-500" />, title: "Monitoramento 24/7", description: "Acompanhe métricas, logs e performance em tempo real." },
                            { icon: <Globe className="h-10 w-10 text-sky-500" />, title: "Rede Global", description: "Infraestrutura distribuída com baixa latência e alta performance." },
                        ].map((feature, index) => (
                            <div key={index} className="animate-fade-in-up h-full" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-sky-500/50 transition-colors backdrop-blur-sm">
                                        <div className="mb-4 p-3 bg-gray-800/30 rounded-lg inline-block">{feature.icon}</div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fade-in-up">
                            <h2 className="text-3xl md:text-4xl font-bold">Por Que Escolher VIVATEL Cloud?</h2>
                            <p className="text-gray-300 text-lg">Nossa plataforma em nuvem foi desenvolvida especificamente para atender às necessidades de empresas e instituições angolanas, garantindo soberania de dados e conformidade local.</p>
                            <ul className="space-y-4">
                                {["Escalabilidade automática e inteligente", "Infraestrutura geograficamente distribuída", "Preços flexíveis e transparentes", "99.99% de disponibilidade garantida", "Suporte técnico em português 24/7", "Conformidade com regulamentações locais", "Backup automático e recuperação de desastres", "API robusta e documentação completa"].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
                            <div className="bg-gradient-to-br from-blue-500/20 to-sky-500/20 p-1 rounded-lg">
                                <div className="bg-gray-900 p-8 rounded-lg">
                                    <h3 className="text-2xl font-bold mb-4">Especificações Técnicas</h3>
                                    <div className="space-y-4">
                                        {[
                                            { label: "CPU Cores", value: "1 - 64 vCPUs", pct: "75%" },
                                            { label: "Memória RAM", value: "1GB - 512GB", pct: "80%" },
                                            { label: "Armazenamento SSD", value: "10GB - 10TB", pct: "100%" },
                                            { label: "Largura de Banda", value: "Até 10Gbps", pct: "85%" },
                                        ].map((spec, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-gray-400">{spec.label}</span>
                                                    <span className="text-white font-medium">{spec.value}</span>
                                                </div>
                                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-gradient-to-r from-blue-600 to-sky-500" style={{ width: spec.pct }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-500/10 to-sky-500/10 border border-blue-500/20 p-6 rounded-lg">
                                <h4 className="text-lg font-bold mb-3">Parceria Angola Cable</h4>
                                <p className="text-gray-300 text-sm">A VIVATEL é parceira oficial da Angola Cable, garantindo conectividade de alta qualidade com infraestrutura de cabos submarinos e terrestres de última geração.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Preços Transparentes</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Pague apenas pelo que usar. Sem taxas ocultas, sem surpresas.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: "Starter", price: "AOA 25K", period: "mês", popular: false, features: ["2 vCPUs", "4GB RAM", "80GB SSD", "2TB Transferência", "Suporte por Email"] },
                            { name: "Professional", price: "AOA 99K", period: "mês", popular: true, features: ["8 vCPUs", "16GB RAM", "320GB SSD", "8TB Transferência", "Suporte Priority", "Backup Automático"] },
                            { name: "Enterprise", price: "Custom", period: "", popular: false, features: ["vCPUs ilimitados", "RAM personalizada", "Armazenamento escalável", "Transferência ilimitada", "Suporte 24/7", "SLA 99.99%", "Gerente de Conta"] },
                        ].map((plan, index) => (
                            <div key={index} className="animate-fade-in-up relative" style={{ animationDelay: `${index * 100}ms` }}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                                        Mais Popular
                                    </div>
                                )}
                                <div className={`h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl ${plan.popular ? "ring-2 ring-sky-500/50" : ""}`}>
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800/50">
                                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                        <div className="mb-6">
                                            <span className="text-4xl font-bold">{plan.price}</span>
                                            {plan.period && <span className="text-gray-400">/{plan.period}</span>}
                                        </div>
                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <CheckCircle className="h-5 w-5 text-sky-500" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className={`w-full ${plan.popular ? "bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600" : "bg-gray-800 hover:bg-gray-700"}`}>
                                            {plan.price === "Custom" ? "Contactar Vendas" : "Começar Agora"}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Pronto para Começar?</h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Experimente a VIVATEL Cloud gratuitamente por 14 dias. Sem cartão de crédito necessário.</p>
                        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 px-8 py-6 text-lg">
                            Iniciar Teste Gratuito <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 bg-black/40 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">© 2026 VIVATEL. Todos os direitos reservados.</p>
                        <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">← Voltar à Página Inicial</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
