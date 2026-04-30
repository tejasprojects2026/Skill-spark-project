import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/process", key: "nav.process" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-smooth",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-background/60 backdrop-blur-md",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="Skill Spark Consulting"
              className="h-14 md:h-16 w-auto transition-smooth group-hover:scale-[1.03]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{t(item.key)}</span>
                    <span
                      className={cn(
                        "absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-gold transition-smooth origin-left",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="hero" size="sm" className="hidden md:inline-flex">
              <Link to="/contact">{t("cta.consult")}</Link>
            </Button>

            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary transition-smooth"
                activeProps={{ className: "bg-secondary text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-3">
              <Button asChild variant="hero" size="sm" className="flex-1">
                <Link to="/contact">{t("cta.consult")}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
