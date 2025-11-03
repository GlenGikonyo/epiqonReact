import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
// import Projects from "../components/Projects";
import TrainingPackages from "../components/TrainingPackages";

const TrainingsPackages = () => {
  return (
    <>
      <Navbar />
      <PageHeader title={"Training Packages & Pricing"} />
      {/* <Projects /> */}
      <TrainingPackages />
      <Footer />
    </>
  );
};

export default TrainingsPackages;
