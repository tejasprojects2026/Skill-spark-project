import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-primary-foreground/70">
      <Link to="/" className="flex items-center gap-1 hover:text-accent transition-smooth">
        <Home className="w-3.5 h-3.5" />
      </Link>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          {item.to ? (
            <Link to={item.to} className="hover:text-accent transition-smooth">{item.label}</Link>
          ) : (
            <span className="text-accent font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
