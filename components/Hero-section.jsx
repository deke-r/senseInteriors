import { LogOutIcon as SignOut } from "lucide-react"


export default function HeroSection({
  title,
  areas,
  subtitle,
  description,
  additionalText,
  welcomeTitle,
  imageSrc,
}) {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2 className="mb-4">{title}</h2>
            <ul className="list-inline mb-3">
              {areas.slice(0, 5).map((area, index) => (
                <li key={`area-1-${index}`} className="list-inline-item  f_12 fw-semibold">
                  {index > 0 && <span className="mx-2">|</span>}
                  <SignOut className="h-4 w-4 inline mr-1 text-b" />
                  {area}
                </li>
              ))}
            </ul>
            <ul className="list-inline mb-4">
              {areas.slice(5).map((area, index) => (
                <li key={`area-2-${index}`} className="list-inline-item f_12 fw-semibold">
                  {index > 0 && <span className="mx-2">|</span>}
                  <SignOut className="h-4 w-4 inline mr-1  text-b" />
                  {area}
                </li>
              ))}
            </ul>
            <h5 className="mt-4 mb-3">{subtitle}</h5>
            <p className="text-muted">
              {description}
              <br />
              <br />
              {additionalText}
            </p>
          </div>
          <div className="col-md-5">
            <h2 className="mb-4">{welcomeTitle}</h2>
            <img src={imageSrc || "/placeholder.svg"} className="img-fluid rounded" alt="Interior Design" />
          </div>
        </div>
      </div>
    </section>
  )
}
