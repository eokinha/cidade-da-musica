'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { 
  Menu, 
  X, 
  ArrowRight, 
  Music, 
  Mic2, 
  Users, 
  Calendar, 
  Star, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Twitter 
} from 'lucide-react'

// Dados dos eventos
const events = [
  { 
    title: "Neon Jungle 2025", 
    date: "15 AGO", 
    location: "São Paulo, SP", 
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Tech-No Summit", 
    date: "22 SET", 
    location: "Rio de Janeiro, RJ", 
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Golden Hour Gala", 
    date: "10 OUT", 
    location: "Salvador, BA", 
    img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Electric Dreams", 
    date: "05 NOV", 
    location: "Belo Horizonte, MG", 
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" 
  },
]



// Menu items
const menuItems = ['A Agência', 'Festivais', 'Gestão', 'Projetos', 'Contato']

// Logos das marcas parceiras
const brandLogos = [
  '/img/marcas/image.png',
  '/img/marcas/image (1).png',
  '/img/marcas/image (2).png',
  '/img/marcas/image (3).png',
  '/img/marcas/image (4).png',
  '/img/marcas/image (5).png',
  '/img/marcas/image (7).png',
  '/img/marcas/image (8).png',
  '/img/marcas/image (9).png',
  '/img/marcas/image (10).png',
  '/img/marcas/image (11).png',
  '/img/marcas/image (12).png',
  '/img/marcas/image (13).png',
  '/img/marcas/image (14).png',
  '/img/marcas/image (15).png',
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Refs para o carrossel de marcas (usando refs para valores síncronos)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false) // apenas para UI

  // Refs para o carrossel de eventos
  const eventsCarouselRef = useRef<HTMLDivElement>(null)
  const isEventsDraggingRef = useRef(false)
  const eventsStartXRef = useRef(0)
  const eventsScrollLeftRef = useRef(0)
  const [isEventsDragging, setIsEventsDragging] = useState(false) // apenas para UI

  // Handlers do carrossel de marcas
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    isDraggingRef.current = true
    setIsDragging(true)
    startXRef.current = e.pageX - carouselRef.current.offsetLeft
    scrollLeftRef.current = carouselRef.current.scrollLeft
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startXRef.current) * 2
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return
    isDraggingRef.current = true
    setIsDragging(true)
    startXRef.current = e.touches[0].pageX - carouselRef.current.offsetLeft
    scrollLeftRef.current = carouselRef.current.scrollLeft
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !carouselRef.current) return
    e.preventDefault()
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startXRef.current) * 2
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk
  }

  // Handlers do carrossel de eventos
  const handleEventsMouseDown = (e: React.MouseEvent) => {
    if (!eventsCarouselRef.current) return
    isEventsDraggingRef.current = true
    setIsEventsDragging(true)
    eventsStartXRef.current = e.pageX - eventsCarouselRef.current.offsetLeft
    eventsScrollLeftRef.current = eventsCarouselRef.current.scrollLeft
  }

  const handleEventsMouseUp = () => {
    isEventsDraggingRef.current = false
    setIsEventsDragging(false)
  }

  const handleEventsMouseMove = (e: React.MouseEvent) => {
    if (!isEventsDraggingRef.current || !eventsCarouselRef.current) return
    e.preventDefault()
    const x = e.pageX - eventsCarouselRef.current.offsetLeft
    const walk = (x - eventsStartXRef.current) * 2
    eventsCarouselRef.current.scrollLeft = eventsScrollLeftRef.current - walk
  }

  const handleEventsTouchStart = (e: React.TouchEvent) => {
    if (!eventsCarouselRef.current) return
    isEventsDraggingRef.current = true
    setIsEventsDragging(true)
    eventsStartXRef.current = e.touches[0].pageX - eventsCarouselRef.current.offsetLeft
    eventsScrollLeftRef.current = eventsCarouselRef.current.scrollLeft
  }

  const handleEventsTouchMove = (e: React.TouchEvent) => {
    if (!isEventsDraggingRef.current || !eventsCarouselRef.current) return
    e.preventDefault()
    const x = e.touches[0].pageX - eventsCarouselRef.current.offsetLeft
    const walk = (x - eventsStartXRef.current) * 2
    eventsCarouselRef.current.scrollLeft = eventsScrollLeftRef.current - walk
  }

  // Efeito de scroll para a navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-scroll do carrossel de marcas (usando scrollLeft para consistência com drag)
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId: number
    let lastTime = 0
    const speed = 0.5 // pixels por frame

    const animate = (currentTime: number) => {
      if (!isDraggingRef.current && carousel) {
        if (lastTime !== 0) {
          const delta = currentTime - lastTime
          carousel.scrollLeft += speed * (delta / 16) // normalizado para ~60fps
          
          // Reset quando chegar na metade (loop infinito)
          if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0
          }
        }
        lastTime = currentTime
      } else {
        lastTime = 0
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="min-h-screen bg-dark-navy text-white font-inter selection:bg-gold-primary selection:text-black">
      {/* Navbar */}
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
              width={180} 
              height={60} 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" 
            alt="Festival Crowd with Lasers" 
            fill
            className="object-cover grayscale brightness-75 contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/90 via-transparent to-dark-navy/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl">
            <h1 className="font-montserrat font-black text-5xl md:text-7xl lg:text-8xl leading-tight uppercase mb-6 drop-shadow-2xl">
              Criando <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Experiências</span> <br />
              <span className="text-gradient-primary">Lendárias</span>
            </h1>
            <p className="font-inter text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed border-l-2 border-gold-primary pl-6">
              A agência líder em produção de grandes festivais e gestão de eventos noturnos na América Latina. Onde a tecnologia encontra a euforia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-secondary text-black font-montserrat font-bold tracking-widest uppercase text-sm hover:from-gold-secondary hover:to-gold-dark transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2 rounded-sm">
                Ver Projetos <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
          <span className="text-[10px] uppercase tracking-widest mb-2 font-inter text-gray-400">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-primary to-transparent"></div>
        </div>
      </section>

      {/* Modular Services Section */}
      <section className="py-24 bg-dark-navy relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-primary/5 blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase mb-2">
                Nossa <span className="text-gradient-primary">Expertise</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-gold-primary to-transparent"></div>
            </div>
            <p className="font-inter text-gray-400 max-w-md text-right mt-6 md:mt-0">
              Uma abordagem 360º para o entretenimento ao vivo, unindo estratégia corporativa com a alma da vida noturna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Gestão */}
            <div className="group relative p-8 bg-[#222632] border border-white/5 hover:border-gold-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-sm flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-24 h-24 text-gold-primary" />
              </div>
              <div className="w-12 h-12 bg-gold-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-primary transition-colors duration-300">
                <Mic2 className="w-6 h-6 text-gold-primary group-hover:text-black" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl uppercase mb-4 text-white">Gestão & Booking</h3>
              <p className="font-inter text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
                Representação de artistas de elite e curadoria estratégica de line-ups para garantir o sucesso comercial e artístico do seu evento.
              </p>
              <a href="#" className="inline-flex items-center text-gold-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors mt-auto">
                Saiba Mais <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Card 2: Festivais */}
            <div className="group relative p-8 bg-[#222632] border border-white/5 hover:border-gold-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-sm flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Music className="w-24 h-24 text-gold-primary" />
              </div>
              <div className="w-12 h-12 bg-gold-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-primary transition-colors duration-300">
                <Music className="w-6 h-6 text-gold-primary group-hover:text-black" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl uppercase mb-4 text-white">Produção de Festivais</h3>
              <p className="font-inter text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
                Do conceito à execução. Palcos gigantescos, iluminação imersiva e logística impecável para multidões de mais de 100 mil pessoas.
              </p>
              <a href="#" className="inline-flex items-center text-gold-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors mt-auto">
                Ver Portfolio <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Card 3: Projetos Especiais */}
            <div className="group relative p-8 bg-[#222632] border border-white/5 hover:border-gold-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-sm flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Star className="w-24 h-24 text-gold-primary" />
              </div>
              <div className="w-12 h-12 bg-gold-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-primary transition-colors duration-300">
                <Calendar className="w-6 h-6 text-gold-primary group-hover:text-black" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl uppercase mb-4 text-white">Projetos Especiais</h3>
              <p className="font-inter text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
                Eventos corporativos de alto nível, lançamentos de marcas e experiências VIP personalizadas com o selo de qualidade Cidade da Música.
              </p>
              <a href="#" className="inline-flex items-center text-gold-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors mt-auto">
                Explorar <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events (Parallax-ish) */}
      <section className="py-24 bg-dark-navy-secondary border-t border-white/5">
        <div className="container mx-auto px-6 mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white">
              Próximos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-secondary">Eventos</span>
            </h2>
            <button className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              Agenda Completa <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div 
          ref={eventsCarouselRef}
          className={`w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab ${isEventsDragging ? 'cursor-grabbing select-none' : ''}`}
          onMouseDown={handleEventsMouseDown}
          onMouseUp={handleEventsMouseUp}
          onMouseLeave={handleEventsMouseUp}
          onMouseMove={handleEventsMouseMove}
          onTouchStart={handleEventsTouchStart}
          onTouchEnd={handleEventsMouseUp}
          onTouchMove={handleEventsTouchMove}
        >
          <div className="flex px-6 gap-6 w-max">
            {events.map((event, i) => (
              <div key={i} className="relative w-[300px] md:w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-sm">
                <Image 
                  src={event.img} 
                  alt={event.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                
                <div className="absolute top-6 right-6 bg-dark-navy/80 backdrop-blur-md px-4 py-2 border border-white/10 group-hover:border-gold-primary transition-colors">
                  <span className="block font-montserrat font-bold text-center text-white group-hover:text-gold-primary transition-colors">{event.date.split(' ')[0]}</span>
                  <span className="block font-inter text-xs text-center text-gray-300 uppercase">{event.date.split(' ')[1]}</span>
                </div>

                <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-gold-primary mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{event.location}</span>
                  </div>
                  <h3 className="font-montserrat font-black text-2xl md:text-3xl uppercase text-white leading-none mb-2">
                    {event.title}
                  </h3>
                  <div className="h-1 w-0 bg-gradient-to-r from-gold-primary to-gold-secondary group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands / Partners Section */}
      <section className="py-12 md:py-16 bg-dark-navy border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-8 md:mb-10">
          <p className="font-inter text-xs sm:text-sm text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Marcas que confiam na Cidade da Música</p>
        </div>
        <div 
          ref={carouselRef}
          className={`relative w-full overflow-x-auto hide-scrollbar cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          <div className="flex gap-8 w-max px-6">
            {[...brandLogos, ...brandLogos].map((logo, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 h-20 w-44 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 select-none"
              >
                <Image 
                  src={logo} 
                  alt={`Marca parceira ${idx + 1}`} 
                  width={176} 
                  height={80} 
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer className="bg-dark-navy-secondary pt-16 md:pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
        {/* Glow Effect Amarelo */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gold-primary/10 blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-20">
            <div>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl uppercase mb-6">
                Vamos criar algo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-secondary">Extraordinário?</span>
              </h2>
              <p className="font-inter text-gray-400 max-w-md mb-8">
                Entre em contato para discutir seu próximo grande festival ou ativação de marca. Nossa equipe está pronta para transformar visão em realidade.
              </p>
              <button className="px-8 py-4 bg-white text-dark-navy font-montserrat font-bold tracking-widest uppercase hover:bg-gold-primary hover:text-black transition-colors shadow-lg shadow-white/5 rounded-sm">
                Iniciar Projeto
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-montserrat font-bold text-white uppercase mb-4 tracking-wider">Escritório</h4>
                <p className="font-inter text-gray-400 text-sm leading-relaxed mb-4">
                  Av. Paulista, 1000 - Cobertura<br />
                  São Paulo, SP - Brasil
                </p>
                <a href="mailto:contato@cidadedamusica.com.br" className="flex items-center gap-2 text-gold-primary font-bold text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> contato@cidadedamusica.com.br
                </a>
              </div>
              
              <div>
                <h4 className="font-montserrat font-bold text-white uppercase mb-4 tracking-wider">Social</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:border-gold-primary hover:bg-gold-primary transition-all rounded-full">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:border-gold-primary hover:bg-gold-primary transition-all rounded-full">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:border-gold-primary hover:bg-gold-primary transition-all rounded-full">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Image 
                src="/img/logo.png" 
                alt="Cidade da Música" 
                width={150} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="font-inter text-xs text-gray-600 uppercase tracking-wider">
              © 2024 Cidade da Música. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-inter text-xs text-gray-600 hover:text-white uppercase">Privacidade</a>
              <a href="#" className="font-inter text-xs text-gray-600 hover:text-white uppercase">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
