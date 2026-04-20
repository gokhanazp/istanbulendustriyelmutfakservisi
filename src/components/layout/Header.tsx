"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, MessageCircle, Clock, MapPin } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories = [
    {
      label: "Pişirme Ekipmanları",
      items: [
        { name: "Endüstriyel Ocak Servisi", href: "/hizmetler/endustriyel-ocak-servisi" },
        { name: "Endüstriyel Fırın Servisi", href: "/hizmetler/endustriyel-firin-servisi" },
        { name: "Yemekhane Ocağı Servisi", href: "/hizmetler/yemekhane-ocagi-servisi" },
        { name: "Lokanta Ocağı Servisi", href: "/hizmetler/lokanta-ocagi-servisi" },
        { name: "Yer Ocağı Servisi", href: "/hizmetler/yer-ocagi-servisi" },
        { name: "Izgara Servisi", href: "/hizmetler/izgara-servisi" },
        { name: "Fritöz Servisi", href: "/hizmetler/fritoz-servisi" },
        { name: "Pizza Fırını Servisi", href: "/hizmetler/pizza-firini-servisi" },
      ],
    },
    {
      label: "Soğutma Ekipmanları",
      items: [
        { name: "Endüstriyel Buzdolabı Servisi", href: "/hizmetler/endustriyel-buzdolabi-servisi" },
        { name: "Soğuk Oda Servisi", href: "/hizmetler/soguk-oda-servisi" },
        { name: "Soğuk Hava Deposu Servisi", href: "/hizmetler/soguk-hava-deposu-servisi" },
        { name: "Et Dolabı Servisi", href: "/hizmetler/et-dolabi-servisi" },
        { name: "Pasta Dolabı Servisi", href: "/hizmetler/pasta-dolabi-servisi" },
        { name: "Şarküteri Dolabı Servisi", href: "/hizmetler/sarkuteri-dolabi-servisi" },
        { name: "Market Dolabı Servisi", href: "/hizmetler/market-dolabi-servisi" },
        { name: "Meşrubat Dolabı Servisi", href: "/hizmetler/mesrubat-dolabi-servisi" },
      ],
    },
    {
      label: "Yıkama & Diğer",
      items: [
        { name: "Bulaşık Makinesi Servisi", href: "/hizmetler/endustriyel-bulasik-makinesi-servisi" },
      ],
    },
    {
      label: "Gaz & Diğer",
      items: [
        { name: "Gaz Kaçağı Servisi", href: "/hizmetler/gaz-kacagi-servisi" },
        { name: "Doğalgaz Kaçağı Servisi", href: "/hizmetler/dogalgaz-kacagi-servisi" },
        { name: "Benmari Servisi", href: "/hizmetler/benmari-servisi" },
      ],
    },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-sm hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                <span>Pzt - Cmt: 08:00 - 19:00 | <strong className="text-orange-400">7/24 Acil Servis</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>İstanbul Geneli Hizmet</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://wa.me/905013001981"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-green-400 hover:text-green-300"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>0501 300 19 81 (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm border-b border-slate-100"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="font-extrabold text-slate-900 text-sm sm:text-lg leading-tight tracking-tight truncate">
                  İstanbul Endüstriyel
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-orange-600 uppercase tracking-widest">
                  Mutfak Servisi
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all">
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all">
                Hakkımızda
              </Link>

              {/* Mega Menu */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all">
                  Hizmetlerimiz
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-[860px]">
                    <div className="grid grid-cols-4 gap-6">
                      {serviceCategories.map((cat) => (
                        <div key={cat.label}>
                          <h3 className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-3">
                            {cat.label}
                          </h3>
                          <ul className="space-y-1.5">
                            {cat.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="block text-sm text-slate-600 hover:text-orange-600 hover:pl-1 transition-all"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <Link
                        href="/hizmetler"
                        className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                      >
                        Tüm Hizmetleri Gör
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/markalar" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all">
                Markalar
              </Link>
              <Link href="/bolgeler" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all">
                Bölgeler
              </Link>
              <Link href="/iletisim" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all">
                İletişim
              </Link>
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden xl:flex items-center gap-3">
              <a
                href="https://wa.me/905013001981"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="tel:+905013001981"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Hemen Ara
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Menüyü aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-100 bg-white shadow-lg">
            <div className="px-4 py-5 space-y-1">
              <Link href="/" className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg" onClick={closeMobileMenu}>
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg" onClick={closeMobileMenu}>
                Hakkımızda
              </Link>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                >
                  Hizmetlerimiz
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 pl-4 border-l-2 border-orange-200 space-y-1 py-2">
                    {serviceCategories.map((cat) => (
                      <div key={cat.label} className="mb-3">
                        <p className="text-xs font-bold text-orange-600 uppercase tracking-wider px-3 mb-1">{cat.label}</p>
                        {cat.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-1.5 text-sm text-slate-600 hover:text-orange-600"
                            onClick={closeMobileMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <Link href="/hizmetler" className="block px-3 py-2 text-sm font-semibold text-orange-600" onClick={closeMobileMenu}>
                      Tüm Hizmetler →
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/markalar" className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg" onClick={closeMobileMenu}>
                Markalar
              </Link>
              <Link href="/bolgeler" className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg" onClick={closeMobileMenu}>
                Bölgeler
              </Link>
              <Link href="/iletisim" className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg" onClick={closeMobileMenu}>
                İletişim
              </Link>

              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3 border-t border-slate-100 mt-3">
                <a
                  href="tel:+905013001981"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold rounded-xl shadow-md"
                  onClick={closeMobileMenu}
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/905013001981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 text-white font-bold rounded-xl shadow-md"
                  onClick={closeMobileMenu}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ile Ulaşın
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
