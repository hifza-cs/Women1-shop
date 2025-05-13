import React, { useState } from 'react';
import './Faq.css';
import logoImage from '../assets/logo5.jpg';

const faqData = [
  {
    question: "How can I start my own business on this platform?",
    answer: "You can start by signing up and filling out your profile. From there, you'll gain access to resources and tools to help launch your business."
  },
  {
    question: "Is there any cost to join?",
    answer: "No, joining our community is absolutely free. We believe in empowering every woman entrepreneur."
  },
  {
    question: "Can I sell handmade items?",
    answer: "Absolutely! Our platform encourages creativity, including handmade products, digital goods, and more."
  },
  {
    question: "How do I get featured on the home page?",
    answer: "We regularly feature active members with inspiring stories. Stay engaged, and you might be next!"
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-content">
        <div className="faq-left">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className={`arrow ${activeIndex === index ? 'rotate' : ''}`}>&#9662;</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-right">
          <img src={logoImage} alt="FAQ Illustration" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
