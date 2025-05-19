"use client"



import { useState } from "react"

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    position: "Not specified",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      message: "",
      position: "Not specified",
    })
  }

  return (
    <>
      {submitted ? (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Thank you for your application!</h4>
          <p>We've received your information and will be in touch soon.</p>
          <hr />
          <button className="btn btn-success" onClick={() => setSubmitted(false)}>
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label card-text">
              Full Name
            </label>
            <input
              type="text"
              className="form-control py-2"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label card-text">
              Email Address
            </label>
            <input
              type="email"
              className="form-control py-2"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="position" className="form-label card-text">
              Position of Interest
            </label>
            <select
              className="form-select py-2"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
            >
              <option value="Not specified">Select a position (optional)</option>
              <option value="Senior Next.js Developer">Senior Next.js Developer</option>
              <option value="UX/UI Designer">UX/UI Designer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Junior Next.js Developer">Junior Next.js Developer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label card-text">
              Message
            </label>
            <textarea
              className="form-control py-2"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about yourself and why you're interested in this position"
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary text-light fw-semibold btn-lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      )}
    </>
  )
}
