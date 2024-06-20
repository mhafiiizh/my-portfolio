"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
