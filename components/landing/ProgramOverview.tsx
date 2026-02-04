import { CheckCircle2, Lightbulb, Code2, Shield, Rocket } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import SectionHeading from "@/components/shared/SectionHeading";

const weeks = [
  {
    week: 1,
    icon: Lightbulb,
    title: "アイデア検証 & MVP設計",
    color: "from-amber-500 to-orange-500",
    description: "ビジネスアイデアを具体化し、実現可能なMVPを設計。",
    goals: [
      "ペルソナ設定とユーザーストーリー作成",
      "課題-ソリューションフィット検証",
      "MVP機能要件定義",
      "技術スタック選定（Replit / Cursor / v0.dev 等）",
    ],
  },
  {
    week: 2,
    icon: Code2,
    title: "Vibe Coding実践 - 開発",
    color: "from-brand-500 to-blue-500",
    description: "AIツールを駆使して実際にプロダクトを構築。",
    goals: [
      "Replit / Cursor での開発開始",
      "フロントエンド & バックエンド構築",
      "データベース設計と実装",
      "基本機能の実装完了",
    ],
  },
  {
    week: 3,
    icon: Shield,
    title: "品質向上 & テスト",
    color: "from-emerald-500 to-teal-500",
    description: "セキュリティ、UX、パフォーマンスを改善。",
    goals: [
      "ユーザーテストとフィードバック収集",
      "セキュリティ基本対策",
      "パフォーマンス最適化",
      "バグ修正とリファクタリング",
    ],
  },
  {
    week: 4,
    icon: Rocket,
    title: "ローンチ & ピッチ準備",
    color: "from-purple-500 to-pink-500",
    description: "本番デプロイ、事業計画の仕上げ、Demo Day準備。",
    goals: [
      "本番環境デプロイ（Vercel / Railway 等）",
      "ピッチデック作成",
      "事業計画の詳細化",
      "Demo Day リハーサル",
    ],
  },
];

export default function ProgramOverview() {
  return (
    <section id="program" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateIn>
          <SectionHeading
            title="4週間で、アイデアからDemo Dayへ"
            subtitle="Program Overview"
            description="実践的なカリキュラムで完全サポート。毎週ゴールを設定し、着実にプロダクトを完成させます。"
          />
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {weeks.map((week, i) => (
            <AnimateIn key={week.week} delay={i * 100}>
              <div className="group bg-white rounded-3xl border border-slate-200/80 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${week.color} flex items-center justify-center text-white shadow-lg`}>
                    <week.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Week {week.week}</p>
                    <h3 className="text-xl font-bold text-slate-900">{week.title}</h3>
                  </div>
                </div>
                <p className="text-slate-500 mb-6 text-sm">{week.description}</p>
                <ul className="space-y-3">
                  {week.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
