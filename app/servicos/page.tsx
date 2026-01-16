"use client"

import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Code,
    Shield,
    Brain,
    Radio,
    Database,
    Zap,
    BookOpen,
    Cloud,
    BarChart3,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ServicosPage() {
    const mainServices = [
        {
            icon: <Cloud className="h-12 w-12 text-blue-500" />,
            title: "VIVATEL Cloud",
            description: "Infraestrutura em nuvem escalável e soberana para hospedar aplicações, gerenciar dados e escalar recursos com total controle.",
            features: ["Servidores Virtuais", "Armazenamento Escalável", "Auto-scaling", "99.99% Uptime"],
            href: "/servicos/cloud",
            color: "from-blue-500/20 to-cyan-500/20",
        },
        {
            icon: <BarChart3 className="h-12 w-12 text-cyan-500" />,
            title: "VIVATEL Analytics",
            description: "Análise avançada de dados com insights acionáveis em tempo real. Machine learning integrado para análise preditiva.",
            features: ["Dashboards em Tempo Real", "ML Integrado", "Análise de Tendências", "Alertas Inteligentes"],
            href: "/servicos/analytics",
            color: "from-cyan-500/20 to-blue-500/20",
        },
        {
            icon: <Shield className="h-12 w-12 text-blue-500" />,
            title: "VIVATEL Security",
            description: "Proteção abrangente com detecção de ameaças em tempo real, conformidade regulatória e criptografia end-to-end.",
            features: ["Firewall Avançado", "Detecção com IA", "Conformidade ISO 27001", "Monitoramento 24/7"],
            href: "/servicos/security",
            color: "from-blue-500/20 to-purple-500/20",
        },
        {
            icon: <Radio className="h-12 w-12 text-cyan-500" />,
            title: "VIVATEL Conectividade",
            description: "Infraestrutura de conectividade soberana com acesso direto aos cabos SACS e MONET, 5G Enterprise e baixa latência.",
            features: ["Fibra Óptica Dedicada", "5G Enterprise", "Latência < 3ms", "Redundância Total"],
            href: "/servicos/conectividade",
            color: "from-blue-500/20 to-green-500/20",
        },
    ]

    const additionalServices = [
        {
            icon: <Code className="h-10 w-10 text-blue-500" />,
            title: "Software",
            description: "Desenvolvimento, APIs robustas e workflows automatizados para acelerar time-to-market.",
            href: "/servicos/software",
        },
        {
            icon: <Database className="h-10 w-10 text-blue-500" />,
            title: "AI & DATA",
            description: "Processamento de dados em tempo real com modelos de IA personalizados.",
            href: "/servicos/analytics",
        },
        {
            icon: <Zap className="h-10 w-10 text-cyan-500" />,
            title: "Stream & IoT",
            description: "Streaming de dados em tempo real, robótica industrial e IoT para automação completa.",
            href: "/servicos/iot-stream",
        },
        {
            icon: <BookOpen className="h-10 w-10 text-blue-500" />,
            title: "Academias & Labs",
            description: "Programas de formação, certificação e inovação para desenvolver talento local.",
            href: "/servicos/academias",
        },
    ]

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
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                        >
                            Nossos Serviços
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        >
                            Soluções completas de infraestrutura digital para empresas e instituições angolanas. Parceria com Angola Cable para conectividade de classe mundial.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Soluções Principais</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Nossa suíte completa de soluções para transformar sua infraestrutura digital.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {mainServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={service.href}>
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl hover:scale-[1.02] transition-transform cursor-pointer">
                                        <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-colors backdrop-blur-sm">
                                            <div className={`mb-6 p-4 bg-gradient-to-br ${service.color} rounded-lg inline-block`}>
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                            <p className="text-gray-400 mb-6">{service.description}</p>
                                            <div className="space-y-2 mb-6">
                                                {service.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-2 text-cyan-400 font-medium">
                                                Saiba Mais <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Recursos Adicionais</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Ferramentas e serviços especializados para necessidades específicas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {additionalServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={service.href}>
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl hover:scale-[1.02] transition-transform cursor-pointer">
                                        <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-colors backdrop-blur-sm">
                                            <div className="mb-4 p-3 bg-gray-800/30 rounded-lg inline-block">{service.icon}</div>
                                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                            <p className="text-gray-400 mb-4">{service.description}</p>
                                            <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm">
                                                Explorar <ArrowRight className="h-3 w-3" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Angola Cable Partnership */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_60%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                                <Radio className="h-4 w-4 text-cyan-400" />
                                <span className="text-sm text-cyan-400">Parceria Estratégica</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Powered by Angola Cable</h2>
                            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                A VIVATEL é parceira oficial da Angola Cable, garantindo que todos os nossos serviços operem sobre uma das infraestruturas de telecomunicações mais avançadas da África, com acesso aos cabos submarinos SACS e MONET.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                                {[
                                    { label: "Capacidade", value: "40 Tbps" },
                                    { label: "Uptime", value: "99.99%" },
                                    { label: "Latência", value: "< 3ms" },
                                    { label: "Cobertura", value: "Nacional" },
                                ].map((stat, index) => (
                                    <div key={index} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
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
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">Pronto para Começar?</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Fale com nossa equipe e descubra como podemos transformar sua infraestrutura digital.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-6 text-lg"
                                >
                                    Contactar Vendas
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Link href="/">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-gray-700 text-gray-300 hover:bg-gray-900 px-8 py-6 text-lg"
                                    >
                                        Voltar à Página Inicial
                                    </Button>
                                </Link>
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
