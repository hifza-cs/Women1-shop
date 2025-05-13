import React from 'react';
import { Link } from 'react-router-dom';

const WebsitePurposeDetail = () => {
  return (
    <div className="details-page">
      <div className="details-card">
        <h1 className="details-heading">Why This Website?</h1>
        <p className="details-subheading">
          This website is built with one goal in mind: to be a launchpad for women-led fashion and businesses.
          It’s not just an online store — it’s a movement. We provide a platform to promote your brand, 
          share your voice, and grow your business with the tools and community support you need.
        </p>
        <Link to="/about" className="details-btn">← Back to About</Link>
      </div>
    </div>
  );
};

export default WebsitePurposeDetail;
