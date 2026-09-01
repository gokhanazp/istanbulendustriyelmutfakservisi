import { RichContent } from "@/types";

/**
 * Tekil sayfalara özel uzun form içerik.
 * Kaynak: public/yenisayfa/*.docx — metinler birebir aktarılmıştır.
 * Anahtar = sayfa yolu (baştaki / olmadan). Kaydı olmayan sayfalar şablonun varsayılan
 * metnini kullanmaya devam eder.
 */
export const pageContent: Record<string, RichContent> = {
  "endustriyel-mutfak-servisi": {
    sections: [
      {
        id: "endustriyel-mutfak-servisi-restoran-otel-ve-catering-isletmelere-profesyonel-cozumler",
        level: 2,
        heading: "Endüstriyel Mutfak Servisi: Restoran, Otel ve Catering İşletmelere Profesyonel Çözümler",
        paragraphs: [
          "Endüstriyel mutfak servisi, restoran, otel, kafe ve catering işletmelerinin kullandığı sanayi tipi mutfak ekipmanlarının kurulum, bakım, onarım ve teknik destek süreçlerini kapsayan profesyonel bir hizmettir. İşletmenizin mutfak ekipmanları kesintisiz çalıştığında, operasyonel verimliliğiniz artar ve müşteri memnuniyeti yükselir. Bu makalede, endüstriyel mutfak servisleri hakkında bilmeniz gereken her şeyi, marka bazlı yetkili servis çözümlerinden periyodik bakımın önemine kadar detaylıca ele alacağız.",
        ],
      },
      {
        id: "endustriyel-mutfak-servisi-nedir-ve-neden-onemlidir",
        level: 2,
        heading: "Endüstriyel Mutfak Servisi Nedir ve Neden Önemlidir?",
        paragraphs: [
          "Endüstriyel mutfak servisi, paslanmaz çelikten üretilen profesyonel mutfak ekipmanlarının kullanım amacına göre en uygun şekilde temin edilmesini, kurulmasını ve uzun vadede dayanıklı biçimde çalışmasını sağlayan kapsamlı bir teknik hizmettir. Bu hizmet, fırın, ocak, bulaşık makinesi, soğutma sistemleri, fritöz, benmari ve davlumbaz gibi sanayi tipi cihazların tüm yaşam döngüsünü kapsar.",
          "İşletme sahipleri için endüstriyel mutfak servisleri şu nedenlerle kritik öneme sahiptir:",
          "Operasyonel süreklilik: Arızalı bir ocak veya bulaşık makinesi, restoranınızın hizmet kalitesini doğrudan etkiler.",
          "Maliyet kontrolü: Düzenli bakım, beklenmedik arızaların ve yüksek onarım maliyetlerinin önüne geçer.",
          "Gıda güvenliği: Doğru çalışan soğutma ve pişirme ekipmanları, hijyen standartlarını korumanızı sağlar.",
          "Ekipman ömrü: Profesyonel bakım, cihazlarınızın ilk günkü performansında daha uzun süre çalışmasını garantiler.",
        ],
      },
      {
        id: "hangi-cihazlar-icin-endustriyel-mutfak-servisi-alinir",
        level: 2,
        heading: "Hangi Cihazlar İçin Endüstriyel Mutfak Servisi Alınır?",
        paragraphs: [
          "Profesyonel mutfaklarda kullanılan tüm sanayi tipi ekipmanlar, düzenli teknik servis ve bakım gerektirir. Başlıca hizmet alanları şunlardır:",
        ],
      },
      {
        id: "pisirme-ekipmanlari",
        level: 3,
        heading: "Pişirme Ekipmanları",
        paragraphs: [
          "Endüstriyel ocak tamiri: Gazlı, elektrikli ve indüksiyonlu ocaklarda brülör, rezistans, termostat ve elektronik kart arızaları.",
          "Fırın ve konveksiyonel fırın servisi: Isı dağılımı, fan motoru, ısıtıcı eleman ve kontrol paneli bakımı.",
          "Izgara, fritöz ve kuzine servisi: Yağ sistemi temizliği, ısıtıcı değişimi ve güvenlik sensörü kontrolleri.",
        ],
      },
      {
        id: "sogutma-sistemleri",
        level: 3,
        heading: "Soğutma Sistemleri",
        paragraphs: [
          "Endüstriyel buzdolabı ve soğuk oda servisi: Kompresör, gaz dolumu, termostat ve kapı contası bakımı.",
          "Şoklayıcı (shocker) ve derin dondurucu teknik desteği: Hızlı soğutma performansı ve sıcaklık kalibrasyonu.",
        ],
      },
      {
        id: "yikama-ve-hijyen-ekipmanlari",
        level: 3,
        heading: "Yıkama ve Hijyen Ekipmanları",
        paragraphs: [
          "Empero bulaşık makinesi servisi: Yetkili servis desteğiyle pompa, ısıtıcı, elektronik kart ve su sistemleri onarımı.",
          "İnoksan bulaşık makinesi servisi: İnoksan yetkili servisleri aracılığıyla orijinal yedek parça ve garantili işçilik.",
          "Sanayi tipi bulaşık makinesi servisi: Winterhalter, Fagor, Electrolux gibi markalar için genel teknik servis.",
        ],
      },
      {
        id: "hazirlik-ve-diger-ekipmanlar",
        level: 3,
        heading: "Hazırlık ve Diğer Ekipmanlar",
        paragraphs: [
          "Benmari, tezgah ve paslanmaz çelik üniteler: Isıtıcı sistemler, su haznesi temizliği ve termostat kalibrasyonu.",
          "Davlumbaz ve havalandırma sistemleri: Yağ filtreleri temizliği, motor bakımı ve yangın güvenliği kontrolleri.",
        ],
      },
      {
        id: "hizmet-verdigimiz-cihaz-turleri",
        level: 2,
        heading: "Hizmet Verdiğimiz Cihaz Türleri",
        paragraphs: [
          "Endüstriyel mutfaklarda kullanılan farklı tipteki cihazlara profesyonel servis hizmeti sunuyoruz:",
        ],
      },
      {
        id: "bulasik-makinesi-servisi",
        level: 3,
        heading: "Bulaşık Makinesi Servisi",
        paragraphs: [
          "Sanayi tipi bulaşık makineleri, restoran ve catering işletmelerinin en yoğun kullanılan ekipmanlarıdır. Pompa, ısıtıcı, elektronik kart ve su sistemleri arızalarında hızlı ve kalıcı çözümler üretiyoruz. Periyodik bakım ile filtre temizliği, su basıncı ayarı ve deterjan dozaj sistemi kalibrasyonu gerçekleştiriyoruz.",
        ],
      },
      {
        id: "firin-servisi",
        level: 3,
        heading: "Fırın Servisi",
        paragraphs: [
          "Endüstriyel fırınlar, ısı dağılımı, fan motoru ve termostat sistemleri açısından düzenli bakım gerektirir. Konveksiyonel, gazlı ve elektrikli fırınlarda ısıtıcı eleman değişimi, sıcaklık kalibrasyonu ve kontrol paneli onarımı hizmetleri sunuyoruz.",
        ],
      },
      {
        id: "ocak-servisi",
        level: 3,
        heading: "Ocak Servisi",
        paragraphs: [
          "Gazlı, elektrikli ve indüksiyonlu ocaklarda brülör temizliği, rezistans değişimi, termokupl ve elektronik kart arızaları için teknik destek sağlıyoruz. Gaz basınç ayarları ve güvenlik kontrolleri ile uzun vadeli sorunsuz kullanım garantisi veriyoruz.",
        ],
      },
      {
        id: "buzdolabi-servisi",
        level: 3,
        heading: "Buzdolabı Servisi",
        paragraphs: [
          "Endüstriyel soğutma sistemlerinde kompresör bakımı, gaz dolumu, termostat değişimi ve kapı contası yenileme hizmetleri sunuyoruz. Soğuk oda ve şoklayıcı sistemlerde sıcaklık kalibrasyonu ile gıda güvenliği standartlarını korumanıza yardımcı oluyoruz.",
        ],
      },
      {
        id: "fritoz-servisi",
        level: 3,
        heading: "Fritöz Servisi",
        paragraphs: [
          "Elektrikli ve gazlı fritözlerde ısıtıcı değişimi, termostat kalibrasyonu, yağ tahliye sistemi temizliği ve elektronik kart onarımı hizmetleri veriyoruz. Hızlı müdahale ile işletmenizin menü aksamasını önlüyoruz.",
        ],
      },
      {
        id: "hizmet-verdigimiz-markalar",
        level: 2,
        heading: "Hizmet Verdiğimiz Markalar",
        paragraphs: [
          "Çınar Endüstriyel Mutfak Servisi olarak, aşağıdaki önde gelen markaların endüstriyel mutfak ekipmanlarına profesyonel teknik servis hizmeti sunuyoruz:",
          "Empero, İnoksan, Öztiryakiler, Kayalar, Maksan, Portabianco, Electrolux, Frenox, Vital, Pimak, Industrio, Atalay, Kalitegaz, Mayapaz, Crystal, Ersöz Mutfak, Turhan Çelik, Dampak, Venarro, Unox, Alveo, Emeksan, Himaksan, Adona, Halsan, Greenox, Üçler, Ayfa.",
          "Her marka için orijinal yedek parça kullanarak, cihazlarınızın uzun ömürlü olmasını ve garanti koşullarının korunmasını sağlıyoruz.",
        ],
      },
      {
        id: "inoksan-servis-ve-empero-yetkili-servis-marka-bazli-cozumler",
        level: 2,
        heading: "İnoksan Servis ve Empero Yetkili Servis: Marka Bazlı Çözümler",
        paragraphs: [
          "Türkiye'de en yaygın kullanılan endüstriyel mutfak markalarından İnoksan ve Empero için yetkili servis ağları bulunmaktadır.",
        ],
      },
      {
        id: "inoksan-servis",
        level: 3,
        heading: "İnoksan Servis",
        href: "/markalar/inoksan-servisi",
        paragraphs: [
          "İnoksan, 1980'den beri endüstriyel mutfak sektöründe faaliyet gösteren köklü bir Türk markasıdır. İnoksan yetkili servisleri, İstanbul, Kocaeli ve Türkiye'nin birçok bölgesinde 7/24 teknik destek sunar.",
          "İnoksan servis hizmetleri şunları kapsar:",
          "Orijinal yedek parça temini ve değişimi",
          "Garantili işçilik ve aynı gün yerinde müdahale",
          "Fırın, ocak, bulaşık makinesi, soğutma grubu ve paslanmaz çelik üniteler için bakım-onarım",
        ],
      },
      {
        id: "empero-yetkili-servis",
        level: 3,
        heading: "Empero Yetkili Servis",
        href: "/markalar/empero-servisi",
        paragraphs: [
          "Empero, özellikle bulaşık makineleri ve pişirme ekipmanları alanında öne çıkan bir diğer yerli markadır. Empero yetkili servisleri, İstanbul Anadolu Yakası ve Kocaeli bölgesinde 7 yıldan fazla süredir profesyonel teknik servis hizmeti vermektedir.",
          "Empero bulaşık makinesi servisi avantajları:",
          "Marka özelinde eğitimli teknik personel",
          "Hızlı arıza tespiti ve kalıcı çözümler",
          "Periyodik bakım paketleri ile önleyici servis",
        ],
      },
      {
        id: "endustriyel-ocak-tamiri-ve-bulasik-makinesi-servisi-sik-karsilasilan-arizalar",
        level: 2,
        heading: "Endüstriyel Ocak Tamiri ve Bulaşık Makinesi Servisi: Sık Karşılaşılan Arızalar",
        paragraphs: [
        ],
      },
      {
        id: "endustriyel-ocak-tamiri",
        level: 3,
        heading: "Endüstriyel Ocak Tamiri",
        paragraphs: [
          "Restoran ve otel mutfaklarında en yoğun kullanılan ekipmanlardan olan endüstriyel ocaklar, şu arızalarla sıkça karşılaşır:",
          "Brülör yanmıyor veya düzensiz yanıyor: Gaz valfi, buji veya elektrot arızası.",
          "Ocak yüzeyi yeterince ısınmıyor: Rezistans değişimi veya termostat kalibrasyonu gerekebilir.",
          "Gaz kaçağı şüphesi: Acil müdahale gerektiren, güvenlik odaklı bir durumdur.",
          "Profesyonel endüstriyel ocak tamiri, yalnızca arızayı gidermekle kalmaz, aynı zamanda gaz basınç ayarları ve güvenlik kontrolleri ile uzun vadeli sorunsuz kullanım sağlar.",
        ],
      },
      {
        id: "empero-ve-inoksan-bulasik-makinesi-servisi",
        level: 3,
        heading: "Empero ve İnoksan Bulaşık Makinesi Servisi",
        paragraphs: [
          "Sanayi tipi bulaşık makineleri, yüksek sıcaklık ve basınçla çalıştığı için düzenli bakım şarttır. Yaygın arızalar:",
          "Makine su almıyor veya boşaltmıyor: Pompa, vana veya tıkanıklık kontrolü.",
          "Yıkama performansı düşük: Püskürtme kolları, filtre ve ısıtıcı eleman bakımı.",
          "Elektronik kart arızaları: Gösterge paneli çalışmıyor veya programlar hata veriyor.",
          "<a href=\"/empero-servis/empero-bulasik-makinesi-servisi\">Empero bulaşık makinesi servisi</a> ve İnoksan bulaşık makinesi servisi, bu tür sorunlara marka özelinde çözümler üretir ve orijinal yedek parça kullanımıyla cihaz ömrünü uzatır.",
        ],
      },
      {
        id: "sanayi-tipi-bulasik-makinesi-servisi-catering-ve-toplu-tuketim-alanlari-icin-kritik-hizmet",
        level: 2,
        heading: "Sanayi Tipi Bulaşık Makinesi Servisi: Catering ve Toplu Tüketim Alanları İçin Kritik Hizmet",
        paragraphs: [
          "Catering firmaları, okul ve hastane mutfakları gibi toplu tüketim alanlarında kullanılan sanayi tipi bulaşık makineleri, saatte yüzlerce tabak yıkama kapasitesine sahiptir. Bu yoğun kullanım, düzenli teknik servis ve periyodik bakımı zorunlu kılar.",
          "Sanayi tipi bulaşık makinesi servisi şunları içerir:",
          "Periyodik bakım: Filtre temizliği, su basıncı ayarı, deterjan dozaj pumpası kalibrasyonu.",
          "Arıza onarımı: Pompa, ısıtıcı, elektronik kart ve su giriş-çıkış sistemleri.",
          "Yedek parça değişimi: Orijinal parçalarla performans optimizasyonu.",
          "Profesyonel bir sanayi tipi bulaşık makinesi servisi, işletmenizin hijyen standartlarını korumasına ve operasyonel aksamaların önüne geçmesine yardımcı olur.",
        ],
      },
      {
        id: "periyodik-bakimin-faydalari-ve-teknik-servis-secerken-dikkat-edilmesi-gerekenler",
        level: 2,
        heading: "Periyodik Bakımın Faydaları ve Teknik Servis Seçerken Dikkat Edilmesi Gerekenler",
        paragraphs: [
          "Düzenli bakım, endüstriyel mutfak ekipmanlarınız için en akıllı yatırımdır.",
          "Arıza riskini %70'e kadar azaltır: Küçük sorunlar büyük arızalara dönüşmeden tespit edilir.",
          "Enerji tasarrufu sağlar: Verimli çalışan cihazlar, elektrik ve gaz tüketimini optimize eder.",
          "Cihaz ömrünü uzatır: İlk günkü performans daha uzun süre korunur.",
          "Gıda güvenliği standartlarını destekler: Soğutma ve pişirme ekipmanları doğru sıcaklıklarda çalışır.",
        ],
      },
      {
        id: "teknik-servis-secerken-dikkat-edilmesi-gerekenler",
        level: 3,
        heading: "Teknik Servis Seçerken Dikkat Edilmesi Gerekenler",
        paragraphs: [
          "Doğru endüstriyel mutfak servisi partneri seçmek, işletmenizin uzun vadeli başarısı için kritiktir.",
          "Yetkili servis olması: İnoksan servis, Empero yetkili servisi gibi marka onaylı teknik ekipler, orijinal yedek parça ve garantili işçilik sunar.",
          "Hızlı müdahale süresi: Aynı gün yerinde servis, operasyonel aksamaları minimize eder.",
          "Deneyimli ve sertifikalı personel: Endüstriyel ekipmanlarda uzmanlaşmış teknik kadro.",
          "7/24 destek: Acil arızalar için kesintisiz teknik servis hattı.",
          "Şeffaf fiyatlandırma: Arıza tespiti sonrası net teklif ve garanti belgesi.",
        ],
      },
      {
        id: "isletmenizin-mutfagini-profesyonellere-emanet-edin",
        level: 2,
        heading: "İşletmenizin Mutfağını Profesyonellere Emanet Edin",
        paragraphs: [
          "Endüstriyel mutfak servisi, restoran, otel, kafe ve catering işletmelerinin operasyonel verimliliği için vazgeçilmez bir destektir. Düzenli bakım, hızlı arıza onarımı ve marka bazlı yetkili servis çözümleri, ekipmanlarınızın uzun ömürlü ve sorunsuz çalışmasını garantiler. İnoksan servis, Empero yetkili servisi, endüstriyel ocak tamiri ve sanayi tipi bulaşık makinesi servisi gibi uzmanlık alanlarında profesyonel teknik ekiplerle çalışmak, işletmenizin rekabet gücünü artırır.",
        ],
      },
    ],
    faqHeading: "Sıkça Sorulan Sorular (SSS)",
    faq: [
      {
        question: "Endüstriyel mutfak ekipmanları için bakım ne sıklıkla yapılmalıdır?",
        answer: "Genel öneri, yoğun kullanılan ekipmanlar için 3-6 ayda bir periyodik bakım yapılmasıdır. Bulaşık makineleri ve soğutma sistemleri gibi kritik ekipmanlar için bu süre daha kısa tutulabilir.",
      },
      {
        question: "Yetkili servis ile genel teknik servis arasındaki fark nedir?",
        answer: "Yetkili servisler (örneğin İnoksan servis, Empero yetkili servisi), marka tarafından eğitim almış, orijinal yedek parça kullanan ve garantili işçilik sunan teknik ekiplerdir. Genel teknik servisler ise birden fazla markaya hizmet verebilir ancak orijinal parça garantisi her zaman sunmayabilir.",
      },
      {
        question: "Acil arıza durumunda ne kadar sürede müdahale edilir?",
        answer: "Profesyonel endüstriyel mutfak servisleri, İstanbul, Kocaeli ve büyükşehirlerde aynı gün yerinde müdahale garantisi sunar. 7/24 acil servis hatları üzerinden ulaşarak hızlı destek alabilirsiniz.",
      },
    ],
  },
};

export function getPageContent(key: string): RichContent | undefined {
  return pageContent[key];
}
