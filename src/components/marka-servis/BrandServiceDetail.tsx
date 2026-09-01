import type { Metadata } from "next";
import Link from "next/link";
import type { BrandService } from "@/data/brand-services";
import { getBrandServicesByBrand, hasSeoOverride } from "@/data/brand-services";
import { getBrandServiceContent } from "@/data/brand-service-content";
import { brands } from "@/data/brands";
import { services } from "@/data/services";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { BrandLogo } from "@/components/ui/BrandLogo";
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
  Clock,
  Shield,
  Award,
  Zap,
  Phone,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  Flame,
  Utensils,
  Droplet,
  Snowflake,
  Wrench,
  Settings,
  ThumbsUp,
  AlertTriangle,
  Package,
  MapPin,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  flame: <Flame className="w-7 h-7" />,
  utensils: <Utensils className="w-7 h-7" />,
  droplet: <Droplet className="w-7 h-7" />,
  snowflake: <Snowflake className="w-7 h-7" />,
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

// Ekipman -> ilgili genel hizmet sayfası slug'ı
const equipmentToServiceSlug: Record<string, string> = {
  buzdolabi: "endustriyel-buzdolabi-servisi",
  ocak: "endustriyel-ocak-servisi",
  fritoz: "fritoz-servisi",
  izgara: "izgara-servisi",
  firin: "endustriyel-firin-servisi",
  "bulasik-makinesi": "endustriyel-bulasik-makinesi-servisi",
};

export function buildBrandServiceMetadata(item: BrandService): Metadata {
  return {
    // Docx kaynaklı başlıklar zaten eksiksiz (marka + telefon içeriyor);
    // layout'taki "%s | SITE_NAME" şablonu bunu tekrar etmesin.
    title: hasSeoOverride(item.slug) ? { absolute: item.seoTitle } : item.seoTitle,
    description: item.seoDescription,
    keywords: item.seoKeywords,
    openGraph: {
      title: item.seoTitle,
      description: item.seoDescription,
      url: canonical(item.urlPath),
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
    },
    alternates: {
      canonical: item.urlPath,
    },
  };
}

export function BrandServiceDetail({ item }: { item: BrandService }) {
  const brand = brands.find((b) => b.id === item.brandId);
  const brandIndex = brand ? brands.indexOf(brand) : 0;

  const otherForBrand = getBrandServicesByBrand(item.brandId).filter(
    (bs) => bs.slug !== item.slug
  );

  // Bu sayfaya özel uzun form içerik (varsa şablonun varsayılan metnini geçersiz kılar)
  const content = getBrandServiceContent(item.slug);

  const generalServiceSlug = equipmentToServiceSlug[item.equipment];
  const generalService = services.find((s) => s.slug === generalServiceSlug);

  const faqItems = content && content.faq.length > 0 ? content.faq : item.faq;

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Sertifikalı Teknisyenler",
      description: `${item.brandName} ${item.equipmentLabel.toLowerCase()} servisinde eğitimli ve deneyimli teknisyenler.`,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "7/24 Acil Destek",
      description:
        "Arıza durumunda aynı gün müdahale ve acil servis hattımız hizmetinizde.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Orijinal Yedek Parça",
      description: `${item.brandName} ekipmanlarına uyumlu orijinal ve sertifikalı yedek parçalar.`,
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "6 Ay Garanti",
      description:
        "Tüm onarım işlemleri işçilik ve parça dahil 6 ay garantilidir.",
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
              { label: "Marka Servisleri", href: "/marka-servis" },
              { label: item.name },
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
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6">
                <span className="text-orange-300 text-sm font-semibold">
                  {categoryNames[item.category]} · YETKİLİ SERVİS
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                {item.brandName}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                  {item.equipmentLabel} Servisi
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
                {item.shortDescription}
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
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl scale-110" />
                <div className="relative">
                  <BrandLogo
                    name={item.brandName}
                    index={brandIndex}
                    size={160}
                    logo={brand?.logo}
                    logoDark={brand?.logoDark}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            <div className="flex items-center justify-center gap-3 py-6">
              <Clock className="w-6 h-6 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  7/24
                </div>
                <div className="text-xs md:text-sm text-slate-500">
                  Acil Servis
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-6">
              <Zap className="w-6 h-6 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Aynı Gün
                </div>
                <div className="text-xs md:text-sm text-slate-500">
                  Müdahale
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-6">
              <Shield className="w-6 h-6 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  6 Ay
                </div>
                <div className="text-xs md:text-sm text-slate-500">Garanti</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-6">
              <MapPin className="w-6 h-6 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  39
                </div>
                <div className="text-xs md:text-sm text-slate-500">
                  İlçe Kapsama
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Sidebar */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {content ? (
                <RichContent sections={content.sections} />
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    {item.name} Hakkında
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {item.intro}
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </>
              )}

              {/* Symptoms & Parts */}
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Sık Karşılaşılan Arızalar
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {item.symptoms.map((s, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                      <Package className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Servisini Verdiğimiz Parçalar
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {item.parts.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Why choose us */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {whyChooseUs.map((w, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center flex-shrink-0 group-hover:from-orange-200 group-hover:to-orange-100 transition-colors">
                        <div className="text-orange-600">{w.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                          {w.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {w.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 text-center">
                <div className="flex justify-center mb-4">
                  <BrandLogo
                    name={item.brandName}
                    index={brandIndex}
                    size={80}
                    logo={brand?.logo}
                    logoDark={brand?.logoDark}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {item.brandName}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {item.equipmentLabel} Servisi
                </p>
                <div className="w-full h-px bg-slate-200 mb-4" />
                <div className="space-y-2 text-left">
                  {[
                    "Orijinal yedek parça",
                    "6 ay garanti",
                    "Sertifikalı teknisyen",
                    "Aynı gün müdahale",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                {brand && (
                  <Link
                    href={`/markalar/${brand.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    Tüm {item.brandName} hizmetleri
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">
                  Hemen Servis Talep Edin
                </h3>
                <p className="text-slate-300 text-sm mb-5">
                  {item.brandName} {item.equipmentLabel.toLowerCase()} arızanız
                  için profesyonel servis.
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

      {/* Process */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6">
              <span className="text-orange-300 text-sm font-semibold">
                SERVİS SÜRECİ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nasıl Çalışıyoruz?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {item.brandName} {item.equipmentLabel.toLowerCase()} servis
              talebinizden teslimata kadar profesyonel süreç yönetimi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: <Phone className="w-7 h-7" />,
                title: "İletişim ve Talep",
                description:
                  "Arızanızı açıklayın, ekipmanınızın modelini belirtin.",
              },
              {
                step: "02",
                icon: <Settings className="w-7 h-7" />,
                title: "Teknik Değerlendirme",
                description:
                  "Teknisyenimiz cihazı inceleyerek arızanın kaynağını belirler.",
              },
              {
                step: "03",
                icon: <Wrench className="w-7 h-7" />,
                title: "Onarım ve Bakım",
                description:
                  "Orijinal yedek parçalarla profesyonelce onarım yapılır.",
              },
              {
                step: "04",
                icon: <ThumbsUp className="w-7 h-7" />,
                title: "Garanti ve Teslim",
                description:
                  "6 ay garanti ile teslim eder, sonrasında takip ederiz.",
              },
            ].map((s, i) => (
              <div key={i} className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <div className="text-white">{s.icon}</div>
                    </div>
                    <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              {content
                ? `${item.name} — ${content.faqHeading}`
                : `${item.name} — Sıkça Sorulan Sorular`}
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((f, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-orange-300 transition-colors overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                  <span className="flex-1 pr-4">{f.question}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-slate-600 leading-relaxed">{f.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
            </div>
            <div className="relative p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {item.name} Talep Formu
                </h2>
                <p className="text-slate-300">
                  Formu doldurun, {item.brandName}{" "}
                  {item.equipmentLabel.toLowerCase()} arızanız için en kısa
                  sürede size dönelim.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related: other equipment for this brand + general service */}
      {(otherForBrand.length > 0 || generalService) && (
        <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {otherForBrand.length > 0 && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                  {item.brandName} İçin Diğer Servisler
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {otherForBrand.map((bs) => {
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
                            {iconMap[bs.icon] || <Flame className="w-7 h-7" />}
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
              </>
            )}

            {generalService && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Tüm markalarda {item.equipmentLabel.toLowerCase()} servisi
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {item.equipmentLabel} arıza tespiti, bakım ve onarım
                    hizmetlerimiz hakkında genel bilgi için {generalService.name}{" "}
                    sayfamıza göz atın.
                  </p>
                </div>
                <Link
                  href={`/hizmetler/${generalService.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all whitespace-nowrap"
                >
                  {generalService.name}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABanner
        title={`${item.name} İçin Hemen İletişime Geçin`}
        description="İstanbul genelinde 7/24 acil müdahale ve periyodik bakım hizmetleri sunuyoruz."
      />

      {/* Schema: Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${canonical(item.urlPath)}/#service`,
            name: item.name,
            description: item.seoDescription,
            url: canonical(item.urlPath),
            image: SITE_LOGO,
            serviceType: `${item.brandName} ${item.equipmentLabel} servis ve onarım`,
            brand: { "@type": "Brand", name: item.brandName },
            areaServed: { "@type": "City", name: "İstanbul" },
            provider: {
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              telephone: SITE_PHONE,
              image: SITE_LOGO,
              priceRange: "$$",
            },
          }),
        }}
      />

      {/* Schema: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      {/* Schema: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Ana Sayfa", url: SITE_URL },
              { name: "Marka Servisleri", url: canonical("/marka-servis") },
              { name: item.name, url: canonical(item.urlPath) },
            ])
          ),
        }}
      />
    </main>
  );
}
