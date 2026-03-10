import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { GA_ID } from '@/lib/constants'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'JM Voyager — Agence de voyages sur mesure',
    template: '%s — JM Voyager',
  },
  description: 'Agence de voyages sur mesure. Créez l\'expérience de voyage authentique qui vous ressemble avec JM Voyager.',
  keywords: ['voyage sur mesure', 'agence de voyage', 'voyage organisé', 'Colombie', 'Vietnam', 'Brésil', 'Afrique du Sud'],
  openGraph: {
    siteName: 'JM Voyager',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-white">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
