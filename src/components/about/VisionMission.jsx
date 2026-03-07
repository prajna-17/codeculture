"use client";

import { useState, useEffect, useRef } from "react";
import { Eye, Target, ArrowRight } from "lucide-react";

export default function VisionMission() {
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

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#f8f8f8] via-white to-[#f5f5f5] py-28 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Poppins:wght@300;400;600;700;800&display=swap');

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
            box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(255, 140, 0, 0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 20px 60px rgba(255, 140, 0, 0.1), 0 0 30px rgba(255, 140, 0, 0.05);
          }
          50% {
            box-shadow: 0 20px 80px rgba(255, 140, 0, 0.25), 0 0 50px rgba(255, 140, 0, 0.15);
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

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
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

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        /* BACKGROUND ELEMENTS */
        .decoration-blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.06;
          pointer-events: none;
          z-index: 0;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: #ff8c00;
          top: -100px;
          right: -100px;
          animation: float 10s ease-in-out infinite;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: #ff6b35;
          bottom: -50px;
          left: -100px;
          animation: float 12s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* SECTION TITLE */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .section-vtitle {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #7A360D;
          margin-bottom: 1.5rem;
          animation: fadeInDown 0.8s ease-out;
          letter-spacing: -0.01em;
        }

        @media (min-width: 768px) {
          .section-vtitle {
            font-size: 3.2rem;
          }
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          margin: 0 auto;
          border-radius: 2px;
          animation: slideInUp 0.8s ease-out 0.2s both;
        }

        /* CARDS CONTAINER */
        .cards-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .cards-container {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        /* CARD */
        .vision-card {
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
          animation: slideInUp 0.8s ease-out backwards;
          animation-fill-mode: both;
        }

        .vision-card:nth-child(1) {
          animation-delay: 0.3s;
        }

        .vision-card:nth-child(2) {
          animation-delay: 0.5s;
        }

        @media (min-width: 768px) {
          .vision-card {
            padding: 2.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
        }

        /* CARD BACKGROUND EFFECT */
        .vision-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.05), rgba(255, 107, 53, 0.02));
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
        }

        .vision-card:hover::before {
          opacity: 1;
        }

        .vision-card:hover {
          transform: translateY(-15px);
          border-color: #ff8c00;
          box-shadow: 0 30px 80px rgba(255, 140, 0, 0.2), 0 0 60px rgba(255, 140, 0, 0.1);
        }

        /* ICON WRAPPER */
        .icon-wrapper {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 107, 53, 0.1));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid rgba(255, 140, 0, 0.2);
          animation: scaleIn 0.6s ease-out backwards;
          position: relative;
          overflow: hidden;
        }

        .vision-card:nth-child(1) .icon-wrapper {
          animation-delay: 0.4s;
        }

        .vision-card:nth-child(2) .icon-wrapper {
          animation-delay: 0.6s;
        }

        @media (min-width: 768px) {
          .icon-wrapper {
            width: 100px;
            height: 100px;
          }
        }

        .vision-card:hover .icon-wrapper {
          background: linear-gradient(135deg, #ff8c00, #ff6b35);
          border-color: transparent;
          transform: scale(1.15) rotate(10deg);
          box-shadow: 0 20px 50px rgba(255, 140, 0, 0.3);
        }

        .icon-wrapper svg {
          color: #ff8c00;
          transition: all 0.5s ease;
          filter: drop-shadow(0 2px 5px rgba(255, 140, 0, 0.2));
        }

        .vision-card:hover .icon-wrapper svg {
          color: white;
          transform: scale(1.2);
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        /* CARD CONTENT */
        .card-content {
          flex: 1;
        }

        .card-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          color: #ff8c00;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          animation: slideInUp 0.8s ease-out backwards;
        }

        .vision-card:nth-child(1) .card-label {
          animation-delay: 0.45s;
        }

        .vision-card:nth-child(2) .card-label {
          animation-delay: 0.65s;
        }

        .card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.6rem;
          line-height: 1.2;
          transition: color 0.3s ease;
          animation: slideInUp 0.8s ease-out backwards;
        }

        .vision-card:nth-child(1) .card-title {
          animation-delay: 0.5s;
        }

        .vision-card:nth-child(2) .card-title {
          animation-delay: 0.7s;
        }

        .vision-card:hover .card-title {
          color: #ff8c00;
        }

        @media (min-width: 768px) {
          .card-title {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            line-height: 1.3;
          }
        }

        .card-description {
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          color: #666;
          line-height: 1.5;
          font-weight: 300;
          transition: color 0.3s ease;
          animation: slideInUp 0.8s ease-out backwards;
        }

        .vision-card:nth-child(1) .card-description {
          animation-delay: 0.55s;
        }

        .vision-card:nth-child(2) .card-description {
          animation-delay: 0.75s;
        }

        .vision-card:hover .card-description {
          color: #555;
        }

        @media (min-width: 768px) {
          .card-description {
            font-size: 1rem;
            line-height: 1.8;
          }
        }

        /* DIVIDER */
        .card-divider {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #ff8c00, transparent);
          margin-top: 1.5rem;
          border-radius: 2px;
          transition: all 0.5s ease;
          opacity: 0;
        }

        .vision-card:hover .card-divider {
          width: 100%;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          opacity: 1;
        }

        /* MOBILE LAYOUT */
        @media (max-width: 768px) {
          .vision-card {
            display: grid;
            grid-template-columns: 70px 1fr;
            gap: 1rem;
            align-items: start;
            padding: 1.2rem;
          }

          .icon-wrapper {
            width: 70px;
            height: 70px;
            grid-column: 1;
            grid-row: 1 / span 3;
          }

          .card-label {
            grid-column: 2;
            grid-row: 1;
            font-size: 0.7rem;
            margin-bottom: 0.2rem;
          }

          .card-title {
            grid-column: 2;
            grid-row: 2;
            margin-bottom: 0.4rem;
            font-size: 0.95rem;
          }

          .card-description {
            grid-column: 2;
            grid-row: 3;
            font-size: 0.8rem;
            line-height: 1.4;
          }

          .card-arrow {
            grid-column: 2;
            grid-row: 4;
            font-size: 0.8rem;
            margin-top: 0.5rem;
          }

          .card-divider {
            grid-column: 1 / -1;
            margin-top: 0.8rem;
          }
        }

        /* DECORATIVE ELEMENTS */
        .card-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          background: rgba(255, 140, 0, 0.1);
          border: 2px solid #ff8c00;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.5s ease;
          opacity: 0;
          animation: scaleIn 0.6s ease-out backwards;
        }

        .vision-card:nth-child(1) .card-badge {
          animation-delay: 0.7s;
        }

        .vision-card:nth-child(2) .card-badge {
          animation-delay: 0.9s;
        }

        .vision-card:hover .card-badge {
          opacity: 1;
          background: linear-gradient(135deg, #ff8c00, #ff6b35);
          color: white;
          border-color: transparent;
          transform: scale(1.3) rotate(180deg);
        }

        /* ARROW INDICATOR */
        .card-arrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #ff8c00;
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: 1rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .vision-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .card-arrow svg {
          transition: transform 0.5s ease;
        }

        .vision-card:hover .card-arrow svg {
          transform: translateX(4px);
        }

        /* GLOWING BORDER ANIMATION */
        @media (hover: hover) {
          .vision-card {
            position: relative;
          }

          .vision-card::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 20px;
            padding: 2px;
            background: linear-gradient(135deg, #ff8c00, #ff6b35, transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
          }

          .vision-card:hover::after {
            opacity: 1;
          }
        }
      `}</style>

      {/* BACKGROUND DECORATIONS */}
      <div className="decoration-blob blob-1" />
      <div className="decoration-blob blob-2" />

      {/* HEADER */}
      <div className="section-header">
        <h2 className="section-vtitle">Vision & Mission</h2>
        <div className="title-underline" />
      </div>

      {/* CARDS */}
      <div className="cards-container">
        {/* VISION CARD */}
        <div className="vision-card">
          <div className="card-badge">👁️</div>

          <div className="icon-wrapper">
            <Eye size={50} />
          </div>

          <div className="card-content">
            <p className="card-label">Our Vision</p>

            <h3 className="card-title">
              Building software that shapes the future.
            </h3>

            <p className="card-description">
              We envision a world where intelligent, scalable software empowers
              businesses to innovate, adapt, and lead in a digital-first
              economy. Our software solutions are designed to be intuitive,
              secure, and future-proof.
            </p>

            <div className="card-arrow">
              Explore Vision
              <ArrowRight size={18} />
            </div>

            <div className="card-divider" />
          </div>
        </div>

        {/* MISSION CARD */}
        <div className="vision-card">
          <div className="card-badge">🎯</div>

          <div className="icon-wrapper">
            <Target size={50} />
          </div>

          <div className="card-content">
            <p className="card-label">Our Mission</p>

            <h3 className="card-title">
              Designing, building, and scaling software that works.
            </h3>

            <p className="card-description">
              Our mission is to deliver secure, reliable, and high-performance
              software solutions that solve real business problems and drive
              measurable goals. We believe in excellence and continuous
              improvement.
            </p>

            <div className="card-arrow">
              Explore Mission
              <ArrowRight size={18} />
            </div>

            <div className="card-divider" />
          </div>
        </div>
      </div>
    </section>
  );
}
