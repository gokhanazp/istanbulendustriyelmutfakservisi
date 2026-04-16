import Link from "next/link";
import { Phone } from "lucide-react";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export function CTABanner({
  title = "Endüstriyel Mutfak Ekipmanlarınız İçin Profesyonel Servis",
  description = "7/24 acil müdahale hizmetiyle hava sorununuzu çözmek için hazırız. Aynı gün servis ve orijinal yedek parçalar ile en yüksek kalite garantisini sunarız.",
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">{description}</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:02121234567"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors shadow-lg w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Hemen Ara: 0212 XXX XX XX
          </a>

          <a
            href="https://wa.me/905321234567?text=Merhaba%2C%20endüstriyel%20mutfak%20ekipmanlarım%20için%20servis%20hizmeti%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.393-1.476-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.962 1.484c-1.53.857-2.854 2.035-3.809 3.424-.955 1.389-1.464 2.961-1.489 4.614-.024 1.652.424 3.269 1.313 4.67l-.738 2.701 2.758-.911c1.329.743 2.848 1.135 4.443 1.158h.004c2.657 0 5.159-1.064 7.041-2.993 1.881-1.929 2.93-4.541 2.93-7.291 0-1.952-.471-3.83-1.363-5.464-.893-1.635-2.173-3.038-3.768-4.107-1.595-.97-3.393-1.504-5.287-1.528zm9.773 5.441c-.894 1.728-2.216 3.236-3.885 4.33-1.669 1.093-3.631 1.775-5.703 1.799-1.624.017-3.212-.383-4.61-1.165l-2.04.673.748-2.738c-.961-1.348-1.492-2.953-1.468-4.608.023-1.655.51-3.227 1.413-4.596.902-1.369 2.186-2.559 3.757-3.37 1.57-.81 3.343-1.246 5.19-1.246 1.899 0 3.744.436 5.313 1.265 1.568.83 2.928 2.02 3.836 3.388.908 1.368 1.399 2.944 1.376 4.599-.024 1.655-.518 3.227-1.433 4.596z" />
            </svg>
            WhatsApp: 0532 XXX XX XX
          </a>
        </div>
      </div>
    </section>
  );
}
