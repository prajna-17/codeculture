"use client";

import { useState, useEffect, useRef } from "react";

export default function AboutHero() {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    ideas: 0,
  });
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  // Intersection Observer for initial section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  // Intersection Observer for stats section (to trigger counter animation)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Animate counters only when stats section is visible
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setCounters((prev) => ({
        clients: prev.clients < 20 ? prev.clients + 1 : 20,
        projects: prev.projects < 10 ? prev.projects + 1 : 10,
        ideas: prev.ideas < 50 ? prev.ideas + 1 : 50,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#7A360D] via-[#6a2e0a] to-[#7A360D] text-white py-24 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Poppins:wght@300;400;600;700;800&family=Sora:wght@400;600;700&display=swap');

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

        @keyframes pulse {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.7);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 0 30px rgba(255, 140, 0, 0);
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }

        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes slideUpText {
          from {
            opacity: 0;
            transform: translateY(20px);
            letter-spacing: 0.1em;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0;
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

        /* CONTAINER */
        .about-section {
          position: relative;
          z-index: 1;
        }

        /* BACKGROUND DECORATIONS */
        .decoration {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          pointer-events: none;
        }

        .decoration-1 {
          width: 400px;
          height: 400px;
          background: #ff8c00;
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .decoration-2 {
          width: 300px;
          height: 300px;
          background: #ff6b35;
          bottom: 50px;
          left: -100px;
          animation: floatReverse 10s ease-in-out infinite;
        }

        /* MAIN GRID */
        .about-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1.5rem;
          }
        }

        /* LEFT CONTENT */
        .content-section {
          animation: slideInLeft 1s ease-out;
        }

        .section-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          color: #ff8c00;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          animation: slideUpText 0.8s ease-out 0.1s both;
        }

        .section-title {
          font-family: 'Sora', sans-serif;
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          animation: slideInUp 0.8s ease-out 0.2s both;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3.2rem;
            line-height: 1.15;
            margin-bottom: 2rem;
          }
        }

        .section-title br {
          display: block;
        }

        .description {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: #d9d9d9;
          max-width: 500px;
          font-weight: 300;
          animation: slideInUp 0.8s ease-out 0.3s both;
        }

        @media (min-width: 768px) {
          .description {
            font-size: 1.05rem;
            line-height: 1.9;
          }
        }

        /* RIGHT DESIGN */
        .design-container {
          position: relative;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: slideInRight 1s ease-out;
        }

        @media (min-width: 768px) {
          .design-container {
            height: 420px;
          }
        }

        /* CRAZY DESIGN ELEMENTS */
        .design-circle {
          position: absolute;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
          animation: pulse 2s ease-in-out infinite;
        }

        .circle-main {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%);
          z-index: 10;
          font-size: 2.5rem;
          animation: pulse 2s ease-in-out infinite, rotate360 20s linear infinite;
          box-shadow: 0 20px 60px rgba(255, 140, 0, 0.4);
        }

        @media (max-width: 768px) {
          .circle-main {
            width: 160px;
            height: 160px;
            font-size: 2rem;
          }
        }

        .circle-secondary {
          position: absolute;
          width: 280px;
          height: 280px;
          border: 3px solid rgba(255, 140, 0, 0.3);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: rotate360 30s linear infinite reverse;
          z-index: 5;
        }

        @media (max-width: 768px) {
          .circle-secondary {
            width: 240px;
            height: 240px;
          }
        }

        .circle-tertiary {
          position: absolute;
          width: 360px;
          height: 360px;
          border: 2px dashed rgba(255, 140, 0, 0.2);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: rotate360 45s linear infinite;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .circle-tertiary {
            width: 300px;
            height: 300px;
          }
        }

        .design-square {
          position: absolute;
          width: 80px;
          height: 80px;
          background: rgba(255, 140, 0, 0.15);
          border: 2px solid #ff8c00;
          border-radius: 15px;
          z-index: 8;
          animation: float 4s ease-in-out infinite;
        }

        .square-1 {
          top: 20px;
          right: 30px;
          animation-delay: 0s;
        }

        .square-2 {
          bottom: 40px;
          left: 40px;
          animation: floatReverse 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        @media (max-width: 768px) {
          .design-square {
            width: 60px;
            height: 60px;
          }

          .square-1 {
            top: 10px;
            right: 20px;
          }

          .square-2 {
            bottom: 30px;
            left: 30px;
          }
        }

        .design-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #ff8c00;
          border-radius: 50%;
          opacity: 0.6;
          z-index: 7;
          animation: pulse 2.5s ease-in-out infinite;
        }

        .dot-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0.2s;
        }

        .dot-2 {
          top: 60%;
          right: 15%;
          animation-delay: 0.4s;
        }

        .dot-3 {
          bottom: 20%;
          left: 5%;
          animation-delay: 0.6s;
        }

        /* STATS SECTION */
        .stats-grid {
          max-width: 1000px;
          margin: 4rem auto 0;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .stats-grid {
            margin-top: 3rem;
            gap: 1.5rem;
          }
        }

        .stat-item {
          animation: scaleIn 0.8s ease-out backwards;
        }

        .stat-item:nth-child(1) { animation-delay: 0.6s; }
        .stat-item:nth-child(2) { animation-delay: 0.7s; }
        .stat-item:nth-child(3) { animation-delay: 0.8s; }

        .stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .stat-number {
            font-size: 3.5rem;
            min-height: 80px;
          }
        }

        .stat-label {
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          color: #d9d9d9;
          font-weight: 400;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .stat-item:hover .stat-label {
          color: #ff8c00;
          transform: translateY(-2px);
        }

        .stat-item:hover .stat-number {
          filter: brightness(1.1);
        }

        /* DIVIDER */
        .stats-divider {
          max-width: 1000px;
          margin: 3rem auto 0;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .divider-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff8c00, transparent);
          animation: slideInUp 1s ease-out 0.5s both;
        }
      `}</style>

      {/* BACKGROUND DECORATIONS */}
      <div className="decoration decoration-1" />
      <div className="decoration decoration-2" />

      {/* MAIN CONTENT */}
      <div className="about-section">
        <div className="about-grid">
          {/* LEFT CONTENT */}
          <div className="content-section">
            <p className="section-label">About CodeCulture</p>

            <h1 className="section-title">
              Building Digital
              <br />
              Solutions That Drive
              <br />
              Progress & Growth
            </h1>

            <p className="description">
              We are a forward-thinking technology company focused on designing
              clean, scalable, and intelligent digital products. At CodeCulture,
              every solution is crafted with precision, strategy, and a deep
              understanding of business needs.
            </p>
          </div>

          {/* RIGHT DESIGN */}
          <div className="design-container">
            {/* Outer circles */}
            <div className="circle-tertiary" />
            <div className="circle-secondary" />

            {/* Floating squares */}
            <div className="design-square square-1" />
            <div className="design-square square-2" />

            {/* Floating dots */}
            <div className="design-dot dot-1" />
            <div className="design-dot dot-2" />
            <div className="design-dot dot-3" />

            {/* Main circle */}
            <div className="circle-main">
              {/* Checkmark */}
              <span style={{ fontSize: "3rem" }}>✓</span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="stats-divider">
          <div className="divider-line" />
        </div>

        {/* STATS */}
        <div className="stats-grid" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-number">{counters.clients}+</div>
            <div className="stat-label">Clients</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">{counters.projects}+</div>
            <div className="stat-label">Projects</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">{counters.ideas}+</div>
            <div className="stat-label">Ideas Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
