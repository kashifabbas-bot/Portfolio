import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

const baseUrl = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "work", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "stack", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "about", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "contact", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}/${route.path}`.replace(/\/$/, "") || baseUrl,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
