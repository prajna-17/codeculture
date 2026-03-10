"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [touchedProject, setTouchedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      name: "Suryavastra",
      img: "/img/suryavastra.png",
      category: "Web Development",
    },
    {
      name: "Aatulvam",
      img: "/img/aatulyam.png",
      category: "Mobile App Development",
    },
    { name: "Lebah", img: "/img/project3.jpg", category: "Web Development" },
    {
      name: "College Connect",
      img: "/img/cc.png",
      category: "Mobile App Development",
    },
    {
      name: "Lebah",
      img: "/img/lebah.png",
      category: "Web Development",
    },
  ];

  const filters = ["All Projects", "Mobile App Development", "Web Development"];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (window.innerWidth < 768) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
      }, 3500);

      return () => clearInterval(interval);
    }
  }, [filteredProjects.length]);

  const handleProjectTap = (index) => {
    setTouchedProject(touchedProject === index ? null : index);
  };

  const openModal = (index) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-amber-50/40 to-white py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-amber-100/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100/15 to-orange-200/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* HEADER */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-900 bg-clip-text text-transparent">
              Carefully Crafted
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-700 via-amber-700 to-red-700 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h2>

          <p className="text-amber-900/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our diverse projects showcasing innovative solutions and
            creative designs that promote brands and enhance user experiences
            across various industries.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div
          className={`flex justify-center gap-3 md:gap-4 mb-14 md:mb-20 flex-wrap transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`group relative px-5 md:px-7 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 overflow-hidden ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-amber-700 to-orange-700 text-white shadow-lg shadow-orange-700/40"
                  : "bg-white/70 backdrop-blur-sm border border-amber-300/40 text-amber-950 hover:bg-white/90 hover:border-amber-400/60 hover:shadow-md"
              }`}
            >
              <span className="relative z-10">{filter}</span>
              {activeFilter === filter && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-red-800 -z-10 opacity-0" />
              )}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        {/* MOBILE SLIDER */}
        <div className="md:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {filteredProjects.map((project, index) => (
              <div key={index} className="min-w-full px-2">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {project.name}
                      </h3>
                      <p className="text-amber-200 text-sm">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* slider dots */}
          <div className="flex justify-center gap-2 mt-5">
            {filteredProjects.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === i ? "bg-orange-600 w-5" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-2 gap-10 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="text-amber-200 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL / FULLSCREEN VIEW */}
        {selectedProject !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                <X size={24} className="text-amber-900" />
              </button>

              {/* Modal image */}
              <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src={filteredProjects[selectedProject].img}
                  alt={filteredProjects[selectedProject].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal content */}
              <div className="p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-2">
                  {filteredProjects[selectedProject].name}
                </h2>
                <p className="text-amber-700 font-semibold mb-6">
                  {filteredProjects[selectedProject].category}
                </p>

                <div className="space-y-6">
                  <p className="text-amber-900/70 text-lg leading-relaxed">
                    This is a showcase of our exceptional work in{" "}
                    <span className="font-bold text-amber-900">
                      {filteredProjects[selectedProject].category.toLowerCase()}
                    </span>
                    . Our team has crafted this project with meticulous
                    attention to detail, ensuring the best user experience and
                    stunning design aesthetics.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-amber-300/40">
                    <div>
                      <p className="text-sm text-amber-900/60 font-medium">
                        PROJECT TYPE
                      </p>
                      <p className="text-lg font-bold text-amber-950 mt-1">
                        {filteredProjects[selectedProject].category}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-amber-900/60 font-medium">
                        YEAR DELIVERED
                      </p>
                      <p className="text-lg font-bold text-amber-950 mt-1">
                        2023-2024
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={closeModal}
                    className="w-full bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-700/40 hover:-translate-y-1"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 300ms ease-out;
        }

        .animate-scale-in {
          animation: scale-in 300ms ease-out;
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
