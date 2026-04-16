"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { brands } from "@/data/brands";

interface ContactFormData {
  name: string;
  phone: string;
  businessName: string;
  serviceId: string;
  brandId: string;
  deviceType: string;
  message: string;
  kvkkConsent: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    businessName: "",
    serviceId: "",
    brandId: "",
    deviceType: "",
    message: "",
    kvkkConsent: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.kvkkConsent) {
      alert(
        "Lütfen KVKK açık rızasını kabul etiniz ve tekrar deneyin."
      );
      return;
    }

    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          businessName: "",
          serviceId: "",
          brandId: "",
          deviceType: "",
          message: "",
          kvkkConsent: false,
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-300 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">
          Talebiniz Alındı!
        </h3>
        <p className="text-green-800">
          En kısa sürede sizinle iletişime geçilecektir. Teşekkürler!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ad Soyad */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Ad Soyad <span className="text-orange-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            placeholder="Adınız Soyadınız"
          />
        </div>

        {/* Telefon */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Telefon <span className="text-orange-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            placeholder="0532 XXX XX XX"
          />
        </div>
      </div>

      {/* İşletme Adı */}
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">
          İşletme Adı
        </label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          placeholder="Lokantanız veya işletmenizin adı"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hizmet Talebi */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Hizmet Talebi <span className="text-orange-600">*</span>
          </label>
          <select
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          >
            <option value="">Hizmet seçiniz</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* Marka */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Marka
          </label>
          <select
            name="brandId"
            value={formData.brandId}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          >
            <option value="">Marka seçiniz (isteğe bağlı)</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Cihaz Türü */}
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">
          Cihaz Türü
        </label>
        <input
          type="text"
          name="deviceType"
          value={formData.deviceType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          placeholder="Örn: Endüstriyel Ocak, 6 Gözlü"
        />
      </div>

      {/* Mesaj */}
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">
          Mesaj / Detaylı Açıklama
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
          placeholder="Arızanızın detaylarını yazınız. Bu bilgiler bize hızlı çözüm sunmamıza yardımcı olacaktır."
        ></textarea>
      </div>

      {/* KVKK Consent */}
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="kvkkConsent"
            checked={formData.kvkkConsent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-orange-600 rounded focus:ring-orange-500 cursor-pointer"
          />
          <span className="text-sm text-slate-700">
            Kişisel verilerim işlenmesine ve İstanbul Endüstriyel Mutfak
            Servisi tarafından iletişim kurulmasına açıkça rıza göstermektedir.
            <a href="/gizlilik" className="text-orange-600 hover:text-orange-700">
              {" "}
              KVKK politikasını
            </a>{" "}
            okudum.
            <span className="text-orange-600">*</span>
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-slate-400 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg disabled:cursor-not-allowed"
      >
        {isLoading ? "Gönderiliyor..." : "Servis Talep Formu Gönder"}
      </button>

      <p className="text-xs text-slate-600 text-center">
        Talebiniz alındıktan sonra en geç 2 saat içinde size dönüş yapılacaktır.
      </p>
    </form>
  );
}
