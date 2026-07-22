import type { Metadata } from "next";
import { ilceBuzdolabiListesi, getIlceBuzdolabiBySlug } from "@/data/ilce-buzdolabi";
import {
  IlceBuzdolabiDetail,
  buildIlceBuzdolabiMetadata,
} from "@/components/ilce-buzdolabi/IlceBuzdolabiDetail";

// Sadece tanımlı ilçe buzdolabı slug'ları üretilir; diğer tüm tek segmentli
// yollar statik route'lara ait olduğundan burası onları etkilemez.
export const dynamicParams = false;

export function generateStaticParams() {
  return ilceBuzdolabiListesi.map((i) => ({ ilceBuzdolabiSlug: i.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ ilceBuzdolabiSlug: string }>;
}): Promise<Metadata> {
  const { ilceBuzdolabiSlug } = await props.params;
  const item = getIlceBuzdolabiBySlug(ilceBuzdolabiSlug);
  return item ? buildIlceBuzdolabiMetadata(item) : { title: "Sayfa Bulunamadı" };
}

export default async function Page(props: {
  params: Promise<{ ilceBuzdolabiSlug: string }>;
}) {
  const { ilceBuzdolabiSlug } = await props.params;
  const item = getIlceBuzdolabiBySlug(ilceBuzdolabiSlug);
  if (!item) return null;
  return <IlceBuzdolabiDetail item={item} />;
}
