import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface LessonFrontMatter {
  title: string;
  week: number;
  lesson: number;
  duration: string;
  description: string;
  objectives: string[];
}

export interface Lesson {
  slug: string;
  frontMatter: LessonFrontMatter;
  content: string;
}

export function getAllLessons(): Lesson[] {
  const lessonsDir = path.join(CONTENT_DIR, "lessons");

  if (!fs.existsSync(lessonsDir)) return [];

  const files = fs.readdirSync(lessonsDir);

  const lessons = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(lessonsDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontMatter: data as LessonFrontMatter,
        content,
      };
    })
    .sort((a, b) => {
      if (a.frontMatter.week !== b.frontMatter.week) {
        return a.frontMatter.week - b.frontMatter.week;
      }
      return a.frontMatter.lesson - b.frontMatter.lesson;
    });

  return lessons;
}

export function getLessonBySlug(slug: string): Lesson | null {
  const lessonsDir = path.join(CONTENT_DIR, "lessons");
  const fullPath = path.join(lessonsDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontMatter: data as LessonFrontMatter,
    content,
  };
}

export function getLessonsByWeek(): Record<number, Lesson[]> {
  const lessons = getAllLessons();
  return lessons.reduce(
    (acc, lesson) => {
      const week = lesson.frontMatter.week;
      if (!acc[week]) acc[week] = [];
      acc[week].push(lesson);
      return acc;
    },
    {} as Record<number, Lesson[]>
  );
}
