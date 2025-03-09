"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Layout, FileCode, Palette, Figma, Layers, Globe } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: "HTML", icon: <FileCode className="h-8 w-8" />, level: 90 },
    { name: "CSS", icon: <Layout className="h-8 w-8" />, level: 85 },
    { name: "JavaScript", icon: <Code className="h-8 w-8" />, level: 80 },
    { name: "React", icon: <Layers className="h-8 w-8" />, level: 85 },
    { name: "Tailwind CSS", icon: <Palette className="h-8 w-8" />, level: 90 },
    { name: "Figma", icon: <Figma className="h-8 w-8" />, level: 75 },
    { name: "WordPress", icon: <Globe className="h-8 w-8" />, level: 75 }    
  ]

  return (
    <section id="habilidades" className="py-20 bg-[#080818]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Habilidades</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0c0c24] p-6 rounded-xl border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 mr-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>

              {/* <div className="w-full bg-gray-700/30 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
                ></motion.div>
              </div> */}
              {/* <div className="mt-2 text-right text-sm text-gray-400">{skill.level}%</div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

