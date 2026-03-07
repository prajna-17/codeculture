"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const footerSections = [
    {
      title: "Quick Links",
      links: ["Home", "Services", "Blogs", "Contact"],
    },
    {
      title: "Services",
      links: [
        "Web Development",
        "App Development",
        "Digital Marketing",
        "Cloud Solutions",
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "info@codeculture.com",
      href: "mailto:info@codeculture.com",
    },
    {
      icon: Phone,
      label: "+91 12345 7890",
      href: "tel:+911234567890",
    },
    {
      icon: MapPin,
      label: "Phase 3, Noida",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer
      ref={footerRef}
      style={{
        background: "#ffffff",
        color: "#ffffff",
        padding: "4rem 1.5rem 2rem",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Poppins:wght@300;400;600;700;800&display=swap');

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            color: #ff8c00;
            text-shadow: 0 0 10px rgba(255, 140, 0, 0.3);
          }
          50% {
            color: #ff6b35;
            text-shadow: 0 0 20px rgba(255, 107, 53, 0.5);
          }
        }

        @keyframes underline-expand {
          from {
            width: 0;
            left: 0;
          }
          to {
            width: 100%;
            left: 0;
          }
        }

        @keyframes icon-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 140, 0, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 140, 0, 0.5);
          }
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .footer-content {
            grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
            gap: 2.5rem;
          }
        }

        .footer-section {
          animation: slideInUp 0.8s ease-out backwards;
        }

        .footer-section:nth-child(1) {
          animation-delay: 0.1s;
        }

        .footer-section:nth-child(2) {
          animation-delay: 0.2s;
        }

        .footer-section:nth-child(3) {
          animation-delay: 0.3s;
        }

        .footer-section:nth-child(4) {
          animation-delay: 0.4s;
        }

        .footer-logo {
          margin-bottom: 1.5rem;
          animation: slideInLeft 0.8s ease-out 0.1s both;
        }

        .footer-logo img {
          height: 50px;
          width: auto;
          transition: all 0.3s ease;
          filter: brightness(1) drop-shadow(0 0 5px rgba(255, 140, 0, 0.2));
        }

        .footer-logo:hover img {
          filter: brightness(1.1) drop-shadow(0 0 15px rgba(255, 140, 0, 0.4));
          transform: scale(1.05);
        }

        .footer-description {
          font-size: 0.95rem;
          line-height: 1.8;
          color: #000000;
          margin-bottom: 1.5rem;
          animation: slideInLeft 0.8s ease-out 0.15s both;
          font-weight: 300;
        }

        .footer-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 1.2rem;
          position: relative;
          animation: fadeIn 0.8s ease-out;
          letter-spacing: 0.05em;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
          animation: slideInUp 0.8s ease-out backwards;
        }

        .footer-section:nth-child(2) .footer-links li:nth-child(1) {
          animation-delay: 0.25s;
        }

        .footer-section:nth-child(2) .footer-links li:nth-child(2) {
          animation-delay: 0.3s;
        }

        .footer-section:nth-child(2) .footer-links li:nth-child(3) {
          animation-delay: 0.35s;
        }

        .footer-section:nth-child(2) .footer-links li:nth-child(4) {
          animation-delay: 0.4s;
        }

        .footer-section:nth-child(3) .footer-links li:nth-child(1) {
          animation-delay: 0.35s;
        }

        .footer-section:nth-child(3) .footer-links li:nth-child(2) {
          animation-delay: 0.4s;
        }

        .footer-section:nth-child(3) .footer-links li:nth-child(3) {
          animation-delay: 0.45s;
        }

        .footer-section:nth-child(3) .footer-links li:nth-child(4) {
          animation-delay: 0.5s;
        }

        .footer-links a {
          color: #000000;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          font-weight: 400;
        }

        .footer-links a::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .footer-links a:hover {
          color: #ff8c00;
          transform: translateX(8px);
        }

        .footer-links a:hover::before {
          width: 100%;
        }

        .footer-contact {
          animation: slideInUp 0.8s ease-out 0.4s both;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.2rem;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 8px;
          animation: slideInRight 0.8s ease-out backwards;
        }

        .footer-contact .contact-item:nth-child(1) {
          animation-delay: 0.45s;
        }

        .footer-contact .contact-item:nth-child(2) {
          animation-delay: 0.5s;
        }

        .footer-contact .contact-item:nth-child(3) {
          animation-delay: 0.55s;
        }

        .contact-item:hover {
          background: rgba(255, 140, 0, 0.1);
          transform: translateX(5px);
        }

        .contact-icon {
          color: #ff8c00;
          flex-shrink: 0;
          transition: all 0.3s ease;
          margin-top: 2px;
          animation: icon-bounce 2s ease-in-out infinite;
        }

        .contact-item:hover .contact-icon {
          color: #ff6b35;
          transform: scale(1.2);
          animation: glow-pulse 1.5s ease-in-out infinite;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
        }

        .contact-label {
          font-size: 0.8rem;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.2rem;
          font-weight: 600;
          font-family: 'Space Grotesk', sans-serif;
        }

        .contact-value {
          font-size: 0.95rem;
          color: #000000;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .contact-item:hover .contact-value {
          color: #ff8c00;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          animation: slideInRight 0.8s ease-out 0.45s both;
          flex-wrap: wrap;
        }

        .social-link {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 140, 0, 0.1);
          border: 2px solid rgba(255, 140, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff8c00;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          animation: slideInUp 0.6s ease-out backwards;
        }

        .social-links .social-link:nth-child(1) {
          animation-delay: 0.5s;
        }

        .social-links .social-link:nth-child(2) {
          animation-delay: 0.55s;
        }

        .social-links .social-link:nth-child(3) {
          animation-delay: 0.6s;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #ff8c00, #ff6b35);
          border-color: transparent;
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0 15px 40px rgba(255, 140, 0, 0.3);
        }

        .social-link svg {
          transition: all 0.3s ease;
        }

        .social-link:hover svg {
          color: white;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        /* DIVIDER */
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 140, 0, 0.3), transparent);
          margin: 3rem 0;
          animation: slideInUp 0.8s ease-out 0.5s both;
        }

        /* BOTTOM SECTION */
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
          animation: fadeIn 0.8s ease-out 0.6s both;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }
        }

        .footer-copyright {
          font-size: 0.85rem;
          color: #999999;
          font-weight: 300;
        }

        .footer-copyright span {
          color: #ff8c00;
          font-weight: 600;
        }

        .footer-bottom-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        @media (min-width: 768px) {
          .footer-bottom-links {
            justify-content: flex-end;
          }
        }

        .footer-bottom-links a {
          font-size: 0.85rem;
          color: #999999;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-bottom-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #ff8c00;
          transition: width 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: #ff8c00;
        }

        .footer-bottom-links a:hover::after {
          width: 100%;
        }

        /* RESPONSIVE */
        @media (max-width: 640px) {
          .footer-content {
            gap: 2rem;
          }

          .footer-title {
            font-size: 1rem;
          }

          .footer-links a {
            font-size: 0.9rem;
          }

          .social-links {
            justify-content: center;
            margin-top: 1rem;
          }
        }
      `}</style>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr] gap-8 mb-12">
          {/* LOGO & DESCRIPTION */}
          <div className="footer-section">
            <div className="footer-logo">
              <Image
                src="/img/logo.png"
                alt="CodeCulture"
                width={150}
                height={50}
                style={{
                  height: "50px",
                  width: "auto",
                  transition: "all 0.3s ease",
                  filter:
                    "brightness(1) drop-shadow(0 0 5px rgba(255, 140, 0, 0.2))",
                }}
              />
            </div>
            <p className="footer-description">
              We are a forward-thinking technology company focused on designing
              clean, scalable, and intelligent digital products. Every solution
              is crafted with precision and strategy.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    title={social.label}
                    style={{
                      animation: `slideInUp 0.6s ease-out ${0.5 + index * 0.05}s both`,
                    }}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {footerSections[0].links.map((link, index) => (
                <li
                  key={index}
                  style={{
                    animation: `slideInUp 0.8s ease-out ${0.25 + index * 0.05}s both`,
                  }}
                >
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              {footerSections[1].links.map((link, index) => (
                <li
                  key={index}
                  style={{
                    animation: `slideInUp 0.8s ease-out ${0.35 + index * 0.05}s both`,
                  }}
                >
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="footer-section footer-contact">
            <h3 className="footer-title">Get In Touch</h3>
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="contact-item"
                    style={{
                      animation: `slideInRight 0.8s ease-out ${0.45 + index * 0.05}s both`,
                    }}
                  >
                    <Icon
                      size={20}
                      className="contact-icon"
                      style={{
                        animation: `icon-bounce 2s ease-in-out infinite`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    />
                    <div className="contact-text">
                      <span className="contact-label">
                        {contact.label === "info@codeculture.com"
                          ? "Email"
                          : contact.label === "+91 12345 7890"
                            ? "Phone"
                            : "Location"}
                      </span>
                      <span className="contact-value">{contact.label}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="footer-divider"
          style={{
            animation: "slideInUp 0.8s ease-out 0.5s both",
          }}
        />

        {/* BOTTOM */}
        <div
          className="footer-bottom"
          style={{
            animation: "fadeIn 0.8s ease-out 0.6s both",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <p
            className="footer-copyright"
            style={{
              fontSize: "0.85rem",
              color: "#999999",
              fontWeight: "300",
            }}
          >
            © 2024{" "}
            <span style={{ color: "#ff8c00", fontWeight: "600" }}>
              CodeCulture
            </span>
            . All rights reserved.
          </p>
          <div
            className="footer-bottom-links"
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "flex-end",
            }}
          >
            <a
              href="#"
              style={{
                fontSize: "0.85rem",
                color: "#999999",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff8c00")}
              onMouseLeave={(e) => (e.target.style.color = "#999999")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                fontSize: "0.85rem",
                color: "#999999",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff8c00")}
              onMouseLeave={(e) => (e.target.style.color = "#999999")}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
