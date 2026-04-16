import Link from "next/link";
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
} from "lucide-react";

const categoryColors: Record<string, { bg: string; icon: string }> = {
  pisirme: { bg: "from-orange-400 to-orange-600", icon: "text-orange-600" },
  sogutma: { bg: "from-blue-400 to-blue-600", icon: "text-blue-600" },
  yikama: { bg: "from-cyan-400 to-cyan-600", icon: "text-cyan-600" },
  gaz: { bg: "from-red-400 to-red-600", icon: "text-red-600" },
  diger: { bg: "from-slate-400 to-slate-600", icon: "text-slate-600" },
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

export function ServicesGrid() {
  // Show top 9 services in 3x3 grid
  const displayServices = services.slice(0, 9);

  const getColorClasses = (category: string) => {
    return categoryColors[category] || categoryColors.diger;
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full -mr-48 -mt-48 opacity-50" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-50 rounded-full -ml-36 -mb-36 opacity-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
            <span className="w-2 h-2 bg-orange-600 rounded-full" />
            <span className="text-sm font-semibold text-orange-600 tracking-wide">
              HİZMETLERİMİZ
            </span>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Endüstriyel Mutfak<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              Servis Hizmetlerimiz
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Mutfak ekipmanlarınızın tüm bakım ve onarım ihtiyaçları için profesyonel çözümler sunuyoruz.
            Deneyimli teknisyenlerimiz ve orijinal yedek parçalarımız ile kaliteli hizmet garantisi vermekteyiz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mb-16">
          {displayServices.map((service) => {
            const colors = getColorClasses(service.category);
            return (
              <Link
                key={service.id}
                href={`/hizmetler/${service.slug}`}
                className="group h-full"
              >
                <div className="h-full bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-400 transition-all duration-300 flex flex-col cursor-pointer">
                  {/* Icon Container with Gradient Background */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">
                      {iconMap[service.icon] || (
                        <Flame className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm md:text-base mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Arrow Link */}
                  <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all gap-1">
                    <span>Detay</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-8">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 text-lg"
          >
            Tüm Hizmetleri Gör
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
