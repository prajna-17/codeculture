"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Info,
  Wrench,
  FolderOpen,
  Phone,
  Monitor,
  Smartphone,
  Megaphone,
  Paintbrush,
  Globe,
  Settings,
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import "./header.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/services", label: "Services", id: "services" },
    { href: "/about", label: "About", id: "about" },
    { href: "/projects", label: "Projects", id: "projects" },
    { href: "/contact", label: "Contact Us", id: "contact" },
  ];

  const serviceLinks = [
    {
      href: "/services#web-development",
      label: "Web Development",
      icon: Monitor,
    },
    {
      href: "/services#app-development",
      label: "App Development",
      icon: Smartphone,
    },
    {
      href: "/services#digital-marketing",
      label: "Digital Marketing",
      icon: Megaphone,
    },
    {
      href: "/services#ui-ux",
      label: "UI/UX Design",
      icon: Paintbrush,
    },
    {
      href: "/services#domain-hosting",
      label: "Domain & Hosting",
      icon: Globe,
    },
    {
      href: "/services#maintenance",
      label: "Website Maintenance",
      icon: Settings,
    },
  ];
  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link href="/" className="logo-wrapper">
            <Image
              src="/img/logo.png"
              alt="Code Culture"
              width={95}
              height={30}
              priority
            />
          </Link>

          <nav className="nav">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="explore">
            Explore Now
            <span className="arrow-icon">→</span>
          </Link>

          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)} />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`mobileMenu ${open ? "open" : ""}`}>
        {/* Header */}
        <div className="mobile-header">
          <Image
            src="/img/logo.png"
            alt="Code Culture"
            width={70}
            height={22}
          />
          <button
            className="mobile-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Orange gradient bar */}
        <div className="mobile-accent-bar" />

        {/* Nav Links */}
        <div className="mobile-links">
          <Link
            href="/"
            className="mobile-nav-item"
            onClick={() => setOpen(false)}
          >
            <span className="mobile-nav-icon">
              <Home size={20} />
            </span>
            <span className="mobile-nav-label">Home</span>
          </Link>
          <div className="mobile-divider" />

          <Link
            href="/about"
            className="mobile-nav-item"
            onClick={() => setOpen(false)}
          >
            <span className="mobile-nav-icon">
              <Info size={20} />
            </span>
            <span className="mobile-nav-label">About Us</span>
          </Link>
          <div className="mobile-divider" />

          {/* Services Accordion */}
          <div className="mobile-nav-item mobile-nav-accordion">
            <span className="mobile-nav-icon">
              <Wrench size={20} />
            </span>
            <Link
              href="/services"
              className="mobile-nav-label"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>{" "}
            <span
              className="mobile-nav-chevron"
              onClick={(e) => {
                e.stopPropagation();
                setServicesOpen(!servicesOpen);
              }}
            >
              {" "}
              {servicesOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </span>
          </div>

          <div
            className={`mobile-services-dropdown ${servicesOpen ? "open" : ""}`}
          >
            {serviceLinks.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="mobile-service-item"
                  onClick={() => {
                    setOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  <span className="mobile-service-icon">
                    <Icon size={18} />
                  </span>
                  <span>{service.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="mobile-divider" />

          <Link
            href="/projects"
            className="mobile-nav-item"
            onClick={() => setOpen(false)}
          >
            <span className="mobile-nav-icon">
              <FolderOpen size={20} />
            </span>
            <span className="mobile-nav-label">Projects</span>
          </Link>
          <div className="mobile-divider" />

          <Link
            href="/contact"
            className="mobile-nav-item"
            onClick={() => setOpen(false)}
          >
            <span className="mobile-nav-icon">
              <Phone size={20} />
            </span>
            <span className="mobile-nav-label">Contact Us</span>
          </Link>
          <div className="mobile-divider" />
        </div>

        {/* Social Icons */}
        <div className="mobile-social">
          <a href="#" aria-label="Facebook" className="social-icon-link">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="social-icon-link">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="social-icon-link">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </>
  );
}
