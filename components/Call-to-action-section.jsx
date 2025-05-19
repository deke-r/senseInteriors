import LinkButton from "./LinkButton";

export default function CallToActionSection({ title, phoneNumber }) {
  return (
    <section className="py-4 call-to-action text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10" data-aos="fade-left">
            <h3 className="mb-0 text-light">{title}</h3>
          </div>
          <div className="col-md-2 text-md-end mt-3 mt-md-0" data-aos="fade-left">
            <LinkButton href={`tel:${phoneNumber}`} title={phoneNumber} />
          </div>
        </div>
      </div>
    </section>
  )
}
