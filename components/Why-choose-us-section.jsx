"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Collapse } from "react-collapse";
import "../styles/wcus.css";

export default function WhyChooseUsSection({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-5 whyus-wrapper">
      <div className="container">
        <div className="row">
          {/* Accordion */}
          <div className="col-md-6">
            <div className="mb-4">
              <h3 className="text-primary">Why Choose Us?</h3>
            </div>
            <div className="accordion" id="whyChooseUsAccordion">
              {items.map((item, index) => (
                <div key={index} className="card mb-3 border whyus-card">
                  <div className="card-header bg-white p-0 whyus-card-header">
                    <div className="d-flex">
                      <button
                        className="btn btn-link text-decoration-none text-dark w-100 text-start p-3"
                        onClick={() =>
                          setActiveIndex(index === activeIndex ? -1 : index)
                        }
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
                  <Collapse isOpened={index === activeIndex}>
                    <div className="card-body whyus-card-body">
                      {item.content}
                      {item.listItems && (
                        <ul className="list-unstyled mt-3 whyus-list">
                          {item.listItems.map((listItem, i) => (
                            <li key={i} className="mb-2">
                              <ChevronRight className="h-4 w-4 text-warning inline me-2" />
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Collapse>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-md-6">
            <div className="mb-4">
              <h3 className="text-primary">Serving with Quality Over a Decade</h3>
            </div>
            <h2 className="mb-4">A Perfect Design Enhances the Beauty</h2>
            <p className="text-muted">
              Choosing an interior designer plays a vital role in enhancing your room’s beauty. We specialize in crafting designs that organize spaces for optimal functionality. Our team, alongside architects, helps structure your place effectively.
              <br /><br />
              We create aesthetically pleasing environments that elevate productivity and inspire creativity. Our commitment to delivering attractive and comfortable atmospheres ensures a work environment that supports your team's success.
              <br /><br />
              We also carefully assess the profitability and practical aspects of interior projects. Proper documentation at the start minimizes legal issues as the project progresses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
