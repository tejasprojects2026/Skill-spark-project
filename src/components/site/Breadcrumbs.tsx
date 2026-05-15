import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumbs({
  items,
  className,
}: {
  items: { label: string; to?: string }[];
  className?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex min-h-8 flex-wrap items-center justify-center gap-1.5 text-sm text-primary-foreground/70",
        className,
      )}
    >
      <Link
        to="/"
        className="inline-flex h-8 items-center gap-1 whitespace-nowrap hover:text-accent transition-smooth"
      >
        <Home className="w-3.5 h-3.5" />
      </Link>
      {items.map((item, i) => (
        <div key={i} className="flex h-8 items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          {item.to ? (
            <Link
              to={item.to}
              className="inline-flex h-8 items-center whitespace-nowrap hover:text-accent transition-smooth"
            >
              {item.label}
            </Link>
          ) : (
            <span className="inline-flex h-8 items-center whitespace-nowrap font-medium text-accent">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
