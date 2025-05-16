import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import OurServices from "../components/HeroServices";
import Testimonials from "../components/Testimonials";

const Services = () => {
  return (
    <>
      <Navbar />
      <PageHeader title={"Services"} />
      <OurServices />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Services;
