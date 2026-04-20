import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";
import { Calendar, Tag, ArrowLeft, Phone, MessageCircle } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const title =
    post.seoTitle || `${post.title} | İstanbul Endüstriyel Mutfak Servisi`;
  const description = post.seoDescription || post.excerpt;
  const keywords = post.seoKeywords || post.tags;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://istanbulendustriyelmutfakservisi.com/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      locale: "tr_TR",
      url: `https://istanbulendustriyelmutfakservisi.com/blog/${post.slug}`,
      publishedTime: post.publishDate,
    },
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: { type: string; content: string; level?: number }[] = [];

  for (const line of lines) {
    if (line.startsWith("### ")) {
      elements.push({ type: "h3", content: line.slice(4) });
    } else if (line.startsWith("## ")) {
      elements.push({ type: "h2", content: line.slice(3) });
    } else if (line.startsWith("#### ")) {
      elements.push({ type: "h4", content: line.slice(5) });
    } else if (line.startsWith("- **") || line.startsWith("- ")) {
      elements.push({ type: "li", content: line.slice(2) });
    } else if (/^\d+\.\s/.test(line)) {
      elements.push({ type: "oli", content: line.replace(/^\d+\.\s/, "") });
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push({ type: "bold", content: line.slice(2, -2) });
    } else if (line.trim() === "") {
      elements.push({ type: "break", content: "" });
    } else {
      elements.push({ type: "p", content: line });
    }
  }

  return elements.map((el, i) => {
    const renderInline = (text: string) => {
      const parts = text.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={j} className="font-semibold text-slate-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={j}>{part}</span>;
      });
    };

    switch (el.type) {
      case "h2":
        return (
          <h2
            key={i}
            className="text-2xl font-bold text-slate-900 mt-10 mb-4"
          >
            {renderInline(el.content)}
          </h2>
        );
      case "h3":
        return (
          <h3
            key={i}
            className="text-xl font-bold text-slate-800 mt-8 mb-3"
          >
            {renderInline(el.content)}
          </h3>
        );
      case "h4":
        return (
          <h4
            key={i}
            className="text-lg font-semibold text-slate-700 mt-6 mb-2"
          >
            {renderInline(el.content)}
          </h4>
        );
      case "li":
        return (
          <li
            key={i}
            className="ml-6 text-slate-600 leading-relaxed list-disc"
          >
            {renderInline(el.content)}
          </li>
        );
      case "oli":
        return (
          <li
            key={i}
            className="ml-6 text-slate-600 leading-relaxed list-decimal"
          >
            {renderInline(el.content)}
          </li>
        );
      case "bold":
        return (
          <p key={i} className="font-semibold text-slate-800 mt-4 mb-2">
            {el.content}
          </p>
        );
      case "break":
        return <div key={i} className="h-2" />;
      default:
        return (
          <p key={i} className="text-slate-600 leading-relaxed mb-3">
            {renderInline(el.content)}
          </p>
        );
    }
  });
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const relatedService = post.relatedService
    ? services.find((s) => s.slug === post.relatedService)
    : null;

  const otherPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Blog&apos;a Dön
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.publishDate)}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="prose-custom">{renderMarkdown(post.content)}</div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-500 mb-3">
                  Etiketler:
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                <h3 className="font-bold text-slate-900 mb-2">
                  Profesyonel Destek Gerekli mi?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  7/24 acil servis hizmetimizle aynı gün müdahale garantisi
                  sunuyoruz.
                </p>
                <div className="space-y-2.5">
                  <a
                    href="tel:+905013001981"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-sm font-bold rounded-xl shadow-md hover:from-orange-700 hover:to-orange-800 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905013001981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-green-500 text-white text-sm font-bold rounded-xl shadow-md hover:bg-green-600 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Related Service */}
              {relatedService && (
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">
                    İlgili Hizmet
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {relatedService.shortDescription}
                  </p>
                  <Link
                    href={`/hizmetler/${relatedService.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    {relatedService.name} →
                  </Link>
                </div>
              )}

              {/* Other Posts */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">
                  Diğer Yazılar
                </h3>
                <div className="space-y-3">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/blog/${p.slug}`}
                      className="block text-sm text-slate-600 hover:text-orange-600 transition-colors leading-snug"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            7/24 Acil Servis Hizmeti
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            İstanbul genelinde endüstriyel mutfak ekipmanları için aynı gün
            müdahale garantisi sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+905013001981"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              0501 300 19 81
            </a>
            <a
              href="https://wa.me/905013001981"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile Ulaşın
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
