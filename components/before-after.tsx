"use client"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { useState } from "react"

export default function BeforeAfter() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const projects = [
    {
      before: "/cracked-foundation-before-repair.jpg",
      after: "/repaired-foundation-after-stabilization.jpg",
      title: "Stabilisation fondations",
    },
    {
      before: "/damaged-well-before-rehabilitation.jpg",
      after: "/rehabilitated-well-after-cleaning.jpg",
      title: "Réhabilitation puits",
    },
    {
      before: "/damaged-building-before-micropiles.jpg",
      after: "/reinforced-building-after-micropiles.jpg",
      title: "Installation micropieux",
    },
  ]

  return (
    <section id="before-after" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("before.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("before.desc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
              <img
                src={projects[activeIndex].before || "/placeholder.svg"}
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-primary">Avant</div>
              </div>
            </div>
          </motion.div>

          {/* After Image & Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg h-96 mb-8">
              <img
                src={projects[activeIndex].after || "/placeholder.svg"}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-primary">Après</div>
              </div>
            </div>

            {/* Project Selector */}
            <div className="space-y-3">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full p-4 rounded-lg text-left transition ${
                    activeIndex === index ? "bg-primary text-white" : "bg-slate-100 text-foreground hover:bg-slate-200"
                  }`}
                >
                  <h4 className="font-semibold">{project.title}</h4>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
