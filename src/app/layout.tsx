import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://istanbulendustriyelmutfakservisi.com"),
  title: "İstanbul Endüstriyel Mutfak Servisi | 7/24 Teknik Destek",
  description:
    "İstanbul genelinde endüstriyel mutfak ekipmanları servis ve onarım hizmetleri. Aynı gün müdahale, orijinal yedek parçalar, 7/24 acil destek.",
  keywords: [
    "endüstriyel mutfak servis",
    "İstanbul",
    "mutfak ekipmanları",
    "onarım",
    "7/24 servis",
    "acil müdahale",
  ],
  alternates: {
    canonical: "https://istanbulendustriyelmutfakservisi.com",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://istanbulendustriyelmutfakservisi.com",
    title: "İstanbul Endüstriyel Mutfak Servisi",
    description:
      "İstanbul genelinde endüstriyel mutfak ekipmanları servis ve onarım hizmetleri. Aynı gün müdahale, orijinal yedek parçalar, 7/24 acil destek.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "İstanbul Endüstriyel Mutfak Servisi",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="emNS2QGgf2yupvBGHNFprOp5q1-o6yezfqPkPT7aDAc" />
        <link rel="icon" href="/favicon.ico" />
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
