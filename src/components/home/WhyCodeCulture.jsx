"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  Zap,
  Users,
  Rocket,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function WhyCodeCulture() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const features = [
    {
      id: 1,
      title: "Innovation First",
      description:
        "Cutting-edge solutions powered by the latest technologies and creative thinking.",
      icon: Zap,
      image: "/img/node.jpg",
      number: "01",
    },
    {
      id: 2,
      title: "Client-Centric Approach",
      description:
        "Your success is our mission. We work closely with you every step of the way.",
      icon: Users,
      image: "/img/react.jpg",
      number: "02",
    },
    {
      id: 3,
      title: "End-to-End Expertise",
      description:
        "From concept to deployment, we handle every aspect of your project.",
      icon: Rocket,
      image: "/img/next.jpg",
      number: "03",
    },
    {
      id: 4,
      title: "Trusted by Growing Brands",
      description:
        "Proven track record of delivering exceptional results for businesses worldwide.",
      icon: Award,
      image: "/img/aws.jpg",
      number: "04",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

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

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  // Auto-scroll carousel for mobile
  useEffect(() => {
    if (!isMobile || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, isVisible, features.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setCurrentSlide(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-32 overflow-hidden"
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

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 140, 0, 0.2), inset 0 0 20px rgba(255, 140, 0, 0.05);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 140, 0, 0.4), inset 0 0 30px rgba(255, 140, 0, 0.1);
          }
        }

        @keyframes slideUp {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: auto;
            opacity: 1;
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes carouselSlide {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* HEADER */
        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .section-header {
            margin-bottom: 4rem;
          }
        }

        .section-subtitle {
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          color: #ff8c00;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }

        @media (min-width: 768px) {
          .section-subtitle {
            font-size: 0.875rem;
            margin-bottom: 1rem;
          }
        }

        .section-title {
          font-size: 1.75rem;
          line-height: 1.2;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          animation: fadeInUp 0.8s ease-out 0.2s both;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .section-title {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3.5rem;
          }
        }

        .section-description {
          margin-top: 1rem;
          color: #666;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          font-size: 0.95rem;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        @media (min-width: 768px) {
          .section-description {
            margin-top: 1.5rem;
            line-height: 1.8;
            font-size: 1rem;
          }
        }

        /* FEATURES GRID - DESKTOP ONLY */
        .features-grid {
          display: none;
        }

        @media (min-width: 1024px) {
          .features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2.5rem;
            margin-bottom: 3rem;
          }
        }

        /* MOBILE CAROUSEL */
        .mobile-carousel {
          display: block;
        }

        @media (min-width: 1024px) {
          .mobile-carousel {
            display: none;
          }
        }

       .carousel-container {
  position: relative;
  margin-bottom: 2rem;
  overflow: hidden;
}
        .carousel-track {
  display: flex;
  border-radius: 16px;
  will-change: transform;
}
        @media (min-width: 768px) {
          .carousel-track {
            gap: 1.5rem;
          }
        }

        .carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;


          animation: carouselSlide 0.5s ease-out forwards;
        }

        /* FEATURE CARD */
        .feature-card {
          position: relative;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid rgba(255, 140, 0, 0.1);
          animation: fadeInUp 0.8s ease-out both;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        @media (min-width: 768px) {
          .feature-card {
            border-radius: 20px;
          }
        }

        .feature-card:nth-child(1) { animation-delay: 0.3s; }
        .feature-card:nth-child(2) { animation-delay: 0.4s; }
        .feature-card:nth-child(3) { animation-delay: 0.5s; }
        .feature-card:nth-child(4) { animation-delay: 0.6s; }

        .feature-card:hover {
          border-color: #ff8c00;
          box-shadow: 0 20px 60px rgba(255, 140, 0, 0.2);
          transform: translateY(-10px);
        }

        /* ACTIVE STATE - ONLY ON CLICK */
        .feature-card.active {
          border-color: #ff8c00;
          box-shadow: 0 20px 60px rgba(255, 140, 0, 0.25);
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.05), rgba(255, 107, 53, 0.02));
        }

        /* IMAGE SECTION */
        .feature-image-wrapper {
          position: relative;
          width: 100%;
          height: 140px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 107, 53, 0.1));
        }

        @media (min-width: 640px) {
          .feature-image-wrapper {
            height: 160px;
          }
        }

        @media (min-width: 768px) {
          .feature-image-wrapper {
            height: 180px;
          }
        }

        @media (min-width: 1024px) {
          .feature-image-wrapper {
            height: 200px;
          }
        }

        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .feature-card:hover .feature-image {
          transform: scale(1.1);
        }

        /* NUMBER BADGE */
        .feature-number {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ff8c00, #ff6b35);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1rem;
          box-shadow: 0 5px 20px rgba(255, 140, 0, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        @media (min-width: 768px) {
          .feature-number {
            top: 10px;
            right: 10px;
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }
        }

        /* CONTENT SECTION */
        .feature-content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        @media (min-width: 768px) {
          .feature-content {
            padding: 1.5rem;
          }
        }

        .feature-icon-wrapper {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.2), rgba(255, 107, 53, 0.15));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .feature-icon-wrapper {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            margin-bottom: 1rem;
          }
        }

        .feature-card:hover .feature-icon-wrapper {
          background: linear-gradient(135deg, #ff8c00, #ff6b35);
          transform: scale(1.1);
        }

        .feature-icon {
          color: #ff8c00;
          transition: all 0.3s ease;
          width: 22px;
          height: 22px;
        }

        @media (min-width: 768px) {
          .feature-icon {
            width: 24px;
            height: 24px;
          }
        }

        .feature-card:hover .feature-icon {
          color: white;
        }

        .feature-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
          line-height: 1.3;
        }

        @media (min-width: 768px) {
          .feature-title {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
          }
        }

        .feature-card:hover .feature-title {
          color: #ff8c00;
        }

        .feature-description {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
          flex: 1;
        }

        @media (min-width: 768px) {
          .feature-description {
            font-size: 0.95rem;
            line-height: 1.6;
          }
        }

        /* DECORATIVE ELEMENTS */
        .decoration-blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.05;
          pointer-events: none;
        }

        .blob-1 {
          width: 300px;
          height: 300px;
          background: #ff8c00;
          top: -150px;
          right: -150px;
          animation: float 8s ease-in-out infinite;
        }

        @media (min-width: 768px) {
          .blob-1 {
            width: 400px;
            height: 400px;
            top: -100px;
            right: -100px;
          }
        }

        .blob-2 {
          width: 200px;
          height: 200px;
          background: #ff6b35;
          bottom: -100px;
          left: -100px;
          animation: float 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        @media (min-width: 768px) {
          .blob-2 {
            width: 300px;
            height: 300px;
            bottom: -50px;
            left: -50px;
          }
        }

        /* SECTION DIVIDER */
        .section-divider {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          margin: 0 auto 1.5rem;
          border-radius: 2px;
          animation: slideInRight 0.8s ease-out 0.2s both;
        }

        @media (min-width: 768px) {
          .section-divider {
            width: 60px;
            height: 4px;
            margin-bottom: 2rem;
          }
        }

        /* CAROUSEL CONTROLS */
        .carousel-controls {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .carousel-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: white;
          border: 2px solid rgba(255, 140, 0, 0.2);
          color: #ff8c00;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .carousel-nav-btn:active {
          transform: scale(0.95);
        }

        .carousel-nav-btn:hover {
          border-color: #ff8c00;
          background: rgba(255, 140, 0, 0.05);
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 140, 0, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .carousel-dot.active {
          background: #ff8c00;
          width: 32px;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
        }

        .carousel-dot:hover {
          background: rgba(255, 140, 0, 0.4);
        }
      `}</style>

      {/* Decorative Blobs */}
      <div className="absolute decoration-blob blob-1" />
      <div className="absolute decoration-blob blob-2" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* HEADER */}
        <div className="section-header">
          <div className="section-divider" />
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="section-title">Why CodeCulture?</h2>
          <p className="section-description">
            We combine innovation, expertise, and dedication to deliver
            exceptional results that transform your vision into reality.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`feature-card ${activeIndex === index ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => handleCardClick(index)}
              >
                <div className="feature-image-wrapper">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="feature-image"
                  />
                  <div className="feature-number">{feature.number}</div>
                </div>

                <div className="feature-content">
                  <div className="feature-icon-wrapper">
                    <Icon className="feature-icon" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="mobile-carousel">
          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {" "}
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.id} className="carousel-slide">
                    <div
                      className={`feature-card ${activeIndex === index ? "active" : ""}`}
                      onClick={() => handleCardClick(index)}
                    >
                      <div className="feature-image-wrapper">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={300}
                          height={200}
                          className="feature-image"
                        />
                        <div className="feature-number">{feature.number}</div>
                      </div>

                      <div className="feature-content">
                        <div className="feature-icon-wrapper">
                          <Icon className="feature-icon" />
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Controls */}
            <div className="carousel-controls">
              <button
                className="carousel-nav-btn"
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="carousel-nav-btn"
                onClick={handleNext}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="carousel-dots">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => {
                    setCurrentSlide(index);
                    setActiveIndex(index);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
