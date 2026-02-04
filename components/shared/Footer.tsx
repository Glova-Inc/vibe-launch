import Link from "next/link";
import { Rocket, Mail, MapPin } from "lucide-react";

const footerLinks = {
  program: {
    title: "プログラム",
    links: [
      { href: "/#program", label: "カリキュラム概要" },
      { href: "/#demo-day", label: "Demo Day" },
      { href: "/#pricing", label: "料金プラン" },
      { href: "/learning", label: "学習コンテンツ" },
    ],
  },
  company: {
    title: "Vibe Launch",
    links: [
      { href: "/about", label: "About" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#waitlist", label: "説明会申込" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <Rocket className="w-4.5 h-4.5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Vibe <span className="text-brand-400">Launch</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Vibe Codingで、あなたのビジネスアイデアを短期間で形にする。
              プログラミング経験ゼロでも、4週間で実動するプロダクトを開発し、Demo
              Dayで事業化への一歩を踏み出せます。
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400" />
                <span>hello@vibe-launch.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>東京都渋谷区</span>
              </div>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Vibe Launch. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
