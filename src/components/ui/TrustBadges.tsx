import { Clock, MapPin, Zap, Headphones } from "lucide-react";

interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function TrustBadges() {
  const badges: TrustBadge[] = [
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Aynı Gün Servis",
      description: "Acil müdahale çağrılarında aynı gün hizmet",
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: "İstanbul Geneli Hizmet",
      description: "Şehir genelinde mobil servis ekiplerimiz",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Endüstriyel Uzmanı",
      description: "20+ yıl endüstriyel mutfak tecrübesi",
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-600" />,
      title: "7/24 Teknik Destek",
      description: "Gece ve hafta sonu acil hizmet",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
        >
          <div className="flex justify-center mb-4">{badge.icon}</div>
          <h3 className="text-base font-semibold text-slate-900 mb-2">
            {badge.title}
          </h3>
          <p className="text-sm text-slate-600">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}
