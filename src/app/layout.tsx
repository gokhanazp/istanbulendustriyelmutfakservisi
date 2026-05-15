import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import {
  ORGANIZATION_SCHEMA,
  SITE_LANG,
  SITE_LOCALE,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 7/24 Teknik Destek`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "İstanbul genelinde endüstriyel mutfak ekipmanları servis ve onarım hizmetleri. Aynı gün müdahale, orijinal yedek parçalar, 7/24 acil destek.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "endüstriyel mutfak servisi",
    "İstanbul endüstriyel mutfak servisi",
    "mutfak ekipmanları servisi",
    "endüstriyel ocak servisi",
    "endüstriyel fırın servisi",
    "endüstriyel buzdolabı servisi",
    "soğuk oda servisi",
    "gaz kaçağı tespiti",
    "7/24 acil servis",
    "aynı gün müdahale",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "İstanbul genelinde endüstriyel mutfak ekipmanları servis ve onarım hizmetleri. Aynı gün müdahale, orijinal yedek parçalar, 7/24 acil destek.",
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "İstanbul endüstriyel mutfak servisi. Aynı gün müdahale, 7/24 acil destek, 6 ay garantili.",
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "emNS2QGgf2yupvBGHNFprOp5q1-o6yezfqPkPT7aDAc",
  },
  category: "business",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={SITE_LANG}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S1J3ST948Z" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S1J3ST948Z');

              document.addEventListener('click', function(e) {
                var link = e.target.closest('a');
                if (!link) return;
                var href = link.getAttribute('href') || '';
                if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1) {
                  gtag('event', 'whatsapp_click', {
                    event_category: 'iletisim',
                    event_label: document.title,
                    page_path: window.location.pathname
                  });
                } else if (href.indexOf('tel:') === 0) {
                  gtag('event', 'telefon_click', {
                    event_category: 'iletisim',
                    event_label: document.title,
                    page_path: window.location.pathname
                  });
                }
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              inLanguage: "tr-TR",
              publisher: { "@id": `${SITE_URL}/#organization` },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${SITE_URL}/?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}
