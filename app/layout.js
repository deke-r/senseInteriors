'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import './globals.css'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AOS from 'aos'

import Bootstrap from '../libs/Bootstrap'
import Footer from '../components/Footer'
import TawkToWidget from '@/components/TawkToWidget'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  // Hide footer for ad page
  const shouldShowFooter = pathname !== '/interior-consultation' && pathname !== '/thank-you'

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5DGFVS83');`,
          }}
        />
      </head>
      <body className="d-flex flex-column min-vh-100">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DGFVS83"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Bootstrap />
        <TawkToWidget />
        <WhatsAppButton />
        <main className="flex-grow-1">{children}</main>
        {shouldShowFooter && <Footer />}
      </body>
    </html>
  )
}
