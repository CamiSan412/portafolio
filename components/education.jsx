"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      id: 1,
      period: "2017 - 2019",
      institution: "SENA",
      title: "Mantenimiento de Equipos de Computo, Diseño e Instalación de Cableado Estructurado",
      description: "Formación técnica en mantenimiento de equipos y redes.",
    },
    {
      id: 2,
      period: "2019 - 2022",
      institution: "Fundación Universitaria Área ANDINA",
      title: "Ingeniería de Sistemas",
      description: "Formación profesional en ingeniería de sistemas con enfoque en desarrollo de software.",
    },
    
    {
      id: 4,
      period: "2024",
      institution: "Alura",
      title: "Formaciones en Programación y Front End",
      description: "Cursos especializados en desarrollo frontend con enfoque en tecnologías modernas.",
    },
  ]

  return (
    <section id="formación" className="py-20 bg-[#080818]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Formación Académica</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-cyan-500/30"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 md:pl-0 pl-8">
                  <div className={`w-full md:max-w-md ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="flex items-center mb-2 justify-start md:justify-end">
                      <Calendar className="h-4 w-4 text-cyan-400 mr-2" />
                      <span className="text-cyan-400">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.institution}</h3>
                    <h4 className="text-lg font-medium text-gray-300 mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center z-10">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8 md:pr-0 pl-8">
                  <div className={`w-full md:max-w-md ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    {/* Empty div for layout purposes */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

