import Image from "next/image";
import { Camera } from "lucide-react";
import { GalleryImage } from "@/types";

interface ServiceGalleryProps {
  images: GalleryImage[];
  /** Bölüm başlığının altındaki açıklama metni */
  description?: string;
}

/**
 * Hizmet sayfalarında saha fotoğraflarını gösteren galeri bölümü.
 * Görseller next.config.ts'te unoptimized olduğu için statik export ile
 * doğrudan /public altından servis edilir.
 */
export function ServiceGallery({ images, description }: ServiceGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 text-sm font-semibold text-orange-700 mb-4">
            <Camera className="w-4 h-4" />
            Referanslarımız
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Çalışmalarımızdan Görüntüler
          </h2>
          {description && (
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div
          className={`grid gap-6 ${
            images.length === 1
              ? "max-w-4xl mx-auto"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {images.map((image) => (
            <figure
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300"
            >
              <div className="overflow-hidden bg-slate-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1024px) 56rem, 100vw"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
