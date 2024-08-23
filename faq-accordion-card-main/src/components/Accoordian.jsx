import React, { useState } from 'react';
import women from '../images/illustration-woman-online-mobile.svg';
import './accordian.css';
import downarrow from '../images/icon-arrow-down.svg';
import womenDesktop from '../images/illustration-woman-online-desktop.svg';


const Accoordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='container'>
      <div className="imgBox">
        <img className='img-mobile image' src={women} alt="Illustration" />
        
        <img src={womenDesktop} className='img-desktop image' alt="Illustration" />
       
        
        
       
      </div>
      <div className="textBox">
        <h1>FAQ</h1>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-heading"
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.question}</h3><p >{activeIndex===index ? <img src={downarrow}/> : '^'}</p>
              </button>
              <div 
                className={`faq-content ${activeIndex === index ? 'active' : ''}`}
                style={{ maxHeight: activeIndex === index ? '1000px' : '0' }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "How many team members can I invite?",
    answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
  },
  {
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "How do I reset my password?",
    answer: "Click 'Forgot password' from the login page or 'Change password' from your profile page. A reset link will be emailed to you."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes! Send us a message and we’ll process your request no questions asked."
  },
  {
    question: "Do you provide additional support?",
    answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
  }
];

export default Accoordian;
