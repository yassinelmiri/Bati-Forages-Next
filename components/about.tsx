"use client"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { CheckCircle, Award, Shield } from "lucide-react"

export default function About() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Award,
      title: t("about.experience"),
      description: "20+ ans d'expertise",
    },
    {
      icon: Shield,
      title: t("about.warranty"),
      description: "Garantie décennale",
    },
    {
      icon: CheckCircle,
      title: t("about.insurance"),
      description: "Assurance complète",
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("about.description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
