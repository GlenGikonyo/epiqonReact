import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import starIcon from "../assets/images/icon-star.svg";

const Testimonials = () => {
  const testimonials = [
    {
      author: "Wanjiku Mwangi",
      company: "SafariTech Solutions",
      testimonial:
        "Epiqon Solutions helped us transform our digital presence. Their professionalism and creativity are unmatched!",
    },
    {
      author: "Otieno Ochieng",
      company: "Lake Victoria Enterprises",
      testimonial:
        "The team at Epiqon Solutions delivered beyond our expectations. Their branding services are top-notch!",
    },
    {
      author: "Amina Hassan",
      company: "Nairobi Innovations Ltd",
      testimonial:
        "We were impressed by their attention to detail and ability to capture our vision perfectly. Highly recommended!",
    },
    {
      author: "Kamau Njuguna",
      company: "Mount Kenya Ventures",
      testimonial:
        "Their photography and videography services brought our events to life. We couldn't be happier with the results!",
    },
    {
      author: "Chebet Kiprono",
      company: "Rift Valley Creations",
      testimonial:
        "Epiqon Solutions provided excellent digital marketing strategies that boosted our brand visibility significantly.",
    },
  ];

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
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                className="mySwiper"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item">
                      <div className="testimonial-rating">
                        <img src={starIcon} alt="Rating stars" />
                      </div>
                      <div className="testimonial-content">
                        <p>{testimonial.testimonial}</p>
                      </div>
                      <div className="testimonial-body">
                        <div className="testimonial-author-title">
                          <h2>{testimonial.author}</h2>
                          <p>{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;