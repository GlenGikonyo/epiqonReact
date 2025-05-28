import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/ei_1644409695507-removebg-preview.png';

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" />
            </Link>
            {/* Logo End */}
            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li><Link className="nav-link" to="/">home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about">about us</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/services">services</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/portfolio">portfolio</Link></li>
                  <li className="nav-item highlighted-menu">
                    <Link className="nav-link" to="/contact-us">free consultation</Link>
                  </li>
                </ul>
              </div>

              {/* Let’s Start Button Start */}
              <div className="header-btn d-inline-flex">
                <Link to="/contact-us" className="btn-default">free consultation</Link>
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
