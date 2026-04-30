import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/skill spark.png";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="bg-primary-foreground rounded-xl p-3 inline-block mb-5">
              <img src={logo} alt="Skill Spark Consulting" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-gold hover:text-primary flex items-center justify-center transition-smooth"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base mb-5 text-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/about", "About Us"],
                ["/employer", "Employer"],
                ["/process", "Our Process"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-primary-foreground/70 hover:text-gold transition-smooth"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base mb-5 text-gold">Employer</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Permanent Staffing</li>
              <li>Executive Search</li>
              <li>Contract & Temp Staffing</li>
              <li>Talent Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base mb-5 text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>A-620, Gera's Imperium Gateway, Nashik Phata, PCMC, Pune – 411034</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a
                  href="mailto:skillsparkconsulting@gmail.com"
                  className="hover:text-gold transition-smooth break-all"
                >
                  skillsparkconsulting@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a href="tel:+917875803175" className="hover:text-gold transition-smooth">
                  +91 78758 03175
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/50">
          <p>
            © {new Date().getFullYear()} Skill Spark Consulting. {t("footer.rights")}
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold transition-smooth">
              Privacy
            </a>
            <a href="#" className="hover:text-gold transition-smooth">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
