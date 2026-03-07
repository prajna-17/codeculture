"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Technologies() {
  const tech = [
    { id: 1, title: "Node.js", img: "/img/node.jpg" },
    { id: 2, title: "React.js", img: "/img/react.jpg" },
    { id: 3, title: "Next.js", img: "/img/next.jpg" },
    { id: 4, title: "AWS", img: "/img/aws.jpg" },
    { id: 5, title: "TypeScript", img: "/img/typescript.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Intersection Observer
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

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay || isDragging) return;

    autoPlayRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % tech.length);
    }, 4000);

    return () => clearInterval(autoPlayRef.current);
  }, [autoPlay, isDragging]);

  const next = () => {
    setIndex((prev) => (prev + 1) % tech.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 6000);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + tech.length) % tech.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 6000);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 6000);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setAutoPlay(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    const offset = e.targetTouches[0].clientX - touchStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }

    setDragOffset(0);
    setTimeout(() => setAutoPlay(true), 2000);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setTouchStart(e.clientX);
    setIsDragging(true);
    setAutoPlay(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
    const offset = e.clientX - touchStart;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const distance = touchStart - touchEnd;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;

    if (isLeftDrag) {
      next();
    } else if (isRightDrag) {
      prev();
    }

    setDragOffset(0);
    setTimeout(() => setAutoPlay(true), 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#7A360D] via-[#6a2e0a] to-[#7A360D] text-white pt-20 pb-40 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <style>{`
        @keyframes fadeInUp {
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

        @keyframes dance {
          0% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-8px) scale(1.02);
          }
          50% {
            transform: translateY(-15px) scale(1.03);
          }
          75% {
            transform: translateY(-8px) scale(1.02);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.4);
          }
          50% { 
            box-shadow: 0 0 0 10px rgba(255, 140, 0, 0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 140, 0, 0.3), inset 0 0 20px rgba(255, 140, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 140, 0, 0.6), inset 0 0 30px rgba(255, 140, 0, 0.2);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* TITLE STYLES */
        .tech-section-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 4rem;
          animation: slideInLeft 0.8s ease-out;
        }

        .title-bar {
          width: 3px;
          height: 3.5rem;
          background: linear-gradient(180deg, #ff8c00, #ff6b35);
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(255, 140, 0, 0.5);
          animation: bounce 2s ease-in-out infinite;
        }

        .tech-title {
          font-size: 2.25rem;
          line-height: 1.2;
          font-weight: 900;
          letter-spacing: -0.02em;
          animation: slideInLeft 0.8s ease-out 0.1s both;
        }

        @media (min-width: 768px) {
          .tech-title {
            font-size: 3rem;
          }
        }

        .tech-description {
          margin-top: 1.5rem;
          color: #ccc;
          max-width: 28rem;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        /* CAROUSEL WRAPPER */
        .carousel-container {
          position: relative;
          width: 100%;
          height: auto;
          touch-action: pan-y;
          user-select: none;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          gap: 1.5rem;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: translateX(calc(${-index * 100}% - ${-index * 0.375}rem));
        }

        .carousel-track.dragging {
          transition: none;
          transform: translateX(calc(${-index * 100}% - ${-index * 0.375}rem + ${dragOffset}px));
        }

        @media (min-width: 768px) {
          .carousel-track {
            gap: 2rem;
            transform: translateX(calc(${-index * 100}% - ${-index * 0.5}rem));
          }

          .carousel-track.dragging {
            transform: translateX(calc(${-index * 100}% - ${-index * 0.5}rem + ${dragOffset}px));
          }
        }

        /* TECH CARD */
        .tech-card {
          min-width: 100%;
          flex-shrink: 0;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        @media (min-width: 768px) {
          .tech-card {
            min-width: 90%;
            max-width: 90%;
          }
        }

        @media (min-width: 1024px) {
          .tech-card {
            min-width: 80%;
            max-width: 80%;
          }
        }

        .tech-number {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 1rem;
          opacity: 0.7;
          color: #ff8c00;
          animation: pulse 2s infinite;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .tech-image {
          position: relative;
          width: 100%;
          height: 250px;
          border-radius: 20px;
          overflow: hidden;
          border: 3px solid rgba(255, 140, 0, 0.3);
          margin-bottom: 1rem;
          box-shadow: 0 15px 40px rgba(255, 140, 0, 0.25);
          animation: glow 2s ease-in-out infinite;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(255, 107, 53, 0.05));
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .tech-image {
            height: 300px;
          }
        }

        .tech-image img {
          transition: transform 0.3s ease;
        }

        .tech-card:hover .tech-image {
          border-color: #ff8c00;
          box-shadow: 0 20px 60px rgba(255, 140, 0, 0.4), inset 0 0 30px rgba(255, 140, 0, 0.1);
        }

        .tech-card:hover .tech-image img {
          transform: scale(1.1);
        }

        .tech-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ff8c00;
          text-align: center;
          text-shadow: 0 0 10px rgba(255, 140, 0, 0.3);
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .tech-name {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }
        }

        /* BUTTONS */
        .slider-button {
          background: rgba(255, 140, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 140, 0, 0.3);
          color: white;
          padding: 0.75rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          flex-shrink: 0;
          animation: slideInLeft 0.8s ease-out 0.4s both;
          z-index: 20;
          position: relative;
          display: none;
        }

        @media (min-width: 768px) {
          .slider-button {
            display: block;
          }
        }

        .slider-button:last-of-type {
          animation: slideInRight 0.8s ease-out 0.4s both;
        }

        .slider-button:hover {
          background: rgba(255, 140, 0, 0.3);
          border-color: #ff8c00;
          box-shadow: 0 0 20px rgba(255, 140, 0, 0.5);
          transform: scale(1.2);
        }

        .slider-button:active {
          transform: scale(0.95);
        }

        /* SLIDER WRAPPER */
        .slider-wrapper {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          width: 100%;
        }

        .carousel-wrapper {
          flex: 1;
          overflow: hidden;
          cursor: grab;
        }

        .carousel-wrapper.dragging {
          cursor: grabbing;
        }

        /* MOBILE CONTROLS */
        .mobile-controls {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 1.5rem;
        }

        @media (min-width: 768px) {
          .mobile-controls {
            display: none;
          }
        }

        .mobile-button {
          background: rgba(255, 140, 0, 0.1);
          border: 2px solid rgba(255, 140, 0, 0.3);
          color: white;
          padding: 0.75rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
        }

        .mobile-button:active {
          background: rgba(255, 140, 0, 0.3);
          border-color: #ff8c00;
          transform: scale(0.95);
          box-shadow: 0 0 20px rgba(255, 140, 0, 0.4);
        }

        /* DOTS */
        .scroll-dots {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 140, 0, 0.2);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid transparent;
        }

        .dot:hover {
          background: rgba(255, 140, 0, 0.5);
          transform: scale(1.3);
        }

        .dot.active {
          background: #ff8c00;
          width: 24px;
          border-radius: 4px;
          box-shadow: 0 0 15px rgba(255, 140, 0, 0.5);
          animation: pulse 2s infinite;
        }

        /* WAVE BOTTOM */
        .wave-section {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 1;
        }

        .wave-svg {
          width: 100%;
          height: 160px;
          filter: drop-shadow(0 -2px 5px rgba(0, 0, 0, 0.2));
        }

        .wave-blur {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 4rem;
          background: white;
          filter: blur(2rem);
          opacity: 0.4;
        }
      `}</style>

      <div className="max-w-[1300px] mx-auto px-6 md:px-8 relative z-10">
        {/* TITLE */}
        <div className="mb-16">
          <div className="tech-section-title">
            <div className="title-bar"></div>
            <h2 className="tech-title">Technologies We Use</h2>
          </div>

          <p className="tech-description">
            We leverage cutting-edge tools and frameworks to build scalable,
            high-performance solutions tailored to your needs.
          </p>
        </div>

        {/* CAROUSEL SLIDER - SAME FOR DESKTOP AND MOBILE */}
        <div className="slider-wrapper">
          <button onClick={prev} className="slider-button">
            <ChevronLeft size={28} />
          </button>

          <div
            className={`carousel-wrapper ${isDragging ? "dragging" : ""}`}
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`carousel-track ${isDragging ? "dragging" : ""}`}>
              {tech.map((item, i) => (
                <div key={item.id} className="tech-card">
                  <p className="tech-number">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <div className="tech-image">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="tech-name">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <button onClick={next} className="slider-button">
            <ChevronRight size={28} />
          </button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="mobile-controls">
          <button onClick={prev} className="mobile-button">
            <ChevronLeft size={24} />
          </button>

          <button onClick={next} className="mobile-button">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* DOTS INDICATOR */}
        <div className="scroll-dots">
          {tech.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>

      {/* WAVE BOTTOM */}
      <div className="wave-section">
        <svg
          viewBox="0 0 1440 200"
          className="wave-svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160 C360,80 1080,240 1440,140 L1440,320 L0,320 Z"
          />
        </svg>

        <div className="wave-blur"></div>
      </div>
    </section>
  );
}
