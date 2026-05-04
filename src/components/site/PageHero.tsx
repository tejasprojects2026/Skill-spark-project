interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; to?: string }[];
}

export function PageHero({ tag, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {tag && (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
              {tag}
            </p>
          )}
          <h1 className="font-display text-3xl font-semibold leading-tight animate-fade-in-up sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-3xl text-base text-primary-foreground/80 animate-fade-in-up md:text-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
