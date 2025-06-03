import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import AboutHero from "../components/HeroAbout";
import OurServices from "../components/HeroServices";
import WhyChooseUs from "../components/ChooseUs";

const About = () => {
  return (
    <>
      <Navbar />
      <PageHeader title={"About Us"}/>
      <AboutHero />
      <OurServices />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default About;
