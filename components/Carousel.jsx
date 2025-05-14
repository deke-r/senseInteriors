'use client';

import '../styles/carousel.css';
import Link from 'next/link';

const slides = [
  {
    videoSrc: '/video/vid1.mp4',
    title: 'QUALITY WHICH MAKES US DIFFERENT FROM OTHERS AS ARCHITECTURAL FIRM',
    desc: 'Sense Interiors® focusing on Delhi Ncr prime residential building Architectural projects, Interiors Design, conversions and refurbishments.',
    // buttonLabel: 'View Galleries',
    // buttonLink: '/galleries',
    position: 'left',
  },
  {
    videoSrc: '/video/vid4.mp4',
    title: 'An Award Winning #1 Trusted Interiors Design Company',
    desc: 'Commercial & Residential Beautiful delivers stylish home inspiration and the latest interior design trends, contact Sense Projects®.',
    // buttonLabel: 'Learn More',
    // buttonLink: '/about',
    position: 'right',
  },
  {
    videoSrc: '/video/vid2.mp4',
    title: 'Specialist in Turnkey Solutions, High Quality Work.',
    desc: 'SenseInteriors® Our Turnkey service delivers every aspect of the project lifecycle',
    // buttonLabel: 'View More',
    // buttonLink: '/services',
    position: 'left',
  },
];

const getPositionClass = (position) => {
  return position === 'left' ? 'caption-left' : 'caption-right';
};

const Carousel = () => {
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              data-bs-interval="5000"
              key={index}
              style={{ position: 'relative' }}
            >
              <video
                className="d-block w-100"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  height: '100vh',
                  objectFit: 'cover',
                }}
              >
                <source src={slide.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div
                className={`carousel-caption d-flex flex-column ${getPositionClass(
                  slide.position
                )}`}
              >
                <h1 className="carousel-text-title text-uppercase text-light fw-semibold">
                  {slide.title}
                </h1>
                <p className="carousel-text-desc text-light fw-semibold">
                  {slide.desc}
                </p>
                {/* <Link href={slide.buttonLink} className="text-decoration-none">
                  <div className="carousel-text-button btn rounded-pill text-light mt-3">
                    {slide.buttonLabel}
                  </div>
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          style={{ zIndex: 2 }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          style={{ zIndex: 2 }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
