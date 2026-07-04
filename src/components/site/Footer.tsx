import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { skillSparkMapUrl } from "@/lib/location";
import footerLogo from "@/assets/footer-logo.webp";

const socialLinks = [
  {
    href: "https://www.facebook.com/61589978150086",
    label: "Skill Spark Consulting on Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.linkedin.com/company/skill-spark-pune/",
    label: "Skill Spark Consulting on LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/skillsparkconsulting/",
    label: "Skill Spark Consulting on Instagram",
    icon: Instagram,
  },
  {
    href: skillSparkMapUrl,
    label: "Skill Spark Consulting location on Google Maps",
    icon: MapPin,
  },
] as const;

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary text-primary-foreground mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="bg-primary-foreground rounded-xl p-2.5 inline-block mb-3">
              <img
                src={footerLogo}
                alt="Skill Spark Consulting"
                width={230}
                height={90}
                loading="lazy"
                decoding="async"
                className="h-9 w-auto"
              />
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-primary-foreground/10 hover:bg-gold hover:text-primary flex items-center justify-center transition-smooth"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base mb-3 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["/about", "About Us"],
                ["/employer", "Employer"],
                ["/employee", "Employee"],
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
            <h4 className="font-display text-base mb-3 text-gold">Employer</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Permanent Staffing</li>
              <li>Executive Search</li>
              <li>Talent Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base mb-3 text-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a
                  href={skillSparkMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-smooth"
                >
                  <span>A-620, Gera's Imperium Gateway, Nashik Phata, PCMC, Pune – 411034</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a
                  href="mailto:skillsparkconsulting@gmail.com"
                  className="hover:text-gold transition-smooth break-all"
                >
                  skillsparkconsulting@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a href="tel:+917875803175" className="phone-number hover:text-gold transition-smooth whitespace-nowrap">
                  +91 78758 03175
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-7 pt-4 text-center">
          <p className="text-[0.68rem] leading-relaxed text-primary-foreground/45 sm:text-xs">
            &copy; 2026 Skill Spark Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}
