"use client"

import React, { useState } from "react"
import { QuoteModal } from "../modals/quote-modal"

interface QuoteButtonProps {
  children: React.ReactNode
  className?: string
  serviceName?: string
  asChild?: boolean
}

export function QuoteButton({ children, className, serviceName, asChild = false }: QuoteButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(true)
  }

  // If children is a functional element that handles clicks, we might need a different approach
  // but for simple cases, we can just wrap or use a div/button
  
  return (
    <>
      <div onClick={handleClick} className={className} style={{ display: "contents", cursor: "pointer" }}>
        {children}
      </div>
      <QuoteModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        serviceName={serviceName} 
      />
    </>
  )
}
