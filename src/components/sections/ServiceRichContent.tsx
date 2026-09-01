import { ServiceContentSection } from "@/types";

interface ServiceRichContentProps {
  sections: ServiceContentSection[];
}

/**
 * Hizmet sayfalarının uzun form içeriğini render eder.
 * Paragraflar satır içi <strong> ve <a> etiketleri içerebildiği için
 * repo içinde yazılmış statik metinler dangerouslySetInnerHTML ile basılır.
 */
export function ServiceRichContent({ sections }: ServiceRichContentProps) {
  return (
    <article className="max-w-none">
      {sections.map((section) => (
        <section key={section.id} className="mb-8 last:mb-0 scroll-mt-24">
          {section.level === 2 ? (
            <h2
              id={section.id}
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 mt-10 first:mt-0"
            >
              {section.heading}
            </h2>
          ) : (
            <h3
              id={section.id}
              className="text-lg md:text-xl font-bold text-slate-900 mb-3 mt-8"
            >
              {section.heading}
            </h3>
          )}
          {section.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg text-slate-700 leading-relaxed mb-4 last:mb-0 [&_a]:text-orange-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-orange-700"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </section>
      ))}
    </article>
  );
}
