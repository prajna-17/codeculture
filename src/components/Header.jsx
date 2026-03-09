"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import "./header.css";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/services", label: "Services", id: "services" },
    { href: "/about", label: "About", id: "about" },
    { href: "/projects", label: "Projects", id: "projects" },
    { href: "/contact", label: "Contact Us", id: "contact" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link href="/" className="logo-wrapper">
          <Image
            src="/img/logo.png"
            alt="Code Culture"
            width={160}
            height={50}
            priority
          />
        </Link>

        <nav className="nav">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={() => setActiveLink(link.id)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="explore">
          Explore Now
          <span className="arrow-icon">→</span>
        </Link>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mobileMenu open">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveLink(link.id);
                setOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="explore-mobile"
            onClick={() => setOpen(false)}
          >
            Explore Now →
          </Link>
        </div>
      )}
    </header>
  );
}
