import React from 'react';
import icon1 from '../assets/images/icon-whyus-1.svg';
import icon2 from '../assets/images/icon-whyus-2.svg';
import icon3 from '../assets/images/icon-whyus-3.svg';
import icon4 from '../assets/images/icon-choice-3.svg';

const CoreValues = () => {
  return (
    <div className="why-choose-us" style={{ backgroundColor: '#F7F8FD' }}>
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">Core Value</h3>
              <h2 className="text-anime-style-3">Our Core Values</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="why-choose-us-item wow fadeInUp" style={{ backgroundColor: '#FFFFFF'}} data-wow-delay="0.25s">
              <div className="icon-box">
                <img src={icon1} alt="" />
              </div>
              <h3>innovation</h3>
              <p>We think ahead to keep your brand future-ready.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="why-choose-us-item wow fadeInUp" style={{ backgroundColor: '#FFFFFF'}} data-wow-delay="0.5s">
              <div className="icon-box">
                <img src={icon2} alt="" />
              </div>
              <h3>Excellence.</h3>
              <p>Quality is non-negotiable</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="why-choose-us-item wow fadeInUp" style={{ backgroundColor: '#FFFFFF'}} data-wow-delay="0.75s">
              <div className="icon-box">
                <img src={icon3} alt="" />
              </div>
              <h3>Integrity</h3>
              <p>We value trust and accountability</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="why-choose-us-item wow fadeInUp" style={{ backgroundColor: '#FFFFFF'}} data-wow-delay="0.75s">
              <div className="icon-box">
                <img src={icon4} alt="" />
              </div>
              <h3>Collaboration</h3>
              <p>Partnering with clients to achieve their goals</p>
            </div>
          </div>

          {/* <div className="col-md-12">
            <div className="why-us-explore-item">
              <div className="row">
                <div className="col-md-12">
                  <div className="why-us-section-title">
                    <div className="section-title">
                      <h2 className="text-anime-style-3">Do you want to explore our outstanding work?</h2>
                    </div>

                    <div className="explore-item-icon">
                      <img src={icon4} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="explore-item-content wow fadeInUp" data-wow-delay="0.25s">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo.
                      Nemo enim ipsam voluptatem quia voluptas sit.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="explore-item-tags wow fadeInUp" data-wow-delay="0.25s">
                    <ul>
                      <li><a href="#" className="btn-default">dribbble</a></li>
                      <li><a href="#" className="btn-default">linkedin</a></li>
                      <li><a href="#" className="btn-default">contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>  
      </div>
    </div>
  );
};

export default CoreValues;






