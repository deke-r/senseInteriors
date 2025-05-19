'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import './globals.css'

import { useEffect } from 'react'
import AOS from 'aos'

import Bootstrap from '../libs/Bootstrap'
import Footer from '../components/Footer'
// import TawkToWidget from '@/components/TawkToWidget'

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <Bootstrap />
        {/* <TawkToWidget /> */}
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
