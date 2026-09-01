export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  services: string[];
  logo?: string;
  logoDark?: boolean;
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

export interface ServiceContentSection {
  /** Sayfa içi bağlantı için başlık anchor'ı */
  id: string;
  /** 2 = ana başlık, 3 = alt başlık */
  level: 2 | 3;
  heading: string;
  /** Satır içi <strong> ve <a> etiketleri içerebilen paragraflar */
  paragraphs: string[];
}

export interface ServiceContent {
  sections: ServiceContentSection[];
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
