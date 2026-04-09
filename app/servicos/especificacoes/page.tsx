"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
    Wifi, Cloud, Globe, Code, ArrowLeft, ArrowRight, 
    Shield, Zap, Clock, Database, Smartphone, Laptop, 
    Layers, Cpu, Server, Lock
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SpeedGraph } from "@/components/interactive/visualizations/speed-graph"
import { DomainSearchMock } from "@/components/interactive/inputs/domain-search-mock"
import { HoverGlowCard } from "@/components/interactive/cards/hover-glow-card"
import { QuoteButton } from "@/components/interactive/buttons/quote-button"

export default function EspecificacoesPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
            {/* Navigation / Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/60 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/servicos/analytics" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <div className="p-2 rounded-full group-hover:bg-white/5 transition-colors">
                            <ArrowLeft className="h-5 w-5" />
                        </div>
                        <span className="font-medium">Voltar para Analytics</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        {["Internet", "Cloud", "Domínios", "Software"].map((item) => (
                            <button key={item} className="text-sm font-medium text-gray-500 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]">
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="snap-y snap-mandatory h-screen overflow-y-auto pt-20 no-scrollbar gpu-accelerate">
                {/* 1. INTERNET DEDICADA */}
                <section className="snap-start min-h-screen flex items-center relative overflow-hidden px-6">
                    <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] rounded-full opacity-40 blur-[100px] animate-pulse-glow gpu-accelerate"
                        style={{
                        background: `radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)`,
                        }}
                    />
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
                                    <Wifi className="h-4 w-4 text-cyan-400" />
                                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Internet Dedicada</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                                    Velocidade <span className="text-cyan-400">Simétrica</span> Sem Limites.
                                </h2>
                                <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                                    Infraestrutura de alta disponibilidade com <span className="text-white font-semibold">500 Mbps</span> de upload e download garantidos em contrato.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: Clock, label: "Baixa Latência", value: "< 10ms" },
                                        { icon: Shield, label: "Uptime Garantido", value: "99.9%" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col gap-2">
                                            <item.icon className="h-6 w-6 text-cyan-400" />
                                            <div className="text-2xl font-bold">{item.value}</div>
                                            <div className="text-sm text-gray-500">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <SpeedGraph />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. ARMAZENAMENTO EM CLOUD */}
                <section className="snap-start min-h-screen flex items-center relative overflow-hidden bg-[#04091a] px-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.05),transparent_50%)]" />
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-1/2 space-y-8"
                            >
                                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
                                    <Cloud className="h-4 w-4 text-blue-400" />
                                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Armazenamento Cloud</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                                    Sua Empresa <span className="text-blue-400">Escalável</span>.
                                </h2>
                                <p className="text-xl text-gray-400 leading-relaxed">
                                    Segurança de nível bancário e acesso remoto instantâneo. Pague apenas pelo que usar com escalabilidade infinita.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { icon: Database, text: "Bases de dados de alta performance" },
                                        { icon: Lock, text: "Segurança e Proteção Zero Trust" },
                                        { icon: Zap, text: "Backups rápidos e automáticos" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-gray-300">
                                            <div className="bg-blue-500/20 p-2 rounded-lg">
                                                <item.icon className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <span className="font-medium">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="lg:w-1/2 grid grid-cols-2 gap-4"
                            >
                                {[
                                    { icon: Server, title: "SaaS", desc: "Infra disponível" },
                                    { icon: Cpu, title: "PaaS", desc: "Ambiente dev" }
                                ].map((card, i) => (
                                    <HoverGlowCard key={i} className="p-8 aspect-square flex flex-col items-center justify-center text-center gap-4" glowColor="rgba(59, 130, 246, 0.2)">
                                        <card.icon className="h-12 w-12 text-blue-400" />
                                        <div>
                                            <div className="text-2xl font-bold">{card.title}</div>
                                            <div className="text-sm text-gray-500">{card.desc}</div>
                                        </div>
                                    </HoverGlowCard>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. VENDA DE DOMÍNIOS */}
                <section className="snap-start min-h-screen flex items-center relative overflow-hidden px-6">
                    <div className="container mx-auto text-center space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="space-y-6 max-w-3xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mx-auto">
                                <Globe className="h-4 w-4 text-purple-400" />
                                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Domínios .AO</span>
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter">Sua identidade <span className="text-purple-400">digital</span>.</h2>
                            <p className="text-xl text-gray-400">Garanta seu endereço oficial na rede nacional de Angola com ativação instantânea.</p>
                        </motion.div>
                        
                        <DomainSearchMock />
                    </div>
                </section>

                {/* 4. CRIAÇÃO DE SOFTWARES */}
                <section className="snap-start min-h-screen flex items-center relative overflow-hidden bg-[#030712] px-6">
                    <div className="container mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2"
                            >
                                <Code className="h-4 w-4 text-emerald-400" />
                                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Software Sob Medida</span>
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Transformamos código em <span className="text-emerald-400">valor</span>.</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { icon: Laptop, title: "Aplicações Web", desc: "Sistemas complexos escaláveis para nuvem.", delay: 0 },
                                { icon: Smartphone, title: "Mobile Apps", desc: "Experiências iOS e Android de alta performance.", delay: 100 },
                                { icon: Layers, title: "Ecosystems", desc: "Integração total de hardware e software.", delay: 200 }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: item.delay / 1000 }}
                                >
                                    <HoverGlowCard className="p-10 h-full border-white/5 hover:border-emerald-500/30 transition-colors" glowColor="rgba(16, 185, 129, 0.2)">
                                        <div className="space-y-6">
                                            <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit">
                                                <item.icon className="h-8 w-8 text-emerald-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                            <p className="text-gray-400">{item.desc}</p>
                                            <Button variant="link" className="p-0 text-emerald-400 hover:text-emerald-300 font-bold uppercase text-[10px] tracking-widest gap-2">
                                                Saber mais <ArrowRight className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    </HoverGlowCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Sticky Footnote */}
            <footer className="fixed bottom-0 left-0 right-0 z-40 p-6 pointer-events-none">
                <div className="container mx-auto flex justify-between items-end">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl pointer-events-auto">
                        <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-1">Status de Operação</div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-white uppercase tabular-nums">Sistemas 100% Operacionais</span>
                        </div>
                    </div>
                    <QuoteButton serviceName="Especificações Técnicas - Orçamento">
                        <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-6 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.3)] pointer-events-auto">
                            Solicitar Orçamento
                        </Button>
                    </QuoteButton>
                </div>
            </footer>
        </div>
    )
}
