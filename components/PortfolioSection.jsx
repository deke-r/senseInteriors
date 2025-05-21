"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import "../styles/portfolio.css"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    const handleFilterClick = () => {
      const portfolios = document.querySelectorAll(".portfolio")

      portfolios.forEach((item) => {
        const element = item
        if (activeFilter === "all") {
          element.style.display = "inline-block"
        } else {
          const categories = (item).dataset.cat?.split(", ") || []
          if (categories.includes(activeFilter)) {
            element.style.display = "inline-block"
          } else {
            element.style.display = "none"
          }
        }
      })
    }

    handleFilterClick()
  }, [activeFilter])

  return (
    <section className="portfolio-section">
      <div className="container">
        <span className="hr-role"></span>
        <div className="portfolio-tab">
          <ul id="filters" className="clearfix">
            <li className={`filter ${activeFilter === "all" ? "active" : ""}`} onClick={() => setActiveFilter("all")}>
              all
            </li>
            <li
              className={`filter ${activeFilter === "residences" ? "active" : ""}`}
              onClick={() => setActiveFilter("residences")}
            >
              Residences Interior
            </li>
            <li
              className={`filter ${activeFilter === "furniture" ? "active" : ""}`}
              onClick={() => setActiveFilter("furniture")}
            >
              Furniture Interior
            </li>
            <li
              className={`filter ${activeFilter === "kitchen" ? "active" : ""}`}
              onClick={() => setActiveFilter("kitchen")}
            >
              Kitchen Interior
            </li>
            <li
              className={`filter ${activeFilter === "showroom" ? "active" : ""}`}
              onClick={() => setActiveFilter("showroom")}
            >
              Showroom Interior
            </li>
            <li
              className={`filter ${activeFilter === "washrooms" ? "active" : ""}`}
              onClick={() => setActiveFilter("washrooms")}
            >
              Washrooms Interior
            </li>
            <li
              className={`filter ${activeFilter === "corporate" ? "active" : ""}`}
              onClick={() => setActiveFilter("corporate")}
            >
              Corporate Interior
            </li>
          </ul>
        </div>
        <div className="portfolio-grid" id="MixItUpF4B363">
          {/* Residential Designs */}
          <PortfolioItem
            category="residences"
            imageSrc="/img/Residential-Designs-01.webp"
            altText="Residential Design 1"
          />
          <PortfolioItem
            category="residences"
            imageSrc="/img/Residential-Designs-02.webp"
            altText="Residential Design 2"
          />
          <PortfolioItem
            category="residences"
            imageSrc="/img/Residential-Designs-03.webp"
            altText="Residential Design 3"
          />
          <PortfolioItem
            category="residences"
            imageSrc="/img/Residential-Designs-04.webp"
            altText="Residential Design 4"
          />
          <PortfolioItem
            category="residences"
            imageSrc="/img/Residential-Designs-05.webp"
            altText="Residential Design 5"
          />
          <PortfolioItem
            category="residences"
            imageSrc="/img/Residential-Designs-06.webp"
            altText="Residential Design 6"
          />
          <PortfolioItem
            category="residences"
            imageSrc="/img/Residential-Designs-07.webp"
            altText="Residential Design 7"
          />
          <PortfolioItem
            category="residences"
            imageSrc="/img/Residential-Designs-08.webp"
            altText="Residential Design 8"
          />

          {/* Furniture Designs */}
          <PortfolioItem
            category="furniture"
            imageSrc="/img/furnitures-01.webp"
            altText="Furniture Design 1"
          />
          <PortfolioItem
            category="furniture"
            imageSrc="/img/furnitures-02.webp"
            altText="Furniture Design 2"
          />
          <PortfolioItem
            category="furniture"
            imageSrc="/img/furnitures-03.webp"
            altText="Furniture Design 3"
          />
          <PortfolioItem
            category="furniture"
            imageSrc="/img/furnitures-04.webp"
            altText="Furniture Design 4"
          />
          <PortfolioItem
            category="furniture"
            imageSrc="/img/furnitures-05.webp"
            altText="Furniture Design 5"
          />
          <PortfolioItem
            category="furniture"
            imageSrc="/img/furnitures-06.webp"
            altText="Furniture Design 6"
          />

          {/* Kitchen Designs */}
          <PortfolioItem
            category="kitchen"
            imageSrc="/img/beautiful-kitchen-interior-design.webp"
            altText="Kitchen Design 1"
          />
          <PortfolioItem
            category="kitchen"
            imageSrc="/img/3d-rendering-modern-kitchen-counter-with-white-biege-design.webp"
            altText="Kitchen Design 2"
          />
          <PortfolioItem
            category="kitchen"
            imageSrc="/img/3d-rendering-white-minimal-kitchen-with-wood-decoration.webp"
            altText="Kitchen Design 3"
          />

          {/* Showroom Designs */}
          <PortfolioItem
            category="showroom"
            imageSrc="/img/jewelry-store-shopping-center_1112-6549.webp"
            altText="Showroom Design 1"
          />
          <PortfolioItem
            category="showroom"
            imageSrc="/img/lobby-interior-realistic_1284-22531.webp"
            altText="Showroom Design 2"
          />
          <PortfolioItem
            category="showroom"
            imageSrc="/img/modern-minimalist-retail-store-interior_1310085-99358.webp"
            altText="Showroom Design 3"
          />



          <PortfolioItem
            category="washrooms"
            imageSrc="/img/public-toilet_1417-1759.webp"
            altText="Washroom Design 1"
          />
          <PortfolioItem
            category="washrooms"
            imageSrc="/img/tidy-bathroom-with-shiny-tiles_1203-1501.webp"
            altText="Washrooms Design 2"
          />
          <PortfolioItem
            category="washrooms"
            imageSrc="/img/3d-rendering-modern-design-marble-tile-toilet-bathroom_105762-2043.webp"
            altText="Washroom Design 3"
          />

          {/* Corporate Designs */}
          <PortfolioItem
            category="corporate"
            imageSrc="/img/modern-office-meeting-room-designed-collaboration-productivity_1294860-28763.webp"
            altText="Corporate Design 1"
          />
          <PortfolioItem
            category="corporate"
            imageSrc="/img/empty-room-with-chairs-desks_23-2149008873.webp"
            altText="Corporate Design 2"
          />
        </div>
      </div>
    </section>
  )
}



function PortfolioItem({ category, imageSrc, altText }) {
  return (
    <div className="portfolio" data-cat={category} style={{ display: "inline-block" }}>
      <div className="portfolio-wrapper">
        <div className="portfolio-bg">
          <Image src={imageSrc || "/placeholder.svg"} alt={altText} width={400} height={300} />
        </div>
        <div className="label">
          <div className="label-bg"></div>
          <div className="label-text">
            <h4>{altText}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
