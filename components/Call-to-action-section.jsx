
export default function CallToActionSection({ title, phoneNumber }) {
  return (
    <section className="py-4 bg-primary text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-9">
            <h3 className="mb-0">{title}</h3>
          </div>
          <div className="col-md-3 text-md-end mt-3 mt-md-0">
            <a className="btn btn-light text-primary fw-bold" href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
