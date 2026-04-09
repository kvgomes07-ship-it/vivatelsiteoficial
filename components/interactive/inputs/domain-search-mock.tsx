"use client"

import React, { useState, useEffect, useRef } from "react"
import { Search, Globe, Check, ArrowRight, Loader2 } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"

export function DomainSearchMock() {
    const [query, setQuery] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [result, setResult] = useState<string | null>(null)
    const ref = useRef(null)
    const isInView = useInView(ref)

    const domains = [".ao", ".co.ao", ".com", ".net", ".org"]
    const examples = ["minhaempresa", "startup-angola", "vivatel-global", "tecnologia-luanda"]

    useEffect(() => {
        if (!isInView) return

        let i = 0
        const interval = setInterval(() => {
            if (query === "") {
                const text = examples[i % examples.length]
                let j = 0
                const typing = setInterval(() => {
                    if (j < text.length) {
                        setQuery(text.slice(0, j + 1))
                        j++
                    } else {
                        clearInterval(typing)
                        setTimeout(() => {
                            simulateSearch(text)
                        }, 500)
                    }
                }, 100)
                i++
            }
        }, 6000)
        return () => clearInterval(interval)
    }, [query, isInView])

    const simulateSearch = (text: string) => {
        setIsSearching(true)
        setResult(null)
        setTimeout(() => {
            setIsSearching(false)
            setResult(`${text}.ao está disponível!`)
        }, 1500)
    }

    return (
        <div ref={ref} className="w-full max-w-xl mx-auto space-y-6">
            <div className="relative group">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <div className="relative flex items-center bg-[#090e1a] border border-white/10 rounded-full p-2 pl-6 focus-within:border-cyan-500/50 transition-all shadow-2xl backdrop-blur-md">
                    <Globe className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Pesquisar domínio..."
                        className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-600 flex-1 text-lg font-medium"
                    />
                    <button 
                        onClick={() => simulateSearch(query)}
                        className="bg-cyan-500 hover:bg-cyan-400 text-black p-3 rounded-full transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                    >
                        {isSearching ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-green-500/20 p-2 rounded-full">
                                <Check className="h-4 w-4 text-green-400" />
                            </div>
                            <span className="text-green-100 font-medium">{result}</span>
                        </div>
                        <button className="text-xs font-bold text-green-400 hover:text-green-300 flex items-center gap-1 uppercase tracking-widest">
                            Registar <ArrowRight className="h-3 w-3" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-wrap gap-2 justify-center opacity-60">
                {domains.map(d => (
                    <span key={d} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-gray-400">
                        {d}
                    </span>
                ))}
            </div>
        </div>
    )
}
