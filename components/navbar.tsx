"use client"

import { useState, useRef, useCallback, useMemo, memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useNavbar, useNavbarKeyboard } from "@/hooks/use-navbar"

interface NavItem {
    name: string
    href: string
    dropdown?: Array<{ name: string; href: string }>
}

const NAV_ITEMS: NavItem[] = [
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

export function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const menuRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLButtonElement>(null)

    // Use custom hook para navbar
    const { scrollY, isMenuOpen, closeMenu } = useNavbar()
    const pathname = usePathname()

    // Keyboard handling
    const handleEscape = useCallback(() => {
        closeMenu()
        setActiveDropdown(null)
    }, [closeMenu])

    useNavbarKeyboard(handleEscape)

    const headerClass = useMemo(() =>
        scrollY > 50
            ? "py-4 bg-black/80 backdrop-blur-md border-b border-gray-800/50"
            : "py-6 bg-transparent",
        [scrollY]
    )

    const isActive = useCallback((path: string) => {
        if (path === "/" && pathname !== "/") return false
        return pathname === path
    }, [pathname])

    const isDropdownActive = useCallback((items: NavItem['dropdown']) => {
        if (!items) return false
        return items.some(item => isActive(item.href))
    }, [isActive])



    return (
        <>
            <header 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link 
                        href="/" 
                        className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
                        aria-label="VIVATEL Home"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-8 w-32 cursor-pointer"
                        >
                            <Image src="/vivatel.png" alt="VIVATEL" fill className="object-contain" priority />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav 
                        className="hidden md:flex items-center gap-8"
                        aria-label="Main menu"
                    >
                        {NAV_ITEMS.map((item) => (
                            <DesktopNavItem
                                key={item.name}
                                item={item}
                                isActive={isActive}
                                isDropdownActive={isDropdownActive}
                                activeDropdown={activeDropdown}
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            />
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center gap-4"
                    >
                        <Button
                            variant="outline"
                            className="hidden md:flex border-blue-500 text-blue-400 hover:bg-blue-950 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                            aria-label="Access customer portal"
                        >
                            Portal do Cliente
                        </Button>
                        <Button 
                            ref={triggerRef}
                            variant="ghost" 
                            size="icon" 
                            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </motion.div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[72px] left-0 right-0 z-40 bg-black/95 border-b border-gray-800 md:hidden backdrop-blur-xl max-h-[calc(100vh-72px)] overflow-y-auto"
                        role="navigation"
                        aria-label="Mobile menu"
                    >
                        <nav className="container mx-auto px-4 py-6 flex flex-col gap-6">
                            {NAV_ITEMS.map((item) => (
                                <MobileNavItem
                                    key={item.name}
                                    item={item}
                                    isActive={isActive}
                                    onLinkClick={closeMenu}
                                />
                            ))}
                            <Button
                                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 w-full text-white mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                onClick={closeMenu}
                            >
                                Portal do Cliente
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

// Desktop Navigation Item Component
const DesktopNavItem = memo(({
    item,
    isActive,
    isDropdownActive,
    activeDropdown,
    onMouseEnter,
    onMouseLeave,
}: {
    item: NavItem
    isActive: (path: string) => boolean
    isDropdownActive: (items?: NavItem['dropdown']) => boolean
    activeDropdown: string | null
    onMouseEnter: () => void
    onMouseLeave: () => void
}) => {
    return (
        <div
            className="relative group"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex items-center gap-1">
                <Link
                    href={item.href}
                    className={cn(
                        "text-sm font-medium transition-colors relative py-2 px-2 rounded-md",
                        "focus:outline-none focus:ring-2 focus:ring-blue-400",
                        isActive(item.href) || (item.dropdown && isDropdownActive(item.dropdown))
                            ? "text-blue-400"
                            : "text-gray-300 hover:text-blue-400"
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                >
                    {item.name}
                    {(isActive(item.href) || (item.dropdown && isDropdownActive(item.dropdown))) && !item.dropdown && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 shadow-[0_0_10px_rgba(59, 130, 246,0.5)]"
                        />
                    )}
                </Link>
                {item.dropdown && (
                    <ChevronDown 
                        className={cn(
                            "h-4 w-4 transition-transform",
                            activeDropdown === item.name ? "rotate-180 text-blue-400" : "text-gray-400"
                        )}
                        aria-hidden="true"
                    />
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
                        role="menu"
                    >
                        <div className="flex flex-col gap-1">
                            {item.dropdown.map((subItem) => (
                                <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={cn(
                                        "text-sm px-3 py-2 rounded-md transition-colors block",
                                        "focus:outline-none focus:ring-2 focus:ring-blue-400",
                                        isActive(subItem.href)
                                            ? "bg-blue-500/10 text-blue-400"
                                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                    )}
                                    role="menuitem"
                                    aria-current={isActive(subItem.href) ? "page" : undefined}
                                >
                                    {subItem.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
})
DesktopNavItem.displayName = 'DesktopNavItem'

// Mobile Navigation Item Component
const MobileNavItem = memo(({
    item,
    isActive,
    onLinkClick,
}: {
    item: NavItem
    isActive: (path: string) => boolean
    onLinkClick: () => void
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <Link
                    href={item.href}
                    className={cn(
                        "text-lg font-bold transition-colors",
                        "focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-2 py-1",
                        isActive(item.href) ? "text-blue-400" : "text-white"
                    )}
                    onClick={() => !item.dropdown && onLinkClick()}
                    aria-current={isActive(item.href) ? "page" : undefined}
                >
                    {item.name}
                </Link>
                {item.dropdown && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
                        aria-expanded={isOpen}
                        aria-label={`Toggle ${item.name} submenu`}
                    >
                        <ChevronDown 
                            className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
                            aria-hidden="true"
                        />
                    </button>
                )}
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {item.dropdown && isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 flex flex-col gap-3 border-l-2 border-gray-800 ml-2"
                    >
                        {item.dropdown.map((subItem) => (
                            <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={cn(
                                    "text-base font-medium transition-colors",
                                    "focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-2 py-1",
                                    isActive(subItem.href) ? "text-blue-400" : "text-gray-400 hover:text-white"
                                )}
                                onClick={onLinkClick}
                                aria-current={isActive(subItem.href) ? "page" : undefined}
                            >
                                {subItem.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
})
MobileNavItem.displayName = 'MobileNavItem'
