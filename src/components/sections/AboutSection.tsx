import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { UtensilsCrossed, Star, Users, Sparkles } from "lucide-react";
import exteriorImage from "@/assets/restaurant-exterior.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function AboutSection() {
  const { t } = useTranslation();

  const values = [
    { key: "quality", icon: Star },
    { key: "service", icon: Users },
    { key: "ambiance", icon: Sparkles },
    { key: "fusion", icon: UtensilsCrossed },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            {t("about.title")}
          </h2>
          <p className="font-display text-xl text-gold italic">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              {t("about.description")}
            </p>

            {/* Two Level Cards */}
            <div className="space-y-6">
              <motion.div
                className="bg-card p-6 rounded-lg shadow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-display text-2xl text-gold mb-2">
                  {t("about.gastronomy.title")}
                </h3>
                <p className="font-body text-muted-foreground">
                  {t("about.gastronomy.description")}
                </p>
              </motion.div>

              <motion.div
                className="bg-card p-6 rounded-lg shadow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-display text-2xl text-gold mb-2">
                  {t("about.casual.title")}
                </h3>
                <p className="font-body text-muted-foreground">
                  {t("about.casual.description")}
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img
                src={exteriorImage}
                alt="La Marquise Restaurant Exterior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg -z-10" />
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.key}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-display text-lg text-foreground">
                {t(`about.values.${value.key}`)}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
