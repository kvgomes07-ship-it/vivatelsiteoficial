"use client"

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
    Cpu,
    Network,
    Search,
    Wifi,
    BarChart3,
    Activity
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Animation Variants for Performance
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

// Wave Component for section dividers
const WaveDivider = ({ className, flip }: { className?: string, flip?: boolean }) => (
    <div className={cn("absolute left-0 w-full leading-[0] z-0", className, flip ? "bottom-0" : "top-0 rotate-180")}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-600/10"></path>
        </svg>
    </div>
)

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-blue-950/20 to-transparent">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_70%)]" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="max-w-2xl"
                        >
                            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
                                <Shield className="h-4 w-4 text-blue-400" />
                                <span className="text-xs font-black tracking-widest uppercase text-blue-400">Cyber Security Division</span>
                            </motion.div>

                            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                                Cyber <span className="text-blue-500">Security</span>
                            </motion.h1>

                            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                                Processo de formação de objetos cibernéticos para identificar e neutralizar ameaças. Proteção abrangente 24/7 para sua infraestrutura digital.
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-7 rounded-2xl text-lg shadow-2xl shadow-blue-900/40 transition-all hover:scale-105 uppercase tracking-widest">
                                    Começar Agora
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 font-black px-10 py-7 rounded-2xl text-lg uppercase tracking-widest">
                                    Agendar Demo
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleVariants}
                            className="relative hidden lg:block"
                        >
                            {/* Illustration Mockup base on Reference */}
                            <div className="relative z-10 bg-gradient-to-tr from-blue-600/20 to-cyan-400/10 border border-white/10 rounded-[40px] p-8 backdrop-blur-3xl overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.2)]">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
                                <div className="grid grid-cols-2 gap-6 relative z-10">
                                    <div className="space-y-6">
                                        <div className="bg-black/40 border border-white/5 rounded-3xl p-6 aspect-square flex flex-col justify-between">
                                            <div className="h-12 w-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                                                <Activity className="text-blue-400" />
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 2, delay: 0.5 }} className="h-full bg-blue-500" />
                                            </div>
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Threat Detection</span>
                                        </div>
                                        <div className="bg-blue-500 border border-white/20 rounded-3xl p-6 aspect-video flex flex-col justify-end">
                                            <ShieldCheck className="h-8 w-8 text-white mb-4" />
                                            <span className="text-white font-black text-xl leading-tight">Secure <br/>Infrastructure</span>
                                        </div>
                                    </div>
                                    <div className="space-y-6 pt-12">
                                        <div className="bg-white/10 border border-white/20 rounded-3xl p-6 aspect-[4/5] flex flex-col justify-between backdrop-blur-md">
                                            <div className="flex gap-2">
                                                <div className="h-2 w-2 rounded-full bg-red-500" />
                                                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                            </div>
                                            <div className="space-y-3">
                                                <div className="h-2 w-full bg-white/10 rounded-full" />
                                                <div className="h-2 w-4/5 bg-white/10 rounded-full" />
                                                <div className="h-2 w-3/4 bg-blue-500/50 rounded-full" />
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <Lock className="text-blue-400 h-16 w-16" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                <WaveDivider flip className="text-blue-500/5" />
            </section>

            {/* Stats Dashboard Layout */}
            <section className="py-24 relative bg-black/20">
                <div className="container mx-auto px-6">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
                    >
                        {[
                            { label: "Detecções", value: "200K+", icon: <Activity className="text-blue-400"/> },
                            { label: "Protegidos", value: "300K+", icon: <ShieldCheck className="text-blue-400"/> },
                            { label: "Incidentes", value: "400K+", icon: <BarChart3 className="text-blue-400"/> }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 border border-white/5 rounded-[32px] p-10 text-center group hover:bg-white/[0.08] transition-all"
                            >
                                <div className="h-16 w-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-black mb-2 tracking-tighter">{stat.value}</div>
                                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="space-y-8"
                        >
                            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                                Information <br/><span className="text-blue-500">Security</span>
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed font-medium">
                                Nossa plataforma oferece visibilidade total sobre sua postura de segurança, permitindo o gerenciamento centralizado de identidades, acesso e conformidade.
                            </motion.p>
                            <motion.div variants={itemVariants} className="space-y-4">
                                {[
                                    "Gerenciamento de Identidade",
                                    "Deteção de Ameaças em Tempo Real",
                                    "Neutralização Automática",
                                    "Criptografia de Dados em Repouso",
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-6 w-6 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle className="h-4 w-4 text-blue-500" />
                                        </div>
                                        <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">{text}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleVariants}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
                            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[40px] p-12 overflow-hidden aspect-video flex items-center justify-center group">
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute -right-10 -top-10 h-64 w-64 border-[40px] border-white/5 rounded-full" 
                                />
                                <div className="text-center relative z-10">
                                    <Shield className="h-32 w-32 text-white/90 mx-auto mb-6 transition-transform group-hover:scale-110" />
                                    <div className="text-2xl font-black tracking-widest uppercase">Proteção Ativa</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sources of Danger Section */}
            <section className="py-24 relative overflow-hidden">
                <WaveDivider className="text-blue-500/5 rotate-0 top-0"/>
                
                <div className="container mx-auto px-6 relative z-10 mt-12">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">Sources of <span className="text-blue-500">danger</span></h2>
                        <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full" />
                    </div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
                    >
                        {[
                            { icon: <Wifi />, label: "Network" },
                            { icon: <Key />, label: "Identity" },
                            { icon: <Lock />, label: "Hardware" },
                            { icon: <Activity />, label: "Software" },
                            { icon: <Search />, label: "Vulnerability" },
                            { icon: <BarChart3 />, label: "Compliance" }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className="h-24 w-24 bg-white/5 border border-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300">
                                    <div className="text-gray-400 group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                </div>
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                
                <WaveDivider flip className="text-blue-500/5 bottom-0 h-[120px]"/>
            </section>

            {/* Certifications e Conformidade */}
            <section className="py-24 relative overflow-hidden bg-[#020617]">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Certificações e Conformidade</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-medium">
                            Mantemos os mais altos padrões de segurança e conformidade internacional.
                        </p>
                    </div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                    >
                        {[
                            { name: "ISO 27001" },
                            { name: "SOC 2 Type II" },
                            { name: "GDPR Compliant" },
                            { name: "PCI DSS Level 1" },
                            { name: "ISO 27017" },
                            { name: "ISO 27018" },
                            { name: "HIPAA Ready" },
                            { name: "Cloud Security Alliance" },
                        ].map((cert, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                whileHover={{ y: -5, backgroundColor: "rgba(37, 99, 235, 0.05)" }}
                                className="bg-[#0a0f1c] p-10 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all flex flex-col items-center justify-center text-center group shadow-md min-h-[160px]"
                            >
                                <ShieldCheck className="h-10 w-10 text-cyan-400 mb-4 transition-transform group-hover:scale-110" />
                                <h3 className="text-sm font-bold text-gray-200 tracking-wider uppercase">{cert.name}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Planos de Segurança */}
            <section className="py-24 relative overflow-hidden bg-[#020617]">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Planos de Segurança</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-medium">
                            Proteção abrangente adaptada ao tamanho e necessidades da sua organização.
                        </p>
                    </div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    >
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
                            <motion.div key={index} variants={itemVariants} className="relative pt-4 h-full">
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white text-xs font-bold px-6 py-1.5 rounded-full z-10">
                                        Recomendado
                                    </div>
                                )}
                                <div className={`h-full bg-[#0d121f] p-8 rounded-xl flex flex-col justify-between transition-colors ${plan.popular ? 'border border-[#2563eb]/50' : 'border border-white/5'}`}>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                                        <div className="mb-8 flex items-baseline gap-1">
                                            <span className="text-4xl font-bold tracking-tighter text-white">{plan.price}</span>
                                            {plan.period && <span className="text-gray-400 text-sm">/{plan.period}</span>}
                                        </div>
                                        <ul className="space-y-4 mb-8">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <div className="shrink-0 flex items-center justify-center">
                                                        <CheckCircle className="h-5 w-5 text-blue-500" />
                                                    </div>
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button className={`w-full font-medium h-12 rounded-lg transition-all text-sm ${plan.popular ? 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white border-0' : 'bg-transparent border border-white/10 hover:bg-white/5 text-gray-300'}`}>
                                        {plan.price === "Custom" ? "Contactar Vendas" : "Começar Agora"}
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative flex items-center justify-center">
                 <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={scaleVariants}
                    className="container mx-auto px-6 relative z-10 text-center max-w-4xl"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                        A maior <span className="text-blue-500">segurança</span> <br/>para o seu negócio
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-12 font-medium">
                        Junte-se a milhares de empresas que confiam na VIVATEL para proteger seus ativos mais valiosos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                         <Button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-12 py-8 rounded-2xl text-xl uppercase tracking-widest shadow-2xl transition-all hover:scale-105">
                            Começar agora
                        </Button>
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 font-black px-12 py-8 rounded-2xl text-xl uppercase tracking-widest">
                            Falar com especialista
                        </Button>
                    </div>
                 </motion.div>
            </section>

            {/* Minimal Footer */}
            <footer className="py-12 border-t border-white/5">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="h-6 w-24 relative opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <Image 
                                src="/vivatel.png" 
                                alt="VIVATEL" 
                                fill 
                                className="object-contain" 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">© 2026 Vivatel Security</span>
                    </div>
                    <div className="flex gap-8">
                        <Link href="/" className="text-gray-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Home</Link>
                        <Link href="/servicos/cloud" className="text-gray-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Cloud</Link>
                        <Link href="/sobre" className="text-gray-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Sobre Nós</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
