"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const About = dynamic(() => import("../components/About"), { ssr: false });
const Programmes = dynamic(() => import("../components/Programmes"), { ssr: false });
const Testimonials = dynamic(() => import("../components/Testimonials"), { ssr: false });
const CTA = dynamic(() => import("../components/CTA"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programmes />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}