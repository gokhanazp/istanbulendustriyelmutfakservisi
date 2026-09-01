import type { Metadata } from "next";
import Link from "next/link";
import { getPageContent } from "@/data/page-content";
import { services } from "@/data/services";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { ContactForm } from "@/components/forms/ContactForm";
import { RichContent } from "@/components/sections/RichContent";
import {
  buildBreadcrumbSchema,
  canonical,
  SITE_LOGO,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from "@/lib/seo";
import {
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  MessageCircle,
  Phone,
  Shield,
  Zap,
} from "lucide-react";

const SLUG = "endustriyel-mutfak-servisi";
const PATH = `/${SLUG}`;

// Docx kaynaklı başlık zaten eksiksiz (telefon içeriyor); layout'taki
// "%s | SITE_NAME" şablonu bunu tekrar etmesin diye absolute kullanıyoruz.
const SEO_TITLE = "Endüstriyel Mutfak Servisi: 0501 300 1981";
const SEO_DESCRIPTION =
  "Endüstriyel mutfak servisi ile restoran, otel ve catering işletmeleriniz için profesyonel bakım, onarım ve yetkili servis çözümleri. İnoksan, Empero ve daha fazlası.";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: SEO_DESCRIPTION,
  keywords: [
    "endüstriyel mutfak servisi",
    "endüstriyel mutfak tamiri",
    "sanayi tipi mutfak servisi",
    "endüstriyel mutfak bakımı",
    "İstanbul endüstriyel mutfak servisi",
  ],
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: canonical(PATH),
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
  },
  alternates: { canonical: PATH },
};

const highlights = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Profesyonel Teknisyenler",
    description:
      "Endüstriyel mutfak ekipmanlarında sertifikalı ve deneyimli teknisyenler.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "7/24 Acil Destek",
    description:
      "Arıza durumunda acil müdahale hizmeti ve aynı gün servis garantisi.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Orijinal Yedek Parçalar",
    description:
      "Tüm işlemlerde orijinal ve üretici onaylı yedek parçalar kullanılır.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Şeffaf Fiyatlandırma",
    description:
      "İşlem öncesi net bilgilendirme; onayınız olmadan işleme başlanmaz.",
  },
];

export default function EndustriyelMutfakServisiPage() {
  const content = getPageContent(SLUG);
  const featuredServices = services.slice(0, 8);

  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Endüstriyel Mutfak Servisi" },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6">
            <span className="text-orange-300 text-sm font-semibold">
              7/24 TEKNİK SERVİS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-4xl">
            Endüstriyel Mutfak Servisi
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
            Restoran, otel, kafe ve catering işletmeleri için sanayi tipi mutfak
            ekipmanlarında arıza tespiti, bakım ve onarım hizmeti.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+905013001981"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905013001981"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* İçerik + Sidebar */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {content && <RichContent sections={content.sections} />}

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center flex-shrink-0">
                        <div className="text-orange-600">{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <h2 className="text-lg font-bold mb-3">
                  Hemen Servis Talep Edin
                </h2>
                <p className="text-slate-300 text-sm mb-5">
                  Profesyonel ekibimiz en kısa sürede müdahale eder.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+905013001981"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    0501 300 19 81
                  </a>
                  <a
                    href="https://wa.me/905013001981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp İle Yazın
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Servis Verdiğimiz Ekipmanlar
                </h2>
                <ul className="space-y-2">
                  {featuredServices.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/hizmetler/${service.slug}`}
                        className="group flex items-center gap-2 text-sm text-slate-700 hover:text-orange-600 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/hizmetler"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  Tüm hizmetler
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      {content && content.faq.length > 0 && (
        <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
                <span className="w-2 h-2 bg-orange-600 rounded-full" />
                <span className="text-sm font-semibold text-orange-600 tracking-wide">
                  SSS
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                {content.faqHeading}
              </h2>
            </div>
            <div className="space-y-4">
              {content.faq.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-orange-300 transition-colors overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                    <span className="flex-1 pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* İletişim formu */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
            </div>
            <div className="relative p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Endüstriyel Mutfak Servisi Talep Formu
                </h2>
                <p className="text-slate-300">
                  Aşağıdaki formu doldurup gönderdiğinizde, en kısa sürede
                  sizinle iletişime geçeceğiz.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Endüstriyel Mutfak Servisi İçin Hemen İletişime Geçin"
        description="7/24 acil müdahale hizmetiyle işletmenizin ekipmanlarını hızlı ve güvenilir şekilde onarıyoruz."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${canonical(PATH)}/#service`,
            name: "Endüstriyel Mutfak Servisi",
            description: SEO_DESCRIPTION,
            url: canonical(PATH),
            image: SITE_LOGO,
            serviceType: "Endüstriyel mutfak ekipmanları servis ve onarım",
            areaServed: { "@type": "City", name: "İstanbul" },
            provider: {
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              telephone: SITE_PHONE,
              priceRange: "$$",
              image: SITE_LOGO,
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Endüstriyel Mutfak Servisi - Hizmetler",
              itemListElement: featuredServices.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.name,
                  url: canonical(`/hizmetler/${service.slug}`),
                },
              })),
            },
          }),
        }}
      />

      {content && content.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: content.faq.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Ana Sayfa", url: SITE_URL },
              { name: "Endüstriyel Mutfak Servisi", url: canonical(PATH) },
            ])
          ),
        }}
      />
    </main>
  );
}
