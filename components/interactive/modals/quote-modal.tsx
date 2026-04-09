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
import { CheckCircle, Send, X, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName?: string
}

export function QuoteModal({ isOpen, onClose, serviceName = "Analytics" }: QuoteModalProps) {
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
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "mnpkrpkp"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          service: serviceName,
          source: window.location.pathname
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
        }, 3000)
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
      <DialogContent className="sm:max-w-[500px] bg-[#0c1221]/95 backdrop-blur-2xl border-white/10 p-0 overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(14,165,233,0.1)]">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                <CheckCircle className="h-10 w-10 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Solicitação Enviada!</h2>
              <p className="text-gray-400">Um especialista da VIVATEL entrará em contacto em breve para discutir o seu projeto de {serviceName}.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="p-8 pb-0">
                <DialogHeader className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-3 py-1 w-fit mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-sky-400">Orçamento Digital</span>
                  </div>
                  <DialogTitle className="text-3xl font-bold tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                    {serviceName} Dedicado
                  </DialogTitle>
                  <DialogDescription className="text-gray-400 text-base">
                    Preencha os dados abaixo e receba uma proposta personalizada para a sua infraestrutura.
                  </DialogDescription>
                </DialogHeader>

                <form id="quote-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-400">Nome</Label>
                      <Input id="name" name="name" placeholder="Ex: João Silva" required className="bg-white/5 border-white/10 rounded-xl focus:ring-sky-500/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Corporativo</Label>
                      <Input id="email" name="email" type="email" placeholder="nome@empresa.ao" required className="bg-white/5 border-white/10 rounded-xl focus:ring-sky-500/50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-gray-400">Empresa / Instituição</Label>
                    <Input id="company" name="company" placeholder="Nome da organização" required className="bg-white/5 border-white/10 rounded-xl focus:ring-sky-500/50" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-400">Necessidades Específicas</Label>
                    <Textarea id="message" name="message" placeholder="Fale-nos brevemente sobre o seu projeto..." className="bg-white/5 border-white/10 rounded-xl min-h-[100px] resize-none focus:ring-sky-500/50" />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-xl border border-red-400/20">
                      <AlertCircle className="h-4 w-4" />
                      {error}
                    </div>
                  )}
                </form>
              </div>

              <div className="p-8 pt-6">
                <DialogFooter>
                  <Button 
                    type="submit" 
                    form="quote-form"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-700 hover:to-cyan-600 text-white h-14 rounded-2xl text-lg font-bold shadow-[0_0_20px_rgba(14,165,233,0.2)] group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="h-5 w-5" />
                        </motion.div>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Enviar Solicitação <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </DialogFooter>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      </DialogContent>
    </Dialog>
  )
}
