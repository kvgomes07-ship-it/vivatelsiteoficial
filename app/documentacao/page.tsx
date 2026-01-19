"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Search,
    Book,
    Code,
    Cpu,
    Shield,
    Globe,
    Terminal,
    FileText,
    ExternalLink,
    ChevronRight,
    ArrowRight,
    Play,
    MessageSquare,
    Zap,
    Download
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DocumentacaoPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const categories = [
        {
            title: "Vivatel Cloud",
            icon: Cpu,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            items: ["Primeiros Passos", "Gerenciamento de Instâncias", "S3 Storage", "Kubernetes (VKS)"]
        },
        {
            title: "Conectividade",
            icon: Globe,
            color: "text-teal-400",
            bg: "bg-teal-400/10",
            items: ["Cross Connect", "Internet Corporativa", "IP Transit", "SD-WAN"]
        },
        {
            title: "Segurança",
            icon: Shield,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            items: ["Firewall as a Service", "Proteção DDoS", "Compliance & Auditoria", "VPN Docs"]
        },
        {
            title: "Analytics",
            icon: Zap,
            color: "text-yellow-400",
            bg: "bg-yellow-400/10",
            items: ["Data Lake", "Visualização de Dados", "Processamento em Lote", "API de Telemetria"]
        }
    ]

    const popularArticles = [
        { title: "Como configurar sua primeira VPC", views: "2.4k" },
        { title: "Manual de Integração API v2", views: "1.8k" },
        { title: "Guia de Boas Práticas de Segurança", views: "1.2k" },
        { title: "Configurando DNS com a Vivatel", views: "900" }
    ]

    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            {/* Background Decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6"
                    >
                        <Book className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest">Documentação Oficial</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent"
                    >
                        Central de Conhecimento Vivatel
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Pesquise por produtos, guias ou termos técnicos..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all backdrop-blur-md"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-500 bg-black/50 border border-white/10 rounded-md">
                                <span className="text-xs">⌘</span>K
                            </kbd>
                        </div>
                    </motion.div>
                </div>

                {/* Popular Topics & Quick Actions */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 grid sm:grid-cols-2 gap-4"
                    >
                        <Link href="#" className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                            <div className="bg-cyan-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                                <Play className="h-6 w-6 fill-current" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Guia de Início Rápido</h3>
                            <p className="text-gray-400 text-sm">Aprenda a implantar sua primeira infraestrutura em menos de 5 minutos.</p>
                        </Link>

                        <Link href="#" className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                            <div className="bg-blue-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                                <Terminal className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Vivatel CLI</h3>
                            <p className="text-gray-400 text-sm">Gerencie todos os seus recursos via linha de comando com nossa ferramenta robusta.</p>
                        </Link>

                        <Link href="#" className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all sm:col-span-2">
                            <div className="flex items-center gap-6">
                                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center text-white">
                                    <Code className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">API Reference v2.4</h3>
                                    <p className="text-gray-400 text-sm">Documentação completa da nossa API RESTful para desenvolvedores.</p>
                                </div>
                                <ArrowRight className="ml-auto h-6 w-6 text-gray-500 group-hover:text-white transition-colors" />
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-8 bg-gradient-to-br from-cyan-950/40 to-black border border-cyan-500/20 rounded-3xl"
                    >
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-cyan-400" />
                            Artigos Populares
                        </h3>
                        <div className="space-y-4">
                            {popularArticles.map((article, i) => (
                                <Link key={i} href="#" className="flex items-center justify-between group py-2 border-b border-white/5 last:border-0">
                                    <span className="text-gray-400 group-hover:text-white transition-colors line-clamp-1">{article.title}</span>
                                    <span className="text-[10px] text-gray-600 bg-white/5 px-2 py-1 rounded-md">{article.views} views</span>
                                </Link>
                            ))}
                        </div>
                        <Button variant="ghost" className="w-full mt-6 text-cyan-400 hover:bg-cyan-400/10">
                            Ver todos os artigos
                        </Button>
                    </motion.div>
                </div>

                {/* Categories Grid */}
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Navegue por Categoria</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all"
                        >
                            <div className={`${cat.bg} ${cat.color} w-10 h-10 rounded-xl flex items-center justify-center mb-6`}>
                                <cat.icon className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-bold mb-4">{cat.title}</h3>
                            <ul className="space-y-3">
                                {cat.items.map((item, j) => (
                                    <li key={j}>
                                        <Link href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors group">
                                            <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Developer Tools Section */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-20">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold">Ferramentas de Desenvolvedor</h2>
                            <p className="text-gray-400 text-lg">
                                Estenda o poder da Vivatel com nossos SDKs, bibliotecas e ferramentas de monitoramento projetadas para ambientes de produção.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button className="bg-white text-black hover:bg-gray-200">
                                    <Download className="mr-2 h-4 w-4" />
                                    Baixar SDKs
                                </Button>
                                <Button variant="outline" className="border-white/10">
                                    GitHub Repository
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                            {[
                                { label: "Python SDK", version: "v4.2.1" },
                                { label: "Node.js Library", version: "v2.0.4" },
                                { label: "Go Wrapper", version: "v1.8.0" },
                                { label: "Terraform Provider", version: "v0.9.3" }
                            ].map((tool, i) => (
                                <div key={i} className="bg-black/40 border border-white/5 p-4 rounded-xl flex flex-col justify-between">
                                    <span className="font-bold text-sm">{tool.label}</span>
                                    <span className="text-[10px] text-teal-400 font-mono mt-2">{tool.version}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Community & Support */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-center">
                    <div className="space-y-4">
                        <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                            <MessageSquare className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold">Comunidade de Desenvolvedores</h3>
                        <p className="text-gray-400">Junte-se a outros engenheiros em nosso Slack ou Discord para trocar dicas e soluções.</p>
                        <Button variant="link" className="text-blue-400">Entrar na Comunidade →</Button>
                    </div>
                    <div className="space-y-4 border-l border-white/10 hidden md:block">
                        {/* Empty Space for visual separation */}
                    </div>
                    <div className="space-y-4 md:-ml-12">
                        <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
                            <Zap className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold">Suporte Dedicado</h3>
                        <p className="text-gray-400">Precisa de suporte arquitetural? Nossos engenheiros de soluções estão disponíveis 24/7.</p>
                        <Button variant="link" className="text-green-400">Contatar Engenharia →</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
