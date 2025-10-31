"use client"

import { useLanguage } from "@/context/language-context"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=560x10000:format=jpg/path/s3b088fbcd26b6494/image/iab8eca74835d72e3/version/1625757476/image.jpg" 
              alt="Bâti Forages Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg"
            />
            <span className="font-bold text-lg text-primary hidden sm:inline">Bâti Forages</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition">
              {t("nav.home")}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition">
              {t("nav.about")}
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition">
              {t("nav.services")}
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition">
              {t("nav.projects")}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              {t("nav.contact")}
            </a>
          </nav>

          {/* Language & CTA */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("fr")}
                className={`px-3 py-1 rounded text-sm font-medium transition ${
                  language === "fr" ? "bg-primary text-white" : "text-foreground hover:bg-slate-100"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition ${
                  language === "en" ? "bg-primary text-white" : "text-foreground hover:bg-slate-100"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.services")}
            </a>
            <a 
              href="#projects" 
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.projects")}
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}