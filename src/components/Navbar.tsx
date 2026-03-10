import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { menuItems } from '@/data/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? 'bg-dark-navy/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <Image
            src="/img/logo.png"
            alt="Cidade da Música"
            width={200}
            height={60}
            className="h-15 w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="font-inter text-sm font-semibold tracking-wider text-gray-300 hover:text-white transition-colors relative group"
            >
              {item.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-6 py-2.5 bg-white text-dark-navy font-montserrat font-bold text-xs tracking-widest uppercase hover:bg-gold-primary hover:text-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-white/10 hover:shadow-yellow-500/50 rounded-sm">
            Fale Conosco
          </button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-navy border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="font-montserrat font-bold text-lg text-gray-300 hover:text-gold-primary"
            >
              {item.toUpperCase()}
            </a>
          ))}
          <button className="mt-2 px-6 py-3 bg-white text-dark-navy font-montserrat font-bold text-sm tracking-widest uppercase hover:bg-gold-primary hover:text-black transition-all rounded-sm">
            Fale Conosco
          </button>
        </div>
      )}
    </header>
  )
}
