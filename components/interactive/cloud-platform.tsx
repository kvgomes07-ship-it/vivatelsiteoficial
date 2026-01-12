"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Server, Database, Globe, Cloud, Cpu, ArrowRight } from "lucide-react"

export function CloudPlatform() {
  const [activeServer, setActiveServer] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [deployStatus, setDeployStatus] = useState<string | null>(null)

  const handleServerClick = (index: number) => {
    setActiveServer(index)
    setIsLoading(true)
    setDeployStatus(null)

    setTimeout(() => {
      setIsLoading(false)
      setDeployStatus("Implantado com sucesso")
    }, 1500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLoading) {
        setActiveServer((prev) => {
          const next = prev === null ? 0 : (prev + 1) % 6
          return next
        })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-teal-500" />
          <h3 className="font-medium">Console de Nuvem Vivatel</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-teal-400">
          <span className="h-2 w-2 rounded-full bg-teal-500"></span>
          Todos os Sistemas Operacionais
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800/50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
          <Cpu className="h-6 w-6 text-blue-400 mb-2" />
          <span className="text-xs text-gray-400">Uso de CPU</span>
          <span className="text-sm font-medium">24%</span>
        </div>
        <div className="bg-gray-800/50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
          <Database className="h-6 w-6 text-teal-400 mb-2" />
          <span className="text-xs text-gray-400">Armazenamento</span>
          <span className="text-sm font-medium">1.2 TB</span>
        </div>
        <div className="bg-gray-800/50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
          <Globe className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-xs text-gray-400">Regiões</span>
          <span className="text-sm font-medium">18 Ativas</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3">Rede de Servidores Global</h4>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleServerClick(index)}
              className={`relative p-4 rounded-lg border transition-all ${
                activeServer === index
                  ? "border-teal-500 bg-teal-500/10"
                  : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
              }`}
            >
              <Server
                className={`h-6 w-6 mx-auto mb-2 ${activeServer === index ? "text-teal-400" : "text-gray-400"}`}
              />
              <span className="block text-xs text-center">Região {index + 1}</span>
              {activeServer === index && (
                <motion.div
                  className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-teal-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-800/50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-medium">Status de Implantação</h4>
          <span className="text-xs text-gray-400">Auto-escala ativada</span>
        </div>

        {isLoading ? (
          <div className="flex items-center gap-2 text-sm">
            <motion.div
              className="h-3 w-3 rounded-full bg-blue-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
            />
            <span>Implantando na Região {activeServer !== null ? activeServer + 1 : "..."}</span>
          </div>
        ) : deployStatus ? (
          <div className="flex items-center gap-2 text-sm text-teal-400">
            <span className="h-3 w-3 rounded-full bg-teal-500"></span>
            <span>{deployStatus}</span>
          </div>
        ) : (
          <div className="text-sm text-gray-400">
            {activeServer !== null ? (
              <span>Conectado à Região {activeServer + 1}</span>
            ) : (
              <span>Selecione uma região para implantar</span>
            )}
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
          <span className="text-xs text-gray-400">
            {activeServer !== null ? `Conectado à Região ${activeServer + 1}` : "Não conectado"}
          </span>
          <button className="text-xs text-teal-400 flex items-center gap-1 hover:text-teal-300">
            Ver Detalhes <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  )
}
