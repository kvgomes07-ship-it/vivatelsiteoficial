"use client"

// Analytics Page - Client Component to support dynamic non-SSR interactive modules
// Entrance animations use CSS classes from styles/animations.css

import { Button } from "@/components/ui/button"
import {
    ArrowRight, CheckCircle, BarChart3, TrendingUp,
    Database, Brain, Zap, PieChart, Activity,
} from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamic Imports for Heavy Components
const CyberDashboardMockup = dynamic<any>(
    () => import("@/components/interactive/visualizations/cyber-dashboard").then(mod => mod.CyberDashboardMockup),
    { 
        ssr: false, 
        loading: () => <div className="h-[400px] w-full bg-slate-900/50 rounded-[2rem] border border-white/5 animate-pulse flex items-center justify-center">
            <div className="text-sky-500/50 font-medium text-sm tracking-wide animate-pulse text-center px-4">A carregar VIVATEL Analytics...</div>
        </div>
    }
)

const QuoteButton = dynamic<any>(
    () => import("@/components/interactive/buttons/quote-button").then(mod => mod.QuoteButton),
    { ssr: false }
)

const HoverGlowCard = dynamic<any>(
    () => import("@/components/interactive/cards/hover-glow-card").then(mod => mod.HoverGlowCard),
    { 
        ssr: false,
        loading: () => <div className="h-full w-full rounded-3xl border border-white/5 bg-[#131c31]/30 animate-pulse" />
    }
)

import { LazyView } from "@/components/interactive/wrappers/lazy-view"


export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-[#0b1120] text-white overflow-hidden font-sans relative">
            {/* Global Design System Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Optimized background for mobile: Hide heavy blurs on small screens */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(14,165,233,0.15),transparent_70%)] opacity-100 sm:opacity-100" />
                <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#0b1120]" />
                    <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#0284c7]/30 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_65%)]" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-white">
                            Inteligência de Dados <br /><span className="text-sky-500">Soberana</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                            Transforme dados brutos em decisões estratégicas. Nossa plataforma de analytics oferece processamento local de ultra-baixa latência, garantindo total soberania e segurança sobre as informações do seu negócio.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <QuoteButton serviceName="VIVATEL Analytics">
                                <Button className="bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-700 hover:to-cyan-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 border-none">
                                    Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </QuoteButton>
                            <QuoteButton serviceName="Demonstração Analytics">
                                <Button variant="outline" className="border-sky-900/50 text-gray-300 hover:bg-sky-900/30 px-8 py-6 rounded-full text-lg font-medium backdrop-blur-sm bg-black/20">
                                    Agendar Demo
                                </Button>
                            </QuoteButton>
                        </div>
                    </div>

                    <div className="relative w-full max-w-6xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 rounded-lg blur-3xl -z-10" />
                        <div className="relative">
                            <CyberDashboardMockup />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 relative overflow-hidden text-center md:text-left">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Recursos Poderosos</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Ferramentas avançadas de análise para extrair insights valiosos dos seus dados.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Activity className="h-8 w-8 text-blue-500" />, title: "Dashboards em Tempo Real", description: "Visualize métricas e KPIs atualizados em tempo real." },
                            { icon: <Brain className="h-8 w-8 text-blue-500" />, title: "Machine Learning Integrado", description: "Análise preditiva com modelos de ML." },
                            { icon: <TrendingUp className="h-8 w-8 text-blue-500" />, title: "Análise de Tendências", description: "Identifique padrões para decisões proativas." },
                            { icon: <PieChart className="h-8 w-8 text-blue-500" />, title: "Personalização", description: "Crie gráficos e visualizações customizadas." },
                            { icon: <Database className="h-8 w-8 text-blue-500" />, title: "Integração de Dados", description: "Conecte múltiplas fontes de dados." },
                            { icon: <Zap className="h-8 w-8 text-blue-500" />, title: "Alertas Inteligentes", description: "Receba notificações em tempo real." },
                        ].map((feature, featureIndex) => (
                            <div key={featureIndex} className="h-full group">
                                <HoverGlowCard className="h-full border-white/10 hover:border-blue-500/40 transition-all duration-300">
                                    <div className="p-8 h-full relative z-10 flex flex-col">
                                        <div className="mb-8 p-5 relative inline-flex items-center justify-center bg-white/[0.05] border border-white/10 rounded-2xl group-hover:border-blue-500/40 transition-all duration-300 self-start">
                                            <div className="relative z-10">{feature.icon}</div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors tracking-tight">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </HoverGlowCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.1),transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Soluções por Sector</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Capacitamos organizações em diversas indústrias com insights acionáveis e análise preditiva.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Infraestrutura", description: "Monitore a saúde digital.", features: ["Monitoramento de servidores", "Detecção de anomalias", "Otimização de recursos"] },
                            { title: "Business Intelligence", description: "Acelere negócios.", features: ["Análise de receita", "Segmentação de clientes", "Previsões financeiras"] },
                            { title: "Comportamento", description: "Entenda seus usuários.", features: ["Jornadas do cliente", "Testes A/B", "Personalização"] },
                            { title: "Segurança", description: "Proteja seus ativos.", features: ["Detecção de ameaças", "Auditoria completa", "Conformidade"] },
                        ].map((useCase, index) => (
                            <div key={index} className="h-full group/usecase">
                                <HoverGlowCard className="h-full border-white/10 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="p-8 md:p-10 h-full relative z-10 flex flex-col">
                                        <h3 className="text-2xl font-bold mb-3 text-white group-hover/usecase:text-blue-500 transition-colors tracking-tight">{useCase.title}</h3>
                                        <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-sm">{useCase.description}</p>
                                        <ul className="mt-auto space-y-4 relative">
                                            <div className="absolute left-[11px] top-4 bottom-4 w-[1px] bg-white/10"></div>
                                            {useCase.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-4 group/item relative z-10">
                                                    <div className="p-1 rounded-full bg-white/[0.05] border border-white/10 transition-all shrink-0">
                                                        <CheckCircle className="h-3.5 w-3.5 text-blue-500" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-400 group-hover/item:text-white transition-colors">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </HoverGlowCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent mb-6">Infraestrutura Corporativa</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">Processamento massivo desenhado para o ecossistema digital angolano, lidando com milhares de eventos por segundo com segurança de nível bancário.</p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {["Apache Kafka Cluster", "ClickHouse OLAP", "Neural Engine ML", "High-Speed APIs"].map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-[#0d1424]/40 border border-white/5 rounded-2xl p-4 transition-colors hover:bg-cyan-500/5 hover:border-cyan-500/20 group">
                                        <div className="p-2 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                                            <Database className="h-5 w-5 text-sky-400/70" />
                                        </div>
                                        <span className="text-gray-300 font-medium text-sm">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <HoverGlowCard className="p-8 md:p-12 border-white/10 bg-white/[0.02]">
                                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
                                    <Activity className="h-6 w-6 text-blue-500" />
                                    Métricas de Sistema
                                </h3>
                                <div className="space-y-10">
                                    {[
                                        { label: "Latência de Rede", value: "< 100ms", pct: "95%" },
                                        { label: "Taxa de Ingestão", value: "1.2M req/sec", pct: "92%" },
                                        { label: "SLA / Uptime", value: "99.99%", pct: "99%" },
                                    ].map((spec, i) => (
                                        <div key={i} className="group/metric">
                                            <div className="flex justify-between mb-4 text-sm font-medium">
                                                <span className="text-gray-400 group-hover/metric:text-gray-200 transition-colors">{spec.label}</span>
                                                <span className="text-blue-500">{spec.value}</span>
                                            </div>
                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/10">
                                                <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: spec.pct }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </HoverGlowCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto relative group perspective-1000">
                        {/* Outer Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-sky-500/10 blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000 rounded-[3rem]"></div>
                        
                        {/* High-end Card Container */}
                        <div className="relative bg-gradient-to-b from-[#131c31]/95 to-[#0b1120]/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-[3rem] p-12 md:p-20 overflow-hidden">
                            
                            {/* Inner Grid Texture */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
                            
                            {/* Floating Accent Orbs */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
                            
                            {/* Premium Accent Lines */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-br from-white via-gray-100 to-gray-500 bg-clip-text text-transparent tracking-tight">
                                    Pronto para escalar sua rede?
                                </h2>
                                <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Pare de tentar prever o cenário. Comece a monitorá-lo. Experimente agora o Link Dedicado Vivatel e veja a diferença prática na sua infraestrutura.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row items-center gap-5">
                                    <QuoteButton serviceName="VIVATEL Analytics - Proposta">
                                        <Button size="lg" className="relative overflow-hidden bg-transparent hover:bg-transparent border border-cyan-500/30 hover:border-cyan-400/60 text-white px-10 py-7 text-lg rounded-full group/btn transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:-translate-y-1">
                                            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-500 opacity-90 group-hover/btn:opacity-100 transition-opacity"></div>
                                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                                            <span className="relative z-10 flex items-center font-medium">
                                                Agendar Demonstração <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1.5 transition-transform" />
                                            </span>
                                        </Button>
                                    </QuoteButton>
                                    <Button variant="ghost" size="lg" className="text-gray-400 hover:text-white px-8 py-7 rounded-full text-lg hover:bg-white/5 transition-colors" asChild>
                                        <Link href="/servicos/especificacoes" prefetch={false}>
                                            Ver Especificações
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-white/5 bg-[#040814]">
                <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2026 VIVATEL Analytics.</p>
                    <Link href="/" className="hover:text-cyan-400 transition-colors">Voltar para a Home</Link>
                </div>
            </footer>
        </div>
    )
}
