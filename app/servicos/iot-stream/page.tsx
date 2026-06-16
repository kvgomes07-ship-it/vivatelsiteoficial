import { Metadata } from 'next'
import { IoTMarketingContent } from "@/components/sections/iot-marketing-content"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "IoT & Streaming em Tempo Real | Conectividade Industrial em Angola",
  description: "Transforme a sua operação com soluções de IoT e Streaming em tempo real. Monitore, automatize e tome decisões baseadas em dados com a infraestrutura de alta performance da Vivatel.",
}

export default function IoTStreamPage() {
    return (
        <div className="min-h-screen bg-transparent text-white font-sans">
            <main className="w-full pt-12 overflow-x-hidden">
                <IoTMarketingContent />
                <Footer />
            </main>
        </div>
    )
}
