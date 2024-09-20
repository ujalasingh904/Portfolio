import Navbar from "@/components/Navbar";
import Loading from "./loading";
import "./globals.css";

export default function page() {
  return (

    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* <Loading /> */}
    </div>
  )
}