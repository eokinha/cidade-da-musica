import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Experiências
            </span>{' '}
            <br />
            <span className="text-gradient-primary">Lendárias</span>
          </h1>
          <p className="font-inter text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed border-l-2 border-gold-primary pl-6">
            A agência líder em produção de grandes festivais e gestão de eventos noturnos na América
            Latina. Onde a tecnologia encontra a euforia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-secondary text-black font-montserrat font-bold tracking-widest uppercase text-sm hover:from-gold-secondary hover:to-gold-dark transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2 rounded-sm">
              Ver Projetos <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-[10px] uppercase tracking-widest mb-2 font-inter text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-primary to-transparent"></div>
      </div>
    </section>
  )
}
