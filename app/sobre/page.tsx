"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { TeamVisualization } from "@/components/interactive/team-visualization"
import {
    CheckCircle,
    Trophy,
    Users,
    Globe,
    Target,
    Shield,
    Zap,
    Cpu,
    Network,
    Award,
    ArrowRight,
    Server,
    BarChart3
} from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-black" />
                    <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-teal-900/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1),transparent_65%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6"
                        >
                            <Target className="h-4 w-4 text-teal-400" />
                            <span className="text-sm text-teal-400">Nossa Missão</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                        >
                            Soberania Digital para Angola
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        >
                            A Vivatel nasceu com o propósito de transformar o cenário tecnológico de Angola, oferecendo infraestrutura de classe mundial desenvolvida localmente.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold">Nossa História</h2>
                                <div className="h-1 w-20 bg-teal-500 rounded-full" />
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Fundada em 2024, a VIVATEL surgiu da necessidade de garantir que os dados e a infraestrutura crítica de Angola permanecessem sob soberania nacional, sem sacrificar a qualidade ou a inovação.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Em parceria estratégica com a Angola Cables, construímos uma rede robusta que conecta Angola ao mundo através dos cabos SACS e MONET, garantindo a menor latência do mercado e uma performance inigualável para nossos clientes.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-teal-400">100%</div>
                                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Capital Angolano</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-teal-400">40+ Tbps</div>
                                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Capacidade de Rede</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-teal-500/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 z-0" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                            <div className="relative z-10 h-full">
                                <TeamVisualization />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Strategy */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Visão de Futuro</h2>
                        <p className="text-xl text-gray-400">
                            Não estamos apenas construindo uma empresa, estamos construindo a espinha dorsal digital da Nação.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Hub Regional",
                                desc: "Tornar Angola o principal ponto de interconexão de dados entre África e o mundo.",
                                icon: Globe
                            },
                            {
                                title: "Independência",
                                desc: "Reduzir a dependência de infraestruturas estrangeiras, fortalecendo a economia local.",
                                icon: Shield
                            },
                            {
                                title: "Talento Interno",
                                desc: "Promover a formação e fixação de quadros altamente qualificados em solo angolano.",
                                icon: Users
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                            >
                                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7 text-teal-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section className="py-24 bg-gradient-to-b from-black to-gray-950">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 order-2 lg:order-1"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 p-8 flex flex-col justify-center gap-4 hover:border-teal-500/50 transition-colors">
                                        <Server className="w-10 h-10 text-teal-400" />
                                        <h4 className="font-bold">Tier III Data Centers</h4>
                                    </div>
                                    <div className="aspect-[4/3] bg-teal-500/10 rounded-2xl border border-teal-500/20 p-8 flex flex-col justify-center gap-4 hover:bg-teal-500/20 transition-all">
                                        <Network className="w-10 h-10 text-teal-400" />
                                        <h4 className="font-bold">Interconexão Global</h4>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-[4/3] bg-blue-500/10 rounded-2xl border border-blue-500/20 p-8 flex flex-col justify-center gap-4 hover:bg-blue-500/20 transition-all">
                                        <Shield className="w-10 h-10 text-blue-400" />
                                        <h4 className="font-bold">Cyber Security</h4>
                                    </div>
                                    <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 p-8 flex flex-col justify-center gap-4 hover:border-teal-500/50 transition-colors">
                                        <BarChart3 className="w-10 h-10 text-teal-400" />
                                        <h4 className="font-bold">99.9% Uptime</h4>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-8 order-1 lg:order-2"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold">Infraestrutura que Impulsiona o Futuro</h2>
                            <p className="text-gray-400 text-lg">
                                Localizada no coração tecnológico de Luanda, nossa infraestrutura é projetada para as cargas de trabalho mais exigentes.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Latência ultra-baixa com conexões diretas via SACS e MONET.",
                                    "Redundância total de energia e conectividade.",
                                    "Monitoramento 24/7 por nossa equipe técnica especializada.",
                                    "Ambiente controlado com os mais altos padrões de segurança física."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gray-950/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Nossos Valores</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Soberania", icon: Shield, desc: "Garantir a independência tecnológica e a segurança dos dados nacionais em cada bit processado." },
                            { title: "Inovação", icon: Zap, desc: "Busca constante pelas tecnologias mais avançadas para servir nossos clientes com o que há de melhor no mundo." },
                            { title: "Excelência", icon: Award, desc: "Compromisso inegociável com a qualidade, disponibilidade e precisão em todos os nossos serviços." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-black border border-white/10 hover:border-teal-500/50 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                                    <item.icon className="w-8 h-8 text-teal-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-teal-900/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.2),transparent_70%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para digitalizar o seu amanhã?</h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Seja você uma startup ou uma grande corporação, temos a infraestrutura certa para o seu crescimento.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-black font-bold h-14 px-10 rounded-full transition-all">
                                <Link href="/suporte">
                                    Fale Conosco
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 h-14 px-10 rounded-full transition-all">
                                <Link href="/servicos">
                                    Ver Soluções
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
