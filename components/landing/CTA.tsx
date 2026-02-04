import AnimateIn from "@/components/shared/AnimateIn";
import SectionHeading from "@/components/shared/SectionHeading";
import WaitlistForm from "@/components/forms/WaitlistForm";

export default function CTA() {
  return (
    <section
      id="waitlist"
      className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-brand-950 to-purple-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimateIn>
          <SectionHeading
            title="無料説明会に参加する"
            subtitle="Join Us"
            description="まずは説明会で詳細をお伝えします。お気軽にお申し込みください。"
            light
          />
        </AnimateIn>

        <AnimateIn delay={150}>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/20">
            <WaitlistForm />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
