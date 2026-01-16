"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { TeamVisualization } from "@/components/interactive/team-visualization"
import { CheckCircle, Trophy, Users, Globe, Target } from "lucide-react"

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
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">Nossa História</h2>
                            <p className="text-gray-400 text-lg">
                                Fundada em 2024, a VIVATEL surgiu da necessidade de garantir que os dados e a infraestrutura crítica de Angola permanecessem sob soberania nacional, sem sacrificar a qualidade ou a inovação.
                            </p>
                            <p className="text-gray-400 text-lg">
                                Em parceria estratégica com a Angola Cable, construímos uma rede robusta que conecta Angola ao mundo através dos cabos SACS e MONET, garantindo a menor latência do mercado.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div>
                                    <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
                                    <div className="text-sm text-gray-500">Angolana</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-teal-400 mb-2">40Tbps</div>
                                    <div className="text-sm text-gray-500">Capacidade de Rede</div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-gray-800 bg-gray-900/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10" />
                            <TeamVisualization />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gray-950/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">Nossos Valores</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Soberania", icon: Shield, desc: "Garantir a independência tecnológica e a segurança dos dados nacionais." },
                            { title: "Inovação", icon: Zap, desc: "Busca constante pelas tecnologias mais avançadas para servir nossos clientes." },
                            { title: "Excelência", icon: Trophy, desc: "Compromisso inegociável com a qualidade e disponibilidade dos serviços." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-teal-500/50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                                    {/* <item.icon className="w-6 h-6 text-teal-400" /> */}
                                    {/* Workaround for icon component usage if needed, but passing direct component works */}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

function Shield(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg> }
function Zap(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> }
