"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import styles from "../styles/ad.module.css"

export default function ConsultationForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        reset()
        router.push("/thank-you")
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.consultationForm}>
      <h2 className={styles.formTitle}>Book A Consultation</h2>

      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Full Name*"
          className={styles.formControl}
          {...register("fullname", { required: "Full name is required" })}
        />
        {errors.fullname && <span className={styles.error}>{errors.fullname.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <input type="email" placeholder="Email Address" className={styles.formControl} {...register("email")} />
      </div>

      <div className={styles.formGroup}>
        <input
          type="tel"
          placeholder="Contact Number*"
          className={styles.formControl}
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Company Name*"
          className={styles.formControl}
          {...register("company", { required: "Company name is required" })}
        />
        {errors.company && <span className={styles.error}>{errors.company.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <select className={styles.formControl} {...register("areasqfeet", { required: "Please select area" })}>
          <option value="">Choose carpet area (in sq. ft.)</option>
          <option value="Less than 2000">Less than 2000</option>
          <option value="Between 2000 to 5000">Between 2000 to 5000</option>
          <option value="More than 5000">More than 5000</option>
        </select>
        {errors.areasqfeet && <span className={styles.error}>{errors.areasqfeet.message}</span>}
      </div>

      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
        {isSubmitting ? "Please Wait..." : "Submit"}
      </button>

      <p className={styles.privacyText}>By submitting this form you agree to the privacy policy</p>
    </form>
  )
}