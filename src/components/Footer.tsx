import Image from 'next/image'
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-navy-secondary pt-16 md:pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gold-primary/10 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-20">
          <div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl uppercase mb-6">
              Vamos criar algo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-secondary">
                Extraordinário?
              </span>
            </h2>
            <p className="font-inter text-gray-400 max-w-md mb-8">
              Entre em contato para discutir seu próximo grande festival ou ativação de marca. Nossa
              equipe está pronta para transformar visão em realidade.
            </p>
            <button className="px-8 py-4 bg-white text-dark-navy font-montserrat font-bold tracking-widest uppercase hover:bg-gold-primary hover:text-black transition-colors shadow-lg shadow-white/5 rounded-sm">
              Iniciar Projeto
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-montserrat font-bold text-white uppercase mb-4 tracking-wider">
                Escritório
              </h4>
              <p className="font-inter text-gray-400 text-sm leading-relaxed mb-4">
                Av. Paulista, 1000 - Cobertura
                <br />
                São Paulo, SP - Brasil
              </p>
              <a
                href="mailto:contato@cidadedamusica.com.br"
                className="flex items-center gap-2 text-gold-primary font-bold text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" /> contato@cidadedamusica.com.br
              </a>
            </div>

            <div>
              <h4 className="font-montserrat font-bold text-white uppercase mb-4 tracking-wider">
                Social
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:border-gold-primary hover:bg-gold-primary transition-all rounded-full"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:border-gold-primary hover:bg-gold-primary transition-all rounded-full"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:border-gold-primary hover:bg-gold-primary transition-all rounded-full"
                >
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
              width={200}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="font-inter text-xs text-gray-600 uppercase tracking-wider">
            © 2024 Cidade da Música. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-inter text-xs text-gray-600 hover:text-white uppercase">
              Privacidade
            </a>
            <a href="#" className="font-inter text-xs text-gray-600 hover:text-white uppercase">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
