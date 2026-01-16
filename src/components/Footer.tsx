import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl text-gold mb-4">La Marquise</h3>
            <p className="font-body text-cream/70">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display text-lg text-cream mb-4">Navigation</h4>
            <nav className="space-y-2">
              {["about", "menu", "gallery", "reviews", "contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="block font-body text-cream/70 hover:text-gold transition-colors"
                >
                  {t(`nav.${link}`)}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="text-right">
            <h4 className="font-display text-lg text-cream mb-4">
              {t("footer.followUs")}
            </h4>
            <div className="flex justify-end gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gold" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-cream/50">
              © {currentYear} La Marquise Restaurant. {t("footer.rights")}
            </p>
            <p className="font-body text-sm text-cream/50">
              Rue Tokoto, Bonapriso, Douala, Cameroon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
