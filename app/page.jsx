import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#0f0f2d] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

