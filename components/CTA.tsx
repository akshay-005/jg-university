"use client";

import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useRef, useEffect } from "react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="section-reveal">
          <div className="relative overflow-hidden rounded-3xl hero-gradient p-10 md:p-16 text-white">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-gold-500/10" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
                  Admissions Open 2026–27
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-tight">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-white/75 text-lg leading-relaxed mb-8">
                  Take the first step toward a future-ready career. Apply now or
                  enquire to know more about our programmes, scholarships, and
                  campus life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://jguni.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Apply Now <ArrowRight size={18} />
                  </a>
                  <a
                    href="tel:+917926600000"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-7 py-4 rounded-full transition-all duration-300"
                  >
                    <Phone size={16} /> Call Us
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 space-y-5">
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  Get in Touch
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Campus Address</p>
                    <p className="text-white/65 text-sm mt-1">
                      JG University, Near Kudasan, Gandhinagar, Ahmedabad, Gujarat – 382421
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gold-400 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Phone</p>
                    <p className="text-white/65 text-sm">+91 79 2660 0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gold-400 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Email</p>
                    <p className="text-white/65 text-sm">admissions@jguni.in</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <p className="text-white/50 text-xs">
                    Our admissions team typically responds within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
