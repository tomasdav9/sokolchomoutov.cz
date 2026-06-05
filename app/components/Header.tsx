"use client";

import { MouseEvent, useState } from "react";
import { navLinks } from "../data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenuOnLinkClick(event: MouseEvent<HTMLElement>) {
    if (event.target instanceof HTMLAnchorElement) {
      setMenuOpen(false);
    }
  }

  return (
    <header className="site">
      <div className="wrap nav">
        <a className="brand" href="#top">
          <img src="/assets/logo.jpg" alt="Znak TJ Sokol Chomoutov" />
          <span className="bt">
            <strong>Sokol Chomoutov</strong>
          </span>
        </a>
        <nav
          className={`links${menuOpen ? " open" : ""}`}
          id="navlinks"
          onClick={closeMenuOnLinkClick}
        >
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#kontakt">
          Kontaktujte nás
        </a>
        <button
          className="burger"
          id="burger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="navlinks"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
