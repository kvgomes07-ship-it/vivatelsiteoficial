export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VIVATEL",
    "url": "https://vivatelsiteoficial.vercel.app",
    "logo": "https://vivatelsiteoficial.vercel.app/vivatel.png",
    "description": "Infraestrutura Digital Soberana para Angola. Soluções de Cloud, Conectividade e Software.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Luanda",
      "addressCountry": "AO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+244-923-456-789",
      "contactType": "customer service",
      "areaServed": "AO",
      "availableLanguage": ["Portuguese", "English"]
    },
    "sameAs": [
      "https://twitter.com/vivatel",
      "https://github.com/vivatel"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
