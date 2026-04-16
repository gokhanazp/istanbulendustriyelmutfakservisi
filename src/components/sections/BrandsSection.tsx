import Link from "next/link";
import { brands } from "@/data/brands";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function BrandsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold tracking-wider">
              24 MARKA SERVİSİ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Servis Verdiğimiz Markalar
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dünya ve Türkiye&apos;nin en tanınmış endüstriyel mutfak ekipmanları
            markalarının servisini profesyonelce yapıyoruz
          </p>
        </div>

        {/* Brands Grid - larger cards with prominent logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 mb-12">
          {brands.map((brand, index) => (
            <Link
              key={brand.id}
              href={`/markalar/${brand.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 p-4 md:p-5 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Logo - bigger container */}
              <div className="w-full aspect-square max-w-[100px] flex items-center justify-center mb-3">
                {brand.logo ? (
                  <div
                    className={`w-full h-full rounded-xl flex items-center justify-center p-3 ${
                      brand.logoDark
                        ? "bg-slate-800"
                        : "bg-slate-50 border border-slate-100"
                    }`}
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <BrandLogo name={brand.name} index={index} size={80} />
                )}
              </div>

              {/* Brand Name */}
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                {brand.name}
              </h3>

              {/* Service count */}
              <span className="text-[11px] text-slate-400 mt-1">
                {brand.services.length} hizmet
              </span>
            </Link>
          ))}
        </div>

        {/* All brands link */}
        <div className="text-center">
          <Link
            href="/markalar"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Tüm Markaları İncele
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
