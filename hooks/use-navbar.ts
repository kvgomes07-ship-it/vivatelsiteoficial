import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Hook para otimizar comportamento da navbar
 * Fornece scroll detection, menu management, e keyboard handling
 */
export function useNavbar() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Detecção de scroll com debounce
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setScrollY(window.scrollY)
      }, 16) // ~60fps
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  // Fechar menu ao fazer scroll
  useEffect(() => {
    if (!isMenuOpen) return

    const handleScroll = () => {
      setIsMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return {
    scrollY,
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
    closeMenu,
  }
}

/**
 * Hook para detectar cliques fora de um elemento
 * Útil para fechar menus quando clica fora
 */
export function useClickOutside(ref: React.RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref, callback])
}

/**
 * Hook para handle keyboard events na navbar
 */
export function useNavbarKeyboard(
  onEscape: () => void,
) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onEscape])
}
