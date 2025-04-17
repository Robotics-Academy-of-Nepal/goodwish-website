import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';

// Import event images
import event1 from '../assets/events/1.jpg';
import event2 from '../assets/events/2.jpg';
import event3 from '../assets/events/3.jpg';
import event4 from '../assets/events/4.jpg';
import event5 from '../assets/events/5.jpg';
import event6 from '../assets/events/6.jpg';
import event7 from '../assets/events/7.jpg';
import event8 from '../assets/events/8.jpg';
import event9 from '../assets/events/9.jpg';

// Import partner logos
import partner1 from '../assets/partners/tools-logo.jpg';
import partner2 from '../assets/partners/ran-logo.png';
import partner3 from '../assets/partners/innovativeGhar-logo.png';
import partner4 from '../assets/partners/NAST-logo.png';
import partner5 from '../assets/partners/ideabreed-logo.png';
import partner6 from '../assets/partners/jec-logo.png';



// Import client logos (placeholder - replace with actual client images)
import client1 from '../assets/clients/abroad-logo.png';
import client2 from '../assets/clients/guthi-logo.png';
import client3 from '../assets/clients/mandala-logo.png';
import client4 from '../assets/clients/ncm-logo.png';
import client5 from '../assets/clients/hansadhwani-logo.png';

function Home() {
  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
  };

  // Event images with captions
  const events = [
    { image: event1, caption: 'AI International Conference' },
    { image: event2, caption: 'Our Robots with CAN team at AI confernce' },
    { image: event3, caption: '' },
    { image: event4, caption: '' },
    { image: event5, caption: '' },
    { image: event6, caption: 'Goodwish Team with their Robot.' },
    { image: event7, caption: '' },
    { image: event8, caption: 'Goodwish Team at ICT semi-finals.' },
    { image: event9, caption: 'Goodwish: Robotics Sponsor of ICT Awards 2081' },
  ];

  // Partner data
  const partners = [
    {logo: partner1,name: 'The Tools Engineering'},
    {logo: partner2,name: 'RAN(Robotics Academy of Nepal)'},
    {logo: partner3,name: 'Innovative Ghar Nepal'},
    {logo: partner4,name: 'NAST(Nepal Academy of Science and Technology)'},
    {logo: partner5,name: 'Idea Breed Technology'},
    {logo: partner6,name: 'Janakpur Engineering College'},
  ];

  // Client data (placeholder - replace with actual client information)
  const clients = [
    { logo: client1, name: 'Abroad Unbox' },
    { logo: client2, name: 'Guthi Sansthan' },
    { logo: client3, name: 'Mandala Theater' },
    { logo: client4, name: 'National College of Management (NCM)' },
    { logo: client5, name: 'Hansadhwani Theater' },
  ];

  return (
    <div className="home-container">
      {/* Header/Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="fade-in">Welcome to Goodwish Engineering</h1>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            Innovating the Future with Technology
          </p>
          
        </div>
      </section>

      {/* Image Slider for Company Events */}
      <section className="events-section">
        <div className="events-content">
          <h2 className="fade-in">Our Journey in Action</h2>
          <div className="event-slider">
            <Slider {...sliderSettings}>
              {events.map((event, index) => (
                <div key={index} className="event-slide">
                  <div className="event-overlay"></div>
                  <img src={event.image} alt={event.caption} />
                  <p className="event-caption">{event.caption}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="partners-content">
          <h2 className="fade-in">Our Trusted Partners</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card fade-in" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <img src={partner.logo} alt={`${partner.name} Logo`} className="partner-logo" />
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="clients-content">
          <h2 className="fade-in">Our Clients</h2>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-card fade-in" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <img src={client.logo} alt={`${client.name} Logo`} className="client-logo" />
                <h3>{client.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Work */}
      <section className="explore-work">
        <div className="explore-content">
          <h2 className="fade-in">See What We've Built</h2>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            From cultural preservation to modern infrastructure, explore our innovative projects.
          </p>
          <div className="hero-ctas fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/projects" className="hero-cta">Explore Our Work</Link>
            {/* <Link to="/contact" className="hero-cta">Contact Us</Link> */}
          </div>
        </div>
      </section>

      {/* WishChat Teaser */}
      <section className="wishchat-teaser">
        <div className="wishchat-content">
          <h2 className="fade-in">Meet WishChat</h2>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            Our AI-powered chatbot creation agent—deploy on websites, WhatsApp, and more.
          </p>
          <div className="hero-ctas fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/products" className="hero-cta">Discover Wishchat</Link>
            {/* <Link to="/contact" className="hero-cta">Contact Us</Link> */}
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="fade-in">Let's Build Something Amazing Together</h2>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            Ready to innovate? Contact us to discuss your next project or try WishChat today.
          </p>
          <div className="cta-buttons fade-in" style={{ animationDelay: '0.4s' }}>
            {/* <Link to="/contact" className="cta-button">Contact Us</Link>
            <Link to="/products" className="cta-button">Try WishChat</Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;