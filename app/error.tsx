"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCcw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service if needed
        console.error("Application error:", error)
    }, [error])

    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_70%)]" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
                <div className="mb-8 flex justify-center">
                    <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20">
                        <AlertTriangle className="h-12 w-12 text-red-500" />
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Falha no Sistema</h1>
                <p className="text-gray-400 mb-2">
                    Encontramos um erro inesperado ao processar sua solicitação.
                </p>
                {error.digest && (
                    <p className="text-xs text-gray-600 mb-8 font-mono">Código de erro: {error.digest}</p>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button
                        onClick={() => reset()}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2"
                    >
                        <RefreshCcw className="mr-2 h-4 w-4" />
                        Tentar Novamente
                    </Button>

                    <Link href="/">
                        <Button variant="outline" className="border-gray-800 text-gray-300 hover:bg-gray-900 px-6 py-2 w-full sm:w-auto">
                            <Home className="mr-2 h-4 w-4" />
                            Voltar ao Início
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
