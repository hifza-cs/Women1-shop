import React from 'react';
import './Home.css';
import heroVideo from '../assets/video.mp4';
import { useNavigate } from 'react-router-dom';
import About from './About';
import FAQ from '../components/FAQ';

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <div className="home-hero">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <div className="hero-text">
            <h1 className="fade-in">Empowering Women Entrepreneurs</h1>
            <p className="fade-in delay-1">
              Welcome to a platform created to uplift, inspire, and enable women to turn their dreams into thriving realities.
              <br /><br />
              Explore opportunities, grow your network, and let your brand shine — because your voice and your vision matter.
            </p>
            <button className="shop-now-btn fade-in delay-2" onClick={handleStartClick}>
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
      <FAQ />
      <About />
    </>
  );
};

export default Home;