"use client"

import { useRef } from "react"

export default function ClientsSection() {
  const carouselRef = useRef(null)

  // This would normally be implemented with a proper carousel library
  // For this example, we're just showing a static version
  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <div className="mb-4">
              <h2 className="text-primary">Our Clients</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="client-carousel" ref={carouselRef}>
              <div className="row">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="col-6 col-md-3 mb-4">
                    <div className="border p-4 text-center">
                      <img
                        src={`/placeholder.svg?height=100&width=200&text=Client ${i + 1}`}
                        className="img-fluid"
                        alt={`Client ${i + 1}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
