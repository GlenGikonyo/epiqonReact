import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutHero from "../components/HeroAbout";
import OurServices from "../components/HeroServices";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutHero />
      <OurServices />
      <Footer />
    </>
  );
};

export default Home;
