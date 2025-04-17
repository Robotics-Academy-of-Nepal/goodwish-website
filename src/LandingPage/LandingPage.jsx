import './LandingPage.css';
import { TypeAnimation } from 'react-type-animation';
import { VscChevronRight } from "react-icons/vsc";
import logo from '../assets/logo.png';
import { useNavigate } from "react-router";

function LandingPage() {

  let navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="wave-background"></div>
      
      <div className="content">
        <div className="logo-container">
            <img src={logo} alt="Goodwish Engineering Logo" className="logo" />
        </div>
        <div className="main-content">
          <div className="dynamic-texts">
            <TypeAnimation
              sequence={[
                'Welcome to Goodwish Engineering', // First text
                2000, // Pause for 2 seconds after typing
                '', // Clear the text
                500, // Brief pause before next text
                'You Dream, We Design', // Second text
                2000, // Pause for 2 seconds
                '', // Clear the text
                500, // Brief pause before restarting
              ]}
              speed={50} // Typing speed (ms per character)
              repeat={Infinity} // Loop forever
              cursor={true} // Show blinking cursor
              className="type-animation"
              wrapper="div" // Use div wrapper for better responsiveness
            />
          </div>
          <p>Innovating the Future with Technology</p>
          <div className="button-container">
            <button onClick={() => navigate(`/home`)}>
              <span className="button-text">Go to website</span>
              <VscChevronRight className="button-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;