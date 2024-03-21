import React from 'react';
import NavBar from './NavBar';

const About = () => {
  return (
    <div className="settings-page">
      <NavBar />
      <div style={styles.container}>
        <h2 style={styles.title}>About Us</h2>
        <div style={styles.content}>
          <p>Welcome to iReport, your go-to platform for reporting problems and instances of corruption or corruption-linked cases.</p>
          <p>iReport provides a secure and user-friendly environment for individuals to raise concerns, flag issues, and shine a light on wrongdoing. Whether it's a case of financial malpractice, bureaucratic inefficiency, or ethical misconduct, iReport empowers users to make their voices heard and contribute to a more transparent and accountable society.</p>
          <p>Our platform is designed to ensure anonymity and confidentiality, allowing users to report with confidence, free from fear of reprisal. Reports are carefully vetted and investigated, with a commitment to integrity and impartiality at every step of the process.</p>
          <p>Together, we're working towards a world where corruption is exposed, justice is served, and positive change is realized. Join us on iReport and be a part of the solution.</p>
        </div>
      </div>
    </div>
  );
}

export default About;

const styles = {
  container: {
    width: '40%',
    margin: 'auto',
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '28px', // Increased font size
    fontWeight: 'bold', // Bold font weight
    marginBottom: '20px',
  },
  content: {
    fontSize: '18px',
  }
};
