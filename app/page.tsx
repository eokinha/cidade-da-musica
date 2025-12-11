'use client'

import { useState, useEffect } from 'react'
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
    img: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop" 
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

// Dados das estatísticas
const stats = [
  { label: 'Público Total', value: '2.5M+' },
  { label: 'Eventos Realizados', value: '500+' },
  { label: 'Artistas Agenciados', value: '45' },
  { label: 'Países', value: '08' },
]

// Menu items
const menuItems = ['A Agência', 'Festivais', 'Gestão', 'Projetos', 'Contato']

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Efeito de scroll para a navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-all">
              <Music className="w-6 h-6 text-black" />
            </div>
            <span className="font-montserrat font-black text-xl tracking-widest uppercase">
              Cidade da <span className="text-gold-primary">Música</span>
            </span>
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
            <h2 className="font-inter font-bold text-gold-primary tracking-[0.2em] mb-4 text-sm animate-fade-in-up">
              EST. 2010 — WORLDWIDE PRODUCTION
            </h2>
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
              <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 font-montserrat font-bold tracking-widest uppercase text-sm transition-all backdrop-blur-sm flex items-center justify-center rounded-sm hover:border-gold-primary hover:text-gold-primary">
                Showreel 2024
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

      {/* Stats Bar */}
      <div className="bg-dark-navy-secondary border-y border-white/5 py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <h3 className="font-montserrat font-black text-3xl md:text-5xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gold-primary transition-all duration-300">
                {stat.value}
              </h3>
              <p className="font-inter text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Gestão */}
            <div className="group relative p-8 bg-[#222632] border border-white/5 hover:border-gold-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-sm">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-24 h-24 text-gold-primary" />
              </div>
              <div className="w-12 h-12 bg-gold-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-primary transition-colors duration-300">
                <Mic2 className="w-6 h-6 text-gold-primary group-hover:text-black" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl uppercase mb-4 text-white">Gestão & Booking</h3>
              <p className="font-inter text-gray-400 mb-6 leading-relaxed text-sm">
                Representação de artistas de elite e curadoria estratégica de line-ups para garantir o sucesso comercial e artístico do seu evento.
              </p>
              <a href="#" className="inline-flex items-center text-gold-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                Saiba Mais <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Card 2: Festivais (Highlight) */}
            <div className="group relative p-8 bg-[#2A2F3E] border border-gold-primary/30 hover:border-gold-secondary transition-all duration-500 transform md:-translate-y-4 shadow-2xl shadow-yellow-900/20 rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-12 h-12 bg-gold-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-primary transition-colors duration-300">
                <Music className="w-6 h-6 text-gold-primary group-hover:text-black" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl uppercase mb-4 text-white">Produção de Festivais</h3>
              <p className="font-inter text-gray-300 mb-6 leading-relaxed text-sm">
                Do conceito à execução. Palcos gigantescos, iluminação imersiva e logística impecável para multidões de mais de 100 mil pessoas.
              </p>
              <a href="#" className="inline-flex items-center text-gold-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                Ver Portfolio <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Card 3: Projetos Especiais */}
            <div className="group relative p-8 bg-[#222632] border border-white/5 hover:border-gold-secondary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-sm">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Star className="w-24 h-24 text-gold-secondary" />
              </div>
              <div className="w-12 h-12 bg-gold-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-secondary transition-colors duration-300">
                <Calendar className="w-6 h-6 text-gold-secondary group-hover:text-black" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl uppercase mb-4 text-white">Projetos Especiais</h3>
              <p className="font-inter text-gray-400 mb-6 leading-relaxed text-sm">
                Eventos corporativos de alto nível, lançamentos de marcas e experiências VIP personalizadas com o selo de qualidade Cidade da Música.
              </p>
              <a href="#" className="inline-flex items-center text-gold-secondary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                Explorar <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events (Parallax-ish) */}
      <section className="py-24 bg-dark-navy-secondary border-t border-white/5">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="font-montserrat font-black text-4xl md:text-6xl uppercase text-white/5 absolute left-0 right-0 text-center -mt-20 pointer-events-none select-none">
            Highlights
          </h2>
          <div className="flex justify-between items-center relative z-10">
            <h2 className="font-montserrat font-black text-3xl uppercase text-white">
              Próximos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-secondary">Eventos</span>
            </h2>
            <button className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              Agenda Completa <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
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

                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-gold-primary mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{event.location}</span>
                  </div>
                  <h3 className="font-montserrat font-black text-3xl uppercase text-white leading-none mb-2">
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
      <section className="py-16 bg-dark-navy border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="font-inter text-sm text-gray-500 uppercase tracking-[0.3em] mb-10">Marcas que confiam na Cidade da Música</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30">
            <div className="h-8 md:h-12 w-32 bg-white/20 rounded"></div>
            <div className="h-8 md:h-12 w-32 bg-white/20 rounded"></div>
            <div className="h-8 md:h-12 w-32 bg-white/20 rounded"></div>
            <div className="h-8 md:h-12 w-32 bg-white/20 rounded"></div>
            <div className="h-8 md:h-12 w-32 bg-white/20 rounded"></div>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer className="bg-dark-navy-secondary pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
        {/* Glow Effect Amarelo */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gold-primary/10 blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase mb-6">
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
                <a href="mailto:contato@cidademusica.com" className="flex items-center gap-2 text-gold-primary font-bold text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> contato@cidademusica.com
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
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-gold-primary" />
              <span className="font-montserrat font-bold text-lg tracking-widest uppercase">
                Cidade da <span className="text-gold-primary">Música</span>
              </span>
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
