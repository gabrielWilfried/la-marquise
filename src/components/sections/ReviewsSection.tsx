import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Marie-Claire D.",
    rating: 5,
    text: {
      en: "Exceptional dining experience! The ambiance is sophisticated yet welcoming. The Beef Wellington was cooked to perfection. Definitely worth the visit.",
      fr: "Une expérience culinaire exceptionnelle ! L'ambiance est sophistiquée mais accueillante. Le Beef Wellington était cuit à la perfection. Ça vaut vraiment le détour."
    },
    date: "2025-12-15"
  },
  {
    name: "Jean-Pierre M.",
    rating: 5,
    text: {
      en: "Best fusion restaurant in Douala! The Lebanese mezze paired with French wine was divine. Staff is professional and attentive.",
      fr: "Meilleur restaurant fusion de Douala ! Le mezze libanais accompagné de vin français était divin. Le personnel est professionnel et attentif."
    },
    date: "2025-11-28"
  },
  {
    name: "Fatima A.",
    rating: 4,
    text: {
      en: "Beautiful decor and excellent food presentation. The upstairs fine dining area feels like a Parisian restaurant. Highly recommended for special occasions.",
      fr: "Beau décor et excellente présentation des plats. L'espace gastronomique à l'étage ressemble à un restaurant parisien. Fortement recommandé pour les occasions spéciales."
    },
    date: "2025-11-10"
  },
  {
    name: "Thomas K.",
    rating: 5,
    text: {
      en: "Came for a business dinner and was impressed. The service is impeccable, and the fusion menu offers something for everyone. The sushi was surprisingly good!",
      fr: "Venu pour un dîner d'affaires et j'ai été impressionné. Le service est impeccable, et le menu fusion offre quelque chose pour tous. Les sushis étaient étonnamment bons !"
    },
    date: "2025-10-22"
  },
  {
    name: "Sandrine L.",
    rating: 5,
    text: {
      en: "A gem in Bonapriso! The fast-casual section downstairs is perfect for quick lunches. Love their artisanal gelato and croissants.",
      fr: "Un joyau à Bonapriso ! L'espace fast-casual au rez-de-chaussée est parfait pour les déjeuners rapides. J'adore leurs glaces artisanales et leurs croissants."
    },
    date: "2025-10-05"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function ReviewsSection() {
  const { t, i18n } = useTranslation();
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const lang = i18n.language as "en" | "fr";

  return (
    <section id="reviews" className="py-24 bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            {t("reviews.title")}
          </h2>
          <p className="font-display text-xl text-gold italic mb-6">
            {t("reviews.subtitle")}
          </p>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 px-6 py-3 rounded-full">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < 4 ? "text-gold fill-gold" : "text-gold"}`}
                />
              ))}
            </div>
            <span className="font-display text-2xl text-gold font-semibold">4.3</span>
            <span className="font-body text-sm text-cream/60">
              {t("reviews.rating")}
            </span>
          </div>
        </motion.div>

        {/* Reviews Slider */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-charcoal-light p-8 md:p-12 rounded-lg relative"
          >
            <Quote className="absolute top-6 left-6 h-12 w-12 text-gold/20" />
            
            <div className="text-center relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < reviews[currentReview].rating
                        ? "text-gold fill-gold"
                        : "text-gold/30"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-body text-lg md:text-xl text-cream/90 leading-relaxed mb-8 italic">
                "{reviews[currentReview].text[lang]}"
              </p>

              {/* Author */}
              <div>
                <p className="font-display text-xl text-gold">
                  {reviews[currentReview].name}
                </p>
                <p className="font-body text-sm text-cream/50">
                  {new Date(reviews[currentReview].date).toLocaleDateString(
                    lang === "fr" ? "fr-FR" : "en-US",
                    { year: "numeric", month: "long" }
                  )}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? "bg-gold w-8"
                    : "bg-cream/30 hover:bg-cream/50"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
