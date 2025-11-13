import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

const portfolioProjects = [
    {
        id: 1,
        title: "Take Two Sound and Events",
        category: "Website Development",
        categoryId: "website-development",
        image: "/src/assets/images/ttsound.png",
        description: "Increased event bookings by 180% and streamlined online reservations system.",
        details: "We developed a comprehensive website with integrated booking system, event showcase gallery, and real-time availability calendar. The new platform reduced manual inquiry responses by 70%, increased online event bookings by 180%, improved client communication through automated confirmations, and generated 25K monthly website visitors. Their equipment rental inquiries increased by 200% within the first quarter.",
        liveUrl: "https://www.ttsound-events.co.ke/",
    },
    {
        id: 2,
        title: "Church Media Coverage",
        category: "Photography & Videography",
        categoryId: "photography-videography",
        image: "/src/assets/images/corporate_coverage.jpg",
        description: "Professional media coverage for a local church to boost their social platform presence.",
        details: "Provided comprehensive media coverage for a local church including high-quality photography and videography of services, events, and community activities. Our professional content significantly boosted their social media engagement, increasing followers by 300% and average post views by 250% within three months. Delivered optimized content for Instagram, Facebook, and YouTube with consistent posting schedule.",
        liveUrl: null,
    },
    {
        id: 3,
        title: "Urban African Dubbing",
        category: "Website Development",
        categoryId: "website-development",
        image: "/src/assets/images/UAD.png",
        description: "Built a professional portfolio website for a voiceover and dubbing company, resulting in 40% more client inquiries.",
        details: "Developed a stunning portfolio website for Urban African Dubbing showcasing their voice talent catalog, dubbing samples, and project portfolio. The site features an intuitive quotation system, client testimonials, and integrated media player for audio samples. This new online presence increased their monthly client inquiries by 40%, expanded their reach across 5 African countries, and reduced project turnaround time by streamlining the quote and audio samples listening process.",
        liveUrl: "https://urbanafricandubbing.com/",
    },
    {
        id: 6,
        title: "Sound System",
        category: "Sound Equipment / PA Systems",
        categoryId: "sound-equipment",
        image: "/src/assets/images/pasystems.jpg",
        description: "Professional PA system setup for a large-scale music event.",
        details: "Installed state-of-the-art PA system with 15,000W power output, wireless microphones, and professional mixing console. Provided on-site technical support and sound checks for 5,000+ attendee event.",
        liveUrl: null,
    },
    {
        id: 8,
        title: "Wedding Videography",
        category: "Photography & Videography",
        categoryId: "photography-videography",
        image: "/src/assets/images/wedding_coverage.jpg",
        description: "Cinematic wedding videography capturing precious moments.",
        details: "Professional wedding videography service including 4K ceremony coverage, reception highlights, and cinematic edit. Delivered as 2-4 minute highlight reel plus full-length footage, drone shots, and same-day preview.",
        liveUrl: null,
    },
];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "photography-videography", label: "Photography & Videography" },
    { id: "website-development", label: "Website Development" },
    { id: "graphics-branding", label: "Graphics Design & Branding" },
    { id: "sound-equipment", label: "Sound Equipment / PA Systems" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.categoryId === activeCategory);

  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <style>{`
        .portfolio-section {
          padding: 60px 0;
          background-color: #f9f9f9;
        }

        .portfolio-filter {
          text-align: center;
          margin-bottom: 50px;
        }

        .portfolio-filter h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #15161b;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 2px solid #1574bc;
          background-color: transparent;
          color: #1574bc;
          font-size: 14px;
          font-weight: 600;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background-color: #1574bc;
          color: #ffffff;
        }

        .filter-btn.active {
          background-color: #1574bc;
          color: #ffffff;
        }

        .portfolio-card {
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .portfolio-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .portfolio-image {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .portfolio-card:hover .portfolio-image img {
          transform: scale(1.1);
        }

        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(21, 116, 188, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
        }

        .view-btn {
          padding: 10px 20px;
          background-color: #ffffff;
          color: #1574bc;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-btn:hover {
          background-color: #1574bc;
          color: #ffffff;
        }

        .portfolio-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .portfolio-category {
          display: inline-block;
          padding: 5px 10px;
          background-color: #f0f0f0;
          color: #1574bc;
          font-size: 12px;
          font-weight: 600;
          border-radius: 3px;
          margin-bottom: 10px;
          width: fit-content;
        }

        .portfolio-content h3 {
          font-size: 18px;
          margin-bottom: 10px;
          margin-top: 0;
          
        }

        .portfolio-content p {
          font-size: 14px;
          color: #9c9fa6;
          line-height: 1.6;
          margin: 0 0 15px 0;
          flex: 1;
        }

        .portfolio-buttons {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .learn-more-btn,
        .see-live-btn {
          flex: 1;
          padding: 10px 15px;
          border: 2px solid #1574bc;
          background-color: transparent;
          color: #1574bc;
          font-weight: 600;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 13px;
        }

        .learn-more-btn:hover {
          background-color: #1574bc;
          color: #ffffff;
        }

        .see-live-btn {
          background-color: #1574bc;
          color: #ffffff;
          border-color: #1574bc;
        }

        .see-live-btn:hover {
          background-color: #0d5a99;
          border-color: #0d5a99;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: #ffffff;
          border-radius: 10px;
          padding: 30px;
          max-width: 500px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .modal-header h2 {
          margin: 0;
          color: #15161b;
          font-size: 24px;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #999;
          transition: color 0.3s ease;
        }

        .close-btn:hover {
          color: #15161b;
        }

        .modal-category {
          display: inline-block;
          padding: 5px 10px;
          background-color: #f0f0f0;
          color: #1574bc;
          font-size: 12px;
          font-weight: 600;
          border-radius: 3px;
          margin-bottom: 15px;
        }

        .modal-details {
          color: #555;
          line-height: 1.8;
          font-size: 15px;
          margin-bottom: 20px;
        }

        .modal-buttons {
          display: flex;
          gap: 10px;
        }

        .modal-buttons button {
          flex: 1;
          padding: 12px;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-close-btn {
          background-color: #f0f0f0;
          color: #15161b;
        }

        .modal-close-btn:hover {
          background-color: #e0e0e0;
        }

        .modal-live-btn {
          background-color: #1574bc;
          color: #ffffff;
        }

        .modal-live-btn:hover {
          background-color: #0d5a99;
        }

        @media (max-width: 768px) {
          .filter-buttons {
            flex-direction: column;
            gap: 10px;
          }

          .filter-btn {
            width: 100%;
          }

          .portfolio-card {
            margin-bottom: 20px;
          }

          .portfolio-buttons {
            flex-direction: column;
          }

          .modal-content {
            width: 95%;
            padding: 20px;
          }
        }
      `}</style>

      <Navbar />
      <PageHeader title={"Portfolio"} />

      <div className="portfolio-section">
        <div className="container">
          {/* Category Filter */}
          <div className="row section-row align-items-center">
            <div className="col-lg-12">
              <div className="portfolio-filter">
                <h3 className="wow fadeInUp">Filter by Service</h3>
                <div className="filter-buttons wow fadeInUp" data-wow-delay="0.25s">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="row">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="portfolio-card wow fadeInUp" data-wow-delay="0.25s">
                    <div className="portfolio-image">
                      <img src={project.image} alt={project.title} />
                      {/* <div className="portfolio-overlay">
                        <button className="view-btn">View</button>
                      </div> */}
                    </div>
                    <div className="portfolio-content">
                      <span className="portfolio-category">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="portfolio-buttons">
                        <button
                          className="learn-more-btn"
                          onClick={() => setSelectedProject(project)}
                        >
                          Learn More
                        </button>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <button className="see-live-btn">View Live</button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-12 text-center">
                <p>No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <button className="close-btn" onClick={closeModal}>
                ×
              </button>
            </div>
            <span className="modal-category">{selectedProject.category}</span>
            <div className="modal-details">{selectedProject.details}</div>
            <div className="modal-buttons">
              <button className="modal-close-btn" onClick={closeModal}>
                Close
              </button>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", flex: 1 }}
                >
                  <button className="modal-live-btn" style={{ width: "100%" }}>
                    See Live
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Portfolio;