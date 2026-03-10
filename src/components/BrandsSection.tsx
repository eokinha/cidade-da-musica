import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { brandLogos } from '@/data/brands'

export default function BrandsSection() {
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

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId: number
    let lastTime = 0
    const speed = 0.5

    const animate = (currentTime: number) => {
      if (!isDraggingRef.current && carousel) {
        if (lastTime !== 0) {
          const delta = currentTime - lastTime
          const cappedDelta = Math.min(delta, 100)
          carousel.scrollLeft += speed * (cappedDelta / 16)

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
    <section className="py-12 md:py-16 bg-dark-navy border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8 md:mb-10">
        <p className="font-inter text-xs sm:text-sm text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
          Marcas que confiam na Cidade da Música
        </p>
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
  )
}
