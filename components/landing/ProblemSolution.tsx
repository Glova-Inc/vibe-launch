import { X, Check, TrendingUp, Clock, DollarSign, Brain } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import SectionHeading from "@/components/shared/SectionHeading";

const problems = [
  { icon: Clock, text: "エンジニアを採用する時間もコストもない" },
  { icon: DollarSign, text: "外注すると数百万円、期間も数ヶ月" },
  { icon: Brain, text: "プログラミングを学ぶには時間がかかりすぎる" },
  { icon: TrendingUp, text: "アイデアを検証する前に市場が変わってしまう" },
];

const solutions = [
  "AIに自然言語で指示するだけでアプリが作れる",
  "4週間でMVPを完成、Demo Dayで投資家にピッチ",
  "プログラミング知識ゼロでも参加可能",
  "実践メンターが伴走サポート",
];

export default function ProblemSolution() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateIn>
          <SectionHeading
            title="アイデアはあるのに、形にできない"
            subtitle="Problem & Solution"
            description="ビジネスアイデアを持つ多くの方が直面する課題。Vibe Codingがその壁を壊します。"
          />
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12">
          <AnimateIn delay={100}>
            <div className="bg-red-50/50 border border-red-100 rounded-3xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-red-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                従来の方法
              </h3>
              <ul className="space-y-5">
                {problems.map((problem) => (
                  <li key={problem.text} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <problem.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="text-slate-700 leading-relaxed pt-2">{problem.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={250}>
            <div className="bg-gradient-to-br from-brand-50 to-purple-50 border border-brand-100 rounded-3xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-brand-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-brand-600" />
                </div>
                Vibe Launchなら
              </h3>
              <ul className="space-y-5">
                {solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-brand-600" />
                    </div>
                    <span className="text-slate-700 leading-relaxed pt-2">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
