"use client"

import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle,
    Radio,
    Wifi,
    Globe,
    Zap,
    Network,
    Antenna,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ConectividadePage() {
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
                            <Radio className="h-4 w-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400">Infraestrutura Soberana de Conectividade</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                        >
                            Conectividade VIVATEL
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        >
                            Infraestrutura de conectividade soberana de última geração. Banda larga, fibra óptica, 5G e redes dedicadas para empresas e instituições angolanas.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300">
                                Solicitar Proposta
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-900 px-8 py-6 rounded-full text-lg font-medium">
                                Ver Cobertura
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Soluções de Conectividade</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Conectividade de classe mundial adaptada às necessidades do mercado angolano.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Network className="h-10 w-10 text-blue-500" />,
                                title: "Fibra Óptica",
                                description: "Conexões de até 10 Gbps com latência ultra-baixa e estabilidade superior.",
                                speeds: "100 Mbps - 10 Gbps",
                            },
                            {
                                icon: <Antenna className="h-10 w-10 text-cyan-500" />,
                                title: "5G Enterprise",
                                description: "Rede 5G privada para empresas com cobertura dedicada e segurança avançada.",
                                speeds: "Até 1 Gbps",
                            },
                            {
                                icon: <Globe className="h-10 w-10 text-blue-500" />,
                                title: "Internet Dedicada",
                                description: "Links dedicados com SLA garantido e banda simétrica para operações críticas.",
                                speeds: "10 Mbps - 1 Gbps",
                            },
                            {
                                icon: <Wifi className="h-10 w-10 text-cyan-500" />,
                                title: "SD-WAN",
                                description: "Redes WAN definidas por software para conectar múltiplas localizações.",
                                speeds: "Escalável",
                            },
                            {
                                icon: <Zap className="h-10 w-10 text-blue-500" />,
                                title: "Conectividade Internacional",
                                description: "Acesso aos cabos submarinos Angola Cable para conectividade global.",
                                speeds: "Até 400 Gbps",
                            },
                            {
                                icon: <Network className="h-10 w-10 text-cyan-500" />,
                                title: "MPLS",
                                description: "Redes privadas MPLS para conectar filiais com segurança e performance.",
                                speeds: "Personalizado",
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-colors backdrop-blur-sm">
                                        <div className="mb-4 p-3 bg-gray-800/30 rounded-lg inline-block">{service.icon}</div>
                                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                        <p className="text-gray-400 mb-4">{service.description}</p>
                                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                                            <Zap className="h-3 w-3 text-cyan-400" />
                                            <span className="text-xs text-cyan-400">{service.speeds}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Angola Cable Partnership */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-4">
                                <Globe className="h-4 w-4 text-cyan-400" />
                                <span className="text-sm text-cyan-400">Parceria Estratégica</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">Powered by Angola Cable</h2>
                            <p className="text-gray-300 text-lg">
                                A VIVATEL é parceira oficial da Angola Cable, operando sobre uma das infraestruturas de telecomunicações mais avançadas da África.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Acesso direto aos cabos submarinos SACS e MONET",
                                    "Conectividade direta com América do Sul e Europa",
                                    "Latência otimizada para tráfego internacional",
                                    "Redundância geográfica e proteção contra falhas",
                                    "Capacidade de até 40 Tbps",
                                    "Pontos de presença (PoPs) em todo Angola",
                                    "Interconexão com principais operadoras globais",
                                    "SLA de 99.99% de disponibilidade",
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
                                    <h3 className="text-2xl font-bold mb-6">Infraestrutura Global</h3>
                                    <div className="space-y-6">
                                        <div className="bg-gray-800/50 p-4 rounded-lg">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-300 font-medium">Cabos Submarinos</span>
                                                <span className="text-cyan-400">SACS + MONET</span>
                                            </div>
                                            <p className="text-sm text-gray-400">Conectando Angola, Brasil, EUA e Europa</p>
                                        </div>
                                        <div className="bg-gray-800/50 p-4 rounded-lg">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-300 font-medium">Capacidade Total</span>
                                                <span className="text-cyan-400">40 Tbps</span>
                                            </div>
                                            <p className="text-sm text-gray-400">Com roadmap para expansão contínua</p>
                                        </div>
                                        <div className="bg-gray-800/50 p-4 rounded-lg">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-300 font-medium">Latência</span>
                                                <span className="text-cyan-400">&lt; 3ms local</span>
                                            </div>
                                            <p className="text-sm text-gray-400">Ultra-baixa latência em território nacional</p>
                                        </div>
                                        <div className="bg-gray-800/50 p-4 rounded-lg">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-300 font-medium">Cobertura</span>
                                                <span className="text-cyan-400">Nacional</span>
                                            </div>
                                            <p className="text-sm text-gray-400">Presença em todas as províncias</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Diferenciais</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            O que torna a conectividade VIVATEL única no mercado angolano.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Redundância Garantida",
                                description: "Múltiplos caminhos de rede para zero downtime",
                                stat: "99.99%",
                                label: "Uptime",
                            },
                            {
                                title: "Suporte 24/7",
                                description: "NOC operacional com equipe especializada",
                                stat: "< 15min",
                                label: "Tempo de Resposta",
                            },
                            {
                                title: "Escalabilidade",
                                description: "Aumente ou reduza banda conforme necessário",
                                stat: "Instant",
                                label: "Provisionamento",
                            },
                            {
                                title: "Segurança",
                                description: "DDoS protection e firewall incluídos",
                                stat: "Enterprise",
                                label: "Grade",
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
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-colors backdrop-blur-sm text-center">
                                        <div className="text-3xl font-bold text-cyan-400 mb-2">{feature.stat}</div>
                                        <div className="text-sm text-cyan-400/70 mb-4">{feature.label}</div>
                                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_60%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Casos de Uso</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Soluções de conectividade para diferentes setores.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Setor Bancário",
                                features: ["Links dedicados para agências", "Redundância automática", "Segurança de nível financeiro", "Compliance regulatório"],
                            },
                            {
                                title: "Governo e Instituições",
                                features: ["Redes privadas seguras", "Interconexão entre órgãos", "Soberania de dados", "Suporte prioritário"],
                            },
                            {
                                title: "Empresas e Startups",
                                features: ["Planos flexíveis", "Escalabilidade sob demanda", "IPv4 e IPv6", "Portal de autogestão"],
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
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800/50">
                                        <h3 className="text-2xl font-bold mb-6">{useCase.title}</h3>
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
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">Conecte-se ao Futuro</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Solicite uma proposta personalizada e descubra como nossa conectividade pode acelerar seu negócio.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-6 text-lg"
                                >
                                    Solicitar Proposta
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-gray-700 text-gray-300 hover:bg-gray-900 px-8 py-6 text-lg"
                                >
                                    Verificar Cobertura
                                </Button>
                            </div>
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
