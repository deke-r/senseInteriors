import Link from "next/link";

export default function Footer() {
  return (
    <footer>
<section className="bg-light footer-top d-flex align-items-center text-center" data-aos="fade-up">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div>
          <h2 className="fw-bold display-6">
            <span className="text-dark">Presence in</span> <span className="text-warning">Delhi NCR</span>
          </h2>
          <p className="text-muted mt-3">
            We understand your time is valuable, so we are very straightforward with our pricing. Knowing your
            situation will help us give you the information you need to start developing a trusting relationship from
            day one.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="bg-dark text-white" data-aos="fade-up">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center mb-4">
              <h4>Contact us</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="list-inline">
                <li className="list-inline-item mx-2">
                  <Link href="https://www.facebook.com/senseinteriors/" className="text-white text-decoration-none">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link href="https://twitter.com/senseinteriors" className="text-white text-decoration-none">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.73 1.04A4.28 4.28 0 0 0 11.1 9.03c0 .34.04.68.1 1a12.13 12.13 0 0 1-8.8-4.46 4.28 4.28 0 0 0 1.32 5.7A4.21 4.21 0 0 1 2 10.57v.05c0 2.02 1.43 3.7 3.33 4.1a4.27 4.27 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.59 8.59 0 0 1 2 19.54 12.07 12.07 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 22.46 6z"/>
                    </svg>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link href="https://www.linkedin.com/" className="text-white text-decoration-none">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.65H9.36V9h3.41v1.56h.05c.47-.89 1.61-1.82 3.31-1.82 3.54 0 4.19 2.33 4.19 5.36v6.35zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.45c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.2 0 22.22 0z"/>
                    </svg>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link href="https://www.instagram.com/senseinteriors/" className="text-white text-decoration-none">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.96.24 2.415.403a4.92 4.92 0 0 1 1.77 1.15 4.92 4.92 0 0 1 1.15 1.77c.163.456.35 1.246.403 2.415.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.403 2.415a4.92 4.92 0 0 1-1.15 1.77 4.92 4.92 0 0 1-1.77 1.15c-.456.163-1.246.35-2.415.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.415-.403a4.92 4.92 0 0 1-1.77-1.15 4.92 4.92 0 0 1-1.15-1.77c-.163-.456-.35-1.246-.403-2.415C2.213 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.96.403-2.415A4.92 4.92 0 0 1 3.823 2.96a4.92 4.92 0 0 1 1.77-1.15c.456-.163 1.246-.35 2.415-.403C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.143 0-3.508.012-4.747.068-.915.043-1.41.197-1.74.33-.438.172-.75.377-1.08.707a3.116 3.116 0 0 0-.707 1.08c-.133.33-.287.825-.33 1.74C4.012 8.492 4 8.857 4 12c0 3.143.012 3.508.068 4.747.043.915.197 1.41.33 1.74.172.438.377.75.707 1.08.33.33.642.535 1.08.707.33.133.825.287 1.74.33C8.492 19.988 8.857 20 12 20s3.508-.012 4.747-.068c.915-.043 1.41-.197 1.74-.33a3.116 3.116 0 0 0 1.08-.707 3.116 3.116 0 0 0 .707-1.08c.133-.33.287-.825.33-1.74.056-1.239.068-1.604.068-4.747s-.012-3.508-.068-4.747c-.043-.915-.197-1.41-.33-1.74a3.116 3.116 0 0 0-.707-1.08 3.116 3.116 0 0 0-1.08-.707c-.33-.133-.825-.287-1.74-.33C15.508 4.012 15.143 4 12 4zm0 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.2-.9a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
                    </svg>
                  </Link>
                </li>
                   <li className="list-inline-item mx-2">
                  <Link href="https://in.pinterest.com/senseinteriors/" className="text-white text-decoration-none">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 4.67 2.69 8.7 6.58 10.56-.09-.9-.17-2.27.04-3.24.18-.9 1.15-5.72 1.15-5.72s-.29-.57-.29-1.41c0-1.32.77-2.3 1.72-2.3.81 0 1.2.61 1.2 1.34 0 .82-.52 2.05-.79 3.19-.23.95.49 1.73 1.45 1.73 1.74 0 3.08-1.84 3.08-4.49 0-2.34-1.68-3.97-4.09-3.97-2.79 0-4.43 2.1-4.43 4.26 0 .84.33 1.75.74 2.24.08.1.09.18.07.28-.08.3-.26.95-.3 1.08-.05.17-.18.21-.41.13-1.54-.63-2.5-2.6-2.5-4.19 0-3.41 2.48-6.54 7.15-6.54 3.75 0 6.66 2.67 6.66 6.23 0 3.72-2.34 6.71-5.59 6.71-1.09 0-2.11-.57-2.46-1.24l-.67 2.57c-.24.92-.89 2.07-1.33 2.77.99.31 2.03.48 3.12.48 6.63 0 12-5.373 12-12S18.63 0 12 0z"/>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row border-top border-secondary pt-3">
            <div className="col-md-12 text-center">
              <ul className="list-inline">
                {[
                  "Delhi", "Noida", "Gurgaon", "Mumbai", "Pune",
                  "Bengaluru", "Chennai", "Hyderabad", "Ahemdabad", "Kolkata",
                ].map((city, index) => (
                  <li key={index} className="list-inline-item mx-2">
                    <a href="/contact" className="text-white fw-semibold f_13 text-decoration-none">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 bg-dark text-white border-top border-secondary" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0 f_14">
                Complete Solution for Interior Design and Architectural Service in Delhi NCR. Copyright 2004 ~ 2026
                Sense Interiors Pvt Ltd All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
