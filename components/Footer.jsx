import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div>
                <h2>
                  Presence in <span className="text-warning">Delhi NCR</span>
                </h2>
                <p className="text-muted">
                  We understand your time is valuable, so we are very straightforward with our pricing. Knowing your
                  situation will help us give you the information you need start developing a trusting relationship from
                  day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center mb-4">
              <h4>Contact us</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="list-inline mb-4">
                <li className="list-inline-item mx-2">
                  <a href="https://www.facebook.com/" className="text-white">
                    <Facebook className="h-6 w-6" />
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="https://twitter.com/" className="text-white">
                    <Twitter className="h-6 w-6" />
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="https://www.linkedin.com/" className="text-white">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="https://www.instagram.com/" className="text-white">
                    <Instagram className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-secondary" />

          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="list-inline">
                {[
                  "Delhi",
                  "Noida",
                  "Gurgaon",
                  "Mumbai",
                  "Pune",
                  "Bengaluru",
                  "Chennai",
                  "Hyderabad",
                  "Ahemdabad",
                  "Kolkata",
                ].map((city, index) => (
                  <li key={index} className="list-inline-item mx-2">
                    <a href="/contact" className="text-white">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 bg-dark text-white border-top border-secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0">
                Complete Solution for Interior Design and Architectural Service in Delhi NCR. Copyright 2004 ~ 2023
                Sense Interiors Pvt Ltd All right reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
