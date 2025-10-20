"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link href="#home" className="logo">
        Rendy <span>Denny</span>
      </Link>

      <i 
        className="bi bi-list"
        id="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)} 
      />

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link href="#home" className="active" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="#education" onClick={() => setMenuOpen(false)}>Education</Link>
        <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;