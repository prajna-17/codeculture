"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle, Zap, Rocket, Crown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function WhyChoose() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Customer First Approach",
      description:
        "We prioritize your needs and goals, putting customer satisfaction at the heart of everything we do.",
      icon: Crown,
      color: "#ff8c00",
    },
    {
      title: "Built for Scale",
      description:
        "Our solutions are designed to grow with your business, handling exponential growth effortlessly.",
      icon: Rocket,
      color: "#ff6b35",
    },
    {
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising on quality or attention to detail.",
      icon: Zap,
      color: "#ff8c00",
    },
    {
      title: "Functional Expertise",
      description:
        "Deep technical knowledge combined with strategic thinking for optimal results.",
      icon: CheckCircle,
      color: "#ff6b35",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#e9e3de] via-[#f0ebe5] to-[#e9e3de] py-32 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Poppins:wght@300;400;600;700;800&display=swap');

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.7);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(255, 140, 0, 0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 10px 40px rgba(255, 140, 0, 0.15);
          }
          50% {
            box-shadow: 0 20px 60px rgba(255, 140, 0, 0.3);
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

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* BACKGROUND ELEMENTS */
        .decoration-blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          pointer-events: none;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: #ff8c00;
          top: -150px;
          right: -100px;
          animation: float 12s ease-in-out infinite;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: #ff6b35;
          bottom: -100px;
          left: -50px;
          animation: float 14s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* HEADER */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }

        .header-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #7A360D;
          animation: fadeInDown 0.8s ease-out;
          letter-spacing: -0.01em;
          margin-bottom: 0.8rem;
        }

        @media (min-width: 768px) {
          .header-title {
            font-size: 3.2rem;
          }
        }

        .header-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 1.05rem;
          color: #7A360D;
          animation: fadeInDown 0.8s ease-out 0.2s both;
          font-weight: 400;
          letter-spacing: 0.05em;
        }

        .title-underline {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          margin: 1.5rem auto 0;
          border-radius: 2px;
          animation: slideInUp 0.8s ease-out 0.3s both;
        }

        /* CARDS GRID */
        .features-grid {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }

        /* FEATURE CARD */
        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid transparent;
          animation: slideInUp 0.8s ease-out backwards;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .feature-card:nth-child(1) {
          animation-delay: 0.3s;
        }

        .feature-card:nth-child(2) {
          animation-delay: 0.4s;
        }

        .feature-card:nth-child(3) {
          animation-delay: 0.5s;
        }

        .feature-card:nth-child(4) {
          animation-delay: 0.6s;
        }

        /* CARD BACKGROUND GRADIENT */
        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 107, 53, 0.05));
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          transform: translateY(-15px) scale(1.05);
          border-color: #ff8c00;
          box-shadow: 0 30px 80px rgba(255, 140, 0, 0.2), 0 0 50px rgba(255, 140, 0, 0.1);
        }

        /* ICON WRAPPER */
        .icon-wrapper {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.2), rgba(255, 107, 53, 0.15));
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid rgba(255, 140, 0, 0.2);
          animation: scaleIn 0.6s ease-out backwards;
          position: relative;
          overflow: hidden;
        }

        .feature-card:nth-child(1) .icon-wrapper {
          animation-delay: 0.35s;
        }

        .feature-card:nth-child(2) .icon-wrapper {
          animation-delay: 0.45s;
        }

        .feature-card:nth-child(3) .icon-wrapper {
          animation-delay: 0.55s;
        }

        .feature-card:nth-child(4) .icon-wrapper {
          animation-delay: 0.65s;
        }

        .feature-card:hover .icon-wrapper {
          background: linear-gradient(135deg, #ff8c00, #ff6b35);
          border-color: transparent;
          transform: scale(1.2) rotate(10deg);
          box-shadow: 0 15px 40px rgba(255, 140, 0, 0.3);
        }

        .icon-wrapper svg {
          color: #ff8c00;
          transition: all 0.5s ease;
          filter: drop-shadow(0 2px 5px rgba(255, 140, 0, 0.2));
        }

        .feature-card:hover .icon-wrapper svg {
          color: white;
          transform: scale(1.2);
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        /* CARD CONTENT */
        .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
          line-height: 1.3;
          transition: color 0.3s ease;
          animation: slideInUp 0.8s ease-out backwards;
        }

        .feature-card:nth-child(1) .card-title {
          animation-delay: 0.4s;
        }

        .feature-card:nth-child(2) .card-title {
          animation-delay: 0.5s;
        }

        .feature-card:nth-child(3) .card-title {
          animation-delay: 0.6s;
        }

        .feature-card:nth-child(4) .card-title {
          animation-delay: 0.7s;
        }

        .feature-card:hover .card-title {
          color: #ff8c00;
        }

        .card-description {
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          color: #666;
          line-height: 1.7;
          flex: 1;
          transition: color 0.3s ease;
          animation: slideInUp 0.8s ease-out backwards;
          font-weight: 300;
        }

        .feature-card:nth-child(1) .card-description {
          animation-delay: 0.45s;
        }

        .feature-card:nth-child(2) .card-description {
          animation-delay: 0.55s;
        }

        .feature-card:nth-child(3) .card-description {
          animation-delay: 0.65s;
        }

        .feature-card:nth-child(4) .card-description {
          animation-delay: 0.75s;
        }

        .feature-card:hover .card-description {
          color: #555;
        }

        /* DIVIDER */
        .card-divider {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          margin-top: auto;
          margin-bottom: 0;
          border-radius: 2px;
          transition: all 0.5s ease;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
        }

        .feature-card:hover .card-divider {
          width: 100%;
          opacity: 1;
          transform: scaleX(1);
        }

        /* CTA BUTTON */
        .cta-button {
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%);
          color: white;
          padding: 1.2rem 3rem;
          border-radius: 50px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 10px 30px rgba(255, 140, 0, 0.3);
          margin-top: 3rem;
          animation: slideInUp 0.8s ease-out 0.7s both;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8c00 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
        }

        .cta-button:hover::before {
          opacity: 1;
        }

        .cta-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 20px 50px rgba(255, 140, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .cta-button:active {
          transform: translateY(-1px) scale(1.02);
        }

        /* CONNECTING LINES */
        .connecting-line {
          position: absolute;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff8c00, transparent);
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          animation: slideInUp 1s ease-out 0.5s both;
        }

        @media (max-width: 1023px) {
          .connecting-line {
            display: none;
          }
        }

    .card-number {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: rgba(255, 140, 0, 0.1);
  border: 2px solid #ff8c00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #ff8c00;
  font-size: 0.9rem;
  transition: all 0.5s ease;
  opacity: 0;
}
       .feature-card:hover .card-number {
  opacity: 1;
  background: linear-gradient(135deg, #ff8c00, #ff6b35);
  color: white;
  border-color: transparent;
  transform: scale(1.3);
}
      `}</style>

      {/* BACKGROUND DECORATIONS */}
      <div className="decoration-blob blob-1" />
      <div className="decoration-blob blob-2" />

      {/* HEADER */}
      <div className="section-header">
        <h2 className="header-title">Why Choose CodeCulture</h2>
        <p className="header-subtitle">Where engineering meets culture</p>
        <div className="title-underline" />
      </div>

      {/* FEATURES GRID */}
      <div className="features-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="feature-card"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* CONNECTING LINE */}
              <div className="connecting-line" />

              {/* NUMBER BADGE */}
              <div className="card-number">{index + 1}</div>

              {/* ICON */}
              <div className="icon-wrapper">
                <Icon size={36} />
              </div>

              {/* CONTENT */}
              <div className="card-content">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>

              {/* DIVIDER */}
              <div className="card-divider" />
            </div>
          );
        })}
      </div>

      {/* CTA BUTTON */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
        <button className="cta-button" onClick={() => router.push("/contact")}>
          Work With Us
        </button>{" "}
      </div>
    </section>
  );
}
