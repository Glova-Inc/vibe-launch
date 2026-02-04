import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Globe,
  Rocket,
  Users,
  Target,
  Heart,
} from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vibe Launchについて。AI時代の新しいビジネス創出を支援するプログラムのミッションとビジョン。",
};

const stats = [
  { value: "47億ドル", label: "Vibe Coding市場規模（2026年）", icon: TrendingUp },
  { value: "55.2%", label: "日本の生成AI業務利用率", icon: Globe },
  { value: "7倍", label: "AI人材需要の成長（2年間）", icon: Rocket },
];

const values = [
  {
    icon: Target,
    title: "実践第一",
    description:
      "座学ではなく、実際にプロダクトを作りながら学ぶ。4週間で動くものを完成させることにこだわります。",
  },
  {
    icon: Users,
    title: "コミュニティ",
    description:
      "同じ志を持つ仲間との繋がりが、学習の継続と事業化の鍵。Demo Day後も続くネットワークを構築します。",
  },
  {
    icon: Heart,
    title: "アクセシビリティ",
    description:
      "プログラミング経験は不問。ビジネスアイデアと情熱があれば、誰でも参加できるプログラムです。",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <AnimateIn>
          <SectionHeading
            title="テクノロジーの民主化で、誰もが起業家になれる時代を"
            subtitle="Our Mission"
            description="Vibe Launchは、AI技術の力を活用して、アイデアを持つすべての人がプロダクトを形にできる世界を目指しています。"
          />
        </AnimateIn>
      </section>

      {/* Market Background */}
      <section className="bg-slate-50 py-16 md:py-20 mb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateIn>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
              なぜ今、Vibe Launchなのか
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 text-center border border-slate-200/80 hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 text-brand-500 mx-auto mb-3" />
                  <p className="text-3xl font-black text-slate-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={300}>
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 md:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                日本のAI活用は、世界に比べて大きく遅れています
              </h3>
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <p>
                  日本の生成AI業務利用率は55.2%。対して米国は90.6%、中国は95.8%と大きな差があります。
                </p>
                <p>
                  一方で、Vibe Codingの登場により、プログラミング未経験者でもAIと対話するだけでソフトウェアを構築できる時代が到来しました。
                </p>
                <p>
                  この変化は、「エンジニアだけがプロダクトを作れる」という常識を根底から覆します。
                  ビジネスの現場を知る人が、自らの手でソリューションを形にできる。
                  それが Vibe Launch が提供する価値です。
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <AnimateIn>
          <SectionHeading
            title="私たちの価値観"
            subtitle="Our Values"
          />
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {values.map((value, i) => (
            <AnimateIn key={value.title} delay={i * 100}>
              <div className="bg-gradient-to-br from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100/50">
                <div className="w-12 h-12 rounded-2xl bg-brand-100 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimateIn>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            あなたのアイデアを、形にしませんか？
          </h2>
          <p className="text-slate-600 mb-8">
            まずは無料説明会で、Vibe Launchの詳細をお伝えします。
          </p>
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-brand-600/25 hover:shadow-xl hover:-translate-y-0.5 text-lg"
          >
            無料説明会に参加する
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimateIn>
      </section>
    </div>
  );
}
