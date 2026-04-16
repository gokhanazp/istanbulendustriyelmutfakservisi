"use client";

import { useState, useEffect, useCallback } from "react";
import { Phone, MessageCircle, ChevronLeft, ChevronRight, Shield, Clock, Wrench, MapPin } from "lucide-react";

const slides = [
  {
    title: "İstanbul Endüstriyel Mutfak Servisi",
    subtitle: "Aynı Gün Müdahale — 7/24 Teknik Destek",
    description:
      "Lokantalar, oteller, kafeler ve yemekhaneler için endüstriyel mutfak ekipmanlarınızın bakım, onarım ve arıza giderme hizmetleri.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80&auto=format",
    overlay: "from-slate-900/90 via-slate-900/70 to-slate-900/40",
  },
  {
    title: "Profesyonel Ocak & Fırın Servisi",
    subtitle: "24 Marka — Orijinal Yedek Parça",
    description:
      "Endüstriyel ocak, fırın, ızgara ve fritöz arızalarınızda uzman teknik ekibimiz ile yanınızdayız. Tüm markalar için servis hizmeti.",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=1920&q=80&auto=format",
    overlay: "from-slate-900/90 via-slate-900/70 to-slate-900/40",
  },
  {
    title: "Endüstriyel Soğutma Sistemleri",
    subtitle: "Buzdolabı — Soğuk Oda — Derin Dondurucu",
    description:
      "Sanayi tipi buzdolabı, soğuk oda ve derin dondurucu servisinde İstanbul genelinde hızlı ve güvenilir çözümler.",
    image: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?w=1920&q=80&auto=format",
    overlay: "from-slate-900/90 via-slate-900/75 to-slate-900/50",
  },
  {
    title: "Gaz Kaçağı Tespit & Onarım",
    subtitle: "Acil Müdahale Ekibi — Güvenliğiniz Önceliğimiz",
    description:
      "Doğalgaz ve LPG kaçaklarında acil müdahale. Profesyonel ekipmanlarla tespit, onarım ve güvenlik sertifikası hizmeti.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80&auto=format",
    overlay: "from-slate-900/90 via-slate-900/75 to-slate-900/45",
  },
];

const trustItems = [
  { icon: Clock, label: "Aynı Gün Servis", detail: "Hızlı müdahale garantisi" },
  { icon: Shield, label: "Garanti Kapsamı", detail: "İşçilik ve parça garantili" },
  { icon: Wrench, label: "24 Marka Servisi", detail: "Tüm endüstriyel markalar" },
  { icon: MapPin, label: "İstanbul Geneli", detail: "39 ilçede hizmet" },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-[600px] md:h-[680px] lg:h-[720px]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${s.image})` }}
            />
            {/* Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${s.overlay}`} />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600/20 border border-orange-500/30 backdrop-blur-sm rounded-full mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-300 text-sm font-semibold">
                  {slide.subtitle}
                </span>
              </div>

              {/* Title */}
              <h1
                key={`title-${current}`}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 animate-[fadeInUp_0.6s_ease-out]"
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p
                key={`desc-${current}`}
                className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl animate-[fadeInUp_0.6s_ease-out_0.15s_both]"
              >
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
                <a
                  href="tel:02121234567"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold text-lg rounded-2xl shadow-lg shadow-orange-900/30 hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/905321234567?text=Merhaba%2C%20endüstriyel%20mutfak%20ekipmanlarım%20için%20servis%20hizmeti%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border border-white/20 hover:border-white/40 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ile Ulaşın
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute z-30 bottom-8 right-4 sm:right-8 lg:right-12 flex items-center gap-3">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-orange-500"
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide counter */}
        <div className="absolute z-30 top-8 right-4 sm:right-8 lg:right-12">
          <span className="text-white/50 text-sm font-mono">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="relative z-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 py-5 px-4 lg:px-6 group hover:bg-orange-50/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                  <item.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{item.label}</div>
                  <div className="text-slate-500 text-xs">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
