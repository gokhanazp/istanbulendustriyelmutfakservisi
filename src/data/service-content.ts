import { RichContent } from "@/types";

/**
 * Hizmet sayfalarına özel uzun form içerik.
 * Kaynak: public/yenisayfa/*.docx — metinler birebir aktarılmıştır.
 * Anahtar = Service.slug. Kaydı olmayan sayfalar şablonun varsayılan
 * metnini kullanmaya devam eder.
 */
export const serviceContent: Record<string, RichContent> = {
  "endustriyel-firin-servisi": {
    sections: [
      {
        id: "endustriyel-firin-servisi-gercek-saha-deneyimleri-ve-cozumler",
        level: 2,
        heading: "Endüstriyel Fırın Servisi: Gerçek Saha Deneyimleri ve Çözümler",
        paragraphs: [
          "Fırının pişirme sırasında sıcaklığı sabit tutmaması veya istenen dereceye ulaşmaması, mutfak operasyonunu doğrudan etkiler. Pastane, restoran, otel veya catering firmasında fırın arızası, üretim aksaması ve müşteri memnuniyetsizliği demektir. Endüstriyel fırın servisi arayışında olan profesyoneller için Çınar Endüstriyel Mutfak Servisi olarak, İstanbul'da 15 yıldır profesyonel mutfak ekipmanlarına teknik destek sağlıyoruz. İstanbul'un tüm Avrupa ve Anadolu ilçelerinde 7/24 acil servis hizmeti veriyoruz.",
        ],
      },
      {
        id: "firin-arizasi-ne-zaman-ciddi-olur",
        level: 2,
        heading: "Fırın Arızası Ne Zaman Ciddi Olur?",
        paragraphs: [
          "Servis çağrılarında önce cihazın modelini ve yaşanan sorunu öğreniyoruz. Fırın arızaları bazen basit bir termostat değişimi ile çözülebilir, bazen de kontrol kartı veya ısıtıcı elemanlarda ciddi sorunlar olabilir.",
          "\"Fırın sıcaklığı sabit tutmuyor\" diyen müşterilerimiz oluyor. Bir pastanede fırın 180 dereceye ayarlı ama 160'te kalıyordu. Termostat değişti, yine aynı. Sonra fark ettik: ısıtıcı rezistanslardan biri yarım çalışıyor. Değiştirdik, düzeldi.",
          "Geçen ay Kadıköy'de bir restoranda çağrı aldık. Fırın 200 dereceye ayarlanıyor ama 150'de kalıyordu. Müşteri \"termostat bozuk\" dedi. Gittik, termostatı ölçtük, sağlam. Sonra fark ettik: fan motoru yavaş dönüyor. Rulmanlar yıpranmış, hava sirkülasyonu bozuk. Motoru değiştirdik, fırın normal çalışmaya başladı. Müşteri termostat için para harcamıştı, sorun devam ediyordu. İkinci görüşte gerçek problem ortaya çıktı.",
          "Restoran, otel, catering firması veya kafede fırının arızalanması, işletmenizin durmasına neden olur. Sadece arızayı gidermek yetmez. Sorunun neden oluştuğunu da bulmak gerekir. Yoğun kullanılan ekipmanlarda bakım ihmal edildiğinde aynı sorun kısa süre içinde tekrar ortaya çıkabilir.",
          "Bir cihazın arızalı kalması, tamir maliyetinin yanında iş kaybı ve operasyonel aksamalar anlamına gelir. Bu nedenle endüstriyel fırın servisi seçimi dikkatli değerlendirilmesi gereken bir karardır.",
        ],
      },
      {
        id: "endustriyel-firin-tamiri-nasil-yapilir",
        level: 2,
        heading: "Endüstriyel Fırın Tamiri Nasıl Yapılır?",
        paragraphs: [
          "Fırında sıcaklık sorunu olduğunda ilk olarak termostat ve sıcaklık sensörlerini kontrol ediyoruz. Isıtıcı elemanların çalışma durumu ve fan sistemi de bu kontrolde gözden geçiriliyor. Gaz ve elektrik bağlantıları için güvenlik kontrolleri, sızdırmazlık testleri yapıyoruz.",
          "Fırının ayarlanan sıcaklığa ulaşmaması veya pişirme sırasında sıcaklığın sürekli değişmesi, termostat ve sıcaklık sensörlerinin kontrol edilmesini gerektirir. Sorun ısıtıcı elemanlarda, fan veya kontrol kartında ortaya çıkabilir.",
          "Bir simitçide, fırının bir tarafı iyi pişiriyor, diğer tarafı pişirmiyordu. Brülörleri söktük, tel fırçayla temizledik. Farkı hemen gördüler. Un tozu her yere giriyor, brülör deliklerini tıkıyor. Alev düzensiz yanıyor. Gazlı fırınlarda brülör temizliği çok önemli.",
          "Kontrol sistemleri, dijital paneller, programlama birimleri ve sensör arızaları konusunda teknik destek veriyoruz. Mekanik problemler, kapı menteşeleri, raflar, fan sistemleri de endüstriyel fırın servisi kapsamında.",
          "Güvenlik kontrolleri, aşırı ısınma koruması, gaz kaçağı detektörleri ve acil durdurma sistemleri konularında hizmet veriyoruz. Fırının gereğinden uzun süre çalışmasına neden olan sıcaklık veya kontrol sorunları tespit ediliyor. Arıza giderildiğinde cihazın normal çalışma düzenine dönmesi sağlanıyor.",
        ],
      },
      {
        id: "sanayi-tipi-firin-servisi-ve-tamiri",
        level: 2,
        heading: "Sanayi Tipi Fırın Servisi ve Tamiri",
        paragraphs: [
          "Sanayi tipi fırınlar, yüksek kapasiteli üretim yapan işletmeler için özel olarak tasarlanmıştır. Saatlerce kesintisiz çalışma, yüksek sıcaklık değerleri ve yoğun kullanım koşullarına dayanıklı olarak üretilen bu fırınlar, düzenli teknik servis ve bakım gerektirir.",
          "Sanayi tipi fırın servisimiz kapsamında; ısıtıcı eleman değişimi, termostat kalibrasyonu, fan motoru bakımı, kontrol paneli onarımı ve gaz sistemi güvenlik kontrolleri gibi hizmetler sunuyoruz. Büyük ölçekli catering firmaları, otel mutfakları ve endüstriyel tesisler için 7/24 acil servis desteği sağlıyoruz.",
        ],
      },
      {
        id: "hizmet-verdigimiz-firin-turleri",
        level: 2,
        heading: "Hizmet Verdiğimiz Fırın Türleri",
        paragraphs: [
          "Endüstriyel mutfaklarda kullanılan farklı tipteki fırınlara profesyonel servis hizmeti sunuyoruz. Her cihaz tipi için özel teknik bilgi ve ekipmanla müdahale ediyoruz.",
        ],
      },
      {
        id: "konveksiyonlu-firin",
        level: 3,
        heading: "Konveksiyonlu Fırın",
        paragraphs: [
          "Hava sirkülasyonu ile eşit pişirme sağlayan konveksiyonlu fırınlarda fan motoru, ısıtıcı eleman ve termostat sistemleri konusunda teknik destek veriyoruz. Pastane ve restoranlarda yaygın olarak kullanılır.",
        ],
      },
      {
        id: "pizza-firini",
        level: 3,
        heading: "Pizza Fırını",
        paragraphs: [
          "Taş tabanlı veya metal yüzeyli pizza fırınlarında sıcaklık dağılımı, ısıtıcı sistemler ve termostat ayarları konusunda uzmanlaşmış ekibimizle hizmet veriyoruz. Yüksek sıcaklıkta çalışan bu fırınlar için özel bakım programları sunuyoruz.",
        ],
      },
      {
        id: "pastane-firini",
        level: 3,
        heading: "Pastane Fırını",
        paragraphs: [
          "Katlı raf sistemli pastane fırınlarında ısı dağılımı, nem kontrolü ve programlama birimleri konusunda teknik servis sağlıyoruz. Hassas pişirme gerektiren ürünler için ideal çözümler üretiyoruz.",
        ],
      },
      {
        id: "elektrikli-ve-gazli-firinlar",
        level: 3,
        heading: "Elektrikli ve Gazlı Fırınlar",
        paragraphs: [
          "Hem elektrikli hem de gazlı endüstriyel fırınlarda ısıtıcı eleman, brülör, termostat ve kontrol sistemleri arızalarına hızlı ve kalıcı çözümler sunuyoruz. Enerji türüne göre özel teknik servis hizmeti veriyoruz.",
        ],
      },
      {
        id: "kombi-firin",
        level: 3,
        heading: "Kombi Fırın",
        paragraphs: [
          "Buhar ve kuru ısıyı bir arada sunan kombi fırınlarda buhar jeneratörü, kontrol paneli ve ısıtma sistemleri konusunda profesyonel teknik destek sağlıyoruz. Çok yönlü pişirme imkanı sunan bu fırınlar için özel bakım hizmetleri sunuyoruz.",
        ],
      },
      {
        id: "borulu-donerli-firin",
        level: 3,
        heading: "Borulu Dönerli Fırın",
        paragraphs: [
          "Döner sistemi ile eşit pişirme sağlayan borulu fırınlarda motor, aktarma mekanizması ve ısıtıcı sistemler konusunda teknik servis veriyoruz. Kebap ve döner gibi ürünler için ideal olan bu fırınlar için özel bakım programları sunuyoruz.",
        ],
      },
      {
        id: "kuzineli-taban-rafli-firin",
        level: 3,
        heading: "Kuzineli Taban Raflı Fırın",
        paragraphs: [
          "Üst kısmında ocak, altında fırın bölmesi bulunan kuzineli modellerde hem fırın hem de ocak sistemleri için teknik destek sağlıyoruz. Kompakt tasarım sunan bu cihazlar için tek noktadan servis hizmeti veriyoruz.",
        ],
      },
      {
        id: "pizza-firini-tasi-degisimi-montaji-ve-satisi",
        level: 2,
        heading: "Pizza Fırını Taşı Değişimi, Montajı ve Satışı",
        paragraphs: [
          "Pizza fırınlarında taş taban, pişirme kalitesini doğrudan etkileyen en önemli unsurdur. Zamanla çatlaklar, kırıklar veya aşınmalar oluşabilir. Bu durumda pizza fırını taşı değişimi, montajı ve satışı hizmetleri sunuyoruz.",
          "Orijinal kalitede pizza fırını taşları temin ediyor, profesyonel ekibimizle yerinde montajını gerçekleştiriyoruz. Taş değişimi sonrası sıcaklık kalibrasyonu yaparak fırınınızın optimum performansla çalışmasını sağlıyoruz. Farklı boyut ve kalınlıklarda pizza fırını taşı seçenekleri ile hizmetinizdeyiz.",
        ],
      },
      {
        id: "oztiryakiler-firin-servisi",
        level: 2,
        heading: "Öztiryakiler Fırın Servisi",
        paragraphs: [
          "Öztiryakiler, Türk mutfağı ekipmanları sektöründe uzun yıllardır faaliyet gösteren köklü bir markadır. Endüstriyel fırın modelleri, özellikle pide, lavaş ve bazlama gibi geleneksel ürünler için özel olarak tasarlanmıştır. <strong><a href=\"/oztiryakiler-servis/oztiryakiler-firin-servisi\">Öztiryakiler fırın servisi</a></strong> arayışında olan işletmeler için Çınar Endüstriyel Mutfak Servisi olarak, bu markanın gazlı ve elektrikli fırın modellerine teknik destek sağlıyoruz.",
          "Öztiryakiler fırınlarında sık karşılaşılan sorunlar arasında brülör tıkanıklıkları, termostat arızaları ve ısı dağılımı problemleri yer alıyor. Geleneksel taş tabanlı fırınlarda taş değişimi, izolasyon kontrolü ve gaz ayarları konusunda uzman teknik ekibimizle hizmet veriyoruz. İstanbul'un tüm ilçelerinde 7/24 acil servis desteği sunuyoruz.",
        ],
      },
      {
        id: "empero-firin-servisi",
        level: 2,
        heading: "Empero Fırın Servisi",
        paragraphs: [
          "Empero, endüstriyel mutfak ekipmanları alanında geniş ürün yelpazesiyle bilinen bir markadır. Konveksiyonel fırınlar, deck fırınlar ve kombine modelleriyle pastane, restoran ve otel mutfaklarında sıkça tercih edilir. <strong><a href=\"/empero-servis/empero-firin-servisi\">Empero fırın servisi</a></strong> konusunda, bu markanın tüm modellerine orijinal yedek parça ve profesyonel teknik destek sağlıyoruz.",
          "Empero fırınlarında en sık görülen arızalar arasında fan motoru arızaları, kontrol paneli sorunları ve ısıtıcı eleman problemleri bulunuyor. Dijital kontrol sistemleri, programlama birimleri ve sensör arızaları konusunda teknik servis hizmeti veriyoruz. Periyodik bakım programlarımızla fırınınızın ömrünü uzatıyor, beklenmedik arızaları önlüyoruz.",
        ],
      },
      {
        id: "electrolux-firin-servisi",
        level: 2,
        heading: "Electrolux Fırın Servisi",
        paragraphs: [
          "Electrolux, profesyonel mutfak ekipmanları sektöründe dünya çapında tanınan bir markadır. Yüksek kaliteli konveksiyonel fırınlar, pizza fırınları ve kombine modelleriyle catering firmaları, oteller ve büyük ölçekli mutfaklar tarafından tercih edilir. <strong><a href=\"/electrolux-servis/electrolux-firin-servisi\">Electrolux fırın servisi</a></strong> arayışında olan profesyoneller için Çınar Endüstriyel Mutfak Servisi olarak, 15 yıllık tecrübemizle teknik destek sağlıyoruz.",
          "Electrolux fırınlarında sıcaklık kalibrasyonu, kontrol kartı arızaları, ısıtıcı eleman değişimi ve fan sistemi bakımı konularında uzmanlaşmış ekibimizle hizmet veriyoruz. Orijinal yedek parça garantisi, işçilik garantisi ve periyodik bakım programlarımızla fırınınızın maksimum verimlilikte çalışmasını sağlıyoruz. İstanbul'un tüm Avrupa ve Anadolu ilçelerinde 7/24 acil servis desteği sunuyoruz.",
        ],
      },
      {
        id: "rational-ve-oztiryakiler-firin-servisleri",
        level: 2,
        heading: "Rational ve Öztiryakiler Fırın Servisleri",
        paragraphs: [
          "Rational fırın servisleri kapsamında, Rational marka kombi fırınlar ve konveksiyonel fırınlara teknik destek sağlıyoruz. Rational marka cihazlarda arıza tespiti, bakım ve onarım çalışmalarını gerçekleştiriyoruz.",
          "Öztiryakiler fırın servisi için de aynı şekilde, Öztiryakiler marka profesyonel fırınlarda yaşanan sorunlara çözüm üretiyoruz. Gazlı ve elektrikli fırınlarda arıza tespiti ve onarım hizmeti veriyoruz.",
          "Her marka için orijinal yedek parça kullanarak, cihazınızın uzun ömürlü olmasını ve garanti koşullarının korunmasını sağlıyoruz. Endüstriyel fırın tamiri için profesyonel destek almanız, cihazınızın ömrünü uzatır.",
        ],
      },
      {
        id: "marka-bazli-firin-servis-hizmetlerimiz",
        level: 2,
        heading: "Marka Bazlı Fırın Servis Hizmetlerimiz",
        paragraphs: [
          "Endüstriyel fırın sektörünün önde gelen markalarına profesyonel servis hizmeti sunuyoruz. Her marka için özel teknik bilgi ve orijinal yedek parça ile çalışıyoruz.",
        ],
      },
      {
        id: "electrolux-firin-servisi-tamiri",
        level: 3,
        heading: "Electrolux Fırın Servisi / Tamiri",
        paragraphs: [
          "Electrolux marka endüstriyel fırınlarda sıcaklık kalibrasyonu, kontrol kartı arızaları ve ısıtıcı eleman değişimi konularında teknik destek sağlıyoruz. Orijinal yedek parça garantisi ile hizmet veriyoruz.",
        ],
      },
      {
        id: "ayfa-firin-servisi-tamiri",
        level: 3,
        heading: "Ayfa Fırın Servisi / Tamiri",
        paragraphs: [
          "Ayfa marka fırınlarda termostat, ısıtıcı sistem ve kontrol paneli arızalarına hızlı çözüm üretiyoruz. Periyodik bakım ve acil onarım hizmetleri sunuyoruz.",
        ],
      },
      {
        id: "ucler-firin-servisi-tamiri",
        level: 3,
        heading: "Üçler Fırın Servisi / Tamiri",
        paragraphs: [
          "Üçler marka endüstriyel fırınlarda fan motoru, brülör ve gaz sistemi bakımı konusunda profesyonel teknik servis sağlıyoruz. Uzun yıllara dayanan tecrübemizle hizmetinizdeyiz.",
        ],
      },
      {
        id: "pimak-firin-servisi-tamiri",
        level: 3,
        heading: "Pimak Fırın Servisi / Tamiri",
        paragraphs: [
          "Pimak marka fırınlarda ısı dağılımı, termostat ayarları ve elektronik kontrol sistemleri arızalarına kalıcı çözümler sunuyoruz. Orijinal yedek parça ile çalışıyoruz.",
        ],
      },
      {
        id: "inoksan-firin-servisi-tamiri",
        level: 3,
        heading: "İnoksan Fırın Servisi / Tamiri",
        paragraphs: [
          "İnoksan marka endüstriyel fırınlarda konveksiyon sistemi, ısıtıcı eleman ve kontrol paneli servisleri veriyoruz. Yetkili servis standartlarında teknik destek sağlıyoruz.",
        ],
      },
      {
        id: "venarro-firin-servisi-tamiri",
        level: 3,
        heading: "Venarro Fırın Servisi / Tamiri",
        paragraphs: [
          "Venarro marka fırınlarda sıcaklık sensörü, fan sistemi ve programlama birimleri konusunda uzmanlaşmış ekibimizle hizmet veriyoruz. Hızlı ve güvenilir servis sunuyoruz.",
        ],
      },
      {
        id: "empero-firin-servisi-tamiri",
        level: 3,
        heading: "Empero Fırın Servisi / Tamiri",
        paragraphs: [
          "Empero marka fırınlarda fan motoru, kontrol paneli ve ısıtıcı eleman problemlerine profesyonel çözümler üretiyoruz. Periyodik bakım programları ile cihaz ömrünü uzatıyoruz.",
        ],
      },
      {
        id: "kayalar-firin-servisi-tamiri",
        level: 3,
        heading: "Kayalar Fırın Servisi / Tamiri",
        paragraphs: [
          "Kayalar marka endüstriyel fırınlarda brülör temizliği, gaz ayarları ve termostat kalibrasyonu hizmetleri sunuyoruz. Güvenilir ve şeffaf fiyatlandırma ile çalışıyoruz.",
        ],
      },
      {
        id: "maksan-firin-servisi-tamiri",
        level: 3,
        heading: "Maksan Fırın Servisi / Tamiri",
        paragraphs: [
          "Maksan marka fırınlarda ısıtıcı sistem, kontrol kartı ve mekanik parça değişimleri konusunda teknik destek sağlıyoruz. Acil durumlarda hızlı müdahale ediyoruz.",
        ],
      },
      {
        id: "unox-firin-servisi-tamiri",
        level: 3,
        heading: "Unox Fırın Servisi / Tamiri",
        paragraphs: [
          "Unox marka kombi ve konveksiyonel fırınlarda buhar sistemi, kontrol paneli ve ısıtıcı eleman servisleri veriyoruz. Orijinal yedek parça garantisi sunuyoruz.",
        ],
      },
      {
        id: "csa-firin-servisi-tamiri",
        level: 3,
        heading: "CSA Fırın Servisi / Tamiri",
        paragraphs: [
          "CSA marka endüstriyel fırınlarda sıcaklık kontrolü, fan motoru ve elektronik sistem arızalarına kalıcı çözümler üretiyoruz. Profesyonel teknik ekibimizle hizmetinizdeyiz.",
        ],
      },
      {
        id: "oztiryakiler-firin-servisi-tamiri",
        level: 3,
        heading: "Öztiryakiler Fırın Servisi / Tamiri",
        paragraphs: [
          "Öztiryakiler marka fırınlarda brülör tıkanıklıkları, termostat arızaları ve taş değişimi konularında uzmanlaşmış ekibimizle hizmet veriyoruz. Geleneksel fırınlarda özel teknik destek sağlıyoruz.",
        ],
      },
      {
        id: "greenoks-firin-servisi-tamiri",
        level: 3,
        heading: "Greenoks Fırın Servisi / Tamiri",
        paragraphs: [
          "Greenoks marka endüstriyel fırınlarda ısıtıcı sistem, kontrol paneli ve fan bakımı konusunda profesyonel teknik servis sunuyoruz. Enerji verimliliği optimizasyonu yapıyoruz.",
        ],
      },
      {
        id: "alveo-firin-servisi-tamiri",
        level: 3,
        heading: "Alveo Fırın Servisi / Tamiri",
        paragraphs: [
          "Alveo marka fırınlarda sıcaklık kalibrasyonu, ısıtıcı eleman değişimi ve kontrol sistemi arızalarına hızlı çözüm üretiyoruz. Orijinal yedek parça ile çalışıyoruz.",
        ],
      },
      {
        id: "inoxclass-firin-servisi-tamiri",
        level: 3,
        heading: "Inoxclass Fırın Servisi / Tamiri",
        paragraphs: [
          "Inoxclass marka endüstriyel fırınlarda konveksiyon sistemi, termostat ve elektronik kontrol üniteleri konusunda teknik destek sağlıyoruz. Uzman ekibimizle hizmet veriyoruz.",
        ],
      },
      {
        id: "vital-firin-servisi-tamiri",
        level: 3,
        heading: "Vital Fırın Servisi / Tamiri",
        paragraphs: [
          "Vital marka fırınlarda fan motoru, ısıtıcı sistem ve programlama birimleri arızalarına profesyonel çözümler sunuyoruz. Periyodik bakım hizmetleri ile cihaz ömrünü uzatıyoruz.",
        ],
      },
      {
        id: "ndustrio-firin-servisi-tamiri",
        level: 3,
        heading: "Ndustrio Fırın Servisi / Tamiri",
        paragraphs: [
          "Ndustrio marka endüstriyel fırınlarda sıcaklık sensörü, kontrol kartı ve ısıtıcı eleman servisleri veriyoruz. Hızlı ve güvenilir teknik destek sağlıyoruz.",
        ],
      },
      {
        id: "bakimin-onemi",
        level: 2,
        heading: "Bakımın Önemi",
        paragraphs: [
          "Bakım sırasında cihazın filtreleri, bağlantıları, hareketli parçaları ve güvenlik elemanları kontrol edilir. Kullanım sırasında ortaya çıkabilecek bazı sorunlar daha erken fark edilebilir. Yoğun çalışan mutfaklarda küçük bir arızanın büyümeden müdahale edilmesi, beklenmedik duruşların önüne geçer.",
          "Düzenli periyodik bakım programı uygulamak, servis ihtiyacını minimize etmenin en etkili yolu. Çınar Endüstriyel Mutfak Servisi olarak, işletmenize özel bakım planları oluşturuyor, cihazlarınızın ömrünü uzatıyor ve beklenmedik arızaları önlüyoruz.",
          "Bir otel zinciriyle çalışıyoruz. Başlangıçta yılda 30-40 kez arıza kaydı açılıyordu. Periyodik bakım programı uyguladık. Bir yıl sonra, arıza sayısı 12'ye düştü. Müşteri başta \"gereksiz masraf\" demişti. Bir yıl sonra fikrini değiştirdi.",
          "Isıtma ve soğutma sistemlerinin çalışma durumu da cihazın türüne göre incelenir. Küçük bir arıza büyümeden fark edilebilir. Yoğun çalışan mutfaklarda bu kontroller, beklenmedik cihaz duruşlarının azaltılmasına yardımcı olur.",
        ],
      },
      {
        id: "hizmet-surecimiz",
        level: 2,
        heading: "Hizmet Sürecimiz",
        paragraphs: [
          "Servis talebi oluşturulduğunda öncelikle cihazın modeli ve yaşanan arıza hakkında bilgi alıyoruz. Arızanın niteliğine göre müdahale planlanıyor ve işlem öncesinde müşteriye yapılacak çalışma hakkında bilgi veriliyor.",
          "Çınar Endüstriyel Mutfak Servis olarak servis sürecinde önceliğimiz, arızanın kaynağını doğru belirlemek ve yapılacak işlem hakkında müşteriyi önceden bilgilendirmek.",
          "7/24 acil servis desteği, acil durumlarda hızlı müdahale. Geniş servis ağı, İstanbul'un tüm Avrupa ve Anadolu ilçelerine hizmet imkanı. Şeffaf fiyatlandırma, önceden bilgilendirme, gizli ücret yok. Garantili işçilik, yapılan tüm işlemler garanti kapsamında.",
        ],
      },
      {
        id: "endustriyel-firin-servisi-sunulan-hizmetler",
        level: 2,
        heading: "Endüstriyel Fırın Servisi Sunulan Hizmetler",
        paragraphs: [
          "Çınar Endüstriyel Mutfak Servisi olarak İstanbul'un Avrupa ve Anadolu Yakası'ndaki tüm ilçelerinde profesyonel mutfak ekipmanları için servis hizmeti veriyoruz. Fırınlar, bulaşık makineleri, ocaklar ve buzdolaplarında arıza tespiti, bakım ve onarım çalışmalarını gerçekleştiriyoruz.",
          "Servis talebiniz sırasında cihazın modelini ve yaşanan sorunu paylaşmanız yeterli. Cihazın verdiği hata, çıkardığı ses, sıcaklık problemi veya su kaçağı gibi belirtileri önceden belirtmeniz, arızanın değerlendirilmesini kolaylaştırır.",
          "Endüstriyel fırın servisi için Çınar Endüstriyel Mutfak Servisi ile iletişime geçebilirsiniz.",
        ],
      },
    ],
    faqHeading: "Merak Edilenler",
    faq: [
      {
        question: "\"Cihaz gece arızalandı, servis gerekiyor.\" Endüstriyel fırın servisi için nasıl iletişim kurabilirim?",
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
  "endustriyel-bulasik-makinesi-servisi": {
    sections: [
      {
        id: "endustriyel-bulasik-makinesi-servisi-profesyonel-cozumler",
        level: 2,
        heading: "Endüstriyel Bulaşık Makinesi Servisi: Profesyonel Çözümler",
        paragraphs: [
          "Yoğun çalışan bir mutfakta bulaşık makinesinin program ortasında durması, günlük iş akışını doğrudan etkiler. Restoran, catering firması veya kafede temizlik sürecinin aksaması, hijyen sorunlarına ve müşteri memnuniyetsizliğine yol açabilir. Endüstriyel bulaşık makinesi servisi arayışında olan profesyoneller için Çınar Endüstriyel Mutfak Servisi olarak, İstanbul'da 15 yıldır profesyonel mutfak ekipmanlarına teknik destek sağlıyoruz. İstanbul'un tüm Avrupa ve Anadolu ilçelerinde 7/24 acil servis hizmeti veriyoruz.",
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
        id: "endustriyel-bulasik-makinesi-tamiri",
        level: 2,
        heading: "Endüstriyel Bulaşık Makinesi Tamiri",
        paragraphs: [
          "\"Bulaşık makinesi su almıyor\" şikayetiyle sık karşılaşıyoruz. Genelde su giriş vanası tıkalı veya şebeke basıncı düşük. Bir kafede makine çalışıyor ama suyu ısıtmıyordu. Rezistans sağlamdı, ama termostat yanlış okuma yapıyordu. Değiştirdik, sorun çözüldü.",
          "Bulaşık makinesinde su basıncı, tıkanıklık ve pompa kaynaklı sorunlarla sık karşılaşıyoruz. Isıtma problemi olduğunda rezistans, termostat ve kontrol kartı kontrol ediliyor.",
          "Yıkama performansı düştüğünde ilk kontrol ettiğimiz noktalar püskürtme kolları, filtreler ve deterjan dozaj sistemi. Filtrelerde biriken kalıntılar, makinenin yıkama performansını kısa sürede etkileyebiliyor. Kontrol paneli, sensör veya programlama kaynaklı elektronik arızalarda cihazın hata kodları ve çalışma değerleri kontrol edilerek arızanın kaynağı belirleniyor.",
          "Makinenin altından su gelmesi durumunda kapı contaları, hortum bağlantıları ve tahliye hattı kontrol ediliyor. Kaçağın kaynağı belirlendikten sonra gerekli müdahale yapılıyor. Endüstriyel bulaşık makinesi tamircisi olarak, bu tür sorunlara hızlı ve kalıcı çözümler sunuyoruz.",
        ],
      },
      {
        id: "sanayi-tipi-bulasik-makinesi-servisi",
        level: 2,
        heading: "Sanayi Tipi Bulaşık Makinesi Servisi",
        paragraphs: [
          "Sanayi tipi bulaşık makineleri, profesyonel mutfakların en çok kullanılan ekipmanları arasındadır. Günde yüzlerce tabağın yıkanması, dezenfekte edilmesi ve hijyen standartlarının sağlanması, bu cihazların kesintisiz çalışmasına bağlıdır.",
          "Fagor bulaşık makinesi servisleri kapsamında, Fagor marka sanayi tipi bulaşık makinelerine teknik destek sağlıyoruz. Empero bulaşık makinesi servisi için de aynı şekilde, Empero marka cihazlarda arıza tespiti, bakım ve onarım çalışmalarını gerçekleştiriyoruz.",
          "Selidos bulaşık makinesi servis taleplerinde, Selidos marka profesyonel bulaşık makinelerinde yaşanan sorunlara çözüm üretiyoruz. Portabianco bulaşık makinesi servisi için de Portabianco marka cihazlarda arıza tespiti ve onarım hizmeti veriyoruz.",
          "Her marka için orijinal yedek parça kullanarak, cihazınızın uzun ömürlü olmasını ve garanti koşullarının korunmasını sağlıyoruz.",
        ],
      },
      {
        id: "marka-bazli-servis-hizmetlerimiz",
        level: 2,
        heading: "Marka Bazlı Servis Hizmetlerimiz",
        paragraphs: [
          "Endüstriyel mutfak sektörünün önde gelen markalarına profesyonel servis hizmeti sunuyoruz. Her marka için özel teknik bilgi ve orijinal yedek parça ile çalışıyoruz.",
        ],
      },
      {
        id: "empero-bulasik-makinesi-servisi",
        level: 3,
        heading: "Empero Bulaşık Makinesi Servisi",
        paragraphs: [
          "Empero marka endüstriyel bulaşık makinelerinde arıza tespiti, bakım ve onarım hizmetleri sunuyoruz. Pompa, ısıtıcı, elektronik kart ve su sistemleri arızalarında hızlı çözüm sağlıyoruz. Orijinal yedek parça ile cihazınızın uzun ömürlü olmasını garanti ediyoruz.",
        ],
      },
      {
        id: "inoksan-bulasik-makinesi-servisi",
        level: 3,
        heading: "İnoksan Bulaşık Makinesi Servisi",
        paragraphs: [
          "İnoksan marka cihazlarda teknik destek, periyodik bakım ve acil onarım işlemleri gerçekleştiriyoruz. Su almama, ısıtmama ve yıkama performansı düşüklüğü gibi sorunlara kalıcı çözümler üretiyoruz. Yetkili servis standartlarında hizmet veriyoruz.",
        ],
      },
      {
        id: "oztiryakiler-bulasik-makinesi-servisi",
        level: 3,
        heading: "Öztiryakiler Bulaşık Makinesi Servisi",
        paragraphs: [
          "Öztiryakiler marka bulaşık makinelerine özel servis hizmeti veriyor, cihazlarınızın uzun ömürlü olmasını garanti altına alıyoruz. Elektronik kart, termostat ve pompa arızalarında profesyonel müdahale sağlıyoruz.",
        ],
      },
      {
        id: "kayalar-bulasik-makinesi-servisi",
        level: 3,
        heading: "Kayalar Bulaşık Makinesi Servisi",
        paragraphs: [
          "Kayalar marka endüstriyel bulaşık makinelerinde arıza giderme ve bakım hizmetleri sunuyoruz. Su kaçakları, filtre temizliği ve deterjan dozaj sistemi ayarları konusunda teknik destek veriyoruz.",
        ],
      },
      {
        id: "maksan-bulasik-makinesi-servisi",
        level: 3,
        heading: "Maksan Bulaşık Makinesi Servisi",
        paragraphs: [
          "Maksan marka cihazlarda hızlı ve güvenilir teknik servis desteği sağlıyoruz. Arıza tespiti, yedek parça değişimi ve periyodik bakım hizmetleri ile işletmenizin operasyonel aksamalarını önlüyoruz.",
        ],
      },
      {
        id: "portabianco-bulasik-makinesi-servisi",
        level: 3,
        heading: "Portabianco Bulaşık Makinesi Servisi",
        paragraphs: [
          "Portabianco marka profesyonel bulaşık makinelerinde arıza tespiti ve onarım hizmeti veriyoruz. Yıkama performansı optimizasyonu ve sıcaklık kontrolü konularında uzmanlaşmış ekibimizle hizmetinizdeyiz.",
        ],
      },
      {
        id: "electrolux-bulasik-makinesi-servisi",
        level: 3,
        heading: "Electrolux Bulaşık Makinesi Servisi",
        paragraphs: [
          "Electrolux marka endüstriyel bulaşık makinelerine yetkili servis standartlarında teknik destek sağlıyoruz. Elektronik kontrol sistemleri, ısıtıcı elemanlar ve su sirkülasyon sistemleri konusunda profesyonel çözümler sunuyoruz.",
        ],
      },
      {
        id: "ndustrio-bulasik-makinesi-servisi",
        level: 3,
        heading: "Ndustrio Bulaşık Makinesi Servisi",
        paragraphs: [
          "Ndustrio marka cihazlarda arıza tespiti, bakım ve onarım çalışmalarını profesyonel ekibimizle gerçekleştiriyoruz. Hızlı müdahale ve şeffaf fiyatlandırma ile müşteri memnuniyetini önceliyoruz.",
        ],
      },
      {
        id: "hizmet-verdigimiz-cihaz-turleri",
        level: 2,
        heading: "Hizmet Verdiğimiz Cihaz Türleri",
        paragraphs: [
          "Endüstriyel mutfaklarda kullanılan farklı kapasite ve tipteki bulaşık makinelerine servis hizmeti sunuyoruz. Her cihaz tipi için özel teknik bilgi ve ekipmanla müdahale ediyoruz.",
        ],
      },
      {
        id: "kapasite-bazli-cihazlar",
        level: 3,
        heading: "Kapasite Bazlı Cihazlar",
        paragraphs: [
          "<strong>500 Tabak Kapasiteli Bulaşık Makineleri</strong> Küçük ve orta ölçekli işletmeler için ideal olan bu cihazlarda pompa, ısıtıcı ve elektronik sistem arızalarına hızlı çözüm üretiyoruz.",
          "<strong>1000 Tabak Kapasiteli Bulaşık Makineleri</strong> Restoran ve kafelerde yaygın kullanılan bu makinelerde periyodik bakım ve acil onarım hizmetleri sunuyoruz.",
          "<strong>2000 Tabak Kapasiteli Bulaşık Makineleri</strong> Büyük ölçekli catering firmaları ve oteller için yüksek kapasiteli bu cihazlarda kompresör, konveyör sistemi ve kontrol paneli servisleri veriyoruz.",
        ],
      },
      {
        id: "cihaz-tipi-bazli-hizmetler",
        level: 3,
        heading: "Cihaz Tipi Bazlı Hizmetler",
        paragraphs: [
          "<strong>Giyotin Tip Bulaşık Makineleri</strong> Hızlı yıkama döngüsü sunan giyotin tip makinelerde kapak mekanizması, su basıncı ve sıcaklık kontrolü konularında teknik destek sağlıyoruz.",
          "<strong>Tünel Tip Bulaşık Makineleri</strong> Sürekli çalışma prensibiyle çalışan tünel tip makinelerde konveyör sistemi, motor ve otomatik dozaj sistemleri servisleri sunuyoruz.",
          "<strong>Bardak Yıkama Makineleri</strong> Bar ve kafelerde kullanılan bardak yıkama makinelerinde özel sepet sistemleri, düşük su tüketimi ve hızlı kurutma teknolojileri için bakım hizmeti veriyoruz.",
          "<strong>Tezgah Altı Bulaşık Makineleri</strong> Kompakt tasarımıyla mutfaklarda yer tasarrufu sağlayan tezgah altı modellerde filtre temizliği, pompa ve elektronik kart servisleri gerçekleştiriyoruz.",
          "<strong>Tabak Yıkama Makineleri</strong> Özel tabak sepetleri ve yüksek basınçlı yıkama sistemleri ile çalışan bu cihazlarda püskürtme kolları, filtre sistemleri ve ısıtıcı eleman bakımını yapıyoruz.",
          "Her cihaz tipi için özel teknik bilgi ve ekipmanla müdahale ediyor, işletmenizin ihtiyacına göre en uygun çözümü üretiyoruz.",
        ],
      },
      {
        id: "sik-karsilasilan-sorunlar",
        level: 2,
        heading: "Sık Karşılaşılan Sorunlar",
        paragraphs: [
          "Endüstriyel bulaşık makinelerinde en sık karşılaşılan sorunlar şunlar:",
          "Su almama: Su giriş vanası tıkalı, şebeke basıncı düşük veya pompa arızalı",
          "Su ısıtmama: Rezistans, termostat veya kontrol kartı sorunu",
          "Yıkama performansı düşüklüğü: Püskürtme kolları tıkalı, filtreler kirli veya deterjan dozaj sistemi arızalı",
          "Su kaçağı: Kapı contaları yıpranmış, hortum bağlantıları gevşek veya tahliye hattı tıkalı",
          "Elektronik arızalar: Kontrol paneli, sensör veya programlama hataları",
          "Bu sorunların çoğu, düzenli bakım ile önlenebilir. Endüstriyel bulaşık makinesi tamiri için profesyonel destek almanız, cihazınızın ömrünü uzatır.",
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
        id: "endustriyel-bulasik-makinesi-servisi-icin-cinar-endustriyel-mutfak-servisi",
        level: 2,
        heading: "Endüstriyel Bulaşık Makinesi Servisi İçin Çınar Endüstriyel Mutfak Servisi",
        paragraphs: [
          "Çınar Endüstriyel Mutfak Servisi olarak İstanbul'un Avrupa ve Anadolu Yakası'ndaki tüm ilçelerinde profesyonel mutfak ekipmanları için servis hizmeti veriyoruz. Bulaşık makineleri, fırınlar, ocaklar ve buzdolaplarında arıza tespiti, bakım ve onarım çalışmalarını gerçekleştiriyoruz.",
          "Servis talebiniz sırasında cihazın modelini ve yaşanan sorunu paylaşmanız yeterli. Cihazın verdiği hata, çıkardığı ses, sıcaklık problemi veya su kaçağı gibi belirtileri önceden belirtmeniz, arızanın değerlendirilmesini kolaylaştırır.",
          "Endüstriyel bulaşık makinesi servisi için Çınar Endüstriyel Mutfak Servisi ile iletişime geçebilirsiniz.",
        ],
      },
    ],
    faqHeading: "Sık Sorulan Sorular",
    faq: [
      {
        question: "\"Cihaz gece arızalandı, servis gerekiyor.\" Endüstriyel bulaşık makinesi servisi için nasıl iletişim kurabilirim?",
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
};

export function getServiceContent(key: string): RichContent | undefined {
  return serviceContent[key];
}
