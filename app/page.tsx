import { HeroSection } from "@/components/sections/hero-section"
import dynamic from "next/dynamic"

const FeaturesGrid = dynamic(() => import("@/components/sections/features-grid").then(mod => mod.FeaturesGrid), { ssr: true })
const SolutionsSection = dynamic(() => import("@/components/sections/solutions-grid").then(mod => mod.SolutionsSection), { ssr: true })
const PartnershipCTA = dynamic(() => import("@/components/sections/partnership-cta").then(mod => mod.PartnershipCTA), { ssr: true })
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <HeroSection />
      <FeaturesGrid />
      <SolutionsSection />
      <PartnershipCTA />
      <Footer />
    </main>
  )
}
