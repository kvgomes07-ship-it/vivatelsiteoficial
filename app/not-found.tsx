"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, WifiOff } from "lucide-react"

export default function NotFound() {
    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-20 animate-scanline" />
            </div>

            <div className="relative z-10 text-center px-4">
                <div className="mb-8 relative inline-block">
                    <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-pulse" />
                    <WifiOff className="h-24 w-24 text-red-500 relative z-10" />
                </div>

                <h1 className="text-8xl font-bold text-white mb-4 tracking-tighter">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">Sinal Perdido</h2>
                <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg">
                    A página que você está procurando não foi encontrada em nossos servidores. Verifique a URL ou retorne à base.
                </p>

                <Link href="/">
                    <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-medium transition-all hover:scale-105">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Voltar ao Início
                    </Button>
                </Link>
            </div>

            {/* Decorative Grid */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none" />
        </div>
    )
}
