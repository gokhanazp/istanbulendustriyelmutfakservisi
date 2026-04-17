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
