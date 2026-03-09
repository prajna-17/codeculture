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
  const [isMobile, setIsMobile] = useState(false);
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

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay || isDragging) return;

    autoPlayRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % tech.length);
    }, 5000);

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

  // Mouse drag handlers
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
      className="relative bg-gradient-to-br from-[#6a2e0a] via-[#7A360D] to-[#6a2e0a] text-white py-16 md:py-24 overflow-hidden"
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
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.4);
          }
          50% { 
            box-shadow: 0 0 0 8px rgba(255, 140, 0, 0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(255, 140, 0, 0.2), inset 0 0 15px rgba(255, 140, 0, 0.05);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 140, 0, 0.4), inset 0 0 20px rgba(255, 140, 0, 0.1);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* HEADER */
        .tech-header {
          margin-bottom: 2.5rem;
          animation: fadeInUp 0.8s ease-out;
        }

        @media (min-width: 768px) {
          .tech-header {
            margin-bottom: 4rem;
          }
        }

        .tech-section-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .title-bar {
          width: 3px;
          height: 2.5rem;
          background: linear-gradient(180deg, #ff8c00, #ff6b35);
          border-radius: 2px;
          box-shadow: 0 0 15px rgba(255, 140, 0, 0.4);
          animation: bounce 2s ease-in-out infinite;
        }

        @media (min-width: 768px) {
          .title-bar {
            height: 3rem;
          }
        }

        .tech-title {
          font-size: 1.75rem;
          line-height: 1.2;
          font-weight: 900;
          letter-spacing: -0.02em;
          animation: slideInLeft 0.8s ease-out 0.1s both;
        }

        @media (min-width: 768px) {
          .tech-title {
            font-size: 2.5rem;
          }
        }

        .tech-description {
          margin-top: 1rem;
          color: #d4d4d4;
          max-width: 32rem;
          line-height: 1.6;
          font-size: 0.95rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        @media (min-width: 768px) {
          .tech-description {
            margin-top: 1.25rem;
            font-size: 1rem;
            line-height: 1.7;
          }
        }

        /* CAROUSEL CONTAINER */
        .carousel-section {
          position: relative;
          width: 100%;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .slider-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
        }

        @media (min-width: 768px) {
          .slider-wrapper {
            gap: 2rem;
          }
        }

        .carousel-wrapper {
          flex: 1;
          overflow: hidden;
          cursor: grab;
          user-select: none;
        }

        .carousel-wrapper.dragging {
          cursor: grabbing;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          touch-action: pan-y;
          user-select: none;
        }

        // 

        @media (min-width: 768px) {
          .carousel-track {
            gap: 1.5rem;
            transform: translateX(calc(${-index * 100}% - ${index * 0.375}rem));
          }
        }

        .carousel-track.dragging {
          transition: none;
        }

       

      

        /* TECH CARD */
        .tech-card {
          min-width: 100%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          animation: fadeInUp 0.8s ease-out both;
        }

        .tech-card:nth-child(1) { animation-delay: 0.3s; }
        .tech-card:nth-child(2) { animation-delay: 0.4s; }
        .tech-card:nth-child(3) { animation-delay: 0.5s; }
        .tech-card:nth-child(4) { animation-delay: 0.6s; }
        .tech-card:nth-child(5) { animation-delay: 0.7s; }

        .tech-number {
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 0.75rem;
          opacity: 0.6;
          color: #ff8c00;
          animation: pulse 2s infinite;
        }

        @media (min-width: 768px) {
          .tech-number {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
        }

        .tech-image {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(255, 140, 0, 0.25);
          margin-bottom: 1rem;
          box-shadow: 0 10px 30px rgba(255, 140, 0, 0.15);
          animation: glow 2s ease-in-out infinite;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 107, 53, 0.04));
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .tech-image {
            border-radius: 18px;
            margin-bottom: 1.25rem;
            border-width: 2px;
          }
        }

        .tech-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .tech-card:hover .tech-image {
          border-color: #ff8c00;
          box-shadow: 0 15px 45px rgba(255, 140, 0, 0.3), inset 0 0 20px rgba(255, 140, 0, 0.08);
        }

        .tech-card:hover .tech-image img {
          transform: scale(1.08);
        }

        .tech-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ff8c00;
          text-align: center;
          text-shadow: 0 0 8px rgba(255, 140, 0, 0.2);
        }

        @media (min-width: 768px) {
          .tech-name {
            font-size: 1.5rem;
          }
        }

        /* BUTTONS */
        .slider-button {
          background: rgba(255, 140, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 140, 0, 0.3);
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: none;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 20;
          animation: slideInLeft 0.8s ease-out 0.4s both;
        }

        .slider-button:last-of-type {
          animation: slideInRight 0.8s ease-out 0.4s both;
        }

        @media (min-width: 768px) {
          .slider-button {
            display: flex;
            width: 48px;
            height: 48px;
          }
        }

        .slider-button:hover {
          background: rgba(255, 140, 0, 0.2);
          border-color: #ff8c00;
          box-shadow: 0 0 20px rgba(255, 140, 0, 0.4);
          transform: scale(1.1);
        }

        .slider-button:active {
          transform: scale(0.95);
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
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .mobile-button:active {
          background: rgba(255, 140, 0, 0.3);
          border-color: #ff8c00;
          transform: scale(0.92);
          box-shadow: 0 0 15px rgba(255, 140, 0, 0.4);
        }

        /* DOTS INDICATOR */
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
          transition: all 0.3s ease;
          border: none;
        }

        .dot:hover {
          background: rgba(255, 140, 0, 0.5);
          transform: scale(1.25);
        }

        .dot.active {
          background: #ff8c00;
          width: 24px;
          border-radius: 4px;
          box-shadow: 0 0 12px rgba(255, 140, 0, 0.5);
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
          height: 100px;
          filter: drop-shadow(0 -2px 5px rgba(0, 0, 0, 0.15));
        }

        @media (min-width: 768px) {
          .wave-svg {
            height: 140px;
          }
        }
      `}</style>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* HEADER */}
        <div className="tech-header">
          <div className="tech-section-title">
            <div className="title-bar"></div>
            <h2 className="tech-title">Technologies We Use</h2>
          </div>
          <p className="tech-description">
            We leverage cutting-edge tools and frameworks to build scalable,
            high-performance solutions tailored to your needs.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="carousel-section">
          <div className="slider-wrapper">
            <button
              onClick={prev}
              className="slider-button"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <div
              className={`carousel-wrapper ${isDragging ? "dragging" : ""}`}
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={`carousel-track ${isDragging ? "dragging" : ""}`}
                style={{
                  transform: isDragging
                    ? `translateX(calc(${-index * 100}% + ${dragOffset}px))`
                    : `translateX(-${index * 100}%)`,
                }}
              >
                {" "}
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

            <button onClick={next} className="slider-button" aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="mobile-controls">
            <button
              onClick={prev}
              className="mobile-button"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="mobile-button" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* DOTS */}
          <div className="scroll-dots">
            {tech.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
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
      </div>
    </section>
  );
}
