import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ankitjobanputra.com";
  const pages = ["", "/work", "/playground", "/approach", "/experience", "/about", "/contact"];
  return [
    ...pages.map(path => ({ url: base + path, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .7 })),
    ...projects.map(project => ({ url: base + "/work/" + project.slug, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .6 }))
  ];
}