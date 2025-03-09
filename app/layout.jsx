import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Camila Sanchez Amaya | Desarrolladora Frontend",
  description:
    "Portafolio profesional de Camila Sanchez Amaya, Desarrolladora Frontend especializada en React y Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'