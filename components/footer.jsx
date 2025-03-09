import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#080818] py-10 border-t border-cyan-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <Link href="/" className="text-2xl font-bold text-cyan-400 mb-6">
            CS
          </Link>

          <div className="flex space-x-6 mb-8">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">Github</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:camila@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
            
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              Desarrollado por <span className="text-cyan-400">Camila Sanchez</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} - Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

