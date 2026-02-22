import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>MarvelGB</h1>

      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <p onClick={() => scrollToSection("home")}>Home</p>
          <p onClick={() => scrollToSection("about")}>About</p>
          <p onClick={() => scrollToSection("projects")}>Projects</p>
          <p onClick={() => scrollToSection("contact")}>Contact</p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
