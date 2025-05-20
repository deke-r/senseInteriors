"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
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
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await axios.post("/api/contact-form", data)
      if (response.data.success) {
        setSubmitted(true)
        reset()
      } else {
        alert("Something went wrong. Please try again later.")
      }
    } catch (error) {
      console.error("Submission failed:", error)
      alert("Something went wrong. Please try again later.")
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
                    href="https://www.facebook.com/senseinteriors/"
                    className="social-icon facebook"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </li>
                <li className="me-3">
                  <a href="https://twitter.com/senseinteriors/" className="social-icon twitter" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </li>
                <li className="me-3">
                  <a
                    href="https://www.linkedin.com/"
                    className="social-icon linkedin"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </li>
                <li className="me-3">
                  <a
                    href="https://www.instagram.com/senseinteriors/"
                    className="social-icon instagram"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.pinterest.com/senseinteriors/"
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
            {submitted ? (
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Thank you for contacting us!</h4>
                <p>Your message has been successfully sent. We will get back to you shortly.</p>
                <hr />
                <button className="btn btn-success" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label card-text">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className={`form-control py-2 ${errors.name ? "is-invalid" : ""}`}
                    {...register("name", { required: "Full name is required" })}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label card-text">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className={`form-control py-2 ${errors.email ? "is-invalid" : ""}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label card-text">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className={`form-control py-2 ${errors.phone ? "is-invalid" : ""}`}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter a valid Indian mobile number",
                      },
                    })}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                </div>


                <div className="mb-3">
                  <label htmlFor="subject" className="form-label card-text">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject of your message"
                    className={`form-control py-2 ${errors.subject ? "is-invalid" : ""}`}
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label card-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Type your message here"
                    className={`form-control py-2 ${errors.message ? "is-invalid" : ""}`}
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary text-light fw-semibold btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
