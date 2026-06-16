"use client"

import React, { useState } from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dotted-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send, X, AlertCircle, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName?: string
}

export function QuoteModal({ isOpen, onClose, serviceName = "Vivatel" }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/quote', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          service: serviceName,
          source: typeof window !== 'undefined' ? window.location.pathname : 'unknown'
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
        }, 4000)
      } else {
        throw new Error("Falha ao enviar mensagem")
      }
    } catch (err) {
      setError("Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] bg-[#020617]/95 backdrop-blur-3xl border-white/10 p-0 overflow-hidden rounded-[2rem] shadow-[0_0_80px_rgba(6,182,212,0.15)]">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-12 text-center flex flex-col items-center justify-center min-h-[450px]"
            >
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 border border-cyan-500/30">
                <CheckCircle className="h-10 w-10 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-black mb-4 tracking-tighter">Pedido Enviado!</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-[300px] mx-auto">
                Um especialista da VIVATEL entrará em contacto nas próximas 24 horas para o seu projeto de <span className="text-white font-bold">{serviceName}</span>.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="p-10 pb-2">
                <DialogHeader className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 w-fit mb-6">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Solicitação Prioritária</span>
                  </div>
                  <DialogTitle className="text-3xl md:text-4xl font-black tracking-tighter bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
                    {serviceName}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400 text-lg font-medium leading-relaxed mt-2">
                    Preencha os dados e receba uma análise personalizada da nossa equipa técnica.
                  </DialogDescription>
                </DialogHeader>

                <form id="quote-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Seu Nome</Label>
                      <Input id="name" name="name" placeholder="João Manuel" required className="bg-white/5 border-white/10 rounded-xl px-4 py-6 text-white focus:border-cyan-500/50 transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">E-mail Corporativo</Label>
                      <Input id="email" name="email" type="email" placeholder="nome@empresa.ao" required className="bg-white/5 border-white/10 rounded-xl px-4 py-6 text-white focus:border-cyan-500/50 transition-all font-medium" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Telefone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+244 9..." required className="bg-white/5 border-white/10 rounded-xl px-4 py-6 text-white focus:border-cyan-500/50 transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Empresa</Label>
                      <Input id="company" name="company" placeholder="Nome da organização" required className="bg-white/5 border-white/10 rounded-xl px-4 py-6 text-white focus:border-cyan-500/50 transition-all font-medium" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Necessidades</Label>
                    <Textarea id="message" name="message" placeholder="Fale-nos brevemente sobre o seu projeto..." className="bg-white/5 border-white/10 rounded-xl min-h-[100px] p-4 text-white focus:border-cyan-500/50 transition-all font-medium resize-none" />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-4 rounded-xl border border-red-400/20 animate-in fade-in slide-in-from-top-1">
                      <AlertCircle className="h-4 w-4" />
                      {error}
                    </div>
                  )}
                </form>
              </div>

              <div className="p-10 pt-4">
                <DialogFooter>
                  <Button 
                    type="submit" 
                    form="quote-form"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black h-16 rounded-xl text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(6,182,212,0.3)] group transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="h-5 w-5" />
                        </motion.div>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        Enviar Solicitação <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </DialogFooter>
                <p className="text-[9px] text-center text-gray-600 font-bold uppercase tracking-widest mt-6">
                  A Vivatel respeita a sua privacidade. Dados 100% seguros.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative element */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-50" />
      </DialogContent>
    </Dialog>
  )
}
