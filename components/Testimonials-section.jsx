"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"



export default function TestimonialsSection({ testimonials, imageSrc }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      className="py-5 text-white"
      style={{
        backgroundImage: "url('/placeholder.svg?height=600&width=1200&text=Testimonials Background')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5 text-center">
            <div className="mb-4">
              <h2 className="text-white">Testimonials</h2>
            </div>
            <div className="position-relative">
              <div className="card bg-white text-dark p-4 mb-4">
                <div className="card-body">
                  <p className="text-center fst-italic mb-0">{testimonials[activeIndex].content}</p>
                </div>
              </div>
              <div className="text-warning">
                <h5>
                  <span>---</span> {testimonials[activeIndex].author} <span>---</span>
                </h5>
              </div>
              <div className="mt-4">
                <button className="btn btn-dark me-2" onClick={handlePrev}>
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="btn btn-dark" onClick={handleNext}>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={imageSrc || "/placeholder.svg"} className="img-fluid" alt="Testimonials" />
          </div>
        </div>
      </div>
    </section>
  )
}
