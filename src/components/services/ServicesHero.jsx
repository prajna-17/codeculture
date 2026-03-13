"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ServicesHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToServices = () => {
    const section = document.getElementById("services-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/40 to-white py-16 md:py-28">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top wave */}
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z"
            fill="rgba(217,119,6,0.05)"
          />
        </svg>

        {/* Bottom wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 Q300,20 600,70 T1200,70 L1200,120 L0,120 Z"
            fill="rgba(217,119,6,0.08)"
          />
        </svg>

        {/* Decorative glow */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-amber-300/15 to-orange-300/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-tl from-orange-200/15 to-amber-200/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT TEXT */}
          <div
            className={`transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-200/50 to-amber-200/50 border border-orange-400/50 mb-6">
              <span className="w-2 h-2 bg-orange-700 rounded-full animate-pulse" />
              <p className="text-xs md:text-sm font-bold text-orange-900 uppercase tracking-wider">
                Our Services
              </p>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-900 bg-clip-text text-transparent">
                Solutions Designed to
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-700 via-amber-700 to-red-700 bg-clip-text text-transparent">
                Accelerate Your Business
              </span>
            </h1>

            <p className="text-amber-900/70 text-base md:text-lg leading-relaxed max-w-lg mb-8">
              Comprehensive Website Services to Ignite Your Online Success.
              Empower Your Business with Powerful Online Services from our
              Website.
            </p>

            <button
              onClick={scrollToServices}
              className={`group relative px-8 md:px-10 py-4 bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Explore Services →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-amber-300/40 shadow-2xl bg-white h-80 md:h-96">
              <Image
                src="/img/cus.png"
                alt="Services illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
