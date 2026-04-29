import { ReactNode } from "react";

interface SectionProps {
  tag?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  tag,
  title,
  subtitle,
  align = "center",
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
          {tag && (
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold uppercase tracking-wider text-accent ${align === "center" ? "mx-auto" : ""}`}>
              {tag}
            </div>
          )}
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-5 text-primary leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}
