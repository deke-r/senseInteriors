import Link from "next/link"
import CareerForm from "../../components/Career-form"
import PageBanner from "@/components/PageBanner"
import Navbar from "@/components/Navbar"
import {
  Ruler,
  Paintbrush2,
  Users,
  CheckCircle,
} from "lucide-react"

export default function CareersPage() {
  return (
    <div className="container-fluid p-0">
      <div className="banner-top h-auto">
        <PageBanner
          image="/img/bg-header.webp"
          title="Career"
          pageName="Career"
        />
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="bg-career text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold text-light">Join Our Creative Team</h1>
              <p className="lead">Shape beautiful spaces with us</p>
              <p className="mb-4">
                We’re on the lookout for passionate interior design professionals who are ready to bring imagination to life and create stunning spaces.
              </p>
              <a href="#openings" className="btn btn-light btn-lg px-4 me-md-2">
                View Openings
              </a>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img
                src="/img/young-couple-discussing-document-while-real-estate-agent-explaining_1048944-15328434.webp"
                alt="Interior design team at work"
                className="img-fluid leaf shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-5">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center mb-5">Why Join Our Team?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-career-card">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper mb-3">
                    <Ruler size={48} className="text-primary" />
                  </div>
                  <h3 className="card-title h5">Design Innovation</h3>
                  <p className="card-text">
                    Collaborate on unique design projects that push the boundaries of creativity and function.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-career-card">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper mb-3">
                    <Paintbrush2 size={48} className="text-primary" />
                  </div>
                  <h3 className="card-title h5">Creative Freedom</h3>
                  <p className="card-text">
                    Express your artistic vision and contribute to high-impact design projects in residential, commercial, and luxury spaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-career-card">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper mb-3">
                    <Users size={48} className="text-primary" />
                  </div>
                  <h3 className="card-title h5">Collaborative Culture</h3>
                  <p className="card-text">
                    Join a vibrant team of designers and craftsmen who believe in teamwork, learning, and mutual respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-5 bg-light" id="openings">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center mb-5">Current Openings</h2>
          <div className="row g-4">
            {[
              {
                title: "Senior Interior Designer",
                type: "Full-time",
                badgeColor: "primary",
                description: "Lead high-end residential and commercial projects from concept to completion.",
                requirements: [
                  "5+ years of interior design experience",
                  "Proficiency in AutoCAD, SketchUp, and Photoshop",
                  "Strong portfolio with luxury design work",
                ],
              },
              {
                title: "3D Visualizer",
                type: "Remote",
                badgeColor: "info",
                description: "Bring ideas to life with realistic 3D renders and walkthroughs.",
                requirements: [
                  "2+ years of 3D visualization experience",
                  "Expert in 3ds Max and V-Ray",
                  "Attention to detail in lighting and materials",
                ],
              },
              {
                title: "Project Coordinator",
                type: "Full-time",
                badgeColor: "primary",
                description: "Manage timelines, resources, and execution across multiple projects.",
                requirements: [
                  "Strong communication and planning skills",
                  "Experience in vendor and client coordination",
                  "Interior project execution knowledge",
                ],
              },
              {
                title: "Design Intern",
                type: "Internship",
                badgeColor: "warning text-dark",
                description: "Kickstart your design career with hands-on mentorship and real projects.",
                requirements: [
                  "Basic design principles and software skills",
                  "Eagerness to learn and grow",
                  "Degree or diploma in Interior Design",
                ],
              },
            ].map((job, i) => (
              <div className="col-md-6" key={i}>
              <div className="card h-100 border-0 shadow-sm hover-career-card">
                  <div className="card-body p-4">
                    <span className={`badge bg-${job.badgeColor} mb-2`}>{job.type}</span>
                    <h3 className="card-title h4">{job.title}</h3>
                    <p className="card-text">{job.description}</p>
                    <ul className="list-unstyled">
                      {job.requirements.map((req, j) => (
                      <li key={j} className="d-flex align-items-start">
  <span className="icon-wrapper me-2">
    <CheckCircle className="text-success" size={18} />
  </span>
  <span className="text-wrapper">{req}</span>
</li>

                      ))}
                    </ul>
                    <Link href="#contact-form" className="btn  bg-primary text-light fw-semibold">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5" id="contact-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow  hover-career-card">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4 card-text">Get in Touch</h2>
                  <p className="text-center mb-4 card-text">
                    Interested in joining our interior design team? Fill out the form and we’ll connect with you.
                  </p>
                  <CareerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
