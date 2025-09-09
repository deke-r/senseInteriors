"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"

export default function CareerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log('data: ', data);
    setIsSubmitting(true)
    try {
      const response = await axios.post("/api/career-form", data)
      console.log("Server response:", response.data)
      setSubmitted(true)
      reset()
    } catch (error) {
      console.error("Submission failed:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label card-text">
              Full Name
            </label>
            <input
              type="text"
              className={`form-control py-2 ${errors.name ? "is-invalid" : ""}`}
              id="name"
              placeholder="Enter your full name"
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
              className={`form-control py-2 ${errors.email ? "is-invalid" : ""}`}
              id="email"
              placeholder="Enter your email address"
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
            <label htmlFor="position" className="form-label card-text">
              Position of Interest
            </label>
            <select
              className="form-select py-2"
              id="position"
              defaultValue="Not specified"
              {...register("position")}
            >
              <option value="Not specified">Select a position (optional)</option>
              <option value="Senior Interior Designer">Senior Interior Designer</option>
              <option value="Interior Supervisor">Interior Supervisor</option>
              <option value="Project Coordinator">Project Coordinator</option>
              <option value="Design Intern">Design Intern</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label card-text">
              Message
            </label>
            <textarea
              className={`form-control py-2 ${errors.message ? "is-invalid" : ""}`}
              id="message"
              rows={5}
              placeholder="Tell us about yourself and why you're interested in this position"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn bg-b text-light fw-semibold btn-lg"
              disabled={isSubmitting}
            >
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
