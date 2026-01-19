"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle,
    BarChart3,
    TrendingUp,
    Database,
    Brain,
    Zap,
    PieChart,
    LineChart,
    Activity,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { AnalyticsPlatform } from "@/components/interactive/analytics-platform"

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Header */}
            {/* Header removed - using global Navbar */}

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black" />
                    <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_65%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
                        >
                            <BarChart3 className="h-4 w-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400">Análise de Dados Inteligente</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                        >
                            VIVATEL Analytics
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        >
                            Plataforma de análise de dados avançada com insights acionáveis em tempo real. Transforme dados em decisões estratégicas com inteligência artificial.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300">
                                Começar Agora
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-900 px-8 py-6 rounded-full text-lg font-medium">
                                Agendar Demo
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative w-full max-w-5xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-3xl" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl">
                            <div className="relative h-[300px] md:h-[500px] w-full">
                                <AnalyticsPlatform />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Recursos Poderosos</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Ferramentas avançadas de análise para extrair insights valiosos dos seus dados.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Activity className="h-10 w-10 text-blue-500" />,
                                title: "Dashboards em Tempo Real",
                                description: "Visualize métricas e KPIs atualizados em tempo real com dashboards interativos.",
                            },
                            {
                                icon: <Brain className="h-10 w-10 text-cyan-500" />,
                                title: "Machine Learning Integrado",
                                description: "Análise preditiva com modelos de ML que aprendem com seus dados.",
                            },
                            {
                                icon: <TrendingUp className="h-10 w-10 text-blue-500" />,
                                title: "Análise de Tendências",
                                description: "Identifique padrões e tendências para tomar decisões proativas.",
                            },
                            {
                                icon: <PieChart className="h-10 w-10 text-cyan-500" />,
                                title: "Visualizações Customizáveis",
                                description: "Crie gráficos e visualizações personalizadas para suas necessidades.",
                            },
                            {
                                icon: <Database className="h-10 w-10 text-blue-500" />,
                                title: "Integração de Dados",
                                description: "Conecte múltiplas fontes de dados e unifique sua análise.",
                            },
                            {
                                icon: <Zap className="h-10 w-10 text-cyan-500" />,
                                title: "Alertas Inteligentes",
                                description: "Receba notificações automáticas baseadas em condições personalizadas.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-colors backdrop-blur-sm">
                                        <div className="mb-4 p-3 bg-gray-800/30 rounded-lg inline-block">{feature.icon}</div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Casos de Uso</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Soluções de analytics para diferentes setores e necessidades.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Análise de Performance de Infraestrutura",
                                description: "Monitore a saúde da sua infraestrutura digital em tempo real.",
                                features: [
                                    "Monitoramento de servidores e aplicações",
                                    "Detecção de anomalias com IA",
                                    "Otimização de recursos",
                                    "Previsão de capacidade",
                                ],
                            },
                            {
                                title: "Business Intelligence",
                                description: "Transforme dados de negócio em insights estratégicos.",
                                features: [
                                    "Análise de vendas e receita",
                                    "Segmentação de clientes",
                                    "Análise de churn e retenção",
                                    "Previsões financeiras",
                                ],
                            },
                            {
                                title: "Análise de Comportamento de Usuário",
                                description: "Entenda como seus usuários interagem com seus serviços.",
                                features: [
                                    "Mapas de calor e jornadas",
                                    "Análise de conversão",
                                    "Testes A/B automatizados",
                                    "Personalização baseada em dados",
                                ],
                            },
                            {
                                title: "Análise de Segurança",
                                description: "Detecte ameaças e mantenha sua infraestrutura segura.",
                                features: [
                                    "Detecção de intrusões",
                                    "Análise de logs de segurança",
                                    "Identificação de vulnerabilidades",
                                    "Compliance e auditoria",
                                ],
                            },
                        ].map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-colors backdrop-blur-sm">
                                        <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                                        <p className="text-gray-400 mb-6">{useCase.description}</p>
                                        <ul className="space-y-3">
                                            {useCase.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Capabilities */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">Capacidades Técnicas</h2>
                            <p className="text-gray-300 text-lg">
                                Nossa plataforma de analytics processa bilhões de eventos por dia com baixa latência e alta precisão.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Processamento em tempo real com Apache Kafka",
                                    "Armazenamento otimizado com ClickHouse",
                                    "Modelos de ML com TensorFlow e PyTorch",
                                    "APIs REST e GraphQL para integração",
                                    "SDK para Python, JavaScript e Go",
                                    "Exportação para CSV, Excel, PDF e JSON",
                                    "Webhooks e integrações nativas",
                                    "Conformidade GDPR e regulamentações locais",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1 rounded-lg">
                                <div className="bg-gray-900 p-8 rounded-lg">
                                    <h3 className="text-2xl font-bold mb-6">Performance</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300">Latência de Consulta</span>
                                                <span className="text-cyan-400 font-medium">&lt; 100ms</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-[95%]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300">Taxa de Processamento</span>
                                                <span className="text-cyan-400 font-medium">1M eventos/seg</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-[90%]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300">Retenção de Dados</span>
                                                <span className="text-cyan-400 font-medium">Ilimitada</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-full"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300">Precisão de Previsões</span>
                                                <span className="text-cyan-400 font-medium">94%+</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-[94%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-4 rounded-lg text-center">
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">10B+</div>
                                    <div className="text-sm text-gray-400">Eventos/Dia</div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-4 rounded-lg text-center">
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">99.9%</div>
                                    <div className="text-sm text-gray-400">Uptime</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Planos Flexíveis</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Escolha o plano ideal para o volume de dados da sua empresa.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Starter",
                                price: "AOA 49k",
                                period: "mês",
                                features: [
                                    "100K eventos/mês",
                                    "3 dashboards",
                                    "1 ano de retenção",
                                    "Alertas básicos",
                                    "Suporte por Email",
                                ],
                            },
                            {
                                name: "Professional",
                                price: "AOA 199K",
                                period: "mês",
                                features: [
                                    "1M eventos/mês",
                                    "Dashboards ilimitados",
                                    "2 anos de retenção",
                                    "ML e previsões",
                                    "Alertas avançados",
                                    "Suporte Priority",
                                ],
                                popular: true,
                            },
                            {
                                name: "Enterprise",
                                price: "Custom",
                                period: "",
                                features: [
                                    "Eventos ilimitados",
                                    "Dashboards ilimitados",
                                    "Retenção personalizada",
                                    "ML personalizado",
                                    "White-label",
                                    "Suporte 24/7",
                                    "Gerente de Conta",
                                ],
                            },
                        ].map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                                        Mais Popular
                                    </div>
                                )}
                                <div className={`h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl ${plan.popular ? 'ring-2 ring-cyan-500/50' : ''}`}>
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800/50">
                                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                        <div className="mb-6">
                                            <span className="text-4xl font-bold">{plan.price}</span>
                                            {plan.period && <span className="text-gray-400">/{plan.period}</span>}
                                        </div>
                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                            {plan.price === "Custom" ? "Contactar Vendas" : "Começar Agora"}
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">Transforme Dados em Decisões</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Comece a analisar seus dados hoje e descubra insights que podem transformar seu negócio.
                            </p>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-6 text-lg"
                            >
                                Agendar Demonstração
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 bg-black/40 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">© 2026 VIVATEL. Todos os direitos reservados.</p>
                        <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                            ← Voltar à Página Inicial
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
