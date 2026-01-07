import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <nav className={scrolled ? "navbar navbar-scrolled" : "navbar"}>
  <div className="nav-logo">〔PK〕</div>

  <div className={`nav-links ${menuOpen ? "open" : ""}`}>
    <Link smooth to="#home" onClick={() => setMenuOpen(false)}>Home</Link>
    <Link smooth to="#about" onClick={() => setMenuOpen(false)}>About</Link>
    <Link smooth to="#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
    <Link smooth to="#experience" onClick={() => setMenuOpen(false)}>Experience</Link>
    <Link smooth to="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
    <Link smooth to="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
  </div>

  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? <FaTimes /> : <FaBars />}
  </div>
</nav>

  );
}
