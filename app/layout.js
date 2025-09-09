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
      <body className="d-flex flex-column min-vh-100">
        <Bootstrap />
        <TawkToWidget />
        <WhatsAppButton/>
        <main className="flex-grow-1">{children}</main>
        {shouldShowFooter && <Footer />}
      </body>
    </html>
  )
}
