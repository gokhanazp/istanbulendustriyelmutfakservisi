"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/faq";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden hover:border-orange-300 transition-colors">
      <button
        onClick={onToggle}
        className="w-full px-6 md:px-8 py-4 md:py-5 text-left bg-white hover:bg-slate-50 transition-colors flex items-center justify-between"
      >
        <span className="text-base md:text-lg font-semibold text-slate-900">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 md:px-8 py-4 md:py-5 bg-slate-50 border-t border-slate-200">
          <p className="text-slate-700 text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Show first 8 FAQs
  const displayFAQs = faqData.slice(0, 8);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Endüstriyel mutfak servisi hakkında sıkça sorulan sorulara
            profesyonel cevaplar
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 md:space-y-5">
          {displayFAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* View All FAQs */}
        <div className="text-center mt-12">
          <a
            href="/sss"
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Tüm Soruları Gör
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
