// Projects.jsx
import React, { useState } from 'react';
import './Projects.css';

function Projects() {

    // State to manage the full-screen image modal
  const [fullScreenImage, setFullScreenImage] = useState(null);

  // Function to open the full-screen image
  const openFullScreen = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  // Function to close the full-screen image
  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeFullScreen();
      }
    };
    if (fullScreenImage) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [fullScreenImage]);


  return (
    <div className="projects-container">
      {/* Section 1: Abroad Unbox Website */}
      <section className="project-section">
        <div className="project-content">
          <div className="project-text">
            <h1>Abroad Unbox Website</h1>
            <p>
              The Abroad Unbox website is a comprehensive platform designed for a consultancy specializing in study abroad programs. It provides students with a seamless experience to explore international education opportunities, offering detailed information on universities, visa processes, scholarships, and more. Our team at Goodwish Engineering developed this website with a focus on user-friendly navigation and responsive design, ensuring accessibility across all devices. The platform empowers students to make informed decisions about their future, bridging the gap between ambition and opportunity.
            </p>
            <a href="https://abroadunbox.com" className="project-link" target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
          <div className="project-image">
            <img src="src/assets/abroad-unbox.png" alt="Abroad Unbox Website Screenshot"
            onClick={() => openFullScreen("src/assets/abroad-unbox.png")}
            style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </section>

      {/* Section 2: Guthi Sansthan Website */}
      <section className="project-section">
        <div className="project-content">
          <div className="project-text">
            <h1>Guthi Sansthan Website</h1>
            <p>
              The Guthi Sansthan website serves as the official digital platform for Nepal’s major cultural government office, dedicated to preserving and promoting the nation’s rich heritage. Goodwish Engineering crafted this website to facilitate cultural preservation through digital transformation, offering features like event listings, heritage documentation, and public resources. The platform is designed to be intuitive and accessible, ensuring that users—whether locals or global visitors—can engage with Nepal’s cultural legacy effortlessly.
            </p>
            <a href="https://guthisansthan.org.np" className="project-link" target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
          <div className="project-image">
            <img src="src/assets/guthi-sansthan.png" alt="Guthi Sansthan Website Screenshot" 
            onClick={() => openFullScreen("src/assets/guthi-sansthan.png")}
            style={{ cursor: 'pointer' }}/>
          </div>
        </div>
      </section>

      {/* Section 3: Parking Management System */}
      <section className="project-section">
        <div className="project-content project-content-no-image">
          <div className="project-text">
            <h1>Parking Management System</h1>
            <p>
              Our Parking Management System is an integrated solution designed to streamline parking operations for businesses and municipalities. Developed by Goodwish Engineering, this system enables parking staff to generate entry and exit tickets, manage vehicle records, and visualize financial data through interactive graphs and reports. With a focus on efficiency and transparency, the system helps operators optimize parking space usage while providing clear insights into revenue and operational performance.
            </p>
            <p className="project-note">
              This is a private project for our clients. Contact us to learn more or request a demo.
            </p>
            <a href="#contact" className="project-link">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Face Attendance App */}
      <section className="project-section">
        <div className="project-content project-content-no-image">
          <div className="project-text">
            <h1>Face Attendance App</h1>
            <p>
              The Face Attendance App, developed for Guthi Sansthan, is a cutting-edge mobile application available on both Android and iOS platforms. Utilizing advanced facial recognition technology, this app streamlines attendance tracking for employees, replacing traditional methods with a fast, secure, and contactless solution. Goodwish Engineering built this app to enhance operational efficiency while ensuring accuracy and ease of use, making it an ideal tool for modern workforce management.
            </p>
            <p className="project-note">
              This is a private project for our clients. Contact us to learn more or request a demo.
            </p>
            <a href="#contact" className="project-link">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: File Tracking System */}
      <section className="project-section">
        <div className="project-content project-content-no-image">
          <div className="project-text">
            <h1>File Tracking System</h1>
            <p>
              The File Tracking System, created for Guthi Sansthan, is a digital solution that modernizes document management within the organization. This system, developed by Goodwish Engineering, enables efficient tracking and processing of important files, reducing manual errors and improving workflow transparency. With features like real-time status updates and secure access controls, the File Tracking System ensures that critical documents are managed effectively, supporting Guthi Sansthan’s mission to preserve cultural heritage through streamlined operations.
            </p>
            <p className="project-note">
              This is a private project for our clients. Contact us to learn more or request a demo.
            </p>
            <a href="#contact" className="project-link">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      {/* Full-screen image modal */}
      {fullScreenImage && (
        <div className="fullscreen-modal" onClick={closeFullScreen}>
          <div className="fullscreen-modal-content">
            <img src={fullScreenImage} alt="Full-screen project screenshot" />
            <button className="fullscreen-modal-close" onClick={closeFullScreen}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;