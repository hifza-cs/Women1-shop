import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const [sales, setSales] = useState(0);
  const [dailyUsers, setDailyUsers] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);

  // Simulate animated count-up
  useEffect(() => {
    const animate = (setFunc, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 100);
        if (count >= target) {
          setFunc(target);
          count = 0; // Reset the counter to repeat the animation
        } else {
          setFunc(count);
        }
      }, 20);

      // Cleanup function to stop interval when component unmounts
      return () => clearInterval(interval);
    };

    // Start the animation for all three stats
    animate(setSales, 20000);        // e.g., 20,000 sales
    animate(setDailyUsers, 300);     // e.g., 300 new daily users
    animate(setTotalMembers, 5000);  // e.g., 5,000+ members
  }, []); // Empty dependency array to run the effect once on component mount

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="main-heading">About Us</h1>

        {/* Our Mission */}
        <section className="about-card slide-in">
          <h2 className="section-title">
            Our Mission
            <Link to="/mission-detail" className="heading-link">
              <span className="detail-arrow">➤</span>
            </Link>
          </h2>
          <p className="section-text">
            Our mission is to empower women by providing a platform where they can express their creativity, showcase their talent, and sell their products. We believe in supporting women entrepreneurs to achieve their goals, while promoting self-expression and self-reliance.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="about-card zoom-in">
          <h2 className="section-title">
            Why Choose Us?
            <Link to="/website-purpose-detail" className="heading-link">
              <span className="detail-arrow">➤</span>
            </Link>
          </h2>
          <ul className="reasons-list">
            <li>✅ Empowering Women Entrepreneurs</li>
            <li>✅ Easy to Register and Start Your Own Store</li>
            <li>✅ Showcase Your Talent and Products to a Wider Audience</li>
            <li>✅ Support and Guidance to Grow Your Business</li>
          </ul>
        </section>

        {/* Journey Timeline with Animated Numbers */}
        <section className="about-card fade-in">
          <div className="journey-stats">
            <div className="stat-box">
              <h3>{sales.toLocaleString()}</h3>
              <p>Products Sold</p>
            </div>
            <div className="stat-box">
              <h3>{dailyUsers}</h3>
              <p>New Users Today</p>
            </div>
            <div className="stat-box">
              <h3>{totalMembers.toLocaleString()}+</h3>
              <p>Community Members</p>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="about-card slide-in">
          <h2 className="section-title">
            Our Future Vision
            <Link to="/get-started-detail" className="heading-link">
              <span className="detail-arrow">➤</span>
            </Link>
          </h2>
          <p className="section-text">
            Our vision is to create an inclusive platform where every woman has the opportunity to succeed. We’re not just about fashion, we’re about creating a movement that supports women in their entrepreneurial journey, from showcasing their products to offering services and turning their passions into profit.
          </p>
          <Link to="/signup">
            <button className="cta-button">Join Us</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
