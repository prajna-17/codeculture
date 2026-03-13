"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";

export default function ProjectsContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fieldStates, setFieldStates] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Track if field has content
    if (value.length > 0) {
      setFieldStates({
        ...fieldStates,
        [name]: true,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I am ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/918595506516?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-16 md:py-24">
      {/* Background with image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/contact-bg.jpg')",
        }}
      />

      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-950/85 via-orange-900/80 to-amber-950/85" />

      {/* Decorative animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 border-2 border-orange-400/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-10 w-60 h-60 border-2 border-amber-400/10 rounded-full animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-400/5 to-amber-400/5 rounded-full blur-2xl animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg px-6 md:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
              Let's Get Connected
            </span>
          </h2>

          <p className="text-orange-100/80 text-base md:text-lg">
            Interested in working together? Send us a message and we'll respond
            within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            {/* Animated glow background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-white/10 to-amber-50/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-orange-400/20 space-y-6"
            >
              {/* Success Message */}
              {submitted && (
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/40 animate-scale-in">
                  <div className="text-center">
                    <CheckCircle
                      size={48}
                      className="mx-auto text-green-300 mb-3 animate-bounce"
                    />
                    <h3 className="text-xl md:text-2xl font-bold text-green-100 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-200/80">
                      Thank you for reaching out. We'll get back to you soon!
                    </p>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div
                className="group/field"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              >
                <label className="block text-sm font-semibold text-orange-100 mb-2 group-focus-within/field:text-orange-300 transition-colors">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  //   placeholder="John Doe"
                  className="w-full bg-white/5 border-b-2 border-orange-400/30 text-white placeholder-orange-300/40 focus:outline-none py-3 focus:border-orange-400 transition-colors duration-300"
                />
                <div
                  className={`h-1 bg-gradient-to-r from-orange-400 to-amber-300 mt-2 rounded-full transition-all duration-300 ${
                    focusedField === "name"
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </div>

              {/* Email Field */}
              <div
                className="group/field"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              >
                <label className="block text-sm font-semibold text-orange-100 mb-2 group-focus-within/field:text-orange-300 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  //   placeholder="john@example.com"
                  className="w-full bg-white/5 border-b-2 border-orange-400/30 text-white placeholder-orange-300/40 focus:outline-none py-3 focus:border-orange-400 transition-colors duration-300"
                />
                <div
                  className={`h-1 bg-gradient-to-r from-orange-400 to-amber-300 mt-2 rounded-full transition-all duration-300 ${
                    focusedField === "email"
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </div>

              {/* Phone Field */}
              <div
                className="group/field"
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
              >
                <label className="block text-sm font-semibold text-orange-100 mb-2 group-focus-within/field:text-orange-300 transition-colors">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  //   placeholder="+91 9876543210"
                  className="w-full bg-white/5 border-b-2 border-orange-400/30 text-white placeholder-orange-300/40 focus:outline-none py-3 focus:border-orange-400 transition-colors duration-300"
                />
                <div
                  className={`h-1 bg-gradient-to-r from-orange-400 to-amber-300 mt-2 rounded-full transition-all duration-300 ${
                    focusedField === "phone"
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </div>

              {/* Message Field */}
              <div
                className="group/field"
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              >
                <label className="block text-sm font-semibold text-orange-100 mb-2 group-focus-within/field:text-orange-300 transition-colors">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  //   placeholder="Tell us about your project idea..."
                  rows="5"
                  className="w-full bg-white/5 border-b-2 border-orange-400/30 text-white placeholder-orange-300/40 focus:outline-none py-3 focus:border-orange-400 transition-colors duration-300 resize-none"
                />
                <div
                  className={`h-1 bg-gradient-to-r from-orange-400 to-amber-300 mt-2 rounded-full transition-all duration-300 ${
                    focusedField === "message"
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full group relative bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 rounded-xl mt-8 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 active:translate-y-0 overflow-hidden flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              {/* Form note */}
              <p className="text-xs text-orange-200/60 text-center">
                We value your privacy and will never share your information
              </p>
            </form>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16">
          {[
            { icon: Mail, label: "Email", value: "kunalsingh67678@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 8595506516" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={
                  item.label === "Email"
                    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${item.value}`
                    : `tel:${item.value.replace(/\s+/g, "")}`
                }
                className={`group p-4 md:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-orange-400/20 hover:bg-white/10 hover:border-orange-400/40 transition-all duration-300 hover:-translate-y-1 transition-all duration-700 block ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${400 + idx * 100}ms`,
                }}
              >
                <Icon
                  size={20}
                  className="text-orange-300 mb-2 group-hover:scale-110 transition-transform"
                />
                <p className="text-xs text-orange-200/70">{item.label}</p>
                <p className="text-sm font-semibold text-orange-100 mt-1">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(-10px);
          }
          50% {
            transform: translateY(-30px) translateX(10px);
          }
          75% {
            transform: translateY(-15px) translateX(-15px);
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-scale-in {
          animation: scale-in 300ms ease-out;
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
