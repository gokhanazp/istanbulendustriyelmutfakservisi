export function turkishSlug(text: string): string {
  if (!text) return "";

  const turkishMap: Record<string, string> = {
    İ: "i",
    ı: "i",
    ö: "o",
    ü: "u",
    ş: "s",
    ç: "c",
    ğ: "g",
    Ö: "o",
    Ü: "u",
    Ş: "s",
    Ç: "c",
    Ğ: "g",
  };

  let slug = text.toLowerCase();

  // Replace Turkish characters
  for (const [turkish, latin] of Object.entries(turkishMap)) {
    slug = slug.replace(new RegExp(turkish, "g"), latin);
  }

  // Replace spaces and special characters with hyphens
  slug = slug
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug;
}

export function formatPhoneNumber(phone: string): string {
  if (!phone) return "";

  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // Format Turkish phone numbers
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11) {
    return `+90 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }

  return phone;
}

export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
