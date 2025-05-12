import React from 'react';
import logo from '../assets/images/ei_1644409695507-removebg-preview.png'; // adjust path as necessary

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <a className="navbar-brand" href="index.html">
              <img src={logo} alt="Logo" />
            </a>
            {/* Logo End */}
            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li><a className="nav-link" href="index.html">home</a></li>
                  <li className="nav-item"><a className="nav-link" href="about.html">about us</a></li>
                  <li className="nav-item"><a className="nav-link" href="services.html">services</a></li>
                  <li className="nav-item"><a className="nav-link" href="portfolio.html">portfolio</a></li>
                  <li className="nav-item"><a className="nav-link" href="blog.html">blog</a></li>
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#">pages</a>
                    <ul>
                      <li className="nav-item"><a className="nav-link" href="service-single.html">service details</a></li>
                      <li className="nav-item"><a className="nav-link" href="portfolio-single.html">portfolio details</a></li>
                      <li className="nav-item"><a className="nav-link" href="blog-single.html">blog details</a></li>
                      <li className="nav-item"><a className="nav-link" href="faqs.html">FAQ</a></li>
                      <li className="nav-item"><a className="nav-link" href="404.html">404</a></li>
                    </ul>
                  </li>
                  <li className="nav-item highlighted-menu">
                    <a className="nav-link" href="contact-us.html">free consultation</a>
                  </li>
                </ul>
              </div>

              {/* Let’s Start Button Start */}
              <div className="header-btn d-inline-flex">
                <a href="contact-us.html" className="btn-default">free consultation</a>
              </div>
              {/* Let’s Start Button End */}
            </div>
            {/* Main Menu End */}

            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Navbar;
