import { Building, MountainIcon as ThinkPeaks, Home } from "lucide-react"
import LinkButton from "./LinkButton"
import '../styles/cardService.css';

export default function ServicesSection({ services }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "building":
        return <Building className="h-16 w-16 mb-3" />
      case "thinkpeaks":
        return <ThinkPeaks className="h-16 w-16 mb-3" />
      case "home":
        return <Home className="h-16 w-16 mb-3" />
      default:
        return <Building className="h-16 w-16 mb-3" />
    }
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-5">

          <div className="col-md-12 text-center">
            <div className="mb-4">
              <h2 className="text-primary">What Can We Offer</h2>
            </div>
          </div>
        </div>
        <div className="row mx-md-5">
          <div className="container">
            <div className="row mx-md-5">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card card-services h-100 text-center  border-0  transition-all">
                <div className="card-body p-4">
                 <span className="csh">{getIcon(service.icon)}</span>   
                  <h3 className="h4 mb-3 csh fw-bold">{service.title}</h3>
                  <p className="csh">{service.description}</p>
               
                  <LinkButton  href={service.link} title='Know More'/>
                </div>
              </div>
            </div>
          ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
