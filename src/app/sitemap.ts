import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/visuals", "/playground", "/approach", "/experience", "/about", "/contact"];
  return [
    ...pages.map(path => ({ url: siteUrl + path, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .7 })),
    ...projects.map(project => ({ url: siteUrl + "/work/" + project.slug, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .6 }))
  ];
}
