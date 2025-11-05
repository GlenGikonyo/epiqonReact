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
                      <li><a href="#">info@epiqonsolutions.co ke</a></li>
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
                      <li><a href="https://www.instagram.com/epiqonsolutions">instagram</a></li>
                      <li><a href="https://www.facebook.com/EpiqonSolutions">facebook</a></li>
                      <li><a href="https://www.linkedin.com/in/epiqon-solution-588aa8227">linkedin</a></li>
                      <li><a href="https://x.com/EpiqonS">X</a></li>
                      <li><a href="https://www.youtube.com/@epiqonsolutionsltd"></a>youtube</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-4">
                  <div className="footer-links">
                    <h2>services</h2>
                    <ul>
                      <li><a href="#">photography and videography</a></li>
                      <li><a href="#">digital marketing</a></li>
                      <li><a href="#">website development</a></li>
                      <li><a href="#">graphics design and branding</a></li>
                      <li><a href="#">brand management</a></li>
                      <li><a href="#">sound equipment/PA system hire</a></li>
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
