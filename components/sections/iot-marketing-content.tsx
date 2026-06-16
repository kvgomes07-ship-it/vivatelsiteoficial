"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  MessageSquare, 
  Database, 
  EyeOff, 
  AlertTriangle, 
  TrendingDown, 
  Cloud, 
  Server,
  Signal,
  BarChart3,
  Zap,
  Activity,
  Shield,
  ChevronRight
} from "lucide-react"
import { IoTStreamDashboard } from "@/components/interactive/iot-stream-dashboard"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { QuoteButton } from "@/components/interactive/buttons/quote-button"
import { IoTBenefits } from "@/components/sections/iot-benefits"
import { IoTUseCases } from "@/components/sections/iot-use-cases"
import { IoTTechnicalSpecs } from "@/components/sections/iot-tech-specs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dotted-dialog"

export const IoTMarketingContent = memo(function IoTMarketingContent() {
  return (
    <div className="w-full flex flex-col gap-24 md:gap-40 pb-40">
      {/* 1. HERO SECTION (ALTA CONVERSÃO) */}
      <section className="relative pt-20 flex flex-col items-center text-center px-4 max-w-6xl mx-auto z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center gap-2 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Solução Industrial de Elite</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1] text-white">
            Soluções de <span className="text-cyan-400">IoT e Streaming</span><br />
            em Tempo Real para<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Empresas em Angola
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mb-10 leading-relaxed">
            Monitore, automatize e tome decisões com dados em tempo real, com infraestrutura de alta performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <QuoteButton serviceName="VIVATEL IoT - Demonstração">
              <button className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-sm rounded-2-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-3 cursor-pointer group">
                Agendar Demonstração <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </QuoteButton>

            <QuoteButton serviceName="VIVATEL IoT - Especialista">
              <button className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black uppercase tracking-widest text-sm rounded-2-xl transition-all flex items-center justify-center gap-3 cursor-pointer">
                Falar com Especialista <MessageSquare className="h-5 w-5 text-gray-500" />
              </button>
            </QuoteButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full relative group"
        >
          <div className="absolute -inset-4 bg-cyan-500/5 blur-[64px] rounded-full pointer-events-none opacity-50 transition-opacity duration-500" />
          <div className="relative border border-white/10 rounded-[40px] bg-black/40 backdrop-blur-3xl p-3 md:p-6 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <IoTStreamDashboard />
          </div>
        </motion.div>
      </section>

      {/* PROBLEMA */}
      <section className="w-full max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.4 }}
          >
            <span className="text-cyan-500 font-black uppercase tracking-widest text-xs mb-4 block">O Desafio Atual</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
              A sua empresa está a perder dinheiro com <span className="text-red-500">dados invisíveis?</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-10 font-medium">
              Sem monitorização em tempo real, cada minuto de inatividade ou ineficiência é uma perda direta nos seus resultados.
            </p>
            
            <div className="grid gap-6">
              {[
                { icon: Database, title: "Perda Crítica de Dados", desc: "Informações fragmentadas que nunca chegam a quem decide." },
                { icon: EyeOff, title: "Falta de Visibilidade", desc: "Operações às escuras, sem saber o que acontece no terreno." },
                { icon: AlertTriangle, title: "Decisões Lentas", desc: "Atrasos que permitem que pequenos problemas se tornem crises." },
                { icon: TrendingDown, title: "Ineficiência Operacional", desc: "Gastos excessivos com manutenção reativa e energia." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                    {(() => {
                      const Icon = item.icon;
                      return <Icon className="h-6 w-6 text-red-500" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-black text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-red-500/5 blur-[64px] rounded-full" />
             <div className="relative border border-white/5 rounded-[40px] bg-black/60 p-10 flex flex-col gap-8 aspect-square justify-center text-center">
                <div className="flex justify-center gap-4">
                  <div className="w-1 h-12 bg-red-500/40 rounded-full animate-pulse" />
                  <div className="w-1 h-20 bg-red-500 rounded-full animate-pulse" />
                  <div className="w-1 h-16 bg-red-500/60 rounded-full animate-pulse" />
                </div>
                <h4 className="text-6xl font-black text-white">$0.00</h4>
                <p className="text-gray-500 font-black uppercase tracking-widest text-sm">Custo da Inação Diária</p>
                <div className="h-px bg-white/5 w-full" />
                <p className="text-red-400 font-bold italic">"O maior risco é não saber o que está a falhar agora mesmo."</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="w-full bg-white/[0.01] border-y border-white/5 py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-cyan-500 font-black uppercase tracking-widest text-xs mb-4 block">A Nossa Resposta</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Conectividade com <span className="text-cyan-400">Inteligência</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
              A Vivatel combina infraestrutura robusta de streaming com tecnologia IoT avançada para dar à sua empresa o controle total que ela merece.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Velocidade Extrema", 
                desc: "Links dedicados de ultra-baixa latência para transmissão de dados instantânea.",
                color: "text-blue-400",
                bg: "bg-blue-500/10"
              },
              { 
                icon: Activity, 
                title: "Automação Total", 
                desc: "Sistemas que reagem sozinhos a anomalias, protegendo o seu negócio 24/7.",
                color: "text-purple-400",
                bg: "bg-purple-500/10"
              },
              { 
                icon: Shield, 
                title: "Controle Absoluto", 
                desc: "Painéis de gestão centralizados para uma visão 360º de toda a sua operação.",
                color: "text-cyan-400",
                bg: "bg-cyan-500/10"
              }
            ].map((sol, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-black border border-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <div className={`p-4 rounded-2xl ${sol.bg} border-white/5 inline-flex mb-8 transition-transform group-hover:scale-105`}>
                  {(() => {
                    const Icon = sol.icon;
                    return <Icon className={`h-10 w-10 ${sol.color}`} />;
                  })()}
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{sol.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTAÇÃO */}
      <section className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">Implementação em 3 Passos</h2>
          <p className="text-gray-400 font-medium">Simples, rápido e sem complicações técnicas para o seu negócio.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 -translate-y-[100px]" />
          
          {[
            { 
              step: "01", 
              icon: Signal,
              title: "Coleta Inteligente", 
              desc: "Instalamos sensores e integramos os seus sistemas existentes na nossa rede dedicada." 
            },
            { 
              step: "02", 
              icon: Cloud,
              title: "Transmissão Segura", 
              desc: "Os dados são transmitidos em tempo real através da nossa infraestrutura blindada." 
            },
            { 
              step: "03", 
              icon: BarChart3,
              title: "Visão & Decisão", 
              desc: "Aceda a dashboards intuitivos para tomar decisões baseadas em factos reais." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8 relative group">
                {(() => {
                  const Icon = item.icon;
                  return <Icon className="h-8 w-8 text-cyan-400 group-hover:scale-105 transition-transform" />;
                })()}
                <span className="absolute -top-2 -right-2 bg-cyan-500 text-black text-[10px] font-black px-2 py-1 rounded-lg">
                  {item.step}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="w-full">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Foco em Resultados Reais</h2>
          <p className="text-gray-400 text-lg font-medium">O que o seu negócio ganha ao transitar para a inteligência Vivatel.</p>
        </div>
        <IoTBenefits />
      </section>

      {/* DIFERENCIAIS */}
      <section className="w-full max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-12 md:p-24 rounded-[60px] bg-gradient-to-br from-blue-900/10 via-black to-cyan-900/10 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[64px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                A única infraestrutura <span className="text-cyan-400">100% Angolana</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Nós Locais em Luanda", desc: "Latência reduzida ao mínimo absoluto por estarmos fisicamente perto da sua empresa." },
                  { title: "Suporte em Tempo Real", desc: "Engenheiros angolanos prontos para intervir presencialmente em tempo recorde." },
                  { title: "Adaptado ao Nosso Mercado", desc: "Soluções desenhadas para os desafios específicos de energia e logística em Angola." }
                ].map((dif, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)] shrink-0" />
                    <div>
                      <h4 className="font-black text-white text-xl mb-1">{dif.title}</h4>
                      <p className="text-gray-400 font-medium leading-relaxed">{dif.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center flex-col items-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-full animate-ping [animation-duration:4s]" />
                  <div className="relative w-full h-full bg-black border border-white/10 rounded-full flex items-center justify-center flex-col text-center p-8 backdrop-blur-xl">
                      <Server className="h-12 w-12 text-cyan-400 mb-4" />
                      <span className="text-3xl font-black text-white leading-none">Angola<br/>Direct</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 mt-4">Local NOC</span>
                  </div>
                </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CASOS DE SUCESSO */}
      <section className="w-full relative py-20">
        <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5" />
        <div className="text-center mb-16 relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Histórias de Sucesso</h2>
          <p className="text-gray-400 text-lg font-medium">Veja como empresas líderes transformaram as suas operações.</p>
        </div>
        <IoTUseCases />
      </section>

      {/* ESPECIFICAÇÕES */}
      <section className="max-w-6xl mx-auto px-4 w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 md:p-20 rounded-[40px] bg-black border border-white/10 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-50" />
          
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Estabilidade Garantida</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
              Oferecemos <strong className="text-white">99.9% de uptime real</strong> com redundância geográfica total. O seu negócio nunca pára.
            </p>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all flex items-center gap-3 cursor-pointer">
                  Ver Especificações Técnicas <ChevronRight className="h-4 w-4" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-black border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-black tracking-tighter flex items-center gap-2">
                    <Shield className="h-6 w-6 text-cyan-500" /> Especificações Técnicas
                  </DialogTitle>
                </DialogHeader>
                <IoTTechnicalSpecs />
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="flex-1 relative z-10 flex justify-center scale-90 md:scale-100">
             <div className="relative w-64 h-64">
               <div className="absolute inset-0 border-4 border-dashed border-cyan-500/20 rounded-full animate-[spin_30s_linear_infinite]" />
               <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-6xl font-black text-white tracking-tighter">99.9%</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mt-2">SLA ASSEGURADO</span>
               </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="w-full max-w-5xl mx-auto px-4 mt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-10 md:p-20 rounded-[48px] bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-900 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight leading-tight">
              Pronto para transformar sua operação com dados em tempo real?
            </h2>
            <p className="text-lg md:text-xl text-cyan-50 font-medium mb-10 max-w-2xl mx-auto">
              Junte-se às empresas que já lideram o mercado angolano com a tecnologia Vivatel.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <QuoteButton serviceName="VIVATEL IoT - Demonstração Final">
                <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 cursor-pointer">
                  Agendar Demonstração
                </button>
              </QuoteButton>

              <QuoteButton serviceName="VIVATEL IoT - Especialista Final">
                <button className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-xl transition-all hover:bg-white/10 hover:border-white cursor-pointer active:scale-95">
                  Falar com Especialista
                </button>
              </QuoteButton>
            </div>
          </div>
        </motion.div>
      </section>

      <WhatsAppButton />
    </div>
  )
})
