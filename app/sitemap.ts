import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/training-guides",
    "/the-den",
    "/paw-notes",
    "/reach-us",
    "/privacy-policy",
    "/terms",
    "/affiliate-disclosure",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const articlePages = articles.map((a) => ({
    url: `${siteConfig.url}/best/${a.slug}`,
    lastModified: new Date(),
  }));

  const guidePages = guides.map((g) => ({
    url: `${siteConfig.url}/training-guides/${g.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...articlePages, ...guidePages];
}
