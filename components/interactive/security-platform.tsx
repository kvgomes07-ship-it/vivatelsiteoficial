"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, AlertTriangle, Lock, Eye, RefreshCw } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function SecurityPlatform() {
  const [securityScore, setSecurityScore] = useState(87)
  const [threatLevel, setThreatLevel] = useState("Baixo")
  const [isScanning, setIsScanning] = useState(false)
  const [vulnerabilities, setVulnerabilities] = useState([
    { id: 1, severity: "Alto", status: "Aberto", description: "Certificado SSL desatualizado" },
    { id: 2, severity: "Médio", status: "Corrigido", description: "Política de senha fraca" },
    { id: 3, severity: "Baixo", status: "Aberto", description: "Portas abertas não utilizadas" },
    { id: 4, severity: "Médio", status: "Aberto", description: "Cabeçalhos de segurança ausentes" },
  ])
  const isMobile = useMediaQuery("(max-width: 768px)")

  const runSecurityScan = () => {
    setIsScanning(true)
    setTimeout(() => {
      const newScore = Math.min(100, Math.max(60, securityScore + (Math.random() > 0.5 ? 2 : -2)))
      setSecurityScore(newScore)

      if (newScore >= 90) setThreatLevel("Muito Baixo")
      else if (newScore >= 80) setThreatLevel("Baixo")
      else if (newScore >= 70) setThreatLevel("Moderado")
      else setThreatLevel("Alto")

      const updatedVulnerabilities = [...vulnerabilities]
      const randomIndex = Math.floor(Math.random() * updatedVulnerabilities.length)
      if (Math.random() > 0.7) {
        updatedVulnerabilities[randomIndex].status =
          updatedVulnerabilities[randomIndex].status === "Aberto" ? "Corrigido" : "Aberto"
      }
      setVulnerabilities(updatedVulnerabilities)

      setIsScanning(false)
    }, 2000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScanning) {
        runSecurityScan()
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [isScanning, vulnerabilities, securityScore])

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 md:p-6 h-full">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 md:h-5 md:w-5 text-teal-500" />
          <h3 className="font-medium text-sm md:text-base">Segurança Vivatel</h3>
        </div>
        <button
          onClick={runSecurityScan}
          disabled={isScanning}
          className="flex items-center gap-1 text-[10px] md:text-xs bg-gray-800 hover:bg-gray-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded disabled:opacity-50"
        >
          <RefreshCw className={`h-2.5 w-2.5 md:h-3 md:w-3 ${isScanning ? "animate-spin" : ""}`} />
          {isScanning ? "Verificando..." : "Iniciar Verificação"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-6">
        <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
          <h4 className="text-xs md:text-sm font-medium mb-2 md:mb-3">Pontuação de Segurança</h4>
          <div className="relative h-3 md:h-4 bg-gray-700 rounded-full overflow-hidden mb-1.5 md:mb-2">
            <motion.div
              className={`h-full ${
                securityScore >= 80 ? "bg-teal-500" : securityScore >= 60 ? "bg-blue-500" : "bg-red-500"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${securityScore}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm font-medium">{securityScore}/100</span>
            <span
              className={`text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 rounded-full ${
                threatLevel === "Baixo" || threatLevel === "Muito Baixo"
                  ? "bg-teal-900/30 text-teal-400"
                  : threatLevel === "Moderado"
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-red-900/30 text-red-400"
              }`}
            >
              Nível de Ameaça: {threatLevel}
            </span>
          </div>
        </div>

        <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
          <h4 className="text-xs md:text-sm font-medium mb-2 md:mb-3">Status de Proteção</h4>
          <div className="space-y-1.5 md:space-y-2">
            {[
              { label: "Firewall", status: "Ativo", icon: Lock },
              { label: "Detecção de Intrusão", status: "Ativo", icon: Eye },
              { label: "Encriptação de Dados", status: "Ativo", icon: Lock },
              {
                label: "Verificador de Vulnerabilidades",
                status: isScanning ? "Verificando" : "Pronto",
                icon: RefreshCw,
              },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <item.icon className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                  <span className="text-[10px] md:text-xs">{item.label}</span>
                </div>
                <span
                  className={`text-[10px] md:text-xs ${
                    item.status === "Ativo"
                      ? "text-teal-400"
                      : item.status === "Verificando"
                        ? "text-blue-400"
                        : "text-gray-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2 md:mb-3">
          <h4 className="text-xs md:text-sm font-medium">Vulnerabilidades</h4>
          <span className="text-[10px] md:text-xs text-gray-400">
            {vulnerabilities.filter((v) => v.status === "Aberto").length} abertas
          </span>
        </div>

        <div className="space-y-1.5 md:space-y-2">
          {vulnerabilities.slice(0, isMobile ? 2 : 4).map((vuln) => (
            <div key={vuln.id} className="flex justify-between items-center p-1.5 md:p-2 rounded bg-gray-900/50">
              <div className="flex items-center gap-1.5 md:gap-2">
                {vuln.severity === "Alto" ? (
                  <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 text-red-500" />
                ) : vuln.severity === "Médio" ? (
                  <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
                ) : (
                  <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 text-cyan-500" />
                )}
                <span className="text-[10px] md:text-xs">{vuln.description}</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <span
                  className={`text-[8px] md:text-xs px-1 md:px-1.5 py-0.5 rounded ${
                    vuln.severity === "Alto"
                      ? "bg-red-900/30 text-red-400"
                      : vuln.severity === "Médio"
                        ? "bg-blue-900/30 text-blue-400"
                        : "bg-cyan-900/30 text-cyan-400"
                  }`}
                >
                  {vuln.severity}
                </span>
                <span
                  className={`text-[8px] md:text-xs ${vuln.status === "Aberto" ? "text-red-400" : "text-teal-400"}`}
                >
                  {vuln.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
