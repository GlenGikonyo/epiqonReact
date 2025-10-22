import React from "react";
import manEditing from "../assets/images/black-guy-editing.jpg"; 

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Epiqon Solutions</h3>
                <h1 className="text-anime-style-3">
                  Digital Media & IT <span>Service Provider</span>
                </h1>
              </div>
              {/* Section Title End */}

              {/* Hero Body Start */}
              <div className="hero-body">
                <p className="wow fadeInUp" data-wow-delay="0.5s">
                  Epiqon Solutions Ltd is a creative and technology-driven
                  company dedicated to helping brands, businesses, and
                  organizations stand out in the digital age.
                </p>
              </div>
              {/* Hero Body End */}

              {/* Hero Footer Start */}
              <div className="hero-footer">
                <a
                  href="/contact-us"
                  className="btn-default wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  contact us
                </a>
              </div>
              {/* Hero Footer End */}
            </div>
            {/* Hero Left Content End */}
          </div>

          <div className="col-lg-6">
            {/* Hero Video Image Start */}
            <div className="hero-video-image">
              <div className="hero-image">
                <figure className="image-anime">
                  <img src={manEditing} alt="edit" />
                </figure>
              </div>

              {/* <div className="hero-play-button">
                <a
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                >
                  <i className="fa-solid fa-play"></i>
                </a>
              </div> */}
            </div>
            {/* Hero Video Image End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
