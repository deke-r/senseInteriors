'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../styles/navbar.css';
import {
  GlassWater,
  Ruler,
  Layers,
  Landmark,
  MoveDown,
  PaintBucket,
  Crop,
  ScanLine,
  Square,
  Sparkles,
  Droplet,
  Shapes
} from 'lucide-react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
  <nav
  className={`navbar navbar-expand-lg p-md-4 fixed-top ${
    scrolled ? 'scrolled drop-down' : 'bg-transparent'
  }`}
>

      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-start">
          <img src='/img/Sense_Interior_Logo.webp' alt="SENSE INTERIORS" width={120} />
        </Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse bg-md-light rounded-2 navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-md-5 mb-2 text-center mb-lg-0">
            <li className="nav-item"><Link href="/" className="nav-link">HOME</Link></li>
            <li className="nav-item"><Link href="/about-sense-interiors" className="nav-link">ABOUT</Link></li>
            <li className={`nav-item dropdown ${dropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
              <span className="nav-link dropdown-toggle" id="servicesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                SERVICES
              </span>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <Link href="/architectural-firms" className="dropdown-item d-flex align-items-center gap-2">
                    <Landmark size={16} className="text-b" /> Architectural
                  </Link>
                </li>
                <hr className="dropdown-divider-custom" />
                <li>
                  <Link href="/interior-design-company-in-delhi" className="dropdown-item d-flex align-items-center gap-2">
                    <Layers size={16} className="text-b" /> Interiors Design
                  </Link>
                </li>
                <hr className="dropdown-divider-custom" />
                <li>
                  <Link href="/turnkey-project-in-delhi-ncr" className="dropdown-item d-flex align-items-center gap-2">
                    <Sparkles size={16} className="text-b" /> Turnkey
                  </Link>
                </li>
                <hr className="dropdown-divider-custom" />
                <li>
                  <Link href="/interior-design-consultancy-in-delhi" className="dropdown-item d-flex align-items-center gap-2">
                    <Ruler size={16} className="text-b" /> Consultancy
                  </Link>
                </li>
              </ul>



            </li>
            <li className="nav-item"><Link href="/our-projects" className="nav-link">OUR PROJECTS</Link></li>
            <li className="nav-item"><Link href="/career" className="nav-link">CAREER</Link></li>
            <li className="nav-item"><Link href="/contact" className="nav-link">CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
