import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibe-launch.vercel.app"),
  title: {
    default: "Vibe Launch | Vibe Codingでビジネスを短期間で形にする",
    template: "%s | Vibe Launch",
  },
  description:
    "プログラミング経験ゼロでもOK。Vibe Codingで4週間でビジネスアイデアを実装し、Demo Dayで発表。一般ビジネスパーソン向け実践プログラム。",
  keywords: [
    "Vibe Coding",
    "バイブコーディング",
    "AI開発",
    "ノーコード",
    "起業",
    "MVP開発",
    "Demo Day",
    "ビジネス",
    "Cursor",
    "Replit",
  ],
  authors: [{ name: "Vibe Launch" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://vibe-launch.vercel.app",
    siteName: "Vibe Launch",
    title: "Vibe Launch | Vibe Codingでビジネスを短期間で形にする",
    description:
      "4週間でアイデアを形にし、Demo Dayで発表。プログラミング経験不要のVibe Coding実践プログラム。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vibe Launch - Vibe Codingでビジネスを形にする",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Launch",
    description:
      "4週間でビジネスアイデアを実装。非エンジニア向けVibe Coding実践プログラム",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
