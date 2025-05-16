import React, { useEffect } from "react";
import Swiper from "swiper";
// import "../assets/css/swiper-bundle.min.css";

import starIcon from "../assets/images/icon-star.svg";
import author1 from "../assets/images/author-1.jpg";
import author2 from "../assets/images/author-2.jpg";
import author3 from "../assets/images/author-3.jpg";

const Testimonials = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    return () => swiper.destroy(); // Clean up on unmount
  }, []);

  return (
    <div className="clients-testimonials about-testimonials">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">client testimonials</h3>
              <h2 className="text-anime-style-3">Our customers love us.</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="testimonial-slider">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {[{
                    author: "John Doe",
                    company: "Acme Solutions",
                    image: author1
                  }, {
                    author: "Arita Banson",
                    company: "Delta Innovation",
                    image: author2
                  }, {
                    author: "Banson Doe",
                    company: "Horizon Ventures",
                    image: author3
                  }, {
                    author: "John Doe",
                    company: "Omega Solutions",
                    image: author2
                  }].map((testimonial, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="testimonial-item">
                        <div className="testimonial-rating">
                          <img src={starIcon} alt="Rating stars" />
                        </div>
                        <div className="testimonial-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since.
                          </p>
                        </div>
                        <div className="testimonial-body">
                          <figure className="image-anime">
                            <img src={testimonial.image} alt={testimonial.author} />
                          </figure>
                          <div className="testimonial-author-title">
                            <h2>{testimonial.author}</h2>
                            <p>{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
