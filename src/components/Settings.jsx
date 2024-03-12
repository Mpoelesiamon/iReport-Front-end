// Settings.jsx
import React from 'react';
import './FormStyles.css'; 
import NavBar from './NavBar';

const Settings = () => {
  return (
    <div className="settings-page">
      <NavBar />
      <div className="description-section">
        <h1> About Us </h1>

        <p>Welcome to iReport, your go-to platform for reporting problems and instances of corruption or corruption-linked cases.</p>

<p>iReport provides a secure and user-friendly environment for individuals to raise concerns, flag issues, and shine a light on wrongdoing. Whether it's a case of financial malpractice, bureaucratic inefficiency, or ethical misconduct, iReport empowers users to make their voices heard and contribute to a more transparent and accountable society.</p>

<p>Our platform is designed to ensure anonymity and confidentiality, allowing users to report with confidence, free from fear of reprisal. Reports are carefully vetted and investigated, with a commitment to integrity and impartiality at every step of the process.</p>

<p>Together, we're working towards a world where corruption is exposed, justice is served, and positive change is realized. Join us on iReport and be a part of the solution.</p>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-section">
        <h2>Contact Us</h2>
      </div>

<div className="contact-section">
        <h2>0700 000 000 / +254 700 000 000</h2>
      </div>
      

      {/* Social Media Icons Section */}
      <div className="social-media-icons">
        <h2>Follow Us on Social Media</h2>
        <div className="icons">
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/"><i className="fab fa-facebook"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Settings;
