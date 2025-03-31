import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <HeroSection />
    </div>
  );
}
