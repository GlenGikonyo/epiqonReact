import React from 'react';
import footerLogo from '../assets/images/ei_1644409695507-removebg-preview.png'; // adjust the path as needed

const Footer = () => {
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
                    <p>Creative Agency Based on Lorem Ipsum</p>
                    <ul>
                      <li><a href="#">info@domainname.com</a></li>
                      <li><a href="#">(+0) 123 456 789</a></li>
                    </ul>
                  </div>
                  {/* Footer About End */}
                </div>

                <div className="col-lg-2 col-md-4">
                  <div className="footer-links">
                    <h2>pages</h2>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-4">
                  <div className="footer-links">
                    <h2>Socials</h2>
                    <ul>
                      <li><a href="#">instagram</a></li>
                      <li><a href="#">facebook</a></li>
                      <li><a href="#">twitter</a></li>
                      <li><a href="#">linkedin</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-4">
                  <div className="footer-links">
                    <h2>services</h2>
                    <ul>
                      <li><a href="#">web development</a></li>
                      <li><a href="#">digital marketing</a></li>
                      <li><a href="#">game development</a></li>
                      <li><a href="#">mobile app development</a></li>
                      <li><a href="#">networking services</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-copyright">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="footer-copyright-text">
                    <p>Copyright © 2024 weebix. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="footer-policy-links">
                    <ul>
                      <li><a href="#">privacy policy</a></li>
                      <li><a href="#">terms of service</a></li>
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
