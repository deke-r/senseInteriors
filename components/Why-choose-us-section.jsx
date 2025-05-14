"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"



export default function WhyChooseUsSection({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-4">
              <h3 className="text-primary">Why Choose Us?</h3>
            </div>
            <div className="accordion" id="whyChooseUsAccordion">
              {items.map((item, index) => (
                <div key={index} className="card mb-3 border">
                  <div className="card-header bg-white p-0">
                    <div className="d-flex">
                      <button
                        className="btn btn-link text-decoration-none text-dark w-100 text-start p-3"
                        type="button"
                        onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                        aria-expanded={index === activeIndex}
                      >
                        <div className="d-flex align-items-center">
                          <div
                            className="bg-primary text-white d-flex align-items-center justify-content-center"
                            style={{ width: "40px", height: "40px" }}
                          >
                            {index === activeIndex ? (
                              <ChevronDown className="h-5 w-5" />
                            ) : (
                              <ChevronRight className="h-5 w-5" />
                            )}
                          </div>
                          <span className="ms-3 fw-bold">{item.title}</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className={`collapse ${index === activeIndex ? "show" : ""}`}>
                    <div className="card-body">
                      {item.content}
                      {item.listItems && (
                        <ul className="list-unstyled mt-3">
                          {item.listItems.map((listItem, i) => (
                            <li key={i} className="mb-2">
                              <ChevronRight className="h-4 w-4 text-warning inline mr-2" />
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-4">
              <h3 className="text-primary">Serving with Quality Over a Decade</h3>
            </div>
            <h2 className="mb-4">A Perfect Design Enhances the Beauty</h2>
            <p className="text-muted">
              Choosing of Interior designer has played an important role in adding beauty to your room. We specialize in
              crafting designs that meticulously organize spaces for optimal functionality. However, our team with the
              architecture help you by organizing and structural way of your place. Choose us for our expertise in
              creating aesthetically pleasing environments that elevate productivity and inspire creativity. Our
              commitment to delivering attractive and comfortable atmospheres ensures a work environment that inspires
              and supports your team's success with architectural as well as interior designs.
              <br />
              <br />
              In truth, our expertise is where we carefully assess the profitability and working aspects of interior
              projects and architecture. Our careful of documents at the outset minimizes potential legal barriers as
              the project progresses.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
