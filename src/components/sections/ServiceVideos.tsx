import { Video as VideoIcon } from "lucide-react";
import { ServiceVideo } from "@/types";

interface ServiceVideosProps {
  videos: ServiceVideo[];
  /** Bölüm başlığının altındaki açıklama metni */
  description?: string;
}

/**
 * Hizmet sayfalarında saha videolarını gösteren bölüm. Videolar dikey
 * (telefonla çekilmiş) formatta olduğu için kart genişliği sınırlı tutulur.
 * preload="none" ile sayfa yüklenirken video verisi indirilmez, yalnızca
 * poster görseli gösterilir.
 */
export function ServiceVideos({ videos, description }: ServiceVideosProps) {
  if (videos.length === 0) return null;

  return (
    <section className="py-14 md:py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 text-sm font-semibold text-orange-700 mb-4">
            <VideoIcon className="w-4 h-4" />
            Saha Görüntüleri
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Çalışma Videolarımız
          </h2>
          {description && (
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {videos.map((video) => (
            <figure
              key={video.src}
              className="group w-full max-w-[260px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300"
            >
              <div className="overflow-hidden bg-slate-900">
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  preload="none"
                  playsInline
                  width={video.width}
                  height={video.height}
                  className="w-full h-auto object-cover"
                  aria-label={video.title}
                >
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
              </div>
              <figcaption className="px-4 py-3 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  {video.title}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {video.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
