import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { JsonLd } from "@/components/json-ld"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "VIVATEL - Infraestrutura Digital Soberana para Angola",
    template: "%s | VIVATEL"
  },
  description: "Soluções inovadoras de infraestrutura digital que transformam a forma como você se conecta e inova. Conectividade soberana, Cloud e Software para o futuro de Angola.",
  generator: 'Kevin Gomes',
  applicationName: 'VIVATEL',
  referrer: 'origin-when-cross-origin',
  keywords: ['Vivatel', 'Angola', 'Infraestrutura Digital', 'Cloud Angola', 'Conectividade Soberana', 'Software Angola', 'Tecnologia Angolana', 'Data Center Angola', 'Angola Cables'],
  authors: [{ name: 'Kevin Gomes' }],
  creator: 'VIVATEL Team',
  publisher: 'VIVATEL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vivatelsiteoficial.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VIVATEL - Infraestrutura Digital Soberana para Angola',
    description: 'Transformando a conectividade e a inovação tecnológica em Angola com soluções de classe mundial.',
    url: '/',
    siteName: 'VIVATEL',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VIVATEL - Infraestrutura Digital',
      },
    ],
    locale: 'pt_AO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIVATEL - Infraestrutura Digital Soberana para Angola',
    description: 'Soluções inovadoras de infraestrutura digital para o futuro de Angola.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <JsonLd />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
