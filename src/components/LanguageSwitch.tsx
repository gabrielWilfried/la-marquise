import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function LanguageSwitch() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors font-body text-sm font-medium tracking-wide"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {i18n.language === "en" ? "FR" : "EN"}
    </motion.button>
  );
}
