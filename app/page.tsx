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

export default function page() {
  return (

    <div className="min-h-screen  bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}