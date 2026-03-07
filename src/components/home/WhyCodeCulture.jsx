"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Zap, Users, Rocket, Award } from "lucide-react";

export default function WhyCodeCulture() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-32 overflow-hidden"
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

        /* HEADER */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-subtitle {
          font-size: 0.875rem;
          letter-spacing: 0.3em;
          color: #ff8c00;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }

        .section-title {
          font-size: 2.5rem;
          line-height: 1.1;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          animation: fadeInUp 0.8s ease-out 0.2s both;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3.5rem;
          }
        }

        .section-description {
          margin-top: 1.5rem;
          color: #666;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        /* FEATURES GRID */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* FEATURE CARD */
        .feature-card {
          position: relative;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid rgba(255, 140, 0, 0.1);
          animation: fadeInUp 0.8s ease-out both;
          display: flex;
          flex-direction: column;
          height: 100%;
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

        .feature-card.active {
          border-color: #ff8c00;
          box-shadow: 0 20px 60px rgba(255, 140, 0, 0.25);
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.05), rgba(255, 107, 53, 0.02));
        }

        /* IMAGE SECTION */
        .feature-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 107, 53, 0.1));
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
          top: 10px;
          right: 10px;
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #ff8c00, #ff6b35);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.2rem;
          box-shadow: 0 5px 20px rgba(255, 140, 0, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        /* CONTENT SECTION */
        .feature-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .feature-icon-wrapper {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.2), rgba(255, 107, 53, 0.15));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon-wrapper {
          background: linear-gradient(135deg, #ff8c00, #ff6b35);
          transform: scale(1.1);
        }

        .feature-icon {
          color: #ff8c00;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          color: white;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          transition: color 0.3s ease;
        }

        .feature-card:hover .feature-title {
          color: #ff8c00;
        }

        .feature-description {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          flex: 1;
        }

        /* DECORATIVE ELEMENTS */
        .decoration-blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.05;
          pointer-events: none;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: #ff8c00;
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          background: #ff6b35;
          bottom: -50px;
          left: -50px;
          animation: float 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* BOTTOM SECTION */
        .features-bottom {
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%);
          border-radius: 25px;
          padding: 3rem 2rem;
          color: white;
          text-align: center;
          animation: fadeInUp 0.8s ease-out 0.7s both;
          margin-top: 2rem;
        }

        @media (min-width: 768px) {
          .features-bottom {
            padding: 3rem;
          }
        }

        .bottom-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .bottom-description {
          font-size: 1rem;
          line-height: 1.7;
          opacity: 0.95;
          max-width: 500px;
          margin: 0 auto;
        }

        /* STATS */
        .stats-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 640px) {
          .stats-container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        .stat-item {
          animation: scaleIn 0.6s ease-out both;
        }

        .stat-item:nth-child(2) { animation-delay: 0.2s; }
        .stat-item:nth-child(3) { animation-delay: 0.4s; }

        .stat-number {
          font-size: 2rem;
          font-weight: 900;
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        /* SECTION DIVIDER */
        .section-divider {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          margin: 0 auto 2rem;
          border-radius: 2px;
          animation: slideInRight 0.8s ease-out 0.2s both;
        }
      `}</style>

      {/* Decorative Blobs */}
      <div className="absolute decoration-blob blob-1" />
      <div className="absolute decoration-blob blob-2" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-8 relative z-10">
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

        {/* FEATURES GRID */}
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`feature-card ${activeIndex === index ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
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
                    <Icon className="feature-icon" size={24} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM SECTION WITH STATS */}
        {/* <div className="features-bottom">
          <h3 className="bottom-title">Our Impact & Commitment</h3>
          <p className="bottom-description">
            With years of experience and a passion for excellence, we've helped
            countless businesses achieve their digital goals and exceed
            expectations.
          </p>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Team Members</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
