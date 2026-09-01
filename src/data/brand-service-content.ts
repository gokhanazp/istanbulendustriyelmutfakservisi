import { RichContent } from "@/types";

/**
 * Marka + ekipman servis sayfalarına özel uzun form içerik.
 * Kaynak: public/yenisayfa/*.docx — metinler birebir aktarılmıştır.
 * Anahtar = BrandService.slug. Kaydı olmayan sayfalar şablonun varsayılan
 * metnini kullanmaya devam eder.
 */
export const brandServiceContent: Record<string, RichContent> = {
  "empero-firin-servisi": {
    sections: [
      {
        id: "empero-firin-servisi-mutfaklariniz-icin-teknik-destek",
        level: 2,
        heading: "Empero Fırın Servisi Mutfaklarınız İçin Teknik Destek",
        paragraphs: [
          "Öğle servisi bitmiş, mutfakta temizlik başlamış. Tam o sırada fırın soğumaya başlıyor. Ya da akşam 9'da, rezervasyonlar dolu, fırın birden sıcaklığı tutmuyor. Bu tür anlarda teknik servis arayışı panikle başlar. Çınar Endüstriyel Mutfak Servisi olarak bu panik hallerine defalarca şahit olduk. Telefonun diğer ucundaki sesin titrediğini duymak, işin ne kadar kritik olduğunu gösteriyor.",
          "Profesyonel mutfaklarda zaman para demek. Bir saatlik arıza, yüzlerce liralık kayıp anlamına gelebilir. Catering firmaları için daha da vahim. Sözleşmeli işler var, teslimat saatleri belli. Fırın bozulduğunda, üretim durur. Gıda güvenliği denetimleri var. Bir tablo tutturulamazsa, ceza yiyorsunuz. Teknik servis bu yüzden sadece tamir değil, işletmenin o günkü kazancını korumak demek.",
        ],
      },
      {
        id: "empero-firin-yetkili-servisi-neden-onemli",
        level: 2,
        heading: "Empero Fırın Yetkili Servisi Neden Önemli?",
        paragraphs: [
          "Restoran sahibi Ahmet Bey'in yerindeydik geçen ay. Kartal'da küçük bir esnaf lokantası. Sabah 10'da açılıyor, akşam 10'da kapanıyor. Öğle ve akşam olmak üzere iki yoğun servis var. Fırın arızalandığında, \"Ne yapacağım şimdi?\" dedi. Menüde fırın yemekleri vardı. Tencere yemeklerine dönmek zorunda kaldı. O günkü cirosunun yarısı gitti.",
          "Catering firmaları için durum daha kritik. Sözleşmeli işler var, teslimat saatleri belli. Fırın bozulduğunda, üretim durur. Gıda güvenliği denetimleri var. Bir tablo tutturulamazsa, ceza yiyorsunuz. Empero fırın yetkili servisi bu yüzden sadece tamir değil, işletmenin o günkü kazancını korumak demek.",
          "Bir cihazın arızalı kalması, tamir maliyetinin yanında iş kaybı ve operasyonel aksamalar anlamına gelir. Bu nedenle Empero fırın servisi seçimi dikkatli değerlendirilmesi gereken bir karardır.",
        ],
      },
      {
        id: "empero-firin-tamiri-nasil-yapilir",
        level: 2,
        heading: "Empero Fırın Tamiri Nasıl Yapılır?",
        paragraphs: [
          "Fırınlar daha karmaşık. Gazlı olanlar ayrı, elektrikli olanlar ayrı. Gittiğimiz yerlerde en çok duyduğumuz şikayet: \"Eşit pişmiyor.\"",
          "Bir pastanede, rafların üstü yanıyor, altı ham kalıyordu. Termostatı değiştirdik, düzelmedi. Sonra fark ettik: Fan motoru yavaş dönüyor. Rulmanlar yıpranmış. Hava sirkülasyonu bozuk. Motoru değiştirdik, sorun çözüldü. Müşteri termostat değişimi için para harcamıştı, sorun devam ediyordu. İkinci görüşte gerçek problem ortaya çıktı.",
          "Başka bir yerde, fırın 200 dereceye ayarlı ama 160'te kalıyordu. Termometre ile ölçtük, gerçekten öyle. Termostat değişti. Yine aynı. En sonunda ısıtıcı rezistanslardan birinin yarım çalıştığını bulduk. Seri bağlı dirençlerden biri kopmuş.",
          "Gazlı fırınlarda brülör temizliği çok önemli. Unlu mamuller yapan yerlerde, un tozu her yere giriyor. Brülör deliklerini tıkıyor. Alev düzensiz yanıyor. Bir simitçide, fırının bir tarafı iyi pişiriyor, diğer tarafı pişirmiyordu. Brülörleri söktük, tel fırçayla temizledik. Farkı hemen gördüler. Empero fırın tamiri için bu tür detaylar önemli.",
          "Sıcaklık kalibrasyonu da ayrı bir konu. Bazı fırınlarda termostat doğru çalışıyor ama gösterge yanlış. Müşteri 180 dereceye ayarlıyor, fırın 160'te çalışıyor. Ürünler pişmiyor. Kalibrasyon ile düzeltilebiliyor. Ama bazı modellerde bu mümkün değil.",
          "Fırın kapısı tam kapanmıyorsa, ısı kaybı olur. Müşteri \"fırın ısıtmıyor\" der. Aslında sorun kapı menteşelerinde. Menteşeleri değiştirdik, kapı sıkı kapanıyor. Fırın normal çalışmaya başladı. Basit bir parça ama işi durduruyor.",
        ],
      },
      {
        id: "empero-ocak-servisi-ve-sik-karsilasilan-sorunlar",
        level: 2,
        heading: "Empero Ocak Servisi ve Sık Karşılaşılan Sorunlar",
        paragraphs: [
          "Ocaklar için çağrıldığımız yerlerde genelde aynı sorun: \"Alev sarı yanıyor.\" Mavi olması lazım. Sarı alev, yanmanın tam olmadığını gösterir. Gaz basıncı düşük, hava ayarı bozuk veya brülör tıkalı olabilir.",
          "Bir restoranda, 6 gözlü ocağın 4'ü düzgün yanmıyordu. Regülatöre baktık. Giriş basıncı normaldi ama çıkış düşüktü. Regülatörün ömrü dolmuştu. Değiştirdik, alevler mavi yandı. Müşteri brülörlerin bozuk olduğunu düşünüyordu.",
          "Termokupl arızaları çok sık. Özellikle eski ocaklarda. Düğmeyi çeviriyorsunuz, ateşliyor. Elinizi çekince sönüyor. Termokupl, alevi hissetmiyor. Güvenlik sistemi devreye giriyor, gazı kesiyor. Basit bir parça ama işi durduruyor. Fiyatı da çok yüksek değil. Empero ocak servisi için bu tür yedek parçaları stokta tutmak önemli.",
          "Elektronik ateşlemeli ocaklarda transformator sorunu yaygın. \"Çıt çıt\" sesi gelmiyor. Düğmeyi çeviriyorsunuz, hiçbir şey olmuyor. Transformator değişince düzeliyor. Fiyatı çok yüksek değil ama bulmak bazen zor.",
          "Brülör başlıklarının tıkanması da sık görülür. Yağ birikintisi, dökülen soslar, gıda artıkları gaz çıkışlarını tıkıyor. Temizlik ile çözülebiliyor. Ama müşteri yeni brülör almak istiyor. Empero ocak tamiri için bu tür basit çözümler bile önemli.",
          "Ocak tablası çizilmişse, yemek pişirme zorlaşır. Müşteri \"ocak düzgün ısıtmıyor\" der. Aslında sorun tabla deformasyonunda. Tablayı değiştirdik, ocak normal çalışmaya başladı.",
        ],
      },
      {
        id: "periyodik-bakim",
        level: 2,
        heading: "Periyodik Bakım",
        paragraphs: [
          "İşe yarıyor. Kesinlikle. Ama kimse yaptırmak istemiyor. \"Çalışıyor işte, neden bakım yapalım?\" diyorlar. Sonra büyük arıza geliyor.",
          "Bir otel zinciriyle çalışıyoruz. Başlangıçta yılda 30-40 kez arıza kaydı açılıyordu. Şimdi 10-12'ye düştü. Periyodik bakımın etkisi. Müşteri başta \"gereksiz masraf\" demişti. Bir yıl sonra fikrini değiştirdi.",
          "Bakım neyi kapsıyor? Filtre temizliği. Contaların kontrolü. Gaz kaçak testi. Elektrik bağlantıları sıkılığı. Yağlama. Basit şeyler. Ama ihmal edilince büyük sorun oluyor.",
          "Periyodik bakımın bir diğer faydası da enerji tasarrufu. Temiz kondenser, doğru ayarlanmış brülör, sıkı elektrik bağlantıları daha az enerji tüketimi demek. Aylık faturada fark ediliyor.",
          "Bakım sırasında cihazın filtreleri, bağlantıları, hareketli parçaları ve güvenlik elemanları kontrol edilir. Kullanım sırasında ortaya çıkabilecek bazı sorunlar daha erken fark edilebilir. Yoğun çalışan mutfaklarda küçük bir arızanın büyümeden müdahale edilmesi, beklenmedik duruşların önüne geçer.",
        ],
      },
      {
        id: "empero-firin-turleri-ve-teknik-servis-hizmetleri",
        level: 2,
        heading: "Empero Fırın Türleri ve Teknik Servis Hizmetleri",
        paragraphs: [
          "Empero marka endüstriyel fırınların farklı tipteki modellerine profesyonel servis hizmeti sunuyoruz. Her cihaz tipi için özel teknik bilgi ve ekipmanla müdahale ediyoruz.",
        ],
      },
      {
        id: "empero-konveksiyonlu-firin",
        level: 3,
        heading: "Empero Konveksiyonlu Fırın",
        paragraphs: [
          "Hava sirkülasyonu ile eşit pişirme sağlayan Empero konveksiyonlu fırınlarda fan motoru, ısıtıcı eleman ve termostat sistemleri konusunda teknik destek veriyoruz. Pastane ve restoranlarda yaygın olarak kullanılan bu fırınlarda periyodik fan bakımı ve ısı dağılımı optimizasyonu yapıyoruz. Arızalı fan motorları, bozuk termostatlar ve ısıtıcı eleman problemlerine hızlı çözüm üretiyoruz.",
        ],
      },
      {
        id: "empero-pizza-firini",
        level: 3,
        heading: "Empero Pizza Fırını",
        paragraphs: [
          "Taş tabanlı veya metal yüzeyli Empero pizza fırınlarında sıcaklık dağılımı, ısıtıcı sistemler ve termostat ayarları konusunda uzmanlaşmış ekibimizle hizmet veriyoruz. Yüksek sıcaklıkta çalışan bu fırınlar için özel bakım programları sunuyoruz. Pizza taşı değişimi, brülör temizliği ve sıcaklık kalibrasyonu hizmetleri ile fırınınızın optimum performansla çalışmasını sağlıyoruz.",
        ],
      },
      {
        id: "empero-pastane-firini",
        level: 3,
        heading: "Empero Pastane Fırını",
        paragraphs: [
          "Katlı raf sistemli Empero pastane fırınlarında ısı dağılımı, nem kontrolü ve programlama birimleri konusunda teknik servis sağlıyoruz. Hassas pişirme gerektiren ürünler için ideal çözümler üretiyoruz. Raf sistemleri, kapı menteşeleri ve ısıtıcı zonlar konusunda profesyonel teknik destek veriyoruz. Çok katlı modellerde her raf için ayrı sıcaklık kontrolü sağlıyoruz.",
        ],
      },
      {
        id: "empero-elektrikli-ve-gazli-firinlar",
        level: 3,
        heading: "Empero Elektrikli ve Gazlı Fırınlar",
        paragraphs: [
          "Hem elektrikli hem de gazlı Empero endüstriyel fırınlarda ısıtıcı eleman, brülör, termostat ve kontrol sistemleri arızalarına hızlı ve kalıcı çözümler sunuyoruz. Enerji türüne göre özel teknik servis hizmeti veriyoruz. Elektrikli modellerde rezistans değişimi, gazlı modellerde brülör ayarları ve gaz sistemi güvenlik kontrolleri yapıyoruz.",
        ],
      },
      {
        id: "empero-kombi-firin",
        level: 3,
        heading: "Empero Kombi Fırın",
        paragraphs: [
          "Buhar ve kuru ısıyı bir arada sunan Empero kombi fırınlarda buhar jeneratörü, kontrol paneli ve ısıtma sistemleri konusunda profesyonel teknik destek sağlıyoruz. Çok yönlü pişirme imkanı sunan bu fırınlar için özel bakım hizmetleri sunuyoruz. Buhar sistemi temizliği, kontrol kartı arızaları ve ısıtıcı eleman değişimi konularında uzmanlaşmış ekibimizle hizmet veriyoruz.",
        ],
      },
      {
        id: "empero-borulu-donerli-firin",
        level: 3,
        heading: "Empero Borulu Dönerli Fırın",
        paragraphs: [
          "Döner sistemi ile eşit pişirme sağlayan Empero borulu fırınlarda motor, aktarma mekanizması ve ısıtıcı sistemler konusunda teknik servis veriyoruz. Kebap ve döner gibi ürünler için ideal olan bu fırınlar için özel bakım programları sunuyoruz. Döner motoru değişimi, aktarma kayışları ve ısıtıcı boru sistemleri arızalarına hızlı çözüm üretiyoruz.",
        ],
      },
      {
        id: "empero-kuzineli-taban-rafli-firin",
        level: 3,
        heading: "Empero Kuzineli Taban Raflı Fırın",
        paragraphs: [
          "Üst kısmında ocak, altında fırın bölmesi bulunan Empero kuzineli modellerde hem fırın hem de ocak sistemleri için teknik destek sağlıyoruz. Kompakt tasarım sunan bu cihazlar için tek noktadan servis hizmeti veriyoruz. Ocak brülörleri, fırın ısıtıcıları ve kontrol sistemleri konusunda profesyonel teknik servis sunuyoruz.",
        ],
      },
      {
        id: "servis-secimi",
        level: 2,
        heading: "Servis Seçimi",
        paragraphs: [
          "İlk telefon görüşmesi önemli. Teknik sorular soruyorlar mı? \"Hangi model?\", \"Ne zaman başladı?\", \"Önce ne oldu?\" gibi. Sormuyorlarsa, dikkatli olun.",
          "Yedek parça garantisi veriyorlar mı? Orijinal parça kullanılıyor mu? Ucuz parça takıp, \"tamir ettik\" diyenler var. 2 hafta sonra yine bozuluyor.",
          "Fiyatı önceden söylüyorlar mı? Sürpriz faturalar güveni zedeler. Biz işe başlamadan önce net fiyat veriyoruz. Müşteri onay verirse başlıyoruz.",
          "Referansları var mı? Empero fırın yetkili servisi konusunda tecrübeli firmalar, referans listesi sunabilir. Çınar Endüstriyel olarak, yüzlerce mutfağa hizmet verdik.",
          "Servis talebi oluşturulduğunda öncelikle cihazın modeli ve yaşanan arıza hakkında bilgi alıyoruz. Arızanın niteliğine göre müdahale planlanıyor ve işlem öncesinde müşteriye yapılacak çalışma hakkında bilgi veriliyor.",
        ],
      },
      {
        id: "",
        level: 2,
        heading: "",
        paragraphs: [
          "Empero fırın servisi arayışında olanlar, genelde acil durumda arıyor. Panik halindeler. İşleri durmuş. Müşteriler bekliyor. Ürünler bozuluyor.",
          "Çınar Endüstriyel Mutfak Servisi olarak, bu tür durumlarda sakinleştirici bir ses olmaya çalışıyoruz. \"Sorunu çözeriz\" diyoruz. Ve çözüyoruz.",
          "Fırın, ocak, bulaşık makinesi, buzdolabı alanlarında yılların verdiği tecrübe var. Her cihazın dilini biliyoruz. Her arızanın kokusunu aldık.",
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
  "empero-bulasik-makinesi-servisi": {
    sections: [
      {
        id: "profesyonel-mutfaklarinizda-hijyen-cozumleri",
        level: 2,
        heading: "Profesyonel Mutfaklarınızda Hijyen Çözümleri",
        paragraphs: [
          "Öğle servisi bitmiş, mutfakta temizlik başlamış. Tam o sırada bulaşık makinesi duruyor. Ya da akşam 10'da, kapanış temizliği, makine suyu boşaltmıyor. Bu tür anlarda teknik servis arayışı panikle başlar. Çınar Endüstriyel Mutfak Servisi olarak bu panik hallerine defalarca şahit olduk. Telefonun diğer ucundaki sesin titrediğini duymak, işin ne kadar kritik olduğunu gösteriyor.",
          "Profesyonel mutfaklarda hijyen her şey demek. Bir restoran, catering firması veya kafede bulaşık makinesinin arızalanması, temizlik sürecinin durması anlamına gelir. Hijyen kuralları ihlal edilirse, ceza yiyorsunuz. Müşteri memnuniyetsizliği başlar. Empero bulaşık makinesi servisi bu yüzden sadece tamir değil, işletmenizin itibarını korumak demek.",
        ],
      },
      {
        id: "empero-bulasik-makinesi-yetkili-servisi-neden-onemli",
        level: 2,
        heading: "Empero Bulaşık Makinesi Yetkili Servisi Neden Önemli?",
        paragraphs: [
          "Restoran sahibi Mehmet Bey'i aradık geçen hafta. Kadıköy'de balık restoranı. Akşam servisi sırasında bulaşık makinesi durmuş. \"Tabaklar birikti, ne yapacağım?\" dedi. Hemen ekip gönderdik. Pompa arızalıydı. Değiştirdik, makine çalışmaya başladı. Mehmet Bey \"hayatımı kurtardınız\" dedi.",
          "Catering firmaları için durum daha kritik. Sözleşmeli işler var, teslimat saatleri belli. Bulaşık makinesi bozulduğunda, temiz tabak kalmıyor. Hijyen denetimleri var. Bir tablo tutturulamazsa, ceza yiyorsunuz. Empero bulaşık makinesi yetkili servisi bu yüzden sadece tamir değil, işletmenin o günkü kazancını korumak demek.",
          "Bir cihazın arızalı kalması, tamir maliyetinin yanında iş kaybı ve operasyonel aksamalar anlamına gelir. Bu nedenle Empero bulaşık makinesi servisi seçimi dikkatli değerlendirilmesi gereken bir karardır.",
        ],
      },
      {
        id: "empero-bulasik-makine-tamiri-nasil-yapilir",
        level: 2,
        heading: "Empero Bulaşık Makine Tamiri Nasıl Yapılır?",
        paragraphs: [
          "Bulaşık makineleri için gelen çağrıların çoğu basit şeylerden kaynaklanıyor. Filtre temizliği yapılmamış. Deterjan bitmiş ama kimse fark etmemiş. Su vanası kapalı unutulmuş. Tabii bunlar ilk bakışta görünenler.",
          "Daha derine inince başka sorunlar çıkıyor. Mesela bir otelin mutfağında, makine yıkıyor ama kurutmuyordu. İlk kontrolde rezistans sağlam göründü. Multimetre ile ölçtük, direnç değeri normaldi. Ama makine çalışırken voltaj düşüyordu. Panodaki sigorta gevşekti. 20 yıllık teknisyen arkadaşımız hemen fark etti.",
          "Makine su almıyor denilerek çağrıldık başka bir yerde. İlk bakışta elektronik karta yönelmek mümkündü fakat makineye gelen suyu ölçmeden parça değiştirmek istemedik. Basınç beklenen seviyenin altındaydı. Kartta herhangi bir işlem yapmadan, su girişindeki problemi giderdikten sonra makine normal şekilde çalışmaya başladı. Empero bulaşık makine tamiri için bu tür detaylar önemli.",
          "Bulaşık makinelerinde elektronik kart arızaları son yıllarda arttı. Özellikle nemli mutfaklarda, havalandırma kötüyse, kartlar erken bozuluyor. Bir kartın fiyatı 3-4 bin lirayı bulabiliyor. Müşteri bazen \"yeni makine alsam mı\" diye soruyor. Bu noktada maliyet analizi yapmak gerekiyor. Bazen yeni makine almak daha mantıklı, bazen tamir.",
          "Su taşıma problemi de sık karşılaşılan durumlar arasında. Pompa sağlam olabilir, ama şamandıra kireçlenmiş. Makine sürekli \"su var\" sanıyor, çalışmıyor. Temizlik çözümü basit. Ama müşteri pompa değişimi bekliyor.",
        ],
      },
      {
        id: "empero-bulasik-makinesi-tamircisi-ve-sik-karsilasilan-sorunlar",
        level: 2,
        heading: "Empero Bulaşık Makinesi Tamircisi ve Sık Karşılaşılan Sorunlar",
        paragraphs: [
          "\"Makine yıkıyor ama tabaklar kirli çıkıyor\" şikayeti sık geliyor. Bir kafede, püskürtme kollarını kontrol ettik. Tıkalıydı. Temizledik, makine normal çalışmaya başladı. Müşteri \"pompa bozuk\" sanıyordu.",
          "Filtrelerde biriken kalıntılar, makinenin yıkama performansını kısa sürede etkileyebiliyor. Kontrol paneli, sensör veya programlama kaynaklı elektronik arızalarda cihazın hata kodları ve çalışma değerleri kontrol edilerek arızanın kaynağı belirleniyor. Empero bulaşık makinesi tamircisi olarak, bu tür sorunlara hızlı ve kalıcı çözümler sunuyoruz.",
          "Makinenin altından su gelmesi durumunda kapı contaları, hortum bağlantıları ve tahliye hattı kontrol ediliyor. Kaçağın kaynağı belirlendikten sonra gerekli müdahale yapılıyor.",
          "Bir restoranda, makine programı tamamlamıyor, ortada kalıyordu. Kontrol kartına baktık. Nem hasarı vardı. Mutfak çok nemli, havalandırma yetersiz. Kartı değiştirdik. Müşteriye havalandırma sistemini iyileştirmesini önerdik.",
        ],
      },
      {
        id: "periyodik-bakim",
        level: 2,
        heading: "Periyodik Bakım",
        paragraphs: [
          "İşe yarıyor. Kesinlikle. Ama kimse yaptırmak istemiyor. \"Çalışıyor işte, neden bakım yapalım?\" diyorlar. Sonra büyük arıza geliyor.",
          "Bir otel zinciriyle çalışıyoruz. Başlangıçta yılda 30-40 kez arıza kaydı açılıyordu. Şimdi 10-12'ye düştü. Periyodik bakımın etkisi. Müşteri başta \"gereksiz masraf\" demişti. Bir yıl sonra fikrini değiştirdi.",
          "Bakım neyi kapsıyor? Filtre temizliği. Contaların kontrolü. Pompa kontrolü. Elektrik bağlantıları sıkılığı. Yağlama. Basit şeyler. Ama ihmal edilince büyük sorun oluyor.",
          "Periyodik bakımın bir diğer faydası da enerji tasarrufu. Temiz filtreler, doğru ayarlanmış pompa, sıkı elektrik bağlantıları daha az enerji tüketimi demek. Aylık faturada fark ediliyor.",
          "Bakım sırasında cihazın filtreleri, bağlantıları, hareketli parçaları ve güvenlik elemanları kontrol edilir. Kullanım sırasında ortaya çıkabilecek bazı sorunlar daha erken fark edilebilir. Yoğun çalışan mutfaklarda küçük bir arızanın büyümeden müdahale edilmesi, beklenmedik duruşların önüne geçer.",
        ],
      },
      {
        id: "hizmet-verdigimiz-bulasik-makinesi-turleri",
        level: 2,
        heading: "Hizmet Verdiğimiz Bulaşık Makinesi Türleri",
        paragraphs: [
          "Empero marka endüstriyel bulaşık makinelerinin farklı kapasite ve tipteki modellerine profesyonel servis hizmeti sunuyoruz. Her cihaz tipi için özel teknik bilgi ve ekipmanla müdahale ediyoruz.",
        ],
      },
      {
        id: "500-tabak-kapasiteli-bulasik-makineleri",
        level: 3,
        heading: "500 Tabak Kapasiteli Bulaşık Makineleri",
        paragraphs: [
          "Küçük ve orta ölçekli işletmeler için ideal olan bu cihazlarda pompa, ısıtıcı ve elektronik sistem arızalarına hızlı çözüm üretiyoruz. Kompakt yapıları sayesinde az yer kaplar ve enerji tasarrufu sağlar. Kafeler, küçük restoranlar ve pastaneler tarafından tercih edilir. Su tüketimi düşük, yıkama performansı yüksektir.",
        ],
      },
      {
        id: "1000-tabak-kapasiteli-bulasik-makineleri",
        level: 3,
        heading: "1000 Tabak Kapasiteli Bulaşık Makineleri",
        paragraphs: [
          "Restoran ve kafelerde yaygın kullanılan bu makinelerde periyodik bakım ve acil onarım hizmetleri sunuyoruz. Orta ölçekli işletmelerin yoğun kullanım ihtiyaçlarına uygun olarak tasarlanmıştır. Pompa sistemleri, ısıtıcı elemanlar ve kontrol panelleri konusunda profesyonel teknik destek veriyoruz.",
        ],
      },
      {
        id: "2000-tabak-kapasiteli-bulasik-makineleri",
        level: 3,
        heading: "2000 Tabak Kapasiteli Bulaşık Makineleri",
        paragraphs: [
          "Büyük ölçekli catering firmaları ve oteller için yüksek kapasiteli bu cihazlarda kompresör, konveyör sistemi ve kontrol paneli servisleri veriyoruz. Yüksek hacimli yıkama ihtiyaçları için optimize edilmiştir. Sürekli çalışma koşullarına dayanıklı olarak üretilen bu makineler için özel bakım programları sunuyoruz.",
        ],
      },
      {
        id: "giyotin-tip-bulasik-makineleri",
        level: 3,
        heading: "Giyotin Tip Bulaşık Makineleri",
        paragraphs: [
          "Hızlı yıkama döngüsü sunan giyotin tip makinelerde kapak mekanizması, su basıncı ve sıcaklık kontrolü konularında teknik destek sağlıyoruz. Manuel yükleme ve boşaltma ile çalışan bu sistemler, orta ölçekli mutfaklar için idealdir. Kapak hidrolik sistemleri, güvenlik sensörleri ve yıkama programları konusunda uzmanlaşmış ekibimizle hizmet veriyoruz.",
        ],
      },
      {
        id: "tunel-tip-bulasik-makineleri",
        level: 3,
        heading: "Tünel Tip Bulaşık Makineleri",
        paragraphs: [
          "Sürekli çalışma prensibiyle çalışan tünel tip makinelerde konveyör sistemi, motor ve otomatik dozaj sistemleri servisleri sunuyoruz. Yüksek kapasiteli işletmelerde tercih edilen bu sistemler, sürekli akış sağlar. Konveyör bantları, sürücü motorlar ve otomatik deterjan dozaj sistemleri arızalarına hızlı çözüm üretiyoruz.",
        ],
      },
      {
        id: "tezgah-alti-bulasik-makineleri",
        level: 3,
        heading: "Tezgah Altı Bulaşık Makineleri",
        paragraphs: [
          "Kompakt tasarımıyla mutfaklarda yer tasarrufu sağlayan tezgah altı modellerde filtre temizliği, pompa ve elektronik kart servisleri gerçekleştiriyoruz. Küçük mutfaklar ve barlar için pratik çözüm sunar. Düşük profil tasarımları sayesinde tezgah altına kolayca monte edilebilir. Filtre sistemleri, su giriş vanaları ve kontrol panelleri konusunda teknik destek sağlıyoruz.",
        ],
      },
      {
        id: "bardak-yikama-makineleri",
        level: 3,
        heading: "Bardak Yıkama Makineleri",
        paragraphs: [
          "Bar ve kafelerde kullanılan bardak yıkama makinelerinde özel sepet sistemleri, düşük su tüketimi ve hızlı kurutma teknolojileri için bakım hizmeti veriyoruz. Hassas cam eşyalar için özel yıkama programları bulunur. Püskürtme kolları, filtre sistemleri ve ısıtıcı elemanlar konusunda profesyonel teknik servis sunuyoruz. Düşük sıcaklıkta yıkama imkanı sunan modellerde özel bakım programları uyguluyoruz.",
        ],
      },
      {
        id: "tabak-yikama-makineleri",
        level: 3,
        heading: "Tabak Yıkama Makineleri",
        paragraphs: [
          "Özel tabak sepetleri ve yüksek basınçlı yıkama sistemleri ile çalışan bu cihazlarda püskürtme kolları, filtre sistemleri ve ısıtıcı eleman bakımını yapıyoruz. Restoran ve yemekhanelerde yoğun olarak kullanılır. Tabak sepeti sistemleri, yüksek basınçlı pompalar ve otomatik deterjan dozaj sistemleri konusunda uzmanlaşmış ekibimizle hizmet veriyoruz.",
        ],
      },
      {
        id: "servis-secimi",
        level: 2,
        heading: "Servis Seçimi",
        paragraphs: [
          "İlk telefon görüşmesi önemli. Teknik sorular soruyorlar mı? \"Hangi model?\", \"Ne zaman başladı?\", \"Önce ne oldu?\" gibi. Sormuyorlarsa, dikkatli olun.",
          "Yedek parça garantisi veriyorlar mı? Orijinal parça kullanılıyor mu? Ucuz parça takıp, \"tamir ettik\" diyenler var. 2 hafta sonra yine bozuluyor.",
          "Fiyatı önceden söylüyorlar mı? Sürpriz faturalar güveni zedeler. Biz işe başlamadan önce net fiyat veriyoruz. Müşteri onay verirse başlıyoruz.",
          "Referansları var mı? Empero bulaşık makinesi yetkili servisi konusunda tecrübeli firmalar, referans listesi sunabilir. Çınar Endüstriyel olarak, yüzlerce mutfağa hizmet verdik.",
          "Servis talebi oluşturulduğunda öncelikle cihazın modeli ve yaşanan arıza hakkında bilgi alıyoruz. Arızanın niteliğine göre müdahale planlanıyor ve işlem öncesinde müşteriye yapılacak çalışma hakkında bilgi veriliyor.",
        ],
      },
      {
        id: "",
        level: 2,
        heading: "",
        paragraphs: [
          "Empero bulaşık makinesi servisi arayışında olanlar, genelde acil durumda arıyor. Panik halindeler. İşleri durmuş. Müşteriler bekliyor. Temiz tabak kalmıyor.",
          "Çınar Endüstriyel Mutfak Servisi olarak, bu tür durumlarda sakinleştirici bir ses olmaya çalışıyoruz. \"Sorunu çözeriz\" diyoruz. Ve çözüyoruz.",
          "Bulaşık makinesi, fırın, ocak, buzdolabı alanlarında yılların verdiği tecrübe var. Her cihazın dilini biliyoruz. Her arızanın kokusunu aldık.",
          "Mutfağınız sizin için ne kadar önemli, biliyoruz. Çünkü orada kazanıyorsunuz. Orada geçiminizi sağlıyorsunuz. Biz de o mutfağın çalışması için çalışıyoruz.",
          "İletişime geçin. Konuşalım. Sorununuzu anlatın. Acil Servis Yönlendirelim.",
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
  "oztiryakiler-firin-servisi": {
    sections: [
      {
        id: "oztiryakiler-firin-servisi-garantili-cozumler",
        level: 2,
        heading: "Öztiryakiler Fırın Servisi: Garantili Çözümler",
        paragraphs: [
          "Pastane sahibiyim, fırın 180 dereceye ayarlıyorum ama 160'te kalıyor. Ürünler pişmiyor, müşteri şikayet ediyor.\" Bu sözler, Çınar Endüstriyel Mutfak Servisi olarak günlük duyduğumuz şikayetlerden sadece biri. <strong>Öztiryakiler Fırın Servisi</strong> arayışında olan profesyoneller için, İstanbul'da 15 yıldır profesyonel mutfak ekipmanlarına teknik destek sağlıyoruz. İstanbul'un tüm Avrupa ve Anadolu ilçelerinde 7/24 acil servis hizmeti veriyoruz.",
        ],
      },
      {
        id: "oztiryakiler-firin-yetkili-servis-neden-onemli",
        level: 3,
        heading: "Öztiryakiler Fırın Yetkili Servis Neden Önemli?",
        paragraphs: [
          "Geçen ay Üsküdar'da bir pastaneden çağrı aldık. \"Fırın sıcaklığı sabit tutmuyor\" dediler. Gittik, termostatı kontrol ettik. Sağlam. Sonra fark ettik: ısıtıcı rezistanslardan biri yarım çalışıyor. Değiştirdik, fırın normal çalışmaya başladı. Müşteri termostat için para harcamıştı, sorun devam ediyordu. İkinci görüşte gerçek problem ortaya çıktı.",
          "Bu tür durumlar, Öztiryakiler fırın yetkili servis seçiminin ne kadar önemli olduğunu gösteriyor. Sadece arızayı gidermek yetmez. Sorunun neden oluştuğunu da bulmak gerekir.",
          "Restoran, otel, catering firması veya kafede fırının arızalanması, işletmenizin durmasına neden olur. Sadece arızayı gidermek yetmez. Sorunun neden oluştuğunu da bulmak gerekir. Yoğun kullanılan ekipmanlarda bakım ihmal edildiğinde aynı sorun kısa süre içinde tekrar ortaya çıkabilir.",
          "Bir cihazın arızalı kalması, tamir maliyetinin yanında iş kaybı ve operasyonel aksamalar anlamına gelir. Bu nedenle <strong>Öztiryakiler fırın servisi</strong> seçimi dikkatli değerlendirilmesi gereken bir karardır.",
        ],
      },
      {
        id: "oztiryakiler-firin-tamir-sureci",
        level: 3,
        heading: "Öztiryakiler Fırın Tamir Süreci",
        paragraphs: [
          "Bir restoranda, fırın 200 dereceye ayarlanıyor ama 150'de kalıyordu. Müşteri \"termostat bozuk\" dedi. Gittik, termostatı ölçtük, sağlam. Sonra fark ettik: fan motoru yavaş dönüyor. Rulmanlar yıpranmış, hava sirkülasyonu bozuk. Motoru değiştirdik, fırın normal çalışmaya başladı.",
          "<strong>Öztiryakiler fırın tamir</strong> için bu tür detaylar önemli. Sadece arızayı gidermek değil, sorunun kök nedenini bulmak gerekiyor. Yoğun kullanılan ekipmanlarda bakım ihmal edildiğinde aynı sorun kısa süre içinde tekrar ortaya çıkabilir.",
          "Fırında sıcaklık sorunu olduğunda ilk olarak termostat ve sıcaklık sensörlerini kontrol ediyoruz. Isıtıcı elemanların çalışma durumu ve fan sistemi de bu kontrolde gözden geçiriliyor. Gaz ve elektrik bağlantıları için güvenlik kontrolleri, sızdırmazlık testleri yapıyoruz.",
          "Fırının ayarlanan sıcaklığa ulaşmaması veya pişirme sırasında sıcaklığın sürekli değişmesi, termostat ve sıcaklık sensörlerinin kontrol edilmesini gerektirir. Sorun ısıtıcı elemanlarda, fan veya kontrol kartında ortaya çıkabilir.",
        ],
      },
      {
        id: "oztiryakiler-firin-tamircisi-ve-gazli-firinlar",
        level: 3,
        heading: "Öztiryakiler Fırın Tamircisi ve Gazlı Fırınlar",
        paragraphs: [
          "Bir simitçide, fırının bir tarafı iyi pişiriyor, diğer tarafı pişirmiyordu. Brülörleri söktük, tel fırçayla temizledik. Farkı hemen gördüler. Un tozu her yere giriyor, brülör deliklerini tıkıyor. Alev düzensiz yanıyor. Gazlı fırınlarda brülör temizliği çok önemli.",
          "<strong>Öztiryakiler fırın tamircisi</strong> olarak, bu tür basit ama kritik detayları gözden kaçırmıyoruz. Müşteri bazen \"yeni fırın alsam mı\" diye soruyor. Bu noktada maliyet analizi yapmak gerekiyor. Bazen basit bir temizlik sorunu çözüyor, bazen de ciddi bir arıza var.",
          "Gazlı fırınlarda brülör temizliği çok önemli. Unlu mamuller yapan yerlerde, un tozu her yere giriyor. Brülör deliklerini tıkıyor. Alev düzensiz yanıyor. Bir simitçide, fırının bir tarafı iyi pişiriyor, diğer tarafı pişirmiyordu. Brülörleri söktük, tel fırçayla temizledik. Farkı hemen gördüler.",
          "Sıcaklık kalibrasyonu da ayrı bir konu. Bazı fırınlarda termostat doğru çalışıyor ama gösterge yanlış. Müşteri 180 dereceye ayarlıyor, fırın 160'te çalışıyor. Ürünler pişmiyor. Kalibrasyon ile düzeltilebiliyor. Ama bazı modellerde bu mümkün değil.",
        ],
      },
      {
        id: "kontrol-sistemleri-ve-mekanik-problemler",
        level: 3,
        heading: "Kontrol Sistemleri ve Mekanik Problemler",
        paragraphs: [
          "Kontrol sistemleri, dijital paneller, programlama birimleri ve sensör arızaları konusunda teknik destek veriyoruz. Mekanik problemler, kapı menteşeleri, raflar, fan sistemleri de <strong>Öztiryakiler fırın servisi</strong> kapsamında.",
          "Güvenlik kontrolleri, aşırı ısınma koruması, gaz kaçağı detektörleri ve acil durdurma sistemleri konularında hizmet veriyoruz. Fırının gereğinden uzun süre çalışmasına neden olan sıcaklık veya kontrol sorunları tespit ediliyor. Arıza giderildiğinde cihazın normal çalışma düzenine dönmesi sağlanıyor.",
          "Fırın kapısı tam kapanmıyorsa, ısı kaybı olur. Müşteri \"fırın ısıtmıyor\" der. Aslında sorun kapı menteşelerinde. Menteşeleri değiştirdik, kapı sıkı kapanıyor. Fırın normal çalışmaya başladı. Basit bir parça ama işi durduruyor.",
        ],
      },
      {
        id: "periyodik-bakim-ve-enerji-tasarrufu",
        level: 3,
        heading: "Periyodik Bakım ve Enerji Tasarrufu",
        paragraphs: [
          "Bir otel zinciriyle çalışıyoruz. Başlangıçta yılda 30-40 kez arıza kaydı açılıyordu. Periyodik bakım programı uyguladık. Bir yıl sonra, arıza sayısı 12'ye düştü. Müşteri başta \"gereksiz masraf\" demişti. Bir yıl sonra fikrini değiştirdi.",
          "Bakım sırasında cihazın filtreleri, bağlantıları, hareketli parçaları ve güvenlik elemanları kontrol edilir. Kullanım sırasında ortaya çıkabilecek bazı sorunlar daha erken fark edilebilir. Yoğun çalışan mutfaklarda küçük bir arızanın büyümeden müdahale edilmesi, beklenmedik duruşların önüne geçer.",
          "Periyodik bakımın bir diğer faydası da enerji tasarrufu. Temiz kondenser, doğru ayarlanmış brülör, sıkı elektrik bağlantıları daha az enerji tüketimi demek. Aylık faturada fark ediliyor.",
        ],
      },
      {
        id: "servis-secimi-ve-referanslar",
        level: 3,
        heading: "Servis Seçimi ve Referanslar",
        paragraphs: [
          "İlk telefon görüşmesi önemli. Teknik sorular soruyorlar mı? \"Hangi model?\", \"Ne zaman başladı?\", \"Önce ne oldu?\" gibi. Sormuyorlarsa, dikkatli olun.",
          "Yedek parça garantisi veriyorlar mı? Orijinal parça kullanılıyor mu? Ucuz parça takıp, \"tamir ettik\" diyenler var. 2 hafta sonra yine bozuluyor.",
          "Fiyatı önceden söylüyorlar mı? Sürpriz faturalar güveni zedeler. Biz işe başlamadan önce net fiyat veriyoruz. Müşteri onay verirse başlıyoruz.",
          "Referansları var mı? Öztiryakiler fırın yetkili servis konusunda tecrübeli firmalar, referans listesi sunabilir. Çınar Endüstriyel olarak, yüzlerce mutfağa hizmet verdik.",
        ],
      },
      {
        id: "",
        level: 2,
        heading: "",
        paragraphs: [
          "<a href=\"/markalar/oztiryakiler-servisi\"><strong>Öztiryakiler Servisi</strong></a> arayışında olanlar, genelde acil durumda arıyor. Panik halindeler. İşleri durmuş. Müşteriler bekliyor. Ürünler bozuluyor.",
          "Çınar Endüstriyel Mutfak Servisi olarak, bu tür durumlarda sakinleştirici bir ses olmaya çalışıyoruz. \"Sorunu çözeriz\" diyoruz. Ve çözüyoruz.",
          "Fırın, ocak, bulaşık makinesi, buzdolabı alanlarında yılların verdiği tecrübe var. Her cihazın dilini biliyoruz. Her arızanın kokusunu aldık.",
          "Mutfağınız sizin için ne kadar önemli, biliyoruz. Çünkü orada kazanıyorsunuz. Orada geçiminizi sağlıyorsunuz. Biz de o mutfağın çalışması için çalışıyoruz.",
          "İletişime geçin. Konuşalım. Sorununuzu anlatın.",
        ],
      },
    ],
    faqHeading: "Sık Sorulan Sorular",
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
  "oztiryakiler-bulasik-makinesi-servisi": {
    sections: [
      {
        id: "oztiryakiler-bulasik-makinesi-servisi-garantili-hizmetler",
        level: 2,
        heading: "Öztiryakiler Bulaşık Makinesi Servisi - Garantili Hizmetler",
        paragraphs: [
          "Yoğun çalışan bir mutfakta bulaşık makinesinin program ortasında durması, günlük iş akışını doğrudan etkiler. Restoran, catering firması veya kafede temizlik sürecinin aksaması, hijyen sorunlarına ve müşteri memnuniyetsizliğine yol açabilir. Öztiryakiler bulaşık makinesi servisi arayışında olan profesyoneller için Çınar Endüstriyel Mutfak Servisi olarak, İstanbul'da 15 yıldır profesyonel mutfak ekipmanlarına teknik destek sağlıyoruz. İstanbul'un tüm Avrupa ve Anadolu ilçelerinde 7/24 acil servis hizmeti veriyoruz.",
        ],
      },
      {
        id: "neden-profesyonel-servis-onemli",
        level: 2,
        heading: "Neden Profesyonel Servis Önemli?",
        paragraphs: [
          "Servis çağrılarında önce cihazın modelini ve yaşanan sorunu öğreniyoruz. Aynı belirti farklı parçalardan kaynaklanabilir. Çalışmayan bir bulaşık makinesinde sorun elektrik beslemesinden kaynaklanabileceği gibi pompa, kapak emniyeti veya kontrol kartında da olabilir.",
          "Restoran, otel, catering firması veya kafede bulaşık makinesinin arızalanması, işletmenizin durmasına neden olur. Sadece arızayı gidermek yetmez. Sorunun neden oluştuğunu da bulmak gerekir. Yoğun kullanılan ekipmanlarda bakım ihmal edildiğinde aynı sorun kısa süre içinde tekrar ortaya çıkabilir.",
          "Bir cihazın arızalı kalması, tamir maliyetinin yanında iş kaybı ve operasyonel aksamalar anlamına gelir.",
        ],
      },
      {
        id: "oztiryakiler-bulasik-makinesi-tamiri",
        level: 2,
        heading: "Öztiryakiler Bulaşık Makinesi Tamiri",
        paragraphs: [
          "\"Bulaşık makinesi su almıyor\" şikayetiyle sık karşılaşıyoruz. Genelde su giriş vanası tıkalı veya şebeke basıncı düşük. Bir kafede makine çalışıyor ama suyu ısıtmıyordu. Rezistans sağlamdı, ama termostat yanlış okuma yapıyordu. Değiştirdik, sorun çözüldü.",
          "Bulaşık makinesinde su basıncı, tıkanıklık ve pompa kaynaklı sorunlarla sık karşılaşıyoruz. Isıtma problemi olduğunda rezistans, termostat ve kontrol kartı kontrol ediliyor.",
          "Yıkama performansı düştüğünde ilk kontrol ettiğimiz noktalar püskürtme kolları, filtreler ve deterjan dozaj sistemi. Filtrelerde biriken kalıntılar, makinenin yıkama performansını kısa sürede etkileyebiliyor. Kontrol paneli, sensör veya programlama kaynaklı elektronik arızalarda cihazın hata kodları ve çalışma değerleri kontrol edilerek arızanın kaynağı belirleniyor.",
          "Makinenin altından su gelmesi durumunda kapı contaları, hortum bağlantıları ve tahliye hattı kontrol ediliyor. Kaçağın kaynağı belirlendikten sonra gerekli müdahale yapılıyor. Öztiryakiler bulaşık makinesi tamircisi olarak, bu tür sorunlara hızlı ve kalıcı çözümler sunuyoruz.",
        ],
      },
      {
        id: "sik-karsilasilan-sorunlar",
        level: 2,
        heading: "Sık Karşılaşılan Sorunlar",
        paragraphs: [
          "Öztiryakiler bulaşık makinelerinde en sık karşılaşılan sorunlar şunlar:",
          "Su almama: Su giriş vanası tıkalı, şebeke basıncı düşük veya pompa arızalı",
          "Su ısıtmama: Rezistans, termostat veya kontrol kartı sorunu",
          "Yıkama performansı düşüklüğü: Püskürtme kolları tıkalı, filtreler kirli veya deterjan dozaj sistemi arızalı",
          "Su kaçağı: Kapı contaları yıpranmış, hortum bağlantıları gevşek veya tahliye hattı tıkalı",
          "Elektronik arızalar: Kontrol paneli, sensör veya programlama hataları",
          "Bu sorunların çoğu, düzenli bakım ile önlenebilir. Öztiryakiler bulaşık makinesi tamiri için profesyonel destek almanız, cihazınızın ömrünü uzatır.",
        ],
      },
      {
        id: "hizmet-verdigimiz-cihaz-turleri",
        level: 2,
        heading: "Hizmet Verdiğimiz Cihaz Türleri",
        paragraphs: [
          "Öztiryakiler marka endüstriyel bulaşık makinelerinin farklı kapasite ve tipteki modellerine profesyonel servis hizmeti sunuyoruz. Her cihaz tipi için özel teknik bilgi ve ekipmanla müdahale ediyoruz.",
        ],
      },
      {
        id: "kapasite-bazli-cihazlar",
        level: 3,
        heading: "Kapasite Bazlı Cihazlar",
        paragraphs: [
          "<strong>500 Tabak Kapasiteli Bulaşık Makineleri</strong> Küçük ve orta ölçekli işletmeler için ideal olan bu cihazlarda pompa, ısıtıcı ve elektronik sistem arızalarına hızlı çözüm üretiyoruz. Kompakt yapıları sayesinde az yer kaplar ve enerji tasarrufu sağlar.",
          "<strong>1000 Tabak Kapasiteli Bulaşık Makineleri</strong> Restoran ve kafelerde yaygın kullanılan bu makinelerde periyodik bakım ve acil onarım hizmetleri sunuyoruz. Orta ölçekli işletmelerin yoğun kullanım ihtiyaçlarına uygun olarak tasarlanmıştır.",
          "<strong>2000 Tabak Kapasiteli Bulaşık Makineleri</strong> Büyük ölçekli catering firmaları ve oteller için yüksek kapasiteli bu cihazlarda kompresör, konveyör sistemi ve kontrol paneli servisleri veriyoruz. Yüksek hacimli yıkama ihtiyaçları için optimize edilmiştir.",
        ],
      },
      {
        id: "cihaz-tipi-bazli-hizmetler",
        level: 3,
        heading: "Cihaz Tipi Bazlı Hizmetler",
        paragraphs: [
          "<strong>Giyotin Tip Bulaşık Makineleri</strong> Hızlı yıkama döngüsü sunan giyotin tip makinelerde kapak mekanizması, su basıncı ve sıcaklık kontrolü konularında teknik destek sağlıyoruz. Manuel yükleme ve boşaltma ile çalışan bu sistemler, orta ölçekli mutfaklar için idealdir.",
          "<strong>Tünel Tip Bulaşık Makineleri</strong> Sürekli çalışma prensibiyle çalışan tünel tip makinelerde konveyör sistemi, motor ve otomatik dozaj sistemleri servisleri sunuyoruz. Yüksek kapasiteli işletmelerde tercih edilen bu sistemler, sürekli akış sağlar.",
          "<strong>Tezgah Altı Bulaşık Makineleri</strong> Kompakt tasarımıyla mutfaklarda yer tasarrufu sağlayan tezgah altı modellerde filtre temizliği, pompa ve elektronik kart servisleri gerçekleştiriyoruz. Küçük mutfaklar ve barlar için pratik çözüm sunar.",
          "<strong>Bardak Yıkama Makineleri</strong> Bar ve kafelerde kullanılan bardak yıkama makinelerinde özel sepet sistemleri, düşük su tüketimi ve hızlı kurutma teknolojileri için bakım hizmeti veriyoruz. Hassas cam eşyalar için özel yıkama programları bulunur.",
          "<strong>Tabak Yıkama Makineleri</strong> Özel tabak sepetleri ve yüksek basınçlı yıkama sistemleri ile çalışan bu cihazlarda püskürtme kolları, filtre sistemleri ve ısıtıcı eleman bakımını yapıyoruz. Restoran ve yemekhanelerde yoğun olarak kullanılır.",
          "Her cihaz tipi için özel teknik bilgi ve ekipmanla müdahale ediyor, işletmenizin ihtiyacına göre en uygun çözümü üretiyoruz.",
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
        id: "oztiryakiler-bulasik-makinesi-servisi-icin-cinar-endustriyel-mutfak-servisi",
        level: 2,
        heading: "Öztiryakiler Bulaşık Makinesi Servisi İçin Çınar Endüstriyel Mutfak Servisi",
        paragraphs: [
          "Çınar Endüstriyel Mutfak Servisi olarak İstanbul'un Avrupa ve Anadolu Yakası'ndaki tüm ilçelerinde profesyonel mutfak ekipmanları için servis hizmeti veriyoruz. Bulaşık makineleri, fırınlar, ocaklar ve buzdolaplarında arıza tespiti, bakım ve onarım çalışmalarını gerçekleştiriyoruz.",
          "Servis talebiniz sırasında cihazın modelini ve yaşanan sorunu paylaşmanız yeterli. Cihazın verdiği hata, çıkardığı ses, sıcaklık problemi veya su kaçağı gibi belirtileri önceden belirtmeniz, arızanın değerlendirilmesini kolaylaştırır.",
          "<a href=\"/markalar/oztiryakiler-servisi\">Öztiryakiler servisi</a> için Çınar Endüstriyel Mutfak Servisi ile iletişime geçebilirsiniz.",
        ],
      },
    ],
    faqHeading: "Sık Sorulan Sorular",
    faq: [
      {
        question: "\"Cihaz gece arızalandı, servis gerekiyor.\" Öztiryakiler bulaşık makinesi servisi için nasıl iletişim kurabilirim?",
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
  "electrolux-firin-servisi": {
    sections: [
      {
        id: "electrolux-firin-servisi",
        level: 2,
        heading: "Electrolux Fırın Servisi",
        paragraphs: [
          "Profesyonel mutfaklarda fırın, işletmenin kalbidir. Pastane, restoran, otel veya catering firmasında fırın arızası, üretim aksaması ve müşteri memnuniyetsizliği demektir. <strong>Electrolux fırın servisi</strong> arayışında olan profesyoneller için Çınar Endüstriyel Mutfak Servisi olarak, İstanbul'da 15 yıldır profesyonel mutfak ekipmanlarına teknik destek sağlıyoruz. İstanbul'un tüm Avrupa ve Anadolu ilçelerinde 7/24 acil servis hizmeti veriyoruz.",
        ],
      },
      {
        id: "electrolux-firin-yetkili-servis-ve-teknik-uzmanlik",
        level: 3,
        heading: "Electrolux Fırın Yetkili Servis ve Teknik Uzmanlık",
        paragraphs: [
          "Fırın arızaları genellikle benzer belirtiler gösterir ama farklı nedenlerden kaynaklanabilir. Sıcaklık sorunu, termostat, ısıtıcı eleman, fan veya kontrol kartı kaynaklı olabilir. Doğru teşhis, sorunun kök nedenini bulmak için şarttır.",
          "Electrolux fırın yetkili servis olarak, öncelikle cihazın modelini ve yaşanan sorunu öğreniyoruz. Aynı belirti farklı parçalardan kaynaklanabilir. Çalışmayan bir fırında sorun elektrik beslemesinden kaynaklanabileceği gibi, ısıtıcı eleman, termostat veya kontrol kartında da olabilir.",
          "Fırın arızaları, işletmenizin durmasına neden olur. Sadece arızayı gidermek yetmez. Sorunun neden oluştuğunu da bulmak gerekir. Yoğun kullanılan ekipmanlarda bakım ihmal edildiğinde aynı sorun kısa süre içinde tekrar ortaya çıkabilir.",
          "Bir cihazın arızalı kalması, tamir maliyetinin yanında iş kaybı ve operasyonel aksamalar anlamına gelir. Bu nedenle <strong>Electrolux fırın servisi</strong> seçimi dikkatli değerlendirilmesi gereken bir karardır.",
        ],
      },
      {
        id: "electrolux-firin-tamir-ve-ariza-tespiti",
        level: 3,
        heading: "Electrolux Fırın Tamir ve Arıza Tespiti",
        paragraphs: [
          "Fırında sıcaklık sorunu olduğunda ilk olarak termostat ve sıcaklık sensörlerini kontrol ediyoruz. Isıtıcı elemanların çalışma durumu ve fan sistemi de bu kontrolde gözden geçiriliyor. Gaz ve elektrik bağlantıları için güvenlik kontrolleri, sızdırmazlık testleri yapıyoruz.",
          "Fırının ayarlanan sıcaklığa ulaşmaması veya pişirme sırasında sıcaklığın sürekli değişmesi, termostat ve sıcaklık sensörlerinin kontrol edilmesini gerektirir. Sorun ısıtıcı elemanlarda, fan veya kontrol kartında ortaya çıkabilir.",
          "Kontrol sistemleri, dijital paneller, programlama birimleri ve sensör arızaları konusunda teknik destek veriyoruz. Mekanik problemler, kapı menteşeleri, raflar, fan sistemleri de <strong>Electrolux fırın servisi</strong> kapsamında.",
          "Güvenlik kontrolleri, aşırı ısınma koruması, gaz kaçağı detektörleri ve acil durdurma sistemleri konularında hizmet veriyoruz. Fırının gereğinden uzun süre çalışmasına neden olan sıcaklık veya kontrol sorunları tespit ediliyor. Arıza giderildiğinde cihazın normal çalışma düzenine dönmesi sağlanıyor.",
        ],
      },
      {
        id: "electrolux-firin-tamircisi-ve-sik-karsilasilan-sorunlar",
        level: 3,
        heading: "Electrolux Fırın Tamircisi ve Sık Karşılaşılan Sorunlar",
        paragraphs: [
          "Gazlı fırınlarda brülör temizliği çok önemli. Unlu mamuller yapan yerlerde, un tozu her yere giriyor. Brülör deliklerini tıkıyor. Alev düzensiz yanıyor. Bu durum, fırının bir tarafının iyi pişirmesine, diğer tarafının pişirmemesine neden olur.",
          "<strong>Electrolux fırın tamircisi</strong> olarak, bu tür basit ama kritik detayları gözden kaçırmıyoruz. Müşteri bazen \"yeni fırın alsam mı\" diye soruyor. Bu noktada maliyet analizi yapmak gerekiyor. Bazen basit bir temizlik sorunu çözüyor, bazen de ciddi bir arıza var.",
          "Sıcaklık kalibrasyonu da ayrı bir konu. Bazı fırınlarda termostat doğru çalışıyor ama gösterge yanlış. Müşteri 180 dereceye ayarlıyor, fırın 160'te çalışıyor. Ürünler pişmiyor. Kalibrasyon ile düzeltilebiliyor. Ama bazı modellerde bu mümkün değil.",
          "Elektrikli fırınlarda ısıtıcı elemanlar, termostat ve fan sistemi en sık arızalanan parçalar arasında. Rezistanslardan biri yarım çalışıyorsa, fırın istenen sıcaklığa ulaşamaz. Fan motoru yavaş dönüyorsa, hava sirkülasyonu bozuk olur.",
          "Fırın kapısı tam kapanmıyorsa, ısı kaybı olur. Müşteri \"fırın ısıtmıyor\" der. Aslında sorun kapı menteşelerinde. Menteşeleri değiştirdik, kapı sıkı kapanıyor. Fırın normal çalışmaya başladı. Basit bir parça ama işi durduruyor.",
        ],
      },
      {
        id: "saha-deneyimleri-electrolux-firin-arizalari-ve-cozumler",
        level: 3,
        heading: "Saha Deneyimleri: Electrolux Fırın Arızaları ve Çözümler",
        paragraphs: [
          "Geçen ay Üsküdar'da bir pastaneden çağrı aldık. \"Fırın sıcaklığı sabit tutmuyor\" dediler. Gittik, termostatı kontrol ettik. Sağlam. Sonra fark ettik: ısıtıcı rezistanslardan biri yarım çalışıyor. Değiştirdik, fırın normal çalışmaya başladı. Müşteri termostat için para harcamıştı, sorun devam ediyordu. İkinci görüşte gerçek problem ortaya çıktı.",
          "Bir restoranda, fırın 200 dereceye ayarlanıyor ama 150'de kalıyordu. Müşteri \"termostat bozuk\" dedi. Gittik, termostatı ölçtük, sağlam. Sonra fark ettik: fan motoru yavaş dönüyor. Rulmanlar yıpranmış, hava sirkülasyonu bozuk. Motoru değiştirdik, fırın normal çalışmaya başladı.",
          "Bir simitçide, fırının bir tarafı iyi pişiriyor, diğer tarafı pişirmiyordu. Brülörleri söktük, tel fırçayla temizledik. Farkı hemen gördüler. Un tozu her yere giriyor, brülör deliklerini tıkıyor. Alev düzensiz yanıyor. Gazlı fırınlarda brülör temizliği çok önemli.",
          "Bir pastanede, rafların üstü yanıyor, altı ham kalıyordu. Termostatı değiştirdik, düzelmedi. Sonra fark ettik: Fan motoru yavaş dönüyor. Rulmanlar yıpranmış. Hava sirkülasyonu bozuk. Motoru değiştirdik, sorun çözüldü.",
          "Fırın kapısı tam kapanmıyorsa, ısı kaybı olur. Müşteri \"fırın ısıtmıyor\" der. Aslında sorun kapı menteşelerinde. Menteşeleri değiştirdik, kapı sıkı kapanıyor. Fırın normal çalışmaya başladı. Basit bir parça ama işi durduruyor.",
          "Bir otel zinciriyle çalışıyoruz. Başlangıçta yılda 30-40 kez arıza kaydı açılıyordu. Periyodik bakım programı uyguladık. Bir yıl sonra, arıza sayısı 12'ye düştü. Müşteri başta \"gereksiz masraf\" demişti. Bir yıl sonra fikrini değiştirdi.",
          "Kadıköy'de bir restoranda çağrı aldık. Fırın 180 dereceye ayarlı ama 160'te kalıyordu. Termostat değişti, yine aynı. Sonra fark ettik: ısıtıcı rezistanslardan biri yarım çalışıyor. Değiştirdik, düzeldi.",
          "Bir catering firmasında, fırın programı ortada kalıyordu. Kontrol kartına baktık. Nem hasarı vardı. Mutfak çok nemli, havalandırma yetersiz. Kartı değiştirdik. Müşteriye havalandırma sistemini iyileştirmesini önerdik.",
          "Bu tür durumlar, doğru teknik servisin ne kadar önemli olduğunu gösteriyor. Sadece arızayı gidermek yetmez. Sorunun neden oluştuğunu da bulmak gerekir. Yoğun kullanılan ekipmanlarda bakım ihmal edildiğinde aynı sorun kısa süre içinde tekrar ortaya çıkabilir.",
          "Electrolux fırın servisi olarak, bu tür saha deneyimleriyle edindiğimiz bilgi birikimini müşterilerimize sunuyoruz. Her arıza farklıdır, her çözüm özeldir.",
        ],
      },
      {
        id: "periyodik-bakim-ve-onleyici-cozumler",
        level: 3,
        heading: "Periyodik Bakım ve Önleyici Çözümler",
        paragraphs: [
          "Düzenli periyodik bakım programı uygulamak, servis ihtiyacını minimize etmenin en etkili yolu. Çınar Endüstriyel Mutfak Servisi olarak, işletmenize özel bakım planları oluşturuyor, cihazlarınızın ömrünü uzatıyor ve beklenmedik arızaları önlüyoruz.",
          "Bakım sırasında cihazın filtreleri, bağlantıları, hareketli parçaları ve güvenlik elemanları kontrol edilir. Kullanım sırasında ortaya çıkabilecek bazı sorunlar daha erken fark edilebilir. Yoğun çalışan mutfaklarda küçük bir arızanın büyümeden müdahale edilmesi, beklenmedik duruşların önüne geçer.",
          "Periyodik bakımın bir diğer faydası da enerji tasarrufu. Temiz kondenser, doğru ayarlanmış brülör, sıkı elektrik bağlantıları daha az enerji tüketimi demek. Aylık faturada fark ediliyor.",
          "Bir otel zinciriyle çalışıyoruz. Başlangıçta yılda 30-40 kez arıza kaydı açılıyordu. Periyodik bakım programı uyguladık. Bir yıl sonra, arıza sayısı 12'ye düştü. Müşteri başta \"gereksiz masraf\" demişti. Bir yıl sonra fikrini değiştirdi.",
        ],
      },
      {
        id: "servis-secimi-ve-dikkat-edilmesi-gerekenler",
        level: 3,
        heading: "Servis Seçimi ve Dikkat Edilmesi Gerekenler",
        paragraphs: [
          "İlk telefon görüşmesi önemli. Teknik sorular soruyorlar mı? \"Hangi model?\", \"Ne zaman başladı?\", \"Önce ne oldu?\" gibi. Sormuyorlarsa, dikkatli olun.",
          "Yedek parça garantisi veriyorlar mı? Orijinal parça kullanılıyor mu? Ucuz parça takıp, \"tamir ettik\" diyenler var. 2 hafta sonra yine bozuluyor.",
          "Fiyatı önceden söylüyorlar mı? Sürpriz faturalar güveni zedeler. Biz işe başlamadan önce net fiyat veriyoruz. Müşteri onay verirse başlıyoruz.",
          "Referansları var mı? Electrolux fırın yetkili servis konusunda tecrübeli firmalar, referans listesi sunabilir. Çınar Endüstriyel olarak, yüzlerce mutfağa hizmet verdik.",
          "Servis talebi oluşturulduğunda öncelikle cihazın modeli ve yaşanan arıza hakkında bilgi alıyoruz. Arızanın niteliğine göre müdahale planlanıyor ve işlem öncesinde müşteriye yapılacak çalışma hakkında bilgi veriliyor.",
        ],
      },
      {
        id: "",
        level: 2,
        heading: "",
        paragraphs: [
          "<strong>Electrolux fırın servisi</strong> arayışında olanlar, genelde acil durumda arıyor. Panik halindeler. İşleri durmuş. Müşteriler bekliyor. Ürünler bozuluyor.",
          "Çınar Endüstriyel Mutfak Servisi olarak, bu tür durumlarda sakinleştirici bir ses olmaya çalışıyoruz. \"Sorunu çözeriz\" diyoruz. Ve çözüyoruz.",
          "Fırın, ocak, bulaşık makinesi, buzdolabı alanlarında yılların verdiği tecrübe var. Her cihazın dilini biliyoruz. Her arızanın kokusunu aldık.",
          "Mutfağınız sizin için ne kadar önemli, biliyoruz. Çünkü orada kazanıyorsunuz. Orada geçiminizi sağlıyorsunuz. Biz de o mutfağın çalışması için çalışıyoruz.",
          "İletişime geçin. Konuşalım. Sorununuzu anlatın.",
        ],
      },
    ],
    faqHeading: "Sık Sorulan Sorular",
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
};

export function getBrandServiceContent(key: string): RichContent | undefined {
  return brandServiceContent[key];
}
