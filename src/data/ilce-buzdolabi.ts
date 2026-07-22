// İlçe bazlı buzdolabı servisi sayfaları (yerel/uzun kuyruk SEO)
// Avrupa Yakası ilçeleri — her sayfanın gövde metni benzersizdir.
// URL deseni: /avcilar-buzdolabi-servisi  (kök seviye, tam eşleşme)

export interface IlceBuzdolabi {
  /** Tam sayfa slug'ı — URL ile birebir: "avcilar-buzdolabi-servisi" */
  slug: string;
  /** İlçe adı: "Avcılar" */
  name: string;
  /** İlçe slug'ı — /bolgeler/[slug] bağlantısı için: "avcilar" */
  ilceSlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Hero altındaki tek cümlelik özet */
  hero: string;
  /** Gövdenin benzersiz paragrafları */
  paragraphs: string[];
  /** Yerel dokunuş için mahalle örnekleri */
  mahalleler: string[];
  /** Yakın ilçe sayfalarının tam slug'ları */
  nearby: string[];
  faq: { question: string; answer: string }[];
}

// Ortak SSS üretici — ilçe adı enjekte edilerek her sayfada özelleştirilir.
function baseFaq(name: string): { question: string; answer: string }[] {
  return [
    {
      question: `${name}'da buzdolabı servisi ne kadar sürede geliyor?`,
      answer: `${name} ve çevresindeki tüm mahallelere aynı gün içinde ulaşıyoruz. Acil arızalarda buzdolabı tamircisi ekibimiz genellikle birkaç saat içinde adresinizde oluyor; endüstriyel ve sanayi tipi soğutucularda iş kaybını en aza indirmek için önceliklendirme yapıyoruz.`,
    },
    {
      question: `${name}'da endüstriyel buzdolabı tamiri için garanti veriyor musunuz?`,
      answer: `Evet. ${name}'da yaptığımız tüm buzdolabı tamir işlemleri, kullanılan orijinal yedek parça ve işçilik dahil 6 ay garantilidir. Gaz dolumu, kompresör değişimi ve termostat onarımı gibi işlemler faturalandırılır ve belgelendirilir.`,
    },
    {
      question: `${name}'da hangi tip buzdolaplarına servis veriyorsunuz?`,
      answer: `${name}'da ev tipi buzdolaplarından ticari soğutuculara, endüstriyel dik tip dolaplardan sanayi tipi soğuk odalara kadar her modele buzdolabı servis hizmeti sunuyoruz. Marka fark etmeksizin arıza tespiti, bakım ve onarım yapıyoruz.`,
    },
    {
      question: `${name}'da buzdolabı soğutmuyorsa ne yapmalıyım?`,
      answer: `Buzdolabınız soğutmuyorsa çoğunlukla gaz kaçağı, kompresör veya termostat arızası söz konusudur. Cihazı zorlamadan fişini çekip bize ulaşın; ${name} buzdolabı tamiri ekibimiz kaçak tespiti ve gaz dolumu ile sorunu aynı gün çözer.`,
    },
  ];
}

export const ilceBuzdolabiListesi: IlceBuzdolabi[] = [
  {
    slug: "avcilar-buzdolabi-servisi",
    name: "Avcılar",
    ilceSlug: "avcilar",
    metaTitle:
      "Avcılar Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Avcılar buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi hizmeti. Endüstriyel ve sanayi tipi buzdolabı servis, gaz dolumu ve arıza onarımında 7/24 aynı gün müdahale.",
    keywords: [
      "Avcılar buzdolabı servisi",
      "Avcılar buzdolabı tamiri",
      "Avcılar buzdolabı tamircisi",
      "Avcılar endüstriyel buzdolabı servisi",
      "Avcılar sanayi tipi buzdolabı tamiri",
      "Avcılar buzdolabı servis",
    ],
    hero: "Avcılar'da endüstriyel ve sanayi tipi buzdolabı servisi, tamiri ve gaz dolumu — aynı gün müdahale.",
    paragraphs: [
      "İstanbul Üniversitesi-Cerrahpaşa kampüsünün, sahil boyundaki kafelerin ve E-5 üzerindeki yoğun ticaretin buluştuğu Avcılar'da buzdolabı servisi ihtiyacı hiç bitmez. Öğrenci lokantaları, balıkçılar, market zincirleri ve toplu yemek işletmeleri için kesintisiz soğutma bir zorunluluktur. Bu yüzden Avcılar buzdolabı tamiri ekibimiz, arıza anında hızla devreye girerek ürün kaybını önler.",
      "Denizköşkler, Ambarlı, Firuzköy ve Cihangir başta olmak üzere Avcılar'ın tüm mahallelerinde endüstriyel buzdolabı servis hizmeti veriyoruz. Kompresör yanması, gaz kaçağı, termostat bozukluğu, fan motoru arızası ve buzlanma gibi sorunlarda deneyimli buzdolabı tamircisi ustalarımız yerinde arıza tespiti yapar ve orijinal yedek parça ile onarımı tamamlar.",
      "Ambarlı liman bölgesindeki gıda depoları ve sanayi tesislerinde kullanılan sanayi tipi soğutucular yüksek kapasiteyle çalışır; bu cihazlarda periyodik bakım şarttır. Avcılar sanayi tipi buzdolabı tamiri kapsamında freon (R404a, R134a) dolumu, kondenser temizliği ve elektronik kart onarımı yaparak enerji tüketimini düşürür, cihaz ömrünü uzatırız.",
      "İster sahildeki bir kafenin meşrubat dolabı ister bir fabrikanın soğuk odası olsun, Avcılar buzdolabı tamir talebinizde 7/24 acil destek hattımız açıktır. Aynı gün müdahale ve 6 ay garanti ile çalışıyor, tüm işlemleri faturalandırıp belgelendiriyoruz.",
    ],
    mahalleler: ["Merkez", "Cihangir", "Denizköşkler", "Ambarlı", "Firuzköy", "Gümüşpala", "Tahtakale", "Üniversite"],
    nearby: ["kucukcekmece-buzdolabi-servisi", "beylikduzu-buzdolabi-servisi", "basaksehir-buzdolabi-servisi", "esenyurt-buzdolabi-servisi"],
    faq: baseFaq("Avcılar"),
  },
  {
    slug: "arnavutkoy-buzdolabi-servisi",
    name: "Arnavutköy",
    ilceSlug: "arnavutkoy",
    metaTitle:
      "Arnavutköy Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Arnavutköy buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Havalimanı bölgesi lojistik ve gıda tesislerine endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Arnavutköy buzdolabı servisi",
      "Arnavutköy buzdolabı tamiri",
      "Arnavutköy buzdolabı tamircisi",
      "Arnavutköy endüstriyel buzdolabı servisi",
      "Arnavutköy sanayi tipi buzdolabı tamiri",
      "Arnavutköy buzdolabı servis",
    ],
    hero: "Arnavutköy'de havalimanı bölgesi gıda ve lojistik tesislerine endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "İstanbul Havalimanı'nın hemen yanında konumlanan Arnavutköy, lojistik depoları, catering firmaları ve toptancı gıda tesisleriyle hızla büyüyen bir ilçedir. Bu ağır trafikli soğutma altyapısında en küçük duraksama bile büyük kayıplar doğurur; bu nedenle Arnavutköy buzdolabı servisi ekibimiz yüksek kapasiteli sistemlerde uzmanlaşmıştır.",
      "Hadımköy, Taşoluk, Bolluca ve Haraççı gibi mahallelerdeki fabrika ve depoların sanayi tipi soğutucularında kompresör, evaporatör ve kondenser arızaları sık görülür. Arnavutköy sanayi tipi buzdolabı tamiri kapsamında bu kritik parçaları yerinde değiştirir, gaz dolumu yapar ve sistemi devreye alarak soğutma zincirinin kesilmesini önleriz.",
      "Catering ve toplu yemek üreten işletmeler için endüstriyel buzdolabı servis hizmeti hayati önemdedir. Arnavutköy buzdolabı tamircisi kadromuz, gıda güvenliği standartlarına uygun sıcaklık ayarı yapar, kapı contası ve termostat gibi bileşenleri kontrol ederek cihazların verimli çalışmasını sağlar.",
      "Havalimanı çevresindeki geniş hizmet alanına rağmen Arnavutköy buzdolabı tamiri taleplerine aynı gün yanıt veriyoruz. Orijinal yedek parça, 6 ay garanti ve 7/24 acil müdahale ile lojistik operasyonunuzun aksamamasını garanti ederiz.",
    ],
    mahalleler: ["Merkez", "Hadımköy", "Taşoluk", "Bolluca", "Ömerli", "Haraççı", "Boğazköy"],
    nearby: ["basaksehir-buzdolabi-servisi", "eyupsultan-buzdolabi-servisi", "sultangazi-buzdolabi-servisi", "catalca-buzdolabi-servisi"],
    faq: baseFaq("Arnavutköy"),
  },
  {
    slug: "bakirkoy-buzdolabi-servisi",
    name: "Bakırköy",
    ilceSlug: "bakirkoy",
    metaTitle:
      "Bakırköy Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Bakırköy buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi hizmeti. Ataköy, Yeşilköy ve Florya'da endüstriyel, sanayi tipi buzdolabı servis, gaz dolumu ve arıza onarımı.",
    keywords: [
      "Bakırköy buzdolabı servisi",
      "Bakırköy buzdolabı tamiri",
      "Bakırköy buzdolabı tamircisi",
      "Bakırköy endüstriyel buzdolabı servisi",
      "Bakırköy sanayi tipi buzdolabı tamiri",
      "Bakırköy buzdolabı servis",
    ],
    hero: "Bakırköy'de sahil restoranları ve otellere endüstriyel buzdolabı servisi, tamiri ve gaz dolumu.",
    paragraphs: [
      "Ataköy Marina'nın lüks restoranları, Yeşilköy ve Florya'nın sahil balıkçıları ve bölgedeki oteller Bakırköy'ü gastronomi açısından İstanbul'un en canlı ilçelerinden biri yapar. Bu işletmelerde vitrin dolabından soğuk odaya uzanan geniş bir soğutma parkı bulunur; Bakırköy buzdolabı servisi ekibimiz bu çeşitliliğin tamamına hâkimdir.",
      "Zeytinlik, Cevizlik, Osmaniye ve Şenlikköy'deki restoran mutfaklarında sıklıkla karşılaşılan gaz kaçağı, kompresör aşırı ısınması ve termostat arızalarını Bakırköy buzdolabı tamiri kapsamında yerinde çözüyoruz. Deneyimli buzdolabı tamircisi ustalarımız kaçak dedektörüyle hassas tespit yapar ve freon dolumuyla soğutmayı eski performansına döndürür.",
      "Otel ve toplu yemek mutfaklarındaki sanayi tipi soğutucular ile endüstriyel dik tip dolaplar sürekli yük altındadır. Bakırköy sanayi tipi buzdolabı tamiri hizmetinde kondenser temizliği, fan motoru değişimi ve elektronik kart onarımı yaparak enerji verimliliğini artırırız.",
      "Bakırköy'ün her mahallesine, marina bölgesinden havalimanı çevresine kadar, aynı gün buzdolabı tamir hizmeti ulaştırıyoruz. Tüm endüstriyel buzdolabı servis işlemlerimiz orijinal yedek parça ve 6 ay garanti ile yapılır.",
    ],
    mahalleler: ["Ataköy", "Yeşilköy", "Yeşilyurt", "Florya", "Zeytinlik", "Cevizlik", "Osmaniye", "Şenlikköy", "Kartaltepe"],
    nearby: ["bahcelievler-buzdolabi-servisi", "zeytinburnu-buzdolabi-servisi", "kucukcekmece-buzdolabi-servisi", "sisli-buzdolabi-servisi"],
    faq: baseFaq("Bakırköy"),
  },
  {
    slug: "bagcilar-buzdolabi-servisi",
    name: "Bağcılar",
    ilceSlug: "bagcilar",
    metaTitle:
      "Bağcılar Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Bağcılar buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Tekstil ve imalat sanayisine, toplu yemek fabrikalarına endüstriyel, sanayi tipi buzdolabı servis ve onarım.",
    keywords: [
      "Bağcılar buzdolabı servisi",
      "Bağcılar buzdolabı tamiri",
      "Bağcılar buzdolabı tamircisi",
      "Bağcılar endüstriyel buzdolabı servisi",
      "Bağcılar sanayi tipi buzdolabı tamiri",
      "Bağcılar buzdolabı servis",
    ],
    hero: "Bağcılar'ın sanayi sitelerine ve toplu yemek fabrikalarına endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Tekstil atölyeleri, imalathaneler ve sanayi siteleriyle İstanbul üretiminin kalbinde yer alan Bağcılar, aynı zamanda binlerce işçiye yemek üreten toplu yemek fabrikalarına ev sahipliği yapar. Bu tesislerdeki büyük kapasiteli soğutucularda arıza, üretim hattını doğrudan durdurur; bu yüzden Bağcılar buzdolabı servisi ekibimiz hızlı müdahaleyi önceliklendirir.",
      "Mahmutbey, Kirazlı, Güneşli ve Yenimahalle'deki fabrika mutfaklarının sanayi tipi buzdolapları gün boyu açılıp kapandığından kompresör ve conta yıpranması sıktır. Bağcılar sanayi tipi buzdolabı tamiri kapsamında kompresör değişimi, gaz dolumu ve kapı contası yenileme işlemlerini yerinde tamamlıyoruz.",
      "Esnaf lokantaları ve marketlerin ticari soğutucularında ise en sık gaz kaçağı ve termostat arızası görülür. Bağcılar buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız kaçak noktasını lehimleyerek onarır ve freon dolumu yaparak cihazı aynı gün çalışır hale getirir.",
      "Bağcılar'ın yoğun sanayi dokusunda buzdolabı tamir talepleri için 7/24 açığız. Tüm endüstriyel buzdolabı servis işlemlerimizde orijinal yedek parça kullanır, 6 ay garanti veririz.",
    ],
    mahalleler: ["Merkez", "Kirazlı", "Güneşli", "Mahmutbey", "Yenimahalle", "Demirkapı", "Bağlar", "Fatih"],
    nearby: ["bahcelievler-buzdolabi-servisi", "gungoren-buzdolabi-servisi", "esenler-buzdolabi-servisi", "sultangazi-buzdolabi-servisi"],
    faq: baseFaq("Bağcılar"),
  },
  {
    slug: "bahcelievler-buzdolabi-servisi",
    name: "Bahçelievler",
    ilceSlug: "bachelievler",
    metaTitle:
      "Bahçelievler Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Bahçelievler buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Şirinevler ve Yenibosna'da endüstriyel, sanayi tipi buzdolabı servis, gaz dolumu ve arıza onarımı.",
    keywords: [
      "Bahçelievler buzdolabı servisi",
      "Bahçelievler buzdolabı tamiri",
      "Bahçelievler buzdolabı tamircisi",
      "Bahçelievler endüstriyel buzdolabı servisi",
      "Bahçelievler sanayi tipi buzdolabı tamiri",
      "Bahçelievler buzdolabı servis",
    ],
    hero: "Bahçelievler'de restoran ve marketlere endüstriyel buzdolabı servisi, tamiri ve gaz dolumu.",
    paragraphs: [
      "Şirinevler'in hareketli ticaret aksı, Yenibosna'nın iş merkezleri ve ilçe genelindeki yoğun konut dokusu Bahçelievler'i restoran, kafe ve market bakımından son derece canlı kılar. Bu işletmelerin kesintisiz çalışması için Bahçelievler buzdolabı servisi ekibimiz hızlı ve güvenilir çözümler üretir.",
      "Soğanlı, Kocasinan, Zafer ve Cumhuriyet mahallelerindeki mutfaklarda meşrubat dolabı, tezgah altı soğutucu ve dik tip endüstriyel dolaplarda arıza sık yaşanır. Bahçelievler buzdolabı tamiri kapsamında buzdolabı tamircisi ustalarımız soğutmama, buzlanma ve ses yapma gibi şikâyetleri yerinde teşhis eder.",
      "İş merkezlerindeki yemekhaneler ve büyük marketlerdeki sanayi tipi soğutucularda periyodik bakım, enerji faturasını doğrudan etkiler. Bahçelievler sanayi tipi buzdolabı tamiri hizmetimizde kondenser temizliği, gaz dolumu ve termostat kalibrasyonu yaparak verimliliği yükseltiriz.",
      "Bahçelievler'in tüm mahallelerine aynı gün buzdolabı tamir hizmeti sunuyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça ve 6 ay garanti kapsamındadır; 7/24 acil hattımız her zaman açıktır.",
    ],
    mahalleler: ["Şirinevler", "Yenibosna", "Soğanlı", "Kocasinan", "Zafer", "Cumhuriyet", "Siyavuşpaşa"],
    nearby: ["bagcilar-buzdolabi-servisi", "gungoren-buzdolabi-servisi", "bakirkoy-buzdolabi-servisi", "zeytinburnu-buzdolabi-servisi"],
    faq: baseFaq("Bahçelievler"),
  },
  {
    slug: "basaksehir-buzdolabi-servisi",
    name: "Başakşehir",
    ilceSlug: "basaksehir",
    metaTitle:
      "Başakşehir Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Başakşehir buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. İkitelli OSB ve şehir hastanesi bölgesine endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Başakşehir buzdolabı servisi",
      "Başakşehir buzdolabı tamiri",
      "Başakşehir buzdolabı tamircisi",
      "Başakşehir endüstriyel buzdolabı servisi",
      "Başakşehir sanayi tipi buzdolabı tamiri",
      "Başakşehir buzdolabı servis",
    ],
    hero: "Başakşehir'de İkitelli OSB ve şehir hastanesi bölgesine endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Modern konut projeleri, İstanbul'un en büyük sağlık kompleksi olan şehir hastanesi ve dev İkitelli Organize Sanayi Bölgesi Başakşehir'i hem yerleşim hem sanayi açısından öne çıkarır. Bu geniş yelpazedeki soğutma ihtiyacına Başakşehir buzdolabı servisi ekibimiz uçtan uca yanıt verir.",
      "İkitelli OSB'deki fabrikalarda ve gıda üretim tesislerinde kullanılan sanayi tipi soğutucular ağır yük altında çalışır. Başakşehir sanayi tipi buzdolabı tamiri kapsamında kompresör, kondenser ve evaporatör arızalarını yerinde giderir, freon dolumu ile soğutma kapasitesini yeniden sağlarız.",
      "Kayaşehir, Ziya Gökalp ve Bahçeşehir'deki kafe, restoran ve marketlerin ticari dolaplarında gaz kaçağı ve fan motoru sorunları sık görülür. Başakşehir buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız arızayı hızla tespit eder ve aynı gün onarır.",
      "Şehir hastanesi çevresindeki yoğun trafiğe rağmen Başakşehir buzdolabı tamir taleplerine aynı gün ulaşıyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal yedek parça ve 6 ay garanti ile tamamlanır.",
    ],
    mahalleler: ["Kayaşehir", "İkitelli", "Ziya Gökalp", "Bahçeşehir", "Güvercintepe", "Şahintepe", "Başak"],
    nearby: ["avcilar-buzdolabi-servisi", "kucukcekmece-buzdolabi-servisi", "arnavutkoy-buzdolabi-servisi", "sultangazi-buzdolabi-servisi"],
    faq: baseFaq("Başakşehir"),
  },
  {
    slug: "bayrampasa-buzdolabi-servisi",
    name: "Bayrampaşa",
    ilceSlug: "bayrampaşa",
    metaTitle:
      "Bayrampaşa Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Bayrampaşa buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Gıda toptancıları ve imalathanelere endüstriyel, sanayi tipi buzdolabı servis, gaz dolumu ve onarım.",
    keywords: [
      "Bayrampaşa buzdolabı servisi",
      "Bayrampaşa buzdolabı tamiri",
      "Bayrampaşa buzdolabı tamircisi",
      "Bayrampaşa endüstriyel buzdolabı servisi",
      "Bayrampaşa sanayi tipi buzdolabı tamiri",
      "Bayrampaşa buzdolabı servis",
    ],
    hero: "Bayrampaşa'da gıda toptancıları ve imalathanelere endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Gıda toptancıları, soğuk hava depoları ve imalathanelerin yoğunlaştığı Bayrampaşa, İstanbul'un lojistik ve dağıtım ağının önemli bir düğüm noktasıdır. Toptan gıda saklayan işletmelerde soğutma kesintisi tonlarca ürünü riske atar; bu nedenle Bayrampaşa buzdolabı servisi ekibimiz büyük hacimli sistemlerde deneyimlidir.",
      "Yenidoğan, Terazidere, Muratpaşa ve Altıntepsi'deki depoların sanayi tipi soğutucularında kompresör yükü yüksektir. Bayrampaşa sanayi tipi buzdolabı tamiri kapsamında kompresör revizyonu, gaz dolumu ve kondenser bakımıyla soğuk zincirin kopmasını engelleriz.",
      "Esnaf lokantaları ve marketlerin ticari dolaplarında ise gaz kaçağı ve termostat arızaları öne çıkar. Bayrampaşa buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız kaçağı tespit edip onarır, freon dolumuyla cihazı aynı gün devreye alır.",
      "Bayrampaşa'nın tüm mahallelerine hızlı buzdolabı tamir hizmeti veriyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça, 6 ay garanti ve 7/24 acil müdahale kapsamındadır.",
    ],
    mahalleler: ["Yenidoğan", "Kartaltepe", "Terazidere", "Muratpaşa", "Vatan", "Altıntepsi", "Cevatpaşa"],
    nearby: ["eyupsultan-buzdolabi-servisi", "gaziosmanpasa-buzdolabi-servisi", "zeytinburnu-buzdolabi-servisi", "esenler-buzdolabi-servisi"],
    faq: baseFaq("Bayrampaşa"),
  },
  {
    slug: "besiktas-buzdolabi-servisi",
    name: "Beşiktaş",
    ilceSlug: "besiktas",
    metaTitle:
      "Beşiktaş Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Beşiktaş buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Levent plazaları, sahil restoranları ve otellere endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Beşiktaş buzdolabı servisi",
      "Beşiktaş buzdolabı tamiri",
      "Beşiktaş buzdolabı tamircisi",
      "Beşiktaş endüstriyel buzdolabı servisi",
      "Beşiktaş sanayi tipi buzdolabı tamiri",
      "Beşiktaş buzdolabı servis",
    ],
    hero: "Beşiktaş'ta lüks restoranlar, oteller ve Levent plazalarına endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Bebek ve Ortaköy'ün boğaz manzaralı restoranları, Levent-Etiler'in kurumsal yemekhaneleri ve ilçenin sayısız oteli Beşiktaş'ı yüksek beklentili bir gastronomi merkezine dönüştürür. Bu işletmelerde markalı, yüksek performanslı soğutucular kullanılır; Beşiktaş buzdolabı servisi ekibimiz bu premium ekipmanlara özel yaklaşır.",
      "Levent'teki plazaların büyük yemekhanelerinde ve otel mutfaklarında sanayi tipi buzdolapları ile endüstriyel soğuk odalar bulunur. Beşiktaş sanayi tipi buzdolabı tamiri kapsamında kompresör, elektronik kart ve kondenser arızalarını gidererek yüksek yoğunluktaki servisin aksamamasını sağlarız.",
      "Sahildeki restoranların vitrin ve meşrubat dolaplarında gaz kaçağı ve soğutmama en yaygın şikâyettir. Beşiktaş buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız hassas kaçak tespiti ve freon dolumuyla sorunu aynı gün çözer.",
      "Beşiktaş'ın Bebek'ten Balmumcu'ya tüm mahallelerine hızlı buzdolabı tamir hizmeti ulaştırıyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal yedek parça ve 6 ay garanti ile yapılır.",
    ],
    mahalleler: ["Levent", "Etiler", "Bebek", "Ortaköy", "Gayrettepe", "Balmumcu", "Nispetiye", "Ihlamur"],
    nearby: ["sisli-buzdolabi-servisi", "sariyer-buzdolabi-servisi", "beyoglu-buzdolabi-servisi", "kagithane-buzdolabi-servisi"],
    faq: baseFaq("Beşiktaş"),
  },
  {
    slug: "beylikduzu-buzdolabi-servisi",
    name: "Beylikdüzü",
    ilceSlug: "beylikduzu",
    metaTitle:
      "Beylikdüzü Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Beylikdüzü buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. TÜYAP, AVM'ler ve restoran zincirlerine endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Beylikdüzü buzdolabı servisi",
      "Beylikdüzü buzdolabı tamiri",
      "Beylikdüzü buzdolabı tamircisi",
      "Beylikdüzü endüstriyel buzdolabı servisi",
      "Beylikdüzü sanayi tipi buzdolabı tamiri",
      "Beylikdüzü buzdolabı servis",
    ],
    hero: "Beylikdüzü'nde AVM'ler, TÜYAP ve restoran zincirlerine endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Yeni yerleşim projeleri, alışveriş merkezleri, showroom'lar, marina ve TÜYAP Fuar Alanı ile Beylikdüzü Avrupa Yakası'nın en dinamik ilçelerinden biridir. Fuar dönemlerindeki catering yoğunluğu ve zincir restoranların yüksek trafiği kesintisiz soğutma gerektirir; Beylikdüzü buzdolabı servisi ekibimiz bu tempoya ayak uydurur.",
      "Gürpınar, Yakuplu ve Kavaklı'daki depolar ile fuar catering mutfaklarındaki sanayi tipi soğutucular yüksek kapasiteyle çalışır. Beylikdüzü sanayi tipi buzdolabı tamiri kapsamında kompresör değişimi, gaz dolumu ve kondenser temizliği yaparak soğutma performansını güvence altına alırız.",
      "AVM içindeki restoran ve kafelerin vitrin dolaplarında gaz kaçağı ve termostat arızaları sık görülür. Beylikdüzü buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız arızayı yerinde teşhis eder ve orijinal parça ile aynı gün onarır.",
      "Beylikdüzü'nün sahil hattından Adnan Kahveci'ye tüm mahallelerine hızlı buzdolabı tamir hizmeti sunuyoruz. Endüstriyel buzdolabı servis işlemlerimiz 6 ay garanti ve 7/24 acil müdahale kapsamındadır.",
    ],
    mahalleler: ["Gürpınar", "Kavaklı", "Yakuplu", "Adnan Kahveci", "Barış", "Cumhuriyet", "Sahil", "Büyükşehir"],
    nearby: ["avcilar-buzdolabi-servisi", "esenyurt-buzdolabi-servisi", "buyukcekmece-buzdolabi-servisi", "kucukcekmece-buzdolabi-servisi"],
    faq: baseFaq("Beylikdüzü"),
  },
  {
    slug: "beyoglu-buzdolabi-servisi",
    name: "Beyoğlu",
    ilceSlug: "beyoglu",
    metaTitle:
      "Beyoğlu Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Beyoğlu buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. İstiklal, Galata ve Karaköy'ün meyhane, otel ve kafelerine endüstriyel, sanayi tipi buzdolabı servis.",
    keywords: [
      "Beyoğlu buzdolabı servisi",
      "Beyoğlu buzdolabı tamiri",
      "Beyoğlu buzdolabı tamircisi",
      "Beyoğlu endüstriyel buzdolabı servisi",
      "Beyoğlu sanayi tipi buzdolabı tamiri",
      "Beyoğlu buzdolabı servis",
    ],
    hero: "Beyoğlu'nda İstiklal, Galata ve Karaköy'ün meyhane ve otellerine endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "İstiklal Caddesi'nin tarihi meyhaneleri, Galata ve Karaköy'ün butik kafeleri, Taksim çevresindeki oteller Beyoğlu'nu 7/24 çalışan bir gastronomi ilçesi yapar. Dar sokaklardaki yoğun işletme trafiğinde soğutma arızaları hızlı çözüm gerektirir; Beyoğlu buzdolabı servisi ekibimiz bölgeye hâkim ve çeviktir.",
      "Cihangir, Kasımpaşa, Şişhane ve Tarlabaşı'ndaki mutfaklarda vitrin dolabı, tezgah altı soğutucu ve meze dolabında gaz kaçağı, buzlanma ve soğutmama şikâyetleri sıktır. Beyoğlu buzdolabı tamiri kapsamında buzdolabı tamircisi ustalarımız bu arızaları yerinde ve hızla giderir.",
      "Otel mutfakları ve büyük restoranlardaki sanayi tipi soğutucular ile endüstriyel dik tip dolaplar sürekli yük altındadır. Beyoğlu sanayi tipi buzdolabı tamiri hizmetimizde kompresör, termostat ve fan motoru onarımı ile freon dolumu yaparak kesintisiz hizmeti sürdürürüz.",
      "Beyoğlu'nun Taksim'den Karaköy'e uzanan yoğun dokusuna aynı gün buzdolabı tamir hizmeti ulaştırıyoruz. Tüm endüstriyel buzdolabı servis işlemlerimiz orijinal parça ve 6 ay garanti ile yapılır.",
    ],
    mahalleler: ["Taksim", "Cihangir", "Galata", "Karaköy", "Tarlabaşı", "Kasımpaşa", "Şişhane", "Kuledibi"],
    nearby: ["besiktas-buzdolabi-servisi", "sisli-buzdolabi-servisi", "kagithane-buzdolabi-servisi", "fatih-buzdolabi-servisi"],
    faq: baseFaq("Beyoğlu"),
  },
  {
    slug: "buyukcekmece-buzdolabi-servisi",
    name: "Büyükçekmece",
    ilceSlug: "buyukccekmece",
    metaTitle:
      "Büyükçekmece Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Büyükçekmece buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Sahil otelleri ve düğün salonlarına endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Büyükçekmece buzdolabı servisi",
      "Büyükçekmece buzdolabı tamiri",
      "Büyükçekmece buzdolabı tamircisi",
      "Büyükçekmece endüstriyel buzdolabı servisi",
      "Büyükçekmece sanayi tipi buzdolabı tamiri",
      "Büyükçekmece buzdolabı servis",
    ],
    hero: "Büyükçekmece'de sahil otelleri ve düğün salonlarına endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Göl ve deniz kıyısındaki oteller, Kumburgaz'ın yazlık tesisleri ve ilçe genelindeki büyük düğün salonları Büyükçekmece'yi özellikle yaz aylarında yoğun bir ağırlama merkezine dönüştürür. Yüksek kapasiteli etkinlik mutfaklarında soğutma arızası doğrudan servis kaybı demektir; Büyükçekmece buzdolabı servisi ekibimiz bu yoğunluğa hazırdır.",
      "Mimarsinan, Celaliye, Kamiloba ve Türkoba'daki tesislerin sanayi tipi soğutucularında ve soğuk odalarında kompresör ile kondenser arızaları öne çıkar. Büyükçekmece sanayi tipi buzdolabı tamiri kapsamında bu parçaları değiştirir, gaz dolumu yapar ve sistemi devreye alırız.",
      "Düğün salonu ve otel mutfaklarındaki endüstriyel dolaplarda gaz kaçağı ve termostat arızaları sık görülür. Büyükçekmece buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız arızayı hızla tespit eder ve aynı gün onarır.",
      "Kumburgaz'dan Mimarsinan'a Büyükçekmece'nin geniş sahil hattına hızlı buzdolabı tamir hizmeti veriyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça, 6 ay garanti ve 7/24 acil destek kapsamındadır.",
    ],
    mahalleler: ["Mimarsinan", "Kumburgaz", "Celaliye", "Kamiloba", "Türkoba", "Atatürk", "Fatih", "Cumhuriyet"],
    nearby: ["beylikduzu-buzdolabi-servisi", "silivri-buzdolabi-servisi", "catalca-buzdolabi-servisi", "esenyurt-buzdolabi-servisi"],
    faq: baseFaq("Büyükçekmece"),
  },
  {
    slug: "catalca-buzdolabi-servisi",
    name: "Çatalca",
    ilceSlug: "catalca",
    metaTitle:
      "Çatalca Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Çatalca buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Mesire, köy kahvaltı işletmeleri ve gıda üretimine endüstriyel, sanayi tipi buzdolabı servis.",
    keywords: [
      "Çatalca buzdolabı servisi",
      "Çatalca buzdolabı tamiri",
      "Çatalca buzdolabı tamircisi",
      "Çatalca endüstriyel buzdolabı servisi",
      "Çatalca sanayi tipi buzdolabı tamiri",
      "Çatalca buzdolabı servis",
    ],
    hero: "Çatalca'da köy kahvaltı işletmeleri ve gıda üretim tesislerine endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "İstanbul'un kırsal karakterini koruyan Çatalca; mesire alanları, ünlü köy kahvaltısı işletmeleri, süt ve et üretim çiftlikleriyle tanınır. Tarımsal gıdanın saklandığı bu tesislerde soğutma, ürün güvenliğinin temelidir; bu yüzden Çatalca buzdolabı servisi ekibimiz uzak noktalara dahi ulaşmayı önceliklendirir.",
      "Ferhatpaşa, Kaleiçi, İnceğiz ve Kabakça çevresindeki çiftlik ve gıda tesislerindeki sanayi tipi soğutucular ile soğuk hava depolarında kompresör ve yalıtım kaynaklı sorunlar görülür. Çatalca sanayi tipi buzdolabı tamiri kapsamında kompresör revizyonu, gaz dolumu ve sistem kontrolü yaparız.",
      "Köy kahvaltısı ve lokanta işletmelerinin ticari dolaplarında gaz kaçağı ve termostat arızaları sıktır. Çatalca buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız arızayı yerinde teşhis eder ve freon dolumuyla cihazı çalışır hale getirir.",
      "Çatalca'nın geniş kırsal coğrafyasına buzdolabı tamir hizmeti ulaştırıyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça ve 6 ay garanti ile yapılır; randevu için 7/24 açığız.",
    ],
    mahalleler: ["Ferhatpaşa", "Kaleiçi", "İnceğiz", "Kabakça", "Çakıl", "Ovayenice", "Muratbey"],
    nearby: ["silivri-buzdolabi-servisi", "buyukcekmece-buzdolabi-servisi", "arnavutkoy-buzdolabi-servisi", "basaksehir-buzdolabi-servisi"],
    faq: baseFaq("Çatalca"),
  },
  {
    slug: "esenler-buzdolabi-servisi",
    name: "Esenler",
    ilceSlug: "esenler",
    metaTitle:
      "Esenler Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Esenler buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Büyük İstanbul Otogarı çevresi lokanta ve işletmelerine endüstriyel, sanayi tipi buzdolabı servis.",
    keywords: [
      "Esenler buzdolabı servisi",
      "Esenler buzdolabı tamiri",
      "Esenler buzdolabı tamircisi",
      "Esenler endüstriyel buzdolabı servisi",
      "Esenler sanayi tipi buzdolabı tamiri",
      "Esenler buzdolabı servis",
    ],
    hero: "Esenler'de otogar çevresi lokanta ve işletmelere endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Büyük İstanbul Otogarı'nın bulunduğu Esenler, 7/24 çalışan lokantalar, dinlenme tesisleri ve yoğun konut dokusuyla sürekli hareket halindedir. Gece gündüz açık işletmelerde soğutma kesintisi büyük sorun yaratır; Esenler buzdolabı servisi ekibimiz her saat müdahaleye hazırdır.",
      "Menderes, Oruçreis, Fevzi Çakmak ve Namık Kemal mahallelerindeki lokanta ve marketlerin ticari soğutucularında gaz kaçağı, buzlanma ve soğutmama şikâyetleri sıktır. Esenler buzdolabı tamiri kapsamında buzdolabı tamircisi ustalarımız bu arızaları hızla teşhis edip onarır.",
      "Otogar çevresindeki büyük yeme-içme tesislerinde sanayi tipi soğutucular ve endüstriyel dolaplar yoğun kullanılır. Esenler sanayi tipi buzdolabı tamiri hizmetimizde kompresör, kondenser ve termostat onarımı ile freon dolumu yaparız.",
      "Esenler'in tüm mahallelerine aynı gün buzdolabı tamir hizmeti veriyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça, 6 ay garanti ve 7/24 acil müdahale kapsamındadır.",
    ],
    mahalleler: ["Menderes", "Havaalanı", "Oruçreis", "Fevzi Çakmak", "Namık Kemal", "Turgutreis", "Nine Hatun"],
    nearby: ["bagcilar-buzdolabi-servisi", "bayrampasa-buzdolabi-servisi", "gungoren-buzdolabi-servisi", "esenyurt-buzdolabi-servisi"],
    faq: baseFaq("Esenler"),
  },
  {
    slug: "esenyurt-buzdolabi-servisi",
    name: "Esenyurt",
    ilceSlug: "esenyurt",
    metaTitle:
      "Esenyurt Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Esenyurt buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Yoğun konut, düğün salonları ve imalathanelere endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Esenyurt buzdolabı servisi",
      "Esenyurt buzdolabı tamiri",
      "Esenyurt buzdolabı tamircisi",
      "Esenyurt endüstriyel buzdolabı servisi",
      "Esenyurt sanayi tipi buzdolabı tamiri",
      "Esenyurt buzdolabı servis",
    ],
    hero: "Esenyurt'ta yoğun konut, düğün salonları ve imalathanelere endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "İstanbul'un en kalabalık ilçelerinden Esenyurt; sayısız lokanta, kafe, düğün salonu ve imalathaneyle sürekli büyüyen bir ticaret merkezidir. Bu yoğunlukta soğutma cihazları neredeyse hiç durmadan çalışır ve arıza kaçınılmaz olur; Esenyurt buzdolabı servisi ekibimiz bu talep hacmini karşılayacak kapasitededir.",
      "Yenikent, Saadetdere, Talatpaşa ve Örnek mahallelerindeki işletmelerin ticari dolaplarında gaz kaçağı, kompresör aşırı ısınması ve termostat arızaları sık görülür. Esenyurt buzdolabı tamiri kapsamında buzdolabı tamircisi ustalarımız arızayı yerinde teşhis edip orijinal parça ile onarır.",
      "Düğün salonları ve toplu yemek işletmelerindeki sanayi tipi soğutucular ile endüstriyel soğuk odalar yüksek yük altında çalışır. Esenyurt sanayi tipi buzdolabı tamiri hizmetimizde kompresör değişimi, gaz dolumu ve kondenser temizliği yaparak kapasiteyi korur, enerji tüketimini düşürürüz.",
      "Esenyurt'un geniş yerleşim alanının tamamına aynı gün buzdolabı tamir hizmeti ulaştırıyoruz. Endüstriyel buzdolabı servis işlemlerimiz 6 ay garanti ve 7/24 acil destek kapsamındadır.",
    ],
    mahalleler: ["Yenikent", "İncirtepe", "Saadetdere", "Fatih", "Cumhuriyet", "Talatpaşa", "Zafer", "Namık Kemal", "Örnek"],
    nearby: ["beylikduzu-buzdolabi-servisi", "avcilar-buzdolabi-servisi", "basaksehir-buzdolabi-servisi", "buyukcekmece-buzdolabi-servisi"],
    faq: baseFaq("Esenyurt"),
  },
  {
    slug: "eyupsultan-buzdolabi-servisi",
    name: "Eyüpsultan",
    ilceSlug: "eyupsultan",
    metaTitle:
      "Eyüpsultan Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Eyüpsultan buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Turizm bölgesi, Göktürk ve Alibeyköy sanayisine endüstriyel, sanayi tipi buzdolabı servis.",
    keywords: [
      "Eyüpsultan buzdolabı servisi",
      "Eyüpsultan buzdolabı tamiri",
      "Eyüpsultan buzdolabı tamircisi",
      "Eyüpsultan endüstriyel buzdolabı servisi",
      "Eyüpsultan sanayi tipi buzdolabı tamiri",
      "Eyüpsultan buzdolabı servis",
    ],
    hero: "Eyüpsultan'da turizm işletmeleri, Göktürk ve Alibeyköy'e endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Eyüp Sultan Camii çevresindeki geleneksel pide ve lokantalar, Göktürk'ün lüks restoranları ve Alibeyköy'ün sanayi dokusu Eyüpsultan'ı çok yönlü bir ilçe yapar. Bu farklı işletme tiplerinin tümünde soğutma sürekliliği kritiktir; Eyüpsultan buzdolabı servisi ekibimiz her segmente uygun çözüm sunar.",
      "Alibeyköy ve Silahtarağa'daki imalathane ve depoların sanayi tipi soğutucularında kompresör ve kondenser arızaları öne çıkar. Eyüpsultan sanayi tipi buzdolabı tamiri kapsamında bu parçaların onarım ve değişimini yapar, gaz dolumuyla soğutma kapasitesini geri kazandırırız.",
      "Turizm bölgesindeki lokantaların vitrin ve meze dolaplarında gaz kaçağı ve termostat sorunları sıktır. Eyüpsultan buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız arızayı hızla tespit edip aynı gün onarır.",
      "Göktürk'ten Rami'ye Eyüpsultan'ın tüm mahallelerine hızlı buzdolabı tamir hizmeti veriyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça ve 6 ay garanti ile yapılır.",
    ],
    mahalleler: ["Alibeyköy", "Göktürk", "Rami", "Silahtarağa", "Nişanca", "Karadolap", "Yeşilpınar"],
    nearby: ["gaziosmanpasa-buzdolabi-servisi", "kagithane-buzdolabi-servisi", "bayrampasa-buzdolabi-servisi", "arnavutkoy-buzdolabi-servisi"],
    faq: baseFaq("Eyüpsultan"),
  },
  {
    slug: "fatih-buzdolabi-servisi",
    name: "Fatih",
    ilceSlug: "fatih",
    metaTitle:
      "Fatih Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Fatih buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Tarihi yarımada otelleri, Aksaray ve Laleli ticaretine endüstriyel, sanayi tipi buzdolabı servis.",
    keywords: [
      "Fatih buzdolabı servisi",
      "Fatih buzdolabı tamiri",
      "Fatih buzdolabı tamircisi",
      "Fatih endüstriyel buzdolabı servisi",
      "Fatih sanayi tipi buzdolabı tamiri",
      "Fatih buzdolabı servis",
    ],
    hero: "Fatih'te tarihi yarımada otelleri ve lokantalarına endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Sultanahmet'in otelleri, Aksaray ve Laleli'nin ticaret yoğunluğu, Balat-Fener'in butik kafeleri ve Kumkapı'nın balık restoranlarıyla Fatih, İstanbul'un en köklü gastronomi ilçesidir. Turist trafiğinin yüksek olduğu bu bölgede soğutma arızası itibar kaybına yol açar; Fatih buzdolabı servisi ekibimiz hızlı ve titiz çalışır.",
      "Aksaray, Fındıkzade, Çapa ve Laleli'deki otel ve lokantaların sanayi tipi soğutucularında ve endüstriyel dik tip dolaplarında kompresör, fan motoru ve termostat arızaları görülür. Fatih sanayi tipi buzdolabı tamiri kapsamında bu bileşenleri onarır, freon dolumu yaparak performansı geri getiririz.",
      "Kumkapı balıkçılarının ve Balat kafelerinin vitrin dolaplarında gaz kaçağı ve buzlanma en yaygın sorundur. Fatih buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız kaçak tespiti ve gaz dolumuyla soğutmayı aynı gün düzeltir.",
      "Tarihi yarımadanın dar sokaklarına dahi hızlı buzdolabı tamir hizmeti ulaştırıyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça, 6 ay garanti ve 7/24 acil destek kapsamındadır.",
    ],
    mahalleler: ["Aksaray", "Fındıkzade", "Çapa", "Cerrahpaşa", "Sultanahmet", "Balat", "Fener", "Laleli", "Kumkapı"],
    nearby: ["zeytinburnu-buzdolabi-servisi", "beyoglu-buzdolabi-servisi", "eyupsultan-buzdolabi-servisi", "bayrampasa-buzdolabi-servisi"],
    faq: baseFaq("Fatih"),
  },
  {
    slug: "gaziosmanpasa-buzdolabi-servisi",
    name: "Gaziosmanpaşa",
    ilceSlug: "gaziosmanpasa",
    metaTitle:
      "Gaziosmanpaşa Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Gaziosmanpaşa buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Esnaf lokantaları ve düğün salonlarına endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Gaziosmanpaşa buzdolabı servisi",
      "Gaziosmanpaşa buzdolabı tamiri",
      "Gaziosmanpaşa buzdolabı tamircisi",
      "Gaziosmanpaşa endüstriyel buzdolabı servisi",
      "Gaziosmanpaşa sanayi tipi buzdolabı tamiri",
      "Gaziosmanpaşa buzdolabı servis",
    ],
    hero: "Gaziosmanpaşa'da esnaf lokantaları ve düğün salonlarına endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Yoğun konut dokusu, hareketli esnaf lokantaları ve çok sayıda düğün salonuyla Gaziosmanpaşa, mahalle esnafının canlı olduğu bir ilçedir. Her gün yüksek tempoda çalışan bu işletmelerde soğutma arızası servisin durması demektir; Gaziosmanpaşa buzdolabı servisi ekibimiz esnafın yanında hızlı çözümle olur.",
      "Karayolları, Sarıgöl, Küçükköy ve Yenidoğan mahallelerindeki lokanta ve marketlerin ticari dolaplarında gaz kaçağı, soğutmama ve termostat arızaları sıktır. Gaziosmanpaşa buzdolabı tamiri kapsamında buzdolabı tamircisi ustalarımız arızayı yerinde teşhis edip onarır.",
      "Düğün salonları ve toplu yemek işletmelerindeki sanayi tipi soğutucular ile endüstriyel dolaplar ağır yük altındadır. Gaziosmanpaşa sanayi tipi buzdolabı tamiri hizmetimizde kompresör, kondenser ve fan onarımı ile freon dolumu yaparız.",
      "Gaziosmanpaşa'nın tüm mahallelerine aynı gün buzdolabı tamir hizmeti veriyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça, 6 ay garanti ve 7/24 acil müdahale kapsamındadır.",
    ],
    mahalleler: ["Karayolları", "Sarıgöl", "Küçükköy", "Yenidoğan", "Merkez", "Bağlarbaşı", "Karlıtepe", "Pazariçi"],
    nearby: ["eyupsultan-buzdolabi-servisi", "sultangazi-buzdolabi-servisi", "bayrampasa-buzdolabi-servisi", "kagithane-buzdolabi-servisi"],
    faq: baseFaq("Gaziosmanpaşa"),
  },
  {
    slug: "gungoren-buzdolabi-servisi",
    name: "Güngören",
    ilceSlug: "gungoren",
    metaTitle:
      "Güngören Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Güngören buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Tekstil sanayisi ve işçi yemekhanelerine endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Güngören buzdolabı servisi",
      "Güngören buzdolabı tamiri",
      "Güngören buzdolabı tamircisi",
      "Güngören endüstriyel buzdolabı servisi",
      "Güngören sanayi tipi buzdolabı tamiri",
      "Güngören buzdolabı servis",
    ],
    hero: "Güngören'in tekstil sanayisi ve işçi yemekhanelerine endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Yoğun tekstil ve imalat sanayisiyle tanınan Güngören, dar bir alana sığdırdığı sanayi sitesi ve atölyeleriyle üretimin merkezindedir. Bu tesislerdeki işçi yemekhaneleri her öğün yüzlerce kişiye hizmet verir ve büyük soğutuculara bağımlıdır; Güngören buzdolabı servisi ekibimiz üretim temposunu aksatmadan çalışır.",
      "Tozkoparan, Gençosman, Haznedar ve Mareşal Çakmak mahallelerindeki fabrika mutfaklarının sanayi tipi soğutucularında kompresör ve conta yıpranması sıktır. Güngören sanayi tipi buzdolabı tamiri kapsamında kompresör değişimi, gaz dolumu ve kapı contası yenileme yaparız.",
      "Esnaf lokantaları ve marketlerin ticari dolaplarında ise gaz kaçağı ve termostat arızaları öne çıkar. Güngören buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız kaçağı onarır ve freon dolumuyla cihazı aynı gün devreye alır.",
      "Güngören'in sıkışık sanayi dokusunda buzdolabı tamir taleplerine hızlıca ulaşıyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça ve 6 ay garanti ile yapılır; 7/24 acil hattımız açıktır.",
    ],
    mahalleler: ["Merkez", "Tozkoparan", "Gençosman", "Haznedar", "Mareşal Çakmak", "Güvenevler", "Sanayi", "Akıncılar"],
    nearby: ["bagcilar-buzdolabi-servisi", "bahcelievler-buzdolabi-servisi", "esenler-buzdolabi-servisi", "zeytinburnu-buzdolabi-servisi"],
    faq: baseFaq("Güngören"),
  },
  {
    slug: "kagithane-buzdolabi-servisi",
    name: "Kağıthane",
    ilceSlug: "kagithane",
    metaTitle:
      "Kağıthane Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Kağıthane buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Plazalar, kurumsal yemekhaneler ve sanayiye endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Kağıthane buzdolabı servisi",
      "Kağıthane buzdolabı tamiri",
      "Kağıthane buzdolabı tamircisi",
      "Kağıthane endüstriyel buzdolabı servisi",
      "Kağıthane sanayi tipi buzdolabı tamiri",
      "Kağıthane buzdolabı servis",
    ],
    hero: "Kağıthane'de plazalar, kurumsal yemekhaneler ve sanayiye endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Eski sanayi bölgesinden modern plazalara ve ofis kulelerine dönüşen Kağıthane, Seyrantepe ve Çağlayan hattındaki kurumsal yemekhaneleriyle her gün binlerce çalışana hizmet verir. Bu yüksek kapasiteli mutfaklarda soğutma sürekliliği şarttır; Kağıthane buzdolabı servisi ekibimiz kurumsal beklentilere uygun çalışır.",
      "Sanayi, Nurtepe ve Gültepe'deki imalathane ve depoların sanayi tipi soğutucularında kompresör ve kondenser arızaları görülür. Kağıthane sanayi tipi buzdolabı tamiri kapsamında bu parçaların onarım ve değişimini yapar, gaz dolumuyla soğutma kapasitesini geri kazandırırız.",
      "Plaza yemekhaneleri ve kafeteryaların endüstriyel dik tip dolaplarında gaz kaçağı, termostat ve fan motoru arızaları sıktır. Kağıthane buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız arızayı hızla teşhis edip aynı gün onarır.",
      "Kağıthane'nin Çağlayan'dan Hamidiye'ye tüm mahallelerine hızlı buzdolabı tamir hizmeti sunuyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça, 6 ay garanti ve 7/24 acil destek kapsamındadır.",
    ],
    mahalleler: ["Çağlayan", "Seyrantepe", "Gültepe", "Sanayi", "Hamidiye", "Nurtepe", "Talatpaşa", "Merkez", "Ortabayır"],
    nearby: ["sisli-buzdolabi-servisi", "eyupsultan-buzdolabi-servisi", "besiktas-buzdolabi-servisi", "beyoglu-buzdolabi-servisi"],
    faq: baseFaq("Kağıthane"),
  },
  {
    slug: "kucukcekmece-buzdolabi-servisi",
    name: "Küçükçekmece",
    ilceSlug: "kucukccekmece",
    metaTitle:
      "Küçükçekmece Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Küçükçekmece buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Halkalı, Sefaköy ve fabrikalara endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Küçükçekmece buzdolabı servisi",
      "Küçükçekmece buzdolabı tamiri",
      "Küçükçekmece buzdolabı tamircisi",
      "Küçükçekmece endüstriyel buzdolabı servisi",
      "Küçükçekmece sanayi tipi buzdolabı tamiri",
      "Küçükçekmece buzdolabı servis",
    ],
    hero: "Küçükçekmece'de Halkalı, Sefaköy ve fabrikalara endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Halkalı'nın yeni yerleşim ve ticaret aksı, Sefaköy'ün yoğun esnaf dokusu ve ilçedeki fabrikalar Küçükçekmece'yi hem yaşam hem üretim açısından kalabalık bir merkez yapar. Bu geniş yelpazede soğutma ihtiyacı hiç durmaz; Küçükçekmece buzdolabı servisi ekibimiz her ölçekteki cihaza müdahale eder.",
      "İkitelli sınırındaki fabrikalar ve gıda tesislerindeki sanayi tipi soğutucular ile soğuk hava depolarında kompresör ve kondenser arızaları öne çıkar. Küçükçekmece sanayi tipi buzdolabı tamiri kapsamında kompresör revizyonu, gaz dolumu ve sistem kontrolü yaparız.",
      "Sefaköy, Kanarya, Cennet ve Atakent'teki restoran ve marketlerin ticari dolaplarında gaz kaçağı ve termostat arızaları sıktır. Küçükçekmece buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız arızayı yerinde teşhis edip aynı gün onarır.",
      "Küçükçekmece'nin Halkalı'dan Söğütlüçeşme'ye tüm mahallelerine hızlı buzdolabı tamir hizmeti veriyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça ve 6 ay garanti ile yapılır.",
    ],
    mahalleler: ["Halkalı", "Sefaköy", "Kanarya", "Cennet", "İnönü", "Atakent", "Söğütlüçeşme", "Tevfikbey", "Kartaltepe"],
    nearby: ["avcilar-buzdolabi-servisi", "bakirkoy-buzdolabi-servisi", "basaksehir-buzdolabi-servisi", "bahcelievler-buzdolabi-servisi"],
    faq: baseFaq("Küçükçekmece"),
  },
  {
    slug: "sariyer-buzdolabi-servisi",
    name: "Sarıyer",
    ilceSlug: "sariyer",
    metaTitle:
      "Sarıyer Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Sarıyer buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Boğaz balık restoranları, Maslak plazaları ve otellere endüstriyel, sanayi tipi buzdolabı servis.",
    keywords: [
      "Sarıyer buzdolabı servisi",
      "Sarıyer buzdolabı tamiri",
      "Sarıyer buzdolabı tamircisi",
      "Sarıyer endüstriyel buzdolabı servisi",
      "Sarıyer sanayi tipi buzdolabı tamiri",
      "Sarıyer buzdolabı servis",
    ],
    hero: "Sarıyer'de boğaz balık restoranları, Maslak plazaları ve otellere endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Tarabya, Yeniköy ve İstinye'nin boğaz manzaralı balık restoranları, Maslak'ın plaza yemekhaneleri ve Kilyos'un yazlık tesisleri Sarıyer'i yüksek standartlı bir ağırlama ilçesi yapar. Taze ürünün öne çıktığı balık restoranlarında soğutma kalitesi doğrudan lezzeti etkiler; Sarıyer buzdolabı servisi ekibimiz bu hassasiyetle çalışır.",
      "Maslak'taki plaza mutfakları ve otellerdeki sanayi tipi soğutucular ile endüstriyel soğuk odalar sürekli yük altındadır. Sarıyer sanayi tipi buzdolabı tamiri kapsamında kompresör, kondenser ve elektronik kart arızalarını giderir, freon dolumuyla kapasiteyi koruruz.",
      "Balık restoranlarının vitrin ve teşhir dolaplarında gaz kaçağı ve buzlanma en yaygın sorundur. Sarıyer buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız hassas kaçak tespiti ve gaz dolumuyla soğutmayı aynı gün düzeltir.",
      "Kilyos'tan Ayazağa'ya Sarıyer'in geniş coğrafyasına hızlı buzdolabı tamir hizmeti ulaştırıyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça, 6 ay garanti ve 7/24 acil destek kapsamındadır.",
    ],
    mahalleler: ["Maslak", "Tarabya", "Yeniköy", "İstinye", "Büyükdere", "Bahçeköy", "Rumeli Hisarı", "Kilyos", "Zekeriyaköy", "Ayazağa"],
    nearby: ["besiktas-buzdolabi-servisi", "sisli-buzdolabi-servisi", "kagithane-buzdolabi-servisi", "eyupsultan-buzdolabi-servisi"],
    faq: baseFaq("Sarıyer"),
  },
  {
    slug: "silivri-buzdolabi-servisi",
    name: "Silivri",
    ilceSlug: "silivri",
    metaTitle:
      "Silivri Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Silivri buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Sahil otelleri, düğün salonları ve besicilik tesislerine endüstriyel, sanayi tipi buzdolabı servis.",
    keywords: [
      "Silivri buzdolabı servisi",
      "Silivri buzdolabı tamiri",
      "Silivri buzdolabı tamircisi",
      "Silivri endüstriyel buzdolabı servisi",
      "Silivri sanayi tipi buzdolabı tamiri",
      "Silivri buzdolabı servis",
    ],
    hero: "Silivri'de sahil otelleri, düğün salonları ve besicilik tesislerine endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Uzun sahil şeridiyle oteller, plaj tesisleri, düğün salonları ve çevredeki besicilik-tarım işletmeleriyle Silivri, özellikle yaz sezonunda yoğun bir ağırlama merkezidir. Etkinlik mutfaklarındaki büyük soğutucular kesintisiz çalışmak zorundadır; Silivri buzdolabı servisi ekibimiz uzak mesafeye rağmen hızlı ulaşır.",
      "Selimpaşa, Gümüşyaka ve Çanta çevresindeki gıda üretim ve depolama tesislerinin sanayi tipi soğutucularında kompresör ve yalıtım sorunları görülür. Silivri sanayi tipi buzdolabı tamiri kapsamında kompresör revizyonu, gaz dolumu ve soğuk oda bakımı yaparız.",
      "Otel ve düğün salonu mutfaklarının endüstriyel dolaplarında gaz kaçağı ve termostat arızaları sıktır. Silivri buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız arızayı yerinde teşhis eder ve aynı gün onarır.",
      "Silivri'nin geniş sahil ve kırsal alanına buzdolabı tamir hizmeti ulaştırıyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça ve 6 ay garanti ile yapılır; randevu için 7/24 açığız.",
    ],
    mahalleler: ["Selimpaşa", "Gümüşyaka", "Kavaklı", "Çanta", "Alibey", "Piri Mehmet Paşa", "Fatih", "Değirmenköy"],
    nearby: ["buyukcekmece-buzdolabi-servisi", "catalca-buzdolabi-servisi", "arnavutkoy-buzdolabi-servisi", "beylikduzu-buzdolabi-servisi"],
    faq: baseFaq("Silivri"),
  },
  {
    slug: "sultangazi-buzdolabi-servisi",
    name: "Sultangazi",
    ilceSlug: "sultangazi",
    metaTitle:
      "Sultangazi Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Sultangazi buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Yoğun konut, esnaf ve sanayiye endüstriyel, sanayi tipi buzdolabı servis, gaz dolumu ve onarım.",
    keywords: [
      "Sultangazi buzdolabı servisi",
      "Sultangazi buzdolabı tamiri",
      "Sultangazi buzdolabı tamircisi",
      "Sultangazi endüstriyel buzdolabı servisi",
      "Sultangazi sanayi tipi buzdolabı tamiri",
      "Sultangazi buzdolabı servis",
    ],
    hero: "Sultangazi'de esnaf, konut ve sanayiye endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Kalabalık konut dokusu, canlı esnaf lokantaları ve küçük ölçekli sanayisiyle Sultangazi, mahalle ticaretinin güçlü olduğu bir ilçedir. Her gün yoğun çalışan lokanta ve marketlerde soğutma arızası hızlı çözüm gerektirir; Sultangazi buzdolabı servisi ekibimiz esnafın yanında pratik çözümle olur.",
      "Cebeci, Habibler, Uğur Mumcu ve 50. Yıl mahallelerindeki imalathane ve depoların sanayi tipi soğutucularında kompresör ve kondenser arızaları görülür. Sultangazi sanayi tipi buzdolabı tamiri kapsamında bu parçaları onarır, gaz dolumuyla soğutma kapasitesini geri getiririz.",
      "Esnaf lokantaları ve marketlerin ticari dolaplarında gaz kaçağı, soğutmama ve termostat sorunları sıktır. Sultangazi buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız arızayı yerinde teşhis edip aynı gün onarır.",
      "Sultangazi'nin tüm mahallelerine hızlı buzdolabı tamir hizmeti veriyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça, 6 ay garanti ve 7/24 acil müdahale kapsamındadır.",
    ],
    mahalleler: ["Cebeci", "Habibler", "Uğur Mumcu", "50. Yıl", "Gazi", "Esentepe", "Yayla", "İsmetpaşa"],
    nearby: ["gaziosmanpasa-buzdolabi-servisi", "arnavutkoy-buzdolabi-servisi", "esenler-buzdolabi-servisi", "bagcilar-buzdolabi-servisi"],
    faq: baseFaq("Sultangazi"),
  },
  {
    slug: "sisli-buzdolabi-servisi",
    name: "Şişli",
    ilceSlug: "sisli",
    metaTitle:
      "Şişli Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Şişli buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Mecidiyeköy plazaları, oteller ve hastanelere endüstriyel, sanayi tipi buzdolabı servis ve gaz dolumu.",
    keywords: [
      "Şişli buzdolabı servisi",
      "Şişli buzdolabı tamiri",
      "Şişli buzdolabı tamircisi",
      "Şişli endüstriyel buzdolabı servisi",
      "Şişli sanayi tipi buzdolabı tamiri",
      "Şişli buzdolabı servis",
    ],
    hero: "Şişli'de Mecidiyeköy plazaları, oteller ve hastanelere endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Mecidiyeköy'ün iş kuleleri, Nişantaşı'nın lüks restoranları, Bomonti'nin kafeleri ve ilçedeki büyük hastaneler Şişli'yi hem kurumsal hem gastronomik açıdan İstanbul'un merkezine yerleştirir. Plaza yemekhaneleri ve hastane mutfakları çok yüksek kapasiteyle çalışır; Şişli buzdolabı servisi ekibimiz bu kurumsal ölçeğe uygun hizmet verir.",
      "Hastane ve plaza mutfaklarındaki sanayi tipi soğutucular ile endüstriyel soğuk odalar 24 saat çalışır ve arızaya toleransı düşüktür. Şişli sanayi tipi buzdolabı tamiri kapsamında kompresör, kondenser ve elektronik kart onarımlarını hızla yapar, gaz dolumuyla kapasiteyi koruruz.",
      "Nişantaşı ve Bomonti'deki restoran ve kafelerin vitrin dolaplarında gaz kaçağı ve termostat arızaları sıktır. Şişli buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız arızayı yerinde teşhis edip aynı gün onarır.",
      "Şişli'nin Mecidiyeköy'den Kurtuluş'a tüm mahallelerine hızlı buzdolabı tamir hizmeti sunuyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça, 6 ay garanti ve 7/24 acil destek kapsamındadır.",
    ],
    mahalleler: ["Mecidiyeköy", "Nişantaşı", "Bomonti", "Fulya", "Esentepe", "Feriköy", "Kurtuluş", "Harbiye", "Okmeydanı", "Gülbağ"],
    nearby: ["besiktas-buzdolabi-servisi", "beyoglu-buzdolabi-servisi", "kagithane-buzdolabi-servisi", "bakirkoy-buzdolabi-servisi"],
    faq: baseFaq("Şişli"),
  },
  {
    slug: "zeytinburnu-buzdolabi-servisi",
    name: "Zeytinburnu",
    ilceSlug: "zeytinburnu",
    metaTitle:
      "Zeytinburnu Buzdolabı Servisi | Endüstriyel & Sanayi Tipi Buzdolabı Tamiri",
    metaDescription:
      "Zeytinburnu buzdolabı servisi, buzdolabı tamiri ve buzdolabı tamircisi. Deri-tekstil sanayisi, toptancılar ve sahil işletmelerine endüstriyel, sanayi tipi buzdolabı servis.",
    keywords: [
      "Zeytinburnu buzdolabı servisi",
      "Zeytinburnu buzdolabı tamiri",
      "Zeytinburnu buzdolabı tamircisi",
      "Zeytinburnu endüstriyel buzdolabı servisi",
      "Zeytinburnu sanayi tipi buzdolabı tamiri",
      "Zeytinburnu buzdolabı servis",
    ],
    hero: "Zeytinburnu'nda deri-tekstil sanayisi, toptancılar ve sahil işletmelerine endüstriyel buzdolabı servisi ve tamiri.",
    paragraphs: [
      "Köklü deri ve tekstil sanayisi, toptancı çarşıları ve sahildeki restoranlarıyla Zeytinburnu, üretim ile ticaretin iç içe geçtiği bir ilçedir. Toptancıların soğuk hava depoları ve fabrika yemekhaneleri büyük soğutuculara bağımlıdır; Zeytinburnu buzdolabı servisi ekibimiz bu sanayi yoğunluğunda deneyimlidir.",
      "Kazlıçeşme, Sümer, Seyitnizam ve Nuripaşa'daki imalathane ve depoların sanayi tipi soğutucularında kompresör ve kondenser arızaları öne çıkar. Zeytinburnu sanayi tipi buzdolabı tamiri kapsamında kompresör değişimi, gaz dolumu ve soğuk oda bakımı yaparız.",
      "Sahil restoranları ve toptancıların ticari dolaplarında gaz kaçağı ve termostat sorunları sıktır. Zeytinburnu buzdolabı tamiri hizmetimizde buzdolabı tamircisi ustalarımız kaçağı tespit edip onarır, freon dolumuyla cihazı aynı gün devreye alır.",
      "Zeytinburnu'nun Merkezefendi'den Beştelsiz'e tüm mahallelerine hızlı buzdolabı tamir hizmeti veriyoruz. Endüstriyel buzdolabı servis işlemlerimiz orijinal parça, 6 ay garanti ve 7/24 acil müdahale kapsamındadır.",
    ],
    mahalleler: ["Merkezefendi", "Kazlıçeşme", "Sümer", "Telsiz", "Seyitnizam", "Nuripaşa", "Yeşiltepe", "Beştelsiz", "Maltepe"],
    nearby: ["bakirkoy-buzdolabi-servisi", "bahcelievler-buzdolabi-servisi", "fatih-buzdolabi-servisi", "gungoren-buzdolabi-servisi"],
    faq: baseFaq("Zeytinburnu"),
  },
];

export function getIlceBuzdolabiBySlug(slug: string): IlceBuzdolabi | undefined {
  return ilceBuzdolabiListesi.find((i) => i.slug === slug);
}
