import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import contactData from "../data/contactData";
import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    subject: "",
    msg: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageData = {
      name: `${formData.fname} ${formData.lname}`,
      email: formData.email,
      subject: formData.subject,
      message: formData.msg,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/messages",
        messageData
      );
      setSuccessMessage("Message sent successfully!");
      setFormData({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        subject: "",
        msg: "",
      });
    } catch (err) {
      console.error(err);
      setSuccessMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <PageHeader title={"Contact Us"} />
      {/* Contact Us Section Start */}
      <div className="contact-information">
        <div className="container">
          <div className="row">
            {contactData.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="contact-item wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <div className="contact-content">
                    <div className="contact-content-title">
                      <h2>{item.title}</h2>
                      <a href="#">
                        <img src={item.icon} alt="" />
                      </a>
                    </div>
                    {item.content.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <div className="contact-image">
                    <figure className="image-anime">
                      <img src={item.image} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Us Section End */}
      <div className="contact-us">
        <div className="container">
          <div className="row align-items-center">
            {/* Contact Details Section */}
            <div className="col-lg-6">
              <div className="contact-details">
                <div className="section-title">
                  <h3 className="wow fadeInUp">contact us</h3>
                  <h2 className="text-anime-style-3">
                    Get in touch with us today
                  </h2>
                </div>

                <div className="contact-detail-body">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore et.
                  </p>
                  <h3 className="wow fadeInUp" data-wow-delay="0.5s">
                    follow us:
                  </h3>
                  <ul className="wow fadeInUp" data-wow-delay="0.75s">
                    <li>
                      <a href="https://www.facebook.com/EpiqonSolutions">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/epiqonsolutions">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/epiqon-solution-588aa8227">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/EpiqonS">
                      <i class="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@epiqonsolutionsltd">
                      <i class="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-lg-6">
              <div
                className="contact-form-box wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="fname"
                          className="form-control"
                          placeholder="First Name"
                          value={formData.fname}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="lname"
                          className="form-control"
                          placeholder="Last Name"
                          value={formData.lname}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group col-md-12 mb-4">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group col-md-12 mb-4">
                        <textarea
                          name="msg"
                          className="form-control"
                          rows="7"
                          placeholder="Message"
                          value={formData.msg}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <div className="col-md-12">
                        <button type="submit" className="btn-default">
                          Send a Message
                        </button>
                        {successMessage && (
                          <p className="mt-3 text-success">{successMessage}</p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Form Section */}
      <div className="google-map wow fadeInUp" data-wow-delay="0.25s">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8214493530854!2d36.82096767460077!3d-1.280824398706992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d51576439d%3A0x6159faa41c0b2eb8!2sHemak%20Plaza!5e0!3m2!1sen!2ske!4v1748531218194!5m2!1sen!2ske"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

// This code defines a ContactUs component that renders a Navbar, a PageHeader with the title "Contact Us", and a Footer.
