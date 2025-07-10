"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/admissions", label: "Admissions" },
    { href: "/academics", label: "Academics" }, // Dropdown
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  // Close menus when navigating
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="logo animated-logo">
          <Link href="/">🎓 MySchool</Link>
        </div>

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
                <div
                  key={link.href}
                  className="dropdown"
                  onClick={() => isMobile && setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                  onMouseLeave={() => !isMobile && setDropdownOpen(false)}
                >
                  <span className="nav-link dropdown-toggle">Academics ▾</span>
                  <div
                    className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                  >
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
