import Link from "next/link";
import { services } from "@/data/services";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const serviceCategories = [
    { label: "Pişirme Ekipmanları", href: "/hizmetler?kategori=pisirme" },
    { label: "Soğutma Ekipmanları", href: "/hizmetler?kategori=sogutma" },
    { label: "Yıkama Ekipmanları", href: "/hizmetler?kategori=yikama" },
    { label: "Gaz Sistemleri", href: "/hizmetler?kategori=gaz" },
    { label: "Diğer Hizmetler", href: "/hizmetler?kategori=diger" },
  ];

  const regions = [
    { label: "Sultanbeyli", href: "/bolgeler/sultanbeyli" },
    { label: "Tuzla", href: "/bolgeler/tuzla" },
    { label: "Küçükçekmece", href: "/bolgeler/kucukcekmece" },
    { label: "Bahçelievler", href: "/bolgeler/bahcelievler" },
    { label: "Zeytinburnu", href: "/bolgeler/zeytinburnu" },
    { label: "Beyoğlu", href: "/bolgeler/beyoglu" },
  ];

  const topBrands = [
    { label: "Elektrolüx", href: "/markalar/elektrolux-servisi" },
    { label: "Frenox", href: "/markalar/frenox-servisi" },
    { label: "Rational", href: "/markalar/rational-servisi" },
    { label: "Zanussi", href: "/markalar/zanussi-servisi" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              İstanbul Endüstriyel Mutfak Servisi
            </h3>
            <p className="text-slate-300 text-sm mb-6">
              İstanbul genelinde endüstriyel mutfak ekipmanları için profesyonel servis ve
              teknik destek hizmetleri sunuyoruz. 7/24 acil müdahale hizmetiyle her zaman
              yanınızdayız.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+905013001981"
                className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">0501 300 19 81</span>
              </a>
              <a
                href="https://wa.me/905013001981"
                className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">0501 300 19 81 (WhatsApp)</span>
              </a>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              {serviceCategories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-slate-300 text-sm hover:text-orange-500 transition-colors"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Hizmet Bölgeleri</h4>
            <ul className="space-y-2">
              {regions.map((region) => (
                <li key={region.href}>
                  <Link
                    href={region.href}
                    className="text-slate-300 text-sm hover:text-orange-500 transition-colors"
                  >
                    {region.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands & Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Markalar & Sayfalar</h4>
            <ul className="space-y-2">
              {topBrands.map((brand) => (
                <li key={brand.href}>
                  <Link
                    href={brand.href}
                    className="text-slate-300 text-sm hover:text-orange-500 transition-colors"
                  >
                    {brand.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-slate-300 text-sm hover:text-orange-500 transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/sss"
                  className="text-slate-300 text-sm hover:text-orange-500 transition-colors"
                >
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-slate-300 text-sm hover:text-orange-500 transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 İstanbul Endüstriyel Mutfak Servisi - Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/gizlilik"
                className="text-slate-400 text-sm hover:text-slate-200 transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/kosullar"
                className="text-slate-400 text-sm hover:text-slate-200 transition-colors"
              >
                Kullanım Koşulları
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800 text-center">
            <a
              href="https://gokhan-yildirim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 text-xs hover:text-orange-400 transition-colors"
            >
              Tasarım ve Geliştirme
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
