import {
  Clock,
  Zap,
  Award,
  MapPin,
  DollarSign,
  Shield,
} from "lucide-react";

interface WhyUsItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function WhyUsSection() {
  const reasons: WhyUsItem[] = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Aynı Gün Servis Garantisi",
      description:
        "Acil müdahale çağrılarında aynı gün içinde hizmet sunuyoruz. İstanbul'un merkez ilçelerine 1-2 saat, çevre ilçelerine 2-4 saat içinde ulaşabiliyoruz.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Orijinal Yedek Parça",
      description:
        "Tüm tamirlerimizde orijinal ve sertifikalı yedek parçalar kullanıyoruz. Yedek parçalar 6 ay garantili olup, en kaliteli ürünlerle çalışıyoruz.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garanti Kapsamında Hizmet",
      description:
        "Yapılan tüm tamirlerde 6 ay işçilik ve parça garantisi sunuyoruz. Garantili dönemde sorunlar tekrarlanırsa tamamen ücretsiz hizmet verilir.",
    },
  ];

  const stats = [
    { number: "15+", label: "Yıl Deneyim" },
    { number: "500+", label: "Müşteri" },
    { number: "24", label: "Marka" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-orange-100 rounded-full -ml-40 opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 rounded-full -mr-48 opacity-30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
            <span className="w-2 h-2 bg-orange-600 rounded-full" />
            <span className="text-sm font-semibold text-orange-600 tracking-wide">
              NEDEN BİZ?
            </span>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text and Stats */}
          <div className="space-y-10">
            {/* Title */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                İstanbul'un en güvenilir endüstriyel mutfak servis şirketi olarak müşterilerimize en iyi hizmeti sunuyoruz.
                Profesyonel ekibimiz, orijinal yedek parçalar ve 24/7 destek ile işletmenizin sorunsuz çalışmasını garantilemekteyiz.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Reason Cards */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-l-4 border-l-orange-600 border border-slate-200 p-6 hover:shadow-lg hover:border-orange-400 transition-all duration-300 group"
              >
                {/* Icon with background */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center flex-shrink-0 group-hover:from-orange-200 group-hover:to-orange-100 transition-colors">
                    <div className="text-orange-600">
                      {reason.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
