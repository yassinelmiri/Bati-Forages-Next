"use client"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Jean Dupont",
      company: "Entreprise de construction",
      text: "Professionnalisme et expertise remarquables. Travail de qualité et respect des délais.",
      rating: 5,
    },
    {
      name: "Marie Laurent",
      company: "Propriétaire",
      text: "Équipe très compétente. Ils ont résolu nos problèmes de fondation avec efficacité.",
      rating: 5,
    },
    {
      name: "Pierre Martin",
      company: "Syndic de copropriété",
      text: "Service impeccable et garantie décennale qui nous rassure. À recommander vivement.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("testimonials.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
