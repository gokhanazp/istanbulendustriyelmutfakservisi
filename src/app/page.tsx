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
import { faqData } from "@/data/faq";
import { SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "İstanbul Endüstriyel Mutfak Servisi - Aynı Gün Servis 7/24",
  description:
    "İstanbul'da endüstriyel mutfak ekipmanları servis ve bakımı. Ocak, fırın, izgara, fritöz, buzdolabı onarımı. Aynı gün müdahale, orijinal yedek parçalar, 6 ay garantili hizmet.",
  keywords: [
    "endüstriyel mutfak servisi",
    "istanbul endüstriyel mutfak servisi",
    "endüstriyel ocak servisi",
    "endüstriyel fırın servisi",
    "endüstriyel buzdolabı servisi",
    "soğuk oda servisi",
    "gaz kaçağı tespiti",
    "endüstriyel mutfak tamiri",
    "7/24 acil servis",
    "aynı gün müdahale",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "İstanbul Endüstriyel Mutfak Servisi - Aynı Gün Servis 7/24",
    description:
      "Profesyonel endüstriyel mutfak ekipmanları servis hizmetleri. Aynı gün müdahale, orijinal yedek parçalar, 6 ay garantili.",
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />

      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      <ServicesGrid />
      <BrandsSection />
      <WhyUsSection />
      <ProcessSteps />
      <SEOContentSection />
      <FAQSection />
      <ContactCTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.slice(0, 8).map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
