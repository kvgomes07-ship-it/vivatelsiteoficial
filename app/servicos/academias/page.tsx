"use client"

import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle,
    BookOpen,
    GraduationCap,
    Users,
    Lightbulb,
    Trophy,
    Target,
    Rocket,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AcademiasPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black" />
                    <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-900/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_65%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6"
                        >
                            <GraduationCap className="h-4 w-4 text-indigo-400" />
                            <span className="text-sm text-indigo-400">Capacitação e Inovação</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-sky-200 bg-clip-text text-transparent leading-tight"
                        >
                            VIVATEL Academias & Labs
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        >
                            Investindo no capital humano de Angola. Programas de formação, certificações internacionais e laboratórios de inovação para preparar os líderes tecnológicos de amanhã.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <Button className="bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 transition-all duration-300">
                                Ver Cursos Disponíveis
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
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-sky-500/20 rounded-lg blur-3xl" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl h-[300px] md:h-[400px] flex items-center justify-center">
                            {/* Abstract Visual: Growth/Knowledge */}
                            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                                {/* Floating Elements */}
                                <div className="absolute top-1/4 left-1/4 animate-[bounce_4s_infinite]">
                                    <BookOpen className="h-16 w-16 text-indigo-500/50" />
                                </div>
                                <div className="absolute bottom-1/3 right-1/4 animate-[bounce_5s_infinite_reverse]">
                                    <Lightbulb className="h-20 w-20 text-sky-500/50" />
                                </div>
                                <div className="absolute top-1/3 right-1/3 animate-[pulse_3s_infinite]">
                                    <Rocket className="h-12 w-12 text-purple-500/50" />
                                </div>

                                {/* Central Glow */}
                                <div className="absolute w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Pilares do Conhecimento</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Uma abordagem completa para o desenvolvimento de competências digitais.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <BookOpen className="h-10 w-10 text-indigo-500" />,
                                title: "Cursos Técnicos",
                                description: "Formações em Cloud Computing, DevOps, Cibersegurança e Data Science.",
                            },
                            {
                                icon: <Trophy className="h-10 w-10 text-sky-500" />,
                                title: "Certificações",
                                description: "Preparação e exames para certificações reconhecidas internacionalmente.",
                            },
                            {
                                icon: <Lightbulb className="h-10 w-10 text-indigo-500" />,
                                title: "Inovação Labs",
                                description: "Espaços dedicados para experimentação, prototipagem e desenvolvimento de MVPs.",
                            },
                            {
                                icon: <Users className="h-10 w-10 text-sky-500" />,
                                title: "Mentoria",
                                description: "Acompanhamento por profissionais experientes do mercado.",
                            },
                            {
                                icon: <Target className="h-10 w-10 text-indigo-500" />,
                                title: "Hackathons",
                                description: "Maratonas de programação para resolver desafios reais e identificar talentos.",
                            },
                            {
                                icon: <Rocket className="h-10 w-10 text-sky-500" />,
                                title: "Aceleração",
                                description: "Programas de suporte para startups e empreendedores digitais.",
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
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-indigo-500/50 transition-colors backdrop-blur-sm">
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
                            <h2 className="text-3xl md:text-4xl font-bold">Desenvolvendo Talentos</h2>
                            <p className="text-gray-300 text-lg">
                                Nosso compromisso vai além da tecnologia; focamos no desenvolvimento de pessoas capazes de transformar a realidade de Angola.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Currículo alinhado com demandas de mercado",
                                    "Instrutores certificados e atuantes na área",
                                    "Ambiente prático com tecnologias reais",
                                    "Networking com grandes empresas",
                                    "Acesso a oportunidades de emprego",
                                    "Fomento ao empreendedorismo local",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-0.5" />
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
                            <div className="bg-gradient-to-br from-indigo-500/20 to-sky-500/20 p-1 rounded-lg">
                                <div className="bg-gray-900 p-8 rounded-lg">
                                    <h3 className="text-2xl font-bold mb-6">Trilhas de Aprendizado</h3>

                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-semibold text-white">Full Stack Developer</span>
                                                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">6 Meses</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full">
                                                <div className="h-full w-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full"></div>
                                            </div>
                                            <p className="text-sm text-gray-400 mt-1">HTML, CSS, JS, React, Node, SQL</p>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-semibold text-white">Cloud Architect</span>
                                                <span className="text-xs bg-sky-500/20 text-sky-300 px-2 py-1 rounded">4 Meses</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full">
                                                <div className="h-full w-full bg-gradient-to-r from-sky-600 to-sky-400 rounded-full"></div>
                                            </div>
                                            <p className="text-sm text-gray-400 mt-1">AWS, Azure, Docker, K8s</p>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-semibold text-white">Cyber Security</span>
                                                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">5 Meses</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full">
                                                <div className="h-full w-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                                            </div>
                                            <p className="text-sm text-gray-400 mt-1">Network Security, Ethical Hacking, Compliance</p>
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">Invista no seu Futuro</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Inscreva-se em nossos programas e faça parte da elite tecnológica de Angola.
                            </p>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 px-8 py-6 text-lg"
                            >
                                Ver Calendário de Cursos
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
                        <Link href="/" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                            ← Voltar à Página Inicial
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
