"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-light text-cyan-400 mb-4">
              Hola, Mi Nombre Es
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">
              Camila Sanchez Amaya
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-300">
              Desarrolladora <span className="text-cyan-400">FrontEnd</span>{" "}
              Junior
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-2xl mx-auto mb-10 text-gray-300"
          >
            <p className="text-lg">
              Enfocada en la creación de interfaces dinámicas y accesibles con
              React y Tailwind CSS. Integro Figma en el proceso de diseño para
              prototipar y refinar la experiencia de usuario.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/CV.pdf" 
              download="CV_Camila_Sanchez.pdf" 
              className="bg-cyan-500 hover:bg-cyan-600 flex text-white px-4 py-2 rounded-md"
            >
              <Download className="mr-2 h-4 w-6" /> Descargar CV
            </a>

            <Link href="https://github.com/CamiSan412" target="_blank">
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-400 flex hover:bg-cyan-500/10"
              >
                <Github className="mr-2 h-4 w-6" /> Github
              </Button>
            </Link>

            <Link href="www.linkedin.com/in/milamaya" target="_blank">
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-400 flex hover:bg-cyan-500/10"
              >
                <Linkedin className="mr-2 h-4 w-6" /> LinkedIn
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="text-cyan-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
