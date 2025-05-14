

export default function WhoWeAreSection({
  mainImage,
  infoTitle,
  infoLinkText,
  infoLinkUrl,
  infoDescription,
  title,
  subtitle,
  description,
  additionalText,
  contactNumber,
}) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="position-relative">
              <img src={mainImage || "/placeholder.svg"} alt="Who we are" className="img-fluid rounded w-100" />
              <div className="position-absolute bottom-0 left-0 w-100 text-center p-4 bg-dark bg-opacity-75 text-white">
                <h4>{infoTitle}</h4>
                <br />
                <a className="btn btn-primary" href={infoLinkUrl}>
                  {infoLinkText}
                </a>
              </div>
              <p className="mt-3 text-muted">{infoDescription}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-dark text-white p-4 rounded">
              <div className="mb-4">
                <h2 className="text-white">{title}</h2>
              </div>
              <h5 className="mb-3">{subtitle}</h5>
              <p>
                {description}
                <br />
                <br />
                {additionalText}
              </p>
              <a className="btn btn-primary mt-3" href={`tel:${contactNumber}`}>
                {contactNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
