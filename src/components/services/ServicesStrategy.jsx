"use client";

import { useState, useEffect, useRef } from "react";
import { Zap, Users, Lightbulb } from "lucide-react";

export default function ServicesStrategy() {
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      id: 1,
      title: "Call To Action",
      description:
        "Inspire the target audience to take action on your website with compelling CTAs.",
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 2,
      title: "Engage",
      description:
        "Encourage dialogue and coverage from a loyal audience through strategic engagement.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Inspire",
      description:
        "Inspire the target audience to visit your website and take meaningful action.",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const features = [
    "Creative People",
    "Good Reviews",
    "Awesome Designs",
    "Fast Delivery",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#f8f8f8] via-white to-[#f8f8f8] py-16 md:py-28 overflow-hidden"
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 140, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.08);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 140, 0, 0.2), 0 15px 50px rgba(0, 0, 0, 0.12);
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
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* DECORATIVE ELEMENTS */
        .bg-decoration {
          position: absolute;
          opacity: 0.03;
          pointer-events: none;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: #ff8c00;
          border-radius: 50%;
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          background: #7A360D;
          border-radius: 50%;
          bottom: -50px;
          left: -50px;
          animation: float 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* HEADER */
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease-out;
        }

        @media (min-width: 768px) {
          .section-header {
            margin-bottom: 4rem;
          }
        }

        .section-title {
          font-size: 1.75rem;
          line-height: 1.3;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }

        @media (min-width: 640px) {
          .section-title {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3rem;
          }
        }

        .title-highlight {
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        @media (min-width: 768px) {
          .section-description {
            font-size: 1rem;
          }
        }

        /* SERVICES GRID */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        /* SERVICE CARD */
        .service-card {
          background: white;
          border-radius: 16px;
          padding: 2rem 1.5rem;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid #f0f0f0;
          cursor: pointer;
          animation: slideInUp 0.8s ease-out both;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .service-card:nth-child(1) { animation-delay: 0.3s; }
        .service-card:nth-child(2) { animation-delay: 0.4s; }
        .service-card:nth-child(3) { animation-delay: 0.5s; }

        @media (min-width: 768px) {
          .service-card {
            padding: 2.5rem 2rem;
            border-radius: 20px;
          }
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover {
          border-color: #ff8c00;
          box-shadow: 0 15px 50px rgba(255, 140, 0, 0.15);
          transform: translateY(-8px);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover .service-icon-wrapper {
          transform: scale(1.1) rotateY(10deg);
          box-shadow: 0 10px 30px rgba(255, 140, 0, 0.3);
        }

        /* ICON */
        .service-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 107, 53, 0.1));
          perspective: 1000px;
        }

        @media (min-width: 768px) {
          .service-icon-wrapper {
            width: 70px;
            height: 70px;
            border-radius: 16px;
            margin-bottom: 2rem;
          }
        }

        .service-icon {
          width: 32px;
          height: 32px;
          color: #ff8c00;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .service-icon {
            width: 36px;
            height: 36px;
          }
        }

        .service-card:hover .service-icon {
          color: white;
        }

        .service-card:hover .service-icon-wrapper {
          background: linear-gradient(135deg, #ff8c00, #ff6b35);
        }

        /* TITLE & DESCRIPTION */
        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          transition: color 0.3s ease;
        }

        @media (min-width: 768px) {
          .service-title {
            font-size: 1.4rem;
          }
        }

        .service-card:hover .service-title {
          color: #ff8c00;
        }

        .service-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #666;
          flex: 1;
        }

        @media (min-width: 768px) {
          .service-description {
            font-size: 0.95rem;
            line-height: 1.7;
          }
        }

        /* FEATURES BAR */
        .features-bar {
          background: linear-gradient(90deg, #7A360D 0%, #8B4513 50%, #7A360D 100%);
          color: white;
          padding: 2rem 1.5rem;
          border-radius: 16px;
          animation: slideInUp 0.8s ease-out 0.6s both;
        }

        @media (min-width: 768px) {
          .features-bar {
            padding: 2.5rem 3rem;
            border-radius: 20px;
          }
        }

        .features-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          text-align: center;
        }

        @media (min-width: 640px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            text-align: left;
          }
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          animation: slideInRight 0.6s ease-out both;
        }

        .feature-item:nth-child(1) { animation-delay: 0.6s; }
        .feature-item:nth-child(2) { animation-delay: 0.7s; }
        .feature-item:nth-child(3) { animation-delay: 0.8s; }
        .feature-item:nth-child(4) { animation-delay: 0.9s; }

        @media (min-width: 768px) {
          .feature-item {
            gap: 1rem;
            font-size: 1rem;
          }
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff8c00;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .feature-dot {
            width: 8px;
            height: 8px;
          }
        }

        @media (max-width: 767px) {
          .feature-item {
            justify-content: center;
          }

          .feature-item::before {
            content: '•';
            color: #ff8c00;
            margin-right: 0.5rem;
            font-weight: bold;
          }

          .feature-dot {
            display: none;
          }
        }

        /* DIVIDER */
        .divider {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ff8c00, #ff6b35);
          margin: 0 auto 2rem;
          animation: scaleIn 0.6s ease-out 0.1s both;
          transform-origin: center;
        }
      `}</style>

      {/* Decorative Blobs */}
      <div className="bg-decoration blob-1" />
      <div className="bg-decoration blob-2" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* HEADER */}
        <div className="section-header">
          <div className="divider" />
          <h2 className="section-title">
            We use{" "}
            <span className="title-highlight">strategy and experience</span> to{" "}
            <span className="title-highlight">generate results</span>
          </h2>
          <p className="section-description">
            We have a proven track record in increasing search engine rankings
            for our clients. Our strategies are designed to achieve one or more
            of the following goals:
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  <Icon className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* FEATURES BAR */}
        <div className="features-bar">
          <div className="features-title">Why Choose CodeCulture</div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-dot" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
