import React from 'react';
import { Link } from 'react-router-dom';



const GetStartedDetail = () => {
  return (
    <div className="details-page">
      <div className="details-card">
        <h1 className="details-heading">Ready to Start?</h1>
        <p className="details-subheading">
          Join hundreds of women who are building their dream brands. When you get started with us,
          you’re not just creating a store — you’re joining a movement. With mentorship, tools, and visibility,
          we help you turn your passion into a professional business.
        </p>
        <Link to="/signup" className="details-btn">Sign Up Now</Link>
        <br />
        <Link to="/about" className="back-link">← Back to About</Link>
      </div>
    </div>
  );
};

export default GetStartedDetail;
