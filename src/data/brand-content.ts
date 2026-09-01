import { RichContent } from "@/types";

/**
 * Marka sayfalarına özel uzun form içerik.
 * Kaynak: public/yenisayfa/*.docx — metinler birebir aktarılmıştır.
 * Anahtar = Brand.slug. Kaydı olmayan sayfalar şablonun varsayılan
 * metnini kullanmaya devam eder.
 */
export const brandContent: Record<string, RichContent> = {
  "inoksan-servisi": {
    sections: [
      {
        id: "inoksan-servisi-profesyonel-mutfaklariniza-teknik-destek",
        level: 2,
        heading: "İnoksan Servisi: Profesyonel Mutfaklarınıza Teknik Destek",
        paragraphs: [
          "Yoğun çalışan bir mutfakta bulaşık makinesinin program ortasında durması veya fırının istenen sıcaklığa ulaşmaması, günlük iş akışını doğrudan etkiler. Restoran ve catering işletmelerinde arızaya hızlı müdahale bu yüzden önemli. İnoksan servisi arayışında olan profesyoneller için Çınar Endüstriyel Mutfak Servisi olarak, İstanbul'da 15 yıldır profesyonel mutfak ekipmanlarına teknik destek sağlıyoruz. İstanbul'un tüm Avrupa ve Anadolu ilçelerinde 7/24 acil servis hizmeti veriyoruz.",
        ],
      },
      {
        id: "neden-inoksan-yetkili-servis",
        level: 2,
        heading: "Neden İnoksan Yetkili Servis?",
        paragraphs: [
          "Servis çağrılarında önce cihazın modelini ve yaşanan sorunu öğreniyoruz. Aynı belirti farklı parçalardan kaynaklanabilir. Çalışmayan bir bulaşık makinesinde sorun elektrik beslemesinden kaynaklanabileceği gibi pompa, kapak emniyeti veya kontrol kartında da olabilir.",
          "Restoran, otel, catering firması veya kafede bulaşık makinesi, fırın, ocak veya buzdolabı gibi ekipmanların arızalanması, işletmenizin durmasına neden olur. Sadece arızayı gidermek yetmez. Sorunun neden oluştuğunu da bulmak gerekir. Yoğun kullanılan ekipmanlarda bakım ihmal edildiğinde aynı sorun kısa süre içinde tekrar ortaya çıkabilir.",
          "Bir cihazın arızalı kalması, tamir maliyetinin yanında iş kaybı ve operasyonel aksamalar anlamına gelir.",
        ],
      },
      {
        id: "inoksan-bulasik-makinesi-servisi",
        level: 2,
        heading: "İnoksan Bulaşık Makinesi Servisi",
        paragraphs: [
          "\"Bulaşık makinesi su almıyor\" şikayetiyle sık karşılaşıyoruz. Genelde su giriş vanası tıkalı veya şebeke basıncı düşük. Bir kafede makine çalışıyor ama suyu ısıtmıyordu. Rezistans sağlamdı, ama termostat yanlış okuma yapıyordu. Değiştirdik, sorun çözüldü.",
          "Bulaşık makinesinde su basıncı, tıkanıklık ve pompa kaynaklı sorunlarla sık karşılaşıyoruz. Isıtma problemi olduğunda rezistans, termostat ve kontrol kartı kontrol ediliyor.",
          "Yıkama performansı düştüğünde ilk kontrol ettiğimiz noktalar püskürtme kolları, filtreler ve deterjan dozaj sistemi. Filtrelerde biriken kalıntılar, makinenin yıkama performansını kısa sürede etkileyebiliyor. Kontrol paneli, sensör veya programlama kaynaklı elektronik arızalarda cihazın hata kodları ve çalışma değerleri kontrol edilerek arızanın kaynağı belirleniyor.",
          "Makinenin altından su gelmesi durumunda kapı contaları, hortum bağlantıları ve tahliye hattı kontrol ediliyor. Kaçağın kaynağı belirlendikten sonra gerekli müdahale yapılıyor.",
        ],
      },
      {
        id: "inoksan-firin-servisi",
        level: 2,
        heading: "İnoksan Fırın Servisi",
        paragraphs: [
          "\"Fırın sıcaklığı sabit tutmuyor\" diyen müşterilerimiz oluyor. Bir pastanede fırın 180 dereceye ayarlı ama 160'te kalıyordu. Termostat değişti, yine aynı. Sonra fark ettik: ısıtıcı rezistanslardan biri yarım çalışıyor. Değiştirdik, düzeldi.",
          "Fırının ayarlanan sıcaklığa ulaşmaması veya pişirme sırasında sıcaklığın sürekli değişmesi, termostat ve sıcaklık sensörlerinin kontrol edilmesini gerektirir. Sorun ısıtıcı elemanlarda, fan veya kontrol kartında ortaya çıkabilir.",
          "Fırında sıcaklık sorunu olduğunda ilk olarak termostat ve sıcaklık sensörlerini kontrol ediyoruz. Isıtıcı elemanların çalışma durumu ve fan sistemi de bu kontrolde gözden geçiriliyor. Gaz ve elektrik bağlantıları için güvenlik kontrolleri, sızdırmazlık testleri yapıyoruz.",
          "Kontrol sistemleri, dijital paneller, programlama birimleri ve sensör arızaları konusunda teknik destek veriyoruz. Mekanik problemler, kapı menteşeleri, raflar, fan sistemleri de İnoksan servisi kapsamında.",
          "Güvenlik kontrolleri, aşırı ısınma koruması, gaz kaçağı detektörleri ve acil durdurma sistemleri konularında hizmet veriyoruz. Fırının gereğinden uzun süre çalışmasına neden olan sıcaklık veya kontrol sorunları tespit ediliyor. Arıza giderildiğinde cihazın normal çalışma düzenine dönmesi sağlanıyor.",
        ],
      },
      {
        id: "inoksan-ocak-servisi",
        level: 2,
        heading: "İnoksan Ocak Servisi",
        paragraphs: [
          "Ocaklar için çağrıldığımız yerlerde genelde aynı sorun: \"Alev sarı yanıyor.\" Mavi olması lazım. Sarı alev, yanmanın tam olmadığını gösterir. Gaz basıncı düşük, hava ayarı bozuk veya brülör tıkalı olabilir.",
          "Bir restoranda 6 gözlü ocağın 4'ü düzgün yanmıyordu. Regülatöre baktık, çıkış basıncı düşüktü. Değiştirdik, alevler mavi yandı. Müşteri brülörlerin bozuk olduğunu düşünüyordu.",
          "Brülör bakımı ve temizliği, tıkanıklık giderme, alev ayarı ve gaz basıncı optimizasyonu yapıyoruz. Elektrikli ocak elemanları, rezistans değişimi, bağlantı kontrolleri ve ısı dağılımı testleri sunuyoruz.",
          "Güvenlik sistemleri, alev koruma cihazları, gaz kesme valfleri ve termokupl kontrolleri konusunda teknik destek veriyoruz. Yüzey ve ızgara onarımı, çizik giderme, deformasyon düzeltme ve kaplama yenileme hizmetleri de İnoksan servisi kapsamında.",
          "Kontrol mekanizmaları, düğme, anahtar ve elektronik kontrol üniteleri konusunda hizmet veriyoruz.",
        ],
      },
      {
        id: "inoksan-fritoz-servisi",
        level: 2,
        heading: "İnoksan Fritöz Servisi",
        paragraphs: [
          "Fritözler, özellikle fast food restoranları, kafeler ve catering işletmeleri için hayati öneme sahip. \"Yağ ısınmıyor\" veya \"sıcaklık kontrolü yok\" şikayetleriyle sık karşılaşıyoruz.",
          "Bir burgercide, fritöz 180 dereceye çıkmıyordu. Rezistans sağlamdı, termostat da. Sorun, yağ seviye sensöründeydi. Sensör kireçlenmiş, yanlış okuma yapıyordu. Temizledik, fritöz normal çalışmaya başladı.",
          "Fritözün istenen sıcaklığa ulaşmaması veya sıcaklığı sabit tutamaması, ısıtıcı elemanlar, termostat ve kontrol kartı açısından kontrol gerektirir. Yağın geç ısınması, enerji maliyetlerini artırır ve servis süresini uzatır.",
          "Elektronik kart arızaları fritözlerde de yaygın. Özellikle nemli ortamlarda çalışan cihazlarda kartlar erken bozulabiliyor. Bir kartın maliyeti yüksek olabiliyor. Bu yüzden önce basit kontrolleri yapıyoruz.",
          "Termostat ayarı bozuk fritözlerde ürünler ya yanıyor ya da çiğ kalıyor. Kalibrasyon ile düzeltilebiliyor. Ama bazı modellerde termostat değişimi gerekiyor.",
          "Yağ tahliye sistemi tıkanıklığı da sık görülür. Yağ boşalmıyor, temizlik yapılamıyor. Basit bir temizlikle çözülebiliyor. Ama müşteri pompa değişimi istiyor.",
          "Güvenlik sistemleri, aşırı ısınma koruması ve yağ seviye kontrolleri konusunda teknik destek veriyoruz. Fritözün normal çalışma düzenine dönmesi için gerekli bakım ve onarım işlemlerini gerçekleştiriyoruz.",
          "İnoksan fritöz servisi olarak, hızlı ve kalıcı çözümler sunuyoruz. Çünkü fritözün durması, menünün yarısının durması demek.",
        ],
      },
      {
        id: "inoksan-buzdolabi-servisi",
        level: 2,
        heading: "İnoksan Buzdolabı Servisi",
        paragraphs: [
          "\"Buzdolabı çalışıyor ama yeterince soğutmuyor\" şikayeti sık geliyor. Bir kasapta dolap 10 derece gösteriyordu. Etler bozulmak üzere. Kapı contalarına baktık, yıpranmış. Değiştirdik, 2 saat sonra 4 dereceye düştü. Müşteri kompresör arızası sanıyordu.",
          "Buzdolabı yeterince soğutmuyorsa doğrudan gaz eksikliği olduğunu düşünmek doğru değil. Öncelikle kondenserin durumu, fanlar, sıcaklık sensörü ve hava dolaşımı kontrol edilmeli.",
          "Soğutma sistemi arızaları ile başlıyoruz. Kompresör, kondenser ve genleşme valfi problemleri konusunda teknik destek veriyoruz. Gaz dolumu ve kaçak kontrolü, soğutucu gaz seviyesi ayarları ve sızdırmazlık testleri yapıyoruz.",
          "Termostat ve kontrol kartları, sıcaklık ayarları, sensör kalibrasyonu ve elektronik arızalar konusunda hizmet veriyoruz. Kapı contaları ve izolasyon, sızdırmazlık kontrolleri ve ısı kaybı önleme konularında teknik destek sunuyoruz.",
          "Yoğunlaşma ve buzlanma sorunları, defrost sistemleri, drenaj hatları ve nem kontrolü konularında hizmet veriyoruz. Soğutma sorununun kaynağı belirlendikten sonra gerekli bakım veya parça değişimi yapılıyor. Fan, kondenser, sensör ve defrost sistemindeki sorunlar cihazın sıcaklık değerlerini doğrudan etkileyebiliyor.",
        ],
      },
      {
        id: "periyodik-bakim",
        level: 2,
        heading: "Periyodik Bakım",
        paragraphs: [
          "Bakım sırasında cihazın filtreleri, bağlantıları, hareketli parçaları ve güvenlik elemanları kontrol edilir. Kullanım sırasında ortaya çıkabilecek bazı sorunlar daha erken fark edilebilir. Yoğun çalışan mutfaklarda küçük bir arızanın büyümeden müdahale edilmesi, beklenmedik duruşların önüne geçer.",
          "Düzenli periyodik bakım programı uygulamak, servis ihtiyacını minimize etmenin en etkili yolu. Çınar Endüstriyel Mutfak Servisi olarak, işletmenize özel bakım planları oluşturuyor, cihazlarınızın ömrünü uzatıyor ve beklenmedik arızaları önlüyoruz.",
          "Isıtma ve soğutma sistemlerinin çalışma durumu da cihazın türüne göre incelenir. Küçük bir arıza büyümeden fark edilebilir. Yoğun çalışan mutfaklarda bu kontroller, beklenmedik cihaz duruşlarının azaltılmasına yardımcı olur.",
        ],
      },
      {
        id: "neden-cinar-endustriyel-mutfak-servis",
        level: 2,
        heading: "Neden Çınar Endüstriyel Mutfak Servis?",
        paragraphs: [
          "Servis talebi oluşturulduğunda öncelikle cihazın modeli ve yaşanan arıza hakkında bilgi alıyoruz. Arızanın niteliğine göre müdahale planlanıyor ve işlem öncesinde müşteriye yapılacak çalışma hakkında bilgi veriliyor.",
          "Çınar Endüstriyel Mutfak Servis olarak servis sürecinde önceliğimiz, arızanın kaynağını doğru belirlemek ve yapılacak işlem hakkında müşteriyi önceden bilgilendirmek.",
          "7/24 acil servis desteği, acil durumlarda hızlı müdahale. Geniş servis ağı, İstanbul'un tüm Avrupa ve Anadolu ilçelerine hizmet imkanı. Şeffaf fiyatlandırma, önceden bilgilendirme, gizli ücret yok. Garantili işçilik, yapılan tüm işlemler garanti kapsamında.",
        ],
      },
      {
        id: "inoksan-servisi-icin-cinar-endustriyel-mutfak-servisi",
        level: 2,
        heading: "İnoksan Servisi İçin Çınar Endüstriyel Mutfak Servisi",
        paragraphs: [
          "Çınar Endüstriyel Mutfak Servisi olarak İstanbul'un Avrupa ve Anadolu Yakası'ndaki tüm ilçelerinde profesyonel mutfak ekipmanları için servis hizmeti veriyoruz. Bulaşık makineleri, fırınlar, ocaklar, buzdolapları ve fritözlerde arıza tespiti, bakım ve onarım çalışmalarını gerçekleştiriyoruz.",
          "Servis talebiniz sırasında cihazın modelini ve yaşanan sorunu paylaşmanız yeterli. Cihazın verdiği hata, çıkardığı ses, sıcaklık problemi veya su kaçağı gibi belirtileri önceden belirtmeniz, arızanın değerlendirilmesini kolaylaştırır.",
          "İnoksan servisi için Çınar Endüstriyel Mutfak Servisi ile iletişime geçebilirsiniz.",
        ],
      },
    ],
    faqHeading: "Sık Sorulan Sorular",
    faq: [
      {
        question: "\"Cihaz gece arızalandı, servis gerekiyor.\" İnoksan servisi için nasıl iletişim kurabilirim?",
        answer: "Servis talebi oluşturmak için telefon, e-posta veya web sitemiz üzerinden bize ulaşabilirsiniz. Cihazın modelini ve yaşanan arızayı önceden paylaşmanız, servis sürecinin daha hızlı planlanmasına yardımcı olur. Acil durumlarda 7/24 destek hattımızdan bize ulaşabilirsiniz.",
      },
      {
        question: "Servis ücretleri neye göre belirlenir?",
        answer: "Servis ücretini belirleyen temel unsurlar arızanın niteliği, değişmesi gereken parça ve işlem süresidir. Cihaz yerinde incelendikten sonra yapılacak işlem ve maliyet hakkında bilgi veriyoruz.",
      },
      {
        question: "Periyodik bakım ne sıklıkla yapılmalı?",
        answer: "Cihaz türüne ve kullanım yoğunluğuna göre 3-6 ayda bir periyodik bakım öneriyoruz. Yoğun kullanılan ekipmanlar için daha sık bakım programları oluşturulabilir.",
      },
      {
        question: "Orijinal yedek parça kullanıyor musunuz?",
        answer: "Evet, hizmetlerimizde sadece orijinal ve üretici onaylı yedek parçalar kullanıyoruz. Bu, cihazınızın uzun ömürlü olmasını ve garanti koşullarının korunmasını sağlar.",
      },
    ],
  },
  "empero-servisi": {
    sections: [
      {
        id: "empero-servisi-profesyonel-mutfaklariniz-icin-kesintisiz-hizmet",
        level: 2,
        heading: "Empero Servisi: Profesyonel Mutfaklarınız İçin Kesintisiz Hizmet",
        paragraphs: [
          "Yoğun çalışan bir mutfakta bulaşık makinesinin program ortasında durması veya fırının istenen sıcaklığa ulaşmaması, günlük iş akışını doğrudan etkiler. Restoran ve catering işletmelerinde arızaya hızlı müdahale bu yüzden önemli. Empero servisi arayışında olan profesyoneller için Çınar Endüstriyel Mutfak Servisi olarak, İstanbul'da 15 yıldır profesyonel mutfak ekipmanlarına teknik destek sağlıyoruz. İstanbul'un tüm Avrupa ve Anadolu ilçelerinde 7/24 acil servis hizmeti veriyoruz.",
        ],
      },
      {
        id: "neden-empero-yetkili-servis",
        level: 2,
        heading: "Neden Empero Yetkili Servis?",
        paragraphs: [
          "Servis çağrılarında önce cihazın modelini ve yaşanan sorunu öğreniyoruz. Aynı belirti farklı parçalardan kaynaklanabilir. Çalışmayan bir bulaşık makinesinde sorun elektrik beslemesinden kaynaklanabileceği gibi pompa, kapak emniyeti veya kontrol kartında da olabilir.",
          "Restoran, otel, catering firması veya kafede bulaşık makinesi, fırın, ocak veya buzdolabı gibi ekipmanların arızalanması, işletmenizin durmasına neden olur. Sadece arızayı gidermek yetmez. Sorunun neden oluştuğunu da bulmak gerekir. Yoğun kullanılan ekipmanlarda bakım ihmal edildiğinde aynı sorun kısa süre içinde tekrar ortaya çıkabilir.",
          "Bir cihazın arızalı kalması, tamir maliyetinin yanında iş kaybı ve operasyonel aksamalar anlamına gelir.",
        ],
      },
      {
        id: "empero-bulasik-makinesi-servisi",
        level: 2,
        heading: "Empero Bulaşık Makinesi Servisi",
        href: "/empero-servis/empero-bulasik-makinesi-servisi",
        paragraphs: [
          "\"Bulaşık makinesi su almıyor\" şikayetiyle sık karşılaşıyoruz. Genelde su giriş vanası tıkalı veya şebeke basıncı düşük. Bir kafede makine çalışıyor ama suyu ısıtmıyordu. Rezistans sağlamdı, ama termostat yanlış okuma yapıyordu. Değiştirdik, sorun çözüldü.",
          "Bulaşık makinesinde su basıncı, tıkanıklık ve pompa kaynaklı sorunlarla sık karşılaşıyoruz. Isıtma problemi olduğunda rezistans, termostat ve kontrol kartı kontrol ediliyor.",
          "Yıkama performansı düştüğünde ilk kontrol ettiğimiz noktalar püskürtme kolları, filtreler ve deterjan dozaj sistemi. Filtrelerde biriken kalıntılar, makinenin yıkama performansını kısa sürede etkileyebiliyor. Kontrol paneli, sensör veya programlama kaynaklı elektronik arızalarda cihazın hata kodları ve çalışma değerleri kontrol edilerek arızanın kaynağı belirleniyor.",
          "Makinenin altından su gelmesi durumunda kapı contaları, hortum bağlantıları ve tahliye hattı kontrol ediliyor. Kaçağın kaynağı belirlendikten sonra gerekli müdahale yapılıyor.",
        ],
      },
      {
        id: "empero-firin-servisi",
        level: 2,
        heading: "Empero Fırın Servisi",
        href: "/empero-servis/empero-firin-servisi",
        paragraphs: [
          "\"Fırın sıcaklığı sabit tutmuyor\" diyen müşterilerimiz oluyor. Bir pastanede fırın 180 dereceye ayarlı ama 160'te kalıyordu. Termostat değişti, yine aynı. Sonra fark ettik: ısıtıcı rezistanslardan biri yarım çalışıyor. Değiştirdik, düzeldi.",
          "Fırının ayarlanan sıcaklığa ulaşmaması veya pişirme sırasında sıcaklığın sürekli değişmesi, termostat ve sıcaklık sensörlerinin kontrol edilmesini gerektirir. Sorun ısıtıcı elemanlarda, fan veya kontrol kartında ortaya çıkabilir.",
          "Fırında sıcaklık sorunu olduğunda ilk olarak termostat ve sıcaklık sensörlerini kontrol ediyoruz. Isıtıcı elemanların çalışma durumu ve fan sistemi de bu kontrolde gözden geçiriliyor. Gaz ve elektrik bağlantıları için güvenlik kontrolleri, sızdırmazlık testleri yapıyoruz.",
          "Kontrol sistemleri, dijital paneller, programlama birimleri ve sensör arızaları konusunda teknik destek veriyoruz. Mekanik problemler, kapı menteşeleri, raflar, fan sistemleri de Empero servisi kapsamında.",
          "Güvenlik kontrolleri, aşırı ısınma koruması, gaz kaçağı detektörleri ve acil durdurma sistemleri konularında hizmet veriyoruz. Fırının gereğinden uzun süre çalışmasına neden olan sıcaklık veya kontrol sorunları tespit ediliyor. Arıza giderildiğinde cihazın normal çalışma düzenine dönmesi sağlanıyor.",
        ],
      },
      {
        id: "empero-ocak-servisi",
        level: 2,
        heading: "Empero Ocak Servisi",
        paragraphs: [
          "Ocaklar için çağrıldığımız yerlerde genelde aynı sorun: \"Alev sarı yanıyor.\" Mavi olması lazım. Sarı alev, yanmanın tam olmadığını gösterir. Gaz basıncı düşük, hava ayarı bozuk veya brülör tıkalı olabilir.",
          "Bir restoranda 6 gözlü ocağın 4'ü düzgün yanmıyordu. Regülatöre baktık, çıkış basıncı düşüktü. Değiştirdik, alevler mavi yandı. Müşteri brülörlerin bozuk olduğunu düşünüyordu.",
          "Brülör bakımı ve temizliği, tıkanıklık giderme, alev ayarı ve gaz basıncı optimizasyonu yapıyoruz. Elektrikli ocak elemanları, rezistans değişimi, bağlantı kontrolleri ve ısı dağılımı testleri sunuyoruz.",
          "Güvenlik sistemleri, alev koruma cihazları, gaz kesme valfleri ve termokupl kontrolleri konusunda teknik destek veriyoruz. Yüzey ve ızgara onarımı, çizik giderme, deformasyon düzeltme ve kaplama yenileme hizmetleri de Empero servisi kapsamında.",
          "Kontrol mekanizmaları, düğme, anahtar ve elektronik kontrol üniteleri konusunda hizmet veriyoruz.",
        ],
      },
      {
        id: "empero-fritoz-servisi",
        level: 2,
        heading: "Empero Fritöz Servisi",
        paragraphs: [
          "Fritözler, özellikle fast food restoranları, kafeler ve catering işletmeleri için hayati öneme sahip. \"Yağ ısınmıyor\" veya \"sıcaklık kontrolü yok\" şikayetleriyle sık karşılaşıyoruz.",
          "Bir burgercide, fritöz 180 dereceye çıkmıyordu. Rezistans sağlamdı, termostat da. Sorun, yağ seviye sensöründeydi. Sensör kireçlenmiş, yanlış okuma yapıyordu. Temizledik, fritöz normal çalışmaya başladı.",
          "Fritözün istenen sıcaklığa ulaşmaması veya sıcaklığı sabit tutamaması, ısıtıcı elemanlar, termostat ve kontrol kartı açısından kontrol gerektirir. Yağın geç ısınması, enerji maliyetlerini artırır ve servis süresini uzatır.",
          "Elektronik kart arızaları fritözlerde de yaygın. Özellikle nemli ortamlarda çalışan cihazlarda kartlar erken bozulabiliyor. Bir kartın maliyeti yüksek olabiliyor. Bu yüzden önce basit kontrolleri yapıyoruz.",
          "Termostat ayarı bozuk fritözlerde ürünler ya yanıyor ya da çiğ kalıyor. Kalibrasyon ile düzeltilebiliyor. Ama bazı modellerde termostat değişimi gerekiyor.",
          "Yağ tahliye sistemi tıkanıklığı da sık görülür. Yağ boşalmıyor, temizlik yapılamıyor. Basit bir temizlikle çözülebiliyor. Ama müşteri pompa değişimi istiyor.",
          "Güvenlik sistemleri, aşırı ısınma koruması ve yağ seviye kontrolleri konusunda teknik destek veriyoruz. Fritözün normal çalışma düzenine dönmesi için gerekli bakım ve onarım işlemlerini gerçekleştiriyoruz.",
          "Empero fritöz servisi olarak, hızlı ve kalıcı çözümler sunuyoruz. Çünkü fritözün durması, menünün yarısının durması demek.",
        ],
      },
      {
        id: "empero-buzdolabi-servisi",
        level: 2,
        heading: "Empero Buzdolabı Servisi",
        paragraphs: [
          "\"Buzdolabı çalışıyor ama yeterince soğutmuyor\" şikayeti sık geliyor. Bir kasapta dolap 10 derece gösteriyordu. Etler bozulmak üzere. Kapı contalarına baktık, yıpranmış. Değiştirdik, 2 saat sonra 4 dereceye düştü. Müşteri kompresör arızası sanıyordu.",
          "Buzdolabı yeterince soğutmuyorsa doğrudan gaz eksikliği olduğunu düşünmek doğru değil. Öncelikle kondenserin durumu, fanlar, sıcaklık sensörü ve hava dolaşımı kontrol edilmeli.",
          "Soğutma sistemi arızaları ile başlıyoruz. Kompresör, kondenser ve genleşme valfi problemleri konusunda teknik destek veriyoruz. Gaz dolumu ve kaçak kontrolü, soğutucu gaz seviyesi ayarları ve sızdırmazlık testleri yapıyoruz.",
          "Termostat ve kontrol kartları, sıcaklık ayarları, sensör kalibrasyonu ve elektronik arızalar konusunda hizmet veriyoruz. Kapı contaları ve izolasyon, sızdırmazlık kontrolleri ve ısı kaybı önleme konularında teknik destek sunuyoruz.",
          "Yoğunlaşma ve buzlanma sorunları, defrost sistemleri, drenaj hatları ve nem kontrolü konularında hizmet veriyoruz. Soğutma sorununun kaynağı belirlendikten sonra gerekli bakım veya parça değişimi yapılıyor. Fan, kondenser, sensör ve defrost sistemindeki sorunlar cihazın sıcaklık değerlerini doğrudan etkileyebiliyor.",
        ],
      },
      {
        id: "periyodik-bakim",
        level: 2,
        heading: "Periyodik Bakım",
        paragraphs: [
          "Bakım sırasında cihazın filtreleri, bağlantıları, hareketli parçaları ve güvenlik elemanları kontrol edilir. Kullanım sırasında ortaya çıkabilecek bazı sorunlar daha erken fark edilebilir. Yoğun çalışan mutfaklarda küçük bir arızanın büyümeden müdahale edilmesi, beklenmedik duruşların önüne geçer.",
          "Düzenli periyodik bakım programı uygulamak, servis ihtiyacını minimize etmenin en etkili yolu. Çınar Endüstriyel Mutfak Servisi olarak, işletmenize özel bakım planları oluşturuyor, cihazlarınızın ömrünü uzatıyor ve beklenmedik arızaları önlüyoruz.",
          "Isıtma ve soğutma sistemlerinin çalışma durumu da cihazın türüne göre incelenir. Küçük bir arıza büyümeden fark edilebilir. Yoğun çalışan mutfaklarda bu kontroller, beklenmedik cihaz duruşlarının azaltılmasına yardımcı olur.",
        ],
      },
      {
        id: "neden-cinar-endustriyel-mutfak-servis",
        level: 2,
        heading: "Neden Çınar Endüstriyel Mutfak Servis?",
        paragraphs: [
          "Servis talebi oluşturulduğunda öncelikle cihazın modeli ve yaşanan arıza hakkında bilgi alıyoruz. Arızanın niteliğine göre müdahale planlanıyor ve işlem öncesinde müşteriye yapılacak çalışma hakkında bilgi veriliyor.",
          "Çınar Endüstriyel Mutfak Servis olarak servis sürecinde önceliğimiz, arızanın kaynağını doğru belirlemek ve yapılacak işlem hakkında müşteriyi önceden bilgilendirmek.",
          "7/24 acil servis desteği, acil durumlarda hızlı müdahale. Geniş servis ağı, İstanbul'un tüm Avrupa ve Anadolu ilçelerine hizmet imkanı. Şeffaf fiyatlandırma, önceden bilgilendirme, gizli ücret yok. Garantili işçilik, yapılan tüm işlemler garanti kapsamında.",
        ],
      },
      {
        id: "empero-servisi-icin-cinar-endustriyel-mutfak-servisi",
        level: 2,
        heading: "Empero Servisi İçin Çınar Endüstriyel Mutfak Servisi",
        paragraphs: [
          "Çınar Endüstriyel Mutfak Servisi olarak İstanbul'un Avrupa ve Anadolu Yakası'ndaki tüm ilçelerinde profesyonel mutfak ekipmanları için servis hizmeti veriyoruz. Bulaşık makineleri, fırınlar, ocaklar, buzdolapları ve fritözlerde arıza tespiti, bakım ve onarım çalışmalarını gerçekleştiriyoruz.",
          "Servis talebiniz sırasında cihazın modelini ve yaşanan sorunu paylaşmanız yeterli. Cihazın verdiği hata, çıkardığı ses, sıcaklık problemi veya su kaçağı gibi belirtileri önceden belirtmeniz, arızanın değerlendirilmesini kolaylaştırır.",
          "Empero servisi için Çınar Endüstriyel Mutfak Servisi ile iletişime geçebilirsiniz.",
        ],
      },
    ],
    faqHeading: "Sık Sorulan Sorular",
    faq: [
      {
        question: "\"Cihaz gece arızalandı, servis gerekiyor.\" Empero servisi için nasıl iletişim kurabilirim?",
        answer: "Servis talebi oluşturmak için telefon, e-posta veya web sitemiz üzerinden bize ulaşabilirsiniz. Cihazın modelini ve yaşanan arızayı önceden paylaşmanız, servis sürecinin daha hızlı planlanmasına yardımcı olur. Acil durumlarda 7/24 destek hattımızdan bize ulaşabilirsiniz.",
      },
      {
        question: "Servis ücretleri neye göre belirlenir?",
        answer: "Servis ücretini belirleyen temel unsurlar arızanın niteliği, değişmesi gereken parça ve işlem süresidir. Cihaz yerinde incelendikten sonra yapılacak işlem ve maliyet hakkında bilgi veriyoruz.",
      },
      {
        question: "Periyodik bakım ne sıklıkla yapılmalı?",
        answer: "Cihaz türüne ve kullanım yoğunluğuna göre 3-6 ayda bir periyodik bakım öneriyoruz. Yoğun kullanılan ekipmanlar için daha sık bakım programları oluşturulabilir.",
      },
      {
        question: "Orijinal yedek parça kullanıyor musunuz?",
        answer: "Evet, hizmetlerimizde sadece orijinal ve üretici onaylı yedek parçalar kullanıyoruz. Bu, cihazınızın uzun ömürlü olmasını ve garanti koşullarının korunmasını sağlar.",
      },
    ],
  },
  "oztiryakiler-servisi": {
    sections: [
      {
        id: "oztiryakiler-servisi-hakkinda-sahadan-notlar",
        level: 2,
        heading: "Öztiryakiler Servisi Hakkında Sahadan Notlar",
        paragraphs: [
          "Öğle servisi bitmiş, mutfakta temizlik başlamış. Tam o sırada bulaşık makinesi duruyor. Ya da akşam 9'da, rezervasyonlar dolu, fırın birden soğumaya başlıyor. Bu tür anlarda Öztiryakiler servisi arayışı panikle başlar. Çınar Endüstriyel Mutfak Teknik Servis olarak bu panik hallerine defalarca şahit olduk. Telefonun diğer ucundaki sesin titrediğini duymak, işin ne kadar kritik olduğunu gösteriyor.",
          "Profesyonel mutfaklarda zaman para demek. Bir saatlik arıza, yüzlerce liralık kayıp anlamına gelebilir. Catering firmaları için durum daha da vahim. Sözleşmeli işler var, teslimat saatleri belli. Buzdolabı bozulduğunda, içindeki ürünler riske giriyor. Gıda güvenliği denetimleri var. Bir tablo tutturulamazsa, ceza yiyorsunuz. Öztiryakiler servis bu yüzden sadece tamir değil, işletmenin o günkü kazancını korumak demek.",
        ],
      },
      {
        id: "oztiryakiler-bulasik-makinesi-servisi",
        level: 2,
        heading: "Öztiryakiler Bulaşık Makinesi Servisi",
        href: "/oztiryakiler-servis/oztiryakiler-bulasik-makinesi-servisi",
        paragraphs: [
          "Bulaşık makineleri için gelen çağrıların çoğu basit şeylerden kaynaklanıyor. Filtre temizliği yapılmamış, deterjan bitmiş ama kimse fark etmemiş, su vanası kapalı unutulmuş. Tabii bunlar ilk bakışta görünenler.",
          "Daha derine inince başka sorunlar çıkıyor. Mesela bir otelin mutfağında, makine yıkıyor ama kurutmuyordu. İlk kontrolde rezistans sağlam göründü, multimetre ile ölçtük, direnç değeri normaldi. Ama makine çalışırken voltaj düşüyordu. Panodaki sigorta gevşekti. 20 yıllık teknisyen arkadaşımız hemen fark etti.",
          "Makine su almıyor denilerek çağrıldık başka bir yerde. İlk bakışta elektronik karta yönelmek mümkündü fakat makineye gelen suyu ölçmeden parça değiştirmek istemedik. Basınç beklenen seviyenin altındaydı. Kartta herhangi bir işlem yapmadan, su girişindeki problemi giderdikten sonra makine normal şekilde çalışmaya başladı. Öztiryakiler servisi olarak bu tür durumlarda önce tamir seçeneklerini değerlendiriyoruz.",
          "Bulaşık makinelerinde elektronik kart arızaları son yıllarda arttı. Özellikle nemli mutfaklarda, havalandırma kötüyse, kartlar erken bozuluyor. Bir kartın fiyatı 3-4 bin lirayı bulabiliyor. Müşteri bazen \"yeni makine alsam mı\" diye soruyor. Bu noktada maliyet analizi yapmak gerekiyor. Bazen yeni makine almak daha mantıklı, bazen tamir.",
          "Su taşıma problemi de sık karşılaşılan durumlar arasında. Pompa sağlam olabilir, ama şamandıra kireçlenmiş. Makine sürekli \"su var\" sanıyor, çalışmıyor. Temizlik çözümü basit. Ama müşteri pompa değişimi bekliyor.",
        ],
      },
      {
        id: "oztiryakiler-firin-servisi",
        level: 2,
        heading: "Öztiryakiler Fırın Servisi",
        paragraphs: [
          "Fırınlar daha karmaşık. Gazlı olanlar ayrı, elektrikli olanlar ayrı. Gittiğimiz yerlerde en çok duyduğumuz şikayet: \"Eşit pişmiyor.\"",
          "Bir pastanede, rafların üstü yanıyor, altı ham kalıyordu. Termostatı değiştirdik, düzelmedi. Sonra fark ettik: Fan motoru yavaş dönüyor, rulmanlar yıpranmış, hava sirkülasyonu bozuk. Motoru değiştirdik, sorun çözüldü. Müşteri termostat değişimi için para harcamıştı, sorun devam ediyordu. İkinci görüşte gerçek problem ortaya çıktı.",
          "Gazlı fırınlarda brülör temizliği çok önemli. Unlu mamuller yapan yerlerde, un tozu her yere giriyor. Brülör deliklerini tıkıyor, alev düzensiz yanıyor. Bir simitçide, fırının bir tarafı iyi pişiriyor, diğer tarafı pişirmiyordu. Brülörleri söktük, tel fırçayla temizledik. Farkı hemen gördüler. <a href=\"/oztiryakiler-servis/oztiryakiler-firin-servisi\">Öztiryakiler fırın servisi</a> için bu tür detaylar önemli.",
          "Sıcaklık kalibrasyonu da ayrı bir konu. Bazı fırınlarda termostat doğru çalışıyor ama gösterge yanlış. Müşteri 180 dereceye ayarlıyor, fırın 160'te çalışıyor. Ürünler pişmiyor. Kalibrasyon ile düzeltilebiliyor. Ama bazı modellerde bu mümkün değil.",
        ],
      },
      {
        id: "oztiryakiler-ocak-servisi",
        level: 2,
        heading: "Öztiryakiler Ocak Servisi",
        paragraphs: [
          "Ocaklar için çağrıldığımız yerlerde genelde aynı sorun: \"Alev sarı yanıyor.\" Mavi olması lazım. Sarı alev, yanmanın tam olmadığını gösterir. Gaz basıncı düşük olabilir, hava ayarı bozuk olabilir, brülör tıkalı olabilir.",
          "Bir restoranda, 6 gözlü ocağın 4'ü düzgün yanmıyordu. Regülatöre baktık. Giriş basıncı normaldi ama çıkış düşüktü. Regülatörün ömrü dolmuştu. Değiştirdik, alevler mavi yandı. Müşteri brülörlerin bozuk olduğunu düşünüyordu.",
          "Termokupl arızaları çok sık. Özellikle eski ocaklarda. Düğmeyi çeviriyorsunuz, ateşliyor. Elinizi çekince sönüyor. Termokupl, alevi hissetmiyor. Güvenlik sistemi devreye giriyor, gazı kesiyor. Basit bir parça ama işi durduruyor. Fiyatı da çok yüksek değil.",
          "Elektronik ateşlemeli ocaklarda transformator sorunu yaygın. \"Çıt çıt\" sesi gelmiyor. Düğmeyi çeviriyorsunuz, hiçbir şey olmuyor. Transformator değişince düzeliyor. Fiyatı çok yüksek değil ama bulmak bazen zor. Öztiryakiler ocak servisi için bu tür yedek parçaları stokta tutmak önemli.",
          "Brülör başlıklarının tıkanması da sık görülür. Yağ birikintisi, dökülen soslar, gıda artıkları gaz çıkışlarını tıkıyor. Temizlik ile çözülebiliyor. Ama müşteri yeni brülör almak istiyor.",
        ],
      },
      {
        id: "oztiryakiler-fritoz-servisi",
        level: 2,
        heading: "Öztiryakiler Fritöz Servisi",
        paragraphs: [
          "Fritözler, özellikle fast food restoranları ve kafeler için hayati öneme sahip. \"Yağ ısınmıyor\" veya \"sıcaklık kontrolü yok\" şikayetleriyle sık karşılaşıyoruz.",
          "Bir burgercide, fritöz 180 dereceye çıkmıyordu. Rezistans sağlamdı, termostat da. Sorun, yağ seviye sensöründeydi. Sensör kireçlenmiş, yanlış okuma yapıyordu. Temizledik, fritöz normal çalışmaya başladı.",
          "Elektronik kart arızaları fritözlerde de yaygın. Özellikle nemli ortamlarda çalışan cihazlarda kartlar erken bozulabiliyor. Bir kartın maliyeti yüksek olabiliyor. Bu yüzden önce basit kontrolleri yapıyoruz.",
          "Termostat ayarı bozuk fritözlerde ürünler ya yanıyor ya da çiğ kalıyor. Kalibrasyon ile düzeltilebiliyor. Ama bazı modellerde termostat değişimi gerekiyor.",
          "Yağ tahliye sistemi tıkanıklığı da sık görülür. Yağ boşalmıyor, temizlik yapılamıyor. Basit bir temizlikle çözülebiliyor. Ama müşteri pompa değişimi istiyor.",
          "Öztiryakiler fritöz servisi olarak, hızlı ve kalıcı çözümler sunuyoruz. Çünkü fritözün durması, menünün yarısının durması demek.",
        ],
      },
      {
        id: "oztiryakiler-buzdolabi-servisi",
        level: 2,
        heading: "Öztiryakiler Buzdolabı Servisi",
        paragraphs: [
          "Soğutma sistemleri başka bir dünya. Gittiğimizde ilk yaptığımız: Sıcaklık ölçümü. Termometre koyuyoruz, 15-20 dakika bekliyoruz. İçerisi kaç derece gösteriyor?",
          "Bir kasapta, dolap 10 derece gösteriyordu. Etler bozulmak üzere. Kapı contalarına baktık. Yıpranmış, yırtılmış. Soğuk hava kaçıyor. Contaları değiştirdik. 2 saat sonra 4 dereceye düştü. Müşteri kompresör arızası sanıyordu.",
          "Kondenser petekleri temiz değilse, sistem verimli çalışmaz. Bir marketin buzdolabı, arkasındaki petekler toz ve kıl doluydu. Fırça ile temizledik. Kompresör daha az çalışmaya başladı. Elektrik faturası düştü. Öztiryakiler buzdolabı servisi için bu tür basit bakımlar bile önemli.",
          "Termostat hataları da sık görülür. Dolap sürekli çalışıyor, ürünler donuyor. Ya da hiç çalışmıyor, ürünler bozuluyor. Termostat değişimi ile çözülüyor. Ama bazen sorun termostatta değil, sensörde oluyor.",
        ],
      },
      {
        id: "periyodik-bakim",
        level: 3,
        heading: "Periyodik Bakım",
        paragraphs: [
          "İşe yarıyor. Kesinlikle. Ama kimse yaptırmak istemiyor. \"Çalışıyor işte, neden bakım yapalım?\" diyorlar. Sonra büyük arıza geliyor.",
          "Bir otel zinciriyle çalışıyoruz. Başlangıçta yılda 30-40 kez arıza kaydı açılıyordu. Şimdi 10-12'ye düştü. Periyodik bakımın etkisi. Müşteri başta \"gereksiz masraf\" demişti. Bir yıl sonra fikrini değiştirdi.",
          "Bakım neyi kapsıyor? Filtre temizliği, contaların kontrolü, gaz kaçak testi, elektrik bağlantıları sıkılığı, yağlama. Basit şeyler. Ama ihmal edilince büyük sorun oluyor. Öztiryakiler servisi taleplerinin önemli kısmı aslında düzenli bakım yapılmadığı için oluşuyor.",
          "Periyodik bakımın bir diğer faydası da enerji tasarrufu. Temiz kondenser, doğru ayarlanmış brülör, sıkı elektrik bağlantıları daha az enerji tüketimi demek. Aylık faturada fark ediliyor.",
        ],
      },
      {
        id: "servis-secimi",
        level: 3,
        heading: "Servis Seçimi",
        paragraphs: [
          "İlk telefon görüşmesi önemli. Teknik sorular soruyorlar mı? \"Hangi model?\", \"Ne zaman başladı?\", \"Önce ne oldu?\" gibi. Sormuyorlarsa, dikkatli olun.",
          "Yedek parça garantisi veriyorlar mı? Orijinal parça kullanılıyor mu? Ucuz parça takıp, \"tamir ettik\" diyenler var. 2 hafta sonra yine bozuluyor.",
          "Fiyatı önceden söylüyorlar mı? Sürpriz faturalar güveni zedeler. Biz işe başlamadan önce net fiyat veriyoruz. Müşteri onay verirse başlıyoruz.",
          "Referansları var mı? Öztiryakiler servisi konusunda tecrübeli firmalar, referans listesi sunabilir. Çınar Endüstriyel olarak, yüzlerce mutfağa hizmet verdik.",
        ],
      },
      {
        id: "",
        level: 2,
        heading: "",
        paragraphs: [
          "Öztiryakiler servisi arayışında olanlar, genelde acil durumda arıyor. Panik halindeler. İşleri durmuş. Müşteriler bekliyor. Ürünler bozuluyor.",
          "Çınar Endüstriyel Mutfak Teknik Servis olarak, bu tür durumlarda sakinleştirici bir ses olmaya çalışıyoruz. \"Sorunu çözeriz\" diyoruz. Ve çözüyoruz.",
          "Bulaşık makinesi, fırın, ocak, buzdolabı ve fritöz alanlarında yılların verdiği tecrübe var. Her cihazın dilini biliyoruz. Her arızanın kokusunu aldık.",
          "Mutfağınız sizin için ne kadar önemli, biliyoruz. Çünkü orada kazanıyorsunuz. Orada geçiminizi sağlıyorsunuz. Biz de o mutfağın çalışması için çalışıyoruz.",
          "İletişime geçin. Konuşalım. Sorununuzu anlatın.",
        ],
      },
    ],
    faqHeading: "Sıkça Sorulan Sorular",
    faq: [
      {
        question: "Ne kadar sürede geliyorsunuz?",
        answer: "Acil durumlarda aynı gün. Ama yoğunluk varsa 24-48 saat sürebilir. Hafta sonu daha zor.",
      },
      {
        question: "Garanti veriyor musunuz?",
        answer: "Evet. İşçiliğe 3 ay, parçaya 1 yıl garanti.",
      },
      {
        question: "Kendi parçamı getirsem?",
        answer: "Mümkün. Ama garanti veremeyiz. Orijinal parça öneriyoruz.",
      },
      {
        question: "Fiyatlar nasıl belirleniyor?",
        answer: "Arıza türü, parça maliyeti, işçilik, mesafe. Uzak yerlere yol ücreti ekleniyor.",
      },
    ],
  },
};

export function getBrandContent(key: string): RichContent | undefined {
  return brandContent[key];
}
