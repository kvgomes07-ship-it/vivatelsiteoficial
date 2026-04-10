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
    const [scrolled, setScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none">
                <motion.div
                    initial={false}
                    animate={{
                        width: scrolled ? "100%" : "100%",
                        maxWidth: scrolled ? "1100px" : "1400px",
                        backgroundColor: scrolled ? "rgba(10, 10, 15, 0.7)" : "rgba(0,0,0,0)",
                        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
                        paddingLeft: scrolled ? "2.5rem" : "2rem",
                        paddingRight: scrolled ? "2.5rem" : "2rem",
                        borderRadius: scrolled ? "100px" : "0px",
                        border: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0)",
                        height: scrolled ? "70px" : "80px",
                        boxShadow: scrolled ? "0 25px 50px -12px rgba(0, 0, 0, 0.6)" : "none",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="flex items-center justify-between pointer-events-auto relative z-10"
                >
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        <div className="relative h-8 w-32 cursor-pointer transition-transform hover:scale-105">
                            <Image 
                                src="/vivatel.png" 
                                alt="VIVATEL" 
                                fill 
                                className="object-contain" 
                                priority 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-[13px] font-black transition-colors relative py-2 tracking-widest uppercase",
                                            isActive(item.href) || (item.dropdown && isDropdownActive(item.dropdown))
                                                ? "text-blue-500"
                                                : "text-gray-400 hover:text-white"
                                        )}
                                    >
                                        {item.name}
                                        {(isActive(item.href) || (item.dropdown && isDropdownActive(item.dropdown))) && !item.dropdown && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500 rounded-full"
                                            />
                                        )}
                                    </Link>
                                    {item.dropdown && (
                                        <ChevronDown className={cn("h-3 w-3 transition-transform", activeDropdown === item.name ? "rotate-180 text-blue-500" : "text-gray-500")} />
                                    )}
                                </div>

                                <AnimatePresence>
                                    {item.dropdown && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#0a0a0f]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-3xl z-50 mt-4"
                                        >
                                            <div className="flex flex-col gap-1">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={cn(
                                                            "text-[12px] font-bold px-4 py-3 rounded-2xl transition-all block tracking-widest uppercase",
                                                            isActive(subItem.href)
                                                                ? "bg-blue-500/10 text-blue-500"
                                                                : "text-gray-400 hover:bg-white/5 hover:text-white"
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

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 shrink-0">
                        <Link href="/suporte">
                            <Button
                                className={cn(
                                    "hidden md:flex text-[11px] font-black tracking-[0.2em] transition-all rounded-full px-8 py-5 uppercase",
                                    scrolled 
                                        ? "bg-white text-black hover:bg-gray-200" 
                                        : "bg-blue-600 text-white hover:bg-blue-500"
                                )}
                            >
                                Portal do Cliente
                            </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </motion.div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[49] bg-black/98 md:hidden pt-[110px] px-8"
                    >
                        <div className="flex flex-col gap-8">
                            {navItems.map((item) => (
                                <div key={item.name} className="flex flex-col gap-4">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-3xl font-black tracking-tighter transition-colors uppercase italic",
                                            isActive(item.href) ? "text-blue-500" : "text-white"
                                        )}
                                        onClick={() => !item.dropdown && setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="grid grid-cols-1 gap-4 mt-2">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className={cn(
                                                        "text-[10px] font-black tracking-widest text-gray-500 uppercase",
                                                        isActive(subItem.href) ? "text-blue-400" : "hover:text-white"
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
                                className="bg-blue-600 hover:bg-blue-500 text-white font-black h-16 rounded-3xl w-full text-lg mt-4 uppercase tracking-widest"
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
