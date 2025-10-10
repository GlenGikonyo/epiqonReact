import React from 'react';
import icon1 from '../assets/images/icon-whyus-1.svg';
import icon2 from '../assets/images/icon-whyus-2.svg';
import icon3 from '../assets/images/icon-whyus-3.svg';
import icon4 from '../assets/images/icon-whyus-4.svg';

const WhyChooseUs = () => {
  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const reasons = [
    {
      icon: icon1,
      text: 'One-stop hub for digital marketing, media, and IT solutions'
    },
    {
      icon: icon2,
      text: 'Experienced team with cross-industry expertise'
    },
    {
      icon: icon3,
      text: 'Tailored solutions for businesses of all sizes'
    },
    {
      icon: icon4,
      text: 'Commitment to creativity, professionalism, and results'
    }
  ];

  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">why choose us</h3>
              <h2 className="text-anime-style-3">Why Choose Us?</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {reasons.map((reason, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div className="why-choose-us-item wow fadeInUp" data-wow-delay={`${0.25 * (index + 1)}s`}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{
                    minWidth: '40px',
                    height: '40px',
                    backgroundColor: 'var(--accent-color)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--white-color)',
                    flexShrink: 0
                  }}>
                    <CheckIcon />
                  </div>
                  <p style={{ margin: 0, fontSize: '18px', lineHeight: '1.6' }}>
                    {reason.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>  
      </div>
    </div>
  );
};

export default WhyChooseUs;