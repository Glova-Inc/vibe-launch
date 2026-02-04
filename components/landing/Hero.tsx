"use client";

import { ArrowRight, Sparkles, Calendar, Code2, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-brand-950 to-purple-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-600/10 via-transparent to-purple-600/10 animate-pulse-slow" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass text-brand-300 text-sm font-medium px-5 py-2.5 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            非エンジニア向け・4週間実践プログラム
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Vibe Codingで
            <br />
            <span className="gradient-text">ビジネスアイデア</span>を
            <br />
            短期間で形にする
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            プログラミング経験ゼロのビジネスパーソンでも、
            AI活用で4週間で実動するプロダクトを開発。
            <strong className="text-white font-semibold">Demo Day</strong>で事業化への第一歩を。
          </p>

          <div className="inline-flex items-center gap-3 glass text-amber-200 px-6 py-3 rounded-2xl mb-10">
            <Calendar className="w-5 h-5 text-amber-400" />
            <span className="font-semibold text-sm sm:text-base">
              次回 Demo Day: 2026年4月12日（土）渋谷
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-400 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-2xl transition-all hover:shadow-2xl hover:shadow-brand-500/30 hover:-translate-y-0.5 text-lg"
            >
              無料説明会に参加する
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#program"
              className="inline-flex items-center justify-center gap-2 glass hover:bg-white/15 text-white font-medium px-8 py-4 rounded-2xl transition-all text-lg"
            >
              プログラム詳細を見る
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { icon: Calendar, value: "4週間", label: "集中プログラム" },
              { icon: Code2, value: "経験不問", label: "プログラミング" },
              { icon: Zap, value: "100%", label: "実践型" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-5 h-5 text-brand-400 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
