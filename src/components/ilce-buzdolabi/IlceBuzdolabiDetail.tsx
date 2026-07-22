import type { Metadata } from "next";
import Link from "next/link";
import type { IlceBuzdolabi } from "@/data/ilce-buzdolabi";
import { ilceBuzdolabiListesi } from "@/data/ilce-buzdolabi";
import { regions } from "@/data/regions";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  buildBreadcrumbSchema,
  canonical,
  SITE_LOGO,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from "@/lib/seo";
import {
  Snowflake,
  Phone,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  MapPin,
  Clock,
  Zap,
  Shield,
  Award,
  Wrench,
  Settings,
  ThumbsUp,
  AlertTriangle,
  Package,
  CheckCircle,
} from "lucide-react";

// İlçe buzdolabı sayfası ile ilgili genel hizmet sayfaları
const relatedServices = [
  { slug: "endustriyel-buzdolabi-servisi", name: "Endüstriyel Buzdolabı Servisi" },
  { slug: "sanayi-tipi-buzdolabi-servisi", name: "Sanayi Tipi Buzdolabı Servisi" },
  { slug: "buzdolabi-servisi", name: "Buzdolabı Servisi" },
  { slug: "buzdolabi-gaz-kacagi-servisi", name: "Buzdolabı Gaz Kaçağı Servisi" },
  { slug: "soguk-oda-servisi", name: "Soğuk Oda Servisi" },
];

const commonSymptoms = [
  "Buzdolabı yeterince soğutmuyor veya hiç soğutmuyor",
  "Aşırı buzlanma ve karlanma",
  "Kompresör sürekli çalışıyor veya hiç çalışmıyor",
  "Soğutucu gaz kaçağı (freon eksilmesi)",
  "Anormal ses, titreşim veya su sızıntısı",
  "Kapı contası bozukluğu ve sıcaklık kaybı",
];

const commonParts = [
  "Kompresör ve marş rölesi",
  "Termostat ve elektronik kart",
  "Fan motoru ve evaporatör",
  "Kondenser ve kurutucu (drayer)",
  "Kapı contası ve menteşe",
  "Soğutucu gaz (R134a, R600a, R404a)",
];

export function buildIlceBuzdolabiMetadata(item: IlceBuzdolabi): Metadata {
  const url = canonical(`/${item.slug}`);
  return {
    title: item.metaTitle,
    description: item.metaDescription,
    keywords: item.keywords,
    openGraph: {
      title: item.metaTitle,
      description: item.metaDescription,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
    },
    alternates: {
      canonical: `/${item.slug}`,
    },
  };
}

export function IlceBuzdolabiDetail({ item }: { item: IlceBuzdolabi }) {
  const url = canonical(`/${item.slug}`);
  const genelBolge = regions.find((r) => r.slug === item.ilceSlug);
  const nearby = item.nearby
    .map((slug) => ilceBuzdolabiListesi.find((i) => i.slug === slug))
    .filter(Boolean) as IlceBuzdolabi[];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Yerinde Arıza Tespiti",
      description: `${item.name}'da buzdolabı tamircisi ekibimiz adresinize gelir, cihazı yerinde inceleyip arızanın kaynağını belirler.`,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Aynı Gün Müdahale",
      description: `${item.name} ve çevresindeki mahallelere 7/24 acil buzdolabı servisi ile hızlı ulaşıyoruz.`,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Orijinal Yedek Parça",
      description:
        "Kompresörden termostata tüm parçalarda orijinal ve sertifikalı ürünler kullanıyoruz.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "6 Ay Garanti",
      description:
        "Tüm buzdolabı tamir işlemleri parça ve işçilik dahil 6 ay garantilidir.",
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
              { label: "Bölgeler", href: "/bolgeler" },
              { label: `${item.name} Buzdolabı Servisi` },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-blue-300 text-sm font-semibold">
                  {item.name.toUpperCase()} · SOĞUTMA SERVİSİ
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                {item.name}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Buzdolabı Servisi
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
                {item.hero}
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
                  href={`https://wa.me/905013001981?text=${encodeURIComponent(
                    `Merhaba, ${item.name}'da buzdolabı servisi/tamiri için yardım almak istiyorum.`
                  )}`}
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
                <div className="relative w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Snowflake className="w-20 h-20 text-white" />
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
                  {item.name}
                </div>
                <div className="text-xs md:text-sm text-slate-500">
                  Tüm Mahalleler
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body + Sidebar */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                {item.name} Buzdolabı Servisi ve Tamiri
              </h2>
              <div className="space-y-4">
                {item.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-lg text-slate-700 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Mahalleler */}
              <div className="mt-10 bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.name} Hizmet Verdiğimiz Mahalleler
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.mahalleler.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

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
                    {commonSymptoms.map((s, i) => (
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
                      Değişimini Yaptığımız Parçalar
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {commonParts.map((p, i) => (
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

              {/* İlgili hizmetler */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  İlgili Buzdolabı Hizmetlerimiz
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/hizmetler/${s.slug}`}
                      className="group flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-md transition-all"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Snowflake className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {s.name}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all ml-auto" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                    <Snowflake className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4">Buzdolabı Servisi</p>
                <div className="w-full h-px bg-slate-200 mb-4" />
                <div className="space-y-2 text-left">
                  {[
                    "Endüstriyel & sanayi tipi",
                    "Gaz dolumu ve kaçak tespiti",
                    "Orijinal yedek parça",
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
                {genelBolge && (
                  <Link
                    href={`/bolgeler/${genelBolge.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    {item.name} tüm mutfak servisleri
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">
                  {item.name} Buzdolabı Servisi Talebi
                </h3>
                <p className="text-slate-300 text-sm mb-5">
                  {item.name}'da buzdolabı arızanız için profesyonel servis ve
                  tamir desteği.
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
                    href={`https://wa.me/905013001981?text=${encodeURIComponent(
                      `Merhaba, ${item.name}'da buzdolabı tamiri için yardım almak istiyorum.`
                    )}`}
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
              {item.name}'da Nasıl Çalışıyoruz?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Buzdolabı servis talebinizden teslimata kadar profesyonel süreç
              yönetimi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: <Phone className="w-7 h-7" />,
                title: "İletişim ve Talep",
                description: `${item.name}'daki adresinizi ve buzdolabınızın arızasını bize bildirin.`,
              },
              {
                step: "02",
                icon: <Settings className="w-7 h-7" />,
                title: "Yerinde Tespit",
                description:
                  "Buzdolabı tamircisi teknisyenimiz cihazı inceleyerek arızayı belirler.",
              },
              {
                step: "03",
                icon: <Wrench className="w-7 h-7" />,
                title: "Onarım & Gaz Dolumu",
                description:
                  "Orijinal parça ve gerektiğinde freon dolumuyla tamir tamamlanır.",
              },
              {
                step: "04",
                icon: <ThumbsUp className="w-7 h-7" />,
                title: "Garanti ve Teslim",
                description:
                  "6 ay garanti ile teslim eder, sonrasında takibini yaparız.",
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
              {item.name} Buzdolabı Servisi — Sıkça Sorulan Sorular
            </h2>
          </div>
          <div className="space-y-4">
            {item.faq.map((f, i) => (
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
                  {item.name} Buzdolabı Servisi Talep Formu
                </h2>
                <p className="text-slate-300">
                  Formu doldurun, {item.name}'daki buzdolabı arızanız için en
                  kısa sürede size dönelim.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby districts */}
      {nearby.length > 0 && (
        <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Yakın İlçelerde Buzdolabı Servisi
            </h2>
            <p className="text-slate-600 mb-8">
              {item.name} çevresindeki ilçelerde de buzdolabı tamiri ve servis
              hizmeti sunuyoruz.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${n.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {n.name}
                    </h3>
                    <p className="text-xs text-slate-500">Buzdolabı Servisi</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABanner
        title={`${item.name} Buzdolabı Servisi İçin Hemen Arayın`}
        description={`${item.name} ve tüm mahallelerinde endüstriyel ve sanayi tipi buzdolabı tamiri için 7/24 acil müdahale.`}
      />

      {/* Schema: Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}/#service`,
            name: `${item.name} Buzdolabı Servisi`,
            description: item.metaDescription,
            url,
            image: SITE_LOGO,
            serviceType:
              "Endüstriyel ve sanayi tipi buzdolabı servisi, tamiri ve gaz dolumu",
            areaServed: {
              "@type": "City",
              name: item.name,
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "İstanbul",
              },
            },
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

      {/* Schema: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${url}/#localbusiness`,
            name: `${item.name} Buzdolabı Servisi - ${SITE_NAME}`,
            description: item.metaDescription,
            url,
            image: SITE_LOGO,
            logo: SITE_LOGO,
            telephone: SITE_PHONE,
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: item.name,
              addressRegion: "İstanbul",
              addressCountry: "TR",
            },
            areaServed: {
              "@type": "City",
              name: item.name,
            },
            parentOrganization: { "@id": `${SITE_URL}/#organization` },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150",
              bestRating: "5",
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
            mainEntity: item.faq.map((f) => ({
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
              { name: "Bölgeler", url: canonical("/bolgeler") },
              { name: `${item.name} Buzdolabı Servisi`, url },
            ])
          ),
        }}
      />
    </main>
  );
}
