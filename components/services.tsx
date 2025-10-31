"use client"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { Droplet, Building2, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Droplet,
      title: t("services.drilling"),
      description: t("services.drilling.desc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Building2,
      title: t("services.stabilization"),
      description: t("services.stabilization.desc"),
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: Wrench,
      title: t("services.maintenance"),
      description: t("services.maintenance.desc"),
      color: "from-primary to-primary/80",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("services.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <Icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    {t("services.learn")}
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
