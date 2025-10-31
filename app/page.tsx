"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import BeforeAfter from "@/components/before-after"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
