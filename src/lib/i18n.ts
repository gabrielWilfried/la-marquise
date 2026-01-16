import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        menu: "Menu",
        gallery: "Gallery",
        reviews: "Reviews",
        contact: "Contact",
        reservation: "Book a Table"
      },
      // Hero
      hero: {
        title: "La Marquise",
        subtitle: "Where Gastronomy Meets Elegance",
        tagline: "Experience the finest fusion of French, Italian, Lebanese & Asian cuisines in the heart of Douala",
        cta: "Reserve Your Table",
        viewMenu: "View Menu"
      },
      // About
      about: {
        title: "Our Story",
        subtitle: "A Culinary Journey",
        description: "Nestled in the prestigious Bonapriso district of Douala, La Marquise Restaurant offers an unparalleled dining experience. Our two-level establishment features an elegant fine dining space upstairs and a vibrant fast-casual area on the ground floor.",
        gastronomy: {
          title: "Fine Dining",
          description: "Upstairs, immerse yourself in refined gastronomy with impeccable service and an atmosphere of sophisticated elegance."
        },
        casual: {
          title: "Fast Casual",
          description: "Ground floor features artisanal pastries, fresh gelato, and quick gourmet bites in a relaxed setting."
        },
        values: {
          quality: "Premium Quality",
          service: "Impeccable Service",
          ambiance: "Elegant Ambiance",
          fusion: "Fusion Excellence"
        }
      },
      // Menu
      menu: {
        title: "Our Menu",
        subtitle: "A Symphony of Flavors",
        tabs: {
          gastronomy: "Fine Dining",
          fastfood: "Fast Casual"
        },
        categories: {
          appetizers: "Appetizers",
          mains: "Main Courses",
          desserts: "Desserts",
          drinks: "Beverages"
        },
        downloadPdf: "Download Full Menu",
        currency: "XAF"
      },
      // Reviews
      reviews: {
        title: "Guest Experiences",
        subtitle: "What Our Guests Say",
        rating: "Google Rating"
      },
      // Gallery
      gallery: {
        title: "Gallery",
        subtitle: "Moments at La Marquise"
      },
      // Contact
      contact: {
        title: "Visit Us",
        subtitle: "We'd Love to Welcome You",
        address: "Rue Tokoto, Bonapriso",
        city: "Douala, Cameroon",
        phone: "Phone",
        hours: {
          title: "Opening Hours",
          weekdays: "Monday - Saturday",
          weekdaysTime: "11:00 AM - 11:00 PM",
          sunday: "Sunday",
          sundayTime: "12:00 PM - 10:00 PM"
        },
        whatsapp: "Chat on WhatsApp",
        callUs: "Call Us",
        directions: "Get Directions"
      },
      // Reservation
      reservation: {
        title: "Reserve Your Table",
        subtitle: "Plan Your Visit",
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          date: "Date",
          time: "Time",
          guests: "Number of Guests",
          floor: "Dining Area",
          floorOptions: {
            gastronomy: "Fine Dining (Upstairs)",
            fastfood: "Fast Casual (Ground Floor)"
          },
          specialRequests: "Special Requests",
          submit: "Confirm Reservation"
        },
        success: "Thank you! Your reservation request has been sent.",
        orContact: "Or contact us directly"
      },
      // Footer
      footer: {
        tagline: "Fine Dining in the Heart of Douala",
        rights: "All rights reserved",
        followUs: "Follow Us"
      }
    }
  },
  fr: {
    translation: {
      // Navigation
      nav: {
        home: "Accueil",
        about: "À Propos",
        menu: "Menu",
        gallery: "Galerie",
        reviews: "Avis",
        contact: "Contact",
        reservation: "Réserver"
      },
      // Hero
      hero: {
        title: "La Marquise",
        subtitle: "Où la Gastronomie Rencontre l'Élégance",
        tagline: "Découvrez la plus fine fusion des cuisines Française, Italienne, Libanaise & Asiatique au cœur de Douala",
        cta: "Réservez Votre Table",
        viewMenu: "Voir le Menu"
      },
      // About
      about: {
        title: "Notre Histoire",
        subtitle: "Un Voyage Culinaire",
        description: "Niché dans le prestigieux quartier de Bonapriso à Douala, le Restaurant La Marquise offre une expérience culinaire inégalée. Notre établissement à deux niveaux propose un espace gastronomique élégant à l'étage et un espace fast-casual animé au rez-de-chaussée.",
        gastronomy: {
          title: "Gastronomie",
          description: "À l'étage, plongez dans une gastronomie raffinée avec un service impeccable et une atmosphère d'élégance sophistiquée."
        },
        casual: {
          title: "Fast Casual",
          description: "Le rez-de-chaussée propose des pâtisseries artisanales, des glaces fraîches et des bouchées gourmandes rapides."
        },
        values: {
          quality: "Qualité Premium",
          service: "Service Impeccable",
          ambiance: "Ambiance Élégante",
          fusion: "Excellence Fusion"
        }
      },
      // Menu
      menu: {
        title: "Notre Menu",
        subtitle: "Une Symphonie de Saveurs",
        tabs: {
          gastronomy: "Gastronomie",
          fastfood: "Fast Casual"
        },
        categories: {
          appetizers: "Entrées",
          mains: "Plats Principaux",
          desserts: "Desserts",
          drinks: "Boissons"
        },
        downloadPdf: "Télécharger le Menu Complet",
        currency: "XAF"
      },
      // Reviews
      reviews: {
        title: "Témoignages",
        subtitle: "Ce Que Nos Clients Disent",
        rating: "Note Google"
      },
      // Gallery
      gallery: {
        title: "Galerie",
        subtitle: "Moments à La Marquise"
      },
      // Contact
      contact: {
        title: "Nous Rendre Visite",
        subtitle: "Nous Serions Ravis de Vous Accueillir",
        address: "Rue Tokoto, Bonapriso",
        city: "Douala, Cameroun",
        phone: "Téléphone",
        hours: {
          title: "Heures d'Ouverture",
          weekdays: "Lundi - Samedi",
          weekdaysTime: "11h00 - 23h00",
          sunday: "Dimanche",
          sundayTime: "12h00 - 22h00"
        },
        whatsapp: "Discuter sur WhatsApp",
        callUs: "Appelez-nous",
        directions: 'Itinéraire'
      },
      // Reservation
      reservation: {
        title: "Réservez Votre Table",
        subtitle: "Planifiez Votre Visite",
        form: {
          name: "Nom Complet",
          email: "Adresse Email",
          phone: "Numéro de Téléphone",
          date: "Date",
          time: "Heure",
          guests: "Nombre de Convives",
          floor: "Espace",
          floorOptions: {
            gastronomy: "Gastronomie (Étage)",
            fastfood: "Fast Casual (Rez-de-chaussée)"
          },
          specialRequests: "Demandes Spéciales",
          submit: "Confirmer la Réservation"
        },
        success: "Merci ! Votre demande de réservation a été envoyée.",
        orContact: "Ou contactez-nous directement"
      },
      // Footer
      footer: {
        tagline: "Gastronomie au Cœur de Douala",
        rights: "Tous droits réservés",
        followUs: "Suivez-nous"
      }
    }
  }
};

// Detect browser language
const getBrowserLanguage = () => {
  const lang = navigator.language.split('-')[0];
  return ['en', 'fr'].includes(lang) ? lang : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getBrowserLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
