"use client"

import React, { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function IoTLeadForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-10 w-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-black mb-2">Pedido Enviado!</h3>
        <p className="text-gray-400 max-w-xs">Um dos nossos especialistas entrará em contacto nas próximas 24 horas.</p>
      </div>
    )
  }

  return (
    <form 
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-6 py-4"
    >
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Nome Completo</label>
        <input 
          required
          type="text" 
          placeholder="Ex: João Manuel"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-medium" 
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">E-mail Corporativo</label>
        <input 
          required
          type="email" 
          placeholder="joao@empresa.ao"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-medium" 
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Telefone</label>
        <input 
          required
          type="tel" 
          placeholder="+244 9..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-medium" 
        />
      </div>

      <button 
        type="submit"
        className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
      >
        Enviar Pedido <Send className="h-4 w-4" />
      </button>
      
      <p className="text-[9px] text-center text-gray-600 font-bold uppercase tracking-widest">
        A Vivatel respeita a sua privacidade. Dados 100% seguros.
      </p>
    </form>
  )
}
