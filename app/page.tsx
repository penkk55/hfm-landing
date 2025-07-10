import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Prizes from "@/components/Prizes";
import Leaderboard from "@/components/Leaderboard";
import FAQ from "@/components/FAQ";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header/>
      <Hero />
      <Features />
      <Prizes />
      <Leaderboard />
      <FAQ />
      {/* 
      <Footer /> */}
    </div>
  );
}
