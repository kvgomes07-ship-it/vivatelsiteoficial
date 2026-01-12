"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Github,
  Globe,
  Menu,
  Twitter,
  X,
  Zap,
  Shield,
  Database,
  Brain,
  Radio,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dotted-dialog"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CloudPlatform } from "./interactive/cloud-platform"
import { AnalyticsPlatform } from "./interactive/analytics-platform"
import { SecurityPlatform } from "./interactive/security-platform"
import { TeamVisualization } from "./interactive/team-visualization"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const isVerySmall = useMediaQuery("(max-width: 500px)")

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClass =
    scrollY > 50 ? "py-4 bg-black/80 backdrop-blur-md border-b border-gray-800/50" : "py-6 bg-transparent"

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsModalOpen(false)
      setEmail("")
      setCompany("")
      setPhone("")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="relative h-8 w-32 cursor-pointer">
              {mounted && <Image onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} src="/vivatel.png" alt="VIVATEL" fill className="object-contain" priority />}
            </div>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            {["Recursos", "Soluções", "Parceiros", "Sobre", "Testemunhos"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              variant="outline"
              className="hidden md:flex border-cyan-500 text-cyan-400 hover:bg-cyan-950 bg-transparent"
              onClick={() => setIsModalOpen(true)}
            >
              Comece Agora
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-black border-b border-gray-800 md:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              {["Recursos", "Soluções", "Parceiros", "Sobre", "Testemunhos"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 w-full"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsModalOpen(true)
                }}
              >
                Comece Agora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_65%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
            >
              Infraestrutura Digital Soberana para Angola
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Soluções de conectividade e infraestrutura digital de classe mundial, desenvolvidas para fortalecer a soberania tecnológica de Angola.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-4 sm:px-8 py-4 sm:py-6 rounded-full text-sm sm:text-lg font-medium shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300"
              >
                Comece Agora
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-full max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-3xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl">
              <div className="relative h-[300px] md:h-[500px] w-full bg-gray-950 p-4 overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-300">Estado do Sistema: Online</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-gray-800 hover:bg-gray-700 p-1 rounded">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="2" />
                        <circle cx="19" cy="12" r="1" stroke="currentColor" strokeWidth="2" />
                        <circle cx="5" cy="12" r="1" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex border-b border-gray-800 mb-4">
                  <button className="px-4 py-2 text-sm font-medium text-cyan-400 border-b-2 border-cyan-500">
                    Visão Geral
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-300">Análise</button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-300">
                    Relatórios
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-300">
                    Configurações
                  </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[
                    { label: "Usuários Totais", value: "24,521", change: "+12%", color: "text-green-500" },
                    { label: "Conectividade", value: "99.9%", change: "+2%", color: "text-green-500" },
                    { label: "Sessões Ativas", value: "1,293", change: "-3%", color: "text-red-500" },
                    { label: "Taxa de Uptime", value: "99.9%", change: "+0.1%", color: "text-green-500" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 p-3 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
                    >
                      <div className="text-xs text-gray-400">{stat.label}</div>
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className={`text-xs ${stat.color} flex items-center gap-1`}>
                        {stat.change}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d={
                              stat.change.startsWith("+")
                                ? "M12 19V5M12 5L5 12M12 5L19 12"
                                : "M12 5V19M12 19L19 12M12 19L5 12"
                            }
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 h-[120px] md:h-[180px] relative overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium">Visão Geral de Conectividade</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        <span className="text-xs text-gray-400">Mês Atual</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                        <span className="text-xs text-gray-400">Mês Passado</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Chart */}
                  <div className="flex items-end gap-0.5 h-16">
                    {[35, 45, 30, 60, 75, 45, 55, 70, 60, 75, 85, 65].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center group relative">
                        <div
                          className="w-full bg-cyan-500/40 hover:bg-cyan-500/60 transition-colors rounded-sm cursor-pointer"
                          style={{ height: `${height}%` }}
                        >
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap mb-1">
                            {Math.floor(height * 120)}Mbps
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - VIVATEL Advanced Resources */}
      <section id="recursos" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Recursos Avançados VIVATEL</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Plataforma completa com ferramentas especializadas para transformar sua infraestrutura digital e
                impulsionar a inovação.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-blue-500" />,
                title: "Software",
                description: "Desenvolvimento, APIs robustas e workflows automatizados para acelerar time-to-market.",
              },
              {
                icon: <Shield className="h-10 w-10 text-cyan-500" />,
                title: "Segurança Avançada",
                description: "Proteção de nível empresarial com criptografia end-to-end e conformidade regulatória.",
              },
              {
                icon: <Brain className="h-10 w-10 text-blue-500" />,
                title: "Cloud",
                description:
                  "Infraestrutura em nuvem para servidores, hospedagem, escalabilidade e alta disponibilidade de aplicações e serviços.",
              },
              {
                icon: <Radio className="h-10 w-10 text-cyan-500" />,
                title: "Conectividade",
                description: "Infraestrutura de conectividade soberana com banda larga, 5G e redundância garantida.",
              },
              {
                icon: <Database className="h-10 w-10 text-blue-500" />,
                title: "AI & DATA",
                description:
                  "Processamento de dados em tempo real com modelos de IA personalizados e pipelines escaláveis.",
              },
              {
                icon: <Zap className="h-10 w-10 text-cyan-500" />,
                title: "Stream & IoT",
                description: "Streaming de dados em tempo real, robótica industrial e IoT para automação completa.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-blue-500" />,
                title: "Academias & Labs",
                description: "Programas de formação, certificação e inovação para desenvolver talento local.",
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

      {/* Solutions Section */}
      <section id="soluções" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossas Soluções</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore nossa suíte completa de soluções inovadoras projetadas para transformar sua experiência digital.
              </p>
            </motion.div>
          </div>

          <div className="space-y-24">
            {/* VIVATEL Cloud */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold">VIVATEL Cloud</h3>
                <p className="text-gray-300 text-lg">
                  Plataforma em nuvem escalável e soberana que se adapta às suas necessidades. Implante aplicações com
                  facilidade e gerencie recursos de forma eficiente.
                </p>
                <ul className="space-y-3">
                  {[
                    "Escalabilidade automática e inteligente",
                    "Infraestrutura geograficamente distribuída",
                    "Preços flexíveis e transparentes",
                    "99.99% de disponibilidade garantida",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Saiba Mais
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                    <CloudPlatform />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* VIVATEL Analytics */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                    <AnalyticsPlatform />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold">VIVATEL Analytics</h3>
                <p className="text-gray-300 text-lg">
                  Análise avançada de dados que oferece insights acionáveis sobre a saúde da sua infraestrutura e
                  comportamento do usuário em tempo real.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dashboards interativos em tempo real",
                    "Análise preditiva com machine learning",
                    "Relatórios personalizáveis e exportáveis",
                    "Alertas automáticos e inteligentes",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Saiba Mais
                </Button>
              </motion.div>
            </div>

            {/* VIVATEL Security */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold">VIVATEL Security</h3>
                <p className="text-gray-300 text-lg">
                  Proteção de segurança de ponta com detecção de ameaças em tempo real e conformidade com
                  regulamentações internacionais.
                </p>
                <ul className="space-y-3">
                  {[
                    "Detecção de ameaças com IA avançada",
                    "Criptografia end-to-end de dados",
                    "Conformidade com padrões internacionais",
                    "Auditoria contínua e certificações",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Saiba Mais
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                    <SecurityPlatform />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


            {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_60%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-1"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">Sobre Nossa Missão</h2>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
                Vivatel foi criada com uma visão singular: fortalecer a soberania digital de Angola através de
                infraestrutura de conectividade de classe mundial. Acreditamos que a tecnologia poderosa deve ser
                acessível e centrada nas necessidades locais.
              </p>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
                Nossa equipe de engenheiros e designers apaixonados trabalha incansavelmente para criar soluções
                intuitivas e poderosas que resolvem problemas reais e capacitam nossos usuários a alcançar mais.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="bg-gray-800/50 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base">
                  <span className="text-teal-400 font-medium">50+</span> Membros da Equipe
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base">
                  <span className="text-teal-400 font-medium">100+</span> Clientes Ativos
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base">
                  <span className="text-teal-400 font-medium">99.9%</span> Tempo de Atividade
                </div>
              </div>
              <Button
                variant="outline"
                className="border-teal-500 text-teal-500 hover:bg-teal-950 text-sm sm:text-base bg-transparent"
              >
                Saiba Mais Sobre Nós
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-lg blur-xl" />
                <div className="relative rounded-lg overflow-hidden">
                  <div className="w-full h-[300px] md:h-[400px]">
                    <TeamVisualization />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="parceiros" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,166,151,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossos Parceiros Estratégicos</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Parcerias com líderes da indústria que fortalecem nosso ecossistema digital soberano.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Angola Cable", category: "Conectividade" },
              { name: "Zap", category: "Telecomunicações" },
              { name: "Banco Fomec", category: "Financeiro" },
              { name: "Ministério da TIC", category: "Governo" },
              { name: "Tech Angola", category: "Inovação" },
              { name: "UNITEL", category: "Conectividade" },
              { name: "Banco Económico", category: "Financeiro" },
              { name: "EAGLI", category: "Educação" },
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-lg">
                  <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800/50 hover:border-cyan-500/50 transition-colors backdrop-blur-sm flex flex-col items-center justify-center text-center">
                    <div className="mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg">
                      <Globe className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{partner.name}</h3>
                    <p className="text-sm text-gray-400">{partner.category}</p>
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
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Pronto para Transformar sua Infraestrutura?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de empresas e instituições que já confiam na VIVATEL para sua infraestrutura digital
                soberana.
              </p>
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-6 text-lg"
              >
                Começar Gratuito
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testemunhos" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Histórias de sucesso de organizações que transformaram sua infraestrutura com VIVATEL.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Evandro Ferreira",
                role: "CTO, MELM Solutions",
                content:
                  "VIVATEL transformou completamente nossa infraestrutura. A segurança e confiabilidade são incomparáveis. Uma solução verdadeiramente soberana para Angola.",
              },
              {
                name: "Maria Santos",
                role: "Diretora de TI, BancoDigital",
                content:
                  "A escalabilidade e performance da plataforma VIVATEL superaram nossas expectativas. O suporte é excelente e os resultados falam por si.",
              },
              {
                name: "Carlos Silva",
                role: "Gerente de Inovação, StartupAngo",
                content:
                  "Finalmente temos infraestrutura digital soberana que nos dá total controle e segurança. VIVATEL é o futuro para o ecossistema digital angolano.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                  <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-colors backdrop-blur-sm">
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4">VIVATEL</div>
              <p className="text-gray-400 text-sm">Infraestrutura Digital Soberana para Angola</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Cloud
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Carreiras
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Termos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">© 2026 VIVATEL. Todos os direitos reservados.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Modal Form */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="border-gray-800 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Começar com VIVATEL</DialogTitle>
            <DialogDescription>
              Preencha o formulário para agendar sua demonstração de infraestrutura digital soberana.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-cyan-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">
                Empresa
              </Label>
              <Input
                id="company"
                placeholder="Nome da sua empresa"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-cyan-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                Telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+244 923 456 789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-cyan-500"
              />
            </div>
            <DialogFooter className="pt-4">
              <Button
                type="button"
                onClick={() => setIsModalOpen(false)}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-900"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Agendar Demo"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
