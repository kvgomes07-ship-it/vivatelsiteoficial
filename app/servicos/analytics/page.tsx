// Server Component — zero client JS for layout, optimized performance
import { Button } from "@/components/ui/button"
import {
    ArrowRight, CheckCircle, BarChart3, TrendingUp,
    Database, Brain, Zap, PieChart, Activity,
    ArrowUpRight,
    Search
} from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { PremiumCard } from "@/components/ui/premium-card"
import { Footer } from "@/components/footer"
import { QuoteButton } from "@/components/interactive/buttons/quote-button"

import { CyberDashboardClient as CyberDashboardMockup } from "@/components/interactive/visualizations/cyber-dashboard-client"

/* ─── Static Data ──────────────────────────────────────────── */

const FEATURES = [
    { icon: Brain, title: "Machine Learning Integrado", desc: "Análise preditiva e modelos de ML treinados localmente para garantir a privacidade dos dados." },
    { icon: TrendingUp, title: "Análise de Tendências", desc: "Identifique padrões de comportamento e preveja demandas de mercado de forma proativa." },
    { icon: PieChart, title: "Relatórios Dinâmicos", desc: "Crie visualizações interativas e exporte relatórios personalizados em tempo real." },
    { icon: Zap, title: "Alertas Inteligentes", desc: "Seja notificado instantaneamente sobre anomalias ou quando metas específicas forem atingidas." },
] as const

const USE_CASES = [
    { title: "Infraestrutura", desc: "Monitore a saúde digital.", features: ["Monitoramento de servidores", "Detecção de anomalias", "Otimização de recursos"] },
    { title: "Business Intelligence", desc: "Acelere negócios.", features: ["Análise de receita", "Segmentação de clientes", "Previsões financeiras"] },
    { title: "Comportamento", desc: "Entenda seus usuários.", features: ["Jornadas do cliente", "Testes A/B", "Personalização"] },
    { title: "Segurança", desc: "Proteja seus ativos.", features: ["Detecção de ameaças", "Auditoria completa", "Conformidade"] },
] as const

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-[#0b1120] text-white overflow-hidden font-sans selection:bg-sky-500/30">
            {/* Global Design System Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(14,165,233,0.15),transparent_70%)]" />
                <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            {/* ━━━ Hero ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="relative pt-32 pb-20 overflow-hidden text-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-900/10 to-transparent" />
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-sky-500/5 border border-sky-500/20 rounded-full px-4 py-1 mb-10">
                            <BarChart3 className="h-3 w-3 text-sky-500" />
                            <span className="text-[10px] text-sky-500 font-bold uppercase tracking-widest">Inteligência de Dados Soberana</span>
                        </div>

                        <h1 className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[80px] font-black mb-6 tracking-tighter text-white leading-[0.9]">
                            VIVATEL Analytics
                        </h1>

                        <p className="text-sm md:text-xl text-gray-400 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
                            Transforme dados brutos em decisões estratégicas. Processamento local de ultra-baixa latência, garantindo total soberania e segurança sobre as informações do seu negócio.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <QuoteButton serviceName="VIVATEL Analytics">
                                <Button className="bg-sky-600 hover:bg-sky-500 text-white px-10 py-7 text-lg font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                                    Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </QuoteButton>
                            <Button variant="outline" className="border-sky-900/50 text-gray-300 hover:bg-sky-900/30 hover:text-white px-10 py-7 rounded-full text-lg font-bold transition-all backdrop-blur-sm">
                                Agendar Demo
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full max-w-6xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 rounded-lg blur-3xl -z-10" />
                        <CyberDashboardMockup />
                    </div>
                </div>
            </section>

            {/* ━━━ Bento Grid — Recursos ━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Recursos Poderosos</h2>
                        <p className="text-gray-400 font-medium max-w-2xl mx-auto">Ferramentas avançadas de análise para extrair insights valiosos do seu ecossistema.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        
                        {/* Featured Card 1 — Real-World Expertise (Inspired by Reference) */}
                        <PremiumCard variant="mesh" className="lg:col-span-2 border-sky-500/10 hover:border-sky-500/30">
                            <div className="p-8 md:p-12 h-full flex flex-col relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3">Ecossistema Conectado</h3>
                                    <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8 max-w-md">
                                        Integração nativa com as principais ferramentas e bancos de dados do mercado. Conecte suas fontes e comece a analisar em minutos.
                                    </p>
                                </div>
                                
                                {/* Abstract Tags Visual */}
                                <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-[250px] md:h-full opacity-60 pointer-events-none">
                                    {/* Central Hub */}
                                    <div className="absolute top-1/2 right-[20%] transform -translate-y-1/2 bg-[#111827] p-5 rounded-full border border-sky-500/20 shadow-[0_0_30px_rgba(14,165,233,0.2)]">
                                        <Database className="h-10 w-10 text-sky-400" />
                                    </div>
                                    
                                    {/* Floating Pill Tags */}
                                    <div className="absolute top-[20%] right-[40%] bg-[#1f2937]/90 backdrop-blur-sm border border-gray-700/50 px-4 py-2 rounded-full transform -rotate-12 shadow-lg">
                                        <span className="text-cyan-400 font-mono text-sm mr-1.5">#</span>
                                        <span className="text-gray-200 text-sm font-semibold">PostgreSQL</span>
                                    </div>
                                    <div className="absolute bottom-[30%] right-[45%] bg-[#1f2937]/90 backdrop-blur-sm border border-gray-700/50 px-4 py-2 rounded-full transform rotate-6 shadow-lg">
                                        <span className="text-yellow-400 font-mono text-sm mr-1.5">JS</span>
                                        <span className="text-gray-200 text-sm font-semibold">Scripts</span>
                                    </div>
                                    <div className="absolute top-[40%] right-[10%] bg-[#1f2937]/90 backdrop-blur-sm border border-gray-700/50 px-4 py-2 rounded-full transform rotate-12 shadow-lg">
                                        <span className="text-blue-400 font-mono text-sm mr-1.5">#</span>
                                        <span className="text-gray-200 text-sm font-semibold">Docker</span>
                                    </div>
                                    <div className="absolute bottom-[15%] right-[20%] bg-[#1f2937]/90 backdrop-blur-sm border border-gray-700/50 px-4 py-2 rounded-full transform -rotate-6 shadow-lg">
                                        <span className="text-purple-400 font-mono text-sm mr-1.5">#</span>
                                        <span className="text-gray-200 text-sm font-semibold">Kafka</span>
                                    </div>
                                    <div className="absolute top-[60%] right-[60%] bg-[#1f2937]/90 backdrop-blur-sm border border-gray-700/50 px-3 py-1.5 rounded-full transform -rotate-12 shadow-lg scale-90">
                                        <span className="text-pink-400 font-mono text-sm mr-1.5">#</span>
                                        <span className="text-gray-300 text-xs font-semibold">DataMining</span>
                                    </div>
                                </div>
                            </div>
                        </PremiumCard>

                        {/* Featured Card 2 — Dashboards */}
                        <PremiumCard variant="mesh" className="border-cyan-500/10 hover:border-cyan-500/30">
                            <div className="p-8 md:p-10 h-full flex flex-col">
                                <div className="mb-8 p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl w-fit">
                                    <Activity className="h-8 w-8 text-cyan-400" />
                                </div>
                                <h3 className="text-2xl font-black tracking-tight mb-3">Tempo Real</h3>
                                <p className="text-gray-400 font-medium text-sm leading-relaxed">
                                    Visualize métricas e KPIs atualizados em milissegundos através da nossa arquitetura de processamento in-memory.
                                </p>
                            </div>
                        </PremiumCard>

                        {/* Standard Features */}
                        {FEATURES.map(({ icon: Icon, title, desc }, i) => (
                            <PremiumCard key={i} className="hover:border-sky-500/20">
                                <div className="p-8 h-full flex flex-col">
                                    <div className="mb-6 p-4 bg-white/[0.03] border border-white/5 rounded-2xl w-fit">
                                        <Icon className="h-7 w-7 text-sky-400" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 tracking-tight">{title}</h3>
                                    <p className="text-gray-500 font-medium text-sm leading-relaxed">{desc}</p>
                                </div>
                            </PremiumCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ━━━ Use Cases ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Soluções por Setor</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Capacitamos organizações em diversas indústrias com insights acionáveis.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {USE_CASES.map((useCase, index) => (
                            <PremiumCard key={index} className="hover:border-sky-500/20">
                                <div className="p-8 md:p-10 flex flex-col h-full">
                                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{useCase.title}</h3>
                                    <p className="text-gray-400 text-sm mb-8">{useCase.desc}</p>
                                    <ul className="space-y-4 mt-auto">
                                        {useCase.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-4">
                                                <div className="p-1 rounded-full bg-white/[0.05] border border-white/10 shrink-0">
                                                    <CheckCircle className="h-3.5 w-3.5 text-sky-500" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-300">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </PremiumCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ━━━ Infraestrutura Corporativa ━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white mb-6">
                                    Infraestrutura<br /><span className="text-sky-500">Corporativa.</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                    Processamento massivo desenhado para o ecossistema digital angolano, lidando com milhares de eventos por segundo com segurança de nível bancário.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {["Apache Kafka Cluster", "ClickHouse OLAP", "Neural Engine ML", "High-Speed APIs"].map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                                        <div className="p-2 bg-sky-500/10 rounded-lg">
                                            <Database className="h-5 w-5 text-sky-400" />
                                        </div>
                                        <span className="text-gray-300 font-bold text-sm tracking-tight">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <PremiumCard className="border-sky-500/10 bg-white/[0.02]">
                                <div className="p-10">
                                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                                        <Activity className="h-6 w-6 text-sky-500" />
                                        Métricas de Sistema
                                    </h3>
                                    <div className="space-y-8">
                                        {[
                                            { label: "Latência de Rede", value: "< 100ms", pct: "95%" },
                                            { label: "Taxa de Ingestão", value: "1.2M req/s", pct: "92%" },
                                            { label: "SLA / Uptime", value: "99.99%", pct: "99%" },
                                        ].map((spec, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest text-gray-500">
                                                    <span>{spec.label}</span>
                                                    <span className="text-sky-500">{spec.value}</span>
                                                </div>
                                                <div className="h-2 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                                                    <div className="h-full bg-sky-500 rounded-full" style={{ width: spec.pct }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </PremiumCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Pronto para escalar<br /><span className="text-sky-500 font-black">seus dados?</span>
                    </h2>
                    <p className="text-gray-500 font-medium mb-10 max-w-2xl mx-auto">
                        Pare de tentar adivinhar o mercado. Comece a monitorá-lo. Experimente agora o VIVATEL Analytics e veja a diferença na prática.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <QuoteButton serviceName="VIVATEL Analytics (Proposta)">
                            <Button size="lg" className="bg-sky-600 hover:bg-sky-500 text-white px-10 py-7 text-lg font-bold rounded-full transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                                Agendar Demonstração <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </QuoteButton>
                        <Button variant="outline" size="lg" className="border-white/10 text-gray-300 hover:text-white px-8 py-7 rounded-full text-lg font-bold transition-colors bg-white/5" asChild>
                            <Link href="/servicos/especificacoes">
                                Ver Especificações
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
