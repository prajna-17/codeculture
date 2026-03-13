"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I am ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/91123457890?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "kunalsingh67678@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=kunalsingh67678@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8595506516",
      href: "tel:+918595506516",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Phase 3, Noida",
      href: "https://maps.google.com/?q=Phase+3+Noida",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-amber-50/50 to-white py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-bl from-orange-300/15 to-amber-200/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-200/15 to-amber-100/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div
          className={`mb-16 md:mb-20 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-900 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-amber-900/60 text-lg max-w-2xl">
            Have a project in mind or just want to say hello? We'd love to hear
            from you. Fill out the form below and we'll get back to you as soon
            as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* FORM */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative group">
              {/* Animated border gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-300/30 to-orange-300/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative bg-gradient-to-br from-white/80 to-amber-50/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-amber-200/50 group-hover:border-amber-400/40 transition-colors duration-300 shadow-sm"
              >
                {/* Success message */}
                {submitted && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-100/80 to-emerald-100/80 backdrop-blur-sm border border-green-400/40">
                    <div className="text-center">
                      <div className="mb-2">
                        <svg
                          className="w-12 h-12 mx-auto text-green-700 animate-pulse"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-green-800 font-semibold">
                        Message sent successfully!
                      </p>
                      <p className="text-green-700/70 text-sm mt-1">
                        We'll be in touch soon.
                      </p>
                    </div>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-amber-950 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-amber-900/60 text-sm mb-8">
                  We typically respond within 24 hours
                </p>

                <div className="space-y-6">
                  {/* Name field */}
                  <div
                    className="group/field"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <label className="block text-sm font-medium text-amber-950 mb-2 group-focus-within/field:text-amber-700 transition-colors">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-amber-300 text-amber-950 placeholder-amber-900/40 focus:outline-none py-3 focus:border-amber-700 transition-colors duration-300"
                    />
                    <div
                      className={`h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 mt-1 transition-all duration-300 ${
                        focusedField === "name" ? "w-full" : "w-0"
                      }`}
                    />
                  </div>

                  {/* Email field */}
                  <div
                    className="group/field"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <label className="block text-sm font-medium text-amber-950 mb-2 group-focus-within/field:text-amber-700 transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-transparent border-b border-amber-300 text-amber-950 placeholder-amber-900/40 focus:outline-none py-3 focus:border-amber-700 transition-colors duration-300"
                    />
                    <div
                      className={`h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 mt-1 transition-all duration-300 ${
                        focusedField === "email" ? "w-full" : "w-0"
                      }`}
                    />
                  </div>

                  {/* Phone field */}
                  <div
                    className="group/field"
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <label className="block text-sm font-medium text-amber-950 mb-2 group-focus-within/field:text-amber-700 transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full bg-transparent border-b border-amber-300 text-amber-950 placeholder-amber-900/40 focus:outline-none py-3 focus:border-amber-700 transition-colors duration-300"
                    />
                    <div
                      className={`h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 mt-1 transition-all duration-300 ${
                        focusedField === "phone" ? "w-full" : "w-0"
                      }`}
                    />
                  </div>

                  {/* Message field */}
                  <div
                    className="group/field"
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <label className="block text-sm font-medium text-amber-950 mb-2 group-focus-within/field:text-amber-700 transition-colors">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows="5"
                      className="w-full bg-transparent border-b border-amber-300 text-amber-950 placeholder-amber-900/40 focus:outline-none py-3 focus:border-amber-700 transition-colors duration-300 resize-none"
                    />
                    <div
                      className={`h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 mt-1 transition-all duration-300 ${
                        focusedField === "message" ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-10 group/btn relative bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-700/40 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </span>
                </button>

                <p className="text-xs text-amber-900/50 text-center mt-4">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-950 mb-3">
                  Get in Touch
                </h3>
                <p className="text-amber-900/70 leading-relaxed">
                  Whether it's a quick question or a full project proposal,
                  we're ready to talk. Reach out and let's create something{" "}
                  <span className="text-amber-800 font-semibold">powerful</span>
                  .
                </p>
              </div>

              {/* Contact items */}
              <div className="space-y-5">
                {contactItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-orange-100/40 hover:to-amber-100/40 transition-all duration-300 border border-transparent hover:border-amber-400/40 cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-200/40 to-amber-200/40 flex items-center justify-center group-hover:from-orange-300/50 group-hover:to-amber-300/50 transition-all duration-300">
                        <Icon
                          size={24}
                          className="text-amber-800 group-hover:text-amber-900 transition-colors"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-amber-900/70 group-hover:text-amber-900 transition-colors">
                          {item.label}
                        </p>
                        <p className="text-amber-950 font-semibold group-hover:text-orange-700 transition-colors">
                          {item.value}
                        </p>
                      </div>
                      <div className="text-amber-900/50 group-hover:text-amber-700 transition-colors">
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Response time info */}
              <div className="p-6 rounded-lg bg-gradient-to-r from-amber-100/40 to-orange-100/40 border border-amber-300/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full animate-pulse" />
                  <p className="text-amber-900 font-semibold text-sm">
                    Quick Response Time
                  </p>
                </div>
                <p className="text-amber-900/70 text-sm leading-relaxed">
                  We typically respond to inquiries within 24 hours. For urgent
                  matters, feel free to call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 md:mt-24 pt-16 md:pt-20 border-t border-amber-300/40" />
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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
