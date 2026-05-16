"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    programme: "MBA — 2023",
    avatar: "PS",
    color: "bg-blue-500",
    quote:
      "JG University gave me the perfect blend of theory and practical learning. The industry connections opened doors I never imagined. I landed my dream job at a top MNC within a month of graduating.",
  },
  {
    name: "Arjun Mehta",
    programme: "B.Tech CSE — 2022",
    avatar: "AM",
    color: "bg-emerald-500",
    quote:
      "The faculty here are exceptional — not just professors, but real-world practitioners who bring live case studies to class. The AI lab infrastructure is world-class. Couldn't have asked for better preparation.",
  },
  {
    name: "Divya Patel",
    programme: "B.Des — 2023",
    avatar: "DP",
    color: "bg-purple-500",
    quote:
      "As a design student, the creative freedom and mentorship I received at JG was incredible. The industry linkage programme got me an internship at a top design firm before I even finished my degree.",
  },
  {
    name: "Rohan Joshi",
    programme: "LLB — 2021",
    avatar: "RJ",
    color: "bg-amber-500",
    quote:
      "The experiential learning approach really sets JG apart. We argued real cases in moot courts, visited actual courts, and met practising lawyers. That preparation made me confident from day one of practice.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="section-reveal text-center mb-14">
          <span className="inline-block text-crimson-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Student Stories
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Voices from our Community
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real experiences from students who chose JG University to shape their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`relative bg-white rounded-3xl border border-gray-100 p-7 shadow-sm card-hover transition-all duration-500 ${
                i === 0 ? "ring-2 ring-crimson-100" : ""
              }`}
            >
              <Quote size={32} className="text-crimson-100 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.programme}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-crimson-400 hover:text-crimson-600 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? "bg-crimson-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-crimson-400 hover:text-crimson-600 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
