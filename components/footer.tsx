"use client"

import { useLanguage } from "@/context/language-context"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BF</span>
              </div>
              <span className="font-bold text-lg">Bâti Forages</span>
            </div>
            <p className="text-slate-400 text-sm">Experts en forage et stabilisation de bâtiments</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Forages & Eau
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Stabilisation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  {t("footer.legal")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t("footer.privacy")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm">
            <p>
              &copy; {currentYear} Bâti Forages. {t("footer.rights")}.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="tel:+33954913571" className="hover:text-white transition">
                09 54 91 35 71
              </a>
              <a href="mailto:batiforages@gmail.com" className="hover:text-white transition">
                batiforages@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
