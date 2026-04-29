interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; to?: string }[];
}

export function PageHero({ tag, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {tag && (
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-6">
              {tag}
            </p>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight animate-fade-in-up">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-in-up">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
