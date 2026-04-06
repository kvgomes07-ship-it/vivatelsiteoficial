import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesGrid } from "@/components/sections/features-grid"
import { SolutionsSection } from "@/components/sections/solutions-grid"
import { PartnershipCTA } from "@/components/sections/partnership-cta"
import { Footer } from "@/components/footer"

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
