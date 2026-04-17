import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { faqData } from "@/data/faq";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | İstanbul Endüstriyel Mutfak Servisi",
  description:
    "Endüstriyel mutfak servisi hakkında sık sorulan sorulara profesyonel cevaplar. Acil servis, garantiler, markalar, bakım kontratları ve daha fazlası.",
  keywords: [
    "sık sorulan sorular",
    "SSS",
    "endüstriyel mutfak",
    "servis hakkında",
    "garantiler",
    "acil servis",
  ],
  openGraph: {
    title: "Sık Sorulan Sorular | İstanbul Endüstriyel Mutfak Servisi",
    description:
      "Endüstriyel mutfak servisi hakkında sık sorulan sorulara cevaplar",
    url: "https://www.example.com/sss",
    siteName: "İstanbul Endüstriyel Mutfak Servisi",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.example.com/sss",
  },
};

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  return (
    <div
      className="border border-slate-200 rounded-lg overflow-hidden hover:border-orange-300 transition-colors"
      itemScope
      itemType="https://schema.org/Question"
    >
      <details className="group">
        <summary className="flex cursor-pointer items-center justify-between px-6 md:px-8 py-4 md:py-5 bg-white hover:bg-slate-50 transition-colors">
          <span className="text-base md:text-lg font-semibold text-slate-900" itemProp="name">
            {question}
          </span>
          <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
        </summary>

        <div className="px-6 md:px-8 py-4 md:py-5 bg-slate-50 border-t border-slate-200">
          <p className="text-slate-700 text-base leading-relaxed" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span itemProp="text">{answer}</span>
          </p>
        </div>
      </details>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Sık Sorulan Sorular" },
            ]}
          />
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sık Sorulan Sorular
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Endüstriyel mutfak servisi hakkında sıkça sorulan sorulara
            profesyonel cevaplar
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-5">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Sorunuz Cevapsız Kaldı mı?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Telefon
              </h3>
              <p className="text-slate-600 mb-4">
                Doğrudan ekibimiz ile iletişime geçebilirsiniz
              </p>
              <a
                href="tel:+905013001981"
                className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
              >
                Ara: 0501 300 19 81
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                WhatsApp
              </h3>
              <p className="text-slate-600 mb-4">
                7/24 hızlı yanıt için WhatsApp tercih edin
              </p>
              <a
                href="https://wa.me/905013001981?text=Merhaba%2C%20endüstriyel%20mutfak%20ekipmanlarım%20için%20servis%20hizmeti%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
              >
                WhatsApp: 0501 300 19 81
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">E-Posta</h3>
              <p className="text-slate-600 mb-4">
                Detaylı sorularınız için e-posta gönderin
              </p>
              <a
                href="mailto:info@istanbulendustriyelmutfakservisi.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-lg transition-colors"
              >
                E-Posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Endüstriyel Mutfak Ekipmanlarınız İçin Profesyonel Destek"
        description="Sorularınız varsa, bizimle iletişime geçin. 24/7 acil destek hizmetleriyle yanınızdayız."
      />

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
