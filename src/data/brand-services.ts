import { brands } from "./brands";
import { Service } from "@/types";

// Marka + ekipman kombinasyon sayfaları (uzun kuyruk SEO)
// Örn: "Empero Buzdolabı Servisi" -> /marka-servis/empero-buzdolabi-servisi

export type EquipmentKey =
  | "buzdolabi"
  | "ocak"
  | "fritoz"
  | "izgara"
  | "firin"
  | "bulasik-makinesi";

export interface BrandService {
  slug: string;
  brandSegment: string; // "empero-servis"
  urlPath: string; // "/empero-servis/empero-buzdolabi-servisi"
  brandId: string;
  brandName: string;
  equipment: EquipmentKey;
  equipmentLabel: string;
  name: string; // "Empero Buzdolabı Servisi"
  category: Service["category"];
  icon: string;
  shortDescription: string;
  intro: string;
  detail: string;
  symptoms: string[];
  parts: string[];
  faq: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

interface EquipmentDef {
  key: EquipmentKey;
  slugPart: string;
  label: string; // Buzdolabı
  labelLower: string; // buzdolabı
  category: Service["category"];
  icon: string;
  symptoms: string[];
  parts: string[];
  short: (b: string) => string;
  intro: (b: string) => string;
  detail: (b: string) => string;
}

const equipmentDefs: Record<EquipmentKey, EquipmentDef> = {
  buzdolabi: {
    key: "buzdolabi",
    slugPart: "buzdolabi",
    label: "Buzdolabı",
    labelLower: "buzdolabı",
    category: "sogutma",
    icon: "snowflake",
    symptoms: [
      "Yeterince soğutmama veya hiç soğutmama",
      "Aşırı buzlanma ve karlanma",
      "Kompresörün sürekli çalışması",
      "Anormal ses ve titreşim",
      "İç kısımda su birikmesi veya sızıntı",
    ],
    parts: [
      "Kompresör",
      "Termostat",
      "Fan motoru",
      "Kapı contası",
      "Soğutucu gaz (R134a / R404a / R600a)",
      "Buharlaştırıcı (evaporatör)",
    ],
    short: (b) =>
      `${b} marka endüstriyel buzdolapları için profesyonel soğutma, gaz dolumu ve arıza onarım hizmetleri.`,
    intro: (b) =>
      `${b} marka endüstriyel buzdolabı, dik tip soğutucu ve derin dondurucularının bakım, onarım ve soğutucu gaz dolumu işlemlerini profesyonel ekibimiz gerçekleştirmektedir. Buzdolabınız soğutmuyorsa, aşırı buzlanıyorsa, ses yapıyorsa veya su sızdırıyorsa deneyimli teknisyenlerimiz arızanın kaynağını hassas cihazlarla tespit eder ve aynı gün çözüme kavuşturur. Kompresör, termostat, fan motoru, kapı contası ve buharlaştırıcı gibi kritik parçalarda ortaya çıkan sorunları orijinal ${b} uyumlu yedek parçalarla gideririz. İstanbul genelinde 7/24 acil ${b} buzdolabı servisi hizmeti sunuyoruz.`,
    detail: (b) =>
      `${b} buzdolaplarında en sık karşılaşılan sorun soğutucu gaz kaçağıdır. Gaz kaçağı tespit edilmezse kompresör aşırı yüklenerek yanabilir ve çok daha maliyetli bir onarıma yol açar. Ekibimiz özel gaz kaçak dedektörleri ile kaçak noktasını belirler, lehimleme ile onarır ve ardından uygun freon dolumu yaparak cihazın performansını eski haline getirir. Ayrıca lokanta, otel, market ve gıda işletmelerindeki ${b} soğutma cihazlarınız için periyodik bakım kontratları düzenleyerek beklenmedik arızaların önüne geçer, enerji verimliliğinizi artırırız.`,
  },
  ocak: {
    key: "ocak",
    slugPart: "ocak",
    label: "Ocak",
    labelLower: "ocak",
    category: "pisirme",
    icon: "flame",
    symptoms: [
      "Ocak gözünün yanmaması veya zor yanması",
      "Alevin düzensiz ya da sarı renkli yanması",
      "Gaz kokusu ve kaçak şüphesi",
      "Pilot ateşlemenin tutmaması",
      "Gaz vanasının sıkışması",
    ],
    parts: [
      "Gaz vanası (musluk)",
      "Enjektör (memesi)",
      "Pilot ateşleme sistemi",
      "Termokupl (emniyet)",
      "Brülör başlığı",
    ],
    short: (b) =>
      `${b} marka endüstriyel ocakların bakım, gaz sistemi kontrolü ve arıza onarım hizmetleri.`,
    intro: (b) =>
      `${b} marka endüstriyel ocak, kuzine ve set üstü ocakların bakım, onarım ve gaz sistemi kontrolünü uzman teknisyenlerimiz gerçekleştirmektedir. Ocak gözü yanmıyorsa, alev sarı yanıyorsa, gaz kokusu alıyorsanız veya vana sıkışmışsa profesyonel ekibimiz sorunu güvenli şekilde tespit edip giderir. Gaz vanası, enjektör, pilot ateşleme, termokupl ve brülör başlıklarında oluşan arızaları ${b} uyumlu yedek parçalarla onarırız. Lokanta, yemekhane ve otel mutfaklarındaki ${b} ocaklarınız için İstanbul genelinde 7/24 acil servis veriyoruz.`,
    detail: (b) =>
      `${b} ocaklarında güvenlik her şeyden önce gelir. Gaz bağlantılarındaki en küçük bir kaçak bile ciddi risk taşır; bu nedenle her serviste tüm gaz hattını ve bağlantı noktalarını köpük testi ile kontrol eder, gerektiğinde sertifikalı onarım yaparız. Çok gözlü ${b} ocaklarında her bir gözün ısıtma performansını tek tek dengeler, enjektör temizliği ve ayarı ile eşit ve verimli bir alev elde ederiz. Düzenli bakım ile ocaklarınızın ömrünü uzatır, gaz tüketiminizi düşürürüz.`,
  },
  fritoz: {
    key: "fritoz",
    slugPart: "fritoz",
    label: "Fritöz",
    labelLower: "fritöz",
    category: "pisirme",
    icon: "droplet",
    symptoms: [
      "Yağın ısınmaması veya geç ısınması",
      "Termostatın sıcaklığı tutturamaması",
      "Aşırı ısınma ve emniyet termostatının atması",
      "Yağ sızıntısı",
      "Kontrol panelinin yanıt vermemesi",
    ],
    parts: [
      "Isıtma direnci (rezistans)",
      "Termostat",
      "Emniyet (limit) termostatı",
      "Yağ boşaltma vanası",
      "Kontrol paneli / kart",
    ],
    short: (b) =>
      `${b} marka endüstriyel fritözlerin bakım, temizlik ve arıza onarım hizmetleri.`,
    intro: (b) =>
      `${b} marka gazlı ve elektrikli endüstriyel fritözlerin bakım, onarım ve temizlik işlemlerini deneyimli teknisyenlerimiz yürütmektedir. Fritözünüz yağı ısıtmıyorsa, sıcaklığı tutturamıyorsa, emniyet termostatı sürekli atıyorsa veya yağ sızdırıyorsa hızlıca müdahale eder, arızayı çözüme kavuştururuz. Isıtma direnci, termostat, emniyet termostatı ve kontrol panelindeki sorunları ${b} uyumlu yedek parçalarla gideririz. İstanbul genelinde ${b} fritöz servisi için 7/24 acil müdahale garantisi sunuyoruz.`,
    detail: (b) =>
      `${b} fritözlerinde gıda güvenliği ve verimlilik esastır. Isıtma dirençlerinin üzerinde biriken yağ ve kir tabakası hem enerji tüketimini artırır hem de arıza riskini yükseltir; bu yüzden düzenli derinlemesine temizlik ve rezistans kontrolü yaparız. Yağ filtrasyon sistemini ve termostat kalibrasyonunu kontrol ederek yağ ömrünü uzatır, ürün kalitesini korur ve işletme maliyetlerinizi düşürürüz. Yoğun kullanılan ${b} fritözleri için periyodik bakım programları öneriyoruz.`,
  },
  izgara: {
    key: "izgara",
    slugPart: "izgara",
    label: "Izgara",
    labelLower: "ızgara",
    category: "pisirme",
    icon: "utensils",
    symptoms: [
      "Izgara elemanlarının ısınmaması",
      "Isının yüzeyde düzensiz dağılması",
      "Gazlı ızgaralarda alev sorunu",
      "Termostat arızası",
      "Yüzeyde deformasyon ve pas",
    ],
    parts: [
      "Isıtma elemanı / rezistans",
      "Gaz brülörü",
      "Termostat",
      "Lav taşı (lav taşlı modeller)",
      "Izgara plakası",
    ],
    short: (b) =>
      `${b} marka endüstriyel ızgaraların bakım, temizlik ve arıza onarım hizmetleri.`,
    intro: (b) =>
      `${b} marka gazlı ve elektrikli endüstriyel ızgaraların bakım, onarım ve temizlik hizmetlerini profesyonel ekibimiz sunmaktadır. Izgaranız ısınmıyorsa, ısı yüzeyde düzensiz dağılıyorsa, gaz brülöründe sorun varsa veya termostatı arızalıysa hızlıca müdahale ederiz. Isıtma elemanları, gaz brülörü, termostat ve ızgara plakalarındaki arızaları ${b} uyumlu yedek parçalarla gideririz. Restoran, kebapçı ve otel mutfaklarındaki ${b} ızgaralarınız için İstanbul genelinde 7/24 servis veriyoruz.`,
    detail: (b) =>
      `${b} ızgaralarında hijyen ve ısı homojenliği ürün kalitesini doğrudan etkiler. Yoğun kullanımda yüzeyde biriken yağ ve kalıntılar hem sağlık riski oluşturur hem de ısı dağılımını bozar; bu nedenle derinlemesine temizlik ve yüzey bakımı yaparız. Gazlı ${b} ızgaralarında brülör ayarı ve gaz kontrolünü, elektrikli modellerde ise rezistans ve termostat kalibrasyonunu gerçekleştirerek ızgaranızın verimli ve güvenli çalışmasını sağlarız.`,
  },
  firin: {
    key: "firin",
    slugPart: "firin",
    label: "Fırın",
    labelLower: "fırın",
    category: "pisirme",
    icon: "flame",
    symptoms: [
      "Fırının ısınmaması veya sıcaklığı tutturamaması",
      "Fanlı fırınlarda fan motorunun dönmemesi",
      "Kapı contasından ısı kaçağı",
      "Pişirmede ısı dengesizliği",
      "Kontrol paneli ve program arızası",
    ],
    parts: [
      "Isıtma rezistansı / brülör",
      "Termostat",
      "Fan motoru",
      "Kapı contası",
      "Kontrol kartı / termostat probu",
    ],
    short: (b) =>
      `${b} marka endüstriyel fırınların bakım, kalibrasyon ve arıza onarım hizmetleri.`,
    intro: (b) =>
      `${b} marka konveksiyonel, kombi ve endüstriyel fırınların bakım, onarım ve sıcaklık kalibrasyonunu sertifikalı teknisyenlerimiz gerçekleştirmektedir. Fırınınız ısınmıyorsa, sıcaklığı tutturamıyorsa, fanı dönmüyorsa veya kapısından ısı kaçırıyorsa aynı gün müdahale ederiz. Isıtma sistemi, termostat, fan motoru, kapı contası ve kontrol kartındaki arızaları ${b} uyumlu yedek parçalarla gideririz. İstanbul genelinde ${b} fırın servisi için 7/24 acil destek sunuyoruz.`,
    detail: (b) =>
      `${b} fırınlarında pişirme kalitesi doğrudan sıcaklık doğruluğuna ve ısı dağılımına bağlıdır. Fırınınızın gerçek iç sıcaklığını profesyonel ölçüm cihazlarıyla kontrol eder, termostat kalibrasyonunu yaparak ekranda gördüğünüz değerle fiili sıcaklığı eşitleriz. Fanlı ${b} fırınlarında hava sirkülasyonunu ve fan motorunu kontrol ederek her rafta eşit pişirme sağlarız. Kapı contası ve menteşe bakımı ile ısı kaybını önler, enerji tasarrufu sağlarız.`,
  },
  "bulasik-makinesi": {
    key: "bulasik-makinesi",
    slugPart: "bulasik-makinesi",
    label: "Bulaşık Makinesi",
    labelLower: "bulaşık makinesi",
    category: "yikama",
    icon: "droplet",
    symptoms: [
      "Bulaşıkların temiz yıkanmaması",
      "Suyun ısınmaması",
      "Deterjan veya parlatıcı almaması",
      "Su almama veya tahliye edememe",
      "Elektronik panelde hata kodu",
    ],
    parts: [
      "Yıkama pompası",
      "Deterjan / parlatıcı dozaj pompası",
      "Su ısıtma rezistansı (boyler)",
      "Spray (yıkama) kolu ve jetleri",
      "Elektronik kontrol kartı",
    ],
    short: (b) =>
      `${b} marka endüstriyel bulaşık makinelerinin bakım ve arıza onarım hizmetleri.`,
    intro: (b) =>
      `${b} marka adisyon tipi, giyotin ve konveyörlü endüstriyel bulaşık makinelerinin bakım ve onarım hizmetlerini uzman teknisyenlerimiz sunmaktadır. Makineniz bulaşıkları temiz yıkamıyorsa, suyu ısıtmıyorsa, deterjan/parlatıcı almıyorsa veya su tahliye edemiyorsa hızlıca müdahale ederiz. Yıkama pompası, dozaj pompaları, su ısıtma rezistansı, spray kolları ve elektronik karttaki arızaları ${b} uyumlu yedek parçalarla gideririz. Otel, lokanta ve toplu yemek işletmelerindeki ${b} bulaşık makineleri için İstanbul genelinde 7/24 servis veriyoruz.`,
    detail: (b) =>
      `${b} bulaşık makinelerinde yıkama kalitesi; su sıcaklığı, dozaj ayarı ve su sertliğiyle doğrudan ilişkilidir. Servisimizde deterjan ve parlatıcı dozaj pompalarının kalibrasyonunu yapar, boyler ve tank sıcaklıklarını kontrol eder, kireç nedeniyle tıkanan rezistans ve spray jetlerini temizleriz. Kireç çözücü bakım ve su yumuşatma kontrolü ile hem yıkama sonuçlarını iyileştirir hem de ${b} makinenizin ömrünü uzatırız. Yoğun işletmeler için periyodik bakım kontratları öneriyoruz.`,
  },
};

// Kombinasyon listesi: hangi marka hangi ekipman
const combos: { brandId: string; equipment: EquipmentKey }[] = [
  { brandId: "empero", equipment: "buzdolabi" },
  { brandId: "empero", equipment: "ocak" },
  { brandId: "empero", equipment: "fritoz" },
  { brandId: "empero", equipment: "izgara" },
  { brandId: "empero", equipment: "firin" },
  { brandId: "empero", equipment: "bulasik-makinesi" },

  { brandId: "inoksan", equipment: "buzdolabi" },
  { brandId: "inoksan", equipment: "ocak" },
  { brandId: "inoksan", equipment: "fritoz" },
  { brandId: "inoksan", equipment: "izgara" },
  { brandId: "inoksan", equipment: "firin" },
  { brandId: "inoksan", equipment: "bulasik-makinesi" },

  { brandId: "oztiryakiler", equipment: "buzdolabi" },
  { brandId: "oztiryakiler", equipment: "ocak" },
  { brandId: "oztiryakiler", equipment: "fritoz" },
  { brandId: "oztiryakiler", equipment: "izgara" },
  { brandId: "oztiryakiler", equipment: "firin" },
  { brandId: "oztiryakiler", equipment: "bulasik-makinesi" },

  { brandId: "kayalar-mutfak", equipment: "buzdolabi" },
  { brandId: "kayalar-mutfak", equipment: "ocak" },
  { brandId: "kayalar-mutfak", equipment: "fritoz" },
  { brandId: "kayalar-mutfak", equipment: "izgara" },
  { brandId: "kayalar-mutfak", equipment: "firin" },
  { brandId: "kayalar-mutfak", equipment: "bulasik-makinesi" },

  { brandId: "portabianco", equipment: "bulasik-makinesi" },
  { brandId: "portabianco", equipment: "buzdolabi" },

  { brandId: "maksan", equipment: "bulasik-makinesi" },
  { brandId: "maksan", equipment: "firin" },

  { brandId: "proexpert", equipment: "bulasik-makinesi" },
  { brandId: "adona", equipment: "bulasik-makinesi" },
  { brandId: "crystal", equipment: "bulasik-makinesi" },
  { brandId: "ndustrio", equipment: "bulasik-makinesi" },

  { brandId: "elektrolux", equipment: "firin" },
];

/**
 * URL'de kullanılacak marka eki. Varsayılan olarak Brand.slug'dan türetilir;
 * yazımı farklı olması istenen markalar burada override edilir.
 * (Elektrolüx markasının sayfa URL'lerinde "electrolux" yazımı tercih edildi.)
 */
const brandSegmentOverrides: Record<string, string> = {
  elektrolux: "electrolux",
};

/**
 * Docx kaynaklı sayfaların kendi meta başlık/açıklaması.
 * Anahtar = BrandService.slug. Kaydı olmayan sayfalar otomatik üretilen
 * meta'yı kullanmaya devam eder.
 */
const seoOverrides: Record<string, { title: string; description: string }> = {
  "empero-firin-servisi": {
    title: "Empero Fırın Servisi İstanbul | 0501 300 1981",
    description:
      "Empero fırın servisi için İstanbul'da 7/24 acil servis. Fırın, ocak tamiri, bakım ve onarım. Profesyonel çözüm.",
  },
  "empero-bulasik-makinesi-servisi": {
    title: "Empero Bulaşık Makinesi Yetkili Servis | 0501 300 1981",
    description:
      "Empero bulaşık makinesi servisi arıyorsanız profesyonel destek. Periyodik bakım, acil tamir, yedek parça. 15 yıllık tecrübe.",
  },
  "oztiryakiler-firin-servisi": {
    title: "Öztiryakiler Fırın Servisi İstanbul | 0501 300 1981",
    description:
      "Öztiryakiler fırın servisi için İstanbul'da 7/24 acil servis. Fırın tamiri, bakım, yedek parça. Profesyonel çözüm.",
  },
  "oztiryakiler-bulasik-makinesi-servisi": {
    title: "Öztiryakiler Bulaşık Makinesi Servisi İstanbul | 0501 300 1981",
    description:
      "Öztiryakiler bulaşık makinesi servisi için İstanbul'da 7/24 acil servis. Profesyonel teknik destek, hızlı çözüm. Hemen arayın.",
  },
  // docx'teki meta sehven Öztiryakiler'den kopyalanmıştı; marka adı düzeltildi
  "electrolux-firin-servisi": {
    title: "Electrolux Fırın Servisi İstanbul | 0501 300 1981",
    description:
      "Electrolux fırın servisi için İstanbul'da 7/24 acil servis. Fırın tamiri, bakım, yedek parça. Profesyonel çözüm. Hemen arayın.",
  },
};

function slugBase(brandSlug: string): string {
  return brandSlug.replace(/-servisi$/, "");
}

function buildFaq(
  brandName: string,
  def: EquipmentDef
): { question: string; answer: string }[] {
  return [
    {
      question: `${brandName} ${def.labelLower} servisi aynı gün geliyor mu?`,
      answer: `Evet. İstanbul genelinde ${brandName} ${def.labelLower} arızalarında aynı gün ve 7/24 acil servis hizmeti veriyoruz. 0501 300 19 81 numarasını arayarak veya WhatsApp üzerinden en kısa sürede randevu oluşturabilirsiniz. Merkezi ilçelere ortalama müdahale süremiz 1-2 saattir.`,
    },
    {
      question: `${brandName} ${def.labelLower} tamirinde orijinal yedek parça kullanıyor musunuz?`,
      answer: `Onarımlarda ${brandName} ekipmanlarına uyumlu, orijinal ve sertifikalı yedek parçalar kullanıyoruz. Bu sayede cihazınızın performansı ve ömrü korunur. Tüm işçilik ve değişen parçalar 6 ay garanti kapsamındadır.`,
    },
    {
      question: `${brandName} ${def.labelLower} için servis ücreti ne kadar?`,
      answer: `Ücret arızanın türüne ve değişecek parçaya göre değişir. Ekibimiz keşif sonrası net fiyat teklifi sunar; onayınız olmadan işleme başlamayız. Fiyat teklifi için bizi arayabilirsiniz.`,
    },
    {
      question: `Periyodik bakım kontratı yapıyor musunuz?`,
      answer: `Evet. İşletmenizin ihtiyacına göre aylık, üç aylık veya yıllık ${brandName} ${def.labelLower} bakım kontratları düzenliyoruz. Periyodik bakım, beklenmedik arızaları azaltır ve cihazınızın verimini yüksek tutar.`,
    },
  ];
}

export const brandServices: BrandService[] = combos.map(
  ({ brandId, equipment }) => {
    const brand = brands.find((b) => b.id === brandId);
    if (!brand) {
      throw new Error(`brand-services: '${brandId}' markası bulunamadı.`);
    }
    const def = equipmentDefs[equipment];
    const base = brandSegmentOverrides[brand.id] ?? slugBase(brand.slug);
    const slug = `${base}-${def.slugPart}-servisi`;
    const brandSegment = `${base}-servis`;
    const name = `${brand.name} ${def.label} Servisi`;

    return {
      slug,
      brandSegment,
      urlPath: `/${brandSegment}/${slug}`,
      brandId: brand.id,
      brandName: brand.name,
      equipment,
      equipmentLabel: def.label,
      name,
      category: def.category,
      icon: def.icon,
      shortDescription: def.short(brand.name),
      intro: def.intro(brand.name),
      detail: def.detail(brand.name),
      symptoms: def.symptoms,
      parts: def.parts,
      faq: buildFaq(brand.name, def),
      seoTitle:
        seoOverrides[slug]?.title ??
        `${name} İstanbul | ${def.label} Tamiri & Bakımı 7/24`,
      seoDescription:
        seoOverrides[slug]?.description ??
        `İstanbul'da ${brand.name} ${def.labelLower} servisi, ${brand.name} ${def.labelLower} tamiri ve bakımı. ${brand.name} ${def.labelLower} arızalarında 7/24 aynı gün müdahale, orijinal yedek parça ve 6 ay garanti.`,
      seoKeywords: [
        `${brand.name} ${def.labelLower} servisi`,
        `${brand.name} ${def.labelLower} tamiri`,
        `${brand.name} ${def.labelLower} tamircisi`,
        `${brand.name} ${def.labelLower} bakımı`,
        `${brand.name} ${def.labelLower} arızası`,
        `${brand.name} ${def.labelLower} servis`,
        `İstanbul ${brand.name} ${def.labelLower} servisi`,
        `${brand.name} servisi`,
        `${def.label} servisi İstanbul`,
      ],
    };
  }
);

/** Sayfanın meta başlığı docx'ten mi geliyor (layout şablonu eklenmemeli). */
export function hasSeoOverride(slug: string): boolean {
  return slug in seoOverrides;
}

export function getBrandServicesByBrand(brandId: string): BrandService[] {
  return brandServices.filter((bs) => bs.brandId === brandId);
}

// Bir hizmet (service) sayfasının denk geldiği ekipman anahtarı
const serviceIdToEquipment: Record<string, EquipmentKey> = {
  "endust-ocak": "ocak",
  "lokanta-ocagi": "ocak",
  "yemekhane-ocagi": "ocak",
  "yer-ocagi": "ocak",
  "sanayi-ocak": "ocak",
  "endust-firin": "firin",
  "pizza-firini": "firin",
  "konveksiyonel-firin": "firin",
  izgara: "izgara",
  fritoz: "fritoz",
  "endust-buzdolabi": "buzdolabi",
  "sanayi-buzdolabi": "buzdolabi",
  "buzdolabi-genel": "buzdolabi",
  "endust-bulasik": "bulasik-makinesi",
};

export function getBrandServicesByServiceId(
  serviceId: string
): BrandService[] {
  const equipment = serviceIdToEquipment[serviceId];
  if (!equipment) return [];
  return brandServices.filter((bs) => bs.equipment === equipment);
}
