"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {Button} from "./ui/button/Button";
import logo from '../images/logo.png';
import Image from "next/image";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = usePathname();
  const isHomePage = location === "/";

  const scrollToSection = (id) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <Image src={logo} alt="Logo" width={500} height={100} style={{width:'200px', height:'auto'}}/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <button onClick={() => scrollToSection("services")} className="nav-item">
          services
            </button>
            <Link href="/web-development">
            <button className="nav-item">
            web developement
            </button>
            </Link>
            <Link href="/digital-marketing">
            <button className="nav-item">
            Digital Marketing
            </button>
            </Link>
            <Link href="/graphic-design">
            <button className="nav-item">
            Graphic Design
            </button>
            </Link>
          <button className="get-started-btn">
            <Link style={{color:'white'}} href="/contact">Get Started</Link>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-container">
          <button onClick={() => scrollToSection("services")} className="nav-item">
          services
            </button>
            <Link href="/web-development">
            <button className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            web developement
            </button>
            </Link>
            <Link href="/digital-marketing">
            <button className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            Digital Marketing
            </button>
            </Link>
            <Link href="/graphic-design">
            <button className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            Graphic Design
            </button>
            </Link>
            <Link href="/blog">
            <button className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            Blogs
            </button>
            </Link>
            <Button className="get-started-btn" onClick={() => setMobileMenuOpen(false)}>
            <Link style={{color:'white'}} href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
