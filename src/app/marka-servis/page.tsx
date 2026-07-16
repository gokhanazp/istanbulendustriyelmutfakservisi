import { Metadata } from "next";
import Link from "next/link";
import { brandServices } from "@/data/brand-services";
import { brands } from "@/data/brands";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { canonical, SITE_NAME, SITE_URL } from "@/lib/seo";
import {
  buildBreadcrumbSchema,
} from "@/lib/seo";
import {
  Flame,
  Utensils,
  Droplet,
  Snowflake,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Marka Servisleri | ${SITE_NAME}`,
  description:
    "Empero, İnoksan, Öztiryakiler, Kayalar, Portabianco, Maksan ve daha fazlası. Marka bazlı endüstriyel mutfak ekipmanı servis, tamir ve bakım hizmetleri. İstanbul genelinde 7/24 acil müdahale.",
  keywords: [
    "marka servisleri",
    "endüstriyel mutfak marka servisi",
    "Empero servisi",
    "İnoksan servisi",
    "Öztiryakiler servisi",
    "İstanbul endüstriyel mutfak servisi",
  ],
  alternates: { canonical: "/marka-servis" },
  openGraph: {
    title: `Marka Servisleri | ${SITE_NAME}`,
    description:
      "Marka bazlı endüstriyel mutfak ekipmanı servis, tamir ve bakım hizmetleri.",
    url: canonical("/marka-servis"),
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  flame: <Flame className="w-5 h-5" />,
  utensils: <Utensils className="w-5 h-5" />,
  droplet: <Droplet className="w-5 h-5" />,
  snowflake: <Snowflake className="w-5 h-5" />,
};

const categoryGradients: Record<string, string> = {
  pisirme: "from-orange-400 to-orange-600",
  sogutma: "from-blue-400 to-blue-600",
  yikama: "from-cyan-400 to-cyan-600",
  gaz: "from-red-400 to-red-600",
  diger: "from-slate-400 to-slate-600",
};

export default function MarkaServisIndexPage() {
  // Kombinasyonları markaya göre grupla (marka sırasına göre)
  const grouped = brands
    .map((brand) => ({
      brand,
      items: brandServices.filter((bs) => bs.brandId === brand.id),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Marka Servisleri" },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6">
            <span className="text-orange-300 text-sm font-semibold">
              MARKA BAZLI SERVİS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight max-w-3xl">
            Marka Servisleri
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
            Kullandığınız markaya özel endüstriyel mutfak ekipmanı servis, tamir
            ve bakım hizmetleri. Markanızı ve ekipmanınızı seçin, uzman
            ekibimiz aynı gün müdahale etsin.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="tel:+905013001981"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905013001981"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Grouped list */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          {grouped.map(({ brand, items }) => (
            <div key={brand.id}>
              <div className="flex items-center gap-4 mb-6">
                <BrandLogo
                  name={brand.name}
                  index={brands.indexOf(brand)}
                  size={56}
                  logo={brand.logo}
                  logoDark={brand.logoDark}
                />
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    {brand.name} Servisleri
                  </h2>
                  <Link
                    href={`/markalar/${brand.slug}`}
                    className="text-sm font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                  >
                    {brand.name} marka sayfası
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((bs) => {
                  const g =
                    categoryGradients[bs.category] || categoryGradients.diger;
                  return (
                    <Link
                      key={bs.slug}
                      href={bs.urlPath}
                      className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
                    >
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${g} flex items-center justify-center flex-shrink-0`}
                      >
                        <div className="text-white">
                          {iconMap[bs.icon] || <Flame className="w-5 h-5" />}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                          {bs.name}
                        </h3>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Aradığınız Marka Servisi Listede Yok mu?"
        description="Tüm endüstriyel mutfak markalarına servis veriyoruz. Bizi arayın, ekipmanınıza uygun çözümü sunalım."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Ana Sayfa", url: SITE_URL },
              { name: "Marka Servisleri", url: canonical("/marka-servis") },
            ])
          ),
        }}
      />
    </main>
  );
}
