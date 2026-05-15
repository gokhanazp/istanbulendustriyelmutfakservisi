export const SITE_URL = "https://istanbulendustriyelmutfakservisi.com";
export const SITE_NAME = "İstanbul Endüstriyel Mutfak Servisi";
export const SITE_PHONE = "+90 501 300 19 81";
export const SITE_PHONE_TEL = "+905013001981";
export const SITE_PHONE_DISPLAY = "0501 300 19 81";
export const SITE_EMAIL = "info@istanbulendustriyelmutfakservisi.com";
export const SITE_LOCALE = "tr_TR";
export const SITE_LANG = "tr";

export const SITE_LOGO = `${SITE_URL}/icon-512.png`;
// TODO: 1200x630 boyutunda bir og-image.jpg üretip /public altına ekleyin.
// Şimdilik mevcut banner görseli fallback olarak kullanılıyor.
export const SITE_OG_IMAGE = `${SITE_URL}/endustriyel-mutfak-malzemeleri-banner.jpg`;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_LOGO,
  image: SITE_OG_IMAGE,
  description:
    "İstanbul genelinde endüstriyel mutfak ekipmanları servis, bakım ve onarım hizmetleri. Aynı gün müdahale, orijinal yedek parçalar, 6 ay garantili.",
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [],
} as const;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function canonical(path: string = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "" : clean}`;
}
