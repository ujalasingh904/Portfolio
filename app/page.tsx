import Navbar from "@/components/Navbar";
import Loading from "./loading";
import "./globals.css";
import Home from "@/components/Home";

export default function page() {
  return (

    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* <Loading /> */}
      <Home/> 
    </div>
  )
}