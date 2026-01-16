"use client"

import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle,
    Code,
    Cpu,
    GitBranch,
    Globe,
    Layout,
    Smartphone,
    Terminal,
    Zap,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SoftwarePage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
                    <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_65%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6"
                        >
                            <Code className="h-4 w-4 text-purple-400" />
                            <span className="text-sm text-purple-400">Desenvolvimento de Software Premium</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
                        >
                            VIVATEL Software
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        >
                            Transformamos ideias em realidade digital. Desenvolvimento de software sob medida, APIs robustas e workflows automatizados para acelerar o crescimento do seu negócio.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300">
                                Iniciar Projeto
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-900 px-8 py-6 rounded-full text-lg font-medium">
                                Ver Portfolio
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative w-full max-w-5xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-3xl" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl h-[300px] md:h-[500px] flex items-center justify-center">
                            {/* Abstract Visual Representation of Code/Software */}
                            <div className="relative w-full h-full p-8 font-mono text-sm md:text-base text-gray-400 overflow-hidden opacity-50">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse" />
                                <pre className="whitespace-pre-wrap">
                                    {`
import { Future } from '@vivatel/core';
import { Innovation } from '@vivatel/ui';

class DigitalTransformation extends Strategy {
  constructor() {
    super();
    this.performance = 'maximum';
    this.security = 'enterprise-grade';
    this.scalability = Infinity;
  }

  async deploy() {
    const infrastructure = await Cloud.connect();
    const analytics = await Innovation.analyze(data);
    
    return new Experience({
      speed: this.performance,
      reliability: true,
      sovereignty: true
    });
  }
}

export default new DigitalTransformation();
                                    `}
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossas Competências</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Tecnologia de ponta e metodologias ágeis para entregar valor real.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Globe className="h-10 w-10 text-purple-500" />,
                                title: "Desenvolvimento Web",
                                description: "Aplicações web progressivas, SPAs e plataformas enterprise com React, Next.js e Node.js.",
                            },
                            {
                                icon: <Smartphone className="h-10 w-10 text-pink-500" />,
                                title: "Mobile Apps",
                                description: "Aplicativos nativos e híbridos para iOS e Android que encantam usuários.",
                            },
                            {
                                icon: <Terminal className="h-10 w-10 text-purple-500" />,
                                title: "Backend & APIs",
                                description: "Microserviços escaláveis, APIs RESTful e GraphQL de alta performance.",
                            },
                            {
                                icon: <GitBranch className="h-10 w-10 text-pink-500" />,
                                title: "DevOps & CI/CD",
                                description: "Pipelines automatizados, containerização e orquestração para deploys seguros.",
                            },
                            {
                                icon: <Layout className="h-10 w-10 text-purple-500" />,
                                title: "UX/UI Design",
                                description: "Interfaces intuitivas e experiências de usuário centradas no ser humano.",
                            },
                            {
                                icon: <Cpu className="h-10 w-10 text-pink-500" />,
                                title: "Automação (RPA)",
                                description: "Robôs de software para automatizar processos repetitivos e aumentar a eficiência.",
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
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
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
                            <h2 className="text-3xl md:text-4xl font-bold">Desenvolvimento Ágil e Moderno</h2>
                            <p className="text-gray-300 text-lg">
                                Adotamos as melhores práticas da indústria para garantir que seu software seja não apenas funcional, mas também seguro, escalável e fácil de manter.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Arquitetura baseada em eventos e microserviços",
                                    "Clean Code e padrões SOLID",
                                    "Testes automatizados e QA rigoroso",
                                    "Segurança by Design",
                                    "Documentação técnica abrangente",
                                    "Monitoramento de performance integrado",
                                    "Integração contínua (CI/CD)",
                                    "Suporte e manutenção evolutiva",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
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
                            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 rounded-lg">
                                <div className="bg-gray-900 p-8 rounded-lg">
                                    <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "Frontend", val: "React, Next.js, Vue" },
                                            { label: "Backend", val: "Node.js, Python, Go" },
                                            { label: "Mobile", val: "React Native, Flutter" },
                                            { label: "Database", val: "PostgreSQL, MangoDB" },
                                            { label: "DevOps", val: "Docker, K8s, Terraform" },
                                            { label: "Cloud", val: "AWS, Azure, GCP" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="bg-gray-800/50 p-4 rounded border border-gray-700">
                                                <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">{item.label}</div>
                                                <div className="text-sm font-semibold text-white">{item.val}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">Vamos Construir Algo Incrível?</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Entre em contato com nossos especialistas para discutir seu próximo projeto de software.
                            </p>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 px-8 py-6 text-lg"
                            >
                                Falar com Consultor
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
                        <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                            ← Voltar à Página Inicial
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
