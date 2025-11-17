import React from 'react';
import footerLogo from '../assets/images/ei_1644409695507-removebg-preview.png'; // adjust the path as needed

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Mega Footer Start */}
            <div className="mega-footer">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  {/* Footer About Start */}
                  <div className="footer-about">
                    <figure>
                      <img src={footerLogo} alt="Footer Logo" />
                    </figure>
                    <ul>
                      <li><a href="#">info@epiqon.co ke</a></li>
                      <li><a href="0780181834">0780181834/070277014
                      </a></li>
                    </ul>
                  </div>
                  {/* Footer About End */}
                </div>

                <div className="col-lg-2 col-md-4">
                  <div className="footer-links">
                    <h2>pages</h2>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/services">Services</a></li>
                      <li><a href="/training">Training Packages</a></li>
                      <li><a href="/contact-us">Contact Us</a></li>
                      <li><a href="/portfolio">Portfolio</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-4">
                  <div className="footer-links">
                    <h2>Socials</h2>
                    <ul>
                      <li><a href="https://www.instagram.com/epiqonsolutions" target='blank'>instagram</a></li>
                      <li><a href="https://www.facebook.com/EpiqonSolutions" target='blank'>facebook</a></li>
                      <li><a href="https://www.linkedin.com/in/epiqon-solution-588aa8227" target='blank'>linkedin</a></li>
                      <li><a href="https://x.com/EpiqonS" target='blank'>X</a></li>
                      <li><a href="https://www.youtube.com/@epiqonsolutionsltd" target='blank'>youtube</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-4">
                  <div className="footer-links">
                    <h2>services</h2>
                    <ul>
                      <li><a href="/services/2">photography and videography</a></li>
                      <li><a href="/services/1">digital marketing</a></li>
                      <li><a href="/services/3">website development</a></li>
                      <li><a href="/services/4">graphics design and branding</a></li>
                      <li><a href="/services/5">brand management</a></li>
                      <li><a href="/services/6">sound equipment/PA system hire</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-copyright">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="footer-copyright-text">
                    <p>Copyright © {currentYear} Epiqon Solutions. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="footer-policy-links">
                    <ul>
                      <li className="highlighted"><a href="#top">go to top</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
