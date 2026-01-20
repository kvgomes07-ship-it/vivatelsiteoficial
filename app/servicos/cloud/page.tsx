"use client"

import { useState } from "react"
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
import { motion } from "framer-motion"
import Image from "next/image"
import { CloudPlatform } from "@/components/interactive/cloud-platform"

export default function CloudPage() {
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
                            <Cloud className="h-4 w-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400">Infraestrutura em Nuvem Soberana</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                        >
                            VIVATEL Cloud
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        >
                            Infraestrutura em nuvem escalável e soberana, construída para Angola. Hospede aplicações, gerencie dados e escale recursos com total controle e segurança.
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
                                Ver Documentação
                            </Button>
                        </motion.div>
                    </div>
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
  className="relative w-full max-w-5xl mx-auto"
>
  {/* Glow background */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-sky-500/20 rounded-lg blur-3xl" />

  {/* Container */}
  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl h-[300px] md:h-[400px]">

    {/* Video */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="/videos/cloud.mp4"
      autoPlay
      loop
      muted
      playsInline
    />

    {/* Overlay opcional (para melhor contraste do texto) */}
    <div className="absolute inset-0 bg-black/30" />

  </div>
</motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative w-full max-w-5xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-3xl" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl">
                            <div className="relative h-[300px] md:h-[500px] w-full">
                                <CloudPlatform />
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Recursos da Plataforma</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Tudo que você precisa para construir, implantar e escalar aplicações na nuvem.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Server className="h-10 w-10 text-blue-500" />,
                                title: "Servidores Virtuais",
                                description: "Crie e gerencie máquinas virtuais com configurações personalizadas em segundos.",
                            },
                            {
                                icon: <Database className="h-10 w-10 text-cyan-500" />,
                                title: "Armazenamento Escalável",
                                description: "Armazenamento de objetos e blocos com redundância e alta disponibilidade.",
                            },
                            {
                                icon: <Zap className="h-10 w-10 text-blue-500" />,
                                title: "Auto-scaling",
                                description: "Escale recursos automaticamente com base na demanda da sua aplicação.",
                            },
                            {
                                icon: <Shield className="h-10 w-10 text-cyan-500" />,
                                title: "Segurança Integrada",
                                description: "Firewalls, VPNs e criptografia de dados em repouso e em trânsito.",
                            },
                            {
                                icon: <BarChart3 className="h-10 w-10 text-blue-500" />,
                                title: "Monitoramento 24/7",
                                description: "Acompanhe métricas, logs e performance em tempo real.",
                            },
                            {
                                icon: <Globe className="h-10 w-10 text-cyan-500" />,
                                title: "Rede Global",
                                description: "Infraestrutura distribuída com baixa latência e alta performance.",
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

            {/* Benefits Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">Por Que Escolher VIVATEL Cloud?</h2>
                            <p className="text-gray-300 text-lg">
                                Nossa plataforma em nuvem foi desenvolvida especificamente para atender às necessidades de empresas e instituições angolanas, garantindo soberania de dados e conformidade local.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Escalabilidade automática e inteligente",
                                    "Infraestrutura geograficamente distribuída",
                                    "Preços flexíveis e transparentes",
                                    "99.99% de disponibilidade garantida",
                                    "Suporte técnico em português 24/7",
                                    "Conformidade com regulamentações locais",
                                    "Backup automático e recuperação de desastres",
                                    "API robusta e documentação completa",
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
                                    <h3 className="text-2xl font-bold mb-4">Especificações Técnicas</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-400">CPU Cores</span>
                                                <span className="text-white font-medium">1 - 64 vCPUs</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-3/4"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-400">Memória RAM</span>
                                                <span className="text-white font-medium">1GB - 512GB</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-4/5"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-400">Armazenamento SSD</span>
                                                <span className="text-white font-medium">10GB - 10TB</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-full"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-400">Largura de Banda</span>
                                                <span className="text-white font-medium">Até 10Gbps</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-5/6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-6 rounded-lg">
                                <h4 className="text-lg font-bold mb-3">Parceria Angola Cable</h4>
                                <p className="text-gray-300 text-sm">
                                    A VIVATEL é parceira oficial da Angola Cable, garantindo conectividade de alta qualidade com infraestrutura de cabos submarinos e terrestres de última geração.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Preços Transparentes</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Pague apenas pelo que usar. Sem taxas ocultas, sem surpresas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Starter",
                                price: "AOA 25K",
                                period: "mês",
                                features: [
                                    "2 vCPUs",
                                    "4GB RAM",
                                    "80GB SSD",
                                    "2TB Transferência",
                                    "Suporte por Email",
                                ],
                            },
                            {
                                name: "Professional",
                                price: "AOA 99K",
                                period: "mês",
                                features: [
                                    "8 vCPUs",
                                    "16GB RAM",
                                    "320GB SSD",
                                    "8TB Transferência",
                                    "Suporte Priority",
                                    "Backup Automático",
                                ],
                                popular: true,
                            },
                            {
                                name: "Enterprise",
                                price: "Custom",
                                period: "",
                                features: [
                                    "vCPUs ilimitados",
                                    "RAM personalizada",
                                    "Armazenamento escalável",
                                    "Transferência ilimitada",
                                    "Suporte 24/7",
                                    "SLA 99.99%",
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
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">Pronto para Começar?</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Experimente a VIVATEL Cloud gratuitamente por 14 dias. Sem cartão de crédito necessário.
                            </p>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-6 text-lg"
                            >
                                Iniciar Teste Gratuito
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
