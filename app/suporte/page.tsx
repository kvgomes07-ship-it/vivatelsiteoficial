"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Mail,
    Phone,
    MessageSquare,
    HelpCircle,
    ChevronDown,
    Send,
    LifeBuoy,
    FileText,
    AlertCircle
} from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const ChatWidget = dynamic(
    () => import("@/components/interactive/chat-widget").then(mod => mod.ChatWidget),
    { ssr: false }
)

export default function SuportePage() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null)
    const [isChatOpen, setIsChatOpen] = useState(false)

    const faqs = [
        {
            q: "Como acesso o Portal do Cliente?",
            a: "O acesso ao Portal do Cliente é feito através do botão 'Portal do Cliente' no canto superior direito do site. Você precisará de suas credenciais fornecidas no momento do contrato."
        },
        {
            q: "Como funciona o suporte 24/7?",
            a: "Nossa equipe de NOC (Network Operations Center) monitora a infraestrutura 24 horas por dia. Para incidentes críticos, temos canais dedicados via telefone e sistema de tickets com SLA agressivo."
        },
        {
            q: "Quais são as formas de pagamento aceitas?",
            a: "Aceitamos transferências bancárias, pagamentos multicaixa e, para clientes corporativos, oferecemos faturamento mensal com termos negociados."
        },
        {
            q: "A VIVATEL oferece proteção contra DDoS?",
            a: "Sim. Todos os nossos serviços de Cloud e Conectividade incluem proteção DDoS básica. Proteção avançada e mitigação dedicada estão disponíveis como add-ons."
        },
        {
            q: "Posso fazer upgrade do meu plano Cloud a qualquer momento?",
            a: "Sim, nossa infraestrutura é elástica. Você pode escalar recursos (vCPU, RAM, Storage) instantaneamente através do painel de controle ou solicitando ao seu gerente de conta."
        }
    ]

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black" />
                    <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-cyan-900/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_65%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-6">
                            <LifeBuoy className="h-4 w-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400">Central de Ajuda</span>
                        </div>

                        <h1 className="animate-fade-in-up [animation-delay:100ms] text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                            Como podemos ajudar?
                        </h1>

                        <p className="animate-fade-in-up [animation-delay:200ms] text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Nossa equipe de especialistas está pronta para ajudar com qualquer questão técnica, comercial ou financeira.
                        </p>
                    </div>

                    {/* Support Channels */}
                    <div className="animate-fade-in-up [animation-delay:300ms] grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
                        {[
                            {
                                icon: <MessageSquare className="h-8 w-8 text-cyan-400" />,
                                title: "Chat ao Vivo",
                                description: "Fale instantaneamente com nossa equipe de suporte durante o horário comercial.",
                                action: "Iniciar Chat",
                            },
                            {
                                icon: <Mail className="h-8 w-8 text-blue-400" />,
                                title: "Email",
                                description: "Envie-nos um email para suporte@vivatel.ao e responderemos em até 2 horas.",
                                action: "Enviar Email",
                            },
                            {
                                icon: <Phone className="h-8 w-8 text-indigo-400" />,
                                title: "Telefone",
                                description: "Suporte técnico de emergência disponível 24/7 para clientes críticos.",
                                action: "+244 923 000 000",
                            },
                        ].map((channel, i) => (
                            <div key={i} className="bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl hover:scale-[1.02] transition-transform">
                                <div className="h-full bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-sky-500/30 transition-colors text-center">
                                    <div className="bg-gray-800/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                        {channel.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{channel.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6">{channel.description}</p>
                                    <Button
                                        variant="outline"
                                        className="border-gray-700 hover:bg-gray-800 text-cyan-400"
                                        onClick={() => channel.title === "Chat ao Vivo" && setIsChatOpen(true)}
                                    >
                                        {channel.action}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & FAQ */}
            <section className="py-24 relative overflow-hidden bg-gray-950/30">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                        {/* Form */}
                        <div className="animate-fade-in-up">
                            <h2 className="text-3xl font-bold mb-2">Envie uma mensagem</h2>
                            <p className="text-gray-400 mb-8">Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Nome</label>
                                        <input type="text" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="Seu nome" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Empresa</label>
                                        <input type="text" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="Nome da empresa" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email Corporativo</label>
                                    <input type="email" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="voce@empresa.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Assunto</label>
                                    <select className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors appearance-none">
                                        <option>Suporte Técnico</option>
                                        <option>Vendas / Comercial</option>
                                        <option>Financeiro</option>
                                        <option>Parcerias</option>
                                        <option>Outros</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Mensagem</label>
                                    <textarea className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors h-32 resize-none" placeholder="Como podemos ajudar?" />
                                </div>

                                <Button className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 h-12 text-lg">
                                    Enviar Mensagem
                                    <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>

                        {/* FAQ */}
                        <div className="animate-fade-in-up [animation-delay:200ms]">
                            <h2 className="text-3xl font-bold mb-2">Perguntas Frequentes</h2>
                            <p className="text-gray-400 mb-8">Respostas para as dúvidas mais comuns dos nossos clientes.</p>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30"
                                    >
                                        <button
                                            onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800/50 transition-colors"
                                        >
                                            <span className="font-medium text-gray-200">{faq.q}</span>
                                            <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${faqOpen === index ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out ${
                                                faqOpen === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                            } overflow-hidden`}
                                        >
                                            <div className="p-4 pt-0 text-gray-400 text-sm border-t border-gray-800/50">
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-start gap-4">
                                <AlertCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-blue-400 mb-1">Status do Sistema</h4>
                                    <p className="text-sm text-gray-400 mb-2">Todos os sistemas operando normalmente.</p>
                                    <Link href="#" className="text-xs font-medium text-white hover:underline flex items-center gap-1">
                                        Ver página de status <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Documentation Links */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_60%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-3xl font-bold mb-4">Central de Conhecimento</h2>
                        <p className="text-gray-400">Recursos técnicos e documentação para desenvolvedores.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: "Documentação da API", desc: "Guias completos para integração com nossa cloud." },
                            { title: "Tutoriais e Guias", desc: "Passo a passo para configurar seus serviços." },
                            { title: "Comunidade", desc: "Fóruns de discussão e troca de conhecimento." }
                        ].map((item, i) => (
                            <Link key={i} href="/documentacao" className="group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-sky-500/50 transition-colors group-hover:bg-gray-800/50">
                                    <div className="flex items-center justify-between mb-4">
                                        <FileText className="h-8 w-8 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                        <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-cyan-400 transition-colors -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300" />
                                    </div>
                                    <h3 className="font-bold mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 bg-black/40 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">© 2026 VIVATEL. Todos os direitos reservados.</p>
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                            ← Voltar à Página Inicial
                        </Link>
                    </div>
                </div>
            </footer>

            {/* Floating Chat Button */}
            {!isChatOpen && (
                <button
                    onClick={() => setIsChatOpen(true)}
                    className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white rounded-full p-4 shadow-lg hover:shadow-sky-500/50 transition-all duration-300 hover:scale-110 animate-fade-in-up"
                >
                    <MessageSquare className="h-6 w-6" />
                    <span className="sr-only">Abrir Chat</span>
                </button>
            )}

            <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
    )
}
