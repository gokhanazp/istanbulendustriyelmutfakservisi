import Link from "next/link";
import { RichContentSection } from "@/types";

interface RichContentProps {
  sections: RichContentSection[];
}

const HEADING_CLASS = {
  2: "text-2xl md:text-3xl font-bold text-slate-900 mb-4 mt-10 first:mt-0",
  3: "text-lg md:text-xl font-bold text-slate-900 mb-3 mt-8",
} as const;

/**
 * Hizmet, marka ve marka-ekipman sayfalarının uzun form içeriğini render eder.
 * Paragraflar satır içi <strong> ve <a> etiketleri içerebildiği için
 * repo içinde yazılmış statik metinler dangerouslySetInnerHTML ile basılır.
 */
export function RichContent({ sections }: RichContentProps) {
  return (
    <article className="max-w-none">
      {sections.map((section, sectionIndex) => {
        const Heading = section.level === 2 ? "h2" : "h3";
        return (
          <section
            key={section.id || `section-${sectionIndex}`}
            className="mb-8 last:mb-0 scroll-mt-24"
          >
            {section.heading && (
              <Heading id={section.id} className={HEADING_CLASS[section.level]}>
                {section.href ? (
                  <Link
                    href={section.href}
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    {section.heading}
                  </Link>
                ) : (
                  section.heading
                )}
              </Heading>
            )}
            {section.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-slate-700 leading-relaxed mb-4 last:mb-0 [&_a]:text-orange-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-orange-700"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </section>
        );
      })}
    </article>
  );
}
