import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
// import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <PageHeader title={"Projects"} />
      {/* <Projects /> */}
      <Footer />
    </>
  );
};

export default Portfolio;
