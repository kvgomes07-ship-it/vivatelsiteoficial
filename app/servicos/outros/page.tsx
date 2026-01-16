"use client"

import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle,
    Code,
    Zap,
    BookOpen,
    Database,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { SoftwareVisualization } from "@/components/interactive/software-visualization"
import { IoTVisualization } from "@/components/interactive/iot-visualization"
import { AcademyVisualization } from "@/components/interactive/academy-visualization"

export default function OutrosServicosPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Header placeholder - using global Navbar */}

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
                            <Zap className="h-4 w-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400">Ecossistema de Inovação</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                        >
                            Outros Serviços & Inovação
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        >
                            Além da infraestrutura core, oferecemos um ecossistema completo de desenvolvimento, IoT e educação para impulsionar a transformação digital em Angola.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Software Section */}
            <section className="py-24 relative overflow-hidden bg-gray-950/50">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                                <Code className="h-4 w-4 text-cyan-400" />
                                <span className="text-sm text-cyan-400 font-medium">Software Development</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">VIVATEL Software</h2>
                            <p className="text-gray-300 text-lg">
                                Transformamos suas ideias em produtos digitais. Nossa fábrica de software desenvolve soluções sob medida, de aplicativos móveis a sistemas corporativos complexos.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Desenvolvimento Web e Mobile (React, Native)",
                                    "Backend Escalável e Microserviços",
                                    "Integração de APIs e Sistemas Legados",
                                    "Design de UI/UX Centrado no Usuário",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-cyan-500" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                                Solicitar Orçamento
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1 rounded-lg">
                                <div className="h-[300px] w-full bg-gray-900 rounded-lg overflow-hidden relative">
                                    <SoftwareVisualization />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* IoT Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(34,211,238,0.05),transparent_70%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 md:order-1"
                        >
                            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1 rounded-lg">
                                <div className="h-[300px] w-full bg-gray-900 rounded-lg overflow-hidden relative">
                                    <IoTVisualization />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 order-1 md:order-2"
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                                <Zap className="h-4 w-4 text-cyan-400" />
                                <span className="text-sm text-cyan-400 font-medium">Stream & IoT</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">Internet das Coisas</h2>
                            <p className="text-gray-300 text-lg">
                                Conectamos o mundo físico ao digital. Soluções de IoT para indústria, agricultura e cidades inteligentes, com processamento de dados na borda (Edge).
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Sensores Inteligentes e Telemetria",
                                    "Gestão de Ativos em Tempo Real",
                                    "Automação Industrial (IIoT)",
                                    "Plataforma de Gestão de Dispositivos",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-cyan-500" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                                Falar com Especialista
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Academy Section */}
            <section className="py-24 relative overflow-hidden bg-gray-950/50">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                                <BookOpen className="h-4 w-4 text-cyan-400" />
                                <span className="text-sm text-cyan-400 font-medium">Academias & Labs</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">VIVATEL Academias</h2>
                            <p className="text-gray-300 text-lg">
                                O futuro é construído por pessoas. Nossos centros de treinamento e laboratórios de inovação preparam a próxima geração de talentos angolanos.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Bootcamps de Programação e DevOps",
                                    "Certificações em Cloud e Segurança",
                                    "Laboratórios de Inovação Aberta",
                                    "Programas de Aceleração de Startups",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-cyan-500" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                                Conhecer Programas
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1 rounded-lg">
                                <div className="h-[300px] w-full bg-gray-900 rounded-lg overflow-hidden relative">
                                    <AcademyVisualization />
                                </div>
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
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Inove com VIVATEL</h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            Do código à conectividade, temos todas as ferramentas para o seu sucesso.
                        </p>
                        <Link href="/">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-6 text-lg"
                            >
                                Contactar Agora
                            </Button>
                        </Link>
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
