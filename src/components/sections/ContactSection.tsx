import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="font-display text-xl text-gold italic">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">
                    {t("contact.address")}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {t("contact.city")}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">
                    {t("contact.phone")}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    +237 698 43 43 43
                  </p>
                  <p className="font-body text-muted-foreground">
                    +237 670 85 85 85
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {t("contact.hours.title")}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex justify-between gap-8">
                      <span className="font-body text-muted-foreground">
                        {t("contact.hours.weekdays")}
                      </span>
                      <span className="font-body text-foreground">
                        {t("contact.hours.weekdaysTime")}
                      </span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="font-body text-muted-foreground">
                        {t("contact.hours.sunday")}
                      </span>
                      <span className="font-body text-foreground">
                        {t("contact.hours.sundayTime")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <div className="rounded-lg overflow-hidden shadow-elegant h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7!2d9.7!3d4.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMDAuMCJOIDnCsDQyJzAwLjAiRQ!5e0!3m2!1sen!2scm!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Marquise Restaurant Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
