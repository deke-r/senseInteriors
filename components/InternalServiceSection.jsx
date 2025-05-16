import Image from "next/image"
import '../styles/InternalServiceSection.css';


export default function ISS({
  title,
  mainContent,
  imageSrc,
  imageAlt,
  whoWeAreTitle,
  whoWeAreContent,
  benefitsTitle,
  benefitsContent,
}) {
  return (
    <section className="service-section py-5 bg-dark">
      <div className="container">
        <div className="row mx-md-5">
          <div className="col-md-6">
            <div className="heading-title-2 grey-line">
              <h2>{title}</h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: mainContent }} />
          </div>
          <div className="col-md-6 my-auto">
            <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} width={500} height={400} className="img-fluid" />
          </div>
        </div>
        <div className="row mx-md-5 mt-4">
          <div className="col-md-12">
            <h3>{whoWeAreTitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: whoWeAreContent }} />
          </div>
          <div className="col-md-12 mt-3">
            <h3>{benefitsTitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: benefitsContent }} />
          </div>
        </div>
      </div>
    </section>
  )
}
