"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="sobre-mí" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Sobre Mí</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-4 border-cyan-400">
              <Image
                src="/Foto.png"
                alt="Camila Sanchez Amaya"
                width={600}
                height={600}
                className="m-2"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl z-0"></div>
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-purple-400/20 rounded-full blur-xl z-0"></div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300"
          >
            <p className="mb-4 text-lg">
              Soy Ingeniera de Sistemas con 2 años de experiencia emergente en desarrollo frontend y diseño UX/UI.
              Durante este tiempo, he adquirido competencias en tecnologías modernas como React, Tailwind CSS y
              herramientas de diseño como Figma, lo que me ha permitido participar en diversos proyectos y consolidar
              mis habilidades técnicas y creativas.
            </p>
            <p className="mb-4 text-lg">
              Mi formación y experiencia en el desarrollo de aplicaciones web me han llevado a comprender la importancia
              de crear interfaces intuitivas, accesibles y centradas en el usuario. He trabajado en proyectos que
              requieren no solo conocimientos técnicos, sino también un enfoque en la usabilidad y el rendimiento.
            </p>
            <p className="mb-6 text-lg">
              Actualmente, busco oportunidades que me permitan continuar mi crecimiento profesional, enfrentar nuevos
              retos y profundizar mis conocimientos en programación y diseño.
            </p>

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}

