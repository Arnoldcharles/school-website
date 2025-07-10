"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/admissions", label: "Admissions" },
    { href: "/contact", label: "Contact" },
    { href: "/gallery", label: "Gallery" },
    { href: '/academics', label: 'Academics' },
  ];

  // Optional: Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="logo animated-logo">🎓 MySchool</div>

        <button
          className="hamburger"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => {
            if (link.label === "Academics") {
              return (
                <div key={link.href} className="dropdown">
                  <span className="nav-link dropdown-toggle">Academics ▾</span>
                  <div className="dropdown-menu">
                    <Link href="/academics/nursery" className="dropdown-item">
                      Nursery
                    </Link>
                    <Link href="/academics/primary" className="dropdown-item">
                      Primary
                    </Link>
                    <Link href="/academics/secondary" className="dropdown-item">
                      Secondary
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
