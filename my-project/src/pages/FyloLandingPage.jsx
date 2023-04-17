import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Productive from "../components/Productive";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const FyloLandingPage = () => {
  return (
    <div className="relative w-full gg bg-DarkBlueIntro">
      <Navbar />
      <main className="w-full bg-DarkBlueMain">
        <Hero />
        <div className="w-[1440px] mx-auto pb-96 relative xl:w-full">
          <Features />
          <Productive />
          <Testimonials />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FyloLandingPage;
