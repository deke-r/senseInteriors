import Image from "next/image"
import '../styles/WhyChooseUs.css';
export default function WhyChooseUs() {
  return (
    <section className="why_choose_page abt-bg py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h3>
              Sense Interiors is one of the best &amp; leading Architectural firms which Deals in architectural and
              interior designing in &amp; across India.
            </h3>
            <p>
              If anyone looking for the best designing company in Delhi NCR and Pan India then sense Interiors is the
              best &amp; only option for you. We have 1300+ happy clients, for them, we have worked and as per their
              requirements. We have the ability to execute &amp; fulfill the needs &amp; dream of each client's.
            </p>
            <p>
              While working on a project we use high quality of raw materials and new technologies, skilled workers,
              highly qualified and mentally strong technical team. There are many reasons why we are the best and
              leading company, one of the main reasons for being the best is, our client are happy by our work which
              fulfills their needs &amp; desired requirements.
            </p>
          </div>
          <div className="col-md-5 my-auto">
            <Image
              src="/img/turnkey-project-provider-in-delhi-ncr.webp"
              alt="Turnkey project provider in Delhi NCR"
              width={500}
              height={400}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h4>MISSION:</h4>
            <p>
              Sense Interior is pure and simple who wants to be you're first preferred choice for your interior and
              architect designing and turnkey project needs. You can choose anyone for your work but when it comes to
              consistency for being the best then you have one option which is sense interiors. It is much harder to
              build a relationship which fully depends on trust.
            </p>
          </div>
          <div className="col-md-6">
            <h4>Vision:</h4>
            <p>
              To be a world-class designing firm, we are committed to total customer satisfaction, by designing on our
              strengths – innovative designs, superlative quality of material, new technology, timely completion and
              demonstrating the highest standards of workmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
