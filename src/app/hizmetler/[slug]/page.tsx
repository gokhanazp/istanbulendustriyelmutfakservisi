import { Metadata } from "next";
import { services } from "@/data/services";
import { brands } from "@/data/brands";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ContactForm } from "@/components/forms/ContactForm";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  Shield,
  Zap,
  ChevronRight,
  ChevronDown,
  Award,
  Flame,
  Utensils,
  Droplet,
  Soup,
  Droplets,
  Snowflake,
  AlertTriangle,
  Wind,
  Wrench,
  Phone,
  MessageCircle,
} from "lucide-react";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(
  props: ServiceDetailPageProps
): Promise<Metadata> {
  const params = await props.params;
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return { title: "Hizmet Bulunamadı" };
  }

  return {
    title: `${service.name} | İstanbul Endüstriyel Mutfak Servisi`,
    description: service.shortDescription,
    keywords: [
      service.name,
      "Endüstriyel mutfak servisi",
      "İstanbul",
      service.category,
    ],
    openGraph: {
      title: `${service.name} | İstanbul Endüstriyel Mutfak Servisi`,
      description: service.shortDescription,
      url: `https://istanbulendustriyelmutfakservisi.com/hizmetler/${service.slug}`,
      siteName: "İstanbul Endüstriyel Mutfak Servisi",
      locale: "tr_TR",
      type: "website",
    },
    alternates: {
      canonical: `https://istanbulendustriyelmutfakservisi.com/hizmetler/${service.slug}`,
    },
  };
}

const iconMap: Record<string, React.ReactNode> = {
  flame: <Flame className="w-7 h-7" />,
  fire: <Flame className="w-7 h-7" />,
  utensils: <Utensils className="w-7 h-7" />,
  droplet: <Droplet className="w-7 h-7" />,
  soup: <Soup className="w-7 h-7" />,
  droplets: <Droplets className="w-7 h-7" />,
  snowflake: <Snowflake className="w-7 h-7" />,
  "alert-triangle": <AlertTriangle className="w-7 h-7" />,
  wind: <Wind className="w-7 h-7" />,
  wrench: <Wrench className="w-7 h-7" />,
};

const categoryGradients: Record<string, string> = {
  pisirme: "from-orange-400 to-orange-600",
  sogutma: "from-blue-400 to-blue-600",
  yikama: "from-cyan-400 to-cyan-600",
  gaz: "from-red-400 to-red-600",
  diger: "from-slate-400 to-slate-600",
};

const categoryNames: Record<string, string> = {
  pisirme: "Pişirme Ekipmanları",
  sogutma: "Soğutma Sistemleri",
  yikama: "Yıkama ve Temizlik",
  gaz: "Gaz Sistemleri",
  diger: "Diğer Hizmetler",
};

export default async function ServiceDetailPage(
  props: ServiceDetailPageProps
) {
  const params = await props.params;
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Hizmet Bulunamadı
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Aradığınız hizmet sayfası bulunamadı. Lütfen anasayfaya dönüp
            tekrar deneyin.
          </p>
          <Link
            href="/hizmetler"
            className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Hizmetlere Dön
          </Link>
        </div>
      </div>
    );
  }

  const gradient = categoryGradients[service.category] || categoryGradients.diger;

  // Filter brands that offer this service
  const relatedBrands = brands.filter((brand) =>
    brand.services.some((s) => {
      const serviceIdMapping: Record<string, string> = {
        "endust-ocak": "ocak",
        "endust-firin": "firin",
        izgara: "izgara",
        fritoz: "fritoz",
        "makarna-haslama": "makarna-haslama",
        benmari: "benmari",
        "endust-buzdolabi": "buzdolabi",
        "sanayi-buzdolabi": "buzdolabi",
        "soguk-oda": "soguk-oda",
        "endust-bulasik": "bulasik-makinesi",
        "deterjan-parlatici": "deterjan-pompasi",
        "gaz-kacagi": "gaz-kacagi",
        "dogalgaz-kacagi": "dogalgaz-kacagi",
        "pizza-firini": "firin",
        "konveksiyonel-firin": "firin",
        "yer-ocagi": "ocak",
        "yemekhane-ocagi": "ocak",
        "lokanta-ocagi": "ocak",
        "sanayi-ocak": "ocak",
      };
      const mappedId = serviceIdMapping[service.id] || service.id;
      return s === mappedId;
    })
  );

  // Get related services in same category
  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 4);

  const serviceFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Profesyonel Teknisyenler",
      description: "Endüstriyel mutfak ekipmanlarında sertifikalı ve deneyimli teknisyenler",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "7/24 Acil Destek",
      description: "Arıza durumunda acil müdahale hizmeti ve aynı gün servis garantisi",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Orijinal Yedek Parçalar",
      description: "Tüm işlemlerde orijinal ve sertifikalı yedek parçalar kullanımı",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hızlı ve Etkili Çözümler",
      description: "İşletmenizin verimliliğini maksimuma çıkartmak için hızlı çözümler",
    },
  ];

  const faqItems = [
    {
      question: `${service.name} ne kadar sıklıkta yapılmalıdır?`,
      answer: `${service.name} hizmetinin sıklığı, ekipmanın yoğunluğu ve kullanım koşullarına göre değişir. Genel olarak aylık veya üç aylık periyodik bakım önerilmektedir. İşletmenizin ihtiyaçlarına göre özel bir bakım planı oluşturabilir ve fiyatlandırma yapabiliriz.`,
    },
    {
      question: "Acil durumlarda hizmet almak için ne yapmalıyım?",
      answer: "Acil durumlarda, 0501 300 19 81 numarasını arayarak veya WhatsApp üzerinden iletişime geçebilirsiniz. 24/7 destek hattımız sizin sorunlarınızı en kısa sürede çözmek için hazırdır. Ortalama yanıt süresi 30 dakikadır.",
    },
    {
      question: `${service.name} için garanti süresi nedir?`,
      answer: "Tüm onarım ve bakım işlemleri için 6 ay garanti verilmektedir. Değişen parçalar ve onarılan bileşenlerin işçiliği garantilenmektedir. Yüksek kaliteli işçilik ve orijinal malzemelerin kullanılmasını garanti ediyoruz.",
    },
    {
      question: "Periyodik bakım kontratları sunuyor musunuz?",
      answer: "Evet, işletmenizin ihtiyaçlarına göre aylık, üç aylık veya yıllık bakım kontratları sunmaktayız. Bu kontratlar sayesinde beklenmeyen arızaların oluşumunu minimize edebilir, ekipmanlarınızın daha uzun süre çalışmasını sağlayabilirsiniz.",
    },
  ];

  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hizmetler", href: "/hizmetler" },
              { label: service.name },
            ]}
          />
        </div>
      </section>

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6">
                <span className="text-orange-300 text-sm font-semibold">
                  {categoryNames[service.category] || "Hizmet"}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                {service.name}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
                {service.shortDescription}
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
            <div className="hidden lg:flex justify-center">
              <div className={`w-36 h-36 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl`}>
                <div className="text-white scale-[2]">
                  {iconMap[service.icon] || <Flame className="w-7 h-7" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Hizmet Detayları
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  İstanbul Endüstriyel Mutfak Servisi olarak, işletmenizin tüm
                  ihtiyaçlarını karşılamak için kapsamlı {service.name.toLowerCase()} hizmetleri
                  sunmaktayız. Ekipmanlarınızın verimli ve güvenli şekilde çalışması
                  için düzenli bakım ve gerektiğinde acil onarım hizmetlerinden
                  faydalanabilirsiniz.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {serviceFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center flex-shrink-0 group-hover:from-orange-200 group-hover:to-orange-100 transition-colors">
                        <div className="text-orange-600">{feature.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Hızlı Bilgi</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Müdahale Süresi</div>
                      <div className="text-sm font-bold text-slate-900">1-2 Saat (Merkez)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Garanti Süresi</div>
                      <div className="text-sm font-bold text-slate-900">6 Ay</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Yedek Parça</div>
                      <div className="text-sm font-bold text-slate-900">%100 Orijinal</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Destek</div>
                      <div className="text-sm font-bold text-slate-900">7/24 Acil Servis</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">
                  Hemen Servis Talep Edin
                </h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* Related Brands */}
      {relatedBrands.length > 0 && (
        <section className="py-14 md:py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                <span className="w-2 h-2 bg-orange-600 rounded-full" />
                <span className="text-sm font-semibold text-orange-600 tracking-wide">MARKALAR</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Bu Hizmeti Sunduğumuz Markalar
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedBrands.map((brand, index) => (
                <Link
                  key={brand.id}
                  href={`/markalar/${brand.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
                >
                  <BrandLogo name={brand.name} index={brands.indexOf(brand)} size={48} logo={brand.logo} logoDark={brand.logoDark} />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate">
                      {brand.name}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {brand.services.length} hizmet
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              İlgili Hizmetler
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedServices.map((relatedService) => {
                const relGradient = categoryGradients[relatedService.category] || categoryGradients.diger;
                return (
                  <Link
                    key={relatedService.id}
                    href={`/hizmetler/${relatedService.slug}`}
                    className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${relGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {iconMap[relatedService.icon] || <Flame className="w-7 h-7" />}
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {relatedService.name}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                      {relatedService.shortDescription}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-600 rounded-full" />
              <span className="text-sm font-semibold text-orange-600 tracking-wide">SSS</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
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

      {/* Contact Form Section */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
            </div>
            <div className="relative p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {service.name} Talep Formu
                </h2>
                <p className="text-slate-300">
                  Aşağıdaki formu doldurup gönderdiğinizde, en kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title={`${service.name} İçin Hemen Servis Talep Edin`}
        description="7/24 acil müdahale hizmetiyle işletmenizin ekipmanlarını hızlı ve güvenilir şekilde onarıyoruz."
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            areaServed: {
              "@type": "City",
              name: "İstanbul",
            },
            provider: {
              "@type": "Organization",
              name: "İstanbul Endüstriyel Mutfak Servisi",
              url: "https://istanbulendustriyelmutfakservisi.com",
            },
            serviceType: service.name,
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
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
