import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cidade da Música | Produção de Festivais & Gestão de Eventos',
  description: 'A agência líder em produção de grandes festivais e gestão de eventos noturnos na América Latina. Onde a tecnologia encontra a euforia.',
  keywords: ['festivais', 'eventos', 'música', 'produção', 'gestão de artistas', 'entretenimento'],
  authors: [{ name: 'Cidade da Música' }],
  openGraph: {
    title: 'Cidade da Música | Produção de Festivais & Gestão de Eventos',
    description: 'A agência líder em produção de grandes festivais e gestão de eventos noturnos na América Latina.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-dark-navy text-white font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
