"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle,
    Shield,
    Lock,
    Eye,
    FileCheck,
    AlertTriangle,
    Key,
    ShieldCheck,
    Server,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { SecurityPlatform } from "@/components/interactive/security-platform"

export default function SecurityPage() {
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
                            <Shield className="h-4 w-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400">Segurança de Nível Empresarial</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                        >
                            VIVATEL Security
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        >
                            Proteção abrangente com detecção de ameaças em tempo real, conformidade regulatória e criptografia de ponta a ponta. Mantenha sua infraestrutura segura 24/7.
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
                                Avaliação de Segurança
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative w-full max-w-5xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-3xl" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl">
                            <div className="relative h-[300px] md:h-[500px] w-full">
                                <SecurityPlatform />
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Camadas de Proteção</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Segurança multicamadas que protege cada aspecto da sua infraestrutura digital.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Shield className="h-10 w-10 text-blue-500" />,
                                title: "Firewall Avançado",
                                description: "Proteção de perímetro com regras inteligentes e filtragem de tráfego.",
                            },
                            {
                                icon: <Lock className="h-10 w-10 text-cyan-500" />,
                                title: "Criptografia End-to-End",
                                description: "Dados protegidos em repouso e em trânsito com AES-256 e TLS 1.3.",
                            },
                            {
                                icon: <Eye className="h-10 w-10 text-blue-500" />,
                                title: "Monitoramento Contínuo",
                                description: "Vigilância 24/7 com detecção de anomalias e comportamentos suspeitos.",
                            },
                            {
                                icon: <AlertTriangle className="h-10 w-10 text-cyan-500" />,
                                title: "Detecção de Ameaças com IA",
                                description: "Machine learning identifica e bloqueia ameaças antes que causem danos.",
                            },
                            {
                                icon: <FileCheck className="h-10 w-10 text-blue-500" />,
                                title: "Conformidade Regulatória",
                                description: "Certificações ISO 27001, SOC 2 e conformidade com GDPR.",
                            },
                            {
                                icon: <Key className="h-10 w-10 text-cyan-500" />,
                                title: "Gestão de Identidades",
                                description: "Autenticação multifator e controle de acesso baseado em funções.",
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

            {/* Security Services */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Serviços de Segurança</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Soluções completas para proteger cada camada da sua infraestrutura.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Proteção DDoS",
                                description: "Mitigue ataques distribuídos de negação de serviço automaticamente.",
                                features: [
                                    "Detecção automática de ataques",
                                    "Mitigação em tempo real",
                                    "Capacidade de até 3.2 Tbps",
                                    "Proteção de camadas 3, 4 e 7",
                                ],
                                icon: <Server className="h-8 w-8 text-cyan-400" />,
                            },
                            {
                                title: "WAF - Web Application Firewall",
                                description: "Proteja aplicações web contra vulnerabilidades e exploits.",
                                features: [
                                    "Proteção OWASP Top 10",
                                    "Regras customizáveis",
                                    "Rate limiting inteligente",
                                    "Bot detection avançado",
                                ],
                                icon: <ShieldCheck className="h-8 w-8 text-cyan-400" />,
                            },
                            {
                                title: "Auditoria e Compliance",
                                description: "Mantenha conformidade com regulamentações e padrões internacionais.",
                                features: [
                                    "Logs de auditoria detalhados",
                                    "Relatórios de conformidade",
                                    "Scan de vulnerabilidades",
                                    "Certificações automáticas",
                                ],
                                icon: <FileCheck className="h-8 w-8 text-cyan-400" />,
                            },
                            {
                                title: "Backup e Recuperação",
                                description: "Garanta continuidade de negócio com backups automáticos.",
                                features: [
                                    "Backup automático diário",
                                    "Replicação geográfica",
                                    "Recuperação point-in-time",
                                    "Testes de restauração",
                                ],
                                icon: <Lock className="h-8 w-8 text-cyan-400" />,
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
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-colors backdrop-blur-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold">{service.title}</h3>
                                        </div>
                                        <p className="text-gray-400 mb-6">{service.description}</p>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, i) => (
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

            {/* Threat Intelligence */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">Inteligência de Ameaças</h2>
                            <p className="text-gray-300 text-lg">
                                Nossa plataforma utiliza inteligência artificial e machine learning para identificar e neutralizar ameaças antes que elas afetem sua infraestrutura.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Base de dados global de ameaças atualizada em tempo real",
                                    "Análise comportamental com deep learning",
                                    "Correlação de eventos de segurança",
                                    "Resposta automática a incidentes",
                                    "Sandbox para análise de malware",
                                    "Threat hunting proativo",
                                    "Integração com feeds de inteligência",
                                    "Relatórios executivos personalizados",
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
                                    <h3 className="text-2xl font-bold mb-6">Estatísticas de Proteção</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300">Taxa de Detecção</span>
                                                <span className="text-cyan-400 font-medium">99.7%</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-[99.7%]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300">Tempo de Resposta</span>
                                                <span className="text-cyan-400 font-medium">&lt; 60s</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-[95%]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300">Falsos Positivos</span>
                                                <span className="text-cyan-400 font-medium">&lt; 0.1%</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-[2%]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300">Cobertura de Proteção</span>
                                                <span className="text-cyan-400 font-medium">100%</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 w-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-4 rounded-lg text-center">
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">2.5M+</div>
                                    <div className="text-sm text-gray-400">Ameaças Bloqueadas/Dia</div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-4 rounded-lg text-center">
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                                    <div className="text-sm text-gray-400">SOC Operacional</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_60%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Certificações e Conformidade</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Mantemos os mais altos padrões de segurança e conformidade internacional.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            "ISO 27001",
                            "SOC 2 Type II",
                            "GDPR Compliant",
                            "PCI DSS Level 1",
                            "ISO 27017",
                            "ISO 27018",
                            "HIPAA Ready",
                            "Cloud Security Alliance",
                        ].map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-lg">
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800/50 hover:border-cyan-500/50 transition-colors backdrop-blur-sm text-center">
                                        <ShieldCheck className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                                        <h3 className="text-sm font-bold">{cert}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Planos de Segurança</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Proteção abrangente adaptada ao tamanho e necessidades da sua organização.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Essential",
                                price: "AOA 99K",
                                period: "mês",
                                features: [
                                    "Firewall básico",
                                    "Certificado SSL/TLS",
                                    "DDoS protection (100 Gbps)",
                                    "Backup semanal",
                                    "Suporte por Email",
                                ],
                            },
                            {
                                name: "Advanced",
                                price: "AOA 399K",
                                period: "mês",
                                features: [
                                    "Firewall avançado + WAF",
                                    "Certificados wildcard",
                                    "DDoS protection (1 Tbps)",
                                    "IA threat detection",
                                    "Backup diário",
                                    "Auditoria mensal",
                                    "Suporte Priority",
                                ],
                                popular: true,
                            },
                            {
                                name: "Enterprise",
                                price: "Custom",
                                period: "",
                                features: [
                                    "Security suite completa",
                                    "DDoS protection ilimitado",
                                    "SOC dedicado 24/7",
                                    "Penetration testing",
                                    "Compliance management",
                                    "Incident response team",
                                    "Gerente de Segurança",
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
                                        Recomendado
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
                                                    <span className="text-gray-300 text-sm">{feature}</span>
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
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">Proteja Sua Infraestrutura Hoje</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Solicite uma avaliação de segurança gratuita e descubra como podemos proteger seu negócio.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-6 text-lg"
                                >
                                    Avaliação Gratuita
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-gray-700 text-gray-300 hover:bg-gray-900 px-8 py-6 text-lg"
                                >
                                    Falar com Especialista
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
