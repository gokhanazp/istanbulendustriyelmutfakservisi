import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | İstanbul Endüstriyel Mutfak Servisi",
  description:
    "İletişim sayfası. Telefon: 0212 XXX XX XX, WhatsApp: 0532 XXX XX XX, Email: info@istanbulendustriyelmutfakservisi.com. 24/7 acil destek hizmetleri.",
  keywords: [
    "iletişim",
    "endüstriyel mutfak servisi",
    "İstanbul",
    "telefon",
    "WhatsApp",
    "email",
  ],
  openGraph: {
    title: "İletişim | İstanbul Endüstriyel Mutfak Servisi",
    description:
      "24/7 acil destek için bizimle iletişime geçin. Telefon, WhatsApp, email ve iletişim formu ile hizmetinize hazırız.",
    url: "https://www.example.com/iletisim",
    siteName: "İstanbul Endüstriyel Mutfak Servisi",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.example.com/iletisim",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "İletişim" },
            ]}
          />
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            İletişim
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Endüstriyel mutfak ekipmanlarınız için profesyonel destek
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                İletişim Bilgileri
              </h2>

              {/* Phone */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Telefon
                </h3>
                <a
                  href="tel:02121234567"
                  className="text-orange-600 hover:text-orange-700 text-lg font-semibold transition-colors"
                >
                  0212 XXX XX XX
                </a>
                <p className="text-slate-600 text-sm mt-2">
                  Pazartesi - Cumartesi: 08:00 - 19:00
                </p>
              </div>

              {/* WhatsApp */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/905321234567?text=Merhaba%2C%20endüstriyel%20mutfak%20ekipmanlarım%20için%20servis%20hizmeti%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 text-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.393-1.476-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.962 1.484c-1.53.857-2.854 2.035-3.809 3.424-.955 1.389-1.464 2.961-1.489 4.614-.024 1.652.424 3.269 1.313 4.67l-.738 2.701 2.758-.911c1.329.743 2.848 1.135 4.443 1.158h.004c2.657 0 5.159-1.064 7.041-2.993 1.881-1.929 2.93-4.541 2.93-7.291 0-1.952-.471-3.83-1.363-5.464-.893-1.635-2.173-3.038-3.768-4.107-1.595-.97-3.393-1.504-5.287-1.528zm9.773 5.441c-.894 1.728-2.216 3.236-3.885 4.33-1.669 1.093-3.631 1.775-5.703 1.799-1.624.017-3.212-.383-4.61-1.165l-2.04.673.748-2.738c-.961-1.348-1.492-2.953-1.468-4.608.023-1.655.51-3.227 1.413-4.596.902-1.369 2.186-2.559 3.757-3.37 1.57-.81 3.343-1.246 5.19-1.246 1.899 0 3.744.436 5.313 1.265 1.568.83 2.928 2.02 3.836 3.388.908 1.368 1.399 2.944 1.376 4.599-.024 1.655-.518 3.227-1.433 4.596z" />
                  </svg>
                  0532 XXX XX XX
                </a>
                <p className="text-slate-600 text-sm mt-2">
                  7/24 hızlı yanıt için tercih edin
                </p>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  E-Posta
                </h3>
                <a
                  href="mailto:info@istanbulendustriyelmutfakservisi.com"
                  className="text-slate-600 hover:text-orange-600 transition-colors"
                >
                  info@istanbulendustriyelmutfakservisi.com
                </a>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Adres
                </h3>
                <p className="text-slate-600">
                  İstanbul, Türkiye
                  <br />
                  Hizmet Alanı: İstanbul'un tüm 39 ilçesi
                </p>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Çalışma Saatleri
                </h3>
                <p className="text-slate-600">
                  <strong>Pazartesi - Cumartesi:</strong> 08:00 - 19:00
                  <br />
                  <strong>Pazar & Tatiller:</strong> Acil Servis (24/7)
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Bize Mesaj Gönderin
                </h2>
                <p className="text-slate-600 mb-8">
                  Formu doldurun, en kısa sürede sizinle iletişime geçilecektir.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Hizmet Alanımız
          </h2>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg h-96 md:h-96 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <p className="text-lg font-semibold mb-2">
                İstanbul'un tüm 39 ilçesine hizmet vermekteyiz
              </p>
              <p className="text-sm">
                Merkez ilçelerde 1-2 saat, çevre ilçelerde 2-4 saat içinde müdahale
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Başlıca Hizmet Alanları
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Kadıköy",
                "Ümraniye",
                "Beşiktaş",
                "Şişli",
                "Bakırköy",
                "Pendik",
                "Maltepe",
                "Kartal",
                "Bağcılar",
                "Bahçelievler",
                "Fatih",
                "Beyoğlu",
                "Sarıyer",
                "Çiftlik",
                "Güngören",
              ].map((area) => (
                <div key={area} className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-slate-700 font-medium">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Müdahale Süreleri
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Merkez İlçeler</h3>
              <p className="text-lg">
                <strong>1-2 Saat</strong>
              </p>
              <p className="text-orange-100 text-sm mt-2">
                Kadıköy, Şişli, Beşiktaş, Bakırköy ve benzeri merkez
                ilçelerde 1-2 saat içinde hizmetinize ulaşıyoruz.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Çevre İlçeler</h3>
              <p className="text-lg">
                <strong>2-4 Saat</strong>
              </p>
              <p className="text-slate-300 text-sm mt-2">
                Pendik, Ümraniye, Maltepe, Bağcılar gibi çevre ilçelerde 2-4 saat
                içinde ekibimiz bulunmaktadır.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-slate-50 border-l-4 border-blue-600 p-6 rounded">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Acil Durumlarda
            </h3>
            <p className="text-slate-700">
              Gaz kaçağı, bozuk ocak gibi kritik sorunlar için 24 saat içinde
              hizmet sunmaktayız. Acil durumlarda anında destek almak için
              telefon veya WhatsApp'tan bizi arayınız.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Acil müdahale ne kadar para tutar?
              </h3>
              <p className="text-slate-600">
                Acil müdahale ücreti, yapılan işe ve kullanılan yedek parçalara
                göre belirlenmektedir. Elektrikçi tekniklerimiz yazılı bir
                fiyat teklifi sunmakta, sizin onayınızdan sonra işleme başlamaktadırlar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Onarımın garantisi ne kadardır?
              </h3>
              <p className="text-slate-600">
                Yapılan tüm onarımlar aynı yedek parçaya karşı 6 ay garantili
                olup, işçilik garantisi de sunulmaktadır. Garantili dönem
                içinde aynı sorunlar tekrarlanırsa, tamamen ücretsiz olarak
                bakım ve onarım hizmetleri verilmektedir.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Hangi markaların servisini yapıyorsunuz?
              </h3>
              <p className="text-slate-600">
                Elektrolüx, Empero, İnoksan, Öztiryakiler, Kayalar Mutfak, Vital,
                Pimak ve diğer dünyaca ünlü markaları dahil olmak üzere, 24
                markanın servisini sunmaktayız. Hizmet verdiğimiz markaların tam
                listesi için bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Bölgeme hizmet vermekte misiniz?
              </h3>
              <p className="text-slate-600">
                İstanbul'un 39 ilçesinin tamamında hizmet sunmaktayız. Kadıköy,
                Ümraniye, Beşiktaş, Şişli, Bakırköy gibi merkez ilçelerde hızlı
                müdahale yapılmakta, diğer bölgelerdeki işletmeleriniz için de
                profesyonel destek sağlanmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup - LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "İstanbul Endüstriyel Mutfak Servisi",
            image: "https://www.example.com/logo.png",
            description:
              "İstanbul'da endüstriyel mutfak ekipmanları servis ve bakımı. Ocak, fırın, izgara, fritöz, buzdolabı onarımı. Aynı gün servis, orijinal yedek parçalar, 6 ay garantili hizmet.",
            telephone: "0212 XXX XX XX",
            email: "info@istanbulendustriyelmutfakservisi.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "İstanbul",
              addressCountry: "TR",
              addressRegion: "İstanbul",
            },
            areaServed: {
              "@type": "City",
              name: "İstanbul",
            },
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "00:00",
                closes: "23:59",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150",
            },
          }),
        }}
      />
    </main>
  );
}
