"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap, Star } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Poppins:wght@300;400;600;700;800&display=swap');

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
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
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes subtle-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255, 140, 0, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 140, 0, 0.8), 0 0 50px rgba(255, 107, 53, 0.5);
          }
        }

        @keyframes float-particles {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 140, 0, 0.2), 0 0 40px rgba(255, 140, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 140, 0, 0.5), 0 0 80px rgba(255, 140, 0, 0.3);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(60px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        /* HERO CONTAINER */
        .hero-section {
          position: relative;
          width: 100%;
          height: 55vh;
          min-height: 500px;
          overflow: hidden;
          background: #0a0a0a;
        }

        @media (min-width: 768px) {
          .hero-section {
            height: 85vh;
            min-height: 650px;
          }
        }

        /* BACKGROUND IMAGE */
        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: fadeIn 1.2s ease-out;
        }

        /* OVERLAY - DYNAMIC GRADIENT */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(10, 10, 10, 0.65) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(10, 10, 10, 0.6) 100%
          );
          z-index: 2;
          animation: fadeIn 1.5s ease-out;
        }

        /* ANIMATED PARTICLES */
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #ff8c00;
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
          opacity: 0.6;
        }

        .particle-1 {
          left: 10%;
          animation: float-particles 8s linear infinite;
        }

        .particle-2 {
          left: 20%;
          animation: float-particles 10s linear infinite;
          animation-delay: 2s;
        }

        .particle-3 {
          left: 30%;
          animation: float-particles 12s linear infinite;
          animation-delay: 4s;
        }

        .particle-4 {
          left: 40%;
          animation: float-particles 9s linear infinite;
          animation-delay: 1s;
        }

        .particle-5 {
          left: 50%;
          animation: float-particles 11s linear infinite;
          animation-delay: 3s;
        }

        .particle-6 {
          left: 60%;
          animation: float-particles 10s linear infinite;
          animation-delay: 2.5s;
        }

        .particle-7 {
          left: 70%;
          animation: float-particles 9s linear infinite;
          animation-delay: 1.5s;
        }

        .particle-8 {
          left: 80%;
          animation: float-particles 12s linear infinite;
          animation-delay: 3.5s;
        }

        /* CONTENT WRAPPER */
        .hero-content-wrapper {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 1.5rem;
        }

        @media (min-width: 768px) {
          .hero-content-wrapper {
            padding: 3rem 2rem;
          }
        }

        /* CONTENT */
        .hero-content {
          max-width: 750px;
        }

        /* SUBTITLE */
        .hero-subtitle {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ff8c00;
          font-weight: 700;
          margin-bottom: 1.5rem;
          animation: slideInLeft 0.8s ease-out 0.1s both;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .subtitle-icon {
          animation: rotate-slow 3s linear infinite;
        }

        /* MAIN TITLE */
        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          line-height: 1.1;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          animation: slideUp 0.8s ease-out 0.2s both;
          word-spacing: 0.1em;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
            margin-bottom: 2rem;
            line-height: 1.15;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4.2rem;
          }
        }

        /* ACCENT WORD */
        .accent-word {
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          animation: pulse-glow 2s ease-in-out infinite;
          display: inline-block;
        }

        /* DESCRIPTION */
        .hero-description {
          font-family: 'Poppins', sans-serif;
          font-size: 1.05rem;
          line-height: 1.8;
          color: #d0d0d0;
          margin-bottom: 2.5rem;
          max-width: 550px;
          font-weight: 300;
          animation: slideUp 0.8s ease-out 0.3s both;
        }

        @media (min-width: 768px) {
          .hero-description {
            font-size: 1.15rem;
            margin-bottom: 3rem;
            line-height: 1.9;
          }
        }

        /* BUTTON WRAPPER */
        .button-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          animation: slideUp 0.8s ease-out 0.4s both;
        }

        /* CTA BUTTON */
        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 10px 30px rgba(255, 140, 0, 0.3);
          position: relative;
          overflow: hidden;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .hero-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hero-button:hover::before {
          transform: translateX(100%);
        }

        .hero-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 20px 50px rgba(255, 140, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .hero-button:active {
          transform: translateY(-1px) scale(1.02);
        }

        .button-icon {
          width: 18px;
          height: 18px;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hero-button:hover .button-icon {
          transform: translateX(6px);
        }

        /* SCROLL INDICATOR */
        .scroll-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
        }

        .scroll-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: slideUp 1s ease-out 0.6s both;
        }

        .scroll-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: #ff8c00;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.8;
        }

        .scroll-dots {
          display: flex;
          gap: 0.4rem;
        }

        .scroll-dot {
          width: 6px;
          height: 6px;
          background: #ff8c00;
          border-radius: 50%;
          animation: subtle-float 2s ease-in-out infinite;
          opacity: 0.7;
        }

        .scroll-dot:nth-child(1) {
          animation-delay: 0s;
        }

        .scroll-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .scroll-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        /* DIVIDER LINE */
        .divider-line {
          position: absolute;
          bottom: 80px;
          left: 2rem;
          width: 3px;
          height: 50px;
          background: linear-gradient(180deg, #ff8c00 0%, #ff6b35 50%, transparent 100%);
          animation: slideUp 1s ease-out 0.3s both;
          opacity: 0.7;
          box-shadow: 0 0 15px rgba(255, 140, 0, 0.4);
        }

        @media (max-width: 768px) {
          .divider-line {
            display: none;
          }
        }

        /* FLOATING ACCENT ELEMENTS */
        .accent-element {
          position: absolute;
          pointer-events: none;
          z-index: 2;
        }

        .accent-1 {
          top: 10%;
          right: 5%;
          width: 80px;
          height: 80px;
          background: rgba(255, 140, 0, 0.05);
          border: 2px solid rgba(255, 140, 0, 0.2);
          border-radius: 20px;
          animation: float-particles 15s linear infinite;
          animation-delay: 0s;
        }

        .accent-2 {
          top: 60%;
          right: 10%;
          width: 60px;
          height: 60px;
          background: rgba(255, 107, 53, 0.05);
          border: 2px solid rgba(255, 107, 53, 0.2);
          border-radius: 15px;
          animation: float-particles 18s linear infinite;
          animation-delay: 3s;
        }

        .accent-3 {
          top: 20%;
          left: 5%;
          width: 40px;
          height: 40px;
          background: rgba(255, 140, 0, 0.05);
          border: 2px solid rgba(255, 140, 0, 0.2);
          border-radius: 10px;
          animation: float-particles 12s linear infinite;
          animation-delay: 2s;
        }

        @media (max-width: 768px) {
          .accent-element {
            display: none;
          }
        }

        /* MOBILE ADJUSTMENTS */
        @media (max-width: 640px) {
          .hero-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .hero-description {
            font-size: 0.95rem;
            margin-bottom: 2rem;
            line-height: 1.7;
          }

          .hero-button {
            padding: 0.85rem 1.5rem;
            font-size: 0.9rem;
          }

          .hero-subtitle {
            font-size: 0.75rem;
            margin-bottom: 1rem;
          }

          .button-group {
            gap: 1rem;
          }
        }
      `}</style>

      <div className="hero-section">
        {/* BACKGROUND IMAGE */}
        <div className="hero-image">
          <Image
            src="/img/hero.jpeg"
            alt="Hero background"
            fill
            priority
            quality={90}
            className="object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="hero-overlay" />

        {/* ANIMATED PARTICLES */}
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
        <div className="particle particle-6" />
        <div className="particle particle-7" />
        <div className="particle particle-8" />

        {/* ACCENT ELEMENTS */}
        <div className="accent-element accent-1" />
        <div className="accent-element accent-2" />
        <div className="accent-element accent-3" />

        {/* DIVIDER LINE */}
        <div className="divider-line" />

        {/* CONTENT */}
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <p className="hero-subtitle">
              <Zap size={16} className="subtitle-icon" />
              Welcome to CodeCulture
            </p>

            <h1 className="hero-title">
              Think Big. We make <span className="accent-word">IT</span>{" "}
              possible.
            </h1>

            <p className="hero-description">
              We place you at the centre of international networks to advance
              your strategic interests and drive meaningful growth for your
              business.
            </p>

            <div className="button-group">
              <button className="hero-button">
                Get Started
                <ArrowRight className="button-icon" size={18} />
              </button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  opacity: 0.7,
                }}
              >
                {/* <Star size={16} color="#ff8c00" fill="#ff8c00" /> */}
                {/* <span
                  style={{
                    fontSize: "0.9rem",
                    color: "#d0d0d0",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Trusted by 500+ Companies
                </span> */}
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <div className="scroll-wrapper">
            {/* <span className="scroll-text">Scroll</span> */}
            <div className="scroll-dots">
              <div className="scroll-dot" />
              <div className="scroll-dot" />
              <div className="scroll-dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
