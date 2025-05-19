"use client"

import { useState } from "react"
import '../styles/contact.css';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  PinIcon as PinterestIcon,
} from "lucide-react"


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState({ message: "", type: null })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)
      setFormStatus({ message: "Thank you for your message! We'll get back to you soon.", type: "success" })
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    } catch (error) {
      setFormStatus({ message: "There was an error submitting your form. Please try again.", type: "error" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6" data-aos="fade-right">
            <div className="heading-title-2 span-head mb-4">
              <h2>
                Contact<span className="text-primary"> us</span>
              </h2>
            </div>
            <p>
              Contact Sense Interiors to start your dream project with our team of expert designers to make an offer or
              simply ask a question.
            </p>
            <h4 className="mt-4 mb-3">Headquarters</h4>
            <ul className="contact-icon-list-items list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <MapPin className="me-2 text-primary" size={18} />
                <span>DLF Prime Tower, Okhla Phase 1, Delhi-110020.</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <a href="tel:+91 9821995637" className="d-flex align-items-center text-decoration-none text-dark">
                  <Phone className="me-2 text-primary" size={18} />
                  <span>+91 9821995637</span>
                </a>
              </li>
              <li className="d-flex align-items-center mb-3">
                <a
                  href="mailto:info@senseinteriors.in"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <Mail className="me-2 text-primary" size={18} />
                  <span>info@senseinteriors.in</span>
                </a>
              </li>
              <li className="d-flex align-items-center mb-3">
                <Clock className="me-2 text-primary" size={18} />
                <span>Mon – Sat: 9:00 – 18:00</span>
              </li>
            </ul>

            <div className="social-icons mt-4">
              <ul className="list-unstyled d-flex">
                <li className="me-3">
                  <a
                    href="https://www.facebook.com/senseprojects"
                    className="social-icon facebook"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </li>
                <li className="me-3">
                  <a href="https://twitter.com/sense_projects" className="social-icon twitter" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </li>
                <li className="me-3">
                  <a
                    href="https://www.linkedin.com/company/sense-projects-pvt-ltd/"
                    className="social-icon linkedin"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </li>
                <li className="me-3">
                  <a
                    href="https://www.instagram.com/senseprojects/"
                    className="social-icon instagram"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.pinterest.com/senseprojects1/"
                    className="social-icon pinterest"
                    aria-label="Pinterest"
                  >
                    <PinterestIcon size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 mt-4 mt-md-0" data-aos="fade-left">
            <div className="heading-title-2 span-head mb-4">
              <h2>
                Fill the <span className="text-primary">Contact</span> Form
              </h2>
            </div>
            <div className="form-section">
              <form className="form-box" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Mobile Number"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={6}
                    placeholder="Write Message"
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {formStatus.message && (
                  <div className={`alert ${formStatus.type === "success" ? "alert-success" : "alert-danger"} mb-3`}>
                    {formStatus.message}
                  </div>
                )}

                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
