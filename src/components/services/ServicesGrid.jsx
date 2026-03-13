"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
export default function ServicesGrid() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      id: "web-development",
      title: "Website Development",
      img: "/img/develop.png",
      description: "Custom, responsive websites built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      id: "app-development",
      title: "App Development",
      img: "/img/app.png",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "User-Friendly", "Scalable"],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      img: "/img/digital.png",
      description: "Strategic digital marketing campaigns to boost your brand",
      features: ["SEO Services", "Social Media", "Content Strategy"],
    },
    {
      id: "maintenance",
      title: "Website Maintenance",
      img: "/img/website.png",
      description: "Ongoing support and maintenance for your digital assets",
      features: ["24/7 Support", "Updates", "Security"],
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      img: "/img/ui.png",
      description: "Beautiful, intuitive designs that users love",
      features: ["Wireframing", "Prototyping", "User Testing"],
    },
    {
      id: "domain-hosting",
      title: "Domain & Hosting",
      img: "/img/domain.png",
      description: "Reliable domain registration and hosting solutions",
      features: ["99.9% Uptime", "SSL Certificates", "24/7 Support"],
    },
  ];
  return (
    <section
      id="services-section"
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32"
    >
      {" "}
      {/* Wavy background SVG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top wavy SVG */}
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q300,80 600,40 T1200,40 L1200,0 L0,0 Z"
            fill="rgba(217, 119, 6, 0.08)"
          />
        </svg>

        {/* Bottom wavy SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 Q300,30 600,80 T1200,80 L1200,120 L0,120 Z"
            fill="rgba(217, 119, 6, 0.08)"
          />
        </svg>

        {/* Floating decorative circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-300/15 to-orange-300/15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-10 w-48 h-48 bg-gradient-to-tl from-orange-300/15 to-amber-300/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-200/10 to-orange-200/10 rounded-full blur-2xl animate-pulse animation-delay-1000" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* HEADER */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-900 bg-clip-text text-transparent">
              Explore All Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-700 via-amber-700 to-red-700 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-amber-900/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive Website Services to Ignite Your Online Success.
            Empower Your Business with Powerful Online Services from our
            Website.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onClick={() =>
                isMobile &&
                setExpandedCard(expandedCard === index ? null : index)
              }
            >
              <div className="relative group h-full">
                {/* Animated glow background */}
                <div
                  className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    opacity:
                      hoveredCard === index || expandedCard === index ? 1 : 0,
                  }}
                />

                {/* Card */}
                <div
                  className={`relative bg-gradient-to-br from-white/95 to-amber-50/95 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 transition-all duration-500 h-full flex flex-col cursor-pointer ${
                    hoveredCard === index || expandedCard === index
                      ? "border-orange-400/60 shadow-2xl shadow-orange-300/20 md:-translate-y-2"
                      : "hover:border-orange-400/60 hover:shadow-2xl hover:shadow-orange-300/20 md:hover:-translate-y-2"
                  }`}
                >
                  {/* Icon container */}
                  <div
                    className="relative w-24 h-24 mx-auto mb-6 transition-all duration-500"
                    style={{
                      transform:
                        hoveredCard === index || expandedCard === index
                          ? "scale(1.15) rotate(5deg)"
                          : "scale(1) rotate(0deg)",
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-2xl blur-lg transition-all duration-500"
                      style={{
                        opacity:
                          hoveredCard === index || expandedCard === index
                            ? 1
                            : 0,
                      }}
                    />
                    <div className="relative w-full h-full bg-gradient-to-br from-amber-100/60 to-orange-100/60 rounded-2xl p-4 flex items-center justify-center border border-amber-300/40">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold text-xl md:text-2xl text-center text-amber-950 mb-3 transition-colors duration-300 ${
                      hoveredCard === index || expandedCard === index
                        ? "text-orange-700"
                        : "md:group-hover:text-orange-700"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-amber-900/70 text-center mb-4 flex-grow transition-all duration-300">
                    {service.description}
                  </p>

                  {/* Features list (appears on expand/hover) */}
                  {(hoveredCard === index || expandedCard === index) && (
                    <div className="mb-6 space-y-2 animate-fade-in">
                      {service.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-sm text-amber-900"
                        >
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Learn More Button */}
                  {/* Learn More Button (Mobile only) */}
                  {isMobile && (
                    <button
                      className={`group/btn w-full mt-auto px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-700/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 overflow-hidden relative ${
                        hoveredCard === index || expandedCard === index
                          ? "opacity-100"
                          : "opacity-90"
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        LEARN MORE
                        <ArrowRight
                          size={18}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </span>

                      <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-red-800 -z-10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    </button>
                  )}

                  {/* Floating particles on interaction */}
                  {(hoveredCard === index || expandedCard === index) && (
                    <>
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
                      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping animation-delay-300" />
                      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-amber-300 rounded-full animate-ping animation-delay-600" />
                    </>
                  )}

                  {/* Mobile tap indicator */}
                  {/* {isMobile && expandedCard !== index && (
                    <div className="absolute top-4 right-4 text-xs bg-amber-200/80 text-amber-900 px-3 py-1 rounded-full font-semibold animate-pulse">
                      👆 Tap
                    </div>
                  )} */}

                  {/* Mobile close indicator */}
                  {isMobile && expandedCard === index && (
                    <div className="absolute top-4 right-4">
                      <X size={20} className="text-orange-700" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-900/70 text-lg mb-6">
            Ready to transform your business?
          </p>
          <Link
            href="/contact"
            className="group relative px-10 md:px-14 py-4 bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-700/50 hover:-translate-y-1 active:translate-y-0 inline-flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started Today
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-red-800 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 300ms ease-out;
        }

        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  );
}
