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
    <nav className={`navbar navbar-expand-lg p-md-4 fixed-top ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
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
                <li><Link href="/tinted-reflective-glass" className="dropdown-item d-flex align-items-center gap-2"><Droplet size={16} className='text-b' /> Tinted & Reflective Glass</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/toughened-glass" className="dropdown-item d-flex align-items-center gap-2"><Ruler size={16} className='text-b' /> Toughened Glass</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/beveled-glass" className="dropdown-item d-flex align-items-center gap-2"><Layers size={16} className='text-b' /> Beveled Glass</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/exterior-glass" className="dropdown-item d-flex align-items-center gap-2"><Landmark size={16} className='text-b' /> Exterior Glass</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/staircase-railing" className="dropdown-item d-flex align-items-center gap-2"><MoveDown size={16} className='text-b' /> Staircase Railing</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/lacquered-glass" className="dropdown-item d-flex align-items-center gap-2"><PaintBucket size={16} className='text-b' /> Lacquered Glass</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/bend-glass" className="dropdown-item d-flex align-items-center gap-2"><Crop size={16} className='text-b' /> Bend Glass</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/stained-glass" className="dropdown-item d-flex align-items-center gap-2"><ScanLine size={16} className='text-b' /> Stained Glass</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/etching-glass" className="dropdown-item d-flex align-items-center gap-2"><Square size={16} className='text-b' /> Etching Glass</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/decorative-mirror" className="dropdown-item d-flex align-items-center gap-2"><Shapes size={16} className='text-b' /> Decorative Mirror</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/glass-block" className="dropdown-item d-flex align-items-center gap-2"><GlassWater size={16} className='text-b' /> Glass Block</Link></li>
                <hr className="dropdown-divider-custom" />
                <li><Link href="/designer-glass" className="dropdown-item d-flex align-items-center gap-2"><Sparkles size={16} className='text-b' /> Designer Glass</Link></li>
              </ul>


            </li>
            <li className="nav-item"><Link href="/our-projects" className="nav-link">OUR PROJECTS</Link></li>
            <li className="nav-item"><Link href="/contact" className="nav-link">CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
