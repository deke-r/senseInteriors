import LinkButton from "./LinkButton";


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
    <section className="py-5 bg-who-we-are">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-md-0 postion-relative">
            <div className="margin-overlay">
              <img src={mainImage || "/placeholder.svg"} alt="Who we are" className="img-fluid  w-100" />
              <div className=" w-100 text-center p-4  text-white">
                <h4 className="text-light f_19 text-uppercase text-center">{infoTitle}</h4>
                <div className="text-center">
                <LinkButton title={infoLinkText} href={infoLinkUrl}/>
                </div>
              
              </div>
              <p className="mt-3 text-light">{infoDescription}</p>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <div className="bg-dark text-white p-4 margin-overlay2">
              <div className="mb-4">
                <h2 className="text-white">{title}</h2>
              </div>
              <h5 className="mb-3 text-light">{subtitle}</h5>
              <p>
                {description}
                <br />
                <br />
                {additionalText}
              </p>
           
                <LinkButton title={contactNumber} href={`tel:${contactNumber}`}/>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
