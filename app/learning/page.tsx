import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Lightbulb,
  Code2,
  Shield,
  Rocket,
} from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import SectionHeading from "@/components/shared/SectionHeading";
import { getLessonsByWeek } from "@/lib/content";

export const metadata: Metadata = {
  title: "学習コンテンツ",
  description:
    "Vibe Codingでビジネスを立ち上げるための4週間の実践カリキュラム。",
};

const weekMeta = [
  {
    week: 1,
    title: "アイデア検証 & MVP設計",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
  },
  {
    week: 2,
    title: "Vibe Coding実践 - 開発",
    icon: Code2,
    color: "from-brand-500 to-blue-500",
    bgColor: "bg-brand-50",
    textColor: "text-brand-700",
  },
  {
    week: 3,
    title: "品質向上 & テスト",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  {
    week: 4,
    title: "ローンチ & ピッチ準備",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
];

export default function LearningPage() {
  const lessonsByWeek = getLessonsByWeek();

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimateIn>
          <SectionHeading
            title="学習カリキュラム"
            subtitle="Curriculum"
            description="4週間で段階的にスキルを身につけ、Demo Dayでの発表を目指します。"
          />
        </AnimateIn>

        <div className="space-y-8 mt-12">
          {weekMeta.map((meta, wi) => {
            const lessons = lessonsByWeek[meta.week] || [];
            return (
              <AnimateIn key={meta.week} delay={wi * 100}>
                <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6 md:p-8 flex items-center gap-4 border-b border-slate-100">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${meta.color} flex items-center justify-center text-white shadow-lg shrink-0`}
                    >
                      <meta.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Week {meta.week}
                      </p>
                      <h2 className="text-xl font-bold text-slate-900">
                        {meta.title}
                      </h2>
                    </div>
                  </div>

                  {lessons.length > 0 ? (
                    <div className="divide-y divide-slate-100">
                      {lessons.map((lesson) => (
                        <Link
                          key={lesson.slug}
                          href={`/learning/${lesson.slug}`}
                          className="flex items-center gap-4 p-5 md:px-8 hover:bg-slate-50 transition-colors group"
                        >
                          <div
                            className={`w-10 h-10 rounded-xl ${meta.bgColor} flex items-center justify-center shrink-0`}
                          >
                            <BookOpen
                              className={`w-5 h-5 ${meta.textColor}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                              {lesson.frontMatter.title}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5 truncate">
                              {lesson.frontMatter.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="hidden sm:flex items-center gap-1 text-xs text-slate-400">
                              <Clock className="w-3.5 h-3.5" />
                              {lesson.frontMatter.duration}
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-slate-400 text-sm">
                      Coming Soon
                    </div>
                  )}
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn delay={400}>
          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">
              すべてのコンテンツにアクセスするにはプログラムへの参加が必要です
            </p>
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/25"
            >
              無料説明会に申し込む
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
