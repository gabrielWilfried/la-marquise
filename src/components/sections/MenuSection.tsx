import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dishBeefWellington from "@/assets/dish-beef-wellington.jpg";
import dishMezze from "@/assets/dish-mezze.jpg";
import dishSushi from "@/assets/dish-sushi.jpg";

const gastronomyMenu = {
  appetizers: [
    { name: "Lebanese Mezze Platter", price: "12,000", description: "Hummus, baba ganoush, falafel, tabbouleh, pita" },
    { name: "Jumbo Prawns Tempura", price: "15,000", description: "Crispy prawns with spicy aioli and micro greens" },
    { name: "Beef Carpaccio", price: "14,000", description: "Thinly sliced beef with arugula, parmesan, truffle oil" },
  ],
  mains: [
    { name: "Beef Wellington", price: "35,000", description: "Prime beef tenderloin wrapped in puff pastry, mushroom duxelles" },
    { name: "Chicken Alfredo", price: "18,000", description: "Creamy parmesan pasta with grilled chicken breast" },
    { name: "Jumbo Prawns Biryani", price: "28,000", description: "Aromatic basmati rice with jumbo prawns, saffron" },
    { name: "Roulade de Poulet", price: "22,000", description: "Stuffed chicken roll with herbs and seasonal vegetables" },
    { name: "Grilled Sea Bass", price: "30,000", description: "Mediterranean style with lemon butter, capers" },
  ],
  desserts: [
    { name: "Tiramisu", price: "8,000", description: "Classic Italian mascarpone dessert with espresso" },
    { name: "Crème Brûlée", price: "7,500", description: "Vanilla custard with caramelized sugar crust" },
    { name: "Chocolate Fondant", price: "9,000", description: "Warm chocolate cake with molten center, vanilla ice cream" },
  ],
};

const fastFoodMenu = {
  appetizers: [
    { name: "Chicken Wings", price: "6,000", description: "Crispy wings with choice of BBQ or Buffalo sauce" },
    { name: "Loaded Nachos", price: "5,500", description: "Tortilla chips with cheese, jalapeños, salsa" },
    { name: "Spring Rolls", price: "4,500", description: "Vegetable spring rolls with sweet chili sauce" },
  ],
  mains: [
    { name: "Gourmet Burger", price: "8,500", description: "Angus beef patty, cheddar, bacon, special sauce" },
    { name: "Chicken Shawarma Wrap", price: "6,000", description: "Grilled chicken, garlic sauce, pickles in pita" },
    { name: "Margherita Pizza", price: "9,000", description: "Fresh mozzarella, tomato, basil on wood-fired crust" },
    { name: "Fish & Chips", price: "10,000", description: "Beer-battered fish, crispy fries, tartar sauce" },
  ],
  desserts: [
    { name: "Artisanal Gelato", price: "3,500", description: "Two scoops of house-made Italian ice cream" },
    { name: "Croissant aux Amandes", price: "3,000", description: "Almond croissant fresh from our bakery" },
    { name: "Cheesecake", price: "5,000", description: "New York style with berry compote" },
  ],
};

const menuImages = [dishBeefWellington, dishMezze, dishSushi];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function MenuSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("gastronomy");

  const currentMenu = activeTab === "gastronomy" ? gastronomyMenu : fastFoodMenu;

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            {t("menu.title")}
          </h2>
          <p className="font-display text-xl text-gold italic mb-8">
            {t("menu.subtitle")}
          </p>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-secondary">
              <TabsTrigger
                value="gastronomy"
                className="data-[state=active]:bg-gold data-[state=active]:text-primary-foreground"
              >
                {t("menu.tabs.gastronomy")}
              </TabsTrigger>
              <TabsTrigger
                value="fastfood"
                className="data-[state=active]:bg-gold data-[state=active]:text-primary-foreground"
              >
                {t("menu.tabs.fastfood")}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Menu Images */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          {menuImages.map((img, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-lg overflow-hidden shadow-elegant"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt="Signature Dish"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {/* Appetizers */}
            <div className="mb-12">
              <h3 className="font-display text-2xl text-gold mb-6 text-center">
                {t("menu.categories.appetizers")}
              </h3>
              <div className="space-y-4">
                {currentMenu.appetizers.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex justify-between items-start p-4 bg-card rounded-lg shadow-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex-1">
                      <h4 className="font-display text-lg text-foreground">{item.name}</h4>
                      <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="font-display text-gold font-semibold ml-4">
                      {item.price} {t("menu.currency")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Main Courses */}
            <div className="mb-12">
              <h3 className="font-display text-2xl text-gold mb-6 text-center">
                {t("menu.categories.mains")}
              </h3>
              <div className="space-y-4">
                {currentMenu.mains.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex justify-between items-start p-4 bg-card rounded-lg shadow-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex-1">
                      <h4 className="font-display text-lg text-foreground">{item.name}</h4>
                      <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="font-display text-gold font-semibold ml-4">
                      {item.price} {t("menu.currency")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div className="mb-12">
              <h3 className="font-display text-2xl text-gold mb-6 text-center">
                {t("menu.categories.desserts")}
              </h3>
              <div className="space-y-4">
                {currentMenu.desserts.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex justify-between items-start p-4 bg-card rounded-lg shadow-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex-1">
                      <h4 className="font-display text-lg text-foreground">{item.name}</h4>
                      <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="font-display text-gold font-semibold ml-4">
                      {item.price} {t("menu.currency")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Download PDF */}
        <motion.div className="text-center" {...fadeInUp} transition={{ delay: 0.4 }}>
          <Button variant="goldOutline" size="lg" asChild>
            <a href="/menu-la-marquise.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              {t("menu.downloadPdf")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
