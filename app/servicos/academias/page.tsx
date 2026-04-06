import { Button } from "@/components/ui/button"
import {
    ArrowRight, Cpu, Zap, Shield, Target, Rocket, Activity
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { RoboticsHud, RoboticsSpecs } from "@/components/interactive/robotics-hud"
import { Footer } from "@/components/footer"

export default function AcademiasPage() {
    const units = [
        { icon: <Cpu className="h-10 w-10 text-cyan-500" />, title: "Sistemas Autónomos", description: "Desenvolvimento de algoritmos de navegação e controlo para robótica móvel." },
        { icon: <Target className="h-10 w-10 text-white" />, title: "Visão Computacional", description: "Sistemas de reconhecimento e processamento de imagem em tempo real." },
        { icon: <Rocket className="h-10 w-10 text-cyan-500" />, title: "Prototipagem 3D", description: "Criação de hardware personalizado e peças mecânicas de alta precisão." },
        { icon: <Shield className="h-10 w-10 text-white" />, title: "Ciber-Segurança", description: "Proteção de redes industriais e infraestrutura de controlo crítica." },
        { icon: <Zap className="h-10 w-10 text-cyan-500" />, title: "Energia & Eficiência", description: "Sistemas de gestão energética inteligente para unidades remotas." },
        { icon: <Activity className="h-10 w-10 text-white" />, title: "Controlo de Qualidade", description: "Monitorização automatizada e análise preditiva de performance." },
    ]

    return (
        <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans selection:bg-cyan-500/30">
            <RoboticsHud />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-black z-0" />
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
                         <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                            <Rocket className="h-4 w-4 text-cyan-400" />
                            <span className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.3em]">LABS_ACTIVE: ROBOTICS_DEPT</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-6 uppercase tracking-tighter leading-[0.8] italic">
                          VIVATEL <br /> <span className="text-cyan-500">Robotics</span>
                        </h1>

                        <p className="text-sm md:text-lg text-gray-500 font-bold uppercase tracking-widest mb-10 max-w-2xl mx-auto">
                            Engenharia avançada e infraestrutura ciber-física para o futuro industrial de Angola.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button className="bg-cyan-600 hover:bg-cyan-500 text-black px-12 py-8 rounded-none text-xl font-black tracking-widest transition-all">
                                <span className="uppercase flex items-center gap-2">Explorar Unidades <ArrowRight className="h-5 w-5" /></span>
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full max-w-5xl mx-auto animate-fade-in-up [animation-delay:400ms]">
                        <div className="absolute inset-0 bg-cyan-500/10 rounded-lg blur-3xl z-0" />
                        <div className="relative bg-gray-900/50 border border-white/5 rounded-none overflow-hidden h-[300px] md:h-[450px]">
                            <video className="absolute inset-0 w-full h-full object-cover opacity-60" src="/videos/hero.mp4" autoPlay loop muted playsInline />
                        </div>
                    </div>
                </div>
            </section>

            {/* Robotics Units Section */}
            <section className="py-24 relative overflow-hidden border-t border-white/5">
                <div className="container mx-auto px-4 relative z-10 text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-[0.2em] italic">Unidades de Engenharia</h2>
                    <p className="text-cyan-400 font-black text-[10px] uppercase tracking-widest max-w-2xl mx-auto">Sistemas de controlo e automação industrial soberana</p>
                </div>

                <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {units.map((unit, index) => (
                        <div key={index} className="h-full bg-white/[0.02] p-8 border-l border-cyan-500/30 hover:border-cyan-400 group transition-all animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="mb-4 inline-block">{unit.icon}</div>
                            <h3 className="text-xl font-black mb-3 uppercase tracking-tighter group-hover:text-cyan-400 transition-colors italic">{unit.title}</h3>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-300 transition-colors">{unit.description}</p>
                            <div className="mt-6 flex items-center gap-2 opacity-20"><div className="h-px flex-1 bg-cyan-900" /><span className="text-[8px] font-mono">READY</span></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Engineering Specs Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-[#020617]">
                <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">Technical_Specs</div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Engenharia de<br /><span className="text-cyan-500">Alta Precisão</span></h2>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs leading-relaxed max-w-xl">Integração de sistemas ciber-físicos na indústria angolana.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Latência < 0.5ms", "IA Soberana", "Segurança L7", "Controlo Real-Time"].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/5 p-3 border-l-2 border-cyan-500/50 font-black text-[10px] uppercase tracking-widest text-gray-300 italic">{feat}</div>
                            ))}
                        </div>
                    </div>
                    <div className="animate-fade-in-up [animation-delay:300ms]">
                        <RoboticsSpecs />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
