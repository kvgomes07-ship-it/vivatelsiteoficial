// Server Component — zero client JS, CSS-only animations
// Bento-grid premium layout inspired by modern SaaS design

import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Code,
    Globe,
    Smartphone,
    Terminal,
    GitBranch,
    Layout,
    Cpu,
    ArrowUpRight,
} from "lucide-react"
import { PremiumCard } from "@/components/ui/premium-card"
import { Footer } from "@/components/footer"
import { QuoteButton } from "@/components/interactive/buttons/quote-button"

/* ─── Static Data ──────────────────────────────────────────── */

const TECH_STACK = [
    { label: "Frontend", techs: ["React", "Next.js", "Vue.js"], accent: "text-purple-400" },
    { label: "Backend", techs: ["Node.js", "Python", "Go"], accent: "text-pink-400" },
    { label: "Mobile", techs: ["React Native", "Flutter"], accent: "text-purple-400" },
    { label: "DevOps", techs: ["Docker", "K8s", "Terraform"], accent: "text-pink-400" },
    { label: "Database", techs: ["PostgreSQL", "MongoDB"], accent: "text-purple-400" },
    { label: "Cloud", techs: ["AWS", "Azure", "GCP"], accent: "text-pink-400" },
] as const

const CAPABILITIES = [
    { icon: Globe, title: "Desenvolvimento Web", desc: "Aplicações web progressivas, SPAs e plataformas enterprise com React, Next.js e Node.js." },
    { icon: Smartphone, title: "Mobile Apps", desc: "Aplicativos nativos e híbridos para iOS e Android que encantam utilizadores." },
    { icon: Terminal, title: "Backend & APIs", desc: "Microserviços escaláveis, APIs RESTful e GraphQL de alta performance." },
    { icon: GitBranch, title: "DevOps & CI/CD", desc: "Pipelines automatizados, containerização e orquestração para deploys seguros." },
    { icon: Layout, title: "UX/UI Design", desc: "Interfaces intuitivas e experiências de utilizador centradas no ser humano." },
    { icon: Cpu, title: "Automação (RPA)", desc: "Robôs de software para automatizar processos repetitivos e aumentar eficiência." },
] as const

const PRACTICES = [
    "Arquitetura baseada em microserviços",
    "Clean Code & padrões SOLID",
    "Testes automatizados & QA rigoroso",
    "Segurança by Design",
    "Documentação técnica abrangente",
    "Integração contínua (CI/CD)",
] as const

/* ─── Page ─────────────────────────────────────────────────── */

export default function SoftwarePage() {
    return (
        <div className="min-h-screen bg-[#08080c] text-white overflow-hidden selection:bg-purple-500/30">

            {/* ━━━ Hero ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="relative pt-32 pb-20 overflow-hidden text-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.1),transparent_70%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-purple-500/5 border border-purple-500/20 rounded-full px-4 py-1 mb-10">
                            <Code className="h-3 w-3 text-purple-500" />
                            <span className="text-[10px] text-purple-500 font-bold uppercase tracking-widest">Desenvolvimento de Software Premium</span>
                        </div>

                        <h1 className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[80px] font-black mb-6 tracking-tighter text-white leading-[0.9]">
                            VIVATEL Software
                        </h1>

                        <p className="text-sm md:text-xl text-gray-500 font-medium mb-10 max-w-2xl mx-auto">
                            Transformamos ideias em realidade digital. Software sob medida, APIs robustas e workflows automatizados para acelerar o crescimento do seu negócio.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <QuoteButton serviceName="VIVATEL Software">
                                <Button className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-7 text-lg font-bold rounded-full group transition-all duration-300">
                                    Iniciar Projeto <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </QuoteButton>
                            <Button variant="outline" className="border-white/10 text-gray-400 hover:bg-white/5 hover:text-white px-10 py-7 rounded-full text-lg font-bold transition-all">
                                Ver Portfolio
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━ Bento Grid — Competências ━━━━━━━━━━━━━━━━━━ */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Nossas Competências</h2>
                        <p className="text-gray-500 font-medium max-w-2xl mx-auto">Tecnologia de ponta e metodologias ágeis para entregar valor real.</p>
                    </div>

                    {/* Bento Layout — 2 large + 4 small */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

                        {/* Featured Card 1 — Expert Developers */}
                        <PremiumCard variant="mesh" className="lg:col-span-2 border-purple-500/10 hover:border-purple-500/30">
                            <div className="p-8 md:p-10 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="p-4 bg-purple-500/5 border border-purple-500/10 rounded-2xl">
                                        <Code className="h-8 w-8 text-purple-400" />
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3">Expert Developers</h3>
                                <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8 max-w-lg">
                                    Profissionais treinados com ferramentas reais, frameworks de produção e workflows de nível enterprise.
                                </p>
                                <div className="mt-auto grid grid-cols-3 sm:grid-cols-6 gap-3">
                                    {["React", "Node.js", "Python", "Next.js", "Go", "Flutter"].map((tech) => (
                                        <div key={tech} className="bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 text-center">
                                            <span className="text-[11px] font-bold text-gray-400 tracking-tight">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </PremiumCard>

                        {/* Featured Card 2 — Verified Quality */}
                        <PremiumCard variant="mesh" className="border-pink-500/10 hover:border-pink-500/30">
                            <div className="p-8 md:p-10 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="p-4 bg-pink-500/5 border border-pink-500/10 rounded-2xl">
                                        <GitBranch className="h-8 w-8 text-pink-400" />
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-gray-600 group-hover:text-pink-400 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black tracking-tight mb-3">Qualidade Verificada</h3>
                                <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8">
                                    Cada projeto é avaliado, revisto e aprovado por engenheiros sénior com processos de QA rigorosos.
                                </p>
                                <div className="mt-auto flex flex-col gap-2">
                                    {["Code Review", "Testes Automatizados", "QA Manual"].map((item) => (
                                        <div key={item} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3">
                                            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </PremiumCard>

                        {/* Remaining capability cards */}
                        {CAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
                            <PremiumCard key={i} className="hover:border-purple-500/20">
                                <div className="p-8 h-full flex flex-col">
                                    <div className="mb-6 p-4 bg-white/[0.03] border border-white/5 rounded-2xl inline-block w-fit group-hover:scale-105 transition-transform duration-500">
                                        <Icon className={`h-7 w-7 ${i % 2 === 0 ? "text-purple-400" : "text-pink-400"}`} />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 tracking-tight">{title}</h3>
                                    <p className="text-gray-500 font-medium text-sm leading-relaxed">{desc}</p>
                                </div>
                            </PremiumCard>
                        ))}

                    </div>
                </div>
            </section>

            {/* ━━━ Tech Stack & Practices ━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">

                        {/* Left — Practices */}
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
                                Desenvolvimento<br /><span className="text-purple-500">Ágil e Moderno.</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-medium leading-relaxed">
                                Adotamos as melhores práticas da indústria para garantir software seguro, escalável e fácil de manter.
                            </p>
                            <ul className="space-y-3">
                                {PRACTICES.map((practice, i) => (
                                    <li key={i} className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                                        <div className="p-2 bg-purple-500/5 rounded-xl">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                        </div>
                                        <span className="text-gray-300 font-bold tracking-tight text-sm">{practice}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right — Tech Stack Grid */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/5 blur-[100px]" />
                            <PremiumCard className="border-purple-500/10">
                                <div className="p-10">
                                    <h3 className="text-2xl font-bold mb-8 tracking-tight">Tech Stack</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {TECH_STACK.map(({ label, techs, accent }) => (
                                            <div key={label} className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
                                                <div className={`text-[10px] font-black mb-2 uppercase tracking-[0.2em] ${accent}`}>{label}</div>
                                                <div className="text-sm font-bold text-white tracking-tight">{techs.join(", ")}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </PremiumCard>
                        </div>

                    </div>
                </div>
            </section>

            {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Vamos Construir Algo<br /><span className="text-purple-500 font-black">Incrível?</span>
                    </h2>
                    <p className="text-gray-500 font-medium mb-10 max-w-2xl mx-auto">
                        Entre em contacto com nossos especialistas para discutir seu próximo projeto de software.
                    </p>
                    <QuoteButton serviceName="VIVATEL Software (Consultor)">
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-500 text-white px-12 py-8 text-xl font-bold rounded-full transition-all transform hover:scale-105">
                            Falar com Consultor <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </QuoteButton>
                </div>
            </section>

            <Footer />
        </div>
    )
}
