"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export function CallButton() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-3 flex gap-3">
        <a
          href="tel:02121234567"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm">Ara</span>
        </a>
        <a
          href="https://wa.me/905321234567?text=Merhaba%2C%20endüstriyel%20mutfak%20ekipmanlarım%20için%20servis%20hizmeti%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
