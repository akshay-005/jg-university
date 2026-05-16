"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "New-age Tech-Driven University",
  "UGC Approved & Government Recognized",
  "17 Colleges & 3 Schools under ASIA Trust",
  "Programmes designed for future industry demands",
  "Seamless path to employment or self-employment",
  "Industry partnerships for real-world exposure",
];

const strengths = [
  {
    icon: "🔗",
    title: "Interdisciplinary Approach",
    desc: "Students from diverse backgrounds connect, ideate, and solve problems with different conceptual methods.",
  },
  {
    icon: "🧪",
    title: "Immersive & Experiential Learning",
    desc: "Exposure to real-life projects to develop hands-on expertise that employers value.",
  },
  {
    icon: "🧠",
    title: "Whole Brain Learning Pedagogy",
    desc: "Pedagogy that empowers learners to acquire future-proof technical skills while moulding creative thinkers.",
  },
  {
    icon: "👨‍🏫",
    title: "Faculty from Academia & Industry",
    desc: "Brilliant scholars with vast academic knowledge and dynamic real-world experience inspiring every class.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="section-reveal grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-crimson-600 font-semibold text-sm tracking-widest uppercase mb-4">
              About JG University
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Welcome to the Best University in Ahmedabad
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              JG University is a New Age Tech-Driven University offering programmes that
              evolve as per future industry demand, enabling students to get into employment
              or self-employment seamlessly. Sponsored by ASIA Charitable Trust — managing
              education excellence since 1965.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-crimson-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            {strengths.map((s, i) => (
              <div
                key={s.title}
                className="group flex gap-5 p-5 rounded-2xl border border-gray-100 hover:border-crimson-100 hover:bg-crimson-50/30 card-hover transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl shrink-0 mt-1">{s.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-crimson-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "1965", label: "Year Founded" },
            { number: "17+", label: "Colleges" },
            { number: "80+", label: "Programmes" },
            { number: "15K+", label: "Alumni" },
          ].map(({ number, label }) => (
            <div
              key={label}
              className="text-center py-8 px-4 rounded-2xl bg-gradient-to-br from-crimson-50 to-crimson-100/50 border border-crimson-100"
            >
              <p className="stat-number text-4xl text-crimson-700 mb-2">{number}</p>
              <p className="text-gray-600 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
