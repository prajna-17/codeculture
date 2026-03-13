"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function ContactHero() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50 to-white pt-24 pb-20 md:pt-32 md:pb-28 text-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orb that follows cursor */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl transition-transform duration-500 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            pointerEvents: "none",
          }}
        />

        {/* Animated floating shapes */}
        <div className="absolute top-10 right-5 md:right-20 w-40 h-40 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-5 md:left-10 w-60 h-60 bg-gradient-to-tr from-orange-200/20 to-amber-100/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(120,54,13,.05) 25%, rgba(120,54,13,.05) 26%, transparent 27%, transparent 74%, rgba(120,54,13,.05) 75%, rgba(120,54,13,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(120,54,13,.05) 25%, rgba(120,54,13,.05) 26%, transparent 27%, transparent 74%, rgba(120,54,13,.05) 75%, rgba(120,54,13,.05) 76%, transparent 77%, transparent)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
        {/* Decorative badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100/40 to-orange-100/40 border border-amber-300/50 mb-6 md:mb-8 transition-all duration-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-amber-900">
            Let's Create Together
          </span>
        </div>

        {/* Main heading with word-by-word animation */}
        <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
          <span className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-900 bg-clip-text text-transparent">
            {/* <span
              className={`block transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Let's Build
            </span> */}
            <br className="hidden md:block" />
            <span
              className={`inline-block ml-2 md:ml-4 transition-all duration-700 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Something
            </span>
            <br />
            <span
              className={`block bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 bg-clip-text text-transparent drop-shadow-lg transition-all duration-700 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Exceptional
            </span>
          </span>

          {/* Animated underline */}
          <div
            className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent transition-all duration-1000"
            style={{
              width: isLoaded ? "200px" : "0px",
            }}
          />
        </h1>

        {/* Subheading */}
        <p
          className={`mt-10 md:mt-12 text-base md:text-lg text-amber-900/70 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Have a project, idea, or question? We're here to help you turn it into
          something <span className="text-amber-800 font-semibold">real</span>,{" "}
          <span className="text-orange-800 font-semibold">scalable</span>, and{" "}
          <span className="text-red-800 font-semibold">impactful</span>.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mt-10 md:mt-14 transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => router.push("/projects")}
            className="group relative px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-amber-700 to-orange-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-700/50 hover:-translate-y-1 active:translate-y-0"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start a Project
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-red-800 -z-10 transition-transform scale-0 group-hover:scale-100 origin-center duration-500" />
          </button>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kunalsingh67678@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 md:px-10 py-3 md:py-4 border-2 border-amber-700 text-amber-900 font-semibold rounded-lg transition-all duration-300 hover:border-amber-600 hover:text-white hover:bg-amber-700 hover:-translate-y-1 active:translate-y-0"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in Touch
            </span>
          </a>
        </div>

        {/* Floating stats or metrics */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-20 pt-12 md:pt-16 border-t border-amber-300/30">
          {[
            // { label: "Projects Shipped", value: "10+" },
            // { label: "Happy Clients", value: "20+" },
            // { label: "Years Experience", value: "10+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${800 + idx * 100}ms`,
              }}
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-amber-900/60 mt-1 md:mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .delay-200 {
          transition-delay: 200ms;
        }

        .delay-300 {
          transition-delay: 300ms;
        }

        .delay-500 {
          transition-delay: 500ms;
        }

        .delay-700 {
          transition-delay: 700ms;
        }
      `}</style>
    </section>
  );
}
