import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { brands } from "@/data/brands";
import { ChevronRight, Shield, Award, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Servis Verdiğimiz Markalar | İstanbul Endüstriyel Mutfak Servisi",
  description:
    "Elektrolüx, Empero, İnoksan, Öztiryakiler, Kayalar Mutfak ve 19 marka daha. İstanbul'da 24 markanın endüstriyel mutfak ekipmanlarının servisini yapıyoruz.",
  keywords: [
    "endüstriyel mutfak markaları",
    "Elektrolüx servis",
    "Empero servis",
    "İnoksan servis",
    "Öztiryakiler servis",
    "İstanbul marka servisi",
  ],
  openGraph: {
    title: "Servis Verdiğimiz Markalar | İstanbul Endüstriyel Mutfak Servisi",
    description: "24 uluslararası ve yerli markanın endüstriyel mutfak ekipmanlarının profesyonel servisi",
    url: "https://istanbulendustriyelmutfakservisi.com/markalar",
    siteName: "İstanbul Endüstriyel Mutfak Servisi",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://istanbulendustriyelmutfakservisi.com/markalar",
  },
};

export default function BrandsPage() {
  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Markalar" },
            ]}
          />
        </div>
      </section>

      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6">
            <span className="text-orange-300 text-sm font-semibold">24 MARKA SERVİSİ</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Servis Verdiğimiz Markalar
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Uluslararası ve yerli 24 markanın endüstriyel mutfak ekipmanlarının
            profesyonel bakım ve onarım hizmeti
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-slate-100">
            <div className="flex items-center justify-center gap-3 py-6">
              <Award className="w-8 h-8 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">24</div>
                <div className="text-xs md:text-sm text-slate-500">Marka Servisi</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-6">
              <Shield className="w-8 h-8 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">100%</div>
                <div className="text-xs md:text-sm text-slate-500">Orijinal Parça</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-6">
              <Wrench className="w-8 h-8 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">15+</div>
                <div className="text-xs md:text-sm text-slate-500">Yıl Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Brands Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand, index) => (
              <Link
                key={brand.id}
                href={`/markalar/${brand.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <BrandLogo name={brand.name} index={index} size={56} logo={brand.logo} logoDark={brand.logoDark} />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {brand.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full mt-1">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {brand.services.length} Hizmet
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {brand.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {brand.services.slice(0, 3).map((s) => (
                      <span key={s} className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {s.replace(/-/g, " ")}
                      </span>
                    ))}
                    {brand.services.length > 3 && (
                      <span className="text-[11px] text-slate-400">
                        +{brand.services.length - 3}
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-orange-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Marka Kategorileri
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Uluslararası Markalar</h3>
              <p className="text-slate-600 text-sm mb-5">
                Dünyaca ünlü, ISO standartlarına uygun üretim yapan markalar
              </p>
              <div className="flex flex-wrap gap-2">
                {["Elektrolüx", "Unox", "Alveo", "Frenox"].map((name) => (
                  <span key={name} className="bg-white text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200">
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Yerli Üreticiler</h3>
              <p className="text-slate-600 text-sm mb-5">
                Türkiye'nin önde gelen endüstriyel mutfak üreticileri
              </p>
              <div className="flex flex-wrap gap-2">
                {["Empero", "İnoksan", "Öztiryakiler", "Pimak", "Vital", "Kayalar"].map((name) => (
                  <span key={name} className="bg-white text-orange-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-orange-200">
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Uzman Markalar</h3>
              <p className="text-slate-600 text-sm mb-5">
                Belirli ekipman türlerinde uzmanlaşmış üreticiler
              </p>
              <div className="flex flex-wrap gap-2">
                {["Maksan", "Dampak", "Venarro", "Portabianco"].map((name) => (
                  <span key={name} className="bg-white text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-200">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            İstanbul Endüstriyel Mutfak Marka Servisi
          </h2>
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              İstanbul'da endüstriyel mutfak servisi alanında 15 yılı aşkın deneyimimizle,
              24 farklı markanın ekipmanlarının bakım, onarım ve arıza giderme hizmetlerini
              sunuyoruz. Elektrolüx, Empero, İnoksan gibi sektörün lider markalarından
              Öztiryakiler, Vital, Pimak gibi yerli üreticilere kadar geniş bir yelpazede
              hizmet vermekteyiz.
            </p>
            <p>
              Her markanın teknik özelliklerini bilen sertifikalı teknisyenlerimiz,
              orijinal yedek parçalar kullanarak kaliteli ve güvenilir servis hizmeti
              sunmaktadır. Tüm onarımlarımız 6 ay garanti kapsamındadır. İstanbul'un
              39 ilçesinde aynı gün müdahale garantisi ile yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Markanız Ne Olursa Olsun, Biz Hizmetinize Hazırız"
        description="24 markanın servisini yapan profesyonel ekibimiz, İstanbul'da 7/24 acil destek sunmaktadır."
      />
    </main>
  );
}
