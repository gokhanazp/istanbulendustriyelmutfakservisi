import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Hakkımızda | İstanbul Endüstriyel Mutfak Servisi",
  description:
    "İstanbul Endüstriyel Mutfak Servisi hakkında. 15+ yıl deneyim, 500+ müşteri, profesyonel ekip ve 24/7 acil destek hizmetleri.",
  keywords: [
    "hakkımızda",
    "endüstriyel mutfak servisi",
    "İstanbul",
    "deneyim",
    "müşteri memnuniyeti",
    "profesyonel servis",
  ],
  openGraph: {
    title: "Hakkımızda | İstanbul Endüstriyel Mutfak Servisi",
    description:
      "15+ yıl deneyim, 500+ müşteri, profesyonel ekip ve 24/7 acil destek hizmetleri",
    url: "https://www.example.com/hakkimizda",
    siteName: "İstanbul Endüstriyel Mutfak Servisi",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.example.com/hakkimizda",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hakkımızda" },
            ]}
          />
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hakkımızda
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            İstanbul'un endüstriyel mutfak servisi alanında en güvenilir adı
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Kişisel Hikayemiz
          </h2>

          <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
            <p>
              İstanbul Endüstriyel Mutfak Servisi, 2009 yılından bu yana
              İstanbul'un tüm bölgelerinde endüstriyel mutfak ekipmanları
              servisinde profesyonel hizmet sunmaktadır. 15 yılı aşkın
              deneyimimiz, binlerce memnun müşteri ve sayısız başarılı proje
              ile desteklenmektedir.
            </p>

            <p>
              Şirketimiz, çok sayıda lokantanın, otel mutfağının, catering
              şirketinin ve gıda işletmesinin ihtiyaçlarını karşılamak için
              profesyonel bir ekip ile çalışmaktadır. Teknoloji ve insan gücünü
              bir araya getirerek, her müşterinin benzersiz ihtiyaçlarına
              uyarlanmış çözümler sunmaktayız.
            </p>

            <p>
              Endüstriyel mutfak ekipmanlarının bakım ve onarımı kritik bir
              iştir. İşletmelerin hiç durmayan operasyonları, ekipman arızalarını
              tolere edemez. Bu nedenle, biz 24/7 acil destek hizmetleri
              sunarak, acil durumlarda en kısa sürede müdahale etmekteyiz.
            </p>

            <p>
              Orijinal yedek parçalar kullanarak, tüm onarımlarımızda 6 ay
              garantisi sunmaktayız. Müşterilerimizin işletmelerinin kesintisiz
              çalışmasını sağlamak, bize verilen en önemli sorumluluktur.
            </p>

            <p>
              15+ yıl boyunca, 24 farklı markanın endüstriyel mutfak
              ekipmanlarının servisini yapmış, 500+ işletmemizin güvenini
              kazanmışız. Her gün, İstanbul'un her köşesinde, müşterilerimizin
              operasyonlarını kesintisiz hale getirmek için çalışmaktayız.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Misyonumuz
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                İstanbul'da endüstriyel mutfak ekipmanlarının bakım ve onarımında
                mükemmellik sunmak, müşterilerimizin işletmelerinin kesintisiz
                çalışmasını garantilemek ve gıda güvenliği standartlarını
                korumaktır. Her müşterimizi, ailemizin bir üyesi olarak
                görmekteyiz ve onların başarısı, bizim başarısıdır.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Vizyonumuz
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                İstanbul'da endüstriyel mutfak servisi alanında en güvenilir,
                en hızlı ve en profesyonel servis sağlayıcı olmak. Teknolojiye
                yatırım yaparak, eğitimli ekiplerimiz ile her zaman müşterilerimizin
                yanında olmak ve sektörde yeni standartlar belirlemektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
            Başarı Göstergeleri
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-8 mb-4">
                <p className="text-4xl font-bold text-white">15+</p>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Yıl Deneyim
              </h3>
              <p className="text-slate-600 mt-2">
                Alanında en deneyimli ekiplerden biri
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 mb-4">
                <p className="text-4xl font-bold text-white">500+</p>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Memnun Müşteri
              </h3>
              <p className="text-slate-600 mt-2">
                İstanbul'un her bölgesinde güvenilir servis
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 mb-4">
                <p className="text-4xl font-bold text-white">24</p>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Marka Servisi
              </h3>
              <p className="text-slate-600 mt-2">
                Dünyaca ünlü markaların servisini yapıyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-8 mb-4">
                <p className="text-4xl font-bold text-white">39</p>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                İlçede Hizmet
              </h3>
              <p className="text-slate-600 mt-2">
                İstanbul'un tüm bölgelerine hizmet veriyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
            Temel Değerlerimiz
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-orange-300 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Güvenilirlik
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Müşterilerimizin bize verdiği güven, en kıymetli varlığımızdır.
                Her sözümüzü tutmak, her taahhütü yerine getirmek bizim için
                temel ilkedir. 15 yıl boyunca bu güveni korumak, bizim en büyük
                gururudur.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-orange-300 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Hız ve Verimlilik
              </h3>
              <p className="text-slate-700 leading-relaxed">
                İşletmelerin her saati önemlidir. Acil durumlarda 1-4 saat
                içinde müdahale etmek, sorunları hızlı çözmek, işletmelerimizin
                operasyonlarını kesintisiz tutmak bizim görevimizdir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-orange-300 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Kalite
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Orijinal yedek parçalar, sertifikalı teknisyenler ve 6 ay
                garantili hizmet. Kaliteniz, bizim standartımızdır. Her işi
                en iyi şekilde yapma taahhütü veriyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-orange-300 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Müşteri Memnuniyeti
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Müşterimizin başarısı, bizim başarısıdır. Her müşteri için özel
                çözümler geliştirmek, beklentileri aşmak ve uzun vadeli ilişkiler
                kurmak bizim hedefimizdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Profesyonel Ekibimiz
          </h2>

          <div className="bg-slate-50 p-8 md:p-12 rounded-lg border border-slate-200">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              İstanbul Endüstriyel Mutfak Servisi'nin gücü, bilgili, deneyimli
              ve müşteri odaklı teknisyenleri ve operatörlerinden gelmektedir.
              Her bir ekip üyesi, endüstriyel mutfak ekipmanlarının servisinde
              yoğun eğitim almış ve sertifikalıdır.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-orange-600 text-3xl flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Sertifikalı Teknisyenler
                  </h4>
                  <p className="text-slate-600">
                    Gaz sistemi, elektrik ve mekanik servisinde sertifikalı
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-orange-600 text-3xl flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Düzenli Eğitim
                  </h4>
                  <p className="text-slate-600">
                    Her yıl teknisyenlerimiz yeni teknolojiler hakkında eğitim
                    alırlar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-orange-600 text-3xl flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    İşletme Bilgisi
                  </h4>
                  <p className="text-slate-600">
                    Lokanta, otel ve gıda işletmelerinin operasyonlarını
                    anlarız
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-orange-600 text-3xl flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    24/7 Müdahale
                  </h4>
                  <p className="text-slate-600">
                    Acil durumlarda gece, gündüz, hafta sonu hep hazırız
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Endüstriyel Mutfak Ekipmanlarınız İçin Profesyonel Destek"
        description="15 yıl deneyim, 500+ memnun müşteri, 24/7 acil destek hizmetleriyle yanınızdayız"
      />

      {/* SEO Content Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Neden İstanbul Endüstriyel Mutfak Servisi'ni Seçmeliyiz?
          </h2>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              İstanbul'da endüstriyel mutfak servisi alanında en uzun süredir
              hizmet veren şirketlerden biri olarak, müşterilerimizin tam
              güvenini kazanmışız. Her gün, çeşitli işletmelerin kritik
              ekipmanlarının bakım ve onarımını yaparak, işletmelerin
              operasyonlarını kesintisiz tutmaktayız.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Geniş Hizmet Yelpazesi
            </h3>
            <p>
              Ocak, fırın, izgara, fritöz, makarna haşlama, benmari, buzdolabı,
              bulaşık makinesi, gaz kaçağı tespiti gibi tüm endüstriyel mutfak
              ekipmanlarının servisini yapıyoruz. Elektrolüx, Empero, İnoksan,
              Öztiryakiler, Kayalar Mutfak, Vital, Pimak ve diğer 24 marka
              dahil olmak üzere, çoğu markanın servisini sunmaktayız.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Acil Müdahale ve Destek
            </h3>
            <p>
              Gaz kaçağı, bozuk ocak gibi kritik sorunlar için 24 saat içinde
              hizmet sunmaktayız. İstanbul'un merkez ilçelerine 1-2 saat içinde,
              çevre ilçelerine ise 2-4 saat içinde hizmet ekibimiz ulaşabilmektedir.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Orijinal Yedek Parçalar ve Garantisi
            </h3>
            <p>
              Tüm onarımlarımızda orijinal yedek parçalar kullanarak, 6 ay
              garantili hizmet sunmaktayız. Gizli maliyetler olmaksızın, açık
              ve şeffaf fiyatlandırma politikası uygulamaktayız.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Periyodik Bakım Kontratları
            </h3>
            <p>
              Aylık, üç aylık veya yıllık periyotlarla bakım kontratları
              sunmaktayız. Kontrat kapsamında düzenli bakım, acil servis
              çağrılarında indirim ve orijinal yedek parçaların daha uygun
              fiyata temin edilmesinden faydalanabilirsiniz.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              İstanbul'un Tüm Bölgelerine Hizmet
            </h3>
            <p>
              Kadıköy, Ümraniye, Beşiktaş, Şişli, Bakırköy gibi merkez ilçeler
              ile İstanbul'un tüm 39 ilçesinde profesyonel servis hizmeti
              sunmaktayız. Bulunduğunuz yer ne olursa olsun, biz hizmetinize
              hazırız.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
