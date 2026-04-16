import { Metadata } from 'next';
import { regions } from '@/data/regions';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CTABanner } from '@/components/ui/CTABanner';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İstanbul Servis Bölgeleri | İstanbul Endüstriyel Mutfak Servisi',
  description:
    'İstanbul genelinde tüm ilçelerde endüstriyel mutfak ekipmanlarının bakım ve onarım hizmetleri. 7/24 acil destek ve aynı gün servis hizmeti.',
  keywords: [
    'İstanbul servis bölgeleri',
    'İstanbul ilçeleri',
    'Endüstriyel mutfak servisi',
    'Acil servis',
  ],
  openGraph: {
    title: 'İstanbul Servis Bölgeleri | İstanbul Endüstriyel Mutfak Servisi',
    description:
      'İstanbul genelinde tüm ilçelerde endüstriyel mutfak ekipmanlarının bakım ve onarım hizmetleri.',
    type: 'website',
  },
};

export default function RegionsPage() {
  const regions2024 = regions;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 md:py-6 lg:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Bölgeler' },
            ]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Page Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            İstanbul Servis Bölgeleri
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            İstanbul'un tüm ilçelerinde profesyonel endüstriyel mutfak
            ekipmanları servis hizmeti sunmaktayız. 7/24 acil destek ve aynı
            gün servis garantisi ile işletmenizin verimli çalışmasını sağlarız.
          </p>
        </div>

        {/* Intro Section */}
        <section className="mb-12 md:mb-16 p-8 bg-slate-50 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            İstanbul Genelinde Hizmet Alanımız
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            İstanbul Endüstriyel Mutfak Servisi, İstanbul'un 39 ilçesinin
            tamamında profesyonel ve güvenilir servis hizmeti sağlamaktadır.
            Avrupa Yakası'ndan Anadolu Yakası'na, batı kesimden doğu kenarına
            kadar tüm bölgelerde deneyimli teknisyenlerimiz hazır durumdadır.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Lokanta, otel, kafe, gıda işletmesi, hastane, okul ve sanayi
            tesislerinin tüm endüstriyel mutfak ekipmanlarının bakım, onarım
            ve acil müdahale hizmetlerinden faydalanabilirsiniz.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hizmet alanımızdaki bölgeler için periyodik bakım kontratları,
            acil destek hattı ve 24/7 müdahale hizmeti sunmaktayız. Tüm
            çalışmalarımız orijinal yedek parçalar kullanılarak ve
            profesyonel standartlara göre yapılmaktadır.
          </p>
        </section>

        {/* Districts Grid */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Tüm Bölgeler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions2024.map((region) => (
              <Link
                key={region.slug}
                href={`/bolgeler/${region.slug}`}
                className="group p-6 bg-white border border-slate-200 rounded-lg hover:border-orange-600 hover:shadow-lg hover:bg-orange-50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {region.name}
                    </h3>
                  </div>
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {region.description}
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                  Detaylar
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Map Placeholder Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Hizmet Alanımız Haritası
          </h2>
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg h-96 flex items-center justify-center border border-slate-300">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 text-lg">
                İstanbul genelinde 7/24 hizmet alanımız mevcuttur.
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Harita yakında eklenecektir.
              </p>
            </div>
          </div>
        </section>

        {/* Service Coverage Info */}
        <section className="mb-12 md:mb-16 p-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Hizmet Kapsamı
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Kapsadığımız Hizmetler
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Endüstriyel ocak, fırın ve izgara servisi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Fritöz, makarna haşlama ve benmari servisi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Soğutma ekipmanları ve buzdolabı servisi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Bulaşık makinesi ve pompa servisi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Gaz kaçağı tespiti ve tamir</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Hizmet Avantajları
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>7/24 acil müdahale hattı</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Aynı gün servis garantisi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Orijinal yedek parçalar kullanımı</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>30 gün onarım garantisi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Periyodik bakım kontratları</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Bölgenizde Servis mi Arıyorsunuz?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            İstanbul'un herhangi bir yerinde ekipmanlarınıza sorun mu
            çıkması? Hemen iletişime geçin ve profesyonel servis hizmeti
            alın.
          </p>
          <a
            href="tel:02121234567"
            className="inline-block px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
          >
            Acil Servis İçin Ara: 0212 XXX XX XX
          </a>
        </section>
      </main>

      {/* CTA Banner */}
      <CTABanner
        title="İstanbul Genelinde 7/24 Acil Servis Hizmeti"
        description="Hangi ilçede olursanız olun, endüstriyel mutfak ekipmanlarınız için profesyonel ve güvenilir servis hizmeti alabilirsiniz."
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'İstanbul Endüstriyel Mutfak Servisi',
            description: 'İstanbul genelinde endüstriyel mutfak servisi',
            areaServed: regions.map((r) => ({
              '@type': 'City',
              name: r.name,
            })),
            serviceArea: {
              '@type': 'City',
              name: 'İstanbul',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Endüstriyel Mutfak Servisleri',
            },
          }),
        }}
      />
    </div>
  );
}
