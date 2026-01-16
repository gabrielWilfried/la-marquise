import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Check, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function ReservationSection() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    floor: "",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservation" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            {t("reservation.title")}
          </h2>
          <p className="font-display text-xl text-gold italic">
            {t("reservation.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card p-8 rounded-lg text-center shadow-elegant"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check className="w-8 h-8 text-gold" />
                  </div>
                  <p className="font-display text-xl text-foreground">
                    {t("reservation.success")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">
                      {t("reservation.form.name")}
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-card border-border"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">
                        {t("reservation.form.email")}
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-card border-border"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">
                        {t("reservation.form.phone")}
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="bg-card border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">
                        {t("reservation.form.date")}
                      </label>
                      <Input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        className="bg-card border-border"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">
                        {t("reservation.form.time")}
                      </label>
                      <Input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => handleChange("time", e.target.value)}
                        className="bg-card border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">
                        {t("reservation.form.guests")}
                      </label>
                      <Select onValueChange={(value) => handleChange("guests", value)}>
                        <SelectTrigger className="bg-card border-border">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover">
                          {[1, 2, 3, 4, 5, 6, 7, 8, "10+"].map((num) => (
                            <SelectItem key={num} value={String(num)}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">
                        {t("reservation.form.floor")}
                      </label>
                      <Select onValueChange={(value) => handleChange("floor", value)}>
                        <SelectTrigger className="bg-card border-border">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover">
                          <SelectItem value="gastronomy">
                            {t("reservation.form.floorOptions.gastronomy")}
                          </SelectItem>
                          <SelectItem value="fastfood">
                            {t("reservation.form.floorOptions.fastfood")}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">
                      {t("reservation.form.specialRequests")}
                    </label>
                    <Textarea
                      value={formData.requests}
                      onChange={(e) => handleChange("requests", e.target.value)}
                      className="bg-card border-border min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" variant="gold" className="w-full" size="lg">
                    {t("reservation.form.submit")}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Direct Contact */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <div className="bg-card p-8 rounded-lg shadow-elegant h-full">
                <h3 className="font-display text-2xl text-foreground mb-6">
                  {t("reservation.orContact")}
                </h3>

                <div className="space-y-6">
                  <motion.a
                    href="https://wa.me/237698434343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-foreground">
                        {t("contact.whatsapp")}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        +237 698 43 43 43
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+237698434343"
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-foreground">
                        {t("contact.callUs")}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        +237 698 43 43 43
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+237670858585"
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-foreground">
                        {t("contact.callUs")}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        +237 670 85 85 85
                      </p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://maps.google.com/?q=LA+MARQUISE+RESTAURANT+Douala+Cameroon"
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    target="blank"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Navigation className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-foreground">
                        {t("contact.directions")}
                      </p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
