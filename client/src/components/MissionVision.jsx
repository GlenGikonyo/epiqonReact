import React from "react";
import missionIcon from "../assets/images/mission2.svg"; 
import visionIcon from "../assets/images/vision2.png"; 

const MissionVision = () => {
  const statements = [
    {
      icon: missionIcon,
      title: "Mission",
      text: "To empower businesses and individuals with innovative media, marketing, and IT solutions that drive visibility, growth, and long-term success.",
    },
    {
      icon: visionIcon,
      title: "Vision",
      text: "To be a leading African hub for digital innovation, transforming brands into industry leaders through creative and tech-driven solutions.",
    },
  ];

  return (
    <div
      className="mission-vision"
      style={{ backgroundColor: "#FFFFFF", padding: "40px 0" }}
    >
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">Our Mission & Vision</h3>
              <h2 className="text-anime-style-3">What Drives Us</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {statements.map((statement, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div
                className="mission-vision-card wow fadeInUp"
                data-wow-delay={`${0.25 * (index + 1)}s`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                {/* Icon Section */}
                <div
                  style={{
                    flex: "0 0 25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={statement.icon}
                    alt={`${statement.title} Icon`}
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>

                {/* Content Section */}
                <div style={{ flex: "1" }}>
                  <h3
                    style={{
                      marginBottom: "10px",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {statement.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#555",
                    }}
                  >
                    {statement.text}
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

export default MissionVision;