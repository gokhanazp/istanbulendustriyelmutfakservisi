export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  services: string[];
  logo?: string;
  logoDark?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  category: "pisirme" | "sogutma" | "yikama" | "gaz" | "diger";
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

export interface RichContentSection {
  /** Sayfa içi bağlantı için başlık anchor'ı */
  id: string;
  /** 2 = ana başlık, 3 = alt başlık */
  level: 2 | 3;
  /** Boş bırakılırsa başlık render edilmez, yalnızca paragraflar basılır */
  heading: string;
  /** Dolu ise başlık bu sayfaya link olur (site içi yol) */
  href?: string;
  /** Satır içi <strong> ve <a> etiketleri içerebilen paragraflar */
  paragraphs: string[];
}

export interface RichContent {
  sections: RichContentSection[];
  faqHeading: string;
  faq: FAQ[];
}

export interface Region {
  name: string;
  slug: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  relatedService?: string;
  publishDate: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

export interface GalleryImage {
  /** /public altındaki dosya yolu */
  src: string;
  /** Görsel SEO'su için açıklayıcı alt metni */
  alt: string;
  /** Görselin altında görünen kısa açıklama */
  caption: string;
  width: number;
  height: number;
}
