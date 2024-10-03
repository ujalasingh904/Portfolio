"use client"
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Loading from "./loading";
import "./globals.css";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine', 
      once: true,      
    });
  }, []);  
 


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);   

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}