import React from "react";
import aboutImage from "../assets/images/about-more.jpg"; // Update the path as needed

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-8">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">about Our Company</h3>
              <h2 className="text-anime-style-3">
               About Epiqon Solutions
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Us Image Start */}
            <div className="about-image">
              <div className="about-img">
                <figure className="image-anime">
                  <img src={aboutImage} alt="About Us" />
                </figure>
              </div>
            </div>
            {/* About Us Image End */}
          </div>

          <div className="col-lg-6">
            {/* About Us Content Start */}
            <div className="about-content">
              <p className="wow fadeInUp" data-wow-delay="0.25s">
              Epiqon Solutions Ltd is a creative and technology-driven company
              dedicated to helping brands, businesses, and organizations stand
              out in the digital age.
              </p>
              <p className="wow fadeInUp" data-wow-delay="0.5s">
              As a sister company to Epiq Concepts
              Ltd, we combine expertise in media production and IT solutions
              to deliver impactful results that elevate brands, capture
              audiences, and deliver measurable success.
              </p>
            </div>
            {/* About Us Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
