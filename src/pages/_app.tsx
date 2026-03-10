import type { AppProps } from 'next/app'
import { Inter, Montserrat } from 'next/font/google'
import '@/styles/globals.css'

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${montserrat.variable} min-h-screen bg-dark-navy text-white font-inter antialiased`}>
      <Component {...pageProps} />
    </div>
  )
}
