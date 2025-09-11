import Image from "next/image"
import { Phone, Mail, MapPin, Users, Building, Lightbulb, Globe, Settings, ArrowRight } from "lucide-react"
import styles from "../../styles/ad.module.css"
import ClientsSection from "@/components/Clients-section"
import TestimonialsSection from "@/components/Testimonials-section"
import { testimonials } from "@/data/content"
import ConsultationForm from "@/components/ConsultationForm"

export const metadata = {
  title: "Office Interior Consultation | Sense Interiors",
  description:
    "Book an office interior design consultation with Sense Interiors. End-to-end office design & build solutions across India—workplace strategy, space planning, and turnkey execution.",
  keywords: [
    "office interior consultation",
    "office interior design",
    "workplace design",
    "commercial interiors",
    "corporate interiors",
    "office fit-out",
    "Sense Interiors",
    "Delhi NCR offices",
  ],
}

export default function Home() {

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <img src="/img/Sense_Interior_Logo.webp" alt="Sense Interiors" className={styles.logo} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero} id="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  <span className={styles.highlight}>Transform Your Workplace</span>
                </h1>
                <h2 className={styles.heroSubtitle}>Premium Office Interior Design & Build Solutions</h2>
                <p className={styles.heroDescription}>
                  We design high-performance offices with ergonomic planning, brand-led aesthetics, and seamless turnkey
                  execution—delivered on time and hassle-free.
                </p>
              </div>
            </div>
               <div className="col-lg-6">
              <div className={styles.formContainer}>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>



      <ClientsSection/>

      {/* Technology & Design */}
      <section className={styles.techDesign}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Experience the combined power of <br />
            <span className={styles.highlight}>Technology and Workplace Design</span>
          </h2>
          <p className={styles.sectionDescription}>
            Reimagine your office with modern, human-centric workplace design. Partner with Sense Interiors for data-led
            space planning, tech-enabled collaboration, and ergonomic environments that boost productivity and wellbeing.
          </p>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className={styles.featureBox}>
                <Lightbulb className={styles.featureIcon} />
                <h3>Cutting-edge workplace tech</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.featureBox}>
                <Globe className={styles.featureIcon} />
                <h3>Global office design insights</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.featureBox}>
                <Settings className={styles.featureIcon} />
                <h3>Pan-India execution ecosystem</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className={styles.statistics}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className={styles.statItem}>
                <Building className={styles.statIcon} />
                <div className={styles.statNumber}>150+</div>
                <div className={styles.statLabel}>office projects completed</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.statItem}>
                <div className={styles.statIcon}>📐</div>
                <div className={styles.statNumber}>1,500,000+</div>
                <div className={styles.statLabel}>sq ft of workspaces delivered</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.statItem}>
                <MapPin className={styles.statIcon} />
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLabel}>cities pan India</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.statItem}>
                <Users className={styles.statIcon} />
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>workplace design experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className={styles.projectShowcase}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Our Showcase of Projects: Modern Office Transformations Across India
          </h2>
          <p className={styles.sectionDescription}>
            From agile hubs to executive suites, our office portfolio demonstrates how thoughtful design elevates brand,
            culture, and performance. Every workplace is tailored to your team’s flow, future scale, and business goals.
          </p>

          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>
              <Image
                src="/img/ofin/1.webp"
                alt="Sense Interiors project"
                width={400}
                height={300}
              />
            </div>
            <div className={styles.projectItem}>
              <Image
                src="/img/ofin/2.webp"
                alt="Sense Interiors project"
                width={400}
                height={300}
              />
            </div>
            <div className={styles.projectItem}>
              <Image
                src="/img/ofin/3.webp"
                alt="Sense Interiors project"
                width={400}
                height={300}
              />
            </div>
            {/* <div className={styles.projectItem}>
              <Image
                src="/img/ofin/4.webp"
                alt="Sense Interiors project"
                width={400}
                height={300}
              />
            </div> */}
            <div className={styles.projectItem}>
              <Image
                src="/img/ofin/5.webp"
                alt="Sense Interiors project"
                width={400}
                height={300}
              />
            </div>
            <div className={styles.projectItem}>
              <Image
                src="/img/ofin/6.webp"
                alt="Sense Interiors project"
                width={400}
                height={300}
              />
            </div>
            <div className={styles.projectItem}>
              <Image
                src="/img/ofin/7.webp"
                alt="Sense Interiors project"
                width={400}
                height={300}
              />
            </div>
            {/* <div className={styles.projectItem}>
              <Image
                src="/img/tidy-bathroom-with-shiny-tiles_1203-1501.webp"
                alt="Sense Interiors project"
                width={400}
                height={300}
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className={styles.processSteps}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Office Design Process</h2>

          <div className="row">
            {[
              "Discovery & workplace strategy",
              "Space planning & test fits",
              "Design development (3D & material boards)",
              "Detailed BOQ & transparent costings",
              "Seamless execution & site management",
              "On-time handover",
            ].map((step, index) => (
              <div key={index} className="col-md-2">
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <h3 className={styles.stepTitle}>{step}</h3>
                  {index < 5 && <ArrowRight className={styles.stepArrow} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className={styles.aboutUs}>
        <div className="container">
          <h2 className={styles.sectionTitle}>About Us</h2>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.aboutContent}>
                <p>
                  Sense Interiors is your trusted partner for end-to-end office interior design and build—planning,
                  designing, and delivering workplaces that are efficient, ergonomic, and on-brand.
                </p>
                <p>
                  With over <strong>150 office projects</strong> across <strong>25+ cities</strong> and more than
                  <strong> 1.5 million sq ft</strong> delivered, we help startups, SMBs, and enterprises create future-ready
                  workplaces.
                </p>
                <p>
                  Our expertise spans workplace strategy, real-time designs by global teams, on-ground execution by
                  experts, and high-quality furnishings—ensuring spaces that drive productivity, culture, and growth.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.aboutVideo}>
                <img
                  src="/img/BA0A55E2-A21F-462A-B1C0-BAFEA773AABF.png"
                  alt="About Sense Interiors"
                  className={styles.videoThumbnail}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


<div className="container">
  <div className="row mx-md-5">
<ConsultationForm/>

  </div>

</div>


      <TestimonialsSection testimonials={testimonials} imageSrc="/img/image2-home2.webp" />

      {/* Contact Section */}
  

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div>
              <h4 className={styles.footerHeading}>Get in Touch</h4>
              <div className={styles.footerItem}>
                <MapPin className={styles.footerIcon} />
                <div>
                  <p>DLF Prime Tower, Okhla Phase 1</p>
                  <p>Delhi-110020</p>
                </div>
              </div>
              <div className={styles.footerItem}>
                <Phone className={styles.footerIcon} />
                <a href="tel:+919821995637" className={styles.footerLink}>+91 9821995637</a>
              </div>
              <div className={styles.footerItem}>
                <Mail className={styles.footerIcon} />
                <a href="mailto:info@senseinteriors.in" className={styles.footerLink}>info@senseinteriors.in</a>
              </div>
            </div>
          </div>

          <p>
            Copyright © 2024, Sense Interiors Pvt. Ltd.® and its affiliates. All Rights Reserved.
            <br />
            Content Owned, updated and maintained by Sense Interiors Pvt. Ltd.®
            <br />
            The information or content displayed on this website is the intellectual property of senseinteriors.in. All
            the trademarks, copyrights, industrial designs and patents are the intellectual property of Sense Interiors
            Pvt. Ltd.®
          </p>
        </div>
      </footer>
    </div>
  )
}