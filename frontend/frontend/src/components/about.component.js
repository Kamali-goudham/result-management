import React from 'react';
// import './App.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
       
        <h1>About Us</h1>
        <p>
        We are dedicated to providing accurate and timely results for all our users. 
        Our result portal aims to make it easy for students and faculty to access their exam results online
        </p>
      </div>
      
      <div className="address-section">
        <h2>Our Address</h2>
        <p>East coast Road, Pillaichavady, Puducherry, 605 014</p>
      </div>
      
      <div className="contact-section">
        <h2>Contact Us</h2>
        <ul>
          <li><i className="fa fa-phone"></i> 0413-2655281-288</li>
          <li><i className="fa fa-envelope"></i> info@ptuniv.edu.in</li>
        </ul>
      </div>
      
      <div className="follow-section">
        <h2>Follow Us</h2>
        <ul className="social-links">
          <li><a href="https://www.facebook.com/PTU.Pondicherry/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i> Facebook</a></li>
          <li><a href="https://www.youtube.com/channel/UC_KX66VEKIHunrHSsQwcNEw" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i> YouTube</a></li>
          <li><a href="https://www.instagram.com/puducherry_tech_university/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </section>
  );
}

export default About;
