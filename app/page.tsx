import Navbar from "@/components/Navbar";
import Loading from "./loading";
import "./globals.css";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function page() {
  return (

    <div className="min-h-screen  bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}