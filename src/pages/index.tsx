import Head from 'next/head'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import EventsSection from '@/components/EventsSection'
import BrandsSection from '@/components/BrandsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cidade da Música | Experiências Lendárias</title>
        <meta
          name="description"
          content="A agência líder em produção de grandes festivais e gestão de eventos noturnos na América Latina."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <EventsSection />
        <BrandsSection />
      </main>
      <Footer />
    </>
  )
}
