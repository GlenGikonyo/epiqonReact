import React from 'react';
import arrowIcon from '../assets/images/arrow.svg';
import serviceImg1 from '../assets/images/service-img-1.jpg';
import serviceImg2 from '../assets/images/service-img-2.jpg';
import serviceImg3 from '../assets/images/service-img-3.jpg';
import serviceImg4 from '../assets/images/service-img-4.jpg';
import serviceImg5 from '../assets/images/service-img-5.jpg';
import serviceImg6 from '../assets/images/service-img-6.jpg';

const OurServices = () => {
  return (
    <div className="our-services">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-7 col-md-7">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">our services</h3>
              <h2 className="text-anime-style-3">What we can offer today</h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-5 col-md-5">
            {/* Section Btn Start */}
            <div className="section-btn">
              <a href="#" className="btn-default wow fadeInUp" data-wow-delay="0.25s">
                view all services
              </a>
            </div>
            {/* Section Btn End */}
          </div>
        </div>

        <div className="row">
          {[
            { title: "web development", image: serviceImg1, delay: "0.25s" },
            { title: "Digital Marketing", image: serviceImg2, delay: "0.5s" },
            { title: "Game Development", image: serviceImg3, delay: "0.75s" },
            { title: "Mobile App Development", image: serviceImg4, delay: "1s" },
            { title: "Networking Services", image: serviceImg5, delay: "1.25s" },
            { title: "Graphics Design", image: serviceImg6, delay: "1.5s" },
          ].map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              {/* Service Item Start */}
              <div className={`service-item wow fadeInUp`} data-wow-delay={service.delay}>
                <div className="service-content">
                  <div className="service-content-title">
                    <h2>{service.title}</h2>
                    <a href="#">
                      <img src={arrowIcon} alt="arrow" />
                    </a>
                  </div>
                  <p>
                    totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.
                  </p>
                </div>
                <div className="service-image">
                  <figure className="image-anime">
                    <img src={service.image} alt={service.title} />
                  </figure>
                </div>
              </div>
              {/* Service Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
