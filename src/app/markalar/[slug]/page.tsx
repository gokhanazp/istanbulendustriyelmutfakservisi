import { Metadata } from "next";
import { brands } from "@/data/brands";
import { services } from "@/data/services";
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
  Award,
  Phone,
  MessageCircle,
  ChevronRight,
  Flame,
  Utensils,
  Droplet,
  Soup,
  Droplets,
  Snowflake,
  AlertTriangle,
  Wind,
  Wrench,
  Settings,
  FileText,
  ThumbsUp,
  MapPin,
} from "lucide-react";

interface BrandDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata(
  props: BrandDetailPageProps
): Promise<Metadata> {
  const params = await props.params;
  const brand = brands.find((b) => b.slug === params.slug);

  if (!brand) {
    return { title: "Marka Bulunamadı" };
  }

  return {
    title: `${brand.name} Servisi - İstanbul | Endüstriyel Mutfak Servisi`,
    description: brand.description,
    keywords: [
      brand.name,
      `${brand.name} servisi`,
      "Endüstriyel mutfak servisi",
      "İstanbul",
      "Marka servis",
    ],
    openGraph: {
      title: `${brand.name} Servisi - İstanbul | Endüstriyel Mutfak Servisi`,
      description: brand.description,
      url: `https://istanbulendustriyelmutfakservisi.com/markalar/${brand.slug}`,
      siteName: "İstanbul Endüstriyel Mutfak Servisi",
      locale: "tr_TR",
      type: "website",
    },
    alternates: {
      canonical: `https://istanbulendustriyelmutfakservisi.com/markalar/${brand.slug}`,
    },
  };
}

const iconMap: Record<string, React.ReactNode> = {
  flame: <Flame className="w-5 h-5" />,
  fire: <Flame className="w-5 h-5" />,
  utensils: <Utensils className="w-5 h-5" />,
  droplet: <Droplet className="w-5 h-5" />,
  soup: <Soup className="w-5 h-5" />,
  droplets: <Droplets className="w-5 h-5" />,
  snowflake: <Snowflake className="w-5 h-5" />,
  "alert-triangle": <AlertTriangle className="w-5 h-5" />,
  wind: <Wind className="w-5 h-5" />,
  wrench: <Wrench className="w-5 h-5" />,
};

const categoryGradients: Record<string, string> = {
  pisirme: "from-orange-400 to-orange-600",
  sogutma: "from-blue-400 to-blue-600",
  yikama: "from-cyan-400 to-cyan-600",
  gaz: "from-red-400 to-red-600",
  diger: "from-slate-400 to-slate-600",
};

export default async function BrandDetailPage(props: BrandDetailPageProps) {
  const params = await props.params;
  const brand = brands.find((b) => b.slug === params.slug);

  if (!brand) {
    return (
      <div className="min-h-screen bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Marka Bulunamadı
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Aradığınız marka sayfası bulunamadı. Lütfen markalar sayfasına
            dönüp tekrar deneyin.
          </p>
          <Link
            href="/markalar"
            className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Markalara Dön
          </Link>
        </div>
      </div>
    );
  }

  const brandIndex = brands.indexOf(brand);

  // Get services offered by this brand
  const brandServices = services.filter((service) => {
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
    return brand.services.includes(mappedId);
  });

  // Get other brands for "other brands" section
  const otherBrands = brands
    .filter((b) => b.id !== brand.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Sertifikalı Teknisyenler",
      description: `${brand.name} markalı ekipmanların servisi konusunda eğitimli ve deneyimli teknisyenler.`,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Acil Destek",
      description:
        "İşletmeniz durduğunda, 24 saat içinde müdahale edebilecek acil servis hattımız hizmetinizde.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Orijinal Yedek Parçalar",
      description: `${brand.name} markalı ekipmanlar için orijinal sertifikalı yedek parçalar temin edip kullanırız.`,
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "6 Ay Garantili Hizmet",
      description:
        "Tüm onarım işlemleri 6 ay garanti ve profesyonel işçilik garantisi ile yapılır.",
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
              { label: "Markalar", href: "/markalar" },
              { label: `${brand.name} Servisi` },
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
                  YETKİLİ SERVİS
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                {brand.name}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                  Servisi - İstanbul
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
                {brand.name} markalı endüstriyel mutfak ekipmanlarının
                profesyonel bakım, onarım ve acil servis hizmetleri.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+902121234567"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/905001234567"
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
                  <BrandLogo name={brand.name} index={brandIndex} size={160} logo={brand.logo} logoDark={brand.logoDark} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            <div className="flex items-center justify-center gap-3 py-6">
              <Wrench className="w-6 h-6 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  {brandServices.length}
                </div>
                <div className="text-xs md:text-sm text-slate-500">
                  Hizmet Türü
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-6">
              <Clock className="w-6 h-6 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-slate-500">
                  Acil Destek
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-6">
              <Shield className="w-6 h-6 text-orange-600 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  6 Ay
                </div>
                <div className="text-xs md:text-sm text-slate-500">
                  Garanti
                </div>
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

      {/* Brand Description + Sidebar */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                {brand.name} Hakkında
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {brand.description}
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  İstanbul genelinde {brand.name} markalı tüm ekipmanlarınız
                  için acil ve periyodik servis hizmeti sunmaktayız. Deneyimli
                  teknisyenlerimiz, orijinal yedek parçalar ve profesyonel
                  çalışma tarzımız sayesinde ekipmanlarınızın optimal
                  performansını sürdürmenizi sağlarız.
                </p>
              </div>

              {/* Why Choose Us - inline */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center flex-shrink-0 group-hover:from-orange-200 group-hover:to-orange-100 transition-colors">
                        <div className="text-orange-600">{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Brand Card */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 text-center">
                <div className="flex justify-center mb-4">
                  <BrandLogo
                    name={brand.name}
                    index={brandIndex}
                    size={80}
                    logo={brand.logo}
                    logoDark={brand.logoDark}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {brand.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {brandServices.length} hizmet kategorisi
                </p>
                <div className="w-full h-px bg-slate-200 mb-4" />
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Orijinal yedek parça</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>6 ay garanti</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Sertifikalı teknisyen</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Aynı gün müdahale</span>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">
                  Hemen Servis Talep Edin
                </h3>
                <p className="text-slate-300 text-sm mb-5">
                  {brand.name} ekipmanlarınız için profesyonel servis.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+902121234567"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    0212 XXX XX XX
                  </a>
                  <a
                    href="https://wa.me/905001234567"
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

      {/* Services Offered */}
      {brandServices.length > 0 && (
        <section className="py-14 md:py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                <span className="w-2 h-2 bg-orange-600 rounded-full" />
                <span className="text-sm font-semibold text-orange-600 tracking-wide">
                  HİZMETLERİMİZ
                </span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              {brand.name} İçin Sunduğumuz Hizmetler
            </h2>
            <p className="text-slate-600 mb-10 max-w-2xl">
              {brand.name} markalı endüstriyel mutfak ekipmanlarınız için
              sunduğumuz profesyonel servis hizmetleri.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {brandServices.map((service) => {
                const gradient =
                  categoryGradients[service.category] ||
                  categoryGradients.diger;
                return (
                  <Link
                    key={service.id}
                    href={`/hizmetler/${service.slug}`}
                    className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">
                          {iconMap[service.icon] || (
                            <Flame className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center pt-3 border-t border-slate-100">
                      <span className="text-sm font-semibold text-orange-600 flex items-center gap-1">
                        Detaylı Bilgi
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Service Process */}
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
              {brand.name} servis talebinizden teslimata kadar profesyonel süreç
              yönetimi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: <Phone className="w-7 h-7" />,
                title: "İletişim ve Talep",
                description:
                  "Arızanızı detaylı olarak açıklayın, ekipmanınızın markası ve modelini belirtin.",
              },
              {
                step: "02",
                icon: <Settings className="w-7 h-7" />,
                title: "Teknik Değerlendirme",
                description:
                  "Sertifikalı teknisyenimiz ekipmanınızı inceleyerek arızanın kaynağını belirler.",
              },
              {
                step: "03",
                icon: <Wrench className="w-7 h-7" />,
                title: "Onarım ve Bakım",
                description:
                  "Orijinal yedek parçalar kullanarak profesyonelce onarım işlemini gerçekleştirir.",
              },
              {
                step: "04",
                icon: <ThumbsUp className="w-7 h-7" />,
                title: "Garanti ve Teslim",
                description:
                  "6 ay garanti ile işletmenize teslim ederiz ve gelecekteki ihtiyaçlarınız için takip ederiz.",
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
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
                  {brand.name} Servisi Talep Formu
                </h2>
                <p className="text-slate-300">
                  {brand.name} markalı ekipmanlarınız için servis talebinde
                  bulunmak için aşağıdaki formu doldurunuz.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Brands */}
      <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Diğer Markalar
            </h2>
            <Link
              href="/markalar"
              className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors"
            >
              Tüm Markalar
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherBrands.map((otherBrand) => (
              <Link
                key={otherBrand.id}
                href={`/markalar/${otherBrand.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl p-4 hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-3">
                  <BrandLogo
                    name={otherBrand.name}
                    index={brands.indexOf(otherBrand)}
                    size={48}
                    logo={otherBrand.logo}
                    logoDark={otherBrand.logoDark}
                  />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate">
                  {otherBrand.name}
                </h3>
                <span className="text-xs text-slate-400">Servisi</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title={`${brand.name} Servis Hizmeti İçin Hemen İletişime Geçin`}
        description="İstanbul genelinde 7/24 acil müdahale ve periyodik bakım hizmetleri sunmaktayız."
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `${brand.name} Servisi - İstanbul Endüstriyel Mutfak Servisi`,
            description: brand.description,
            url: `https://istanbulendustriyelmutfakservisi.com/markalar/${brand.slug}`,
            serviceArea: {
              "@type": "City",
              name: "İstanbul",
            },
            areaServed: "İstanbul",
            telephone: "0212 XXX XX XX",
            priceRange: "$$",
            knowsAbout: brandServices.map((s) => s.name),
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Ana Sayfa",
                item: "https://istanbulendustriyelmutfakservisi.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Markalar",
                item: "https://istanbulendustriyelmutfakservisi.com/markalar",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `${brand.name} Servisi`,
                item: `https://istanbulendustriyelmutfakservisi.com/markalar/${brand.slug}`,
              },
            ],
          }),
        }}
      />
    </main>
  );
}
