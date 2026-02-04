import { Quote } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "田中 健太",
    role: "マーケティング担当",
    company: "EC企業",
    quote:
      "プログラミング未経験でしたが、4週間で顧客管理アプリを完成させました。Demo Dayでの発表後、社内で正式採用され業務効率が大幅に向上しました。",
    cohort: "第1期生",
  },
  {
    id: 2,
    name: "佐藤 美咲",
    role: "営業企画",
    company: "SaaS企業",
    quote:
      "Vibe Codingという言葉すら知りませんでしたが、メンターのサポートで自信を持ってピッチできるまでになりました。現在は社内でVibe Coding推進リーダーをしています。",
    cohort: "第1期生",
  },
  {
    id: 3,
    name: "山田 大輔",
    role: "経営企画部 課長",
    company: "製造業",
    quote:
      "部署の業務改善ツールを自分で作れるようになったのは衝撃的でした。IT部門に依頼していた頃には考えられないスピード感です。",
    cohort: "第2期生",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateIn>
          <SectionHeading
            title="受講生の声"
            subtitle="Testimonials"
            description="プログラミング未経験から、プロダクトを生み出した仲間たち。"
          />
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((item, i) => (
            <AnimateIn key={item.id} delay={i * 100}>
              <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <Quote className="w-8 h-8 text-brand-200 mb-4" />
                <p className="text-slate-600 leading-relaxed flex-1 mb-6">
                  {item.quote}
                </p>
                <div className="border-t border-slate-200 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {item.role}・{item.company}
                      </p>
                    </div>
                  </div>
                  <span className="inline-block mt-3 text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                    {item.cohort}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
