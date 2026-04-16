"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "905321234567";
  const message = encodeURIComponent(
    "Merhaba, endüstriyel mutfak ekipmanlarım için servis hizmeti almak istiyorum."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="WhatsApp'ta iletişime geç"
    >
      <MessageCircle className="w-7 h-7" />
    </Link>
  );
}
