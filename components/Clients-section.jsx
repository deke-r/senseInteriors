"use client"

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useEffect, useRef } from 'react'

const clientImages = Array.from({ length: 23 }, (_, i) => `/img/client-${String(i + 1).padStart(2, '0')}.webp`);

export default function ClientsSection() {
  const carouselRef = useRef(null)

  return (
    <section className="py-5" data-aos="fade-up">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <div className="mb-4">
              <h2 className="text-primary">Our Clients</h2>
            </div>
          </div>
        </div>
        <Splide
          ref={carouselRef}
          options={{
            type: 'loop',
            autoplay: true,
            interval: 2000,
            pauseOnHover: false,
            arrows: false,
            pagination: false,
            perPage: 4,
              perMove: 1,
            breakpoints: {
              992: { perPage: 3 },
              768: { perPage: 2 },
              576: { perPage: 1 },
            },
            gap: '1rem',
          }}
        >
          {clientImages.map((src, i) => (
            <SplideSlide key={i}>
              <div className="border p-4 text-center bg-white rounded shadow-sm h-100 d-flex align-items-center justify-content-center">
                <img
                  src={src}
                  className="img-fluid"
                  alt={`Client ${i + 1}`}
                  style={{ maxHeight: '100px', objectFit: 'contain' }}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}
