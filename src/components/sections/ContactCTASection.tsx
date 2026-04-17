import { Phone, MessageCircle, Clock, Shield, CheckCircle } from "lucide-react";

export function ContactCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 md:py-32 lg:py-40">
      {/* Premium decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl filter"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-slate-700/20 to-transparent rounded-full blur-3xl filter"></div>

        {/* Geometric shapes for premium feel */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-orange-400/40 rounded-full"></div>
        <div className="absolute top-40 right-40 w-1 h-20 bg-gradient-to-b from-orange-400/40 to-transparent"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-orange-400/30 rounded-full"></div>
        <div className="absolute bottom-20 left-40 w-1 h-24 bg-gradient-to-t from-orange-400/30 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 md:space-y-10">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Endüstriyel Mutfak Ekipmanlarınızda Arıza mı Var?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            24/7 profesyonel servis hizmeti ile ekipmanınız anında harekete geçiyor.
            İstanbul'da ortalama 2 saatte müdahale yapıyoruz.
          </p>

          {/* CTA Buttons - Premium styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            {/* Phone Button - Orange Gradient */}
            <a
              href="tel:+905013001981"
              className="group relative px-8 md:px-10 py-4 md:py-5 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700 transition-all"></div>

              {/* Content */}
              <div className="relative flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                <span>Hemen Ara</span>
              </div>
            </a>

            {/* WhatsApp Button - Green Gradient */}
            <a
              href="https://wa.me/905013001981?text=Merhaba%2C%20endüstriyel%20mutfak%20ekipmanlarım%20için%20servis%20hizmeti%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 md:px-10 py-4 md:py-5 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700 transition-all"></div>

              {/* Content */}
              <div className="relative flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp ile Ulaşın</span>
              </div>
            </a>
          </div>

          {/* Stats Row - Premium cards */}
          <div className="pt-6 md:pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Stat 1: Response Time */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-colors">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">Ortalama 2 Saat</p>
                <p className="text-slate-300 text-sm">Müdahale Süresi</p>
              </div>

              {/* Stat 2: Warranty */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-colors">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">6 Ay</p>
                <p className="text-slate-300 text-sm">Garantili Hizmet</p>
              </div>

              {/* Stat 3: Free Inspection */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">Ücretsiz</p>
                <p className="text-slate-300 text-sm">Keşif & Danışmanlık</p>
              </div>
            </div>
          </div>

          {/* Trust statement */}
          <div className="pt-8 border-t border-slate-700/50">
            <p className="text-slate-300 text-base md:text-lg">
              <span className="text-orange-400 font-semibold">1000+ memnun müşteri</span> tarafından güvenilen profesyonel hizmet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
