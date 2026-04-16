import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SEOContentSection } from "@/components/sections/SEOContentSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title:
    "İstanbul Endüstriyel Mutfak Servisi - Aynı Gün Servis 24/7",
  description:
    "İstanbul'da endüstriyel mutfak ekipmanları servis ve bakımı. Ocak, fırın, izgara, fritöz, buzdolabı onarımı. Aynı gün müdahale, orijinal yedek parçalar, 6 ay garantili hizmet.",
  keywords: [
    "endüstriyel mutfak servisi",
    "İstanbul",
    "ocak servisi",
    "fırın servisi",
    "buzdolabı servisi",
    "gaz kaçağı tespiti",
    "24/7 servis",
    "aynı gün servis",
  ],
  authors: [{ name: "İstanbul Endüstriyel Mutfak Servisi" }],
  openGraph: {
    title:
      "İstanbul Endüstriyel Mutfak Servisi - Aynı Gün Servis 24/7",
    description:
      "Profesyonel endüstriyel mutfak ekipmanları servis hizmetleri. Aynı gün müdahale, orijinal yedek parçalar, 6 ay garantili.",
    url: "https://www.example.com",
    siteName: "İstanbul Endüstriyel Mutfak Servisi",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.example.com",
  },
};

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section with form */}
      <HeroSection />

      {/* Trust Badges Section */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Brands Section */}
      <BrandsSection />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* Process Steps */}
      <ProcessSteps />

      {/* SEO Content Section */}
      <SEOContentSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact CTA Section */}
      <ContactCTASection />
    </main>
  );
}
