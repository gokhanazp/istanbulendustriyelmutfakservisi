import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { services } from "@/data/services";
import {
  Flame,
  Utensils,
  Droplet,
  Soup,
  Droplets,
  Snowflake,
  AlertTriangle,
  Wind,
  Wrench,
  ChevronRight,
  Clock,
  Shield,
  Award,
  Zap,
  CheckCircle,
  Phone,
  FileText,
  Settings,
  ThumbsUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmetler | İstanbul Endüstriyel Mutfak Servisi",
  description:
    "Endüstriyel mutfak servisi hizmetleri. Ocak, fırın, izgara, fritöz, buzdolabı, bulaşık makinesi onarımı ve bakımı. İstanbul'da 24/7 acil destek.",
  keywords: [
    "endüstriyel mutfak servisi",
    "ocak servisi",
    "fırın servisi",
    "buzdolabı servisi",
    "gaz kaçağı tespiti",
    "fritöz servisi",
    "bulaşık makinesi servisi",
    "İstanbul servis",
  ],
  openGraph: {
    title: "Hizmetler | İstanbul Endüstriyel Mutfak Servisi",
    description:
      "Ocak, fırın, izgara, fritöz, buzdolabı onarımı ve bakımı. İstanbul'da 24/7 acil destek.",
    url: "https://istanbulendustriyelmutfakservisi.com/hizmetler",
    siteName: "İstanbul Endüstriyel Mutfak Servisi",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://istanbulendustriyelmutfakservisi.com/hizmetler",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  flame: <Flame className="w-6 h-6" />,
  fire: <Flame className="w-6 h-6" />,
  utensils: <Utensils className="w-6 h-6" />,
  droplet: <Droplet className="w-6 h-6" />,
  soup: <Soup className="w-6 h-6" />,
  droplets: <Droplets className="w-6 h-6" />,
  snowflake: <Snowflake className="w-6 h-6" />,
  "alert-triangle": <AlertTriangle className="w-6 h-6" />,
  wind: <Wind className="w-6 h-6" />,
  wrench: <Wrench className="w-6 h-6" />,
};

const categoryConfig: Record<
  string,
  { name: string; gradient: string; bgLight: string; textColor: string; borderColor: string; badgeBg: string }
> = {
  pisirme: {
    name: "Pişirme Ekipmanları",
    gradient: "from-orange-400 to-orange-600",
    bgLight: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    badgeBg: "bg-orange-100",
  },
  sogutma: {
    name: "Soğutma Sistemleri",
    gradient: "from-blue-400 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    badgeBg: "bg-blue-100",
  },
  yikama: {
    name: "Yıkama ve Temizlik",
    gradient: "from-cyan-400 to-cyan-600",
    bgLight: "bg-cyan-50",
    textColor: "text-cyan-600",
    borderColor: "border-cyan-200",
    badgeBg: "bg-cyan-100",
  },
  gaz: {
    name: "Gaz Sistemleri",
    gradient: "from-red-400 to-red-600",
    bgLight: "bg-red-50",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    badgeBg: "bg-red-100",
  },
  diger: {
    name: "Diğer Hizmetler",
    gradient: "from-slate-400 to-slate-600",
    bgLight: "bg-slate-50",
    textColor: "text-slate-600",
    borderColor: "border-slate-200",
    badgeBg: "bg-slate-100",
  },
};

interface ServiceCategory {
  id: string;
  config: (typeof categoryConfig)[string];
  services: typeof services;
}

export default function ServicesPage() {
  const categories: ServiceCategory[] = [
    { id: "pisirme", config: categoryConfig.pisirme, services: services.filter((s) => s.category === "pisirme") },
    { id: "sogutma", config: categoryConfig.sogutma, services: services.filter((s) => s.category === "sogutma") },
    { id: "yikama", config: categoryConfig.yikama, services: services.filter((s) => s.category === "yikama") },
    { id: "gaz", config: categoryConfig.gaz, services: services.filter((s) => s.category === "gaz") },
    { id: "diger", config: categoryConfig.diger, services: services.filter((s) => s.category === "diger") },
  ].filter((cat) => cat.services.length > 0);

  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hizmetler" },
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
            <Wrench className="w-4 h-4 text-orange-300" />
            <span className="text-orange-300 text-sm font-semibold">19 HİZMET KATEGORİSİ</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Endüstriyel Mutfak
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Servis Hizmetlerimiz
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Tüm endüstriyel mutfak ekipmanlarının bakım, onarım ve acil destek
            hizmetleri. 15+ yıllık tecrübe ile profesyonel çözümler.
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            <div className="flex items-center justify-center gap-3 py-6">
              <Award className="w-7 h-7 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">19</div>
                <div className="text-xs md:text-sm text-slate-500">Hizmet Türü</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-6">
              <Clock className="w-7 h-7 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">24/7</div>
                <div className="text-xs md:text-sm text-slate-500">Acil Destek</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-6">
              <Shield className="w-7 h-7 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">6 Ay</div>
                <div className="text-xs md:text-sm text-slate-500">Garanti</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-6">
              <Zap className="w-7 h-7 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">1-2 Saat</div>
                <div className="text-xs md:text-sm text-slate-500">Müdahale Süresi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((category, catIndex) => (
        <section
          key={category.id}
          className={catIndex % 2 === 0 ? "py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white" : "py-16 md:py-24 bg-white"}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-10">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.config.gradient} flex items-center justify-center`}>
                <div className="text-white">
                  {category.id === "pisirme" && <Flame className="w-6 h-6" />}
                  {category.id === "sogutma" && <Snowflake className="w-6 h-6" />}
                  {category.id === "yikama" && <Droplet className="w-6 h-6" />}
                  {category.id === "gaz" && <AlertTriangle className="w-6 h-6" />}
                  {category.id === "diger" && <Wrench className="w-6 h-6" />}
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {category.config.name}
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">{category.services.length} hizmet</p>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.services.map((service) => (
                <Link
                  key={service.id}
                  href={`/hizmetler/${service.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.config.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {iconMap[service.icon] || <Flame className="w-6 h-6" />}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                        {service.name}
                      </h3>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${category.config.textColor} ${category.config.badgeBg} px-2.5 py-0.5 rounded-full mt-1.5`}>
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.config.gradient}`} />
                        {category.config.name}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-sm font-semibold text-orange-600 group-hover:gap-2 transition-all flex items-center gap-1">
                      Detaylı Bilgi
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6">
              <span className="text-orange-300 text-sm font-semibold">AVANTAJLARIMIZ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hizmetlerimizin Farkı
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Endüstriyel mutfak servisinde fark yaratan profesyonel hizmet anlayışımız
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock className="w-7 h-7" />,
                title: "24/7 Acil Destek",
                description: "Gece, gündüz, hafta sonu veya tatil günü; acil durumlarda her zaman hizmetinize hazırız.",
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Aynı Gün Müdahale",
                description: "Merkez ilçelerde 1-2 saat, çevre ilçelerde 2-4 saat içinde ekibimiz ulaşmaktadır.",
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: "Orijinal Yedek Parçalar",
                description: "Tüm onarımlarda orijinal yedek parçalar kullanarak kalite garantisini sağlıyoruz.",
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: "6 Ay Garantili Hizmet",
                description: "Yaptığımız tüm onarımlar aynı yedek parçaya karşı 6 ay garantili ve işçilik garantisine sahiptir.",
              },
              {
                icon: <CheckCircle className="w-7 h-7" />,
                title: "Sertifikalı Teknisyenler",
                description: "Tüm teknisyenlerimiz endüstriyel mutfak servisinde sertifikalı olup düzenli eğitim almaktadırlar.",
              },
              {
                icon: <FileText className="w-7 h-7" />,
                title: "Bakım Kontratları",
                description: "Aylık, üç aylık veya yıllık periyotlarla bakım kontratları sunmaktayız.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-5">
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-600 rounded-full" />
              <span className="text-sm font-semibold text-orange-600 tracking-wide">SERVİS SÜRECİ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Nasıl Çalışıyoruz?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Servis talebinizden teslimata kadar şeffaf ve profesyonel süreç yönetimi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: <Phone className="w-7 h-7" />,
                title: "Başvuru Alımı",
                description: "Telefon, SMS veya WhatsApp üzerinden servis talebinizi alıyoruz. Acil durumlar için anında destek sağlıyoruz.",
              },
              {
                step: "02",
                icon: <Settings className="w-7 h-7" />,
                title: "Teknik Muayene",
                description: "Ekibimiz tesisinize gelip ekipmanın sorununu tespit edip yazılı bir fiyat teklifi hazırlıyor.",
              },
              {
                step: "03",
                icon: <Wrench className="w-7 h-7" />,
                title: "Onay ve Onarım",
                description: "Sizin onayınızdan sonra onarım işlemine başlıyoruz. Çoğu işlem aynı gün tamamlanmaktadır.",
              },
              {
                step: "04",
                icon: <ThumbsUp className="w-7 h-7" />,
                title: "Kontrol ve Teslim",
                description: "Onarım tamamlandıktan sonra tüm sistemleri test edip size teslim ediyoruz. Garantili ve sertifikalı.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-100 transition-colors">
                      <div className="text-orange-600">{item.icon}</div>
                    </div>
                    <span className="text-4xl font-black text-slate-100 group-hover:text-orange-100 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Endüstriyel Mutfak Ekipmanlarınız İçin Profesyonel Servis"
        description="Hangi hizmete ihtiyaç duyarsanız, biz İstanbul'da 24/7 acil destek için hazırız."
      />

      {/* SEO Content Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Endüstriyel Mutfak Servisi Hakkında
          </h2>

          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              Endüstriyel mutfak ekipmanları, restoran, otel, kafe ve gıda
              işletmelerinin kalbi sayılabilir. Bu ekipmanların herhangi bir
              sorunla karşılaşması, işletmelerin operasyonlarını kesintiye
              uğratabilir ve önemli finansal zararlar meydana getirebilir.
            </p>
            <p>
              Endüstriyel mutfak ekipmanları, ev kullanım ürünleri gibi değildir.
              Bu ekipmanlar, gün boyunca yoğun kullanıma dayanacak şekilde tasarlanmış
              ve özel teknik bilgi gerektirmektedir. Yanlış servis, ekipmanın daha
              büyük hasara uğramasına neden olabilir. 15 yılı aşkın deneyimimizle,
              19 farklı hizmet kategorisinde profesyonel bakım ve onarım hizmeti
              sunmaktayız.
            </p>
            <p>
              Tüm onarım hizmetlerimizde orijinal yedek parçalar kullanmakta
              ve 6 ay garantili hizmet sunmaktayız. Garantili dönem içinde aynı
              sorunlar tekrarlanırsa, tamamen ücretsiz olarak bakım ve onarım
              hizmetleri verilmektedir. İstanbul&apos;un 39 ilçesinde aynı gün
              müdahale garantisi ile yanınızdayız.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
