import React from "react";
import { Link } from "react-router-dom";
import pageHeaderBg from "../assets/images/page-header-bg.png";

const PageHeader = ({ title }) => {
  return (
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
            {/* Page Header Box Start */}
            <div className="page-header-box">
              <h1 className="text-anime-style-3">{title}</h1>
              <nav className="wow fadeInUp" data-wow-delay="0.25s">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">home</Link>
                  </li>
                </ol>
              </nav>
            </div>
            {/* Page Header Box End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
