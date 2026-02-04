import { Calendar, MapPin, Users, Trophy, Mic, Star } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

const highlights = [
  {
    icon: Mic,
    title: "ピッチ発表",
    description: "5分間のプレゼンで自分のプロダクトと事業構想を発表",
  },
  {
    icon: Users,
    title: "ネットワーキング",
    description: "起業家・投資家・メンターとの交流で次のステップへ",
  },
  {
    icon: Trophy,
    title: "表彰 & フィードバック",
    description: "審査員からの実践的フィードバックと優秀作品の表彰",
  },
  {
    icon: Star,
    title: "メディア露出",
    description: "優秀プロジェクトはメディア掲載やアクセラレータ推薦も",
  },
];

export default function DemoDay() {
  return (
    <section
      id="demo-day"
      className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-brand-950 to-purple-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimateIn>
          <SectionHeading
            title="Demo Day - あなたの舞台"
            subtitle="The Main Event"
            description="4週間の集大成。あなたが作ったプロダクトを、投資家やメンターの前でピッチします。"
            light
          />
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto mb-12">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="w-6 h-6 text-brand-400" />
                <p className="text-white font-bold text-lg">2026年4月12日</p>
                <p className="text-slate-400 text-sm">
                  土曜日 13:00 - 18:00
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-brand-400" />
                <p className="text-white font-bold text-lg">渋谷</p>
                <p className="text-slate-400 text-sm">
                  イベントスペース（詳細後日）
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6 text-brand-400" />
                <p className="text-white font-bold text-lg">定員20名</p>
                <p className="text-slate-400 text-sm">
                  少人数制で密度の高い交流
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 100 + 200}>
              <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={600}>
          <div className="text-center">
            <Link
              href="#waitlist"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-400 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-2xl transition-all hover:shadow-2xl hover:shadow-brand-500/30 hover:-translate-y-0.5 text-lg"
            >
              Demo Dayに参加する
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
