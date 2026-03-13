"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectsHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const scrollToProjects = () => {
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/60 to-white py-16 md:py-28">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/20 to-amber-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100/20 to-orange-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 items-center gap-10 md:gap-14">
          {/* LEFT IMAGE */}
          <div
            className={`relative h-[280px] md:h-[400px] transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <Image
              src="/img/projects-hero.png"
              alt="projects showcase"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-200/50 to-orange-200/50 border border-amber-400/50 transition-all duration-700 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <span className="w-2 h-2 bg-amber-700 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-amber-950 uppercase tracking-wide">
                Our Works
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-900 bg-clip-text text-transparent">
                Projects That Deliver
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-700 via-amber-700 to-red-700 bg-clip-text text-transparent">
                Real Business Results
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-base md:text-lg text-amber-900/70 max-w-md leading-relaxed transition-all duration-700 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              From web designing & development through digital marketing. We'll
              increase traffic by{" "}
              <span className="font-bold text-amber-800">50%</span>, generate
              more <span className="font-bold text-orange-800">leads</span> and
              boost <span className="font-bold text-red-800">sales</span>.
            </p>

            {/* Stats */}
            <div
              className={`grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6 transition-all duration-700 delay-400 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { number: "10+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-amber-300/40"
                >
                  <p className="text-lg md:text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                    {stat.number}
                  </p>
                  <p className="text-xs md:text-sm text-amber-900/70 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div
              className={`pt-2 md:pt-4 transition-all duration-700 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={scrollToProjects}
                className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-amber-700 to-orange-700 text-white font-semibold rounded-lg hover:shadow-xl transition-all w-full md:w-auto"
              >
                View All Projects →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
