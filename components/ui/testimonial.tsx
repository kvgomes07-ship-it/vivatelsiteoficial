"use client"

import Image from "next/image"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Testimonial {
  /** Author name */
  name: string
  /** Author role / company */
  role: string
  /** Testimonial quote (without surrounding quotation marks) */
  content: string
  /** Author / cover image URL */
  image: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
  /** Priority loading for above-the-fold cards */
  priority?: boolean
}

/** A single premium testimonial card with a cover image fading into the quote. */
export function TestimonialCard({ testimonial, className, priority = false }: TestimonialCardProps) {
  const { name, role, content, image } = testimonial

  return (
    <figure
      className={cn(
        "group relative w-full max-w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#08080c] text-white",
        "transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30",
        className,
      )}
    >
      {/* Cover image */}
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          width={600}
          height={270}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 320px"
          className="h-[270px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Fade into card background for seamless blend */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08080c] to-transparent" />
        <Quote className="absolute right-4 top-4 h-6 w-6 text-white/20" aria-hidden="true" />
      </div>

      {/* Quote + author */}
      <figcaption className="relative -mt-8 px-5 pb-5">
        <blockquote className="border-b border-white/10 pb-5 font-medium leading-relaxed text-gray-200">
          &ldquo;{content}&rdquo;
        </blockquote>
        <p className="mt-4 text-sm font-bold tracking-tight text-white">— {name}</p>
        <p className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-sm font-medium text-transparent">
          {role}
        </p>
      </figcaption>
    </figure>
  )
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
  className?: string
}

/** Default sample data — replace with real testimonials via the `testimonials` prop. */
export const defaultTestimonials: Testimonial[] = [
  {
    name: "Maria Santos",
    role: "Diretora de TI, BancoDigital",
    content: "A escalabilidade e performance superaram nossas expectativas. O suporte é excelente.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    name: "Domingos Gonga",
    role: "CTO, MELM Solutions",
    content: "VIVATEL transformou completamente nossa infraestrutura. Uma solução verdadeiramente soberana para Angola.",
    image: "/image.png",
  },
  {
    name: "Carlos Silva",
    role: "Gerente de Inovação",
    content: "VIVATEL é o futuro para o ecossistema digital angolano. Total controle e segurança.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
  },
]

/** Responsive grid of testimonial cards. */
export function Testimonials({ testimonials = defaultTestimonials, className }: TestimonialsProps) {
  return (
    <div className={cn("flex flex-wrap items-stretch justify-center gap-6", className)}>
      {testimonials.map((testimonial, i) => (
        <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
      ))}
    </div>
  )
}
