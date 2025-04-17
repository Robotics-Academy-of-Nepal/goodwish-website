import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './LandingPage/LandingPage.jsx';
import Navbar from './Navbar/Navbar.jsx';
import AboutUs from './About/About.jsx';
import Projects from './Projects/Projects.jsx';
import Teams from './Teams/Teams.jsx';
import Products from './Products/Products.jsx';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Chatbot from './Chatbot/Chatbot.jsx';
import './App.css';

// Create a wrapper component to use useLocation
function AppContent() {
  const location = useLocation(); // Get the current route

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Trigger when pathname changes

  // Render Navbar and Footer only if the current path is not "/"
  const isLandingPage = location.pathname === '/';

  return (
    <div className={isLandingPage ? '' : 'app-container'}>
      {!isLandingPage && <Navbar />}
      <main className={isLandingPage ? '' : 'main-content'}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      {!isLandingPage && <Footer />}
      {!isLandingPage && <Chatbot />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;