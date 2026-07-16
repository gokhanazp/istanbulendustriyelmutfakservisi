import type { Metadata } from "next";
import { brandServices } from "@/data/brand-services";
import {
  BrandServiceDetail,
  buildBrandServiceMetadata,
} from "@/components/marka-servis/BrandServiceDetail";

const BRAND_ID = "kayalar-mutfak";
const items = brandServices.filter((b) => b.brandId === BRAND_ID);

export const dynamicParams = false;

export function generateStaticParams() {
  return items.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const item = items.find((i) => i.slug === slug);
  return item ? buildBrandServiceMetadata(item) : { title: "Sayfa Bulunamadı" };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const item = items.find((i) => i.slug === slug);
  if (!item) return null;
  return <BrandServiceDetail item={item} />;
}
