"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play, Award, Users, BookOpen } from "lucide-react";

const stats = [
  { icon: Users, value: "15,000+", label: "Students Enrolled" },
  { icon: BookOpen, value: "80+", label: "Programmes" },
  { icon: Award, value: "UGC", label: "Approved" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, []);

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-gold-500/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(240,180,41,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Admissions Open 2026–27
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Shape Your{" "}
              <span className="gold-shimmer">Future</span>{" "}
              with JG University
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              A new-age tech-driven university in Ahmedabad offering
              industry-aligned programmes that evolve with the future.
              UGC approved. Sponsored by ASIA Charitable Trust.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Programmes
                <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border border-white/40 hover:border-white/70 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <Play size={16} className="fill-white" />
                Watch Video
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon size={20} className="text-gold-400 mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-white">{value}</p>
                  <p className="text-white/60 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl transform scale-105" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Engineering & Tech", icon: "⚡", color: "from-blue-500/20 to-blue-600/20" },
                    { title: "Business & MBA", icon: "📈", color: "from-green-500/20 to-green-600/20" },
                    { title: "Design & Arts", icon: "🎨", color: "from-purple-500/20 to-purple-600/20" },
                    { title: "Law & Governance", icon: "⚖️", color: "from-amber-500/20 to-amber-600/20" },
                    { title: "Health Sciences", icon: "🏥", color: "from-red-500/20 to-red-600/20" },
                    { title: "Liberal Arts", icon: "📚", color: "from-teal-500/20 to-teal-600/20" },
                  ].map((prog) => (
                    <div
                      key={prog.title}
                      className={`bg-gradient-to-br ${prog.color} border border-white/20 rounded-2xl p-4 hover:scale-105 transition-transform duration-200 cursor-pointer`}
                    >
                      <div className="text-2xl mb-2">{prog.icon}</div>
                      <p className="text-white text-sm font-medium leading-tight">
                        {prog.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center shrink-0">
                    <Award size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">UGC Approved University</p>
                    <p className="text-white/60 text-xs">Recognized by Government of India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
