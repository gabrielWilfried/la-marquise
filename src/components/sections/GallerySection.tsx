import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-restaurant.jpg";
import exteriorImage from "@/assets/restaurant-exterior.jpg";
import dishBeefWellington from "@/assets/dish-beef-wellington.jpg";
import dishMezze from "@/assets/dish-mezze.jpg";
import dishSushi from "@/assets/dish-sushi.jpg";

const galleryImages = [
  { src: heroImage, alt: "Restaurant Interior", span: "col-span-2 row-span-2" },
  { src: dishBeefWellington, alt: "Beef Wellington", span: "col-span-1" },
  { src: dishMezze, alt: "Lebanese Mezze", span: "col-span-1" },
  { src: exteriorImage, alt: "Restaurant Exterior", span: "col-span-2" },
  { src: dishSushi, alt: "Fusion Sushi", span: "col-span-1" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function GallerySection() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            {t("gallery.title")}
          </h2>
          <p className="font-display text-xl text-gold italic">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`${image.span} overflow-hidden rounded-lg shadow-elegant group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-full min-h-[200px] md:min-h-[250px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="font-display text-cream text-lg">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
