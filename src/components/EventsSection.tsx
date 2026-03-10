import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { events } from '@/data/events'

export default function EventsSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

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

  return (
    <section className="py-24 bg-dark-navy-secondary border-t border-white/5">
      <div className="container mx-auto px-6 mb-8 md:mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white">
            Próximos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-secondary">
              Eventos
            </span>
          </h2>
          <button className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
            Agenda Completa <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className={`w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab ${isDragging ? 'cursor-grabbing select-none' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        <div className="flex px-6 gap-6 w-max">
          {events.map((event, i) => (
            <div
              key={i}
              className="relative w-[300px] md:w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-sm"
            >
              <Image
                src={event.img}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>

              <div className="absolute top-6 right-6 bg-dark-navy/80 backdrop-blur-md px-4 py-2 border border-white/10 group-hover:border-gold-primary transition-colors">
                <span className="block font-montserrat font-bold text-center text-white group-hover:text-gold-primary transition-colors">
                  {event.date.split(' ')[0]}
                </span>
                <span className="block font-inter text-xs text-center text-gray-300 uppercase">
                  {event.date.split(' ')[1]}
                </span>
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
  )
}
