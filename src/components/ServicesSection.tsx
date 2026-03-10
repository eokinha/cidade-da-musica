import { ArrowRight, Music, Mic2, Users, Calendar, Star } from 'lucide-react'

export default function ServicesSection() {
  return (
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
            Uma abordagem 360º para o entretenimento ao vivo, unindo estratégia corporativa com a
            alma da vida noturna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="group relative p-8 bg-[#222632] border border-white/5 hover:border-gold-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-sm flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users className="w-24 h-24 text-gold-primary" />
            </div>
            <div className="w-12 h-12 bg-gold-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-primary transition-colors duration-300">
              <Mic2 className="w-6 h-6 text-gold-primary group-hover:text-black" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl uppercase mb-4 text-white">
              Gestão & Booking
            </h3>
            <p className="font-inter text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
              Representação de artistas de elite e curadoria estratégica de line-ups para garantir o
              sucesso comercial e artístico do seu evento.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-gold-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors mt-auto"
            >
              Saiba Mais <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="group relative p-8 bg-[#222632] border border-white/5 hover:border-gold-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-sm flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Music className="w-24 h-24 text-gold-primary" />
            </div>
            <div className="w-12 h-12 bg-gold-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-primary transition-colors duration-300">
              <Music className="w-6 h-6 text-gold-primary group-hover:text-black" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl uppercase mb-4 text-white">
              Produção de Festivais
            </h3>
            <p className="font-inter text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
              Do conceito à execução. Palcos gigantescos, iluminação imersiva e logística impecável
              para multidões de mais de 100 mil pessoas.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-gold-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors mt-auto"
            >
              Ver Portfolio <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="group relative p-8 bg-[#222632] border border-white/5 hover:border-gold-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-sm flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Star className="w-24 h-24 text-gold-primary" />
            </div>
            <div className="w-12 h-12 bg-gold-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-primary transition-colors duration-300">
              <Calendar className="w-6 h-6 text-gold-primary group-hover:text-black" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl uppercase mb-4 text-white">
              Projetos Especiais
            </h3>
            <p className="font-inter text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
              Eventos corporativos de alto nível, lançamentos de marcas e experiências VIP
              personalizadas com o selo de qualidade Cidade da Música.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-gold-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors mt-auto"
            >
              Explorar <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
