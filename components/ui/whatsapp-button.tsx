"use client"

import React from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/244921000000" // Placeholder for Vivatel phone number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-shadow cursor-pointer"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute -top-12 right-0 bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-black/5 animate-bounce">
        Fale connosco agora!
      </span>
    </motion.a>
  )
}
