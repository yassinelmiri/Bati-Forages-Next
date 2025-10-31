"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=professional construction site drilling equipment water well industrial)",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Modern gradient overlay with better depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/50"></div>
        {/* Additional subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
            {t("hero.badge") || "Solutions d'excellence"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-slate-100 font-semibold px-8 py-6 text-base group"
          >
            {t("hero.cta.quote")}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base bg-transparent"
          >
            {t("hero.cta.contact")}
          </Button>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white"
        >
          <a href="tel:+33954913571" className="flex items-center gap-3 hover:text-slate-200 transition group">
            <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition">
              <Phone size={20} />
            </div>
            <span className="font-medium">09 54 91 35 71</span>
          </a>
          <a
            href="https://wa.me/33610516605"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-slate-200 transition group"
          >
            <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition">
              <MessageCircle size={20} />
            </div>
            <span className="font-medium">WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
