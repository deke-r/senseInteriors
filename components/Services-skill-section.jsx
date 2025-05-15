import { TrendingUp, CreditCardIcon as AddressCard, RefreshCw, Handshake } from "lucide-react"
import LinkButton from "./LinkButton"



export default function ServicesSkillSection({ title, phoneNumber, skills }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "trendingUp":
        return <TrendingUp className="h-16 w-16 mb-3" />
      case "addressCard":
        return <AddressCard className="h-16 w-16 mb-3" />
      case "refreshCw":
        return <RefreshCw className="h-16 w-16 mb-3" />
      case "handshake":
        return <Handshake className="h-16 w-16 mb-3" />
      default:
        return <TrendingUp className="h-16 w-16 mb-3" />
    }
  }

  return (
    <section className="py-5 bg-light service-skill-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column justify-content-center">
            <h2 className="mb-4">{title}</h2>

            <LinkButton title={phoneNumber} href={`tel:${phoneNumber}`}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              {skills.map((skill, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card h-100 card-services border-0 rounded-0 text-center p-4">
                    <div className="card-body">
                     <span className="csh"> {getIcon(skill.icon)} </span>  
                      <h4 className="mb-3 csh">{skill.title}</h4>
                      <p className="csh">{skill.description}</p>
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
