"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import SectionHeading from "@/components/shared/SectionHeading";

const faqs = [
  {
    question: "プログラミング経験がゼロでも大丈夫ですか？",
    answer:
      "はい、むしろプログラミング未経験の方を想定したプログラムです。Vibe Codingは自然言語でAIに指示を出すため、従来のコーディング知識は不要です。メンターが丁寧にサポートします。",
  },
  {
    question: "Demo Dayは必ず参加しないといけませんか？",
    answer:
      "Demo Dayはプログラムの集大成であり、参加を強く推奨しています。ただし、やむを得ない事情がある場合はオンライン参加も可能です。",
  },
  {
    question: "使用するPCのスペック要件はありますか？",
    answer:
      "Webブラウザが動作すれば十分です。Replit等のクラウド開発環境を使用するため、高性能なPCは不要です。Windows / Mac どちらでもOKです。",
  },
  {
    question: "週にどのくらいの学習時間が必要ですか？",
    answer:
      "週10〜15時間を推奨しています。平日2時間×5日 + 週末5時間 程度です。ライブセッションは週2回（平日夜・土曜昼）開催します。",
  },
  {
    question: "開発したプロダクトの知的財産権は誰のものですか？",
    answer:
      "参加者ご自身に帰属します。プログラム終了後も自由に改良・商用利用できます。",
  },
  {
    question: "途中で挫折しないか不安です。",
    answer:
      "専属メンターが毎週の進捗を確認し、つまずきポイントを先回りでサポートします。Slackコミュニティでは同期の仲間と励まし合えるので、一人で抱え込む必要はありません。過去の完走率は95%以上です。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimateIn>
          <SectionHeading title="よくあるご質問" subtitle="FAQ" />
        </AnimateIn>

        <div className="space-y-3 mt-12">
          {faqs.map((faq, i) => (
            <AnimateIn key={i} delay={i * 50}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden hover:border-brand-200 transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-brand-500" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
