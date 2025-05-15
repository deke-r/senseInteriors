import Link from "next/link";

const PageBanner = ({ image, title, pageName }) => {
  return (
    <div className="banner-contact position-relative">
      <div
        className=" text-white py-5 position-relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "450px",
        }}
      >
        {/* Black overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="container h-100 d-flex flex-column justify-content-center align-items-center position-relative"
          style={{ zIndex: 2 }}
        >
          <h1 className="display-4 fw-semibold text-light text-center">{title}</h1>
          <nav aria-label="breadcrumb" >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/" className="text-light fw-semibold text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active fw-semibold text-light" aria-current="page">
                {pageName}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;