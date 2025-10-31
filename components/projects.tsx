"use client"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"

export default function Projects() {
  const { t, language } = useLanguage()

  const projects = [
    {
      id: 1,
      titleFr: "Forage Profond - Région Île-de-France",
      titleEn: "Deep Well Drilling - Île-de-France Region",
      descriptionFr: "Forage de 150m pour alimentation en eau potable d'une commune",
      descriptionEn: "150m deep well drilling for drinking water supply",
      locationFr: "Île-de-France",
      locationEn: "Île-de-France",
      year: "2024",
      image: "/deep-water-well-drilling-professional.jpg",
      category: "Forage",
    },
    {
      id: 2,
      titleFr: "Réhabilitation de Puits - Bourgogne",
      titleEn: "Well Rehabilitation - Burgundy",
      descriptionFr: "Réhabilitation complète d'un puits ancien avec nettoyage et traitement",
      descriptionEn: "Complete rehabilitation of an old well with cleaning and treatment",
      locationFr: "Bourgogne",
      locationEn: "Burgundy",
      year: "2024",
      image: "/well-rehabilitation-maintenance-water.jpg",
      category: "Réhabilitation",
    },
    {
      id: 3,
      titleFr: "Stabilisation de Bâtiment - Paris",
      titleEn: "Building Stabilization - Paris",
      descriptionFr: "Stabilisation de fondations d'un immeuble haussmannien",
      descriptionEn: "Foundation stabilization of a Haussmann building",
      locationFr: "Paris",
      locationEn: "Paris",
      year: "2023",
      image: "/building-foundation-stabilization-construction.jpg",
      category: "Stabilisation",
    },
    {
      id: 4,
      titleFr: "Forage Agricole - Normandie",
      titleEn: "Agricultural Well - Normandy",
      descriptionFr: "Forage pour irrigation agricole avec pompage haute capacité",
      descriptionEn: "Agricultural well for irrigation with high-capacity pumping",
      locationFr: "Normandie",
      locationEn: "Normandy",
      year: "2023",
      image: "/agricultural-irrigation-well-drilling.jpg",
      category: "Agricole",
    },
    {
      id: 5,
      titleFr: "Diagnostic Géotechnique - Lyon",
      titleEn: "Geotechnical Survey - Lyon",
      descriptionFr: "Étude géotechnique complète pour projet de construction",
      descriptionEn: "Complete geotechnical survey for construction project",
      locationFr: "Lyon",
      locationEn: "Lyon",
      year: "2023",
      image: "/geotechnical-survey-drilling-analysis.jpg",
      category: "Diagnostic",
    },
    {
      id: 6,
      titleFr: "Forage Géothermie - Provence",
      titleEn: "Geothermal Drilling - Provence",
      descriptionFr: "Forage géothermique pour chauffage écologique",
      descriptionEn: "Geothermal drilling for eco-friendly heating",
      locationFr: "Provence",
      locationEn: "Provence",
      year: "2023",
      image: "/geothermal-drilling-renewable-energy.jpg",
      category: "Géothermie",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-slate-50 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">{t("projects.badge") || "Nos Réalisations"}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("projects.title") || "Projets Réalisés"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle") || "Découvrez nos réalisations et nos succès à travers la France"}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={language === "fr" ? project.titleFr : project.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {language === "fr" ? project.titleFr : project.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {language === "fr" ? project.descriptionFr : project.descriptionEn}
                </p>

                {/* Meta Information */}
                <div className="flex flex-col gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    <span>{language === "fr" ? project.locationFr : project.locationEn}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">{t("projects.cta") || "Vous avez un projet similaire ?"}</p>
          <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            {t("projects.contact") || "Nous Contacter"}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
