import React from 'react';
import aboutImage from '../assets/images/about-us-img.jpg'; // Update the path as needed

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-8">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">about Company</h3>
              <h2 className="text-anime-style-3">Websites that tell your brand&apos;s story</h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Us Image Start */}
            <div className="about-image">
              <div className="about-img">
                <figure className="image-anime">
                  <img src={aboutImage} alt="About Us" />
                </figure>
              </div>
            </div>
            {/* About Us Image End */}
          </div>

          <div className="col-lg-6">
            {/* About Us Content Start */}
            <div className="about-content">
              <p className="wow fadeInUp" data-wow-delay="0.25s">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.
              </p>

              <p className="wow fadeInUp" data-wow-delay="0.5s">
                totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto
                beatae vitae dicta sunt explicabo. sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt.
              </p>

              <p className="wow fadeInUp" data-wow-delay="0.75s">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>

              <ul className="wow fadeInUp" data-wow-delay="1s">
                <li>Ease of Scalability</li>
                <li>Instant Impact</li>
                <li>Expertise and Experience</li>
                <li>Time Zone Aligned</li>
                <li>Full Flexibility</li>
                <li>Proactive Support</li>
              </ul>

              <a href="#" className="btn-default wow fadeInUp" data-wow-delay="1.25s">
                free consultation
              </a>
            </div>
            {/* About Us Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
