"use client"

import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle,
    Cpu,
    Radio,
    Zap,
    Wifi,
    Activity,
    Server,
    Laptop,
    Settings,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function IoTStreamPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-black" />
                    <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-green-900/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_65%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6"
                        >
                            <Zap className="h-4 w-4 text-green-400" />
                            <span className="text-sm text-green-400">IoT & Real-time Streaming</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                        >
                            VIVATEL Stream & IoT
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        >
                            Conecte o mundo físico ao digital. Soluções de IoT industrial e streaming de dados em tempo real para automação e insights instantâneos.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <Button className="bg-gradient-to-r from-green-600 to-cyan-500 hover:from-green-700 hover:to-cyan-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-green-900/30 hover:shadow-green-900/50 transition-all duration-300">
                                Conhecer Soluções
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative w-full max-w-5xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg blur-3xl" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl h-[300px] md:h-[400px] flex items-center justify-center">
                            {/* Abstract Visual: Connected Nodes */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute w-64 h-64 border border-green-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute w-48 h-48 border border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                <div className="absolute w-32 h-32 border border-green-400/40 rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
                                <Zap className="h-16 w-16 text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />

                                {/* Orbiting dots */}
                                <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                                    <div className="absolute top-1/2 left-8 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                                    <div className="absolute top-8 left-1/2 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Conectividade Inteligente</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Tecnologias que impulsionam a Indústria 4.0 em Angola.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Cpu className="h-10 w-10 text-green-500" />,
                                title: "IoT Industrial (IIoT)",
                                description: "Monitoramento de máquinas e ativos industriais para manutenção preditiva e eficiência operaciomal.",
                            },
                            {
                                icon: <Activity className="h-10 w-10 text-cyan-500" />,
                                title: "Streaming de Dados",
                                description: "Ingestão e processamento de dados em tempo real (Kafka, Spark) para tomada de decisão imediata.",
                            },
                            {
                                icon: <Settings className="h-10 w-10 text-green-500" />,
                                title: "Automação Industrial",
                                description: "Controle automatizado de processos fabris e logísticos com integração total.",
                            },
                            {
                                icon: <Wifi className="h-10 w-10 text-cyan-500" />,
                                title: "Edge Computing",
                                description: "Processamento de dados na borda para latência mínima e resposta instantânea.",
                            },
                            {
                                icon: <Radio className="h-10 w-10 text-green-500" />,
                                title: "Smart Cities",
                                description: "Soluções para cidades inteligentes: iluminação, tráfego, resíduos e monitoramento ambiental.",
                            },
                            {
                                icon: <Server className="h-10 w-10 text-cyan-500" />,
                                title: "Gestão de Ativos",
                                description: "Rastreamento e gestão de frotas e equipamentos em tempo real via GPS e sensores.",
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
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-green-500/50 transition-colors backdrop-blur-sm">
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

            {/* Benefits Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">Por Que Investir em IoT?</h2>
                            <p className="text-gray-300 text-lg">
                                A transformação digital passa pela conectividade dos seus ativos físicos. Ganhe visibilidade total da sua operação.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Redução de custos operacionais",
                                    "Aumento da eficiência produtiva",
                                    "Manutenção preditiva (reduz downtime)",
                                    "Segurança do trabalhador aprimorada",
                                    "Dados precisos para decisões estratégicas",
                                    "Monitoramento remoto 24/7",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
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
                            <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 p-1 rounded-lg">
                                <div className="bg-gray-900 p-8 rounded-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Wifi className="h-32 w-32 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 relative z-10">Casos de Uso</h3>
                                    <div className="space-y-4 relative z-10">
                                        <div className="border-l-2 border-green-500 pl-4 py-1">
                                            <h4 className="text-white font-semibold">Mineração</h4>
                                            <p className="text-sm text-gray-400">Monitoramento de veículos autônomos e segurança em tempo real.</p>
                                        </div>
                                        <div className="border-l-2 border-cyan-500 pl-4 py-1">
                                            <h4 className="text-white font-semibold">Logística</h4>
                                            <p className="text-sm text-gray-400">Rastreamento de contêineres e otimização de rotas.</p>
                                        </div>
                                        <div className="border-l-2 border-green-500 pl-4 py-1">
                                            <h4 className="text-white font-semibold">Energia</h4>
                                            <p className="text-sm text-gray-400">Smart Grids e monitoramento de consumo.</p>
                                        </div>
                                        <div className="border-l-2 border-cyan-500 pl-4 py-1">
                                            <h4 className="text-white font-semibold">Agricultura</h4>
                                            <p className="text-sm text-gray-400">Agricultura de precisão com sensores de solo e clima.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">Conecte sua Empresa ao Futuro</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Descubra como a IoT pode transformar seu negócio hoje mesmo.
                            </p>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-green-600 to-cyan-500 hover:from-green-700 hover:to-cyan-600 px-8 py-6 text-lg"
                            >
                                Falar com Especialista IoT
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
                        <Link href="/" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                            ← Voltar à Página Inicial
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
