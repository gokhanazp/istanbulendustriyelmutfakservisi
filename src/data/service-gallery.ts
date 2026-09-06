import { GalleryImage } from "@/types";

/**
 * Hizmet sayfalarında "Çalışmalarımızdan Görüntüler" bölümünde gösterilen
 * saha fotoğrafları. Anahtar = Service.slug. Kaydı olmayan hizmet
 * sayfalarında bölüm hiç render edilmez.
 */
export const serviceGallery: Record<string, GalleryImage[]> = {
  "endustriyel-firin-servisi": [
    {
      src: "/endustriyel-firin-servisi.jpg",
      alt: "Endüstriyel fırın servisi: Electrolux air-o-convect konveksiyonlu fırında bakım ve arıza tespiti yapan teknisyenimiz",
      caption:
        "Electrolux air-o-convect konveksiyonlu fırın ve taş tabanlı pizza fırınında periyodik bakım ve sıcaklık kalibrasyonu çalışmamız.",
      width: 2048,
      height: 1536,
    },
  ],
  "endustriyel-ocak-servisi": [
    {
      src: "/endustriyel-ocak-servisi.jpg",
      alt: "Endüstriyel ocak servisi: teknisyen ekibimiz toplu mutfakta sıra halindeki ocakların brülörlerini söküp temizlik ve bakımını yapıyor",
      caption:
        "Toplu mutfakta sıra halindeki endüstriyel ocakların brülör temizliği ve gaz hattı bakımı çalışmamız.",
      width: 960,
      height: 720,
    },
    {
      src: "/endustriyel-ocak-servisi-2.jpg",
      alt: "Endüstriyel ocak servisi: Fırat Plastik Kauçuk Sanayi tesisinin mutfağında ocak brülörlerini ve davlumbaz iç yüzeyini temizleyen teknisyen ekibimiz",
      caption:
        "Fırat Plastik Kauçuk Sanayi tesisi mutfağında endüstriyel ocak brülörleri bakımı ve davlumbaz/aspiratör iç temizliği çalışmamız.",
      width: 1080,
      height: 1056,
    },
  ],
  "endustriyel-bulasik-makinesi-servisi": [
    {
      src: "/endustriyel-bulasik-makinesi.jpg",
      alt: "Endüstriyel bulaşık makinesi servisi: tünel tipi bulaşık makinesinin arka panelini açıp arıza tespiti yapan teknisyenimiz",
      caption:
        "Tünel tipi endüstriyel bulaşık makinesinde motor ve elektronik kart arıza tespiti çalışmamız.",
      width: 1500,
      height: 1623,
    },
    {
      src: "/endustriyel-bulasik-makinesi-1.jpg",
      alt: "Endüstriyel bulaşık makinesi servisi: işletme mutfağında bulaşık makinesi ve eviye hattında bakım yapan teknisyenimiz",
      caption:
        "İşletme mutfağında bulaşık makinesi ve eviye hattında yerinde bakım ve montaj çalışmamız.",
      width: 1080,
      height: 1068,
    },
    {
      src: "/endustriyel-bulasik-makinesi-2.jpg",
      alt: "Endüstriyel bulaşık makinesi servisi: kapaklı tip bulaşık makinesinin elektrik kontrol panelinde onarım yapan teknisyenimiz",
      caption:
        "Kapaklı tip endüstriyel bulaşık makinesinin elektrik kontrol panelinde onarım çalışmamız.",
      width: 1080,
      height: 1432,
    },
  ],
  "benmari-servisi": [
    {
      src: "/benmari-servisi.jpeg",
      alt: "Benmari servisi: İstanbul Bilgi Üniversitesi yemekhanesinde benmari hattının ısıtma dirençlerinde bakım yapan teknisyenimiz",
      caption:
        "İstanbul Bilgi Üniversitesi yemekhanesinde benmari hattının ısıtma dirençleri ve kontrol sisteminde bakım çalışmamız.",
      width: 1080,
      height: 1079,
    },
  ],
  "endustriyel-buzdolabi-servisi": [
    {
      src: "/endustriyel-buzdolabi-servisi.jpg",
      alt: "Endüstriyel buzdolabı servisi: Beykoz Üniversitesi Yabancı Diller Yüksekokulu'nda soğuk hava deposu bakımı yapan ve sıcaklık ölçümü kontrol eden teknisyenimiz",
      caption:
        "Beykoz Üniversitesi Yabancı Diller Yüksekokulu'nda soğuk hava deposu bakımı ve -18,5°C sıcaklık kontrolü çalışmamız.",
      width: 1080,
      height: 1053,
    },
    {
      src: "/endustriyel-buzdolabi-servisi-2.jpg",
      alt: "Endüstriyel buzdolabı servisi: işletme mutfağında soğutucu dolabın kompresör ve elektronik aksamında bakım yapan teknisyenimiz",
      caption:
        "İşletme mutfağında soğutucu dolabın kompresör bakımı ve elektronik aksam kontrolü için sahaya intikal ve uygulama çalışmamız.",
      width: 1080,
      height: 1055,
    },
    {
      src: "/endustriyel-buzdolabi-servisi-3.jpg",
      alt: "Endüstriyel buzdolabı servisi: hazır yemek zinciri şubesinin mutfağında soğutma ve pişirme ekipmanları bakımı yapan teknisyenimiz",
      caption:
        "Hazır yemek zinciri şubesinin mutfağında soğutma ünitesi ve pişirme ekipmanları bakım çalışmamız.",
      width: 1080,
      height: 1032,
    },
  ],
};

export function getServiceGallery(slug: string): GalleryImage[] {
  return serviceGallery[slug] ?? [];
}
