import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../data/serviceData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pageHeaderBg from "../assets/images/page-header-bg.png";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div>
        <Navbar />
        <div className="container text-center py-5">
          <h2>Service Not Found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Page Header Start */}
      <div
        className="page-header"
        style={{
          position: "relative",
          backgroundImage: `url(${pageHeaderBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3">{service.title}</h1>
                <nav className="wow fadeInUp" data-wow-delay="0.25s">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">home</Link>
                  </li>
                </ol>
              </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single Service Content Start */}
      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="service-featured-image">
                  <figure className="image-anime reveal">
                    <img src={service.image} alt={service.title} />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    {service.details}
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.5s">
                    {service.description}
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.75s">
               
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-sidebar">
                <div
                  className="services-list-box wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">Photography & Videography</a>
                    </li>
                    <li>
                      <a href="#">Website Development</a>
                    </li>
                    <li>
                      <a href="#">Graphics Design And Branding</a>
                    </li>
                    <li>
                      <a href="#">Brand Management</a>
                    </li>
                    <li>
                      <a href="#">Sound Equipment / PA System Hire</a>
                    </li>
                  </ul>
                  <a href="/contact-us" className="btn-default">
                    contact now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
