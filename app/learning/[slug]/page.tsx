import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  Target,
} from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import { getAllLessons, getLessonBySlug } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) return { title: "レッスンが見つかりません" };

  return {
    title: lesson.frontMatter.title,
    description: lesson.frontMatter.description,
  };
}

function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headers
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Blockquotes
  html = html.replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>');

  // Unordered lists
  html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
  html = html.replace(/(<li>[\s\S]*<\/li>)/, '<ul>$1</ul>');

  // Ordered lists
  html = html.replace(/^\d+\. (.*$)/gm, '<li>$1</li>');

  // Tables (basic)
  html = html.replace(/^\|(.+)\|$/gm, (match) => {
    if (match.includes('---')) return '';
    const cells = match.split('|').filter(c => c.trim());
    const cellHtml = cells.map(c => `<td class="border border-slate-200 px-4 py-2">${c.trim()}</td>`).join('');
    return `<tr>${cellHtml}</tr>`;
  });

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Checkboxes
  html = html.replace(/- \[ \] (.*$)/gm, '<li class="flex items-center gap-2"><input type="checkbox" disabled class="rounded" /> $1</li>');
  html = html.replace(/- \[x\] (.*$)/gm, '<li class="flex items-center gap-2"><input type="checkbox" checked disabled class="rounded" /> $1</li>');

  // Paragraphs
  html = html.replace(/^(?!<[a-z])(.*\S.*)$/gm, '<p>$1</p>');

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');

  return html;
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) notFound();

  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((l) => l.slug === slug);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const contentHtml = markdownToHtml(lesson.content);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimateIn>
          <Link
            href="/learning"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            カリキュラムに戻る
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                <BookOpen className="w-3.5 h-3.5" />
                Week {lesson.frontMatter.week} - Lesson{" "}
                {lesson.frontMatter.lesson}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {lesson.frontMatter.duration}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {lesson.frontMatter.title}
            </h1>

            <p className="text-lg text-slate-500">
              {lesson.frontMatter.description}
            </p>
          </div>

          {lesson.frontMatter.objectives &&
            lesson.frontMatter.objectives.length > 0 && (
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 mb-10">
                <h3 className="flex items-center gap-2 font-semibold text-brand-800 mb-3">
                  <Target className="w-5 h-5" />
                  このレッスンのゴール
                </h3>
                <ul className="space-y-2">
                  {lesson.frontMatter.objectives.map(
                    (obj: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-brand-700"
                      >
                        <span className="w-5 h-5 rounded-full bg-brand-200 flex items-center justify-center text-xs font-bold text-brand-700 shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {obj}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </AnimateIn>

        <AnimateIn delay={200}>
          <div className="border-t border-slate-200 mt-12 pt-8">
            <div className="flex items-center justify-between gap-4">
              {prevLesson ? (
                <Link
                  href={`/learning/${prevLesson.slug}`}
                  className="group flex items-center gap-3 text-sm text-slate-500 hover:text-brand-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-right">
                    <p className="text-xs text-slate-400">前のレッスン</p>
                    <p className="font-medium">{prevLesson.frontMatter.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextLesson ? (
                <Link
                  href={`/learning/${nextLesson.slug}`}
                  className="group flex items-center gap-3 text-sm text-slate-500 hover:text-brand-600 transition-colors text-right"
                >
                  <div>
                    <p className="text-xs text-slate-400">次のレッスン</p>
                    <p className="font-medium">{nextLesson.frontMatter.title}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
