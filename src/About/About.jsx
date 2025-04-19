// AboutUs.jsx
import React from 'react';
import './AboutUs.css';
import ceo from  '../assets/teams/ceo.png'

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Section 1: Company Description */}
      <section className="company-description">
        <h1>About Goodwish Engineering</h1>
        <p>
          Goodwish Engineering is a pioneering Nepalese startup, dedicated to revolutionizing the tech landscape through innovative AI and software solutions. We specialize in software development, hardware integrations, and building cutting-edge products tailored to the needs of our clients. From creating AI agents like WishChat—a powerful chatbot deployment platform—to developing impactful solutions such as websites for Abroad Unbox and Guthi Sansthan, parking management systems, and face attendance apps, we are committed to empowering businesses and communities. At Goodwish Engineering, we blend creativity, technology, and a deep understanding of local challenges to drive progress and build a self-reliant technological future for Nepal.
        </p>
      </section>

      {/* Section 2: Vision and Mission */}
      <section className="vision-mission">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We envision a future where Nepalese innovators lead the global tech revolution, confidently building and mastering the new age of AI and software. We aim to inspire and enable the next generation of creators to shape a world powered by homegrown technology.
          </p>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to ensure that Nepal, step by step, builds its own AI and software ecosystems, reducing reliance on external solutions. We are dedicated to creating accessible, innovative, and sustainable tech solutions that empower Nepalese businesses, government institutions, and individuals to thrive in the digital era.
          </p>
        </div>
      </section>

      {/* Section 3: Message from CEO */}
      <section className="ceo-message">
        <h2>Message from Our CEO</h2>
        <div className="ceo-content">
          <div className="ceo-text">
            <p>
              At Goodwish Engineering, we are on a mission to redefine Nepal's technological future. As a proud Nepalese startup, we are committed to building innovative AI and software solutions that empower our communities, businesses, and institutions. Technology, to me, is more than just tools—it's a bridge to opportunity, a catalyst for progress, and a means to create a self-reliant Nepal.
            </p>
            <p>
              My journey in robotics and AI, from leading the Robotics Academy of Nepal to working on transformative projects for organizations like Guthi Sansthan, has taught me the power of innovation to solve real-world challenges. At Goodwish Engineering, we bring this passion to life through solutions like WishChat—our AI agent that helps businesses automate and engage with ease—and through bespoke software that supports everything from cultural preservation to modern infrastructure.
            </p>
            <p>
              Our vision is clear: to enable Nepalese innovators to lead the global tech revolution, building and mastering the new age of AI and software. We are dedicated to ensuring that, step by step, Nepal creates its own technological ecosystem, reducing reliance on external solutions. Whether it's developing intelligent chatbots, creating seamless websites, or integrating hardware solutions, we are here to turn your dreams into reality.
            </p>
            <p>
              Join us on this journey to shape a future where Nepal's tech talent shines on the global stage. Together, let's innovate, empower, and build a brighter tomorrow.
            </p>
            <p className="ceo-signature">— Bikrant Karki, CEO</p>
          </div>
          <div className="ceo-image">
            <img src={ceo} alt="CEO Bikrant Karki" />
          </div>
        </div>
      </section>

       {/* Section 4: Our Projects */}
       <section className="projects">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="project-item">
            <div className="project-item-content">
              <h3>Abroad Unbox Website</h3>
              <p>
                A comprehensive website for a consultancy specializing in study abroad programs, helping students navigate international education opportunities with ease.
              </p>
            </div>
            <a href="/projects" className="project-learn-more">Learn More</a>
          </div>
          <div className="project-item">
            <div className="project-item-content">
              <h3>Guthi Sansthan Website</h3>
              <p>
                An official web platform for Nepal's major cultural government office, preserving and promoting the nation's heritage through digital transformation.
              </p>
            </div>
            <a href="/projects" className="project-learn-more">Learn More</a>
          </div>
          <div className="project-item">
            <div className="project-item-content">
              <h3>Parking Management System</h3>
              <p>
                An integrated solution that enables parking staff to generate entry/exit tickets, manage vehicles, and visualize financial data through interactive graphs and reports.
              </p>
            </div>
            <a href="/projects" className="project-learn-more">Learn More</a>
          </div>
          <div className="project-item">
            <div className="project-item-content">
              <h3>Face Attendance App</h3>
              <p>
                A cutting-edge mobile application for Guthi Sansthan available on Android and iOS, utilizing facial recognition technology to streamline attendance tracking.
              </p>
            </div>
            <a href="/projects" className="project-learn-more">Learn More</a>
          </div>
          <div className="project-item">
            <div className="project-item-content">
              <h3>File Tracking System</h3>
              <p>
                A digital solution for Guthi Sansthan that modernizes document management, enabling efficient tracking and processing of important files throughout the organization.
              </p>
            </div>
            <a href="/projects" className="project-learn-more">Learn More</a>
          </div>
        </div>
      </section>

      {/* Section 5: Products in Brief (Only WishChat) */}
      <section className="products">
        <h2>Our Products</h2>
        <div className="products-grid">
          <div className="product-item">
            <div className="product-item-content">
              <h3>WishChat</h3>
              <p>
                WishChat is our flagship AI agent, designed to help businesses create and deploy intelligent chatbots with ease. It's your solution for seamless customer engagement and automation.
              </p>
            </div>
            <a href="/products" className="product-learn-more">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;