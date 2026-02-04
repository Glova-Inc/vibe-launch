import { Check, ArrowRight, Star } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

const plans = [
  {
    id: "standard",
    name: "スタンダード",
    price: "98,000",
    period: "4週間",
    popular: false,
    features: [
      "オンライン学習教材フルアクセス",
      "週2回のライブセッション",
      "Slackコミュニティ参加",
      "Demo Day参加権（オンライン）",
      "修了証発行",
    ],
  },
  {
    id: "premium",
    name: "プレミアム",
    price: "198,000",
    period: "4週間",
    popular: true,
    features: [
      "スタンダードの全機能",
      "1対1メンタリング（週1回×4回）",
      "コードレビュー無制限",
      "Demo Day参加権（会場参加）",
      "ピッチ資料添削サポート",
      "修了後3ヶ月間のフォローアップ",
    ],
  },
  {
    id: "enterprise",
    name: "企業向け",
    price: "お問い合わせ",
    period: "カスタマイズ可能",
    popular: false,
    features: [
      "5名以上の団体割引",
      "社内専用カリキュラム",
      "オンサイト研修対応",
      "社内Demo Day開催サポート",
      "請求書払い対応",
      "専任メンター配置",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateIn>
          <SectionHeading
            title="あなたに合ったプランを"
            subtitle="Pricing"
            description="すべてのプランに学習教材、コミュニティアクセス、Demo Day参加権が含まれます。"
          />
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimateIn key={plan.id} delay={i * 100}>
              <div
                className={`relative rounded-3xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-gradient-to-br from-brand-600 to-purple-700 text-white shadow-2xl shadow-brand-600/25 scale-[1.02]"
                    : "bg-white border border-slate-200 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-amber-400 text-amber-950 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      <Star className="w-3 h-3" />
                      人気No.1
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-black ${
                        plan.popular ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.id !== "enterprise" && (
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-brand-200" : "text-slate-500"
                        }`}
                      >
                        円（税込）
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm mt-1 ${
                      plan.popular ? "text-brand-200" : "text-slate-500"
                    }`}
                  >
                    {plan.period}
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.popular ? "text-brand-200" : "text-brand-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-brand-100" : "text-slate-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#waitlist"
                  className={`w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all ${
                    plan.popular
                      ? "bg-white text-brand-700 hover:bg-brand-50"
                      : "bg-brand-600 text-white hover:bg-brand-700"
                  }`}
                >
                  {plan.id === "enterprise" ? "お問い合わせ" : "申し込む"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
