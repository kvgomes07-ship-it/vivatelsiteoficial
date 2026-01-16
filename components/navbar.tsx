"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const headerClass =
        scrollY > 50
            ? "py-4 bg-black/80 backdrop-blur-md border-b border-gray-800/50"
            : "py-6 bg-transparent"

    const navItems = [
        { name: "Início", href: "/" },
        {
            name: "Serviços",
            href: "/#servicos",
            dropdown: [
                { name: "Cloud", href: "/servicos/cloud" },
                { name: "Analytics", href: "/servicos/analytics" },
                { name: "Security", href: "/servicos/security" },
                { name: "Conectividade", href: "/servicos/conectividade" },
                { name: "Software", href: "/servicos/software" },
                { name: "IoT & Stream", href: "/servicos/iot-stream" },
                { name: "Academias", href: "/servicos/academias" },
            ]
        },
        { name: "Parceiros", href: "/#parceiros" },
        { name: "Sobre Nós", href: "/sobre" },
        { name: "Suporte", href: "/suporte" },
    ]

    const isActive = (path: string) => {
        if (path === "/" && pathname !== "/") return false
        return pathname === path
    }

    const isDropdownActive = (items: any[]) => {
        return items.some(item => isActive(item.href))
    }

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-8 w-32 cursor-pointer"
                        >
                            <Image src="/vivatel.png" alt="VIVATEL" fill className="object-contain" priority />
                        </motion.div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item, i) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors relative py-2",
                                            isActive(item.href) || (item.dropdown && isDropdownActive(item.dropdown))
                                                ? "text-cyan-400"
                                                : "text-gray-300 hover:text-cyan-400"
                                        )}
                                    >
                                        {item.name}
                                        {(isActive(item.href) || (item.dropdown && isDropdownActive(item.dropdown))) && !item.dropdown && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                            />
                                        )}
                                    </Link>
                                    {item.dropdown && (
                                        <ChevronDown className={cn("h-4 w-4 transition-transform", activeDropdown === item.name ? "rotate-180 text-cyan-400" : "text-gray-400")} />
                                    )}
                                </div>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {item.dropdown && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 w-48 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-lg p-2 shadow-xl z-50 mt-1"
                                        >
                                            <div className="flex flex-col gap-1">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={cn(
                                                            "text-sm px-3 py-2 rounded-md transition-colors block",
                                                            isActive(subItem.href)
                                                                ? "bg-cyan-500/10 text-cyan-400"
                                                                : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                                        )}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center gap-4"
                    >
                        <Button
                            variant="outline"
                            className="hidden md:flex border-cyan-500 text-cyan-400 hover:bg-cyan-950 bg-transparent"
                        >
                            Portal do Cliente
                        </Button>
                        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </motion.div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[72px] left-0 right-0 z-40 bg-black/95 border-b border-gray-800 md:hidden backdrop-blur-xl max-h-[calc(100vh-72px)] overflow-y-auto"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
                            {navItems.map((item) => (
                                <div key={item.name} className="flex flex-col gap-4">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-lg font-bold transition-colors",
                                            isActive(item.href) ? "text-cyan-400" : "text-white"
                                        )}
                                        onClick={() => !item.dropdown && setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-800 ml-2">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className={cn(
                                                        "text-base font-medium transition-colors",
                                                        isActive(subItem.href) ? "text-cyan-400" : "text-gray-400"
                                                    )}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Button
                                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 w-full text-white mt-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Portal do Cliente
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
