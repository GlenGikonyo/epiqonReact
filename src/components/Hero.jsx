import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">about our Company</h3>
                <h1 className="text-anime-style-3">
                  Digital Media & IT <span>Service Provider</span>
                </h1>
              </div>
              {/* Section Title End */}

              {/* Hero Body Start */}
              <div className="hero-body">
                <p className="wow fadeInUp" data-wow-delay="0.5s">
                  Welcome to Epiqon Solutions Ltd, where innovation meets
                  excellence in media and IT services. We specialize in
                  providing comprehensive solutions tailored to meet your needs.
                </p>
              </div>
              {/* Hero Body End */}

              {/* Hero Footer Start */}
              <div className="hero-footer">
                <a
                  href="#"
                  className="btn-default wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  free consultation
                </a>
              </div>
              {/* Hero Footer End */}
            </div>
            {/* Hero Left Content End */}
          </div>

          <div className="col-lg-4">
            {/* Hero Video Image Start */}
            <div className="hero-video-image">
              <div className="hero-image">
                <figure className="image-anime reveal">
                  <img src="/images/man-editing.webp" alt="" />
                </figure>
              </div>

              <div className="hero-play-button">
                <a
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                >
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
            {/* Hero Video Image End */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
