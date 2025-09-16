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
        
           {/* Google Ads Global site tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11256277555"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11256277555');
            `,
          }}
        />
        
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InteriorDesignService",
              "name": "Sense Interiors",
              "url": "https://senseinteriors.in",
              "logo": "https://senseinteriors.in/images/logo.png",
              "image": "https://senseinteriors.in/images/office-interior.jpg",
              "description": "Sense Interiors offers premier interior design, architecture, and turnkey project solutions with expert consultancy across Delhi NCR.",
              "slogan": "Luxury Interiors | Turnkey Solutions | Architectural Excellence",
              "telephone": "+91-9821995637",
              "email": "info@senseinteriors.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-123, Sector 63",
                "addressLocality": "Noida",
                "addressRegion": "Delhi NCR",
                "postalCode": "201301",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.6280",
                "longitude": "77.3649"
              },
              "areaServed": ["Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad", "NCR"],
              "priceRange": "₹₹₹",
              "openingHours": ["Mo-Sa 10:00-19:00"],
              "sameAs": [
                "https://www.facebook.com/senseinteriors",
                "https://www.instagram.com/senseinteriors",
                "https://www.linkedin.com/company/senseinteriors"
              ]
            }),
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
