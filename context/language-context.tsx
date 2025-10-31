"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "hero.title": "Experts en forage et stabilisation",
    "hero.subtitle": "Solutions professionnelles garanties 10 ans",
    "hero.badge": "Solutions d'excellence",
    "hero.cta.quote": "Demander un devis",
    "hero.cta.contact": "Nous contacter",
    "about.title": "À propos de Bâti Forages",
    "about.description":
      "Depuis plus de 20 ans, Bâti Forages est votre partenaire de confiance pour tous vos besoins en forage, réhabilitation de puits et stabilisation de bâtiments.",
    "about.experience": "Expérience",
    "about.warranty": "Garantie décennale",
    "about.insurance": "Assurance complète",
    "services.title": "Nos services",
    "services.drilling": "Forages & Eau",
    "services.drilling.desc": "Nettoyage de puits, Air-lift, Caméra inspection, Rechemisage, Installation pompes",
    "services.stabilization": "Stabilisation bâtiments",
    "services.stabilization.desc": "Micropieux, Longrines béton armé, Traitement fondations, Réparation réseaux",
    "services.maintenance": "Interventions techniques",
    "services.maintenance.desc": "Maintenance, Diagnostic structure, Expertise sinistre sols",
    "services.learn": "En savoir plus",
    "before.title": "Avant / Après",
    "before.desc": "Découvrez nos réalisations et transformations",
    "projects.badge": "Nos Réalisations",
    "projects.title": "Projets Réalisés",
    "projects.subtitle": "Découvrez nos réalisations et nos succès à travers la France",
    "projects.cta": "Vous avez un projet similaire ?",
    "projects.contact": "Nous Contacter",
    "contact.title": "Contactez-nous",
    "contact.name": "Nom",
    "contact.phone": "Téléphone",
    "contact.email": "Email",
    "contact.city": "Ville",
    "contact.project": "Type de projet",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "contact.phone.label": "Téléphone",
    "contact.whatsapp": "WhatsApp",
    "contact.call": "Appel direct",
    "testimonials.title": "Témoignages clients",
    "footer.rights": "Tous droits réservés",
    "footer.legal": "Mentions légales",
    "footer.privacy": "Politique de confidentialité",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Experts in drilling and stabilization",
    "hero.subtitle": "Professional solutions with 10-year warranty",
    "hero.badge": "Excellence Solutions",
    "hero.cta.quote": "Request a quote",
    "hero.cta.contact": "Contact us",
    "about.title": "About Bâti Forages",
    "about.description":
      "For over 20 years, Bâti Forages has been your trusted partner for all your water well drilling, rehabilitation and building stabilization needs.",
    "about.experience": "Experience",
    "about.warranty": "10-Year Warranty",
    "about.insurance": "Full Insurance",
    "services.title": "Our services",
    "services.drilling": "Drilling & Water",
    "services.drilling.desc": "Well cleaning, Air-lift, Camera inspection, Retubing, Pump installation",
    "services.stabilization": "Building stabilization",
    "services.stabilization.desc": "Micropiles, Reinforced concrete beams, Foundation treatment, Network repair",
    "services.maintenance": "Technical interventions",
    "services.maintenance.desc": "Maintenance, Structural diagnosis, Soil damage assessment",
    "services.learn": "Learn more",
    "before.title": "Before / After",
    "before.desc": "Discover our projects and transformations",
    "projects.badge": "Our Projects",
    "projects.title": "Completed Projects",
    "projects.subtitle": "Discover our achievements and successes across France",
    "projects.cta": "Do you have a similar project?",
    "projects.contact": "Contact Us",
    "contact.title": "Contact us",
    "contact.name": "Name",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.city": "City",
    "contact.project": "Project type",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.phone.label": "Phone",
    "contact.whatsapp": "WhatsApp",
    "contact.call": "Call",
    "testimonials.title": "Client testimonials",
    "footer.rights": "All rights reserved",
    "footer.legal": "Legal notice",
    "footer.privacy": "Privacy policy",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["fr"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
