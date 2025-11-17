import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import AboutHero from "../components/HeroAbout";
// import OurServices from "../components/HeroServices";
// import ChooseUs from "../components/ChooseUs";
// import CoreValues from "../components/CoreValues";
// import MissionVision from "../components/MissionVision";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <AboutHero />
      <OurServices />
      <ChooseUs />
      <CoreValues />
      <MissionVision /> */}
      <Footer />
    </>
  );
};

export default Home;
