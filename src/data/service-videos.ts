import { ServiceVideo } from "@/types";

/**
 * Hizmet sayfalarında "Çalışma Videolarımız" bölümünde gösterilen saha
 * videoları. Anahtar = Service.slug. Kaydı olmayan hizmet sayfalarında
 * bölüm hiç render edilmez.
 */

// Buzdolabı gaz kaçağı tespiti ve genel buzdolabı servisi videoları;
// hem gaz kaçağı hem de endüstriyel buzdolabı servisi sayfasında kullanılır.
const buzdolabiVideos: ServiceVideo[] = [
  {
    src: "/buzdolabi-gaz-kacagi-tespiti.mp4",
    poster: "/buzdolabi-gaz-kacagi-tespiti-poster.jpg",
    title: "Buzdolabı Gaz Kaçağı Tespiti",
    caption:
      "Buzdolabının evaporatör ve kompresör bağlantılarında gaz kaçağı tespiti ve müdahale çalışmamız.",
    width: 478,
    height: 850,
  },
  {
    src: "/buzdolabi-gaz-kacagi.mp4",
    poster: "/buzdolabi-gaz-kacagi-poster.jpg",
    title: "Elektronik Gaz Kaçağı Dedektörü ile Kontrol",
    caption:
      "Elektronik gaz kaçağı dedektörü ile kompresör hattında hassas kaçak taraması yapıyoruz.",
    width: 464,
    height: 832,
  },
  {
    src: "/buzdolabi-servisi.mp4",
    poster: "/buzdolabi-servisi-poster.jpg",
    title: "Buzdolabı Servisi",
    caption: "Sahada buzdolabı arıza tespiti ve onarım çalışmamız.",
    width: 478,
    height: 850,
  },
];

export const serviceVideos: Record<string, ServiceVideo[]> = {
  "gaz-kacagi-servisi": buzdolabiVideos,
  "endustriyel-buzdolabi-servisi": buzdolabiVideos,
  "endustriyel-bulasik-makinesi-servisi": [
    {
      src: "/bulasik-makinesi-servisi.mp4",
      poster: "/bulasik-makinesi-servisi-poster.jpg",
      title: "Bulaşık Makinesi Servisi",
      caption:
        "Endüstriyel bulaşık makinesinin kapak contası ve gövde bakımı çalışmamız.",
      width: 478,
      height: 850,
    },
  ],
};

export function getServiceVideos(slug: string): ServiceVideo[] {
  return serviceVideos[slug] ?? [];
}
