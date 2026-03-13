"use client";

import Image from "next/image";
import { Code2, Smartphone, Palette } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
export default function TransformingIdeas() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

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
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Powerful, scalable web solutions",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform apps",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden"
    >
      <style>{`
        @keyframes fadeInUp {
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
            transform: scale(0.8) rotateY(-20deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(255, 140, 0, 0.1), inset 0 0 30px rgba(255, 140, 0, 0.05);
          }
          50% { 
            box-shadow: 0 0 50px rgba(255, 140, 0, 0.25), inset 0 0 50px rgba(255, 140, 0, 0.1);
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

        .image-wrapper {
          perspective: 1000px;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 420px;
          border-radius: 30px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(255, 107, 53, 0.05));
          border: 2px solid rgba(255, 140, 0, 0.2);
          animation: slideInLeft 0.8s ease-out;
          transition: all 0.4s ease;
        }

        @media (min-width: 768px) {
          .image-container {
            height: 520px;
          }
        }

        .image-container:hover {
          border-color: #ff8c00;
          box-shadow: 0 20px 60px rgba(255, 140, 0, 0.2);
        }

        .image-wrapper:hover .image-container {
          animation: glow 3s ease-in-out infinite;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
        }

        .expertise-label {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: #7A360D;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .expertise-title {
          font-size: 2.25rem;
          line-height: 1.2;
          font-weight: 900;
          color: #7A360D;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        @media (min-width: 768px) {
          .expertise-title {
            font-size: 2.75rem;
          }
        }

        .expertise-description {
          color: #d97706;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 28rem;
          margin-bottom: 2.5rem;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .service-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.5rem;
          border-radius: 15px;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.05), rgba(255, 107, 53, 0.02));
          border: 2px solid rgba(255, 140, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: fadeInUp 0.8s ease-out both;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .service-item:nth-child(1) { animation-delay: 0.5s; }
        .service-item:nth-child(2) { animation-delay: 0.6s; }
        .service-item:nth-child(3) { animation-delay: 0.7s; }

        .service-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 107, 53, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .service-item:hover::before {
          opacity: 1;
        }

        .service-item:hover {
          border-color: #ff8c00;
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(255, 140, 0, 0.15);
        }

        .service-content {
          position: relative;
          z-index: 1;
        }

        .service-icon {
          color: #ff8c00;
          flex-shrink: 0;
          transition: all 0.4s ease;
        }

        .service-item:hover .service-icon {
          transform: scale(1.2) rotate(10deg);
          filter: drop-shadow(0 0 10px rgba(255, 140, 0, 0.4));
        }

        .service-title {
          font-weight: 600;
          color: #1f2937;
          font-size: 1rem;
          transition: color 0.3s ease;
          margin-bottom: 0.25rem;
        }

        .service-item:hover .service-title {
          color: #ff8c00;
        }

        .service-description {
          font-size: 0.85rem;
          color: #6b7280;
          transition: color 0.3s ease;
        }

        .service-item:hover .service-description {
          color: #7A360D;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 10px 30px rgba(255, 140, 0, 0.3);
          animation: fadeInUp 0.8s ease-out 0.8s both;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8c00 100%);
          transition: left 0.4s ease;
          z-index: -1;
        }

        .cta-button:hover::before {
          left: 0;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 50px rgba(255, 140, 0, 0.4);
        }

        .cta-button:active {
          transform: translateY(-2px);
        }

        /* Decoration elements */
        .decoration {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 140, 0, 0.15), transparent);
          pointer-events: none;
        }

        .decoration-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .decoration-2 {
          width: 300px;
          height: 300px;
          bottom: -50px;
          left: -50px;
          animation: float 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      {/* Decorative circles */}
      <div className="absolute decoration decoration-1" />
      <div className="absolute decoration decoration-2" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="image-wrapper" ref={imageRef}>
            <div className="image-container">
              <Image
                src="/img/expertise.jpeg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="content-wrapper">
            <p className="expertise-label">OUR EXPERTISE</p>
            <h2 className="expertise-title">
              Transforming ideas <br /> into digital excellence
            </h2>
            <p className="expertise-description">
              We combine cutting-edge technology with creative strategy to
              deliver solutions that drive real business impact and transform
              your vision into reality.
            </p>
            {/* SERVICES */}
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="service-item">
                    <div className="service-icon">
                      <Icon size={36} />
                    </div>
                    <div className="service-content">
                      <p className="service-title">{service.title}</p>
                      <p className="service-description">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* BUTTON */}
            <Link href="/services" className="cta-button">
              View All Services →
            </Link>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
