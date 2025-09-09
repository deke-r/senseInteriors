export const metadata = {
    title: "Thank You | Sense Interiors",
    description: "We’ve received your inquiry and will get back to you shortly.",
  }
  
  export default function ThankYou() {
    return (
      <main style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <img
            src="/img/Sense_Interior_Logo.webp"
            alt="Sense Interiors"
            style={{ height: 48, marginBottom: 24 }}
          />
          <h1 style={{ marginBottom: 12 }}>Thank you!</h1>
          <p style={{ marginBottom: 24 }}>
            We’ve received your inquiry and will get back to you shortly.
          </p>
          <a href="/interior-consultation" style={{ textDecoration: "underline" }}>Back to Home</a>
        </div>
      </main>
    )
  }
  