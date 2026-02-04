interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      } mb-12 md:mb-16`}
    >
      <p
        className={`text-sm font-semibold tracking-widest uppercase mb-3 ${
          light ? "text-brand-300" : "text-brand-600"
        }`}
      >
        {subtitle}
      </p>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
