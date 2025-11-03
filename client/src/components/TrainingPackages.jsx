import React, { useState } from "react";
import { Link } from 'react-router-dom';
import arrowIcon from "../assets/images/arrow.svg";
import serviceImg1 from "../assets/images/digital-marketing.jpg";
import serviceImg2 from "../assets/images/photography.jpg";
import serviceImg3 from '../assets/images/webdev.jpg';
import serviceImg4 from "../assets/images/graphics-design.jpg";
import serviceImg5 from '../assets/images/brand-management.jpg';
import serviceImg6 from "../assets/images/music-controller.jpg";

// SVG Icons as components
const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: '16px' }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const trainingData = [
  {
    id: 1,
    title: "Photography & Videography",
    icon: "🎥",
    image: serviceImg2,
    delay: "0.25s",
    packages: [
      {
        name: "Beginner Package",
        price: "15,000",
        duration: "2 weeks",
        features: [
          "Camera handling basics",
          "Lighting fundamentals",
          "Composition techniques",
          "Introduction to editing"
        ]
      },
      {
        name: "Advanced Package",
        price: "25,000",
        duration: "4 weeks",
        features: [
          "Visual storytelling",
          "Advanced shooting techniques",
          "Professional editing",
          "Color grading mastery"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Digital Marketing & SEO",
    icon: "💻",
    image: serviceImg1,
    delay: "0.5s",
    packages: [
      {
        name: "Starter Package",
        price: "12,000",
        duration: "2 weeks",
        features: [
          "Social media basics",
          "Content creation",
          "Scheduling tools",
          "Platform management"
        ]
      },
      {
        name: "Professional Package",
        price: "20,000",
        duration: "4 weeks",
        features: [
          "Meta Ads campaigns",
          "SEO optimization",
          "Campaign management",
          "Analytics & reporting"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Website Development",
    icon: "🌐",
    image: serviceImg3,
    delay: "0.75s",
    packages: [
      {
        name: "Basic Package",
        price: "18,000",
        duration: "3 weeks",
        features: [
          "WordPress fundamentals",
          "Drag-and-drop builders",
          "Basic hosting setup",
          "Site management"
        ]
      },
      {
        name: "Pro Package",
        price: "30,000",
        duration: "6 weeks",
        features: [
          "HTML & CSS coding",
          "CMS management",
          "SEO integration",
          "Live project work"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Graphic Design",
    icon: "🎨",
    image: serviceImg4,
    delay: "1s",
    packages: [
      {
        name: "Beginner Package",
        price: "15,000",
        duration: "2 weeks",
        features: [
          "Canva mastery",
          "Design principles",
          "Branding basics",
          "Social media graphics"
        ]
      },
      {
        name: "Advanced Package",
        price: "25,000",
        duration: "4 weeks",
        features: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Brand identity design",
          "Marketing collateral"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Brand Management",
    icon: "📈",
    image: serviceImg5,
    delay: "1.25s",
    packages: [
      {
        name: "Corporate Package",
        price: "25,000",
        duration: "3 weeks",
        features: [
          "Brand positioning",
          "Digital presence strategy",
          "Customer engagement",
          "Brand consistency"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Sound & PA System Management",
    icon: "🔊",
    image: serviceImg6,
    delay: "1.5s",
    packages: [
      {
        name: "Basic Package",
        price: "12,000",
        duration: "1 week",
        features: [
          "Sound setup basics",
          "Microphone handling",
          "Small event operations",
          "Equipment maintenance"
        ]
      },
      {
        name: "Advanced Package",
        price: "20,000",
        duration: "3 weeks",
        features: [
          "Event sound engineering",
          "Live mixing",
          "Troubleshooting",
          "Large venue management"
        ]
      }
    ]
  }
];

const TrainingPackages = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="our-services">
      <style>{`
        .training-packages-container {
          padding: 60px 0;
        }
        
        .training-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
          margin-bottom: 30px;
        }
        
        .training-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          transform: translateY(-5px);
        }
        
        .training-icon-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          margin-bottom: 15px;
        }
        
        .training-content {
          padding: 25px;
        }
        
        .training-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #1a1a1a;
        }
        
        .toggle-packages-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f0f7ff;
          color: #2563eb;
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        
        .toggle-packages-btn:hover {
          background: #dbeafe;
        }
        
        .packages-expandable {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.5s ease;
          opacity: 0;
        }
        
        .packages-expandable.expanded {
          max-height: 2000px;
          opacity: 1;
        }
        
        .packages-wrapper {
          padding: 0 25px 25px;
        }
        
        .package-item {
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }
        
        .package-item:hover {
          border-color: #2563eb;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
        }
        
        .package-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }
        
        .package-name {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 5px;
        }
        
        .package-duration {
          font-size: 14px;
          color: #6b7280;
        }
        
        .package-price {
          text-align: right;
        }
        
        .package-price-amount {
          font-size: 28px;
          font-weight: 700;
          color: #2563eb;
          line-height: 1;
        }
        
        .package-features {
          list-style: none;
          padding: 0;
          margin: 0 0 15px 0;
        }
        
        .package-feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 10px;
          font-size: 14px;
          color: #4b5563;
        }
        
        .check-icon {
          color: #10b981;
          margin-right: 10px;
          margin-top: 2px;
        }
        
        .enroll-btn {
          width: 100%;
          background: #2563eb;
          color: #fff;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .enroll-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
        
        @media (max-width: 768px) {
          .training-packages-container {
            padding: 40px 0;
          }
          
          .training-title {
            font-size: 18px;
          }
          
          .package-header {
            flex-direction: column;
          }
          
          .package-price {
            text-align: left;
            margin-top: 10px;
          }
        }
      `}</style>
      
      <div className="container training-packages-container">
        <div className="row section-row align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="section-title">
              <h3 className="wow fadeInUp">Training Packages & Pricing</h3>
              <h2 className="text-anime-style-3">What we can offer today</h2>
            </div>
          </div>

          <div className="col-lg-5 col-md-5">
            <div className="section-btn">
              <a
                href="/services"
                className="btn-default wow fadeInUp"
                data-wow-delay="0.25s"
              >
                view all training packages
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          {trainingData.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div className="training-card wow fadeInUp" data-wow-delay={service.delay}>
                <div className="training-image-wrapper">
                  <img src={service.image} alt={service.title} />
                  <div className="training-icon-badge">
                    {service.icon}
                  </div>
                </div>

                <div className="training-content">
                  <h3 className="training-title">{service.title}</h3>
                  
                  <button
                    onClick={() => toggleCard(service.id)}
                    className="toggle-packages-btn"
                  >
                    <span>{expandedCard === service.id ? 'Hide' : 'View'} Packages</span>
                    {expandedCard === service.id ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>

                <div className={`packages-expandable ${expandedCard === service.id ? 'expanded' : ''}`}>
                  <div className="packages-wrapper">
                    {service.packages.map((pkg, index) => (
                      <div key={index} className="package-item">
                        <div className="package-header">
                          <div>
                            <div className="package-name">{pkg.name}</div>
                            <div className="package-duration">{pkg.duration}</div>
                          </div>
                          <div className="package-price">
                            <div className="package-price-amount">
                              KES {pkg.price}
                            </div>
                          </div>
                        </div>
                        
                        <ul className="package-features">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="package-feature-item">
                              <span className="check-icon"><Check /></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPackages;