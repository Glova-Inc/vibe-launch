import { MetadataRoute } from "next";
import { getAllLessons } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lessons = getAllLessons();
  const lessonUrls = lessons.map((lesson) => ({
    url: `https://vibe-launch.vercel.app/learning/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://vibe-launch.vercel.app",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://vibe-launch.vercel.app/learning",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://vibe-launch.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...lessonUrls,
  ];
}
