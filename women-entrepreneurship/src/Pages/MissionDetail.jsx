import React from 'react';
import { Link } from 'react-router-dom';
import './DetailPages.css';

const MissionDetail = () => {
  return (
    <div className="detail-wrapper">
      <div className="detail-hero">
        <h1 className="detail-heading">Empowering Women Entrepreneurs</h1>
        <p className="detail-subtext">
          Our mission is to uplift and support women-led startups in fashion, beauty, and lifestyle
          by providing a platform where their voices are heard and their dreams are realized.
        </p>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/XZ832ND5EXo"
            title="Empowering Her, Empowering Pakistan"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="detail-extra-text">
          We believe in the power of women who dream big. By offering tools, mentorship, and visibility,
          we aim to create a thriving ecosystem for women entrepreneurs across Pakistan. Together,
          we can build a future where every woman has the confidence, support, and resources to succeed.
        </p>

        <Link to="/about" className="back-btn">← Back to About</Link>
      </div>
    </div>
  );
};

export default MissionDetail;
