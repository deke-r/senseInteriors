
export default function BackgroundContentSection({
  title,
  description,
  additionalText,
  furtherText,
}) {
  return (
    <section
      className="py-5 text-white position-relative" data-aos="fade-up"
      style={{
        backgroundImage: "url('/img/parallax-portfolio.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-12 text-center">
            <div>
              <h2 className="mb-4 text-light">
                {title.split(" ").map((word, i) =>
                  i === 1 ? (
                    <span key={i} className="text-warning">
                      {word}{" "}
                    </span>
                  ) : (
                    `${word} `
                  ),
                )}
              </h2>
              <p className="text-center">
                {description}
                <br />
                <br />
                {additionalText}
                <br />
                <br />
                {furtherText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
