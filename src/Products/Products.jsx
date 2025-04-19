import React from 'react';
import './Products.css';
import wishchatImage from '../assets/wishchat.png'; 

function Products() {
  return (
    <div className="products-container">
      {/* Header Section */}
      <section className="products-header">
        <h1>WishChat</h1>
        <p>
          Revolutionize Your Customer Engagement with AI-Powered Chatbots
        </p>
      </section>

      {/* Main Product Showcase */}
      <section className="product-showcase">
        <div className="product-card">
          <div className="product-content">
            <div className="product-text">
              <h2>Unleash the Power of WishChat</h2>
              <p>
                WishChat is your ultimate chatbot creation agent, empowering businesses to build intelligent, AI-driven chatbots with ease. Seamlessly deploy across websites, WhatsApp, and other social media platforms to engage customers 24/7, automate responses, and boost conversions.
              </p>
              <ul className="product-features">
                <li>📢 Create chatbots in minutes with an intuitive drag-and-drop interface</li>
                <li>🌐 Deploy on websites, WhatsApp, and social media platforms effortlessly</li>
                <li>🤖 AI-powered responses for smarter customer interactions</li>
                <li>📊 Analytics dashboard to track engagement and performance</li>
                <li>🔒 Secure and scalable for businesses of all sizes</li>
              </ul>
              <a href="https://wishchat.goodwish.com.np" className="product-cta">
                Try WishChat Now
              </a>
            </div>
            <div className="product-image">
              <img src={wishchatImage} alt="WishChat Interface Screenshot" />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Customer Experience?</h2>
        <p>
          Join thousands of businesses using WishChat to engage, convert, and grow. Get started today!
          <br/>To try wishchat you can go to the official website.<br/> For Enterprise solutions please contact the 
          Goodwish Engineering team using the contact information given below.  
        </p>
        <a href="https://wishchat.goodwish.com.np" className="product-cta">
          Get Started with WishChat
        </a>
      </section>
    </div>
  );
}

export default Products;