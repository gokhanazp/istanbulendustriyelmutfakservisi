import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { brands } from "@/data/brands";
import { brandServices } from "@/data/brand-services";
import { regions } from "@/data/regions";
import { ilceBuzdolabiListesi } from "@/data/ilce-buzdolabi";
import { blogPosts } from "@/data/blog";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/endustriyel-mutfak-servisi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/hizmetler`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/markalar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/marka-servis`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/bolgeler`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/hakkimizda`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/iletisim`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/sss`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const brandPages: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${SITE_URL}/markalar/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const brandServicePages: MetadataRoute.Sitemap = brandServices.map((bs) => ({
    url: `${SITE_URL}${bs.urlPath}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const regionPages: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${SITE_URL}/bolgeler/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const ilceBuzdolabiPages: MetadataRoute.Sitemap = ilceBuzdolabiListesi.map(
    (i) => ({
      url: `${SITE_URL}/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    })
  );

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.publishDate ? new Date(p.publishDate) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...brandPages,
    ...brandServicePages,
    ...regionPages,
    ...ilceBuzdolabiPages,
    ...blogPages,
  ];
}
