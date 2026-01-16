import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>La Marquise Restaurant | Fine Dining in Douala, Cameroon</title>
        <meta
          name="description"
          content="Experience the finest fusion of French, Italian, Lebanese & Asian cuisines at La Marquise Restaurant in Bonapriso, Douala. Elegant fine dining and casual options available."
        />
        <meta
          name="keywords"
          content="Douala restaurant, fine dining Douala, fusion cuisine Cameroon, La Marquise, Bonapriso restaurant, French cuisine Douala, Italian restaurant Cameroon"
        />
        <meta property="og:title" content="La Marquise Restaurant | Fine Dining in Douala" />
        <meta
          property="og:description"
          content="Where gastronomy meets elegance. Experience world-class fusion cuisine in the heart of Douala."
        />
        <meta property="og:type" content="restaurant" />
        <link rel="canonical" href="https://lamarquise-douala.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "La Marquise Restaurant",
            image: "/hero-restaurant.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rue Tokoto, Bonapriso",
              addressLocality: "Douala",
              addressCountry: "CM",
            },
            telephone: "+237698434343",
            servesCuisine: ["French", "Italian", "Lebanese", "Asian", "Fusion"],
            priceRange: "$$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.3",
              reviewCount: "150",
            },
            openingHours: ["Mo-Sa 11:00-23:00", "Su 12:00-22:00"],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <GallerySection />
          <ReviewsSection />
          <ReservationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
