import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Calendar, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Endüstriyel Mutfak Bakım ve Tamir Rehberi | İstanbul",
  description:
    "Endüstriyel mutfak ekipmanları hakkında uzman bilgileri, bakım rehberleri, arıza çözümleri ve tamir ipuçları. Buzdolabı tamiri, ocak bakımı, soğuk oda servisi ve daha fazlası.",
  keywords: [
    "endüstriyel mutfak blog",
    "buzdolabı tamiri rehberi",
    "endüstriyel ocak bakımı",
    "soğuk oda bakım",
    "mutfak ekipmanı bakımı",
    "İstanbul mutfak servisi",
  ],
  alternates: {
    canonical: "https://istanbulendustriyelmutfakservisi.com/blog",
  },
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full" />
              Blog & Rehberler
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Endüstriyel Mutfak{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Bakım Rehberi
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Endüstriyel mutfak ekipmanlarınızın bakımı, arıza çözümleri ve
              profesyonel ipuçları. Uzman ekibimizin bilgi birikimini sizinle
              paylaşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.publishDate)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Profesyonel Destek mi Gerekiyor?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Endüstriyel mutfak ekipmanlarınız için 7/24 acil servis ve periyodik
            bakım hizmeti veriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+905013001981"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-orange-700 font-bold rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
            >
              Hemen Ara: 0501 300 19 81
            </a>
            <a
              href="https://wa.me/905013001981"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg"
            >
              WhatsApp ile Ulaşın
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
