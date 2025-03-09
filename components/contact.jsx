"use client"
import emailjs from "emailjs-com";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
        "service_58yqiq6", // Reemplaza con tu Service ID
        "template_wfd05ca", // Reemplaza con tu Template ID
        formData,
        "YUnR0vaMEJtZP1p9z" // Reemplaza con tu Public Key de EmailJS
    )
    .then(() => {
        alert("Correo enviado con éxito 🚀");
        setFormData({ nombre: "", email: "", mensaje: "" }); // Resetea el formulario
    })
    .catch((error) => {
        console.error("Error enviando el correo:", error);
    });
};


  return (
    <section id="contacto" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Contacto</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
            <p className="text-gray-300 mb-8">
              ¿Tienes alguna pregunta o propuesta? No dudes en contactarme. Estaré encantada de escuchar tus ideas y
              responder a tus consultas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-300">camilasanchezamaya@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Teléfono</h4>
                  <p className="text-gray-300">+57 321 493 2409</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Ubicación</h4>
                  <p className="text-gray-300">Boyacá, Colombia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#0c0c24] p-8 rounded-xl border border-cyan-900/30">
              <div className="grid grid-cols-1 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="bg-[#080818] border-cyan-900/50 focus:border-cyan-500"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="bg-[#080818] border-cyan-900/50 focus:border-cyan-500"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto del mensaje"
                    required
                    className="bg-[#080818] border-cyan-900/50 focus:border-cyan-500"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                    className="bg-[#080818] border-cyan-900/50 focus:border-cyan-500"
                  />
                </div>

                <Button type="submit" className="w-full bg-cyan-500 flex hover:bg-cyan-600">
                  <Send className="mr-2 h-4 w-4" /> Enviar 
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

