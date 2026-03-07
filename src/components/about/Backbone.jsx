"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Sparkles, Award, Zap } from "lucide-react";

export default function Backbone() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#f5f5f5] via-white to-[#f8f8f8] py-32 overflow-hidden"
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
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-5deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.7);
          }
          50% {
            box-shadow: 0 0 0 30px rgba(255, 140, 0, 0);
          }
        }

        @keyframes rotate360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes scaleInCenter {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
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

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 140, 0, 0.3), 0 0 40px rgba(255, 140, 0, 0.1), inset 0 0 20px rgba(255, 140, 0, 0.05);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 140, 0, 0.6), 0 0 80px rgba(255, 140, 0, 0.3), inset 0 0 30px rgba(255, 140, 0, 0.15);
          }
        }

        @keyframes orbitSmall {
          from {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }

        @keyframes orbitLarge {
          from {
            transform: rotate(0deg) translateX(180px) rotate(0deg);
          }
          to {
            transform: rotate(-360deg) translateX(180px) rotate(360deg);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        /* CONTAINER */
        .backbone-section {
          position: relative;
          z-index: 1;
        }

        /* BACKGROUND ELEMENTS */
        .decoration-blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          pointer-events: none;
        }

        .blob-1 {
          width: 600px;
          height: 600px;
          background: #ff8c00;
          top: -200px;
          left: -200px;
          animation: float 12s ease-in-out infinite;
        }

        .blob-2 {
          width: 500px;
          height: 500px;
          background: #ff6b35;
          bottom: -100px;
          right: -100px;
          animation: floatReverse 14s ease-in-out infinite;
        }

        /* HEADER */
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
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
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .header-title {
            font-size: 3.2rem;
          }
        }

        .header-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 1.05rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
          animation: fadeInDown 0.8s ease-out 0.2s both;
          font-weight: 300;
        }

        /* FOUNDER CARD */
        .founder-wrapper {
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 2;
          margin-top: 4rem;
        }

        .founder-card {
          position: relative;
          width: 280px;
          background: white;
          border-radius: 25px;
          padding: 1.5rem;
          animation: slideInUp 1s ease-out 0.4s both;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .founder-card:hover {
          transform: translateY(-20px) scale(1.05);
          animation: glow 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .founder-card {
            width: 240px;
            padding: 1.2rem;
          }
        }

        /* CARD BACKGROUND EFFECT */
        .founder-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 25px;
          padding: 2px;
          background: linear-gradient(135deg, #ff8c00, #ff6b35, transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .founder-card:hover::before {
          opacity: 1;
        }

        /* IMAGE CONTAINER */
        .image-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          margin-bottom: 1.5rem;
          overflow: hidden;
          border-radius: 15px;
          animation: scaleInCenter 0.8s ease-out 0.5s both;
        }

        @media (max-width: 768px) {
          .image-wrapper {
            height: 240px;
            margin-bottom: 1.2rem;
          }
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .founder-card:hover .image-wrapper img {
          transform: scale(1.15) rotate(2deg);
        }

        /* IMAGE BORDER GLOW */
        .image-border {
          position: absolute;
          inset: -4px;
          border-radius: 15px;
          border: 3px solid transparent;
          background: linear-gradient(135deg, #ff8c00, #ff6b35);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
          animation: rotate360 8s linear infinite;
        }

        .founder-card:hover .image-border {
          opacity: 1;
        }

        /* FOUNDER NAME */
        .founder-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a1a;
          text-align: center;
          margin-bottom: 0.4rem;
          animation: slideInUp 0.8s ease-out 0.6s both;
          transition: color 0.3s ease;
        }

        .founder-card:hover .founder-name {
          color: #ff8c00;
        }

        @media (max-width: 768px) {
          .founder-name {
            font-size: 1.2rem;
          }
        }

        /* FOUNDER ROLE */
        .founder-role {
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          color: #999;
          text-align: center;
          font-weight: 500;
          letter-spacing: 0.1em;
          animation: slideInUp 0.8s ease-out 0.7s both;
          transition: all 0.3s ease;
        }

        .founder-card:hover .founder-role {
          color: #ff8c00;
          letter-spacing: 0.15em;
        }

        /* DIVIDER */
        .founder-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          margin: 1rem auto 0;
          border-radius: 2px;
          opacity: 0;
          animation: slideInUp 0.8s ease-out 0.6s both;
          transition: width 0.5s ease;
        }

        .founder-card:hover .founder-divider {
          width: 100%;
          opacity: 1;
        }

        /* SOCIAL ICONS */
        .founder-stats {
          display: flex;
          justify-content: space-around;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #f0f0f0;
          animation: slideInUp 0.8s ease-out 0.75s both;
        }

        .stat-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          animation: scaleInCenter 0.6s ease-out backwards;
        }

        .founder-card:hover .stat-badge {
          animation: pulse 1s ease-in-out infinite;
        }

        .stat-badge:nth-child(1) {
          animation-delay: 0.8s;
        }

        .stat-badge:nth-child(2) {
          animation-delay: 0.85s;
        }

        .stat-badge:nth-child(3) {
          animation-delay: 0.9s;
        }

        .stat-icon {
          color: #ff8c00;
          transition: all 0.3s ease;
        }

        .founder-card:hover .stat-icon {
          color: #ff6b35;
          transform: scale(1.2);
        }

        .stat-text {
          font-size: 0.75rem;
          color: #999;
          font-weight: 600;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
        }

        .founder-card:hover .stat-text {
          color: #ff8c00;
        }

        /* FLOATING ELEMENTS AROUND CARD */
        .floating-element {
          position: absolute;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 107, 53, 0.1));
          border: 2px solid #ff8c00;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff8c00;
          font-weight: 700;
          font-size: 1.5rem;
          opacity: 0;
          animation: float 4s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }

        @media (max-width: 1024px) {
          .floating-element {
            display: none;
          }
        }

        .element-1 {
          top: -40px;
          left: -40px;
          animation-delay: 0s;
        }

        .element-2 {
          top: -40px;
          right: -40px;
          animation: floatReverse 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .element-3 {
          bottom: -40px;
          left: -40px;
          animation: floatReverse 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .element-4 {
          bottom: -40px;
          right: -40px;
          animation: float 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .founder-card:hover .floating-element {
          opacity: 1;
          border-color: #ff6b35;
        }

        /* ORBITING ELEMENTS */
        .orbit-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 768px) {
          .orbit-container {
            width: 300px;
            height: 300px;
          }
        }

        .orbit-circle {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px dashed rgba(255, 140, 0, 0.2);
          opacity: 0;
          animation: slideInUp 1s ease-out 0.3s both;
        }

        .orbit-circle:nth-child(2) {
          width: 80%;
          height: 80%;
          left: 10%;
          top: 10%;
          border-color: rgba(255, 140, 0, 0.15);
        }

        /* HOVER GLOW EFFECT */
        .glow-orb {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(255, 140, 0, 0.3), transparent);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: -1;
        }

        .founder-card:hover .glow-orb {
          opacity: 1;
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* BACKGROUND DECORATIONS */}
      <div className="decoration-blob blob-1" />
      <div className="decoration-blob blob-2" />

      {/* HEADER */}
      <div className="section-header">
        <h2 className="header-title">Backbone of CodeCulture</h2>
        <p className="header-subtitle">
          One mind, one mission. A unified approach to product, engineering, and
          execution. Meet the visionary leading the revolution.
        </p>
      </div>

      {/* FOUNDER CARD */}
      <div className="backbone-section">
        <div className="founder-wrapper">
          {/* ORBIT CONTAINER */}
          <div className="orbit-container">
            <div className="orbit-circle" />
            <div className="orbit-circle" />
            <div className="glow-orb" />
          </div>

          {/* FLOATING ELEMENTS */}
          <div className="floating-element element-1">✨</div>
          <div className="floating-element element-2">🎯</div>
          <div className="floating-element element-3">⚡</div>
          <div className="floating-element element-4">💡</div>

          {/* CARD */}
          <div className="founder-card">
            {/* IMAGE BORDER ANIMATION */}
            <div className="image-border" />

            {/* IMAGE */}
            <div className="image-wrapper">
              <Image
                src="/img/hero.jpeg"
                alt="Kunal Rajput - Founder"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* FOUNDER INFO */}
            <div className="founder-name">Kunal Rajput</div>
            <div className="founder-role">Founder & Visionary</div>

            {/* DIVIDER */}
            <div className="founder-divider" />

            {/* STATS */}
            <div className="founder-stats">
              <div className="stat-badge">
                <Award className="stat-icon" size={20} />
                <span className="stat-text">Expert</span>
              </div>
              <div className="stat-badge">
                <Sparkles className="stat-icon" size={20} />
                <span className="stat-text">Creator</span>
              </div>
              <div className="stat-badge">
                <Zap className="stat-icon" size={20} />
                <span className="stat-text">Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
