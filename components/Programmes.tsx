"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Undergraduate", "Postgraduate", "Doctoral", "Certificate"];

const programmes = [
  {
    category: "Undergraduate",
    icon: "💻",
    title: "B.Tech Computer Science",
    specializations: ["AI & ML", "Cyber Security", "Data Science"],
    duration: "4 Years",
    color: "from-blue-500 to-blue-700",
  },
  {
    category: "Postgraduate",
    icon: "📊",
    title: "MBA Business Administration",
    specializations: ["Finance", "Marketing", "HR", "Operations"],
    duration: "2 Years",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    category: "Undergraduate",
    icon: "⚖️",
    title: "BA LLB (Hons)",
    specializations: ["Corporate Law", "Criminal Law", "IPR"],
    duration: "5 Years",
    color: "from-amber-500 to-amber-700",
  },
  {
    category: "Undergraduate",
    icon: "🎨",
    title: "B.Des Design",
    specializations: ["Product Design", "UI/UX", "Fashion"],
    duration: "4 Years",
    color: "from-purple-500 to-purple-700",
  },
  {
    category: "Postgraduate",
    icon: "🔬",
    title: "M.Sc Data Science",
    specializations: ["ML", "Big Data", "Analytics"],
    duration: "2 Years",
    color: "from-teal-500 to-teal-700",
  },
  {
    category: "Doctoral",
    icon: "🏆",
    title: "Ph.D Research Programmes",
    specializations: ["Engineering", "Management", "Sciences"],
    duration: "3–5 Years",
    color: "from-crimson-600 to-crimson-800",
  },
  {
    category: "Certificate",
    icon: "⚡",
    title: "Digital Marketing Mastery",
    specializations: ["SEO", "Social Media", "Analytics"],
    duration: "6 Months",
    color: "from-rose-500 to-rose-700",
  },
  {
    category: "Undergraduate",
    icon: "🏥",
    title: "B.Sc Nursing",
    specializations: ["Clinical", "Community Health", "Mental Health"],
    duration: "4 Years",
    color: "from-green-500 to-green-700",
  },
];

export default function Programmes() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeCategory === "All"
      ? programmes
      : programmes.filter((p) => p.category === activeCategory);

  return (
    <section id="programmes" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="section-reveal text-center mb-12">
          <span className="inline-block text-crimson-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Our Programmes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Build Tomorrow&apos;s Career Today
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Industry-aligned programmes across engineering, management, law, design,
            and sciences — crafted for the future.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-crimson-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-crimson-300 hover:text-crimson-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((prog, i) => (
            <div
              key={prog.title}
              className="program-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`bg-gradient-to-br ${prog.color} p-6`}>
                <div className="text-4xl mb-3">{prog.icon}</div>
                <span className="text-white/70 text-xs font-medium tracking-widest uppercase">
                  {prog.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-crimson-700 transition-colors">
                  {prog.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {prog.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-crimson-600 font-semibold text-sm">{prog.duration}</span>
                  <button className="p-2 rounded-full bg-crimson-50 text-crimson-600 hover:bg-crimson-600 hover:text-white transition-all duration-200">
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-crimson-600 font-semibold hover:gap-4 transition-all duration-200"
          >
            View all programmes <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
