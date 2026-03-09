"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white via-amber-50/30 to-white pt-2 pb-16 overflow-hidden">
      {" "}
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-amber-100/20 to-orange-100/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={24} className="text-amber-700" />
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950">
              Visit Us
            </h2>
          </div>
          <p className="text-amber-900/70 text-lg max-w-2xl">
            Located in the heart of Noida, we're always happy to welcome new
            clients and collaborators. Drop by for a coffee or schedule a call.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Quick contact cards */}
          {[
            {
              icon: MapPin,
              title: "Address",
              content: "Phase 3, Noida",
              subtext: "Our main office",
            },
            {
              icon: Phone,
              title: "Call Us",
              content: "+91 123457890",
              subtext: "Monday to Friday, 9AM-6PM",
            },
            {
              icon: Mail,
              title: "Email Us",
              content: "info@codeculture.com",
              subtext: "We'll respond within 24 hours",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${100 + idx * 100}ms`,
                }}
              >
                <div className="relative overflow-hidden rounded-xl border border-amber-200/50 bg-gradient-to-br from-white/80 to-amber-50/80 backdrop-blur-sm p-6 md:p-8 hover:border-amber-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-200/20 hover:-translate-y-1">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 to-amber-100/0 group-hover:from-orange-100/30 group-hover:to-amber-100/30 transition-all duration-300 -z-10" />

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-200/60 to-orange-200/60 flex items-center justify-center group-hover:from-amber-300/70 group-hover:to-orange-300/70 transition-all duration-300">
                      <Icon size={24} className="text-amber-800" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-amber-950">
                        {item.title}
                      </h3>
                      <p className="text-amber-900/70 text-sm mt-1">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                  <p className="text-amber-950 font-semibold group-hover:text-orange-700 transition-colors">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map section */}
        <div
          className={`relative transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative group">
            {/* Animated border gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-300/40 to-orange-300/40 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500" />

            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-200/60 shadow-xl bg-white">
              {/* Map container */}
              <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-xl">
                <iframe
                  src="https://maps.google.com/maps?q=Phase%203%20Noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{
                    border: "none",
                    borderRadius: "0.75rem",
                  }}
                  title="Office Location Map"
                  aria-label="Google Map showing our office location in Phase 3, Noida"
                />

                {/* Overlay gradient for aesthetic enhancement */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Info box overlay */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto md:max-w-sm">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 md:p-6 border border-amber-200/60 shadow-2xl">
                  <h3 className="text-lg font-bold text-amber-950 mb-2">
                    CodeCulture Studios
                  </h3>
                  <p className="text-amber-900/70 text-sm mb-4 leading-relaxed">
                    Phase 3, Noida
                    <br />
                    India
                  </p>
                  <button className="w-full bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white text-sm font-semibold py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional info below map */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
            <div
              className="transition-all duration-700 delay-200"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(32px)",
              }}
            >
              <div className="bg-gradient-to-br from-amber-100/50 to-orange-100/50 border border-amber-300/40 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-amber-950 mb-3">
                  Office Hours
                </h3>
                <div className="space-y-2 text-amber-900/70">
                  <p>
                    <span className="font-semibold">Monday - Friday:</span> 9:00
                    AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Saturday:</span> 10:00 AM -
                    4:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </div>

            <div
              className="transition-all duration-700 delay-300"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(32px)",
              }}
            >
              <div className="bg-gradient-to-br from-blue-100/50 to-cyan-100/50 border border-blue-300/40 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  Remote Meetings
                </h3>
                <p className="text-blue-900/70 leading-relaxed mb-4">
                  Can't visit us in person? No problem! We offer virtual
                  consultations via Zoom, Google Meet, or your preferred
                  platform.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .delay-200 {
          transition-delay: 200ms;
        }

        .delay-300 {
          transition-delay: 300ms;
        }
      `}</style>
    </section>
  );
}
