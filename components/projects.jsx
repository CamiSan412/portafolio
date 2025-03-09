"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Juego creado con HTML y JavaScript",
      description:
        "Challenge Oracle - Un juego interactivo desarrollado con HTML y JavaScript que demuestra mis habilidades en programación frontend y lógica de juego.",
      image: "/Juego.png",
      repo: "https://github.com/CamiSan412/Juego.git",
      demo: "#",
      category: "javascript",
    },
    {
      id: 2,
      title: "Pagina Pomodoro",
      description:
        "Una aplicación web de temporizador Pomodoro desarrollada con HTML, CSS y JavaScript. Incluye una interfaz amigable y un contador dinámico.",
      image: "/Fokus.png",
      repo: "https://github.com/CamiSan412/fokus.git",
      demo: "https://tubular-mochi-7d1cda.netlify.app/",
      category: "javascript",
    },
    {
      id: 3,
      title: "Validación de formulario con JavaScript",
      description:
        "Challenge Oracle - Implementación de validación de formularios utilizando JavaScript puro, con feedback en tiempo real y manejo de errores.",
      image: "/Alura_Banck.png",
      repo: "https://github.com/CamiSan412/alura_banc.git",
      demo: "https://hilarious-sherbet-a2f4c3.netlify.app/",
      category: "javascript",
    },    
    {
      id: 4,
      title: "Aplicación React con Tailwind",
      description:
        "Este proyecto es una aplicación web creada con React y Tailwind CSS para gestionar una lista de videos. Permite agregar, editar y eliminar videos, con datos obtenidos desde una API local. Fue desarrollado con el objetivo de conocer los fundamentos de React, el manejo del estado con Hooks y la interacción con una API.",
      image: "/Aluraflix.png",
      repo: "https://github.com/CamiSan412/aluraFlix.git",
      demo: "https://flixproyect.netlify.app/",
      category: "react",
    },
    {
      id: 5,
      title: "Diseño UX/UI en Figma - Mafa",
      description:
        "MAFA es un prototipo de aplicación móvil diseñado para optimizar la planificación de eventos, ofreciendo una experiencia más intuitiva y eficiente. Su objetivo es facilitar a los usuarios la organización de cada detalle de su evento, brindando a los asesores información clave de manera estructurada y accesible. Esto permite mejorar la comunicación y agilizar el proceso de planificación, garantizando una mejor experiencia tanto para clientes como para organizadores.",
      image: "/Mafa.png",
      repo: "https://www.figma.com/design/2g2rgIgEoek715y7oUmqS0/Mafa?node-id=0-1&t=53oT24w0X7P2o0NM-1 ",
      demo: " https://www.figma.com/proto/2g2rgIgEoek715y7oUmqS0/Mafa?page-id=0%3A1&node-id=1-2&p=f&viewport=633%2C591%2C0.1&t=2wZ2yfGJcY4izQWd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1 ",
      category: "design",
    },
    {
      id: 6,
      title: "Diseño UX/UI en Figma - Sistema Bascula", 
      description:
        "Este diseño de aplicación de escritorio está enfocado en mejorar el rendimiento y la usabilidad del sistema de báscula, optimizando tanto la velocidad de procesamiento como la interfaz de usuario. La nueva propuesta busca una experiencia más intuitiva y moderna, facilitando el registro, monitoreo y gestión del pesaje con mayor precisión y eficiencia.",
      image: "/SisBascula.png",
      repo: "https://www.figma.com/design/sKm8Xf5K5FvW4VZ1SWk6gZ/Prototipo-Sistema?node-id=0-1&t=o9JnidaoB63KMJYI-1",
      demo: "https://www.figma.com/proto/sKm8Xf5K5FvW4VZ1SWk6gZ/Prototipo-Sistema?page-id=0%3A1&node-id=1-75&p=f&viewport=277%2C284%2C0.25&t=apalqEWPL87cfx8X-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A528 ",
      category: "design",
    }
    
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}          
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Proyectos</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {["all", "javascript", "react", "design"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                onClick={() => setActiveTab(tab)}
                className={`
                  capitalize 
                  ${
                    activeTab === tab
                      ? "bg-cyan-500 hover:bg-cyan-600"
                      : "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  }
                `}
              >
                {tab === "all" ? "Todos" : tab}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={ref}              
              className="bg-[#0c0c24] rounded-xl overflow-hidden border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <Link href={project.repo} target="_blank">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-500 flex h-8 text-cyan-400 hover:bg-cyan-500/10"
                      >
                        <Github className="mr-2 h-4 w-4" /> Repositorio
                      </Button>
                    </Link>
                    <Link href={project.demo} target="_blank">
                      <Button size="sm" className="bg-cyan-500 flex h-8 hover:bg-cyan-600">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.category === "javascript" && (
                    <>
                      <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 text-xs rounded-full bg-orange-500/20 text-orange-400">HTML</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">CSS</span>
                    </>
                  )}
                  {project.category === "react" && (
                    <>
                      <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">React</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400">Tailwind</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
                        JavaScript
                      </span>
                    </>
                  )}
                  {project.category === "design" && (
                    <>
                      <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400">Figma</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-pink-500/20 text-pink-400">UX/UI</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

