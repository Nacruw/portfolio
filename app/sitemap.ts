import type { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    } as MetadataRoute.Sitemap[number],
  ].map((route) => ({
    ...route,
    url: "https://www.nacruw.fun" + route.url,
  }));
 
}