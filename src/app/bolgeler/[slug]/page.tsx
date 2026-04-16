import { Metadata } from 'next';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { brands } from '@/data/brands';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CTABanner } from '@/components/ui/CTABanner';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

interface RegionDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return regions.map((region) => ({
    slug: region.slug,
  }));
}

export async function generateMetadata(
  props: RegionDetailPageProps
): Promise<Metadata> {
  const params = await props.params;
  const region = regions.find((r) => r.slug === params.slug);

  if (!region) {
    return {
      title: 'Bölge Bulunamadı',
    };
  }

  return {
    title: `${region.name} Endüstriyel Mutfak Servisi | İstanbul`,
    description: `${region.name}'da endüstriyel mutfak ekipmanlarının profesyonel bakım ve onarım hizmetleri. 7/24 acil destek.`,
    keywords: [
      region.name,
      'Endüstriyel mutfak servisi',
      'İstanbul',
      'Servis',
    ],
    openGraph: {
      title: `${region.name} Endüstriyel Mutfak Servisi | İstanbul`,
      description: `${region.name}'da endüstriyel mutfak ekipmanlarının profesyonel bakım ve onarım hizmetleri.`,
      type: 'website',
    },
  };
}

export default async function RegionDetailPage(props: RegionDetailPageProps) {
  const params = await props.params;
  const region = regions.find((r) => r.slug === params.slug);

  if (!region) {
    return (
      <div className="min-h-screen bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Bölge Bulunamadı
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Aradığınız bölge sayfası bulunamadı. Lütfen bölgeler sayfasına
            dönüp tekrar deneyin.
          </p>
          <Link
            href="/bolgeler"
            className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Bölgelere Dön
          </Link>
        </div>
      </div>
    );
  }

  // Get nearby districts
  const nearbyRegions = regions
    .filter((r) => r.slug !== region.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  // Generate nearby districts list - for demo purposes
  const getNearbyDistricts = () => {
    const nearbyMapping: Record<string, string[]> = {
      kadikoy: ['Üsküdar', 'Maltepe', 'Pendik', 'Kartal'],
      umraniye: ['Ataşehir', 'Üsküdar', 'Pendik', 'Çekmeköy'],
      besiktas: ['Şişli', 'Kağıthane', 'Beyoğlu', 'Sarıyer'],
      sisli: ['Beşiktaş', 'Kağıthane', 'Beyoğlu', 'Bakırköy'],
      bakirkoy: ['Şişli', 'Zeytinburnu', 'Esenyurt', 'Beylikdüzü'],
      atasehir: ['Ümraniye', 'Maltepe', 'Pendik', 'Çekmeköy'],
      maltepe: ['Kadıköy', 'Kartal', 'Pendik', 'Ataşehir'],
      kartal: ['Maltepe', 'Pendik', 'Tuzla', 'Sancaktepe'],
      pendik: ['Kartal', 'Tuzla', 'Maltepe', 'Ataşehir'],
      tuzla: ['Kartal', 'Pendik', 'Sancaktepe', 'Sultanbeyli'],
      uskudar: ['Kadıköy', 'Beşiktaş', 'Sarıyer', 'Üsküdar'],
      beyoglu: ['Beşiktaş', 'Şişli', 'Kağıthane', 'Sarıyer'],
      fatih: ['Beyoğlu', 'Eminönü', 'Zeytinburnu', 'Bakırköy'],
      beylikduzu: ['Esenyurt', 'Bakırköy', 'Avcılar', 'Büyükçekmece'],
      esenyurt: ['Beylikdüzü', 'Bağcılar', 'Esenler', 'Avcılar'],
      bagcilar: ['Esenler', 'Bahçelievler', 'Esenyurt', 'Sultangazi'],
      bachelievler: ['Bağcılar', 'Güngören', 'Zeytinburnu', 'Bakırköy'],
      kucukccekmece: ['Beylikdüzü', 'Silivri', 'Avcılar', 'Arnavutköy'],
      sultangazi: ['Bağcılar', 'Gaziosmanpaşa', 'Esenler', 'Kağıthane'],
      sariyer: ['Beykoz', 'Sarıyer', 'Eyüpsultan', 'Kağıthane'],
      eyupsultan: ['Gaziosmanpaşa', 'Eyüpsultan', 'Kağıthane', 'Beykoz'],
      gaziosmanpasa: ['Eyüpsultan', 'Sultangazi', 'Kağıthane', 'Bağcılar'],
      kagithane: ['Gaziosmanpaşa', 'Beşiktaş', 'Kağıthane', 'Sarıyer'],
      basaksehir: ['Avcılar', 'Başakşehir', 'Arnavutköy', 'Sultangazi'],
      avcilar: ['Beylikdüzü', 'Avcılar', 'Başakşehir', 'Esenyurt'],
      buyukccekmece: ['Büyükçekmece', 'Silivri', 'Çatalca', 'Avcılar'],
      cekmekoy: ['Çekmeköy', 'Ataşehir', 'Ümraniye', 'Sancaktepe'],
      sancaktepe: ['Sancaktepe', 'Ümraniye', 'Çekmeköy', 'Sultanbeyli'],
      sultanbeyli: ['Sancaktepe', 'Sultanbeyli', 'Kartal', 'Tuzla'],
      zeytinburnu: ['Zeytinburnu', 'Bakırköy', 'Fatih', 'Güngören'],
      gungoren: ['Güngören', 'Bahçelievler', 'Zeytinburnu', 'Bakırköy'],
      bayrampaşa: ['Eyüpsultan', 'Gaziosmanpaşa', 'Bayrampaşa', 'Kağıthane'],
      esenler: ['Esenler', 'Bağcılar', 'Bahçelievler', 'Esenyurt'],
      arnavutkoy: ['Arnavutköy', 'Başakşehir', 'Çatalca', 'Silivri'],
      silivri: ['Silivri', 'Büyükçekmece', 'Çatalca', 'Arnavutköy'],
      catalca: ['Çatalca', 'Silivri', 'Arnavutköy', 'Çekmeköy'],
      beykoz: ['Beykoz', 'Sarıyer', 'Eyüpsultan', 'Kağıthane'],
      adalar: ['Maltepe', 'Kadıköy', 'Üsküdar', 'Beşiktaş'],
      sile: ['Şile', 'Pendik', 'Kartal', 'Üsküdar'],
    };

    const nearby = nearbyMapping[region.slug] || [];
    return nearby.map((name) => {
      const region = regions.find((r) => r.name === name);
      return region;
    }).filter(Boolean) as typeof regions;
  };

  const nearbyDistricts = getNearbyDistricts();

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 md:py-6 lg:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Bölgeler', href: '/bolgeler' },
              { label: region.name },
            ]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Region Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              {region.name} Endüstriyel Mutfak Servisi
            </h1>
            <MapPin className="w-12 h-12 text-orange-600 flex-shrink-0" />
          </div>
          <p className="text-xl text-slate-600 max-w-3xl">
            {region.description}
          </p>
        </div>

        {/* Region Description */}
        <section className="mb-12 md:mb-16 p-8 bg-slate-50 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Hizmet Alanımız
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {region.name} bölgesinde bulunan lokantalar, oteller, kafeler, gıda
            işletmeleri ve sanayi tesisleri için profesyonel endüstriyel mutfak
            ekipmanları servis hizmeti sunmaktayız. Bölge dahilinde tüm
            işletmelere 7/24 acil destek ve aynı gün servis garantisi
            verilebilmektedir.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {region.name}'daki işletmelerin mutfak ekipmanlarının verimli ve
            güvenli çalışmasını sağlamak için periyodik bakım, acil onarım ve
            teknik destek hizmetlerinden faydalanabilirsiniz. Sertifikalı
            teknisyenlerimiz ve orijinal yedek parçalarımız sayesinde
            ekipmanlarınızın ömrünü uzatır ve performansını maksimuma çıkartırız.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            İster acil bir arızanız olsun ister periyodik bakım ihtiyacınız
            olsun, hemen bize ulaşarak profesyonel çözüm alabilirsiniz. {region.name}
            'de hizmet alan müşterilerimizin memnuniyeti bizim önceliğimizdir.
          </p>
        </section>

        {/* Services Available */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            {region.name}'da Sunduğumuz Hizmetler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/hizmetler/${service.slug}`}
                className="p-6 bg-white border border-slate-200 rounded-lg hover:border-orange-600 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {service.shortDescription}
                </p>
                <div className="flex items-center text-orange-600 font-semibold">
                  Detaylar →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Brands */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            {region.name}'da Sunduğumuz Markalar
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {region.name}'daki tüm endüstriyel mutfak markalarının servis
            hizmeti sunmaktayız. Aşağıda yer alan markalardan birinin
            ekipmanlarınız varsa, profesyonel servis hizmeti alabilirsiniz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.slice(0, 9).map((brand) => (
              <Link
                key={brand.id}
                href={`/markalar/${brand.slug}`}
                className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg hover:border-orange-600 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {brand.name}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-2">
                  {brand.description}
                </p>
                <div className="flex items-center text-orange-600 font-semibold mt-4">
                  Marka Sayfası →
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/markalar"
              className="inline-block px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Tüm Markaları Gör
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12 md:mb-16 p-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            {region.name}'da Servis İhtiyacınız mı?
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            {region.name} bölgesinde endüstriyel mutfak ekipmanlarınız için
            hemen servis talep edebilirsiniz. Profesyonel teknisyenlerimiz en
            kısa sürede sizin yanınızda olacaktır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:02121234567"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Acil Servis: 0212 XXX XX XX
            </a>
            <a
              href="https://wa.me/905321234567?text=Merhaba%2C%20{region.name}'de%20endüstriyel%20mutfak%20ekipmanlarım%20için%20servis%20hizmeti%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.393-1.476-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.962 1.484c-1.53.857-2.854 2.035-3.809 3.424-.955 1.389-1.464 2.961-1.489 4.614-.024 1.652.424 3.269 1.313 4.67l-.738 2.701 2.758-.911c1.329.743 2.848 1.135 4.443 1.158h.004c2.657 0 5.159-1.064 7.041-2.993 1.881-1.929 2.93-4.541 2.93-7.291 0-1.952-.471-3.83-1.363-5.464-.893-1.635-2.173-3.038-3.768-4.107-1.595-.97-3.393-1.504-5.287-1.528zm9.773 5.441c-.894 1.728-2.216 3.236-3.885 4.33-1.669 1.093-3.631 1.775-5.703 1.799-1.624.017-3.212-.383-4.61-1.165l-2.04.673.748-2.738c-.961-1.348-1.492-2.953-1.468-4.608.023-1.655.51-3.227 1.413-4.596.902-1.369 2.186-2.559 3.757-3.37 1.57-.81 3.343-1.246 5.19-1.246 1.899 0 3.744.436 5.313 1.265 1.568.83 2.928 2.02 3.836 3.388.908 1.368 1.399 2.944 1.376 4.599-.024 1.655-.518 3.227-1.433 4.596z" />
              </svg>
              WhatsApp: 0532 XXX XX XX
            </a>
          </div>
        </section>

        {/* Nearby Districts */}
        {nearbyDistricts.length > 0 && (
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Yakın Bölgeler
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              {region.name} bölgesinin çevresindeki ilçelerde de servis
              hizmeti sunmaktayız.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {nearbyDistricts.map((nearbyRegion) => (
                <Link
                  key={nearbyRegion.slug}
                  href={`/bolgeler/${nearbyRegion.slug}`}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-all text-center"
                >
                  <h3 className="font-semibold text-slate-900 hover:text-orange-600 transition-colors">
                    {nearbyRegion.name}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* CTA Banner */}
      <CTABanner
        title={`${region.name}'da 7/24 Endüstriyel Mutfak Servisi`}
        description={`${region.name} bölgesinde ekipmanlarınız için profesyonel ve güvenilir servis hizmeti sunmaktayız.`}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `${region.name} Endüstriyel Mutfak Servisi`,
            description: region.description,
            address: {
              '@type': 'PostalAddress',
              addressLocality: region.name,
              addressRegion: 'İstanbul',
              addressCountry: 'TR',
            },
            areaServed: {
              '@type': 'City',
              name: region.name,
            },
            serviceArea: [
              {
                '@type': 'City',
                name: region.name,
              },
            ],
            telephone: '0212 XXX XX XX',
            priceRange: '$$',
            openingHours: 'Mo-Su 00:00-24:00',
          }),
        }}
      />
    </div>
  );
}
